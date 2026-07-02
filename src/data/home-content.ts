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
    label: 'Live data',
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
    label: 'Multichannel outreach',
    title: 'Run one ', titleAccent: 'coordinated multi-channel', tail: ' flow',
    points: [
      'Drag and drop email, LinkedIn, and phone steps into a single flow.',
      'Profile visits, connection requests, DMs, InMail, and call tasks, all coordinated with your email cadence.',
      'Branching conditions automatically route contacts based on what they do, so every path is handled without manual intervention.',
    ],
    cta: 'Get a demo', embed: '06-multichannel-flow', recolor: 'espresso', flip: true,
  },
  {
    n: '03',
    label: 'Automatic CRM Sync',
    title: 'Log any and all activities ', titleAccent: 'to your CRM in real time', tail: '',
    points: [
      'Every touchpoint, sent, opened, replied, connected, is logged to Salesforce, HubSpot, or Pipedrive automatically.',
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
  { title: 'Email, LinkedIn & phone in one flow', body: 'Run email, LinkedIn, and phone as one coordinated sequence, not separate tools. Profile visits, connection requests, DMs, InMail, and call tasks all run from a single flow.' },
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
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp',
    results: [
      { metric: '30%', label: 'decrease in customer acquisition cost' },
      { metric: '1000+', label: 'accounts with increased awareness' },
      { metric: '25hrs', label: 'saved weekly' },
    ],
  },
  {
    quote: 'Thanks to hubsell we can reach more people in less time whilst still communicating in a very personalized way as we would do manually.',
    name: 'Laurent Schauvliege', title: 'Business Manager', company: 'Verhaert', slug: 'verhaert',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif',
    results: [
      { metric: '3x', label: 'increase in opportunity generation' },
      { metric: '60%', label: 'and higher open rate' },
      { metric: '90%+', label: 'level of personalization' },
    ],
  },
  {
    quote: 'hubsell is a company that is more than just a vendor, they could really partner with you and help you with your whole approach.',
    name: 'Peter Mallozzi', title: 'Outbound Sales', company: 'Staffbase', slug: 'staffbase',
    image: 'https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png',
    results: [
      { metric: '15.6%', label: 'replies across different markets' },
      { metric: '3.5%', label: 'engagement rate resulting in a call' },
      { metric: '15', label: 'markets targeted successfully' },
    ],
  },
  {
    quote: 'I’d recommend hubsell as a partner if you’re looking to generate real results from outbound sales & marketing with a limited team.',
    name: 'Rachel Chan', title: 'Digital Marketing Team Lead', company: 'Elium', slug: 'elium',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif',
    results: [
      { metric: '25%', label: 'increase in lead generation' },
      { metric: '53%', label: 'and higher open rate' },
      { metric: '20hrs+', label: 'saved weekly' },
    ],
  },
  {
    quote: 'I haven’t discovered a tool that comes near hubsell in its segmentation, reply detection and social networks and CRM integrations.',
    name: 'Mark Grasmayer', title: 'Product Evangelist', company: 'Workspace 365', slug: 'workspace365',
    image: 'https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif',
    results: [
      { metric: '100+', label: 'new business opportunities generated' },
      { metric: '71%', label: 'and higher open rate' },
      { metric: '33%', label: 'reduction in customer acquisition costs' },
    ],
  },
  {
    quote: 'hubsell helps us generate interactions with prospects from various industries, which is crucial to our expansion efforts.',
    name: 'Eylül Eygi', title: 'Head of Marketing', company: 'Sensolus', slug: 'sensolus',
    image: 'https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png',
    results: [
      { metric: '30%', label: 'reduction in CAC' },
      { metric: '22%', label: 'response rate' },
      { metric: '61%', label: 'open rate' },
    ],
  },
];

export interface Insight { title: string; excerpt: string; slug: string; image: string; }

export const insights: Insight[] = [
  {
    title: 'The sale starts with a no, a lesson on objection handling',
    excerpt: 'Why “the sale starts with a no,” the real reasons prospects reject you, and three strategies to convert rejection into closed deals.',
    slug: 'the-sale-starts-with-a-no-objection-handling',
    image: 'https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png',
  },
  {
    title: 'Seven methods to increase the productivity of your salespeople',
    excerpt: 'The biggest factors making a sales team inefficient, plus seven proven ways to scale output without burning the team out.',
    slug: 'methods-increase-productivity-salespeople',
    image: 'https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png',
  },
  {
    title: 'Why lead generation needs to be a qualitative process',
    excerpt: 'Moving from quantity to quality in automated outbound: the dangers of spam, why accurate data matters, and email copy that builds trust.',
    slug: 'why-automated-lead-generation-needs-to-be-a-qualitative-process',
    image: 'https://assets.hubsell.com/insights/69e9ef6291a191221bc032dc_Thumbnail-Why-lead-generation-needs-to-be-a-qualitative-process.png',
  },
];
