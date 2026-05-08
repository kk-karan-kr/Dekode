import React, { useEffect, useMemo, useRef, useState } from "react";
import { submitServerForm } from "../lib/submitServerForm";
import "./Discovery.css";

const websiteGoalOptions = [
  "Generate leads",
  "Sell products / e-commerce",
  "Build brand awareness",
  "Showcase portfolio / work",
  "Recruit talent",
  "Support / documentation",
  "Community / membership",
  "Investor relations",
];

const toneOfVoiceOptions = [
  "Professional",
  "Conversational",
  "Authoritative",
  "Playful / fun",
  "Empathetic",
  "Bold / edgy",
  "Minimalist",
  "Educational",
];

const requiredPageOptions = [
  "Home / Landing",
  "About / Team",
  "Products / Services",
  "Portfolio / Case Studies",
  "Blog / News",
  "Pricing",
  "Careers",
  "Contact",
  "FAQ",
  "Legal / Privacy",
  "Client Portal / Login",
  "E-commerce / Shop",
];

const specialFunctionalityOptions = [
  "Contact / lead form",
  "Booking / scheduling",
  "Live chat / chatbot",
  "Newsletter signup",
  "Payment gateway",
  "User accounts / login",
  "Search functionality",
  "Multi-language",
  "Analytics dashboard",
  "CRM integration",
];

const socialPlatformOptions = [
  "LinkedIn",
  "Instagram",
  "X / Twitter",
  "Facebook",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Threads",
  "Reddit / communities",
  "WhatsApp / Telegram",
];

const contentTypeOptions = [
  "Educational / tips",
  "Product / service updates",
  "Company culture",
  "Customer stories",
  "Industry news",
  "Behind the scenes",
  "Promotions / offers",
  "Events / webinars",
  "Short-form video",
  "Long-form video",
];

const sectionSummaries = [
  "Company overview",
  "Goals and purpose",
  "Target audience",
  "Brand and visual identity",
  "Website requirements",
  "Social media presence",
  "Budget and next steps",
];

const initialFormState = {
  companyName: "",
  industrySector: "",
  companySummary: "",
  businessDuration: "",
  operatingLocations: [],
  websiteGoals: [],
  successDefinition: "",
  hardDeadlines: "",
  primaryAudience: "",
  audienceType: "",
  primaryAction: "",
  secondaryAudiences: "",
  brandIdentity: "",
  brandAdjectives: "",
  toneOfVoice: [],
  inspirationSites: "",
  dislikedStyles: "",
  requiredPages: [],
  specialFunctionality: [],
  hasDomain: "",
  domainUrl: "",
  preferredPlatform: "",
  websiteManager: "",
  socialPlatforms: [],
  existingSocialAccounts: "",
  contentTypes: [],
  postingFrequency: "",
  socialManager: "",
  socialReference: "",
  budgetRange: "",
  ongoingSupport: "",
  additionalContext: "",
  contactFullName: "",
  contactEmail: "",
  contactRole: "",
  contactPhone: "",
  website: "",
};

