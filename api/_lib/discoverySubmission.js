import { escapeHtml } from './mail.js';

const discoverySections = [
  {
    title: 'Section 1 · Company Overview',
    fields: [
      ['Company / Brand Name', 'companyName'],
      ['Industry / Sector', 'industrySector'],
      ['One sentence company summary', 'companySummary'],
      ['How long have you been in business?', 'businessDuration'],
      ['Where do you operate?', 'operatingLocations'],
    ],
  },
  {
    title: 'Section 2 · Goals & Purpose',
    fields: [
      ['Primary goals for the website', 'websiteGoals'],
      ['What success looks like in 6 months', 'successDefinition'],
      ['Hard deadlines', 'hardDeadlines'],
    ],
  },
  {
    title: 'Section 3 · Target Audience',
    fields: [
      ['Primary audience', 'primaryAudience'],
      ['Do you serve B2B, B2C, or both?', 'audienceType'],
      ['Primary action for visitors', 'primaryAction'],
      ['Secondary audiences', 'secondaryAudiences'],
    ],
  },
  {
    title: 'Section 4 · Brand & Visual Identity',
    fields: [
      ['Existing brand identity', 'brandIdentity'],
      ['Perception adjectives', 'brandAdjectives'],
      ['Tone of voice', 'toneOfVoice'],
      ['Competitor / inspiration websites', 'inspirationSites'],
      ['Disliked websites or styles', 'dislikedStyles'],
    ],
  },
  {
    title: 'Section 5 · Website Requirements',
    fields: [
      ['Required pages', 'requiredPages'],
      ['Special functionality', 'specialFunctionality'],
      ['Do you have a domain name?', 'hasDomain'],
      ['Domain / URL', 'domainUrl'],
      ['Preferred platform / CMS', 'preferredPlatform'],
      ['Who will manage the website after launch?', 'websiteManager'],
    ],
  },
  {
    title: 'Section 6 · Social Media Presence',
    fields: [
      ['Target social platforms', 'socialPlatforms'],
      ['Existing social accounts / URLs', 'existingSocialAccounts'],
      ['Planned content types', 'contentTypes'],
      ['Posting frequency', 'postingFrequency'],
      ['Who will manage social content?', 'socialManager'],
      ['Social reference profile', 'socialReference'],
    ],
  },
  {
    title: 'Section 7 · Budget & Next Steps',
    fields: [
      ['Approximate budget', 'budgetRange'],
      ['Ongoing support after launch', 'ongoingSupport'],
      ['Anything else we should know?', 'additionalContext'],
    ],
  },
  {
    title: 'Your Details',
    fields: [
      ['Full Name', 'contactFullName'],
      ['Email Address', 'contactEmail'],
      ['Role / Title', 'contactRole'],
      ['Phone', 'contactPhone'],
    ],
  },
];

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : 'Not provided';
  }

  if (typeof value === 'string') {
    return value.trim() || 'Not provided';
  }

  return value ? String(value) : 'Not provided';
};

const formatHtmlValue = (value) =>
  escapeHtml(formatValue(value)).replace(/\n/g, '<br />');

const buildDiscoveryText = (data) =>
  [
    'A new discovery questionnaire was submitted.',
    '',
    ...discoverySections.flatMap((section) => [
      section.title,
      ...section.fields.map(([label, key]) => `${label}: ${formatValue(data[key])}`),
      '',
    ]),
  ].join('\n');

const buildDiscoveryHtml = (data) =>
  [
    '<h2>New discovery questionnaire</h2>',
    ...discoverySections.map(
      (section) => `
        <section style="margin: 0 0 24px;">
          <h3 style="margin-bottom: 12px; color: #043364;">${escapeHtml(section.title)}</h3>
          ${section.fields
            .map(
              ([label, key]) => `
                <p style="margin: 0 0 8px;">
                  <strong>${escapeHtml(label)}:</strong><br />
                  ${formatHtmlValue(data[key])}
                </p>
              `,
            )
            .join('')}
        </section>
      `,
    ),
  ].join('');

const validateDiscoveryData = (data, emailPattern) => {
  const companyName = data.companyName?.trim() || '';
  const industrySector = data.industrySector?.trim() || '';
  const contactFullName = data.contactFullName?.trim() || '';
  const contactEmail = data.contactEmail?.trim() || '';

  if (!companyName || !industrySector || !contactFullName || !contactEmail) {
    return 'Please complete the required discovery form fields.';
  }

  if (!emailPattern.test(contactEmail)) {
    return 'Please enter a valid email address.';
  }

  return '';
};

export { buildDiscoveryHtml, buildDiscoveryText, validateDiscoveryData };
