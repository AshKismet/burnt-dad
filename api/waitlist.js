// Adds an email to the Burnt Dad cookbook waitlist (Mailchimp audience).
//
//   POST /api/waitlist  { email }  ->  { ok: true }
//
// Required env: MAILCHIMP_API_KEY

const LIST_ID = 'ca8ad32200';
const MAILCHIMP_URL = `https://us9.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://burntdad.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  if (!process.env.MAILCHIMP_API_KEY) {
    console.error('MAILCHIMP_API_KEY is not set');
    return res.status(500).json({ error: 'config_error' });
  }

  // Mailchimp uses HTTP Basic auth: any username + the API key as password.
  const auth = 'Basic ' + Buffer.from('anystring:' + process.env.MAILCHIMP_API_KEY).toString('base64');

  try {
    const mcRes = await fetch(MAILCHIMP_URL, {
      method: 'POST',
      headers: { 'Authorization': auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email.trim(), status: 'subscribed' })
    });
    const data = await mcRes.json().catch(() => ({}));

    if (mcRes.ok) return res.status(200).json({ ok: true });

    // Already subscribed is a success from the visitor's point of view.
    if (data && data.title === 'Member Exists') {
      return res.status(200).json({ ok: true, already: true });
    }

    console.error('Mailchimp error:', mcRes.status, data && (data.detail || data.title));
    return res.status(502).json({ error: 'mailchimp_error' });
  } catch (err) {
    console.error('Mailchimp fetch error:', err.message);
    return res.status(500).json({ error: 'fetch_error' });
  }
};
