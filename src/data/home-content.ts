// Homepage content, pulled verbatim from the live Webflow site (DOM + CMS)
// on 2026-06-25 via the read-only Webflow MCP connector.
// Customer/post image URLs point at the current Webflow CDN; the asset
// migration script (npm run assets:rewrite) will rewrite them to
// assets.hubsell.com at cutover.

export interface PipelineStep {
  n: string;
  label: string;
  title: string;
  titleAccent: string;
  tail: string;
  points: string[];
  cta: string;
  embed: string;
  recolor?: string;
  flip: boolean; // true = embed on the left, text on the right
}

export const pipelineSteps: PipelineStep[] = [
  {
    n: '01',
    label: 'Step 1 · Live-sourced data',
    title: 'Find the ', titleAccent: 'right people', tail: ', not just the right filters',
    points: [
      'Most platforms let you filter by title and industry.',
      'hubsell sources from live behavioral signals: people following a company page, engaging with a LinkedIn post, changing jobs, attending events, or hiring for specific roles.',
      'Every contact entering your flow is matched to your ICP and validated at the point of use.',
    ],
    cta: 'Source your data', embed: '05-sp-widget', flip: false,
  },
  {
    n: '02',
    label: 'Step 2 · Coordinated flows',
    title: 'Run one ', titleAccent: 'coordinated multi-channel', tail: ' flow',
    points: [
      'Drag and drop email and LinkedIn steps into a single flow.',
      'Profile visits, connection requests, DMs, InMail, all coordinated with your email cadence.',
      'Branching conditions automatically route contacts based on what they do, so every path is handled without manual intervention.',
    ],
    cta: 'Get a demo', embed: '06-multichannel-flow', recolor: 'espresso', flip: true,
  },
  {
    n: '03',
    label: 'Step 3 · Automatic CRM sync',
    title: 'Log any and all activities ', titleAccent: 'to your CRM in real time', tail: '',
    points: [
      'Every touchpoint, sent, opened, replied, connected, is logged to Salesforce, HubSpot, Pipedrive, Freshworks, or ActiveCampaign automatically.',
      'No manual entry. No data rot. Your team works the pipeline, not the spreadsheet.',
    ],
    cta: 'See it live', embed: '07-crm-sync-tracker', recolor: 'espresso', flip: false,
  },
];

export interface Feature {
  title: string;
  body: string;
  beta?: boolean;
}

// "Live data, email and LinkedIn orchestrated in one solution"
export const features: Feature[] = [
  { title: 'Live-sourced prospect data', body: 'Replace static databases with live-sourced contacts matched to your ICP. No stale data, no wasted outreach budget.' },
  { title: 'Email + LinkedIn in one flow', body: 'Run email and LinkedIn as one coordinated sequence, not two separate tools. Profile visits, connection requests, DMs, and InMail all run from a single flow.' },
  { title: 'AI qualification and routing', body: 'Use AI to qualify contacts against your ICP and route them into the right flow automatically, before you spend a single credit on outreach.', beta: true },
  { title: 'Buying committee coverage', body: 'Reach every stakeholder at a target account across email and LinkedIn from a single campaign. No tool-switching.' },
  { title: 'Multi-sender intelligent outreach', body: 'Spread outreach safely across CEO, VP Sales, and SME profiles to multiply reach without burning any single sender.' },
  { title: 'Catch-all domain verification', body: 'Proprietary validation verifies catch-all domains, protecting your sender reputation from hard bounces and blacklists.' },
  { title: 'Turn LinkedIn content into pipeline', body: 'Publish a LinkedIn post and automatically engage everyone who likes, comments, or reposts, turning those warm signals into pipeline before your competitors do.', beta: true },
  { title: 'Intent and signal driven targeting', body: 'Pinpoint the 5% of in-market buyers using real-time intent signals and route them into targeted sequences automatically.', beta: true },
];

export interface Role { title: string; line: string; }

// "One platform for GTM" personas. Role one-liners were not in the CMS;
// these are concise, product-true summaries. Review or replace as desired.
export const roles: Role[] = [
  { title: 'Sales', line: 'Source, sequence, and close from one workspace. No tab-switching.' },
  { title: 'Founders', line: 'Run founder-led outbound that lands, without hiring an SDR team.' },
  { title: 'Sales Operations', line: 'One system of record, synced to your CRM automatically.' },
  { title: 'RevOps', line: 'Clean, validated data in and out. No manual hygiene.' },
  { title: 'Marketing', line: 'Turn LinkedIn demand into qualified, trackable pipeline.' },
  { title: 'GTM Engineers', line: 'Compose live data, multi-channel flows, and routing in one place.' },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  slug: string;
  results: { metric: string; label: string }[];
}

