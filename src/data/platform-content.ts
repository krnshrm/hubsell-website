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
  /** Optional text section after the value grid, for a topic a search
      term needs its own heading for (GDPR, CRM integrations, emails and dials). */
  extra?: { title: string; paras: string[]; links?: { label: string; href: string }[] };
  /** Redesign (2026-10-15), live data first. A page that has `compare` uses the
      new order: hero with a flow slice, stages strip, before and after, how it
      works, detail, proof, closing CTA, FAQ. */
  heroSlice?: 'live-data' | 'enrichment' | 'multichannel' | 'crm-sync';
  /** Simple numbered steps for pages without a stepped walkthrough widget. */
  howSteps?: { note?: string; items: { title: string; body: string }[] };
  compare?: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; colA: string; colB: string; rows: [string, string, string][] };
  /** New layout: every section gets a keyword eyebrow and a two-colour H2. */
  heads?: Record<'signals' | 'explained' | 'steps' | 'extra' | 'proof' | 'closing' | 'faq', { eyebrow: string; pre: string; accent: string; post: string }>;
  /** New layout: one card per sourcing signal, each with its own H3. */
  signals?: { sub: string; startLabel: string; items: { id: string; title: string; body: string; start: string }[] };
  /** Page-specific FAQ written for answer engines; also emitted as FAQPage schema. */
  faqs?: { question: string; answer: string }[];
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
        body: 'One coordinated flow across all three channels, with branching that reacts to what each contact does and sending spread safely across your team\u2019s profiles.',
        href: '/platform/multichannel-outreach', linkLabel: 'Explore multichannel outreach',
        steps: ['One flow, not three tools', 'Email, LinkedIn, and phone', 'Reacts to what they do'],
      },
      {
        eyebrow: 'CRM sync',
        title: 'Every touchpoint logged automatically',
        body: 'Sends, opens, replies, and connections land in Salesforce, HubSpot, or Pipedrive the moment they happen. No manual entry, no data rot.',
        href: '/platform/crm-sync', linkLabel: 'Explore CRM sync',
        steps: ['Every activity captured', 'Mapped to the right fields', 'Logged in real time'],
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
    ratingsLine: 'Rated 4.6+ across G2, Capterra, and GetApp.',
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
      title: 'B2B data provider with live, GDPR-compliant data | hubsell',
      metaDescription: 'hubsell is a B2B data provider that sources contacts live, matched to your ICP and verified at the point of use. GDPR-compliant B2B data, hosted in Frankfurt.',
      heroSlice: "live-data",
      compare: {"eyebrow": "B2B data provider", "titlePre": "B2B contact database versus ", "titleAccent": "live-sourced B2B data", "titlePost": "", "colA": "Bought database", "colB": "hubsell live data", "rows": [["Captured", "Months or years before you use it", "The day you ask for it"], ["Ageing", "25 to 30% goes out of date every year", "Sourced fresh for each request, so nothing sits and ages"], ["Accuracy", "Unknown until the bounces come back", "95%, catch-all domains included, verified at the point of use"], ["Relevance", "Filtered by title and industry", "Matched to your ICP and to the buying signals you choose"], ["What you pay for", "Access to the whole database, used or not", "Processing results, step by step, for the contacts you keep"], ["Who controls the data", "The vendor keeps it and resells it", "You are the controller, hubsell is the processor"]]},
      heads: {"signals": {"eyebrow": "Buying signals", "pre": "Six ways to find ", "accent": "B2B prospects from buying signals", "post": ""}, "steps": {"eyebrow": "Zero-day sourcing", "pre": "How ", "accent": "live B2B data sourcing", "post": " works"}, "extra": {"eyebrow": "GDPR", "pre": "", "accent": "GDPR-compliant", "post": " B2B data"}, "proof": {"eyebrow": "Customer results", "pre": "What ", "accent": "accurate B2B data", "post": " changes"}, "closing": {"eyebrow": "B2B prospecting tool", "pre": "Start B2B prospecting with ", "accent": "data sourced today", "post": "."}, "faq": {"eyebrow": "B2B data FAQ", "pre": "Questions about ", "accent": "live B2B data", "post": ""}, "explained": {"eyebrow": "LinkedIn prospecting", "pre": "LinkedIn prospecting, ", "accent": "signal by signal", "post": ""}},
      signals: {"sub": "Each signal starts from a link, a search or your ICP. hubsell collects the people, checks them against your ICP and enriches the ones that fit, ready for outreach.", "startLabel": "Starts from", "items": [{"id": "post", "title": "LinkedIn post engagement", "body": "People who react to, comment on or repost a LinkedIn post have already shown interest in the topic. hubsell collects them from the post, checks each one against your ICP and enriches the ones that fit. Use your own posts, a competitor’s or those of a known voice in your industry.", "start": "A link to any LinkedIn post"}, {"id": "event", "title": "LinkedIn event attendees", "body": "Everyone who registers for a LinkedIn event has signed up to a topic. hubsell collects the attendee list, qualifies it against your ICP and enriches the contacts that fit, so you can reach them before, during or after the event.", "start": "A link to a LinkedIn event"}, {"id": "followers", "title": "Company and competitor followers", "body": "People who follow your company page already know you. People who follow a competitor’s page are interested in what you sell. hubsell collects both groups and keeps only the people who match your ICP.", "start": "Your company page or a competitor’s"}, {"id": "jobs", "title": "Job changes", "body": "Someone new in a role is building their stack and their team, which makes the first months the best time to reach them. hubsell finds people who recently changed jobs in your target accounts and roles.", "start": "Your ICP: roles and target companies"}, {"id": "hiring", "title": "Companies hiring for specific roles", "body": "A company hiring SDRs or account executives is investing in sales right now. hubsell takes a LinkedIn search filtered on companies hiring for those roles and finds the decision-makers there.", "start": "A LinkedIn search with the hiring filter"}, {"id": "search", "title": "LinkedIn and Sales Navigator searches", "body": "If you already know who you want, paste a LinkedIn people search or a Sales Navigator lead search. hubsell runs it, qualifies the results with AI and enriches the ones that fit, without exporting a list by hand.", "start": "A LinkedIn or Sales Navigator search link"}]},
      faqs: [{"question": "What is live-sourced B2B data, and how is it different from a B2B contact database?", "answer": "<p>Live-sourced data is collected at the moment you ask for it, for your search, instead of coming from a database that was captured months or years earlier. hubsell builds a fresh set of contacts for each request, matched to your ICP and verified at the point of use. A contact database sells access to records that have been ageing since the day they were collected.</p>"}, {"question": "How quickly does B2B contact data go out of date?", "answer": "<p>B2B decision-makers change jobs about every 2.5 years, so a static database loses 25 to 30% of its accuracy every year. Emails bounce, titles change and people move to another company. Data sourced on the day you use it avoids that decay.</p>"}, {"question": "Where does hubsell’s B2B data come from?", "answer": "<p>hubsell sources data live from LinkedIn and company websites, and creates data itself, for example by generating and validating work email addresses. Phone numbers come from partners chosen for accuracy and quality, not price.</p>"}, {"question": "Is hubsell’s B2B data GDPR-compliant?", "answer": "<p>Yes. hubsell sources and processes data ad hoc for each customer and does not keep it to resell. The customer is the data controller and hubsell is the processor, under a data processing agreement. hubsell is based in Berlin, runs on servers in Frankfurt and deletes account data within 30 days after a contract ends.</p>"}, {"question": "What is the legal basis for B2B outreach under the GDPR?", "answer": "<p>For outreach to business contacts, the legal basis is usually legitimate interest. With hubsell, the customer stays the data controller and sets the purpose before a single contact is sourced, and hubsell processes the data for that purpose only. Rules for cold email differ by country, so read our <a class=\"link\" href=\"/insights/b2b-data-compliance/\">guide to B2B data compliance</a>.</p>"}, {"question": "What buying signals can hubsell source contacts from?", "answer": "<p>hubsell can source people who engaged with a LinkedIn post, attended a LinkedIn event, follow your company page or a competitor’s, recently changed jobs, or work at companies hiring for specific roles. You can also start from a LinkedIn or Sales Navigator search, or import your own list.</p>"}, {"question": "How does hubsell find the people who engaged with a LinkedIn post or attended an event?", "answer": "<p>Paste the link to the post or event into hubsell. It collects the people who reacted, commented or registered, qualifies them against your ICP, and enriches the ones that fit with verified contact data. They can then go straight into a flow of LinkedIn, email and call tasks.</p>"}, {"question": "How accurate is hubsell’s contact data?", "answer": "<p>hubsell’s data is 95% accurate, catch-all domains included, and covers 80 to 90% of a target market. Every record is verified at the point of use, not when it was first collected. hubsell is happy to run a comparison test against your current provider.</p>"}, {"question": "How does hubsell charge for data, and do I pay for contacts I can’t use?", "answer": "<p>You pay for processing results, step by step: sourcing, then enrichment, validated email addresses and phone numbers. Because each step is charged on its own, you can review the sourced contacts first and suppress the ones that are not relevant, so you only pay to enrich the contacts you keep. <a class=\"link\" href=\"/pricing/\">See pricing</a>.</p>"}, {"question": "How does hubsell compare to ZoomInfo, Apollo or Cognism for B2B data?", "answer": "<p>ZoomInfo, Apollo and Cognism sell access to a database. hubsell sources data fresh for each request, so it is current, qualified against your ICP and relevant to the signals you choose. hubsell also runs the outreach and syncs it to your CRM, where those tools mostly stop at the data. Compare: <a class=\"link\" href=\"/vs/zoominfo/\">ZoomInfo</a>, <a class=\"link\" href=\"/vs/apollo/\">Apollo</a>, <a class=\"link\" href=\"/vs/cognism/\">Cognism</a>.</p>"}],
      extra: {"title": "GDPR-compliant B2B data", "paras": ["hubsell sources and processes data ad hoc, for a purpose you set before a single contact is sourced, and does not keep it to resell. You stay the data controller and hubsell is your processor. A database vendor works the other way round: it collects data to sell it again.", "Outreach to business contacts rests on legitimate interest under the GDPR. hubsell is based in Berlin, Germany, and the platform runs on Amazon Web Services servers in Frankfurt.", "Every customer can sign hubsell’s data processing agreement, which sets out how personal data is handled, which sub-processors may work with it and how requests from the people in your data are answered. When a contract ends, the data in your account is deleted within 30 days."], "links": [{"label": "Read the data processing agreement", "href": "/data-processing-agreement"}, {"label": "Guide: B2B data compliance and cold outreach", "href": "/insights/b2b-data-compliance"}]},
      eyebrow: 'Live B2B data',
      h1Pre: 'B2B data sourced ', h1Accent: 'today', h1Post: ', not two years ago',
      sub: 'hubsell is a B2B data provider that does not sell access to a static database. Define your ICP and we source contacts live from LinkedIn, layer buying signals on top, and verify every record before it enters your flow.',
      demoCta: 'Book a demo',
      heroTimeline: true,
      row: {
        titlePre: 'Sourced from ', titleAccent: 'live buying signals', titlePost: '',
        points: [
          'Most platforms let you filter by title and industry. hubsell also reads behavior.',
          'People following your company page or a competitor\u2019s, engaging with a LinkedIn post, changing jobs, attending events, or hiring for specific roles.',
          'Signals tell you who is worth contacting this week, not just who matches a filter.',
        ],
        embed: '05-sp-widget',
        stepEyebrow: 'How it works',
        stepTitle: 'From live signal to verified contact',
      },
      gridTitlePre: 'B2B contact data that is ', gridTitleAccent: 'correct on the day you use it', gridTitlePost: '',
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
      title: 'Multichannel outreach platform: email, LinkedIn, and phone | hubsell',
      metaDescription: 'Run LinkedIn, email and call tasks as one flow. Safe LinkedIn automation across several sender profiles, email from your own mailboxes, calls logged in your CRM.',
      heroSlice: "multichannel",
      compare: {"eyebrow": "LinkedIn and email outreach", "titlePre": "Three separate tools versus ", "titleAccent": "one multichannel flow", "titlePost": "", "colA": "Separate tools", "colB": "hubsell multichannel outreach", "rows": [["Channels", "An email tool, a LinkedIn tool and a task list, each on its own", "Email, LinkedIn and call tasks in one flow"], ["Reacting to the contact", "Someone has to stop the other tools by hand", "Branches route each contact by what they do: accepted, opened, replied or quiet"], ["Who sends on LinkedIn", "SDR profiles, under 20% of invites accepted", "Founder and expert profiles, over 50% accepted"], ["LinkedIn volume", "One profile carries all the activity", "Spread across 5 to 10 sender profiles within strict limits"], ["Email sending", "Through outside sending servers and tracking links", "From your own mailboxes through the Google and Microsoft APIs"], ["Calls", "A separate dialer and manual logging", "Call tasks in Salesforce, HubSpot or Pipedrive, logged with the flow"]]},
      heads: {"signals": {"eyebrow": "Multichannel outreach platform", "pre": "A multichannel outreach platform, ", "accent": "not three tools", "post": ""}, "explained": {"eyebrow": "LinkedIn automation", "pre": "LinkedIn and email outreach, ", "accent": "step by step", "post": ""}, "steps": {"eyebrow": "How it works", "pre": "How a ", "accent": "multichannel flow", "post": " runs"}, "extra": {"eyebrow": "LinkedIn safety", "pre": "", "accent": "Safe LinkedIn automation", "post": ", within the limits"}, "proof": {"eyebrow": "Customer results", "pre": "What ", "accent": "coordinated outreach", "post": " changes"}, "closing": {"eyebrow": "LinkedIn and email outreach", "pre": "Run LinkedIn, email and calls as ", "accent": "one flow", "post": "."}, "faq": {"eyebrow": "Multichannel outreach FAQ", "pre": "Questions about ", "accent": "multichannel outreach", "post": ""}},
      signals: {"sub": "Every step is a block in the flow builder. Put them in the order that fits your buyers, and let the conditions decide who goes where.", "startLabel": "Use it for", "items": [{"id": "visit", "title": "Profile visits", "body": "A profile visit shows the prospect who is about to reach out, before anything is asked of them.", "start": "Warming up a contact before the invite"}, {"id": "invite", "title": "Connection requests", "body": "Invites go out from the profiles buyers accept. Requests from founders and experts are accepted over 50% of the time, where SDR profiles stay under 20%.", "start": "Building a first-degree network with your buyers"}, {"id": "message", "title": "LinkedIn messages", "body": "Once an invite is accepted, a direct message follows after the wait you set. What happens next depends on whether the contact replies.", "start": "The first real conversation"}, {"id": "inmail", "title": "InMail", "body": "InMail reaches people outside your network without a connection request first.", "start": "Contacts who matter too much to wait"}, {"id": "email", "title": "Email steps", "body": "Emails go out from your own Google or Microsoft mailboxes through their APIs, with no outside server or tracking redirect in the path.", "start": "Everyone with a verified email, including those who did not accept"}, {"id": "call", "title": "Call tasks", "body": "Phone steps create call tasks in Salesforce, HubSpot or Pipedrive. Reps dial from the CRM and the outcome is logged with the rest of the flow.", "start": "The contacts worth a conversation"}, {"id": "branch", "title": "Conditions and branches", "body": "Each contact is routed by what they do: accepted, opened, replied or went quiet. Someone who accepts gets a message, someone who does not gets an email instead.", "start": "Keeping every contact on the right path"}, {"id": "wait", "title": "Waits", "body": "Wait steps space the touches out, for example a day after an accepted invite, or a week before an unanswered invite is withdrawn.", "start": "A pace that feels personal, not automated"}]},
      extra: {"title": "Safe LinkedIn automation", "paras": ["LinkedIn restricts accounts when a lot of activity is packed into a short time. hubsell does the opposite: it builds your first-degree network slowly and steadily, 365 days a year, within strict platform limits.", "Activity is spread across 5 to 10 sender profiles from your team, so no single profile carries the volume. Lower volume per sender keeps every profile healthy and protects your email domain as well.", "Invites that are not accepted are withdrawn after the wait you set, so pending requests do not pile up on a profile."], "links": [{"label": "How hubsell protects email deliverability", "href": "/platform/deliverability"}]},
      faqs: [{"question": "What is a multichannel outreach platform?", "answer": "<p>A multichannel outreach platform runs LinkedIn, email and phone as one flow instead of three separate tools. hubsell decides the next step for each contact from what they did on any channel, so an accepted invite, an opened email or a reply moves them along without anyone switching tools.</p>"}, {"question": "Can I run LinkedIn and email outreach in one flow?", "answer": "<p>Yes. In hubsell, LinkedIn steps (profile visits, connection requests, messages, InMail), email steps and call tasks sit in one flow. Conditions route each contact: someone who accepts the invite gets a LinkedIn message, someone who does not gets an email instead.</p>"}, {"question": "Is LinkedIn automation safe? How does hubsell avoid restrictions?", "answer": "<p>LinkedIn restricts accounts when a lot of activity is packed into a short period. hubsell builds your first-degree network slowly and steadily, 365 days a year, within strict platform limits, and spreads the activity across 5 to 10 sender profiles so no single profile carries the volume.</p>"}, {"question": "Which LinkedIn actions can hubsell automate?", "answer": "<p>Profile visits, connection requests, direct messages and InMail, plus withdrawing invites that were not accepted. Each action is a step in the same flow as your emails and call tasks.</p>"}, {"question": "Does hubsell send emails from my own mailbox?", "answer": "<p>Yes. Emails go out from your own Google or Microsoft mailboxes through their APIs. There is no external SMTP server and no tracking redirect in the email, which keeps your messages looking like what they are: real mail from a real person. More on <a class=\"link\" href=\"/platform/deliverability/\">deliverability</a>.</p>"}, {"question": "Who should send LinkedIn outreach: SDRs or executives?", "answer": "<p>The sender changes the result. Connection requests from SDRs are usually accepted less than 20% of the time, because buyers expect a pitch. The same request from a founder, executive or subject matter expert is accepted more than 50% of the time. hubsell runs outreach from the profiles buyers accept.</p>"}, {"question": "Can hubsell run outreach from several LinkedIn profiles at once?", "answer": "<p>Yes. hubsell runs outreach from your CEO, sales leaders and subject matter experts from one place, so several people can engage the same account in a coordinated way, and the volume is spread across their profiles.</p>"}, {"question": "What results can I expect from LinkedIn and email outreach with hubsell?", "answer": "<p>Following the hubsell playbook, teams typically see 25 to 40% of connection requests accepted, 10 to 15% replies and 3 to 5% conversations started. Results are at the higher end when the sender profiles do not read as salesy.</p>"}, {"question": "Can hubsell make phone calls?", "answer": "<p>hubsell has no built-in dialer. Phone steps create call tasks in Salesforce, HubSpot or Pipedrive, so reps call from the CRM they already use and the outcome is logged with the rest of the flow. See <a class=\"link\" href=\"/platform/crm-sync/\">CRM sync</a>.</p>"}, {"question": "How does hubsell compare to Outreach or Salesloft?", "answer": "<p>Outreach and Salesloft are email sequence tools: they do not source data and do not run LinkedIn natively, so you still need a data provider and a manual LinkedIn process. hubsell covers all three layers: live prospect data, LinkedIn and email in one flow with call tasks, and automatic CRM sync.</p>"}],
      eyebrow: 'Multichannel outreach',
      h1Pre: 'Multichannel outreach across ', h1Accent: 'email, LinkedIn, and phone', h1Post: '',
      sub: 'Stop juggling an email tool, a LinkedIn tool, and a task list. hubsell runs all three channels as one coordinated flow that reacts to what each contact does.',
      demoCta: 'Book a demo',
      row: {
        titlePre: 'A multichannel outreach platform, ', titleAccent: 'not three tools', titlePost: '',
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
          body: 'Outreach is spread across 5 to 10 internal sender profiles, within strict platform limits. Lower volume per sender, higher deliverability, no domain burn. LinkedIn automation runs with safe daily limits on every profile.',
        },
        {
          title: 'Sent from the right profiles',
          body: 'SDR connection requests sit below 20% acceptance because buyers expect a pitch. The same request from a founder or expert lands above 50%. hubsell runs outreach from the profiles buyers accept.',
        },
        {
          title: 'Calls where reps work',
          body: 'Phone steps land as call tasks in Salesforce, HubSpot, or Pipedrive, so reps dial from the CRM they already use and the outcome is logged with the rest of the flow.',
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
        sub: 'Bring one of your current campaigns to a short call and we will map it into a single hubsell flow.',
      },
      closingCta: 'Book a demo',
    },

    {
      path: '/platform/crm-sync',
      title: 'CRM sync: LinkedIn and email activity in HubSpot, Salesforce and Pipedrive | hubsell',
      metaDescription: 'Sync LinkedIn and email activity to HubSpot, Salesforce or Pipedrive. Push contacts by hand or by rule, match existing records, and log every touch as it happens.',
      heroSlice: "crm-sync",
      compare: {"eyebrow": "CRM integration", "titlePre": "Manual CRM logging versus ", "titleAccent": "automatic CRM sync", "titlePost": "", "colA": "Logging by hand", "colB": "hubsell CRM sync", "rows": [["Getting contacts in", "CSV exports and imports, or typing records in", "Pushed by hand or automatically, by the conditions you set"], ["Duplicates", "A second record every time someone imports a list", "Matched to existing records instead of creating new ones"], ["LinkedIn activity", "Stays in LinkedIn, invisible to the rest of the team", "Visits, invites, messages and replies on the contact record"], ["Email activity", "Logged when a rep remembers", "Sends, opens and replies logged as they happen"], ["Calls", "A dialer plus a note typed in afterwards", "Call tasks in the CRM, outcome on the record"], ["Existing customers", "Contacted again because nobody checked the CRM", "CRM contacts suppressed before outreach starts"]]},
      heads: {"signals": {"eyebrow": "CRM integration", "pre": "Every touchpoint ", "accent": "logged in your CRM", "post": ""}, "explained": {"eyebrow": "Sync LinkedIn to your CRM", "pre": "What hubsell syncs ", "accent": "to your CRM", "post": ""}, "steps": {"eyebrow": "How it works", "pre": "From flow step ", "accent": "to CRM record", "post": ""}, "extra": {"eyebrow": "Salesforce, HubSpot and Pipedrive integration", "pre": "Your CRM stays the ", "accent": "system of record", "post": ""}, "proof": {"eyebrow": "Customer results", "pre": "What changes with ", "accent": "automatic CRM logging", "post": ""}, "closing": {"eyebrow": "Automatic CRM sync", "pre": "Your CRM, ", "accent": "always up to date", "post": "."}, "faq": {"eyebrow": "CRM sync FAQ", "pre": "Questions about ", "accent": "CRM sync", "post": ""}},
      signals: {"sub": "Everything below can go to Salesforce, HubSpot or Pipedrive. You choose what is pushed and when.", "startLabel": "In the CRM", "items": [{"id": "company", "title": "Contacts and companies", "body": "People and their companies are created in the CRM, or matched to the record that already exists and updated.", "start": "One record per person"}, {"id": "email", "title": "Email activity", "body": "Every email a flow sends, plus opens and replies, is logged on the contact as it happens.", "start": "Activity on the contact timeline"}, {"id": "invite", "title": "LinkedIn invites and connections", "body": "Connection requests and accepted invites show up on the contact next to email, so the whole team sees the LinkedIn side of outreach.", "start": "Activity on the contact timeline"}, {"id": "message", "title": "LinkedIn messages and replies", "body": "Messages and InMail sent from your team’s profiles, and the replies to them, are logged on the record.", "start": "Activity on the contact timeline"}, {"id": "call", "title": "Call tasks and outcomes", "body": "Phone steps create a call task in the CRM. The rep calls from the CRM and logs the outcome there.", "start": "A task in the CRM"}, {"id": "branch", "title": "Push rules", "body": "Decide which contacts go across: push by hand, or set conditions, for example only the contacts who reply.", "start": "Only the contacts worth a record"}, {"id": "map", "title": "Field mapping", "body": "Choose which hubsell field fills which CRM field, so the data lands where your reports expect it.", "start": "Your fields, your structure"}, {"id": "ban", "title": "Suppressing CRM contacts", "body": "Contacts already in your CRM, such as customers or open deals, can be left out before outreach starts.", "start": "Not contacting customers by mistake"}]},
      extra: {"title": "Your CRM stays the system of record", "paras": ["hubsell writes to Salesforce, HubSpot and Pipedrive. It does not replace them, and your team does not have to work in two places.", "Before it writes, hubsell looks for the record that already exists and updates it, so pushing the same person twice does not create a second contact.", "Contacts already in your CRM can be suppressed before a flow starts, so customers and open deals are not contacted by mistake."], "links": [{"label": "How to connect your CRM", "href": "/knowledge/connect-your-crm"}]},
      faqs: [{"question": "Does hubsell integrate with HubSpot, Salesforce and Pipedrive?", "answer": "<p>Yes. hubsell has native integrations with all three. You connect your CRM once under Integrations and grant the permissions it asks for. From then on the sync runs in real time, without Zapier, middleware or CSV files. See <a class=\"link\" href=\"/knowledge/connect-your-crm/\">how to connect your CRM</a>.</p>"}, {"question": "How do I sync LinkedIn activity to HubSpot?", "answer": "<p>Connect HubSpot to hubsell and run your LinkedIn outreach in a hubsell flow. Profile visits, connection requests, accepted invites, messages and replies are then logged on the HubSpot contact, next to email activity and call tasks. Salesforce and Pipedrive work the same way.</p>"}, {"question": "What does hubsell sync to my CRM?", "answer": "<p>Contacts and their companies, email activity (sent, opened, replied), LinkedIn activity (profile visits, connection requests, accepted invites, messages, InMail and replies) and call tasks with their outcomes.</p>"}, {"question": "Are contacts pushed to my CRM automatically?", "answer": "<p>Only if you want them to be. You can push contacts by hand, or set conditions that push them automatically, for example only the contacts who reply. Connecting your CRM does not send anything across on its own.</p>"}, {"question": "Will hubsell create duplicate records in my CRM?", "answer": "<p>No. Before it writes, hubsell matches each contact and company to the record that already exists and updates it, instead of creating a second one.</p>"}, {"question": "Can I exclude contacts who are already in my CRM?", "answer": "<p>Yes. Contacts already in your CRM, such as customers or people in open deals, can be suppressed before outreach starts, so nobody is contacted by mistake.</p>"}, {"question": "Is hubsell’s CRM sync two-way?", "answer": "<p>Today the sync runs from hubsell into your CRM. hubsell writes contacts, companies and activity, and checks the CRM for existing records and for contacts to suppress. Changes made in the CRM are not written back into hubsell yet. Two-way sync is planned.</p>"}, {"question": "Can I choose which CRM fields hubsell fills?", "answer": "<p>Yes. You map hubsell fields to the fields in your CRM, so the data lands where your reports and workflows expect it.</p>"}, {"question": "How are phone calls logged in the CRM?", "answer": "<p>hubsell has no built-in dialer. A phone step in a flow creates a call task in Salesforce, HubSpot or Pipedrive. The rep calls from the CRM and logs the outcome on the same record as the email and LinkedIn activity.</p>"}, {"question": "Why log outreach activity in the CRM automatically?", "answer": "<p>Manual logging is slow and incomplete, so pipeline reports show what reps remembered to type in. When every touch is logged as it happens, the record is complete and reps get the time back. Elium saved around 20 hours a week after switching to hubsell.</p>"}],
      eyebrow: 'CRM sync',
      h1Pre: 'LinkedIn and email, ', h1Accent: 'synced to your CRM', h1Post: '',
      sub: 'hubsell feeds HubSpot, Salesforce and Pipedrive, it does not replace them. You decide which contacts go across, by hand or by rule, and every email, LinkedIn step and call task lands on the right record as it happens.',
      demoCta: 'Book a demo',
      row: {
        titlePre: 'Logged ', titleAccent: 'the moment it happens', titlePost: '',
        points: [
          'Email sends, opens and replies, LinkedIn steps and call tasks land on the contact record in Salesforce, HubSpot or Pipedrive.',
          'Contacts and companies are matched to existing records, so the sync updates what is already there instead of creating duplicates.',
          'No manual entry and no CSV in between. Your team works the pipeline, not the spreadsheet.',
        ],
        embed: '07-crm-sync-tracker',
        stepEyebrow: 'How it works',
        stepTitle: 'From activity to synced record',
      },
      gridTitlePre: 'A system of record you can ', gridTitleAccent: 'finally trust', gridTitlePost: '',
      blocks: [
        {
          title: 'Salesforce, HubSpot, and Pipedrive',
          body: 'Native sync into the three CRMs, in real time. No middleware, no CSV exports, no nightly jobs.',
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
      "title": "Email deliverability: land in the inbox, not the spam folder | hubsell",
      "metaDescription": "Email deliverability with hubsell: send from your own mailboxes through the Google and Microsoft APIs, verify every contact at source, and pace volume to reach the inbox.",
      "eyebrow": "Deliverability",
      "h1Pre": "Email deliverability: reach the ",
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
      "title": "Contact data enrichment: verified emails and phone numbers | hubsell",
      "metaDescription": "hubsell enriches contacts live: work emails 95% accurate, catch-all included, phone numbers from quality partners. You pay only for each step that succeeds.",
      "heroSlice": "enrichment",
      "compare": {"eyebrow": "B2B data enrichment", "titlePre": "Database enrichment versus ", "titleAccent": "live enrichment", "titlePost": "", "colA": "Database enrichment", "colB": "hubsell live enrichment", "rows": [["Where the data comes from", "A vendor’s database, filled once and resold", "Sourced and orchestrated by hubsell the day you enrich; only phone numbers from partners"], ["Email accuracy", "Unknown until the bounces come back", "95%, catch-all domains included"], ["Names, titles, companies", "As current as the last time the record was updated", "99% accurate, matched to the current profile"], ["Catch-all domains", "Often marked unknown and left out", "Validated like every other address"], ["What you pay for", "A record, whether or not it is complete", "Each step that succeeds, charged in fractions"]]},
      "heads": {"signals": {"eyebrow": "Email finder and phone finder", "pre": "One record, ", "accent": "orchestrated by hubsell", "post": ""}, "explained": {"eyebrow": "Data enrichment", "pre": "Contact data enrichment, ", "accent": "field by field", "post": ""}, "steps": {"eyebrow": "How enrichment works", "pre": "How a list gets ", "accent": "enriched, step by step", "post": ""}, "extra": {"eyebrow": "Email verification", "pre": "", "accent": "Catch-all email verification", "post": ", built in"}, "proof": {"eyebrow": "Customer results", "pre": "What ", "accent": "complete contact data", "post": " changes"}, "closing": {"eyebrow": "B2B email finder", "pre": "Enrich your list with ", "accent": "verified contact data", "post": "."}, "faq": {"eyebrow": "Data enrichment FAQ", "pre": "Questions about ", "accent": "contact data enrichment", "post": ""}},
      "signals": {"sub": "Each field is sourced or generated by hubsell on the day you enrich, and checked before it reaches your outreach or CRM.", "startLabel": "Accuracy", "items": [{"id": "email", "title": "Work email addresses", "body": "hubsell generates and validates the work email address for each contact with its own methods, at the point of use. Addresses on catch-all domains are validated too, so they do not have to be skipped.", "start": "95%, catch-all domains included"}, {"id": "phone", "title": "Direct dials and mobile numbers", "body": "Direct dials and mobile numbers come from partners chosen for accuracy and quality, not price. Phone enrichment is optional, so you add it only for the contacts you plan to call.", "start": "From partner databases chosen for quality"}, {"id": "profile", "title": "LinkedIn profile URLs", "body": "For an imported list, hubsell matches each contact to their LinkedIn profile from their full name, company name and title. The profile is what lets a contact enter the LinkedIn steps of a flow.", "start": "99%"}, {"id": "clean", "title": "Names, titles and companies, cleaned", "body": "Imported lists carry old titles, typos and inconsistent company names. hubsell cleans and normalises each record with AI and corrects what has changed since the list was built.", "start": "99%"}]},
      "howSteps": {"note": "Each step is charged only when it succeeds, in fractions rather than a flat price per contact. Enrichment that does not finish costs nothing.", "items": [{"title": "Source the data", "body": "Each contact’s data is collected live from LinkedIn and company websites."}, {"title": "Clean and normalise with AI", "body": "Names, titles and companies are cleaned and put into one consistent format."}, {"title": "Add missing data", "body": "Gaps in the record are filled, such as a missing title or company detail."}, {"title": "Generate and validate the email", "body": "Work emails are generated and validated with hubsell’s own methods, catch-all included."}, {"title": "Source the phone number", "body": "Optional: a direct dial or mobile number from a quality partner."}, {"title": "Quality check", "body": "Every record is checked before it is handed over for use."}]},
      "extra": {"title": "Catch-all email verification", "paras": ["A catch-all domain accepts mail for any address, so a standard check cannot tell a real mailbox from a wrong one. Lists usually mark these contacts as unknown, which leaves you to skip them or risk bounces.", "hubsell verifies addresses on catch-all domains as part of every enrichment, at the moment you use the data. That is how 95% of the emails it delivers are accurate, catch-all domains included, and why your bounce rate stays low."], "links": [{"label": "How hubsell protects deliverability", "href": "/platform/deliverability"}]},
      "faqs": [{"question": "What is contact data enrichment?", "answer": "<p>Contact data enrichment adds the missing details to a contact record: a work email, a phone number, a LinkedIn profile and a current title and company. hubsell enriches each contact live, on the day you ask, and verifies the result before it reaches your outreach or CRM.</p>"}, {"question": "What do I need to enrich a list with hubsell?", "answer": "<p>A full name, company name and title for each contact. From that, hubsell sources the person’s data live, cleans and normalises it with AI, fills the gaps, generates and validates the work email and, if you want it, adds a phone number. Every record gets a quality check before you use it.</p>"}, {"question": "How accurate is hubsell’s enrichment?", "answer": "<p>95% of work email addresses are accurate, catch-all domains included. Names, titles, companies and LinkedIn profiles are 99% accurate. Phone numbers come from partner databases, so hubsell does not give one accuracy figure for them, but those partners are chosen for accuracy and quality, not price.</p>"}, {"question": "Can hubsell verify email addresses on catch-all domains?", "answer": "<p>Yes. A catch-all domain accepts mail for any address, so a standard check cannot tell a real mailbox from a wrong one. hubsell verifies addresses on catch-all domains too, and they are part of the 95% accuracy figure.</p>"}, {"question": "Does hubsell find mobile numbers and direct dials?", "answer": "<p>Yes, both. Phone numbers come from partners chosen for accuracy and quality rather than price. Phone enrichment is optional, so you only add it for the contacts you plan to call.</p>"}, {"question": "How does hubsell charge for enrichment?", "answer": "<p>Enrichment is charged per step that succeeds: sourcing the data, cleaning it, adding missing data, generating the email and adding the phone number. Charges are fractional, so you pay for each result rather than a flat price per contact, and enrichment that does not finish costs nothing. <a class=\"link\" href=\"/pricing/\">See pricing</a>.</p>"}, {"question": "Where does hubsell’s enrichment data come from?", "answer": "<p>hubsell sources and orchestrates the data itself, live from LinkedIn and company websites, and generates and validates work email addresses with its own methods. It does not run your contacts through other vendors’ databases. Only phone numbers come from partners, chosen for accuracy and quality.</p>"}, {"question": "How is live enrichment different from enriching from a B2B database?", "answer": "<p>A database enriches your list from records it collected earlier, so the details can be months or years old. hubsell looks each contact up on the day you enrich, so the title, company and email are current when you use them.</p>"}, {"question": "Can enriched contacts go straight into outreach and my CRM?", "answer": "<p>Yes. Enriched contacts go straight into your LinkedIn, email and call flows in hubsell and sync to Salesforce, HubSpot or Pipedrive, with no export or cleanup step. See <a class=\"link\" href=\"/platform/multichannel-outreach/\">multichannel outreach</a> and <a class=\"link\" href=\"/platform/crm-sync/\">CRM sync</a>.</p>"}, {"question": "Is enriched data GDPR-compliant?", "answer": "<p>Yes. hubsell enriches data ad hoc for each customer and does not keep it to resell. You stay the data controller and hubsell is the processor, under a data processing agreement. More on <a class=\"link\" href=\"/platform/live-data/#pf-extra\">GDPR-compliant B2B data</a>.</p>"}],
      "eyebrow": "Contact data enrichment",
      "h1Pre": "Contact data enrichment, ",
      "h1Accent": "verified today",
      "h1Post": "",
      "sub": "A half-filled contact record stalls outreach. From a full name, company and title, hubsell sources the person’s data live, cleans it with AI, fills the gaps, then adds a validated work email and, if you want it, a phone number.",
      "demoCta": "Book a demo",
      "row": {
            "titlePre": "One record, ",
            "titleAccent": "orchestrated by hubsell",
            "titlePost": "",
            "points": [
                  "hubsell sources and orchestrates every field itself: profile, title and company from LinkedIn and company websites, and work emails generated and validated with its own methods.",
                  "Only phone numbers come from partners, chosen for accuracy and quality rather than price.",
                  "Every record gets a quality check before it is handed over, so it is correct on the day you use it."
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
                  "body": "A complete, verified record goes straight into your flows and your CRM. There is no export, no cleanup pass, no second tool, so the data you enrich is the data you send to."
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
