// English copy for the /platform pages (overview + three capability pages).
// German lives in platform.de.ts, Dutch in platform.nl.ts; getPlatform() in
// platform-i18n.ts picks per locale. Structure mirrors the home-content pattern.

export type PlatformEmbedKey = '05-sp-widget' | '06-multichannel-flow' | '07-crm-sync-tracker';

export interface PlatformBlock { title: string; body: string }

export interface PlatformRow {
  titlePre: string; titleAccent: string; titlePost: string;
  points: string[];
  embed: PlatformEmbedKey;
}

export interface PlatformClosing { titlePre: string; titleAccent: string; titlePost: string; sub: string }

export interface PlatformDetailData {
  path: string;                 // English-root path, e.g. '/platform/live-data'
  title: string;                // <title> (contains "hubsell", so no suffix is appended)
  metaDescription: string;
  eyebrow: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  sub: string;
  demoCta: string;
  heroTimeline?: boolean;       // live-data only: the zero-day timeline under the hero
  row: PlatformRow;
  gridTitlePre: string; gridTitleAccent: string; gridTitlePost: string;
  blocks: PlatformBlock[];
  proofEyebrow: string; proofTitle: string;
  quoteSlug: string;            // testimonial slug in the shared pool
  storySlug: string;            // customer story slug
  storyLabel: string;
  faqEyebrow: string; faqTitle: string; faqSlugs: string[];
  closing: PlatformClosing;
  closingCta: string;
}

export interface PlatformCapabilityCard {
  eyebrow: string; title: string; body: string; href: string; linkLabel: string;
}

export interface PlatformOverviewData {
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  sub: string;
  demoCta: string;
  problemEyebrow: string;
  problemTitlePre: string; problemTitleAccent: string; problemTitlePost: string;
  problemBody: string[];
  capsEyebrow: string; capsTitle: string;
  caps: PlatformCapabilityCard[];
  resultsEyebrow: string; resultsTitle: string;
  results: PlatformBlock[];
  proofEyebrow: string; proofTitle: string; ratingsLine: string;
  quoteSlug: string;
  faqEyebrow: string; faqTitle: string; faqSlugs: string[];
  closing: PlatformClosing;
  closingCta: string;
}

export interface PlatformData { overview: PlatformOverviewData; details: PlatformDetailData[] }