const ChoiceGroup = ({
  label,
  hint,
  options,
  type = "checkbox",
  name,
  value,
  onToggle,
}) => (
  <div className="discovery-field-stack">
    <div className="discovery-field-label-row">
      <label className="discovery-field-label">{label}</label>
      {hint ? <span className="discovery-field-hint">{hint}</span> : null}
    </div>
    <div className="discovery-choice-grid">
      {options.map((option) => {
        const isChecked =
          type === "checkbox" ? value.includes(option) : value === option;

        return (
          <label
            key={option}
            className={`discovery-choice-card ${isChecked ? "selected" : ""}`}
          >
            <input
              type={type}
              name={name}
              checked={isChecked}
              onChange={() => onToggle(name, option, type)}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  </div>
);

const Discovery = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const cooldownTimerRef = useRef(null);

  const requiredCount = useMemo(
    () =>
      [
        "companyName",
        "industrySector",
        "contactFullName",
        "contactEmail",
      ].filter((field) => formData[field].trim()).length,
    [formData],
  );

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      return undefined;
    }

    cooldownTimerRef.current = setTimeout(() => {
      setCooldownSeconds((current) => current - 1);
    }, 1000);

    return () => clearTimeout(cooldownTimerRef.current);
  }, [cooldownSeconds]);

  useEffect(
    () => () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    },
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormStatus({ type: "", message: "" });
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleChoiceToggle = (name, option, type) => {
    setFormStatus({ type: "", message: "" });
    setFormData((current) => {
      if (type === "radio") {
        return {
          ...current,
          [name]: option,
        };
      }

      const currentValues = current[name];
      const nextValues = currentValues.includes(option)
        ? currentValues.filter((item) => item !== option)
        : [...currentValues, option];

      return {
        ...current,
        [name]: nextValues,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      await submitServerForm(
        "/api/contact",
        {
          submissionType: "discovery",
          discoveryData: formData,
        },
        "We could not send your discovery questionnaire right now.",
      );

      setFormStatus({
        type: "success",
        message:
          "Your discovery questionnaire has been sent. We will review it and come back with the right next step.",
      });
      setCooldownSeconds(5);
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message ||
          "We could not send your discovery questionnaire right now.",
      });
      setCooldownSeconds(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="discovery-page">
      <section className="discovery-hero">
        <div className="discovery-hero-orb discovery-hero-orb--blue"></div>
        <div className="discovery-hero-orb discovery-hero-orb--gold"></div>
        <div className="container discovery-hero-content">
          <div className="discovery-hero-copy">
            <p className="discovery-kicker">DISCOVERY DOCUMENT</p>
            <h1 className="discovery-title">
              Website &amp; Social Presence Brief
            </h1>
            <p className="discovery-subtitle">
              Complete this questionnaire so we can build a digital presence
              that truly represents your company. There are no wrong answers —
              be as candid as possible.
            </p>
          </div>
          <aside className="discovery-hero-card">
            <h2>What this covers</h2>
            <ul>
              {sectionSummaries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="discovery-progress">
              <span>Required fields completed</span>
              <strong>{requiredCount} / 4</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="discovery-form-section">
        <div className="container discovery-form-shell">
          <form className="discovery-form" onSubmit={handleSubmit}>
            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 1</span>
                <h2>Company Overview</h2>
              </div>
              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="companyName"
                  >
                    Company / Brand Name *
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="discovery-input"
                    required
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="industrySector"
                  >
                    Industry / Sector *
                  </label>
                  <input
                    id="industrySector"
                    name="industrySector"
                    value={formData.industrySector}
                    onChange={handleChange}
                    className="discovery-input"
                    required
                  />
                </div>
                <div className="discovery-field-stack discovery-grid-span">
                  <label
                    className="discovery-field-label"
                    htmlFor="companySummary"
                  >
                    In one sentence, what does your company do?
                  </label>
                  <span className="discovery-field-hint">
                    Format: We help [who] to [do what] by [how].
                  </span>
                  <textarea
                    id="companySummary"
                    name="companySummary"
                    value={formData.companySummary}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
              </div>

              <ChoiceGroup
                label="How long have you been in business?"
                name="businessDuration"
                type="radio"
                value={formData.businessDuration}
                onToggle={handleChoiceToggle}
                options={[
                  "Pre-launch",
                  "Less than 1 year",
                  "1–3 years",
                  "3–10 years",
                  "10+ years",
                ]}
              />

              <ChoiceGroup
                label="Where do you operate?"
                name="operatingLocations"
                value={formData.operatingLocations}
                onToggle={handleChoiceToggle}
                options={[
                  "Local / city",
                  "National",
                  "International",
                  "Fully remote / online",
                ]}
              />
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 2</span>
                <h2>Goals &amp; Purpose</h2>
              </div>

              <ChoiceGroup
                label="What are the primary goals for the website?"
                hint="Select all that apply."
                name="websiteGoals"
                value={formData.websiteGoals}
                onToggle={handleChoiceToggle}
                options={websiteGoalOptions}
              />

              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="successDefinition"
                  >
                    What does success look like 6 months after launch?
                  </label>
                  <span className="discovery-field-hint">
                    e.g. 50 qualified inquiries/month, 10,000 monthly visitors,
                    5 new hires.
                  </span>
                  <textarea
                    id="successDefinition"
                    name="successDefinition"
                    value={formData.successDefinition}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="hardDeadlines"
                  >
                    Do you have any hard deadlines?
                  </label>
                  <span className="discovery-field-hint">
                    e.g. product launch, board presentation, campaign start.
                  </span>
                  <textarea
                    id="hardDeadlines"
                    name="hardDeadlines"
                    value={formData.hardDeadlines}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 3</span>
                <h2>Target Audience</h2>
              </div>

              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="primaryAudience"
                  >
                    Who is your primary audience?
                  </label>
                  <span className="discovery-field-hint">
                    Describe their role, age range, industry, pain points, and
                    tech savviness.
                  </span>
                  <textarea
                    id="primaryAudience"
                    name="primaryAudience"
                    value={formData.primaryAudience}
                    onChange={handleChange}
                    rows="5"
                    className="discovery-input discovery-textarea"
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="primaryAction"
                  >
                    What should visitors do first on your website?
                  </label>
                  <span className="discovery-field-hint">
                    The single most important action.
                  </span>
                  <textarea
                    id="primaryAction"
                    name="primaryAction"
                    value={formData.primaryAction}
                    onChange={handleChange}
                    rows="5"
                    className="discovery-input discovery-textarea"
                  />
                </div>
              </div>

              <ChoiceGroup
                label="Do you serve B2B, B2C, or both?"
                name="audienceType"
                type="radio"
                value={formData.audienceType}
                onToggle={handleChoiceToggle}
                options={[
                  "B2B (businesses)",
                  "B2C (consumers)",
                  "Both",
                  "Non-profit / community",
                ]}
              />

              <div className="discovery-field-stack">
                <label
                  className="discovery-field-label"
                  htmlFor="secondaryAudiences"
                >
                  Are there any secondary audiences?
                </label>
                <span className="discovery-field-hint">
                  e.g. investors, press, partners, job seekers.
                </span>
                <textarea
                  id="secondaryAudiences"
                  name="secondaryAudiences"
                  value={formData.secondaryAudiences}
                  onChange={handleChange}
                  rows="4"
                  className="discovery-input discovery-textarea"
                />
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 4</span>
                <h2>Brand &amp; Visual Identity</h2>
              </div>

              <ChoiceGroup
                label="Do you have an existing brand identity?"
                name="brandIdentity"
                type="radio"
                value={formData.brandIdentity}
                onToggle={handleChoiceToggle}
                options={[
                  "Yes — logo, colors, fonts, guidelines",
                  "Partial — some assets exist",
                  "No — starting from scratch",
                  "Needs a refresh",
                ]}
              />

              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="brandAdjectives"
                  >
                    List 3–5 adjectives for how you want to be perceived
                  </label>
                  <textarea
                    id="brandAdjectives"
                    name="brandAdjectives"
                    value={formData.brandAdjectives}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="inspirationSites"
                  >
                    List 2–3 competitor or inspiration websites you like and why
                  </label>
                  <textarea
                    id="inspirationSites"
                    name="inspirationSites"
                    value={formData.inspirationSites}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
              </div>

              <ChoiceGroup
                label="What tone of voice should your brand use?"
                hint="Select all that apply."
                name="toneOfVoice"
                value={formData.toneOfVoice}
                onToggle={handleChoiceToggle}
                options={toneOfVoiceOptions}
              />

              <div className="discovery-field-stack">
                <label
                  className="discovery-field-label"
                  htmlFor="dislikedStyles"
                >
                  Are there any websites or styles you strongly dislike?
                </label>
                <textarea
                  id="dislikedStyles"
                  name="dislikedStyles"
                  value={formData.dislikedStyles}
                  onChange={handleChange}
                  rows="4"
                  className="discovery-input discovery-textarea"
                />
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 5</span>
                <h2>Website Requirements</h2>
              </div>

              <ChoiceGroup
                label="Which pages do you need?"
                hint="Select all that apply."
                name="requiredPages"
                value={formData.requiredPages}
                onToggle={handleChoiceToggle}
                options={requiredPageOptions}
              />

              <ChoiceGroup
                label="Do you need any special functionality?"
                hint="Select all that apply."
                name="specialFunctionality"
                value={formData.specialFunctionality}
                onToggle={handleChoiceToggle}
                options={specialFunctionalityOptions}
              />

              <div className="discovery-grid discovery-grid--two">
                <ChoiceGroup
                  label="Do you have a domain name?"
                  name="hasDomain"
                  type="radio"
                  value={formData.hasDomain}
                  onToggle={handleChoiceToggle}
                  options={["Yes", "No — need one"]}
                />

                <div className="discovery-field-stack">
                  <label className="discovery-field-label" htmlFor="domainUrl">
                    Domain / URL
                  </label>
                  <input
                    id="domainUrl"
                    name="domainUrl"
                    value={formData.domainUrl}
                    onChange={handleChange}
                    placeholder="https://"
                    className="discovery-input"
                  />
                </div>
              </div>

              <div className="discovery-grid discovery-grid--two">
                <ChoiceGroup
                  label="Do you have a preferred platform / CMS?"
                  name="preferredPlatform"
                  type="radio"
                  value={formData.preferredPlatform}
                  onToggle={handleChoiceToggle}
                  options={[
                    "No preference",
                    "WordPress",
                    "Webflow",
                    "Shopify",
                    "Custom / code",
                    "Other",
                  ]}
                />

                <ChoiceGroup
                  label="Who will manage and update the website after launch?"
                  name="websiteManager"
                  type="radio"
                  value={formData.websiteManager}
                  onToggle={handleChoiceToggle}
                  options={[
                    "In-house (non-technical)",
                    "In-house developer",
                    "External agency",
                    "Ongoing retainer",
                    "Unsure",
                  ]}
                />
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 6</span>
                <h2>Social Media Presence</h2>
              </div>

              <ChoiceGroup
                label="Which platforms do you want to be active on?"
                hint="Select all that apply."
                name="socialPlatforms"
                value={formData.socialPlatforms}
                onToggle={handleChoiceToggle}
                options={socialPlatformOptions}
              />

              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="existingSocialAccounts"
                  >
                    Existing handles / URLs
                  </label>
                  <textarea
                    id="existingSocialAccounts"
                    name="existingSocialAccounts"
                    value={formData.existingSocialAccounts}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="socialReference"
                  >
                    Social profile you admire as a reference
                  </label>
                  <textarea
                    id="socialReference"
                    name="socialReference"
                    value={formData.socialReference}
                    onChange={handleChange}
                    rows="4"
                    className="discovery-input discovery-textarea"
                    placeholder="@handle or URL — and what you like about it"
                  />
                </div>
              </div>

              <ChoiceGroup
                label="What type of content do you plan to share?"
                hint="Select all that apply."
                name="contentTypes"
                value={formData.contentTypes}
                onToggle={handleChoiceToggle}
                options={contentTypeOptions}
              />

              <div className="discovery-grid discovery-grid--two">
                <ChoiceGroup
                  label="How often do you plan to post?"
                  name="postingFrequency"
                  type="radio"
                  value={formData.postingFrequency}
                  onToggle={handleChoiceToggle}
                  options={[
                    "Daily",
                    "3–5× per week",
                    "1–2× per week",
                    "A few times / month",
                    "Unsure",
                  ]}
                />

                <ChoiceGroup
                  label="Who will create and manage social content?"
                  name="socialManager"
                  type="radio"
                  value={formData.socialManager}
                  onToggle={handleChoiceToggle}
                  options={[
                    "Internal team member",
                    "Founder / owner",
                    "External agency",
                    "Not yet decided",
                  ]}
                />
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Section 7</span>
                <h2>Budget &amp; Next Steps</h2>
              </div>

              <div className="discovery-grid discovery-grid--two">
                <ChoiceGroup
                  label="What is your approximate budget for the initial build?"
                  name="budgetRange"
                  type="radio"
                  value={formData.budgetRange}
                  onToggle={handleChoiceToggle}
                  options={[
                    "Under $2,000",
                    "$2,000 – $5,000",
                    "$5,000 – $15,000",
                    "$15,000 – $30,000",
                    "$30,000 – $60,000",
                    "$60,000+",
                    "To be discussed",
                  ]}
                />

                <ChoiceGroup
                  label="Are you looking for ongoing support after launch?"
                  name="ongoingSupport"
                  type="radio"
                  value={formData.ongoingSupport}
                  onToggle={handleChoiceToggle}
                  options={[
                    "Yes — full management",
                    "Yes — occasional help",
                    "No — just the build",
                    "Undecided",
                  ]}
                />
              </div>

              <div className="discovery-field-stack">
                <label
                  className="discovery-field-label"
                  htmlFor="additionalContext"
                >
                  Is there anything else we should know?
                </label>
                <span className="discovery-field-hint">
                  Challenges, past experiences, non-negotiables, or anything
                  that will help us serve you better.
                </span>
                <textarea
                  id="additionalContext"
                  name="additionalContext"
                  value={formData.additionalContext}
                  onChange={handleChange}
                  rows="5"
                  className="discovery-input discovery-textarea"
                />
              </div>
            </div>

            <div className="discovery-section-card">
              <div className="discovery-section-heading">
                <span>Your Details</span>
                <h2>Final Contact Details</h2>
              </div>
              <div className="discovery-grid discovery-grid--two">
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="contactFullName"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contactFullName"
                    name="contactFullName"
                    value={formData.contactFullName}
                    onChange={handleChange}
                    className="discovery-input"
                    required
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="contactEmail"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="discovery-input"
                    required
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="contactRole"
                  >
                    Role / Title
                  </label>
                  <input
                    id="contactRole"
                    name="contactRole"
                    value={formData.contactRole}
                    onChange={handleChange}
                    className="discovery-input"
                  />
                </div>
                <div className="discovery-field-stack">
                  <label
                    className="discovery-field-label"
                    htmlFor="contactPhone"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="discovery-input"
                  />
                </div>
              </div>

              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="discovery-website">Website</label>
                <input
                  id="discovery-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="discovery-submit-row">
                <div className="discovery-submit-copy">
                  <strong>Confidential by default.</strong>
                  <p>
                    Your responses will be kept confidential and used solely to
                    shape your project proposal
                  </p>
                </div>
                <button
                  type="submit"
                  className="discovery-submit-btn"
                  disabled={isSubmitting || cooldownSeconds > 0}
                >
                  {isSubmitting
                    ? "Sending..."
                    : cooldownSeconds > 0
                      ? `Wait ${cooldownSeconds}s`
                      : formStatus.type === "success"
                        ? "Sent"
                        : "Send Discovery Form"}
                </button>
              </div>

              {formStatus.message ? (
                <p
                  className={`discovery-status-message ${formStatus.type === "success" ? "success" : "error"}`}
                  aria-live="polite"
                >
                  {formStatus.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Discovery;
