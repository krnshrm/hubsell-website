// Homepage copy: French (France), "vous". Created as a copy of the English text; every string
// here is to be translated. Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
import type { PipelineStep, Feature, Role, Testimonial, Insight } from './home-content';
import type { Faq } from './faqs';
import type { HomeStrings, ComparisonData } from './home-i18n';

export const homeFr: {
  steps: PipelineStep[]; features: Feature[]; roles: Role[]; testimonials: Testimonial[];
  insights: Insight[]; comparison: ComparisonData; faqs: Faq[]; s: HomeStrings;
} = {
  steps: [
    {
      n: "01",
      label: "Live data",
      title: "Find the ",
      titleAccent: "right people",
      tail: ", not just the right filters",
      points: [
        "Most platforms let you filter by title and industry.",
        "hubsell sources from live behavioural signals: people following a company page, engaging with a LinkedIn post, changing jobs, attending events, or hiring for specific roles.",
        "Every contact entering your flow is matched to your ICP and validated at the point of use.",
      ],
      cta: "Source your data",
      more: "Explore live data",
      embed: "05-sp-widget",
      flip: false,
    },
    {
      n: "02",
      label: "Multichannel outreach",
      title: "Run one ",
      titleAccent: "coordinated multi-channel",
      tail: " flow",
      points: [
        "Drag and drop email, LinkedIn, and phone steps into a single flow.",
        "Profile visits, connection requests, DMs, InMail, and call tasks, all coordinated with your email cadence.",
        "Branching conditions automatically route contacts based on what they do, so every path is handled without manual intervention.",
      ],
      cta: "Get a demo",
      more: "Explore multichannel outreach",
      embed: "06-multichannel-flow",
      recolor: "espresso",
      flip: true,
    },
    {
      n: "03",
      label: "Automatic CRM Sync",
      title: "Log any and all activities ",
      titleAccent: "to your CRM in real time",
      tail: "",
      points: [
        "Every touchpoint, sent, opened, replied, connected, is logged to Salesforce, HubSpot, or Pipedrive automatically.",
        "No manual entry. No data rot. Your team works the pipeline, not the spreadsheet.",
      ],
      cta: "See it live",
      more: "Explore CRM sync",
      embed: "07-crm-sync-tracker",
      recolor: "espresso",
      flip: false,
    },
  ],
  features: [
    {
      title: "Live-sourced prospect data",
      body: "Replace static databases with live-sourced contacts matched to your ICP. No stale data, no wasted outreach budget.",
    },
    {
      title: "Email, LinkedIn & phone in one flow",
      body: "Run email, LinkedIn, and phone as one coordinated flow, not separate tools. Profile visits, connection requests, DMs, InMail, and call tasks all run from a single flow.",
    },
    {
      title: "AI qualification and routing",
      body: "Use AI to qualify contacts against your ICP and route them into the right flow automatically, before you spend a single credit on outreach.",
      beta: true,
    },
    {
      title: "Buying committee coverage",
      body: "Reach every stakeholder at a target account across email and LinkedIn from a single campaign. No tool-switching.",
    },
    {
      title: "Multi-sender intelligent outreach",
      body: "Spread outreach safely across CEO, VP Sales, and SME profiles to multiply reach without burning any single sender.",
    },
    {
      title: "Catch-all domain verification",
      body: "Proprietary validation verifies catch-all domains, protecting your sender reputation from hard bounces and blacklists.",
    },
    {
      title: "Turn LinkedIn content into pipeline",
      body: "Publish a LinkedIn post and automatically engage everyone who likes, comments, or reposts, turning those warm signals into pipeline before your competitors do.",
      beta: true,
    },
    {
      title: "Intent and signal driven targeting",
      body: "Pinpoint the 5% of in-market buyers using real-time intent signals and route them into targeted flows automatically.",
      beta: true,
    },
  ],
  roles: [
    {
      title: "Sales",
      line: "Source, reach out, and close from one workspace. No tab-switching.",
    },
    {
      title: "Founders",
      line: "Run founder-led outbound that lands, without hiring an SDR team.",
    },
    {
      title: "Sales Operations",
      line: "One system of record, synced to your CRM automatically.",
    },
    {
      title: "RevOps",
      line: "Clean, validated data in and out. No manual hygiene.",
    },
    {
      title: "Marketing",
      line: "Turn LinkedIn demand into qualified, trackable pipeline.",
    },
    {
      title: "GTM Engineers",
      line: "Compose live data, multi-channel flows, and routing in one place.",
    },
  ],
  testimonials: [
    {
      quote: "hubsell’s automation gives a maximum return for minimum effort on data gathering and cold outreach. Their outreach functionality is excellent.",
      name: "Richard Wood",
      title: "CEO",
      company: "Safran Software",
      slug: "safran",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc7_Richard-W.webp",
      results: [
        {
          metric: "30%",
          label: "decrease in customer acquisition cost",
        },
        {
          metric: "1000+",
          label: "accounts with increased awareness",
        },
        {
          metric: "25hrs",
          label: "saved weekly",
        },
      ],
    },
    {
      quote: "Thanks to hubsell we can reach more people in less time whilst still communicating in a very personalized way as we would do manually.",
      name: "Laurent Schauvliege",
      title: "Business Manager",
      company: "Verhaert",
      slug: "verhaert",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cb5_Laurent-S.avif",
      results: [
        {
          metric: "3x",
          label: "increase in opportunity generation",
        },
        {
          metric: "60%",
          label: "and higher open rate",
        },
        {
          metric: "90%+",
          label: "level of personalisation",
        },
      ],
    },
    {
      quote: "hubsell is a company that is more than just a vendor, they could really partner with you and help you with your whole approach.",
      name: "Peter Mallozzi",
      title: "Outbound Sales",
      company: "Staffbase",
      slug: "staffbase",
      image: "https://assets.hubsell.com/avatars/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png",
      results: [
        {
          metric: "15.6%",
          label: "replies across different markets",
        },
        {
          metric: "3.5%",
          label: "engagement rate resulting in a call",
        },
        {
          metric: "15",
          label: "markets targeted successfully",
        },
      ],
    },
    {
      quote: "I’d recommend hubsell as a partner if you’re looking to generate real results from outbound sales & marketing with a limited team.",
      name: "Rachel Chan",
      title: "Digital Marketing Team Lead",
      company: "Elium",
      slug: "elium",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cc8_Rachel-C.avif",
      results: [
        {
          metric: "25%",
          label: "increase in lead generation",
        },
        {
          metric: "53%",
          label: "and higher open rate",
        },
        {
          metric: "20hrs+",
          label: "saved weekly",
        },
      ],
    },
    {
      quote: "I haven’t discovered a tool that comes near hubsell in its segmentation, reply detection and social networks and CRM integrations.",
      name: "Mark Grasmayer",
      title: "Product Evangelist",
      company: "Workspace 365",
      slug: "workspace365",
      image: "https://assets.hubsell.com/avatars/699dcee15832f934d9f15cd4_Mark-G.avif",
      results: [
        {
          metric: "100+",
          label: "new business opportunities generated",
        },
        {
          metric: "71%",
          label: "and higher open rate",
        },
        {
          metric: "33%",
          label: "reduction in customer acquisition costs",
        },
      ],
    },
    {
      quote: "hubsell helps us generate interactions with prospects from various industries, which is crucial to our expansion efforts.",
      name: "Eylül Eygi",
      title: "Head of Marketing",
      company: "Sensolus",
      slug: "sensolus",
      image: "https://assets.hubsell.com/avatars/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png",
      results: [
        {
          metric: "30%",
          label: "reduction in CAC",
        },
        {
          metric: "22%",
          label: "response rate",
        },
        {
          metric: "61%",
          label: "open rate",
        },
      ],
    },
  ],
  insights: [
    {
      title: "The sale starts with a no, a lesson on objection handling",
      excerpt: "Why “the sale starts with a no,” the real reasons prospects reject you, and three strategies to convert rejection into closed deals.",
      slug: "the-sale-starts-with-a-no-objection-handling",
      image: "https://assets.hubsell.com/insights/69e9eca8af016789641b1d18_Thumbnail-The-sale-starts-with-a-no-a-lesson-on-objection-handling.png",
    },
    {
      title: "Seven methods to increase the productivity of your salespeople",
      excerpt: "The biggest factors making a sales team inefficient, plus seven proven ways to scale output without burning the team out.",
      slug: "methods-increase-productivity-salespeople",
      image: "https://assets.hubsell.com/insights/69e9eb2fa14f17a0ca9cd88c_Thumbnail-Seven-methods-to-increase-the-productivity-of-your-salespeople.png",
    },
    {
      title: "Why lead generation needs to be a qualitative process",
      excerpt: "Moving from quantity to quality in automated outbound: the dangers of spam, why accurate data matters, and email copy that builds trust.",
      slug: "why-automated-lead-generation-needs-to-be-a-qualitative-process",
      image: "https://assets.hubsell.com/insights/69e9ef6291a191221bc032dc_Thumbnail-Why-lead-generation-needs-to-be-a-qualitative-process.png",
    },
  ],
  comparison: {
    heads: {
      hub: {
        label: "hubsell",
      },
      aio: {
        label: "All-in-one platforms",
        href: "/vs/apollo",
      },
      data: {
        label: "Enterprise data",
        href: "/vs/zoominfo",
      },
      lookup: {
        label: "Lookup tools",
        href: "/vs/lusha",
      },
    },
    rows: [
      {
        label: "Live, validated data",
        cells: {
          hub: ["yes", "Sourced live, verified at point of use"],
          aio: ["part", "Pre-built database of ~275M"],
          data: ["part", "Large static database"],
          lookup: ["part", "One-off contact lookups"],
        },
      },
      {
        label: "Email, LinkedIn & phone, one flow",
        cells: {
          hub: ["yes", "One flow, calls as CRM tasks"],
          aio: ["part", "Email automated, LinkedIn manual"],
          data: ["no", "Outreach sold separately"],
          lookup: ["no", "No outreach layer"],
        },
      },
      {
        label: "Automatic CRM sync",
        cells: {
          hub: ["yes", "Salesforce, HubSpot & Pipedrive"],
          aio: ["part", "Salesforce & HubSpot native"],
          data: ["part", "Native to major CRMs"],
          lookup: ["part", "Basic, often via Zapier"],
        },
      },
      {
        label: "You pay for what’s correct",
        cells: {
          hub: ["yes", "Per contact sourced & validated"],
          aio: ["no", "Per seat, plus credits"],
          data: ["no", "Five-figure annual contracts"],
          lookup: ["part", "Credits spent on bad hits too"],
        },
      },
      {
        label: "One platform, not a stack",
        cells: {
          hub: ["yes", "Data, outreach & sync together"],
          aio: ["part", "Two of the pieces"],
          data: ["no", "Data only"],
          lookup: ["no", "A single piece"],
        },
      },
    ],
  },
  faqs: [
    {
      question: "Can hubsell replace my existing outbound stack?",
      slug: "hubsell-replace-outbound-stack",
      answer: "<p>For most teams, yes. hubsell replaces your sales intelligence tool, your sales engagement platform, and your manual LinkedIn outreach process in one platform. Most teams that switch eliminate 2–3 tool subscriptions within 30 days. The one thing hubsell doesn’t replace is your CRM: it syncs to it.</p>",
      onHomepage: true,
    },
    {
      question: "Do we have to build the campaigns ourselves, or does hubsell offer guided onboarding and strategy?",
      slug: "hubsell-onboarding-strategy",
      answer: "<p>We don't just hand you a login and wish you luck. Our team handles full campaign setup, data sourcing, and flow configuration so you can run your first outbound campaign in under 7 days, and keep improving from there.</p>",
      onHomepage: true,
    },
    {
      question: "Does hubsell integrate directly with our existing CRM?",
      slug: "hubsell-crm-integration",
      answer: "<p>We don't replace your system of record; we empower it. All activities, including emails sent, LinkedIn connection requests, profile views, and replies, are automatically logged directly into Salesforce, HubSpot, or Pipedrive, completely eliminating data silos for your revenue team.</p>",
      onHomepage: true,
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
      question: "How does hubsell compare to Outreach or Salesloft?",
      slug: "hubsell-vs-outreach-salesloft",
      answer: "<p>Outreach and Salesloft are email sequence tools: they don’t source data and they don’t do LinkedIn natively. You still need a separate data provider and a manual LinkedIn process. hubsell covers all three layers: live prospect data, coordinated email and LinkedIn flows, plus call tasks, and automatic CRM sync. One platform, one subscription. See <a href=\"/comparisons/\">how hubsell compares</a> with Apollo, ZoomInfo, Cognism, Lusha, and Seamless.</p>",
      onHomepage: true,
    },
    {
      question: "How does hubsell differ from static B2B databases like ZoomInfo or Apollo?",
      slug: "hubsell-catch-all-domains",
      answer: "<p>Most sales intelligence tools hand you a static export and leave the outreach to another platform. hubsell sources contacts live at the moment of your request, then lets you reach out via email, LinkedIn, and phone and sync everything to your CRM, all without switching tools. No database decay, no duct-taped stack. Compare in detail: <a href=\"/vs/zoominfo/\">ZoomInfo alternative</a> and <a href=\"/vs/apollo/\">Apollo alternative</a>.</p>",
      onHomepage: true,
    },
    {
      question: "Is hubsell GDPR compliant?",
      slug: "hubsell-gdpr-compliance",
      answer: "<p>Yes. hubsell is based in Berlin, Germany. We maintain strict GDPR compliance and data privacy standards, ensuring all engagement activities meet regulatory requirements.</p>",
      onHomepage: true,
    },
    {
      question: "What is the most effective way to build a B2B audience that doesn't decay over time?",
      slug: "build-b2b-audience-no-decay",
      answer: "<p>Email addresses belong to the employer, so lists decay by roughly 30% annually as people switch jobs. LinkedIn connections are tied to the person and travel with them. Build your audience as a first-degree LinkedIn network and every job change becomes a warm way into a new account instead of a dead contact.</p>",
      onHomepage: true,
    },
    {
      question: "What kind of conversion rates (acceptance, replies, and engagement) should we expect using hubsell?",
      slug: "hubsell-conversion-rates",
      answer: "<p>When following the hubsell playbook correctly, you can expect 25-40% acceptance rate, 10-15% reply rate, and 3-5% conversations start rates. The conversions are on the higher end when the sender profiles are not too salesy.</p>",
      onHomepage: true,
    },
  ],
  s: {
    hero: {
      eyebrow: "For founders and heads of sales with 6+ tools",
      titlePre: "Book the same pipeline using ",
      titleAccent: "50 times fewer",
      titlePost: " prospects.",
      sub: "hubsell sources contacts live on buying signals, then runs email, LinkedIn and phone in one flow that syncs to your CRM. Fewer people contacted, the same meetings booked.",
      ctaPrimary: "Book a demo",
      stats: [
        {
          value: "30%",
          label: "lower acquisition cost",
          company: "Safran",
        },
        {
          value: "3x",
          label: "more opportunities",
          company: "Verhaert",
        },
        {
          value: "25%",
          label: "more leads",
          company: "Elium",
        },
      ],
    },
    logos: {
      eyebrow: "Three of these teams cut customer acquisition cost by 30% or more",
      aria: "Logos of companies that use hubsell: Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall and Monotype",
    },
    vvp: {
      eyebrow: "Volume vs precision",
      titlePre: "Same 42 opportunities. ",
      titleAccent: "One motion costs your whole market.",
      titlePost: "",
      lede: "Both quarters end with the same pipeline. The difference is how much of your market each one uses up, and whether anyone is left to talk to in Q2.",
      volTag: "High volume",
      volTitle: "Send to the entire TAM",
      volSub: "Bought list, throwaway domains, email only, every contact in the market, every quarter.",
      volAria: "A grid representing 100,000 prospects. Every dot turns red as the whole market is contacted.",
      preTag: "Targeted outreach",
      preTitle: "Send to 2% of the TAM",
      preSub: "Live sourced on buying signals, real domain, email, LinkedIn, and phone in one flow.",
      preAria: "The same grid of 100,000 prospects. Only a handful of dots turn green, showing 2,000 prospects reached.",
      dotCaption: "1 dot = 100 prospects",
      contactsLabel: "prospects contacted",
      oppsLabel: "opportunities",
      volChain: "100,000 sent · 80,000 delivered · 64,000 right person · 25,600 opens · 768 in market · 77 positive · 42 opportunities",
      preChain: "2,000 sourced · 1,960 delivered · 1,921 right person · 1,537 reached · 307 in market · 77 positive · 42 opportunities",
      volAfter: "0% of your market left. Q2 hits the same inboxes again.",
      preAfter: "98% of your market still fresh. Process can be repeated next quarter.",
      kickerLabel: "Prospects needed per opportunity",
      vs: "vs",
      kickerXPost: " times fewer",
      noteVolLabel: "High volume:",
      noteVolBody: "20% bounce, 20% wrong person, 40% open, 3% of any market is in-cycle at a given time, 10% of those trust an unknown sender enough to reply, 55% of positive replies become opportunities.",
      notePreLabel: "Targeted outreach:",
      notePreBody: "98% valid at point of use, 80% reached across email, LinkedIn, and phone, 20% in market because the list is sourced on buying signals, 25% reply, same 55% to opportunity.",
    },
    frag: {
      eyebrow: "The fragmented stack problem",
      titlePre: "Six tools in your stack. Six invoices. ",
      titleAccent: "None of them talking to each other.",
      titlePost: "",
      lede: "The average revenue team buys six tools to do one job. Here is what each one costs you, and what hubsell does instead.",
      colTool: "What you buy",
      colHub: "What hubsell does",
      pairs: [
        {
          tool: "Lead databases",
          cost: "Data decays 30% a year. Coverage gaps in your ICP.",
          cap: "Live sourcing",
          capDesc: "Built against your ICP the day you need it.",
        },
        {
          tool: "Email finders",
          cost: "Multiple providers to manage. Manual stacking, no flow.",
          cap: "Validated at point of use",
          capDesc: "AI-cleaned, human-verified.",
        },
        {
          tool: "Buyer intent tools",
          cost: "No native action layer. Signals never trigger outreach.",
          cap: "Signal layering",
          capDesc: "In-market buyers from job changes and events.",
        },
        {
          tool: "Cold email tools",
          cost: "Email runs on its own. LinkedIn is a separate tool.",
          cap: "Email and LinkedIn in one flow",
          capDesc: "One coordinated flow.",
        },
        {
          tool: "LinkedIn outreach",
          cost: "Point solution only. No link to email sequences.",
          cap: "Every stakeholder, one campaign",
          capDesc: "The whole buying group, not one person.",
        },
        {
          tool: "CRM admin",
          cost: "Reps log by hand, or not at all. CRM always out of date.",
          cap: "Synced CRM",
          capDesc: "Auto-logged to Salesforce, HubSpot and Pipedrive.",
        },
      ],
      cta: "Unify your stack today",
    },
    zds: {
      eyebrow: "Zero-day sourcing",
      titlePre: "B2B data sourced ",
      titleAccent: "the moment you need it",
      titlePost: ". Not the moment someone else captured it.",
      sub: "hubsell doesn’t sell out of a stale database. The moment you define your ICP, we source live from LinkedIn, matched to your criteria and validated at the point of use. hubsell is based in Berlin and GDPR-compliant.",
      closer: "You pay for a contact that’s correct today, not for access to 300 million contacts that were right two years ago.",
      cta: "See how we do it",
    },
    ratings: {
      titlePre: "Rated ",
      titleAccent: "4.6+",
      titlePost: " across G2, Capterra, and GetApp",
      cue: "Read reviews →",
      aria: (platform2, score, out) => `Read hubsell reviews on ${platform2} (rated ${score}${out})`,
    },
    pipeline: {
      eyebrow: "The three-step pipeline motion",
      titlePre: "From ",
      titleAccent: "sign-up to meeting",
      titlePost: " set in three steps.",
    },
    pricing: {
      eyebrow: "Pricing",
      titlePre: "Plans for ",
      titleAccent: "founders and sales teams",
      titlePost: "",
    },
    usecases: {
      eyebrow: "Use-cases",
      titlePre: "",
      titleAccent: "One platform",
      titlePost: " for GTM",
      sub: "Whatever your seat at the revenue table, hubsell replaces the tool sprawl with one coordinated motion.",
    },
    featuresSec: {
      eyebrow: "The platform",
      titlePre: "Live data, email and LinkedIn orchestrated ",
      titleAccent: "in one solution",
      titlePost: "",
      beta: "Beta",
      comingSoon: "Coming soon",
    },
    testimonialsSec: {
      eyebrow: "Customer stories",
      titlePre: "What happens when ",
      titleAccent: "B2B teams",
      titlePost: " replace the stack",
      readPre: "Read the ",
      readPost: " story →",
    },
    loop: {
      eyebrow: "Publish & track · Beta",
      titlePre: "Your LinkedIn content is already generating demand. Now ",
      titleAccent: "close the loop",
      titlePost: ".",
      body: "Most outbound starts cold. But everyone who likes, comments, or reposts your LinkedIn content has already raised their hand. You can already import post engagers into hubsell and enrol them in a flow today. What is coming in beta is the closed loop: publish directly from hubsell, track every engagement as it happens, and automatically enrol each person into a warm flow, without ever exporting a list or switching tabs.",
      cta: "Book a demo",
      nowLabel: "Available today",
      betaLabel: "Coming in beta",
      now: [
        "Import everyone who likes, comments, or reposts",
        "Enrol post engagers into a flow today",
      ],
      beta: [
        "Publish directly from hubsell",
        "Track every engagement as it happens",
        "Auto-enrol each person into a warm flow",
        "No exporting lists, no switching tabs",
      ],
    },
    insightsSec: {
      newsTitle: "What is working in outbound right now",
      newsSub: "Playbooks, deliverability, and outbound strategy, straight to your inbox.",
      subscribeLabel: "Subscribe",
      emailPlaceholder: "Your email",
      eyebrow: "Insights",
      titlePre: "B2B outbound sales ",
      titleAccent: "playbooks",
      titlePost: " and insights",
      readMore: "Read more insights →",
      cardTag: "B2B sales",
    },
    cmp: {
      eyebrow: "Why hubsell",
      titlePre: "Most tools stop at the data. ",
      titleAccent: "hubsell keeps going.",
      titlePost: "",
      sub: "hubsell sources contacts live, runs email and LinkedIn in one flow, and syncs to your CRM automatically. The tools you’d otherwise buy each cover one piece of that. hubsell covers all of it.",
      moat: "Plenty of tools do one or two of these. None do all three in one place.",
      linksLabel: "Comparing hubsell to a specific tool?",
      srYes: "Yes: ",
      srPart: "Partial: ",
      srNo: "No: ",
    },
    faqSec: {
      eyebrow: "FAQ",
      titlePre: "",
      titleAccent: "Honest answers",
      titlePost: ", because outbound is already hard enough.",
      seeAll: "See all questions →",
    },
  },
};

// Quotes of the six testimonials that are not on the homepage, by slug.
export const quotesFr: Record<string, string> = {
  matterway: "We have tried several different tools and services, but only hubsell delivers both the functionality and the qualitative data to truly automate the lead generation process.",
  spryker: "hubsell’s automation has enabled us to reach and convert more partners and clients than any other platform or channel I’ve ever used. Our company simply wouldn’t have scaled without it.",
  cibt: "An excellent product for B2B selling. I have always found that the content the hubsell is able to locate is accurate and fit for purpose for my prospects. It’s easy to use, and it fast-tracks the research aspect of prospecting for my team.",
  "alon-even": "Excellent 1:1 prospecting at scale across email, LinkedIn & phone. Excellent data that does not age. Really smart concept.",
  meetyoo: "I can recommend hubsell, to anybody that uses outbound in their b2b marketing mix. Great customer support, which is helpful and super fast!",
  aspire: "Great product, fantastic support. hubsell has greatly improved lead generation in our organization. A great product with support that really stands out, with the team always going above and beyond to resolve queries in a timely manner.",
};
