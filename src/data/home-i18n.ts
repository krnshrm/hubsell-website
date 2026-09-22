// Homepage copy, locale-aware. The English wrapper strings here are the exact
// literals previously hardcoded in the section components, moved to one place so
// each section can render in the active locale. Structured content (pipeline,
// features, roles, testimonials, insights) keeps living in home-content.ts for
// English; the German equivalents live in home.de.ts. getHome(locale) returns the
// right set. English output is unchanged because the English values match the old
// literals exactly.
import { pipelineSteps, features, roles, testimonials, insights } from './home-content';
import { homeFaqs } from './faqs';
import {
  pipelineStepsDe, featuresDe, rolesDe, testimonialsDe, insightsDe,
  comparisonDe, faqsDe, stringsDe,
} from './home.de';
import {
  pipelineStepsNl, featuresNl, rolesNl, testimonialsNl, insightsNl,
  comparisonNl, faqsNl, stringsNl,
} from './home.nl';
import { defaultLocale, type Locale } from '../i18n/ui';

// Comparison matrix data. Marks ('yes'|'part'|'no') and the /vs hrefs are
// structural and stay in Comparison.astro; only labels and cell text are copy.
export interface ComparisonData {
  heads: Record<string, { label: string; href?: string }>;
  rows: { label: string; cells: Record<string, [string, string]> }[];
}

// Section-wrapper strings. Headings that contain an accent span are split into
// pre / accent / post so each locale can place the highlighted words naturally.
export interface HomeStrings {
  hero: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    sub: string;
    ctaPrimary: string;
    /** Measured customer outcomes, each attributed. Attribution is what stops
        these reading as a typical-results claim: three named customers, not an
        average. The 4.6+ ratings claim lives in the RatingsStrip section only,
        so it is no longer made twice on the page. */
    stats: { value: string; label: string; company: string }[];
  };
  logos: { eyebrow: string; aria: string };
  vvp: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    lede: string;
    volTag: string; volTitle: string; volSub: string; volAria: string;
    preTag: string; preTitle: string; preSub: string; preAria: string;
    dotCaption: string;
    contactsLabel: string; oppsLabel: string;
    volChain: string; preChain: string;
    volAfter: string; preAfter: string;
    kickerLabel: string; vs: string; kickerXPost: string;
    noteVolLabel: string; noteVolBody: string;
    notePreLabel: string; notePreBody: string;
  };
  frag: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    lede: string;
    colTool: string; colHub: string;
    /** Six rows: the tool you buy, what it costs you, and what hubsell does
        instead. One capability per tool, so the mapping is explicit rather
        than left for the visitor to infer from two separate lists. */
    pairs: { tool: string; cost: string; cap: string; capDesc: string }[];
    cta: string;
  };
  zds: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    sub: string; closer: string; cta: string;
  };
  ratings: {
    titlePre: string; titleAccent: string; titlePost: string;
    cue: string;
    aria: (platform: string, score: string, out: string) => string;
  };
  pipeline: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string };
  pricing: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string };
  usecases: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; sub: string };
  featuresSec: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; beta: string; comingSoon: string };
  testimonialsSec: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; readPre: string; readPost: string };
  loop: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    body: string; cta: string;
    nowLabel: string; betaLabel: string;
    now: string[]; beta: string[];
  };
  insightsSec: {
    newsTitle: string; newsSub: string; subscribeLabel: string; emailPlaceholder: string;
    eyebrow: string; title: string; readMore: string; cardTag: string;
  };
  cmp: {
    eyebrow: string; title: string; sub: string; moat: string; linksLabel: string;
    srYes: string; srPart: string; srNo: string;
  };
  faqSec: { eyebrow: string; titlePre: string; titleAccent: string; titlePost: string; seeAll: string };
}

