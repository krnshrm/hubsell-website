// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// ==========================================================================
// English copy for the /platform pages (overview + three capability pages).
// German lives in platform.de.ts, Dutch in platform.nl.ts; getPlatform() in
// platform-i18n.ts picks per locale. Structure mirrors the home-content pattern.

export type PlatformEmbedKey = '05-sp-widget' | '06-multichannel-flow' | '07-crm-sync-tracker' | '08-deliverability' | '09-personalization' | '10-enrichment';

export interface PlatformBlock { title: string; body: string }

export interface PlatformRow {
  titlePre: string; titleAccent: string; titlePost: string;
  points: string[];
  embed: PlatformEmbedKey;
  stepEyebrow?: string;
  stepTitle?: string;
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
  eyebrow: string; title: string; body: string; href: string; linkLabel: string; steps?: string[];
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
    h1Pre: 'Six tools\u2019 worth of work. ', h1Accent: 'One platform', h1Post: '.',
    sub: 'hubsell replaces your data, enrichment, sequencer, deliverability, dialer, and CRM sync tools with one system: live data, multichannel outreach, and automatic CRM sync.',
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
        steps: ['Six live sources', 'Pooled into your ICP', 'Verified at the point of use'],
      },
      {
        eyebrow: 'Multichannel outreach',
        title: 'Email, LinkedIn, and phone in one flow',
        body: 'One coordinated sequence across all three channels, with branching that reacts to what each contact does and sending spread safely across your team\u2019s profiles.',
        href: '/platform/multichannel-outreach', linkLabel: 'Explore multichannel outreach',
        steps: ['One sequence, not three tools', 'Email, LinkedIn, and phone', 'Reacts to what they do'],
      },
      {
        eyebrow: 'CRM sync',
        title: 'Every touchpoint logged automatically',
        body: 'Sends, opens, replies, and connections land in Salesforce, HubSpot, or Pipedrive the moment they happen. No manual entry, no data rot.',
        href: '/platform/crm-sync', linkLabel: 'Explore CRM sync',
        steps: ['Every activity captured', 'Mapped to the right fields', 'Two-way, in real time'],
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
        stepEyebrow: 'How it works',
        stepTitle: 'From live signal to verified contact',
      },
      gridTitlePre: 'Data that is ', gridTitleAccent: 'correct on the day you use it', gridTitlePost: '',
      blocks: [
        {
          title: 'Zero-day sourcing',
          body: 'A bespoke database built at the moment of your request, not a shared list captured years ago. Fresh as of that day, with 80 to 90% coverage of your target market.',
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
        stepEyebrow: 'How it works',
        stepTitle: 'One flow across every channel',
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
        stepEyebrow: 'How it works',
        stepTitle: 'From activity to synced record',
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
{
      "path": "/platform/deliverability",
      "title": "Deliverability: land in the inbox, not the spam folder | hubsell",
      "metaDescription": "hubsell sends from your own mailboxes through the Google and Microsoft APIs, verifies every contact at source, and paces volume, so your outreach reaches the inbox.",
      "eyebrow": "Deliverability",
      "h1Pre": "Reach the ",
      "h1Accent": "inbox",
      "h1Post": ", not the spam folder",
      "sub": "Great targeting means nothing if the message never arrives. hubsell protects the whole path to the inbox: verified contacts, authenticated sending from your own mailboxes, and volume paced to keep your reputation intact.",
      "demoCta": "Book a demo",
      "row": {
            "titlePre": "Sent the way ",
            "titleAccent": "inboxes trust",
            "titlePost": "",
            "points": [
                  "Emails send through the Google and Microsoft APIs, straight from your own mailboxes, with no external relay in the path.",
                  "Every contact is verified the moment it is sourced, catch-all domains flagged, so bounces stay low.",
                  "Volume is spread across your sender profiles within safe limits, so a new domain is never blasted into a filter."
            ],
            "embed": "08-deliverability",
            "stepEyebrow": "How it works",
            "stepTitle": "From verified contact to the inbox"
      },
      "gridTitlePre": "Built to ",
      "gridTitleAccent": "get delivered",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Verified at source",
                  "body": "Each address is checked at the point of use, not pulled from a list captured months ago. Catch-all domains are flagged before you send, so you spend credits on contacts that can actually receive mail."
            },
            {
                  "title": "Sent from your mailboxes",
                  "body": "Outreach goes through the Google and Microsoft APIs directly from your own accounts. There is no third-party server in the path for filters to distrust, so your sending looks like what it is: real mail from a real person."
            },
            {
                  "title": "Authentication done right",
                  "body": "SPF, DKIM, and DMARC are the checks providers run to decide if mail is really from you. hubsell guides you to set all three correctly, so your domain passes and your messages are trusted."
            },
            {
                  "title": "Paced, not blasted",
                  "body": "Volume is spread across sender profiles and ramped within safe limits. A new domain warms up instead of spiking, so you build reputation rather than burning it on the first send."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "What landing in the inbox changes",
      "quoteSlug": "staffbase",
      "storySlug": "staffbase",
      "storyLabel": "Read the Staffbase story",
      "faqEyebrow": "FAQ",
      "faqTitle": "Common questions about deliverability",
      "faqSlugs": [
            "stop-sales-email-bounces",
            "hubsell-email-infrastructure",
            "hubsell-catch-all-domains"
      ],
      "closing": {
            "titlePre": "See your ",
            "titleAccent": "inbox placement",
            "titlePost": ", not just your open rate.",
            "sub": "Bring your current sending setup to a short call and we will show you where your mail is actually landing and why."
      },
      "closingCta": "Book a demo"
},
{
      "path": "/platform/personalization",
      "title": "Personalization at scale: relevant outreach for every contact | hubsell",
      "metaDescription": "hubsell personalizes outreach from live signals and verified data, so every message is relevant to the person and the moment, sent to thousands without losing the human touch.",
      "eyebrow": "Personalization",
      "h1Pre": "Relevant to ",
      "h1Accent": "every contact",
      "h1Post": ", at any volume",
      "sub": "Generic mail gets ignored. hubsell builds each message from live signals and verified data about the person and the account, so outreach reads as written for them, even when you send it to thousands.",
      "demoCta": "Book a demo",
      "row": {
            "titlePre": "Written for the ",
            "titleAccent": "person and the moment",
            "titlePost": "",
            "points": [
                  "Merge in real details about the person, the company, and what they are doing right now, not just a first name.",
                  "Live signals such as a job change, a hiring push, or event activity give every message a reason to exist.",
                  "The same flow personalizes one contact or ten thousand, so relevance does not cost you reach."
            ],
            "embed": "09-personalization",
            "stepEyebrow": "How it works",
            "stepTitle": "From live signal to a message that fits"
      },
      "gridTitlePre": "Relevance that ",
      "gridTitleAccent": "scales with you",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Beyond the first name",
                  "body": "Real personalization uses what is true about the account: the role, the company, the moment. hubsell pulls from verified data and live signals, so a message references something that actually matters to the reader."
            },
            {
                  "title": "Grounded in live signals",
                  "body": "A job change, a funding round, a hiring push, or engagement on a topic gives outreach a genuine hook. hubsell reads these signals and puts them to work, so the message arrives with a reason."
            },
            {
                  "title": "Consistent at volume",
                  "body": "Personalizing by hand does not scale, and mail merge fields feel hollow. hubsell keeps every message relevant whether you send ten or ten thousand, so reach and relevance stop pulling against each other."
            },
            {
                  "title": "Correct data underneath",
                  "body": "Personalization is only as good as the data behind it. Because every contact is verified at source, the details you reference are right, so a personalized line never lands as a wrong-company mistake."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "What real relevance changes",
      "quoteSlug": "elium",
      "storySlug": "elium",
      "storyLabel": "Read the Elium story",
      "faqEyebrow": "FAQ",
      "faqTitle": "Common questions about personalization",
      "faqSlugs": [
            "personalize-outreach-at-scale",
            "hubsell-conversion-rates"
      ],
      "closing": {
            "titlePre": "See outreach that ",
            "titleAccent": "reads as personal",
            "titlePost": ", at scale.",
            "sub": "Show us your audience on a short call and we will draft what personalized-at-scale outreach looks like for it."
      },
      "closingCta": "Book a demo"
},
{
      "path": "/platform/enrichment",
      "title": "Data enrichment: complete, verified contact records | hubsell",
      "metaDescription": "hubsell enriches every contact from multiple live sources and verifies the result at the point of use, so you get complete, current records instead of half-empty rows.",
      "eyebrow": "Enrichment",
      "h1Pre": "Complete records, ",
      "h1Accent": "verified today",
      "h1Post": "",
      "sub": "A half-filled contact record stalls outreach. hubsell enriches each contact from several live sources and verifies the result the moment you use it, so you work from complete, current data rather than gaps.",
      "demoCta": "Book a demo",
      "row": {
            "titlePre": "Filled from ",
            "titleAccent": "several live sources",
            "titlePost": "",
            "points": [
                  "Each record is built by drawing on multiple sources in turn, so a gap in one is filled by another.",
                  "Work email, phone, role, and company details come together into one complete contact, not a scatter of half-rows.",
                  "The finished record is verified at the point of use, so what you send to is correct on the day you use it."
            ],
            "embed": "10-enrichment",
            "stepEyebrow": "How it works",
            "stepTitle": "From partial row to complete, verified record"
      },
      "gridTitlePre": "Records that are ",
      "gridTitleAccent": "complete and current",
      "gridTitlePost": "",
      "blocks": [
            {
                  "title": "Multiple sources, one record",
                  "body": "hubsell draws on several live sources in turn, so where one comes up short another fills the gap. The result is a complete contact rather than a row with the important fields missing."
            },
            {
                  "title": "Verified at the point of use",
                  "body": "Enrichment without verification just fills fields with stale guesses. hubsell checks the finished record the moment you use it, catch-all domains included, so a complete record is also a correct one."
            },
            {
                  "title": "No decaying database",
                  "body": "A static enriched list starts rotting the day it is built. hubsell enriches live, on the day you ask, so you are not paying to top up records that were captured years ago and have drifted since."
            },
            {
                  "title": "Ready for outreach",
                  "body": "A complete, verified record flows straight into your sequences and your CRM. There is no export, no cleanup pass, no second tool, so the data you enrich is the data you send to."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "What complete data changes",
      "quoteSlug": "verhaert",
      "storySlug": "verhaert",
      "storyLabel": "Read the Verhaert story",
      "faqEyebrow": "FAQ",
      "faqTitle": "Common questions about enrichment",
      "faqSlugs": [
            "build-b2b-audience-no-decay",
            "third-party-intent-data-accuracy"
      ],
      "closing": {
            "titlePre": "See your list ",
            "titleAccent": "filled and verified",
            "titlePost": ".",
            "sub": "Send us a sample of your data on a short call and we will show you what live enrichment returns for it."
      },
      "closingCta": "Book a demo"
}
  ],
};
