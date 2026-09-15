// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// The value of a constants file: SIGNUP_URL is imported by every CTA button
// in the repo, so retargeting all of them is a one-line edit here.
// ==========================================================================
// Central destinations for the primary CTAs, so there's one place to update.
// Login points at https://app.hubsell.com/. SIGNUP_URL is the trial CTA target.
// There is no signup page yet, so it is temporarily routed to the book-a-call
// page. When signup goes live, set SIGNUP_URL back to
// 'https://app.hubsell.com/signup' — every "Book a demo" button reads this
// one constant, so that single edit restores the real flow everywhere.
export const SIGNUP_URL = '/book-a-call';

// Cloudflare Turnstile site key (public by design). Empty string = Turnstile
// off; forms fall back to honeypot + fill-time checks only. Paste the site key
// from the Cloudflare dashboard (Turnstile widget) to switch it on, and set
// TURNSTILE_SECRET_KEY in the Pages env for server verification.
// Guide: docs/BOT-PROTECTION.md
export const TURNSTILE_SITE_KEY = '0x4AAAAAACIAXouVNUv0_MXY';
export const LOGIN_URL = 'https://app.hubsell.com/';
export const DEMO_URL = '/book-a-call';

// The people a visitor actually meets when they book a call. Rendered on
// /book-a-call (which is also where "request a demo" points) above the form.
//
// Photos live on R2 alongside the customer avatars. Remove an entry to drop
// that person; empty the array and the block stops rendering entirely, so
// nothing breaks either way.
export const CALL_HOSTS = [
  {
    photo: 'https://assets.hubsell.com/avatars/karan-sharma.jpg',
    name: 'Karan Sharma',
    title: 'Founder, hubsell',
  },
  {
    photo: 'https://assets.hubsell.com/avatars/mukul-thakur.jpg',
    name: 'Mukul Thakur',
    title: '',
  },
  {
    photo: 'https://assets.hubsell.com/avatars/maria-r.jpg',
    name: 'Maria R',
    title: '',
  },
];

// ---------------------------------------------------------------------------
// Blog authors (bylines on /insights posts)
//
// A post opts in by setting `author: 'karan'` in its frontmatter; the key must
// match an entry below. Posts with NO author field render no byline, which is
// deliberate: the 87 posts migrated from Webflow were not written by a named
// person, and putting someone's name on them would be false attribution.
//
// The byline is a trust signal (a real name, role, and face behind the claims)
// and it also feeds the Article schema author as a Person instead of the
// Organization fallback. Photos live on R2 next to the call-host avatars.
// ---------------------------------------------------------------------------
export const AUTHORS = {
  karan: {
    name: 'Karan Sharma',
    title: 'Founder, hubsell',
    photo: 'https://assets.hubsell.com/avatars/karan-sharma.jpg',
    url: 'https://www.linkedin.com/in/krnshrm/',
    bio: 'Founder of hubsell. Writes about outbound, GTM, and the data behind it, mostly from campaigns he runs himself.',
  },
} as const;

export type AuthorKey = keyof typeof AUTHORS;
