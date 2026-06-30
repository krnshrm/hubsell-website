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
    ctaPrimary: string; ctaSecondary: string;
    ratingsPre: string; ratingsScore: string; ratingsPost: string;
  };
  logos: { eyebrow: string; aria: string };
  frag: {
    eyebrow: string;
    titlePre: string; titleAccent: string; titlePost: string;
    badTag: string; badLine: string;
    join: string;
    goodTag: string; goodLine: string;
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
    eyebrow: 'For VPs of Sales tired of paying for 6+ tools',
    titlePre: 'Replace your ', titleAccent: 'outbound', titlePost: ' stack with one platform.',
    sub: 'Your team should spend time selling, not switching tabs. hubsell brings your data, outreach, and CRM sync into one place so they can.',
    ctaPrimary: 'Start free trial', ctaSecondary: 'See it in action',
    ratingsPre: 'Rated ', ratingsScore: '4.8/5.0', ratingsPost: ' across Capterra, GetApp, and SoftwareAdvice.',
  },
  logos: {
    eyebrow: 'Trusted by B2B revenue teams across Europe',
    aria: 'Logos of companies that use hubsell, including Safran, Staffbase, Verhaert, Personio, Telenor and many more',
  },
  frag: {
    eyebrow: 'The fragmented stack problem',
    titlePre: 'Six tools in your stack. Six invoices. ', titleAccent: 'None of them talking to each other.', titlePost: '',
    badTag: 'Disconnected',
    badLine: 'The average revenue team runs six tools to do one job. Each one siloed, none of them talking. Hover any tool to see where it leaves you exposed.',
    join: 'hubsell unifies all six',
    goodTag: 'Connected',
    goodLine: 'One platform. One login. One flow. One invoice. The same six jobs wired together, so a signal becomes outreach and outreach lands in your CRM. Hover any capability to see what it does.',
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
    titlePre: 'Rated ', titleAccent: '4.8+', titlePost: ' across G2, Capterra, and GetApp',
    cue: 'Read reviews →',
    aria: (platform, score, out) => `Read hubsell reviews on ${platform} (rated ${score}${out})`,
  },
  pipeline: { eyebrow: 'The three-step pipeline motion', titlePre: 'From ', titleAccent: 'sign-up to meeting', titlePost: ' set in three steps.' },
  pricing: { eyebrow: 'Pricing', titlePre: 'Plans for ', titleAccent: 'Solopreneurs & GTM Teams', titlePost: '' },
  usecases: {
    eyebrow: 'Use-cases', titlePre: '', titleAccent: 'One platform', titlePost: ' for GTM',
    sub: 'Whatever your seat at the revenue table, hubsell replaces the tool sprawl with one coordinated motion.',
  },
  featuresSec: {
    eyebrow: 'The platform', titlePre: 'Live data, email and LinkedIn orchestrated ', titleAccent: 'in one solution', titlePost: '',
    beta: 'Beta', comingSoon: 'Coming soon',
  },
  testimonialsSec: {
    eyebrow: 'Customer stories', titlePre: 'What ', titleAccent: 'B2B teams', titlePost: ' say about hubsell',
    readPre: 'Read the ', readPost: ' story →',
  },
  loop: {
    eyebrow: 'Publish & track · Beta',
    titlePre: 'Your LinkedIn content is already generating demand. Now ', titleAccent: 'close the loop', titlePost: '.',
    body: 'Most outbound starts cold. But everyone who likes, comments, or reposts your LinkedIn content has already raised their hand. You can already import post engagers into hubsell and enrol them in a sequence today. What is coming in beta is the closed loop: publish directly from hubsell, track every engagement as it happens, and automatically enrol each person into a warm sequence, without ever exporting a list or switching tabs.',
    cta: 'Start free trial',
    nowLabel: 'Available today', betaLabel: 'Coming in beta',
    now: ['Import everyone who likes, comments, or reposts', 'Enrol post engagers into a sequence today'],
    beta: ['Publish directly from hubsell', 'Track every engagement as it happens', 'Auto-enrol each person into a warm sequence', 'No exporting lists, no switching tabs'],
  },
  insightsSec: {
    newsTitle: 'Stay ahead in B2B sales and marketing',
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
    { label: 'Email + LinkedIn, one flow', cells: {
      hub:['yes','One sequence across both channels'], aio:['part','Email automated, LinkedIn manual'],
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
  const locale: Locale = localeInput === 'de' ? 'de' : defaultLocale;
  const de = locale === 'de';
  return {
    steps: de ? pipelineStepsDe : pipelineSteps,
    features: de ? featuresDe : features,
    roles: de ? rolesDe : roles,
    testimonials: de ? testimonialsDe : testimonials,
    insights: de ? insightsDe : insights,
    comparison: de ? comparisonDe : comparisonEn,
    faqs: de ? faqsDe : homeFaqs,
    s: de ? stringsDe : stringsEn,
  };
}