export const testimonials: Testimonial[] = [
  {
    quote: 'hubsell’s automation gives a maximum return for minimum effort on data gathering and cold outreach. Their outreach functionality is excellent.',
    name: 'Richard Wood', title: 'CEO', company: 'Safran Software', slug: 'safran',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69d41c6e91f14fc0781daab5_richard-wood.png',
    results: [
      { metric: '30%', label: 'decrease in customer acquisition cost' },
      { metric: '1000+', label: 'accounts with increased awareness' },
      { metric: '25hrs', label: 'saved weekly' },
    ],
  },
  {
    quote: 'Thanks to hubsell we can reach more people in less time whilst still communicating in a very personalized way as we would do manually.',
    name: 'Laurent Schauvliege', title: 'Business Manager', company: 'Verhaert', slug: 'verhaert',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69d41c91f5b255eaa6dad669_laurent-schauvliege.png',
    results: [
      { metric: '3x', label: 'increase in opportunity generation' },
      { metric: '60%', label: 'and higher open rate' },
      { metric: '90%+', label: 'level of personalization' },
    ],
  },
  {
    quote: 'hubsell is a company that is more than just a vendor, they could really partner with you and help you with your whole approach.',
    name: 'Peter Mallozzi', title: 'Outbound Sales', company: 'Staffbase', slug: 'staffbase',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png',
    results: [
      { metric: '15.6%', label: 'replies across different markets' },
      { metric: '3.5%', label: 'engagement rate resulting in a call' },
      { metric: '15', label: 'markets targeted successfully' },
    ],
  },
  {
    quote: 'I’d recommend hubsell as a partner if you’re looking to generate real results from outbound sales & marketing with a limited team.',
    name: 'Rachel Chan', title: 'Digital Marketing Team Lead', company: 'Elium', slug: 'elium',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69d41ca5f6b5c283c71f051b_rachel-chan.png',
    results: [
      { metric: '25%', label: 'increase in lead generation' },
      { metric: '53%', label: 'and higher open rate' },
      { metric: '20hrs+', label: 'saved weekly' },
    ],
  },
  {
    quote: 'I haven’t discovered a tool that comes near hubsell in its segmentation, reply detection and social networks and CRM integrations.',
    name: 'Mark Grasmayer', title: 'Product Evangelist', company: 'Workspace 365', slug: 'workspace365',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69d41cb3a47f11a4f5f0dc9e_mark-grasmayer.png',
    results: [
      { metric: '100+', label: 'new business opportunities generated' },
      { metric: '71%', label: 'and higher open rate' },
      { metric: '33%', label: 'reduction in customer acquisition costs' },
    ],
  },
  {
    quote: 'hubsell helps us generate interactions with prospects from various industries, which is crucial to our expansion efforts.',
    name: 'Eylül Eygi', title: 'Head of Marketing', company: 'Sensolus', slug: 'sensolus',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png',
    results: [
      { metric: '30%', label: 'reduction in CAC' },
      { metric: '22%', label: 'response rate' },
      { metric: '61%', label: 'open rate' },
    ],
  },
];

export interface Faq { q: string; a: string; }

// Homepage FAQs (CMS items flagged show-on-home-page-2 = true).
export const faqs: Faq[] = [
  {
    q: 'How does hubsell compare to Outreach or Salesloft?',
    a: 'Outreach and Salesloft are email sequence tools. They don’t source data and they don’t do LinkedIn natively. You still need a separate data provider and a manual LinkedIn process. hubsell covers all three layers: live prospect data, coordinated email + LinkedIn sequences, and automatic CRM sync. One platform, one subscription.',
  },
  {
    q: 'Can hubsell replace my existing outbound stack?',
    a: 'For most teams, yes. hubsell replaces your sales intelligence tool, your sales engagement platform, and your manual LinkedIn outreach process in one platform. Most teams that switch eliminate two or three tool subscriptions within 30 days. The one thing hubsell doesn’t replace is your CRM. It syncs to it.',
  },
  {
    q: 'How do we generate leads when our target accounts aren’t actively searching for our software?',
    a: 'Most buyers are locked in contracts or out-of-cycle. If you pitch them, they ignore you. Instead, use an “Always-On” connection strategy to share valuable content, industry insights, and event invites. By establishing peer-to-peer value now, you ensure your team is the first one they call when their buying window actually opens.',
  },
  {
    q: 'What is the most effective way to build a B2B audience that doesn’t decay over time?',
    a: 'Email addresses belong to the employer, meaning lists decay by roughly 30% annually as people switch jobs. LinkedIn profiles are tied to the human identity. By building “Network Equity” on LinkedIn, your connections travel with the buyer, granting you automatic entry into a new target account when they change companies.',
  },
];

export interface Insight { title: string; excerpt: string; slug: string; image: string; }

export const insights: Insight[] = [
  {
    title: 'The sale starts with a no, a lesson on objection handling',
    excerpt: 'Why “the sale starts with a no,” the real reasons prospects reject you, and three strategies to convert rejection into closed deals.',
    slug: 'the-sale-starts-with-a-no-objection-handling',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69e9eca8af016789641b1d18_Thumbnail%20-%20The%20sale%20starts%20with%20a%20no%2C%20a%20lesson%20on%20objection%20handling.png',
  },
  {
    title: 'Seven methods to increase the productivity of your salespeople',
    excerpt: 'The biggest factors making a sales team inefficient, plus seven proven ways to scale output without burning the team out.',
    slug: 'methods-increase-productivity-salespeople',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69e9eb2fa14f17a0ca9cd88c_Thumbnail%20-%20Seven%20methods%20to%20increase%20the%20productivity%20of%20your%20salespeople.png',
  },
  {
    title: 'Why lead generation needs to be a qualitative process',
    excerpt: 'Moving from quantity to quality in automated outbound: the dangers of spam, why accurate data matters, and email copy that builds trust.',
    slug: 'why-automated-lead-generation-needs-to-be-a-qualitative-process',
    image: 'https://cdn.prod.website-files.com/699dd2e0e18d79ea05f93b36/69e9ef6291a191221bc032dc_Thumbnail%20-%20Why%20lead%20generation%20needs%20to%20be%20a%20qualitative%20process.png',
  },
];
