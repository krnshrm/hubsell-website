// Auto-generated from the Webflow FAQs export by scripts/csv-to-faqs.mjs.
// Single source for FAQs: the homepage section (Faq.astro) shows the `onHomepage`
// entries; the /faqs page shows them all. Edit here or re-run the converter.
export interface Faq {
  question: string;
  slug: string;
  answer: string; // HTML
  onHomepage: boolean;
}

export const faqs: Faq[] = [
  {
    question: "Can hubsell orchestrate across multiple executive profiles simultaneously?",
    slug: "orchestrate-multiple-profiles",
    answer: "<p>hubsell allows you to manage outreach from your CEO, VP of Sales, and Subject Matter Experts from a single, unified command center, enabling coordinated, peer-to-peer engagement across the entire target account.</p>",
    onHomepage: false,
  },
  {
    question: "Can hubsell replace my existing outbound stack?",
    slug: "hubsell-replace-outbound-stack",
    answer: "<p>For most teams, yes. hubsell replaces your sales intelligence tool, your sales engagement platform, and your manual LinkedIn outreach process in one platform. Most teams that switch eliminate 2–3 tool subscriptions within 30 days. The one thing hubsell doesn’t replace is your CRM — it syncs to it.</p>",
    onHomepage: true,
  },
  {
    question: "Do we have to build the campaigns ourselves, or does hubsell offer guided onboarding and strategy?",
    slug: "hubsell-onboarding-strategy",
    answer: "<p>We don't just hand you a login and wish you luck. Our team handles full campaign setup, data sourcing, and sequence configuration so you can run your first outbound campaign in under 7 days — and keep improving from there.</p>",
    onHomepage: true,
  },
  {
    question: "Does hubsell integrate directly with our existing CRM?",
    slug: "hubsell-crm-integration",
    answer: "<p>We don't replace your system of record; we empower it. All activities, including emails sent, LinkedIn connection requests, profile views, and replies, are automatically logged directly into Salesforce, HubSpot, or Pipedrive, completely eliminating data silos for your revenue team.</p>",
    onHomepage: true,
  },
  {
    question: "Does hubsell send emails from external servers or through our own mailboxes?",
    slug: "hubsell-email-infrastructure",
    answer: "<p>hubsell's infrastructure is \"entirely not present\" in the sent email. We do not use external SMTP servers or spam-triggering redirect links for tracking. Emails are sent via direct API integration (Google/Microsoft), resulting in significantly higher open rates.</p>",
    onHomepage: false,
  },
  {
    question: "How can we personalize cold outreach at scale without sounding like an AI robot?",
    slug: "personalize-outreach-at-scale",
    answer: "<p>The \"Uncanny Valley\" of sales occurs when teams use AI to fake empathy. Instead of writing complex AI prompts for generic lists, rely on \"Observable Intent.\" A simple, static message sent to a highly relevant list (e.g., attendees of a specific webinar) always outperforms fake AI empathy sent to a generic persona.</p>",
    onHomepage: false,
  },
  {
    question: "How does one safely outreach on LinkedIn without getting restricted?",
    slug: "safely-outreach-linkedin",
    answer: "<p>The issue is concentration of activity in a short period of time, which triggers LinkedIn's safety algorithms. hubsell slowly and safely builds your 1st-degree network 365 days a year within strict platform limits. LinkedIn's limit for DMs is lot higher.</p>",
    onHomepage: true,
  },
  {
    question: "How do we generate leads when our target accounts aren't actively searching for our software?",
    slug: "generate-leads-out-of-cycle",
    answer: "<p>Most buyers are locked in contracts or out-of-cycle. If you pitch them, they ignore you. Instead, use an \"Always-On\" connection strategy to share valuable content, industry insights, and event invites. By establishing peer-to-peer value now, you ensure your team is the first one they call when their buying window actually opens.</p>",
    onHomepage: true,
  },
  {
    question: "How do we stop our sales emails from bouncing due to bad CRM data?",
    slug: "stop-sales-email-bounces",
    answer: "<p>The average tenure of a B2B decision-maker is roughly 2.5 years, meaning static CRMs and purchased lists decay by 25% to 30% annually. hubsell solves this with Zero-Day Sourcing. We source and deeply verify contact data in real-time at the exact moment of your request, ensuring absolute accuracy and protecting your sender reputation.</p>",
    onHomepage: false,
  },
  {
    question: "How does hubsell compare to Outreach or Salesloft?",
    slug: "hubsell-vs-outreach-salesloft",
    answer: "<p>Outreach and Salesloft are email sequence tools — they don’t source data and they don’t do LinkedIn natively. You still need a separate data provider and a manual LinkedIn process. hubsell covers all three layers: live prospect data, coordinated email and LinkedIn sequences, plus call tasks, and automatic CRM sync. One platform, one subscription.</p>",
    onHomepage: true,
  },
  {
    question: "How does hubsell differ from static B2B databases like ZoomInfo or Apollo?",
    slug: "hubsell-catch-all-domains",
    answer: "<p>Most sales intelligence tools hand you a static export and leave the outreach to another platform. hubsell sources contacts live at the moment of your request — then lets you reach out via email, LinkedIn, and phone and sync everything to your CRM, all without switching tools. No database decay, no duct-taped stack.</p>",
    onHomepage: true,
  },
  {
    question: "Is hubsell GDPR compliant?",
    slug: "hubsell-gdpr-compliance",
    answer: "<p>Yes. hubsell is based in Berlin, Germany. We maintain strict GDPR compliance and data privacy standards, ensuring all engagement activities meet regulatory requirements.</p>",
    onHomepage: true,
  },
  {
    question: "Is hubsell suitable for high-volume, low-ACV transactional sales?",
    slug: "hubsell-high-volume-sales",
    answer: "<p>Yes. While hubsell can be used for high-volume outreach, we recommend to use hubsell for highly targeted outreach.</p>",
    onHomepage: false,
  },
  {
    question: "Is mass cold emailing actively damaging our brand reputation and deliverability?",
    slug: "mass-email-brand-reputation",
    answer: "<p>Google and Yahoo's latest rules mean high-volume \"spray and pray\" tactics will quickly ruin your domain's sender reputation. Engagement Orchestration solves this by utilizing ultra-precise targeting, native API sending, and multi-threading (spreading outreach safely across 5-10 internal profiles) to ensure high deliverability and zero domain burn.</p>",
    onHomepage: false,
  },
  {
    question: "Is third-party B2B intent data actually accurate?",
    slug: "third-party-intent-data-accuracy",
    answer: "<p>Most intent data relies on probabilistic algorithms (guessing who is buying based on anonymous web traffic). Because 95% of B2B buyers are out-of-market at any given time, applying a generic algorithm to a non-buying market results in your sales team chasing ghosts.</p>",
    onHomepage: false,
  },
  {
    question: "Should our SDRs or our Executives be sending LinkedIn outreach?",
    slug: "sdr-vs-executive-linkedin-outreach",
    answer: "<p>This is known as the Messenger Paradox. When an SDR sends a connection request, acceptance rates typically hover below 20% because buyers anticipate a pitch. When a Founder, Executive, or Subject Matter Expert sends the exact same request, acceptance rates jump to 50%+.</p>",
    onHomepage: false,
  },
  {
    question: "What is the most effective way to build a B2B audience that doesn't decay over time?",
    slug: "build-b2b-audience-no-decay",
    answer: "<p>Email addresses belong to the employer, meaning lists decay by roughly 30% annually as people switch jobs. LinkedIn profiles are tied to the human identity. By building \"Network Equity\" on LinkedIn, your connections travel with the buyer, granting you automatic entry into a new target account when they change companies.</p>",
    onHomepage: true,
  },
  {
    question: "What kind of conversion rates (acceptance, replies, and engagement) should we expect using hubsell?",
    slug: "hubsell-conversion-rates",
    answer: "<p>When following the hubsell playbook correctly, you can expect 25-40% acceptance rate, 10-15% reply rate, and 3-5% conversations start rates. The conversions are on the higher end when the sender profiles are not too salesy.</p>",
    onHomepage: true,
  },
  {
    question: "Why are our cold email reply rates suddenly dropping so low?",
    slug: "cold-email-reply-rates-dropping",
    answer: "<p>Traditional \"spray and pray\" outreach is failing for two structural reasons. First, strict new spam thresholds (0.3% complaint rates) from Google and Yahoo mean high-volume email blasts are actively damaging your domain reputation. Second, buyers instantly recognize automated AI personalization. It looks personal but feels hollow, triggering a mental firewall.</p>",
    onHomepage: false,
  },
];

export const homeFaqs = faqs.filter((f) => f.onHomepage);
