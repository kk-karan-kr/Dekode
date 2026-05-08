import { escapeHtml, normalizeBody, sendMail } from './_lib/mail.js';
import {
  buildDiscoveryHtml,
  buildDiscoveryText,
  validateDiscoveryData,
} from './_lib/discoverySubmission.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const body = normalizeBody(req);
    const submissionType = body.submissionType?.trim() || 'contact';
    const fullName = body.fullName?.trim() || '';
    const email = body.email?.trim() || '';
    const company = body.company?.trim() || '';
    const lookingFor = body.lookingFor?.trim() || '';
    const message = body.message?.trim() || '';
    const website = body.website?.trim() || '';
    const discoveryData = body.discoveryData || {};

    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (submissionType === 'discovery') {
      const discoveryWebsite = discoveryData.website?.trim() || '';

      if (discoveryWebsite) {
        return res.status(200).json({ ok: true });
      }

      const validationError = validateDiscoveryData(discoveryData, emailPattern);

      if (validationError) {
        return res.status(400).json({ error: validationError });
      }

      const companyName = discoveryData.companyName?.trim() || 'Unknown Company';
      const contactEmail = discoveryData.contactEmail?.trim() || '';

      await sendMail({
        subject: `New Discovery Questionnaire - ${companyName}`,
        replyTo: contactEmail,
        text: buildDiscoveryText(discoveryData),
        html: buildDiscoveryHtml(discoveryData),
      });

      return res.status(200).json({ ok: true });
    }

    if (!fullName || !email || !lookingFor || !message) {
      return res.status(400).json({ error: 'Please complete all required fields.' });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const safeCompany = company || 'Not provided';

    await sendMail({
      subject: `New Contact Inquiry from ${fullName}`,
      replyTo: email,
      text: [
        'A new contact form inquiry was submitted.',
        '',
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company / Project: ${safeCompany}`,
        `Looking For: ${lookingFor}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New contact form inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company / Project:</strong> ${escapeHtml(safeCompany)}</p>
        <p><strong>Looking For:</strong> ${escapeHtml(lookingFor)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact endpoint send failed:', error);
    return res.status(500).json({ error: 'We could not send your message right now. Please try again shortly.' });
  }
}