const stringsEn: HomeStrings = {
  hero: {
    eyebrow: 'For founders and heads of sales with 6+ tools',
    titlePre: 'Book the same pipeline using ', titleAccent: '50 times fewer', titlePost: ' prospects.',
    sub: 'hubsell sources contacts live on buying signals, then runs email, LinkedIn and phone in one flow that syncs to your CRM. Fewer people contacted, the same meetings booked.',
    ctaPrimary: 'Book a demo',
    stats: [
      { value: '30%', label: 'lower acquisition cost', company: 'Safran' },
      { value: '3x', label: 'more opportunities', company: 'Verhaert' },
      { value: '25%', label: 'more leads', company: 'Elium' },
    ],
  },
  logos: {
    eyebrow: 'Three of these teams cut customer acquisition cost by 30% or more',
    aria: 'Logos of companies that use hubsell: Safran, Staffbase, Verhaert, Workspace 365, Sensolus, GLS, FABs, ipushpull, Kapturall and Monotype',
  },
  vvp: {
    eyebrow: 'Volume vs precision',
    titlePre: 'Same 42 opportunities. ',
    titleAccent: 'One motion costs your whole market.',
    titlePost: '',
    lede: 'Both quarters end with the same pipeline. The difference is how much of your market each one uses up, and whether anyone is left to talk to in Q2.',
    volTag: 'High volume',
    volTitle: 'Send to the entire TAM',
    volSub: 'Bought list, throwaway domains, email only, every contact in the market, every quarter.',
    volAria: 'A grid representing 100,000 prospects. Every dot turns red as the whole market is contacted.',
    preTag: 'Targeted outreach',
    preTitle: 'Send to 2% of the TAM',
    preSub: 'Live sourced on buying signals, real domain, email, LinkedIn, and phone in one flow.',
    preAria: 'The same grid of 100,000 prospects. Only a handful of dots turn green, showing 2,000 prospects reached.',
    dotCaption: '1 dot = 100 prospects',
    contactsLabel: 'prospects contacted',
    oppsLabel: 'opportunities',
    volChain: '100,000 sent \u00b7 80,000 delivered \u00b7 64,000 right person \u00b7 25,600 opens \u00b7 768 in market \u00b7 77 positive \u00b7 42 opportunities',
    preChain: '2,000 sourced \u00b7 1,960 delivered \u00b7 1,921 right person \u00b7 1,537 reached \u00b7 307 in market \u00b7 77 positive \u00b7 42 opportunities',
    volAfter: '0% of your market left. Q2 hits the same inboxes again.',
    preAfter: '98% of your market still fresh. Process can be repeated next quarter.',
    kickerLabel: 'Prospects needed per opportunity',
    vs: 'vs',
    kickerXPost: ' times fewer',
    noteVolLabel: 'High volume:',
    noteVolBody: '20% bounce, 20% wrong person, 40% open, 3% of any market is in-cycle at a given time, 10% of those trust an unknown sender enough to reply, 55% of positive replies become opportunities.',
    notePreLabel: 'Targeted outreach:',
    notePreBody: '98% valid at point of use, 80% reached across email, LinkedIn, and phone, 20% in market because the list is sourced on buying signals, 25% reply, same 55% to opportunity.',
  },
  frag: {
    eyebrow: 'The fragmented stack problem',
    titlePre: 'Six tools in your stack. Six invoices. ', titleAccent: 'None of them talking to each other.', titlePost: '',
    lede: 'The average revenue team buys six tools to do one job. Here is what each one costs you, and what hubsell does instead.',
    colTool: 'What you buy',
    colHub: 'What hubsell does',
    pairs: [
      { tool: 'Lead databases', cost: 'Data decays 30% a year. Coverage gaps in your ICP.', cap: 'Live sourcing', capDesc: 'Built against your ICP the day you need it.' },
      { tool: 'Email finders', cost: 'Multiple providers to manage. Manual stacking, no flow.', cap: 'Validated at point of use', capDesc: 'AI-cleaned, human-verified.' },
      { tool: 'Buyer intent tools', cost: 'No native action layer. Signals never trigger outreach.', cap: 'Signal layering', capDesc: 'In-market buyers from job changes and events.' },
      { tool: 'Cold email tools', cost: 'Email runs on its own. LinkedIn is a separate tool.', cap: 'Email and LinkedIn in one flow', capDesc: 'One coordinated sequence.' },
      { tool: 'LinkedIn outreach', cost: 'Point solution only. No link to email sequences.', cap: 'Every stakeholder, one campaign', capDesc: 'The whole buying group, not one person.' },
      { tool: 'CRM admin', cost: 'Reps log by hand, or not at all. CRM always out of date.', cap: 'Synced CRM', capDesc: 'Auto-logged to Salesforce, HubSpot and Pipedrive.' },
    ],
    cta: 'Unify your stack today',
  },
  zds: {
    eyebrow: 'Zero-day sourcing',
    titlePre: 'Data sourced ', titleAccent: 'the moment you need it', titlePost: '. Not the moment someone else captured it.',
    sub: 'hubsell doesn’t sell out of a stale database. The moment you define your ICP, we source live from LinkedIn, matched to your criteria and validated at the point of use.',
    closer: 'You pay for a contact that’s correct today, not for access to 300 million contacts that were right two years ago.',
    cta: 'See how we do it',
  },
  ratings: {
    titlePre: 'Rated ', titleAccent: '4.6+', titlePost: ' across G2, Capterra, and GetApp',
    cue: 'Read reviews →',
    aria: (platform, score, out) => `Read hubsell reviews on ${platform} (rated ${score}${out})`,
  },
  pipeline: { eyebrow: 'The three-step pipeline motion', titlePre: 'From ', titleAccent: 'sign-up to meeting', titlePost: ' set in three steps.' },
  pricing: { eyebrow: 'Pricing', titlePre: 'Plans for ', titleAccent: 'founders and sales teams', titlePost: '' },
  usecases: {
    eyebrow: 'Use-cases', titlePre: '', titleAccent: 'One platform', titlePost: ' for GTM',
    sub: 'Whatever your seat at the revenue table, hubsell replaces the tool sprawl with one coordinated motion.',
  },
  featuresSec: {
    eyebrow: 'The platform', titlePre: 'Live data, email and LinkedIn orchestrated ', titleAccent: 'in one solution', titlePost: '',
    beta: 'Beta', comingSoon: 'Coming soon',
  },
  testimonialsSec: {
    eyebrow: 'Customer stories', titlePre: 'What happens when ', titleAccent: 'B2B teams', titlePost: ' replace the stack',
    readPre: 'Read the ', readPost: ' story →',
  },
  loop: {
    eyebrow: 'Publish & track · Beta',
    titlePre: 'Your LinkedIn content is already generating demand. Now ', titleAccent: 'close the loop', titlePost: '.',
    body: 'Most outbound starts cold. But everyone who likes, comments, or reposts your LinkedIn content has already raised their hand. You can already import post engagers into hubsell and enrol them in a sequence today. What is coming in beta is the closed loop: publish directly from hubsell, track every engagement as it happens, and automatically enrol each person into a warm sequence, without ever exporting a list or switching tabs.',
    cta: 'Book a demo',
    nowLabel: 'Available today', betaLabel: 'Coming in beta',
    now: ['Import everyone who likes, comments, or reposts', 'Enrol post engagers into a sequence today'],
    beta: ['Publish directly from hubsell', 'Track every engagement as it happens', 'Auto-enrol each person into a warm sequence', 'No exporting lists, no switching tabs'],
  },
  insightsSec: {
    newsTitle: 'What is working in outbound right now',
    newsSub: 'Playbooks, deliverability, and outbound strategy, straight to your inbox.',
    subscribeLabel: 'Subscribe', emailPlaceholder: 'Your email',
    eyebrow: 'Insights', title: 'B2B outbound sales playbooks and insights',
    readMore: 'Read more insights →', cardTag: 'B2B sales',
  },
  cmp: {
    eyebrow: 'Why hubsell',
    title: 'Most tools stop at the data. hubsell keeps going.',
    sub: 'hubsell sources contacts live, runs email and LinkedIn in one flow, and syncs to your CRM automatically. The tools you’d otherwise buy each cover one piece of that. hubsell covers all of it.',
    moat: 'Plenty of tools do one or two of these. None do all three in one place.',
    linksLabel: 'Comparing hubsell to a specific tool?',
    srYes: 'Yes: ', srPart: 'Partial: ', srNo: 'No: ',
  },
  faqSec: {
    eyebrow: 'FAQ', titlePre: '', titleAccent: 'Honest answers', titlePost: ', because outbound is already hard enough.',
    seeAll: 'See all questions →',
  },
};

