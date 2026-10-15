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
  /** Signals as an accordion merged with the intro row (no row visual). */
  signalsAccordion?: boolean;
  heroSlice?: 'live-data' | 'enrichment' | 'multichannel' | 'crm-sync' | 'deliverability' | 'personalization';
  /** Simple numbered steps for pages without a stepped walkthrough widget. */
  howSteps?: { note?: string; items: { title: string; body: string }[] };
  compare?: PlatformCompareData;
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

export interface PlatformCompareData { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; colA: string; colB: string; rows: [string, string, string][] }

/** A two-colour section heading: keyword eyebrow, then pre + coral accent + post. */
export interface PlatformHead { eyebrow: string; pre: string; accent: string; post: string }

export interface PlatformOverviewStage {
  eyebrow: string; title: string; body: string; href: string; linkLabel: string;
  slice: 'live-data' | 'enrichment' | 'multichannel' | 'crm-sync' | 'deliverability' | 'personalization';
}

export interface PlatformOverviewData {
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  sub: string;
  compare: PlatformCompareData;
  heads: { stages: PlatformHead; also: PlatformHead; why: PlatformHead; proof: PlatformHead; closing: PlatformHead; faq: PlatformHead };
  stages: PlatformOverviewStage[];
  also: { title: string; body: string; href: string; linkLabel: string }[];
  why: { title: string; body: string }[];
  ratingsLine: string;
  quoteSlug: string;
  storySlug: string; storyLabel: string;
  closingSub: string;
  faqs: { question: string; answer: string }[];
}

export interface PlatformData { overview: PlatformOverviewData; details: PlatformDetailData[] }

