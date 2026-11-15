// Locale wiring for the glossary. Picks the right per-locale content collection
// and holds the small chrome strings and category labels for the index and term
// pages. Category KEYS are the English category names stored in frontmatter; the
// labels below translate them per locale so filter chips and tags read natively.
import type { Locale } from '../i18n/ui';

export type GlossaryCollection = 'glossary' | 'glossaryDe' | 'glossaryNl' | 'glossaryFr' | 'glossaryEs' | 'glossaryPt';

const COLLECTION_BY_LOCALE: Record<Locale, GlossaryCollection> = {
  en: 'glossary',
  de: 'glossaryDe',
  nl: 'glossaryNl',
  fr: 'glossaryFr', // English copies until translated (HUB-613)
  es: 'glossaryEs',
  pt: 'glossaryPt',
};

export function glossaryCollection(L: Locale): GlossaryCollection {
  return COLLECTION_BY_LOCALE[L] ?? 'glossary';
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
  indexTitle: string; // <title> of the glossary index page
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
  fr: {
    'Data and enrichment': 'Données et enrichissement',
    'Outbound and email': 'Outbound et e-mail',
    'Deliverability': 'Délivrabilité',
    'CRM and RevOps': 'CRM et RevOps',
    'Compliance and GDPR': 'Conformité et RGPD',
    'Sales roles': 'Rôles commerciaux',
    'Metrics': 'Indicateurs',
    'SEO and GEO': 'SEO et GEO',
  },
  es: {
    'Data and enrichment': 'Datos y enriquecimiento',
    'Outbound and email': 'Outbound y email',
    'Deliverability': 'Entregabilidad',
    'CRM and RevOps': 'CRM y RevOps',
    'Compliance and GDPR': 'Cumplimiento y RGPD',
    'Sales roles': 'Roles de ventas',
    'Metrics': 'Métricas',
    'SEO and GEO': 'SEO y GEO',
  },
  pt: {
    'Data and enrichment': 'Dados e enriquecimento',
    'Outbound and email': 'Outbound e e-mail',
    'Deliverability': 'Entregabilidade',
    'CRM and RevOps': 'CRM e RevOps',
    'Compliance and GDPR': 'Conformidade e RGPD',
    'Sales roles': 'Cargos de vendas',
    'Metrics': 'Métricas',
    'SEO and GEO': 'SEO e GEO',
  },
};

// The frontmatter `category` string differs per locale (each file stores its own
// localized category). To map any file back to the English key for ordering and
// filtering, we invert the label tables.
const KEY_BY_LABEL: Record<Locale, Record<string, string>> = {
  en: invert(CATEGORY_LABELS.en),
  de: invert(CATEGORY_LABELS.de),
  nl: invert(CATEGORY_LABELS.nl),
  fr: invert(CATEGORY_LABELS.fr),
  es: invert(CATEGORY_LABELS.es),
  pt: invert(CATEGORY_LABELS.pt),
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
    indexTitle: 'B2B sales and data glossary | hubsell',
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
    indexTitle: 'Glossar f\u00fcr B2B-Vertrieb und Daten | hubsell',
    eyebrow: 'Glossar',
    h1: 'Das Glossar f\u00fcr B2B-Vertrieb und Daten',
    intro: 'Klare, praxisnahe Definitionen der Begriffe hinter Outbound, Daten und Deliverability. Geschrieben f\u00fcr Praktiker, nicht f\u00fcr Lehrb\u00fccher.',
    searchPlaceholder: 'Begriffe suchen',
    all: 'Alle',
    termsLabel: (n) => `${n} Begriffe`,
    relatedTitle: 'Verwandte Begriffe',
    backToGlossary: 'Zur\u00fcck zum Glossar',
    ctaTitle: 'Sehen Sie hubsell auf Live-Daten',
    ctaSub: 'Buchen Sie eine Demo, und wir zeigen Ihnen hubsell auf Daten, die heute korrekt sind.',
    ctaButton: 'Demo buchen',
    categoryLabel: (k) => CATEGORY_LABELS.de[k] ?? k,
    crumbHome: 'Startseite',
    crumbGlossary: 'Glossar',
  },
  nl: {
    indexTitle: 'Woordenlijst voor B2B-sales en data | hubsell',
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
  fr: {
    indexTitle: 'Glossaire de la vente B2B et des données | hubsell',
    eyebrow: 'Glossaire',
    h1: 'Le glossaire de la vente B2B et des données',
    intro: "Des définitions claires et concrètes des termes de l'outbound, des données et de la délivrabilité. Écrites pour les gens de terrain, pas pour les manuels.",
    searchPlaceholder: 'Rechercher un terme',
    all: 'Tous',
    termsLabel: (n) => `${n} termes`,
    relatedTitle: 'Termes associés',
    backToGlossary: 'Retour au glossaire',
    ctaTitle: 'Voyez-le sur des données en temps réel',
    ctaSub: "Réservez une démo et nous vous montrerons hubsell sur des données exactes aujourd'hui.",
    ctaButton: 'Réservez une démo',
    categoryLabel: (k) => CATEGORY_LABELS.fr[k] ?? k,
    crumbHome: 'Accueil',
    crumbGlossary: 'Glossaire',
  },
  es: {
    indexTitle: 'Glosario de ventas B2B y datos | hubsell',
    eyebrow: 'Glosario',
    h1: 'El glosario de ventas B2B y datos',
    intro: 'Definiciones claras y prácticas de los términos del outbound, los datos y la entregabilidad. Escritas para quienes trabajan en ventas, no para los manuales.',
    searchPlaceholder: 'Buscar términos',
    all: 'Todos',
    termsLabel: (n) => `${n} términos`,
    relatedTitle: 'Términos relacionados',
    backToGlossary: 'Volver al glosario',
    ctaTitle: 'Míralo con datos en tiempo real',
    ctaSub: 'Reserva una demo y te mostraremos hubsell trabajando con datos que son correctos hoy.',
    ctaButton: 'Reserva una demo',
    categoryLabel: (k) => CATEGORY_LABELS.es[k] ?? k,
    crumbHome: 'Inicio',
    crumbGlossary: 'Glosario',
  },
  pt: {
    indexTitle: 'Glossário de vendas B2B e dados | hubsell',
    eyebrow: 'Glossário',
    h1: 'O glossário de vendas B2B e dados',
    intro: 'Definições claras e práticas dos termos de outbound, dados e entregabilidade. Escritas para quem trabalha com vendas, não para os livros.',
    searchPlaceholder: 'Pesquisar termos',
    all: 'Todos',
    termsLabel: (n) => `${n} termos`,
    relatedTitle: 'Termos relacionados',
    backToGlossary: 'Voltar ao glossário',
    ctaTitle: 'Veja com dados em tempo real',
    ctaSub: 'Agende uma demo e mostraremos a hubsell funcionando com dados corretos hoje.',
    ctaButton: 'Agende uma demo',
    categoryLabel: (k) => CATEGORY_LABELS.pt[k] ?? k,
    crumbHome: 'Início',
    crumbGlossary: 'Glossário',
  },
};

export function glossaryChrome(L: Locale): Chrome {
  return CHROME[L];
}