// Comparison matrix — English. Exact text/labels lifted from Comparison.astro.
const comparisonEn: ComparisonData = {
  heads: {
    hub:    { label: 'hubsell' },
    aio:    { label: 'All-in-one platforms', href: '/vs/apollo' },
    data:   { label: 'Enterprise data',      href: '/vs/zoominfo' },
    lookup: { label: 'Lookup tools',         href: '/vs/lusha' },
  },
  rows: [
    { label: 'Live, validated data', cells: {
      hub:['yes','Sourced live, verified at point of use'], aio:['part','Pre-built database of ~275M'],
      data:['part','Large static database'], lookup:['part','One-off contact lookups'] } },
    { label: 'Email, LinkedIn & phone, one flow', cells: {
      hub:['yes','One sequence, calls as CRM tasks'], aio:['part','Email automated, LinkedIn manual'],
      data:['no','Outreach sold separately'], lookup:['no','No outreach layer'] } },
    { label: 'Automatic CRM sync', cells: {
      hub:['yes','Salesforce, HubSpot & Pipedrive'], aio:['part','Salesforce & HubSpot native'],
      data:['part','Native to major CRMs'], lookup:['part','Basic, often via Zapier'] } },
    { label: 'You pay for what’s correct', cells: {
      hub:['yes','Per contact sourced & validated'], aio:['no','Per seat, plus credits'],
      data:['no','Five-figure annual contracts'], lookup:['part','Credits spent on bad hits too'] } },
    { label: 'One platform, not a stack', cells: {
      hub:['yes','Data, outreach & sync together'], aio:['part','Two of the pieces'],
      data:['no','Data only'], lookup:['no','A single piece'] } },
  ],
};

export function getHome(localeInput: string | undefined) {
  const locale: Locale =
    localeInput === 'de' ? 'de' : localeInput === 'nl' ? 'nl' : defaultLocale;
  if (locale === 'de') {
    return {
      steps: pipelineStepsDe, features: featuresDe, roles: rolesDe,
      testimonials: testimonialsDe, insights: insightsDe,
      comparison: comparisonDe, faqs: faqsDe, s: stringsDe,
    };
  }
  if (locale === 'nl') {
    return {
      steps: pipelineStepsNl, features: featuresNl, roles: rolesNl,
      testimonials: testimonialsNl, insights: insightsNl,
      comparison: comparisonNl, faqs: faqsNl, s: stringsNl,
    };
  }
  return {
    steps: pipelineSteps, features, roles, testimonials, insights,
    comparison: comparisonEn, faqs: homeFaqs, s: stringsEn,
  };
}
