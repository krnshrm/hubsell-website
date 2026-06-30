// Locale config and the shared-chrome string dictionary (nav, footer, top bar,
// buttons). Page body copy lives with each page; this file is only the chrome.
// English is the source and the fallback. Add a locale's strings here, then
// translate the pages. House rule: the brand is always written "hubsell" in
// lower case, except inside a line that is entirely upper case.

export const locales = ['en', 'de', 'nl', 'fr', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Shown in the language switcher, each name in its own language.
export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
};

// Which non-default locales have a REAL translated page at a given base path
// (the English-root path, e.g. '/', '/contact'). The switcher offers a locale
// only where the current page exists in it, and BaseLayout emits hreflang only
// for those. English always exists, so it is implicit. Empty for now; the German
// homepage is the first entry (added in the next PR).
export const translatedRoutes: Partial<Record<Locale, string[]>> = {
  de: ['/', '/contact'],
  // nl: [], fr: [], es: [], pt: [],
};

type Dict = Record<string, string>;

const en: Dict = {
  'nav.resources': 'Resources',
  'nav.heading.learn': 'Learn',
  'nav.heading.company': 'Company',
  'nav.insights': 'Insights',
  'nav.customerstories': 'Customer stories',
  'nav.comparisons': 'Comparisons',
  'nav.contact': 'Contact',
  'nav.reviews': 'Reviews',
  'nav.aiinfo': 'AI information',
  'nav.pricing': 'Pricing',
  'nav.usecases': 'Use cases',
  'nav.faq': 'FAQ',
  'cta.trial': 'Start free trial',
  'cta.login': 'Log in',
  'badge.soon': 'Soon',
  'footer.tagline': 'Replace your outbound stack. Live-sourced data, email and LinkedIn outreach, and CRM sync in one platform.',
  'footer.heading.resources': 'Resources',
  'footer.heading.customerstories': 'Customer stories',
  'footer.heading.comparisons': 'Comparisons',
  'footer.heading.company': 'Company',
  'footer.all.customerstories': 'All customer stories',
  'footer.all.comparisons': 'All comparisons',
  'legal.legalnotice': 'Legal Notice',
  'legal.privacy': 'Privacy Policy',
  'legal.dpa': 'DPA',
  'legal.terms': 'Terms & Conditions',
  'legal.affiliate': 'Affiliate Terms',
  'footer.country': 'Germany',
  'theme.dark': 'Dark mode',
  'theme.light': 'Light mode',
  'lang.label': 'Language',
};

// German — formal Sie register throughout (per the brand decision). Legal labels
// use the German equivalents that German visitors expect (Impressum, AGB, AVV).
const de: Dict = {
  'nav.resources': 'Ressourcen',
  'nav.heading.learn': 'Lernen',
  'nav.heading.company': 'Unternehmen',
  'nav.insights': 'Insights',
  'nav.customerstories': 'Erfolgsgeschichten',
  'nav.comparisons': 'Vergleiche',
  'nav.contact': 'Kontakt',
  'nav.reviews': 'Bewertungen',
  'nav.aiinfo': 'KI-Informationen',
  'nav.pricing': 'Preise',
  'nav.usecases': 'Anwendungsfälle',
  'nav.faq': 'FAQ',
  'cta.trial': 'Kostenlos testen',
  'cta.login': 'Anmelden',
  'badge.soon': 'Bald',
  'footer.tagline': 'Ersetzen Sie Ihren Outbound-Stack. Live recherchierte Daten, E-Mail- und LinkedIn-Outreach und CRM-Sync auf einer Plattform.',
  'footer.heading.resources': 'Ressourcen',
  'footer.heading.customerstories': 'Erfolgsgeschichten',
  'footer.heading.comparisons': 'Vergleiche',
  'footer.heading.company': 'Unternehmen',
  'footer.all.customerstories': 'Alle Erfolgsgeschichten',
  'footer.all.comparisons': 'Alle Vergleiche',
  'legal.legalnotice': 'Impressum',
  'legal.privacy': 'Datenschutzerklärung',
  'legal.dpa': 'AVV',
  'legal.terms': 'AGB',
  'legal.affiliate': 'Affiliate-Bedingungen',
  'footer.country': 'Deutschland',
  'theme.dark': 'Dunkler Modus',
  'theme.light': 'Heller Modus',
  'lang.label': 'Sprache',
};

export const ui: Partial<Record<Locale, Dict>> = { en, de };
