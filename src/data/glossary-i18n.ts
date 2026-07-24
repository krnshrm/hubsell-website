// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// Locale ACCESSOR file: merges the English source with the translated
// siblings and exports get*(locale) functions for components. The pattern is
// explained in src/data/home-i18n.ts.
// ==========================================================================
// Locale wiring for the glossary. Picks the right per-locale content collection
// and holds the small chrome strings and category labels for the index and term
// pages. Category KEYS are the English category names stored in frontmatter; the
// labels below translate them per locale so filter chips and tags read natively.
import type { Locale } from '../i18n/ui';

export type GlossaryCollection = 'glossary' | 'glossaryDe' | 'glossaryNl';

export function glossaryCollection(L: Locale): GlossaryCollection {
  if (L === 'de') return 'glossaryDe';
  if (L === 'nl') return 'glossaryNl';
  return 'glossary';
}

// The 8 categories, in display order. Keys match the frontmatter `category` value
// used in each locale's files (the files already store the localized category
// string), so we look up by the English key and render the localized label.
export const GLOSSARY_CATEGORY_ORDER = [
  'Data and enrichment',
  'Outbound and email',
  'Deliverability',
  'CRM and RevOps',
  'Compliance and GDPR',
  'Sales roles',
  'Metrics',
  'SEO and GEO',
] as const;

type Chrome = {
  eyebrow: string;
  h1: string;
  intro: string;
  searchPlaceholder: string;
  all: string;
  termsLabel: (n: number) => string;
  relatedTitle: string;
  backToGlossary: string;
  ctaTitle: string;
  ctaSub: string;
  ctaButton: string;
  categoryLabel: (enKey: string) => string;
  crumbHome: string;
  crumbGlossary: string;
};

const CATEGORY_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    'Data and enrichment': 'Data and enrichment',
    'Outbound and email': 'Outbound and email',
    'Deliverability': 'Deliverability',
    'CRM and RevOps': 'CRM and RevOps',
    'Compliance and GDPR': 'Compliance and GDPR',
    'Sales roles': 'Sales roles',
    'Metrics': 'Metrics',
    'SEO and GEO': 'SEO and GEO',
  },
  de: {
    'Data and enrichment': 'Daten und Enrichment',
    'Outbound and email': 'Outbound und E-Mail',
    'Deliverability': 'Deliverability',
    'CRM and RevOps': 'CRM und RevOps',
    'Compliance and GDPR': 'Compliance und DSGVO',
    'Sales roles': 'Vertriebsrollen',
    'Metrics': 'Kennzahlen',
    'SEO and GEO': 'SEO und GEO',
  },
  nl: {
    'Data and enrichment': 'Data en enrichment',
    'Outbound and email': 'Outbound en e-mail',
    'Deliverability': 'Deliverability',
    'CRM and RevOps': 'CRM en RevOps',
    'Compliance and GDPR': 'Compliance en AVG',
    'Sales roles': 'Salesrollen',
    'Metrics': 'Metrieken',
    'SEO and GEO': 'SEO en GEO',
  },
};

// The frontmatter `category` string differs per locale (each file stores its own
// localized category). To map any file back to the English key for ordering and
// filtering, we invert the label tables.
const KEY_BY_LABEL: Record<Locale, Record<string, string>> = {
  en: invert(CATEGORY_LABELS.en),
  de: invert(CATEGORY_LABELS.de),
  nl: invert(CATEGORY_LABELS.nl),
};
function invert(m: Record<string, string>) {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(m)) out[v] = k;
  return out;
}
export function categoryKey(L: Locale, storedCategory: string): string {
  return KEY_BY_LABEL[L][storedCategory] ?? storedCategory;
}

const CHROME: Record<Locale, Chrome> = {
  en: {
    eyebrow: 'Glossary',
    h1: 'The B2B sales and data glossary',
    intro: 'Clear, practical definitions of the terms behind outbound, data, and deliverability. Written for operators, not textbooks.',
    searchPlaceholder: 'Search terms',
    all: 'All',
    termsLabel: (n) => `${n} terms`,
    relatedTitle: 'Related terms',
    backToGlossary: 'Back to glossary',
    ctaTitle: 'See it on live data',
    ctaSub: 'Book a demo and we will show you hubsell working on data that is correct today.',
    ctaButton: 'Book a demo',
    categoryLabel: (k) => CATEGORY_LABELS.en[k] ?? k,
    crumbHome: 'Home',
    crumbGlossary: 'Glossary',
  },
  de: {
    eyebrow: 'Glossar',
    h1: 'Das Glossar f\u00fcr B2B-Vertrieb und Daten',
    intro: 'Klare, praxisnahe Definitionen der Begriffe hinter Outbound, Daten und Deliverability. Geschrieben f\u00fcr Praktiker, nicht f\u00fcr Lehrb\u00fccher.',
    searchPlaceholder: 'Begriffe suchen',
    all: 'Alle',
    termsLabel: (n) => `${n} Begriffe`,
    relatedTitle: 'Verwandte Begriffe',
    backToGlossary: 'Zur\u00fcck zum Glossar',
    ctaTitle: 'Sehen Sie es auf Live-Daten',
    ctaSub: 'Buchen Sie eine Demo und wir zeigen Ihnen hubsell auf Daten, die heute korrekt sind.',
    ctaButton: 'Demo buchen',
    categoryLabel: (k) => CATEGORY_LABELS.de[k] ?? k,
    crumbHome: 'Startseite',
    crumbGlossary: 'Glossar',
  },
  nl: {
    eyebrow: 'Woordenlijst',
    h1: 'De woordenlijst voor B2B-sales en data',
    intro: 'Heldere, praktische definities van de begrippen achter outbound, data en deliverability. Geschreven voor operators, niet voor studieboeken.',
    searchPlaceholder: 'Begrippen zoeken',
    all: 'Alle',
    termsLabel: (n) => `${n} begrippen`,
    relatedTitle: 'Gerelateerde begrippen',
    backToGlossary: 'Terug naar de woordenlijst',
    ctaTitle: 'Zie het op live data',
    ctaSub: 'Plan een demo en we laten hubsell zien op data die vandaag klopt.',
    ctaButton: 'Demo plannen',
    categoryLabel: (k) => CATEGORY_LABELS.nl[k] ?? k,
    crumbHome: 'Home',
    crumbGlossary: 'Woordenlijst',
  },
};

export function glossaryChrome(L: Locale): Chrome {
  return CHROME[L];
}
