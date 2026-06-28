// Single source of truth for the site navigation.
// Both Nav.astro and Footer.astro read this file, so adding a link or flipping a
// `soon` flag to live updates the nav AND the footer in one edit. The footer shows
// only live links (see `liveLinks`), so the moment a page ships (its `soon` flag is
// removed) it appears in the footer automatically.
import { SIGNUP_URL, LOGIN_URL } from './site';

export interface NavLink {
  label: string;
  href?: string;      // omit while `soon` is true
  soon?: boolean;     // not built yet: hidden from nav and footer until the flag is removed
  external?: boolean; // opens the app (app.hubsell.com)
}
export interface NavGroup {
  heading: string;
  links: NavLink[];
}

// The Resources mega-menu columns. Live links render in the nav and the footer; the
// footer also expands the small collections (customer stories, comparisons) into their
// individual items. `soon` items stay hidden until their flag is removed.
export const menuGroups: NavGroup[] = [
  {
    heading: 'Learn',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Customer stories', href: '/customerstories' },
      { label: 'Comparisons', href: '/comparisons' },
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
    links: [
      { label: 'About us', soon: true },
      { label: 'Careers', soon: true },
      { label: 'Partner program', soon: true },
      { label: 'Newsroom', soon: true },
    ],
  },
];

// Top-level links shown beside the Resources trigger (and in the footer's Product column).
export const topLinks: NavLink[] = [
  { label: 'Pricing', href: '/#pricing' },
];

// Account / conversion links (the TopBar's Log in + the trial CTA, reused in the footer).
export const accountLinks: NavLink[] = [
  { label: 'Start free trial', href: SIGNUP_URL, external: true },
  { label: 'Log in', href: LOGIN_URL, external: true },
];

// Legal links (footer only).
export const legalLinks: NavLink[] = [
  { label: 'Legal Notice', href: '/legal-notice' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'DPA', href: '/data-processing-agreement' },
  { label: 'Terms & Conditions', href: '/terms' },
];

// Live (built) links only — used by the footer so unbuilt pages never show there.
export const liveLinks = (links: NavLink[]): NavLink[] => links.filter((l) => !l.soon && l.href);