export const platform: PlatformData = {
  overview: {
    title: "Sales engagement platform with live data and CRM sync | hubsell",
    metaDescription: "hubsell is a sales engagement platform with its own live B2B data. Source contacts, run email, LinkedIn and call tasks in one flow, and sync every touch to your CRM.",
    eyebrow: "Sales engagement platform",
    h1Pre: "Six tools’ worth of work. ",
    h1Accent: "One platform",
    h1Post: ".",
    sub: "hubsell is a sales engagement platform with its own data. It sources contacts live, runs email, LinkedIn and call tasks in one flow, and syncs every touch to Salesforce, HubSpot or Pipedrive.",
    compare: {"eyebrow": "All-in-one sales engagement", "titlePre": "A six-tool outbound stack versus ", "titleAccent": "one platform", "titlePost": "", "colA": "Separate tools", "colB": "hubsell", "rows": [["Contact data", "A database bought once and used for months", "Sourced live for each search, checked against your ICP"], ["Enrichment", "A second tool, a CSV in and a CSV out", "Verified emails and phones added in the same place"], ["Email outreach", "An email tool that knows nothing about LinkedIn", "Email and LinkedIn steps in one flow"], ["LinkedIn", "Done by hand, or in another automation tool", "Profile visits, invites, messages and InMail as flow steps"], ["Calls", "A dialer and notes typed in afterwards", "Call tasks created in your CRM"], ["CRM", "Activity logged by hand, if at all", "Contacts and activity synced to Salesforce, HubSpot or Pipedrive"], ["Cost", "Several subscriptions and the work between them", "One login, one invoice"]]},
    heads: {"stages": {"eyebrow": "Platform overview", "pre": "Every stage of outbound, ", "accent": "in one place", "post": ""}, "also": {"eyebrow": "Also in the platform", "pre": "Built in, ", "accent": "not bolted on", "post": ""}, "why": {"eyebrow": "Why one platform", "pre": "Each part makes ", "accent": "the others work better", "post": ""}, "proof": {"eyebrow": "Customer results", "pre": "Teams that ", "accent": "moved to one platform", "post": ""}, "closing": {"eyebrow": "Sales engagement platform", "pre": "See the whole platform ", "accent": "in one call", "post": "."}, "faq": {"eyebrow": "Sales engagement platform FAQ", "pre": "Questions about ", "accent": "the hubsell platform", "post": ""}},
    stages: [{"eyebrow": "Live B2B data", "title": "Find prospects from buying signals", "slice": "live-data", "href": "/platform/live-data", "linkLabel": "Explore live data", "body": "Contacts are sourced live from LinkedIn and company websites, for your search, from signals like post engagement, job changes, hiring and competitor followers. Each one is checked against your ICP before you use it."}, {"eyebrow": "Contact data enrichment", "title": "Verified emails and phone numbers", "slice": "enrichment", "href": "/platform/enrichment", "linkLabel": "Explore enrichment", "body": "95% of work emails are accurate, catch-all domains included, and every record gets a quality check before it reaches outreach. Phone numbers are optional, from partners chosen for quality."}, {"eyebrow": "Multichannel outreach", "title": "Email, LinkedIn and calls in one flow", "slice": "multichannel", "href": "/platform/multichannel-outreach", "linkLabel": "Explore multichannel outreach", "body": "Profile visits, connection requests, messages, InMail, emails and call tasks run as steps in one flow. Conditions route each contact by what they do, so nobody gets an email after they have already replied on LinkedIn."}, {"eyebrow": "CRM sync", "title": "Every touch on the right record", "slice": "crm-sync", "href": "/platform/crm-sync", "linkLabel": "Explore CRM sync", "body": "Contacts and activity go to Salesforce, HubSpot or Pipedrive, pushed by hand or by rule, and matched to existing records so nothing is duplicated."}],
    also: [{"title": "Email deliverability", "href": "/platform/deliverability", "linkLabel": "Explore deliverability", "body": "Emails go out from your own Google or Microsoft mailboxes through their APIs. Contacts are verified before the first send, and volume stays low to mid, aimed at people who fit."}, {"title": "Signal-based personalisation", "href": "/platform/personalisation", "linkLabel": "Explore personalisation", "body": "Messages can open with the signal that put a contact on your list: the post they engaged with, the job they just started or the role their company is hiring for."}],
    why: [{"title": "Fresh data, fewer bounces", "body": "Contacts sourced and verified the day you use them bounce less, which protects your sender reputation for every email that follows."}, {"title": "Coordinated channels, more replies", "body": "When email and LinkedIn know about each other, each contact gets the next step that fits what they did, not a second message on a channel they already answered."}, {"title": "Automatic logging, honest reports", "body": "When every touch lands in the CRM as it happens, pipeline reports show what really happened, and reps get back the time they spent typing it in."}],
    ratingsLine: "Rated 4.6+ across G2, Capterra, and GetApp.",
    quoteSlug: "cibt",
    storySlug: "workspace365",
    storyLabel: "Read the Workspace 365 story",
    closingSub: "Bring your current stack to a short call and we will show you what it looks like as one system.",
    faqs: [{"question": "What is a sales engagement platform?", "answer": "<p>A sales engagement platform runs the outreach side of sales: emails, LinkedIn steps and calls, in an order you set, with each touch tracked. hubsell adds the two things most of them leave out: live B2B contact data to reach out to, and automatic sync of the results to your CRM.</p>"}, {"question": "How is hubsell different from Outreach or Salesloft?", "answer": "<p>Outreach and Salesloft are email sequence tools. They do not source contact data and do not run LinkedIn natively, so you still need a data provider and a manual LinkedIn process next to them. hubsell covers all three: live data, email and LinkedIn in one flow with call tasks, and CRM sync.</p>"}, {"question": "Which tools can hubsell replace?", "answer": "<p>A B2B data provider, an enrichment tool, an email outreach tool and a LinkedIn automation tool. Calls run as tasks in your CRM, so a separate dialer is not needed for outbound steps, and activity is logged to the CRM without a sync tool in between.</p>"}, {"question": "Does hubsell include B2B contact data?", "answer": "<p>Yes. hubsell sources contacts live for each search, from LinkedIn and company websites, and enriches the ones that fit your ICP with a verified work email and, if you want it, a phone number. There is no static database to buy access to. See <a class=\"link\" href=\"/platform/live-data/\">live data</a>.</p>"}, {"question": "Which channels does hubsell support?", "answer": "<p>Email from your own Google or Microsoft mailboxes, LinkedIn (profile visits, connection requests, messages and InMail) and phone, as call tasks in your CRM. All of them run as steps in one flow.</p>"}, {"question": "Which CRMs does hubsell work with?", "answer": "<p>Salesforce, HubSpot and Pipedrive. Contacts, companies and activity are synced from hubsell into the CRM in real time, matched to existing records so nothing is duplicated. See <a class=\"link\" href=\"/platform/crm-sync/\">CRM sync</a>.</p>"}, {"question": "Is hubsell GDPR-compliant?", "answer": "<p>Yes. hubsell is based in Berlin and hosts data in Frankfurt. It processes data for the purpose you set and does not keep it to resell. You stay the data controller and hubsell is your processor, under a data processing agreement.</p>"}, {"question": "How long does it take to get started?", "answer": "<p>The hubsell team handles campaign setup, data sourcing and flow configuration with you, so most teams run their first outbound campaign in under 7 days.</p>"}, {"question": "How much does hubsell cost?", "answer": "<p>Start costs from €120 per seat per month and Grow from €4,320 per year. Scale is priced in a custom offer for teams from 10 seats. See <a class=\"link\" href=\"/pricing/\">pricing</a>.</p>"}, {"question": "Who is hubsell for?", "answer": "<p>B2B companies that sell to other businesses: sales teams and SDRs, founders who sell themselves, RevOps teams and agencies that run outbound for clients. Most customers are in Europe.</p>"}],
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
      extra: {"title": "GDPR-compliant B2B data", "paras": ["hubsell sources and processes data ad hoc, for a purpose you set before a single contact is sourced, and does not keep it to resell. You stay the data controller and hubsell is your processor. A database vendor works the other way round: it collects data to sell it again.", "Outreach to business contacts rests on legitimate interest under the GDPR. hubsell is based in Berlin, Germany, and the platform runs on Amazon Web Services servers in Frankfurt.", "Every customer can sign hubsell’s data processing agreement, which sets out how personal data is handled, which sub-processors may work with it and how requests from the people in your data are answered. When a contract ends, the data in your account is deleted within 30 days."], "links": [{"label": "Read the data processing agreement", "href": "/data-processing-agreement"}, {"label": "Guide: B2B data compliance and cold outreach", "href": "/insights/b2b-data-compliance"}, {"label": "Cognism alternative: how the two compare", "href": "/vs/cognism"}, {"label": "ZoomInfo alternative: how the two compare", "href": "/vs/zoominfo"}]},
      eyebrow: 'Live B2B data',
      h1Pre: 'B2B data sourced ', h1Accent: 'today', h1Post: ', not two years ago',
      sub: 'hubsell is a B2B data provider that does not sell access to a static database. Define your ICP and we source contacts live from LinkedIn, layer buying signals on top, and verify every record before it enters your flow.',
      demoCta: 'Book a demo',
      heroTimeline: true,
      row: {
        titlePre: 'Sourced from ', titleAccent: 'live buying signals', titlePost: '',
        points: [
          'Most platforms let you filter by title and industry. hubsell also reads behaviour.',
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
      "title": "Cold email deliverability: reach the inbox from your own mailboxes | hubsell",
      "metaDescription": "Cold email deliverability with hubsell: send from your own Google or Microsoft mailbox, with SPF, DKIM and DMARC set up for you, a daily cap, sending windows and contacts verified the day you write.",
      "heroSlice": "deliverability",
      "compare": {"eyebrow": "Cold email deliverability", "titlePre": "Bulk sending versus ", "titleAccent": "inbox-first sending", "titlePost": "", "colA": "Bulk email tools", "colB": "hubsell", "rows": [["Sending server", "Outside SMTP servers shared with other senders", "Your own Google or Microsoft mailbox, through its API"], ["Authentication", "Left to you to work out", "SPF, DKIM and DMARC set up with the hubsell team"], ["Contact data", "Lists bought months ago, many addresses no longer valid", "Verified the day you reach out, catch-all domains included"], ["Volume", "As much as the plan allows, in bursts", "Low to mid volume within a daily cap, aimed at people who fit"], ["Timing", "Sent the moment the campaign starts", "Within the sending windows you set"], ["Replies and bounces", "Follow-ups continue until someone stops them", "The flow stops for that contact on a reply or a bounce"]]},
      "heads": {"signals": {"eyebrow": "Inbox placement", "pre": "Sent the way ", "accent": "inboxes trust", "post": ""}, "explained": {"eyebrow": "Email deliverability checklist", "pre": "What keeps your email ", "accent": "out of spam", "post": ""}, "steps": {"eyebrow": "How it works", "pre": "From verified contact ", "accent": "to the inbox", "post": ""}, "extra": {"eyebrow": "Data quality and deliverability", "pre": "Good data is ", "accent": "good deliverability", "post": ""}, "proof": {"eyebrow": "Customer results", "pre": "What ", "accent": "better deliverability", "post": " changes"}, "closing": {"eyebrow": "Email deliverability", "pre": "Find out where ", "accent": "your email lands", "post": "."}, "faq": {"eyebrow": "Email deliverability FAQ", "pre": "Questions about ", "accent": "email deliverability", "post": ""}},
      "signals": {"sub": "Each of these is handled in hubsell, so reaching the inbox is not left to your reps.", "startLabel": "Protects", "items": [{"id": "email", "title": "Your own mailbox", "body": "Emails go out from your Google Workspace or Microsoft 365 account through its API, not from a shared server that filters already distrust.", "start": "Your sender reputation"}, {"id": "clean", "title": "SPF, DKIM and DMARC", "body": "The hubsell team sets up the three records with you, so mail providers can confirm that your messages really come from your domain.", "start": "Your domain"}, {"id": "profile", "title": "Verified contacts", "body": "Every address is checked the day it is used, catch-all domains included, so few emails bounce and providers see a clean list.", "start": "Your bounce rate"}, {"id": "wait", "title": "A daily cap", "body": "Your mailbox sends a limited number of emails a day, so volume never spikes and draws attention.", "start": "Each sender"}, {"id": "event", "title": "Sending windows", "body": "Emails go out within the hours you set, spaced out over the day, the way a person sends mail.", "start": "Your timing"}, {"id": "branch", "title": "Stop on reply or bounce", "body": "When a contact replies or an email bounces, the flow stops for that contact, so nobody gets a follow-up after answering.", "start": "The buyer’s goodwill"}, {"id": "ban", "title": "No tracking redirects", "body": "Links are not rewritten through a tracking domain, which keeps your emails looking like ordinary mail.", "start": "Your inbox placement"}, {"id": "search", "title": "Targeted, not bulk", "body": "hubsell is built for low to mid volume: fewer emails, sent to people who fit your ICP and have a reason to hear from you. Targeted outreach gets replies, and replies build your sender reputation.", "start": "Your conversion"}]},
      "howSteps": {"items": [{"title": "Verify the contact", "body": "The work email is generated and validated the day you reach out, catch-all domains included."}, {"title": "Send from your mailbox", "body": "The email goes out from your connected mailbox, within its daily cap."}, {"title": "Keep to the window", "body": "Emails are spaced out within the sending window you set, through the Google or Microsoft API."}, {"title": "Stop on a reply", "body": "Replies and bounces end the flow for that contact. Everyone else moves on to the next step."}]},
      "extra": {"title": "Good data is good deliverability", "paras": ["Most deliverability problems start before the first email is sent. Old lists are full of people who have changed jobs, and every bounce tells mail providers that your email is not wanted.", "hubsell sources contacts when you need them and verifies each email the same day, so you write to people who hold the role today, at addresses that exist.", "Relevant, recent data also earns replies, and replies are the strongest sign to a mail provider that your email belongs in the inbox."], "links": [{"label": "More on live data", "href": "/platform/live-data"}, {"label": "More on enrichment", "href": "/platform/enrichment"}]},
      "faqs": [{"question": "What is email deliverability?", "answer": "<p>Email deliverability is whether your email reaches the recipient’s inbox, rather than the spam folder or nowhere at all. It depends on how you send, the reputation of your domain and the quality of the addresses you write to.</p>"}, {"question": "Why do cold emails go to spam?", "answer": "<p>The usual causes are shared sending servers, missing SPF, DKIM or DMARC records, addresses that bounce, sudden spikes in volume and messages nobody replies to. hubsell addresses each of these.</p>"}, {"question": "How does hubsell protect my deliverability?", "answer": "<p>It sends from your own mailbox through the Google or Microsoft API, sets up SPF, DKIM and DMARC with you, keeps to a daily cap, sends within your windows, stops on replies and bounces, and verifies every contact the day it is used.</p>"}, {"question": "Does hubsell send from my own mailbox?", "answer": "<p>Yes. Emails go out from your Google Workspace or Microsoft 365 mailboxes through their APIs. There is no outside SMTP server and no tracking redirect in the email.</p>"}, {"question": "Who sets up SPF, DKIM and DMARC?", "answer": "<p>The hubsell team sets them up with you during onboarding, so your domain passes the checks mail providers run before your first campaign goes out.</p>"}, {"question": "Is there a daily sending limit?", "answer": "<p>Yes. Your mailbox has a daily cap. hubsell is built for low to mid volume: a smaller number of emails to well-targeted contacts converts better than a large number to a broad list.</p>"}, {"question": "Can I choose when emails are sent?", "answer": "<p>Yes. You set sending windows, and emails go out within them, spaced out over the day rather than all at once.</p>"}, {"question": "What happens when a contact replies or an email bounces?", "answer": "<p>The flow stops for that contact. Nobody gets a follow-up after answering, and a bad address is not tried again.</p>"}, {"question": "How does data quality affect deliverability?", "answer": "<p>Every bounce hurts your sender reputation. hubsell verifies each email the day it is used, catch-all domains included, and 95% of work emails are accurate, so far fewer emails bounce. See <a class=\"link\" href=\"/platform/enrichment/\">enrichment</a>.</p>"}, {"question": "Why does hubsell focus on low to mid volume?", "answer": "<p>Because targeted outreach converts. Fewer emails to people who fit your ICP and have a reason to hear from you get more replies, and replies tell mail providers that your email belongs in the inbox. Sending to a broad list does the opposite.</p>"}],
      "eyebrow": "Email deliverability",
      "h1Pre": "Cold email that lands ",
      "h1Accent": "in the inbox",
      "h1Post": "",
      "sub": "Deliverability starts with who you write to. hubsell keeps volume low to mid and targeted, sends from your own mailbox with authentication set up by our team, keeps to a daily cap and sending window, and verifies every contact the day you reach out.",
      "demoCta": "Book a demo",
      "row": {
        "titlePre": "Sent the way ",
        "titleAccent": "inboxes trust",
        "titlePost": "",
        "points": [
          "Emails go out from your own Google Workspace or Microsoft 365 mailbox through its API, with no outside server or tracking redirect in the path.",
          "SPF, DKIM and DMARC are set up with you by the hubsell team, so mail providers can check that your email really comes from you.",
          "Your mailbox has a daily cap and a sending window, and the flow stops for a contact as soon as they reply or an email bounces."
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
          "body": "Volume stays low to mid and within a daily cap. A new domain builds its reputation step by step instead of spiking on the first send."
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
      "path": "/platform/personalisation",
      "title": "Signal-based personalisation for cold email and LinkedIn | hubsell",
      "metaDescription": "Personalised outreach built on buying signals. hubsell has AI draft each message from the signal that put a contact on your list and from their company website, in flows built around each signal.",
      "heroSlice": "personalization",
      "signalsAccordion": true,
      "compare": {"eyebrow": "Cold email personalisation", "titlePre": "Mail merge or ", "titleAccent": "messages built on signals", "titlePost": "", "colA": "Mail merge", "colB": "hubsell", "rows": [["Starting point", "A list and a template", "The signal that put the contact on your list"], ["What is personalised", "First name and company name", "The message, built on the signal and the company"], ["Research", "Done by hand, or skipped", "The company website, read for each contact"], ["Writing", "One template for everyone", "An AI draft for each contact"], ["Flows", "One campaign for every lead", "A flow for each signal, with its own message and timing"], ["Data underneath", "Old records and wrong titles", "Verified the day you reach out"]]},
      "heads": {"signals": {"eyebrow": "Signal-based personalisation", "pre": "A reason to write ", "accent": "to every contact", "post": ""}, "explained": {"eyebrow": "Personalisation signals", "pre": "The signals your messages ", "accent": "start from", "post": ""}, "steps": {"eyebrow": "How it works", "pre": "From buying signal ", "accent": "to a personal message", "post": ""}, "extra": {"eyebrow": "AI personalisation", "pre": "AI that writes ", "accent": "from facts, not guesses", "post": ""}, "proof": {"eyebrow": "Customer results", "pre": "What ", "accent": "personal outreach", "post": " changes"}, "closing": {"eyebrow": "Personalised outreach", "pre": "See what your outreach ", "accent": "could say", "post": "."}, "faq": {"eyebrow": "Personalisation FAQ", "pre": "Questions about ", "accent": "personalised outreach", "post": ""}},
      "signals": {"sub": "Each signal can become its own flow, and each message opens with it.", "startLabel": "Opens with", "items": [{"id": "post", "title": "Post engagement", "body": "People who liked, commented on or reposted a LinkedIn post, yours or a competitor’s.", "start": "The post and what it was about"}, {"id": "event", "title": "Event participants", "body": "People who signed up for a LinkedIn event in your market.", "start": "The event they are going to"}, {"id": "jobs", "title": "Job changes", "body": "People who recently started a new role, when priorities and budgets are being set.", "start": "Their new role"}, {"id": "hiring", "title": "Hiring signals", "body": "Companies hiring for roles your product supports.", "start": "The roles they are hiring for"}, {"id": "followers", "title": "Competitor followers", "body": "People who follow a competitor’s company page.", "start": "The problem the competitor solves"}, {"id": "company", "title": "Company website", "body": "What the company says about itself: what it sells, who it sells to and what it is focused on.", "start": "A line about their business"}]},
      "howSteps": {"items": [{"title": "Pick the signal", "body": "Start a flow from a signal, such as a post, an event, a hiring search or a competitor’s followers."}, {"title": "Qualify and enrich", "body": "Every person is checked against your ICP and gets a verified email before anything is written."}, {"title": "Read the company", "body": "hubsell reads the company website to learn what the business does and who it sells to."}, {"title": "Draft with AI", "body": "AI writes a message for each contact from the signal and the company details."}, {"title": "Run the flow", "body": "The message goes out as a step in the flow, and the next steps follow from what the contact does."}]},
      "extra": {"title": "AI that writes from facts, not guesses", "paras": ["Generic AI copy is easy to spot. It praises the company, guesses at its challenges and reads as if it was written for anyone. Buyers recognise it and ignore it.", "hubsell gives the AI facts to work with: the signal, the person’s current role and what the company website says. The draft refers to things that are true, so it reads like a note from someone who looked.", "Because every contact is verified the same day, the details in the message are current. Nobody gets congratulated on a job they left a year ago."], "links": [{"label": "More on live data", "href": "/platform/live-data"}, {"label": "More on multichannel outreach", "href": "/platform/multichannel-outreach"}]},
      "faqs": [{"question": "What is signal-based personalisation?", "answer": "<p>Signal-based personalisation opens each message with the reason you are writing: something the person or their company did recently, such as engaging with a post, changing jobs or hiring. It replaces the first-name mail merge with a real reason to talk.</p>"}, {"question": "How does hubsell personalise cold emails?", "answer": "<p>hubsell starts from the signal that put a contact on your list, reads the company website, and has AI draft a message for each contact from those facts. Each signal can run in its own flow, so the message and the timing fit the reason for reaching out.</p>"}, {"question": "Which signals can hubsell use for personalisation?", "answer": "<p>LinkedIn post engagement, event participants, job changes, companies that are hiring and followers of a competitor, plus what the company website says. See <a class=\"link\" href=\"/platform/live-data/\">live data</a> for how these contacts are sourced.</p>"}, {"question": "Does hubsell use AI to write messages?", "answer": "<p>Yes. AI drafts a message for each contact from the signal and from the company website. It works from facts about the person and the company, not from guesses.</p>"}, {"question": "What are signal-focused flows?", "answer": "<p>Instead of one campaign for every lead, each signal gets its own flow. People who engaged with a post get a different message, timing and set of channels from people whose company is hiring.</p>"}, {"question": "How is this different from mail merge?", "answer": "<p>Mail merge swaps a first name and a company name into one template. Signal-based personalisation changes what the message says, based on why you are writing to that person.</p>"}, {"question": "Why does generic AI personalisation not work?", "answer": "<p>Buyers recognise AI copy that is written from nothing: flattering, vague and about the sender. Copy that refers to a real signal and to the company’s actual business reads as written by someone who looked.</p>"}, {"question": "Does personalisation help email deliverability?", "answer": "<p>Yes. Relevant emails get more replies, and replies tell mail providers that your email is wanted. See <a class=\"link\" href=\"/platform/deliverability/\">email deliverability</a>.</p>"}, {"question": "Can I personalise outreach at scale?", "answer": "<p>Yes. The signal, the company details and the draft come together for every contact, so the same flow works for ten contacts or thousands without writing each message from scratch.</p>"}, {"question": "Is signal-based outreach GDPR-compliant?", "answer": "<p>hubsell processes data for a purpose you set before sourcing and does not keep it to resell. You stay the data controller and hubsell is your processor, under a data processing agreement. See <a class=\"link\" href=\"/platform/live-data/\">GDPR-compliant B2B data</a>.</p>"}],
      "eyebrow": "Signal-based personalisation",
      "h1Pre": "Personalised by ",
      "h1Accent": "buying signals",
      "h1Post": "",
      "sub": "Personalisation starts with a signal. hubsell adds context from the person’s role and their company website, has AI draft the message from both, and you reach out with a reason that matters to the reader. That is what gets replies.",
      "demoCta": "Book a demo",
      "row": {
            "titlePre": "Written for the ",
            "titleAccent": "person and the moment",
            "titlePost": "",
            "points": [
                  "Every message starts from a real reason to write: the post they engaged with, the job they started, the event they signed up for or the role their company is hiring for.",
                  "AI drafts each message from that signal and from what the company website says about the business.",
                  "Each signal gets its own flow, so the message, the timing and the channels fit the reason you are reaching out."
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
                  "body": "Real personalisation uses what is true about the account: the role, the company, the moment. hubsell pulls from verified data and live signals, so a message references something that actually matters to the reader."
            },
            {
                  "title": "Grounded in live signals",
                  "body": "A job change, a funding round, a hiring push, or engagement on a topic gives outreach a genuine hook. hubsell reads these signals and puts them to work, so the message arrives with a reason."
            },
            {
                  "title": "Consistent at volume",
                  "body": "Personalising by hand does not scale, and mail merge fields feel hollow. hubsell keeps every message relevant whether you send ten or ten thousand, so reach and relevance stop pulling against each other."
            },
            {
                  "title": "Correct data underneath",
                  "body": "Personalisation is only as good as the data behind it. Because every contact is verified at source, the details you reference are right, so a personalised line never lands as a wrong-company mistake."
            }
      ],
      "proofEyebrow": "Proof",
      "proofTitle": "What real relevance changes",
      "quoteSlug": "elium",
      "storySlug": "elium",
      "storyLabel": "Read the Elium story",
      "faqEyebrow": "FAQ",
      "faqTitle": "Common questions about personalisation",
      "faqSlugs": [
            "personalize-outreach-at-scale",
            "hubsell-conversion-rates"
      ],
      "closing": {
            "titlePre": "See outreach that ",
            "titleAccent": "reads as personal",
            "titlePost": ", at scale.",
            "sub": "Show us your audience on a short call and we will draft what personalised-at-scale outreach looks like for it."
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
      "extra": {"title": "Catch-all email verification", "paras": ["A catch-all domain accepts mail for any address, so a standard check cannot tell a real mailbox from a wrong one. Lists usually mark these contacts as unknown, which leaves you to skip them or risk bounces.", "hubsell verifies addresses on catch-all domains as part of every enrichment, at the moment you use the data. That is how 95% of the emails it delivers are accurate, catch-all domains included, and why your bounce rate stays low."], "links": [{"label": "How hubsell protects deliverability", "href": "/platform/deliverability"}, {"label": "Lusha alternative: how the two compare", "href": "/vs/lusha"}, {"label": "Seamless alternative: how the two compare", "href": "/vs/seamless"}, {"label": "Apollo alternative: how the two compare", "href": "/vs/apollo"}]},
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
