const Stripe = require('stripe');
const ws = require('ws');
const { createClient } = require('@supabase/supabase-js');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
  realtime: { transport: ws }
});
const TOKENS_PER_PACK = 100;
const PRICE_CENTS = 299;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://burntdad.com');

  if (req.method === 'POST' && req.query.webhook === 'true') {
    const sig = req.headers['stripe-signature'];
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch(e) {
      return res.status(400).send(`Webhook error: ${e.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_email || session.metadata?.email;
      if (email) {
        const { data: user } = await supabase.from('users').select('token_balance').eq('email', email).single();
        const currentBalance = user?.token_balance || 0;
        await supabase.from('users').upsert({ email, token_balance: currentBalance + TOKENS_PER_PACK });
      }
    }
    return res.status(200).json({ received: true });
  }

  if (req.method === 'GET') {
    const email = req.query.email || null;
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Burnt Dad',
              description: '100 Immediate and Incredible Recipes. Feed the dad.',
            },
            unit_amount: PRICE_CENTS
          },
          quantity: 1
        }],
    mode: 'payment',
    customer_email: email || undefined,
    success_url: `https://burntdad.com/?purchase=success&email=${encodeURIComponent(email || '')}`,
    cancel_url: 'https://burntdad.com/?purchase=cancelled',
    metadata: { email: email || '' }
      });
      return res.redirect(303, session.url);
    } catch(e) {
      console.error('Stripe error:', e.message);
      return res.redirect('/?purchase=error');
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
