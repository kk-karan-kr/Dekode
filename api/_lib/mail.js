import nodemailer from 'nodemailer';

const requiredEnvVars = [
  'SMTP_USER',
  'MAIL_FROM',
  'MAIL_TO',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GOOGLE_REFRESH_TOKEN',
];

const ensureEnvVars = () => {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required email environment variables: ${missing.join(', ')}`);
  }
};

const createTransporter = () => {
  ensureEnvVars();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SMTP_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  });
};

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const normalizeBody = (req) => {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return req.body;
};

const sendMail = async ({ subject, replyTo, text, html }) => {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo,
    subject,
    text,
    html,
  });
};

export { escapeHtml, normalizeBody, sendMail };