export const platform: PlatformData = {
  overview: {
    title: 'The hubsell platform: live data, multichannel outreach, and CRM sync',
    metaDescription: 'One platform that sources B2B contacts live, runs email, LinkedIn, and phone outreach in one flow, and logs everything to your CRM automatically.',
    eyebrow: 'The platform',
    h1Pre: 'Three tools\u2019 worth of work. ', h1Accent: 'One platform', h1Post: '.',
    sub: 'hubsell replaces your data provider, your outreach tool, and your sync middleware with one system: live data, multichannel outreach, and automatic CRM sync.',
    demoCta: 'Book a demo',
    problemEyebrow: 'The problem',
    problemTitlePre: 'Most outbound stacks are three subscriptions ', problemTitleAccent: 'duct-taped together', problemTitlePost: '.',
    problemBody: [
      'Data exported from the first tool is already going stale while the second tool sends it, and the third tool never hears about the reply. Every handover between tools is a CSV, a delay, and a place for records to rot.',
      'You pay three invoices to create gaps between them. hubsell closes those gaps by doing the three jobs in one place, on one data set, in real time.',
    ],
    capsEyebrow: 'The three capabilities',
    capsTitle: 'What the platform does',
    caps: [
      {
        eyebrow: 'Live data',
        title: 'Sourced the day you ask',
        body: 'hubsell does not sell access to a static database. Define your ICP and we source contacts live from LinkedIn, matched to your criteria and verified at the point of use.',
        href: '/platform/live-data', linkLabel: 'Explore live data',
      },
      {
        eyebrow: 'Multichannel outreach',
        title: 'Email, LinkedIn, and phone in one flow',
        body: 'One coordinated sequence across all three channels, with branching that reacts to what each contact does and sending spread safely across your team\u2019s profiles.',
        href: '/platform/multichannel-outreach', linkLabel: 'Explore multichannel outreach',
      },
      {
        eyebrow: 'CRM sync',
        title: 'Every touchpoint logged automatically',
        body: 'Sends, opens, replies, and connections land in Salesforce, HubSpot, or Pipedrive the moment they happen. No manual entry, no data rot.',
        href: '/platform/crm-sync', linkLabel: 'Explore CRM sync',
      },
    ],
    resultsEyebrow: 'Why it works',
    resultsTitle: 'What one platform gets you',
    results: [
      {
        title: 'Efficiency',
        body: 'One login, one invoice, no CSV exports between tools. Your team runs the whole outbound motion in one place instead of stitching three products together by hand.',
      },
      {
        title: 'Results',
        body: 'Fresh data lifts deliverability. Coordinated channels lift reply rates. Automatic logging keeps your pipeline reporting truthful. Each part makes the others work better.',
      },
    ],
    proofEyebrow: 'Proof',
    proofTitle: 'Teams that made the switch',
    ratingsLine: 'Rated 4.8+ across G2, Capterra, and GetApp.',
    quoteSlug: 'cibt',
    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions',
    faqSlugs: ['hubsell-replace-outbound-stack', 'hubsell-crm-integration', 'stop-sales-email-bounces'],
    closing: {
      titlePre: 'See the whole platform ', titleAccent: 'in one call', titlePost: '.',
      sub: 'Bring your current stack to a short call and we will show you what it looks like as one system.',
    },
    closingCta: 'Book a demo',
  },

  details: [
    {
      path: '/platform/live-data',
      title: 'Live-sourced B2B data, verified at the point of use | hubsell',
      metaDescription: 'hubsell sources B2B contacts the moment you ask, matched to your ICP and verified at the point of use. Zero-day sourcing instead of a decaying database.',
      eyebrow: 'Live data',
      h1Pre: 'B2B data sourced ', h1Accent: 'today', h1Post: ', not two years ago',
      sub: 'hubsell does not sell access to a static database. Define your ICP and we source contacts live from LinkedIn, layer buying signals on top, and verify every record before it enters your flow.',
      demoCta: 'Book a demo',
      heroTimeline: true,
      row: {
        titlePre: 'Sourced from ', titleAccent: 'live buying signals', titlePost: '',
        points: [
          'Most platforms let you filter by title and industry. hubsell also reads behavior.',
          'People following a company page, engaging with a LinkedIn post, changing jobs, attending events, or hiring for specific roles.',
          'Signals tell you who is worth contacting this week, not just who matches a filter.',
        ],
        embed: '05-sp-widget',
      },
      gridTitlePre: 'Data that is ', gridTitleAccent: 'correct on the day you use it', gridTitlePost: '',
      blocks: [
        {
          title: 'Zero-day sourcing',
          body: 'A bespoke database built at the moment of your request, not a shared list captured years ago. Fresh of that day, with 80 to 90% coverage of your target market.',
        },
        {
          title: 'Matched to your ICP',
          body: 'Define your ideal customer profile once. Every contact entering your flow is matched against it before you spend a single credit on outreach.',
        },
        {
          title: 'Verified at the point of use',
          body: 'Every record is checked the moment it is sourced, catch-all domains included. Bounces stay low and your sender reputation stays intact.',
        },
        {
          title: 'Built against decay',
          body: 'The average B2B decision-maker changes jobs every 2.5 years, so static lists decay by 25 to 30% a year. Live sourcing makes decay irrelevant: the data is correct on the day you use it.',
        },
      ],
      proofEyebrow: 'Proof',
      proofTitle: 'What accurate data changes',
      quoteSlug: 'alon-even',
      storySlug: 'sensolus',
      storyLabel: 'Read the Sensolus story',
      faqEyebrow: 'FAQ',
      faqTitle: 'Common questions about live data',
      faqSlugs: ['stop-sales-email-bounces', 'build-b2b-audience-no-decay'],
      closing: {
        titlePre: 'See your market, sourced ', titleAccent: 'today', titlePost: '.',
        sub: 'Tell us your ICP on a short call and we will show you what zero-day sourcing returns for it.',
      },
      closingCta: 'Book a demo',
    },

    {
      path: '/platform/multichannel-outreach',
      title: 'Multichannel outreach: email, LinkedIn, and phone in one flow | hubsell',
      metaDescription: 'Run email, LinkedIn, and phone as one coordinated sequence. Branching flows, safe sending limits, and outreach from the profiles buyers actually accept.',
      eyebrow: 'Multichannel outreach',
      h1Pre: 'One flow across ', h1Accent: 'email, LinkedIn, and phone', h1Post: '',
      sub: 'Stop juggling an email tool, a LinkedIn tool, and a task list. hubsell runs all three channels as one coordinated sequence that reacts to what each contact does.',
      demoCta: 'Book a demo',
      row: {
        titlePre: 'One sequence, ', titleAccent: 'every channel', titlePost: '',
        points: [
          'Drag and drop email, LinkedIn, and phone steps into a single flow.',
          'Profile visits, connection requests, DMs, InMail, and call tasks, all coordinated with your email cadence.',
          'Branching conditions route every contact on what they do: opened, replied, accepted, or went quiet.',
        ],
        embed: '06-multichannel-flow',
      },
      gridTitlePre: 'Built to ', gridTitleAccent: 'get delivered and get answered', gridTitlePost: '',
      blocks: [
        {
          title: 'Deliverability by design',
          body: 'Emails send through the Google and Microsoft APIs directly from your own mailboxes, with no external servers in the path. Open rates stay honest and spam filters stay calm.',
        },
        {
          title: 'Safe sending, spread out',
          body: 'Outreach is spread across 5 to 10 internal sender profiles, within strict platform limits. Lower volume per sender, higher deliverability, no domain burn.',
        },
        {
          title: 'Sent from the right profiles',
          body: 'SDR connection requests sit below 20% acceptance because buyers expect a pitch. The same request from a founder or expert lands above 50%. hubsell runs outreach from the profiles buyers accept.',
        },
        {
          title: 'Calls where reps work',
          body: 'Phone steps land as call tasks in Salesforce, HubSpot, or Pipedrive, so reps dial from the CRM they already use and the outcome is logged with the rest of the sequence.',
        },
      ],
      proofEyebrow: 'Proof',
      proofTitle: 'What coordinated outreach changes',
      quoteSlug: 'meetyoo',
      storySlug: 'verhaert',
      storyLabel: 'Read the Verhaert story',
      faqEyebrow: 'FAQ',
      faqTitle: 'Common questions about outreach',
      faqSlugs: ['mass-email-brand-reputation', 'sdr-vs-executive-linkedin-outreach', 'hubsell-email-infrastructure'],
      closing: {
        titlePre: 'Run all three channels as ', titleAccent: 'one flow', titlePost: '.',
        sub: 'Bring one of your current campaigns to a short call and we will map it into a single hubsell sequence.',
      },
      closingCta: 'Book a demo',
    },

    {
      path: '/platform/crm-sync',
      title: 'Automatic CRM sync for Salesforce, HubSpot, and Pipedrive | hubsell',
      metaDescription: 'Every send, open, reply, and connection logged to Salesforce, HubSpot, or Pipedrive automatically. No manual entry, no data rot, no lost activity.',
      eyebrow: 'CRM sync',
      h1Pre: 'Your CRM, always up to date. ', h1Accent: 'By itself', h1Post: '.',
      sub: 'hubsell does not replace your system of record, it feeds it. Every touchpoint across email, LinkedIn, and phone lands in your CRM the moment it happens.',
      demoCta: 'Book a demo',
      row: {
        titlePre: 'Logged ', titleAccent: 'the moment it happens', titlePost: '',
        points: [
          'Every touchpoint, sent, opened, replied, connected, is logged to Salesforce, HubSpot, or Pipedrive automatically.',
          'Connection requests, profile views, and call outcomes land with the same precision as email events.',
          'No manual entry. No data rot. Your team works the pipeline, not the spreadsheet.',
        ],
        embed: '07-crm-sync-tracker',
      },
      gridTitlePre: 'A system of record you can ', gridTitleAccent: 'finally trust', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot, and Pipedrive',
          body: 'Native two-way sync with the three CRMs, in real time. No middleware, no CSV exports, no nightly jobs.',
        },
        {
          title: 'Reporting stays truthful',
          body: 'When every activity is logged the moment it happens, your pipeline reports reflect reality instead of what reps remembered to type in.',
        },
        {
          title: 'Hours back every week',
          body: 'Manual CRM entry quietly eats selling time. Automatic logging gives it back: Elium saved around 20 hours per week after switching to hubsell.',
        },
        {
          title: 'Calls as CRM tasks',
          body: 'Phone steps create tasks your reps complete inside the CRM. hubsell has no built-in dialer and does not need one: the call happens where the record lives.',
        },
      ],
      proofEyebrow: 'Proof',
      proofTitle: 'What automatic logging changes',
      quoteSlug: 'spryker',
      storySlug: 'elium',
      storyLabel: 'Read the Elium story',
      faqEyebrow: 'FAQ',
      faqTitle: 'Common questions about CRM sync',
      faqSlugs: ['hubsell-crm-integration', 'hubsell-replace-outbound-stack'],
      closing: {
        titlePre: 'Feed your CRM ', titleAccent: 'automatically', titlePost: '.',
        sub: 'Show us your CRM setup on a short call and we will walk through exactly what hubsell logs and where.',
      },
      closingCta: 'Book a demo',
    },
  ],
};
