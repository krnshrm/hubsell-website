// Single source of truth for the site navigation.
// Both Nav.astro and Footer.astro read this file, so adding a link or flipping a
// `soon` flag to live updates the nav AND the footer in one edit. The footer shows
// only live links (see `liveLinks`), so the moment a page ships (its `soon` flag is
// removed) it appears in the footer automatically.
//
// i18n: each link/group carries a `key` into the chrome dictionary (src/i18n/ui.ts)
// so the label can be translated per locale, while `href` and `heading` stay as the
// English structural source. Hrefs are made locale-aware at render time via
// localizeUrl(); see Nav.astro / Footer.astro.
import { SIGNUP_URL, LOGIN_URL } from './site';

export interface NavLink {
  label: string;
  key?: string;       // chrome-dictionary key for the translated label
  href?: string;      // omit while `soon` is true
  soon?: boolean;     // not built yet: hidden from nav and footer until the flag is removed
  external?: boolean; // opens the app (app.hubsell.com)
}
export interface NavGroup {
  heading: string;
  key?: string;       // chrome-dictionary key for the translated heading
  links: NavLink[];
}

// The Resources mega-menu columns. Live links render in the nav and the footer; the
// footer also expands the small collections (customer stories, comparisons) into their
// individual items. `soon` items stay hidden until their flag is removed.
export const menuGroups: NavGroup[] = [
  {
    heading: 'Learn',
    key: 'nav.heading.learn',
    links: [
      { label: 'Insights', key: 'nav.insights', href: '/insights' },
      { label: 'Customer stories', key: 'nav.customerstories', href: '/customerstories' },
      { label: 'Comparisons', key: 'nav.comparisons', href: '/comparisons' },
      { label: 'Resource center', soon: true },
      { label: 'Events', soon: true },
      { label: 'AI sales coach', soon: true },
      { label: 'Free tools', soon: true },
      { label: 'GTM plays', soon: true },
      { label: 'Help center', soon: true },
    ],
  },
  {
    heading: 'Company',
    key: 'nav.heading.company',
    links: [
      { label: 'Contact', key: 'nav.contact', href: '/contact' },
      { label: 'About us', soon: true },
      { label: 'Careers', soon: true },
      { label: 'Partner program', soon: true },
      { label: 'Newsroom', soon: true },
      { label: 'Reviews', key: 'nav.reviews', href: '/hubsell-reviews' },
      { label: 'AI information', key: 'nav.aiinfo', href: '/ai-information-page' },
    ],
  },
];

// Top-level links shown beside the Resources trigger (and in the footer's Product column).
export const topLinks: NavLink[] = [
  { label: 'Pricing', key: 'nav.pricing', href: '/#pricing' },
];

// Footer-only links (kept out of the top nav to keep it lean).
export const footerLinks: NavLink[] = [
  { label: 'Use cases', key: 'nav.usecases', href: '/use-cases' },
  { label: 'FAQ', key: 'nav.faq', href: '/faqs' },
];

// Platform pages (footer's own column; also linked from the hero and the pipeline section).
export const platformLinks: NavLink[] = [
  { label: 'Platform overview', key: 'nav.platform.overview', href: '/platform' },
  { label: 'Live data', key: 'nav.platform.livedata', href: '/platform/live-data' },
  { label: 'Multichannel outreach', key: 'nav.platform.outreach', href: '/platform/multichannel-outreach' },
  { label: 'CRM sync', key: 'nav.platform.crmsync', href: '/platform/crm-sync' },
];

// Account / conversion links (the TopBar's Log in + the trial CTA, reused in the footer).
export const accountLinks: NavLink[] = [
  { label: 'Book a demo', key: 'cta.trial', href: SIGNUP_URL, external: true },
  { label: 'Log in', key: 'cta.login', href: LOGIN_URL, external: true },
];

// Legal links (footer only).
export const legalLinks: NavLink[] = [
  { label: 'Legal Notice', key: 'legal.legalnotice', href: '/legal-notice' },
  { label: 'Privacy Policy', key: 'legal.privacy', href: '/privacy' },
  { label: 'DPA', key: 'legal.dpa', href: '/data-processing-agreement' },
  { label: 'Terms & Conditions', key: 'legal.terms', href: '/terms' },
  { label: 'Affiliate Terms', key: 'legal.affiliate', href: '/affiliate-terms-and-conditions' },
];

// Live (built) links only — used by the footer so unbuilt pages never show there.
export const liveLinks = (links: NavLink[]): NavLink[] => links.filter((l) => !l.soon && l.href);
