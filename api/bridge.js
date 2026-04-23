import { escapeHtml, normalizeBody, sendMail } from './_lib/mail.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const body = normalizeBody(req);
    const email = body.email?.trim() || '';
    const website = body.website?.trim() || '';

    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    await sendMail({
      subject: 'New BRIDGE Interest Signup',
      replyTo: email,
      text: [
        'A new BRIDGE interest signup was submitted.',
        '',
        `Email: ${email}`,
      ].join('\n'),
      html: `
        <h2>New BRIDGE interest signup</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Bridge form send failed:', error);
    return res.status(500).json({ error: 'We could not save your interest right now. Please try again shortly.' });
  }
}
