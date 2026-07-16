const Anthropic = require('@anthropic-ai/sdk');
const ws = require('ws');
const { createClient } = require('@supabase/supabase-js');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, {
  realtime: { transport: ws }
});

const rateLimitStore = {};

function getRateLimitKey(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 20;
  if (!rateLimitStore[ip]) rateLimitStore[ip] = [];
  rateLimitStore[ip] = rateLimitStore[ip].filter(t => now - t < windowMs);
  if (rateLimitStore[ip].length >= maxRequests) return false;
  rateLimitStore[ip].push(now);
  return true;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://burntdad.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = getRateLimitKey(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'rate_limited', message: 'Dad needs a break. Try again in an hour.' });
  }

  const { prompt, email } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  if (email) {
    const { data: user, error } = await supabase
      .from('users')
      .select('token_balance')
      .eq('email', email)
      .single();

    if (error || !user) {
      await supabase.from('users').insert({ email, token_balance: 9 });
    } else if (user.token_balance <= 0) {
      return res.status(402).json({ error: 'no_tokens' });
    } else {
      await supabase.from('users').update({ token_balance: user.token_balance - 1 }).eq('email', email);
    }
  }

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    });
    return res.status(200).json(response);
  } catch (err) {
    console.error('Anthropic API error:', err.message);
    return res.status(500).json({ error: 'api_error' });
  }
};
