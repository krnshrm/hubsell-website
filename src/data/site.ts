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
// A post opts in by setting `author: 'karan'` in its frontmatter, and may add
// `coAuthors: ['riya']` for people who contributed. Keys must match an entry
// below. Posts with NO author field render no byline, which is deliberate: some
// migrated Webflow posts have no known writer, and putting someone's name on
// them would be false attribution.
//
// The byline is a trust signal (a real name, role, and face behind the claims)
// and it also feeds the Article schema author as one or more Person entries
// instead of the Organization fallback.
//
// `company` is where the person works NOW, which for former colleagues is not
// hubsell. That is intentional: an accurate current affiliation is a stronger
// signal than a stale one, and the hubsell connection lives in the bio.
// Source of truth for these entries is the founder's author directory sheet.
// Photos live on R2 alongside the call-host avatars.
// ---------------------------------------------------------------------------
export const AUTHORS = {
  karan: {
    name: 'Karan Sharma',
    title: 'Founder',
    company: 'hubsell',
    photo: 'https://assets.hubsell.com/avatars/karan-sharma.jpg',
    url: 'https://www.linkedin.com/in/krnshrm/',
    bio: 'Founder of hubsell. Writes about outbound, GTM, and the data behind it, mostly from campaigns he runs himself.',
  },
  riya: {
    name: 'Riya Uppal',
    title: 'Narrative Analyst',
    company: 'Storied, Inc',
    photo: 'https://assets.hubsell.com/avatars/riya-uppal.jpg',
    url: 'https://www.linkedin.com/in/riya-uppal01/',
    bio: 'Led marketing communications and content at hubsell from 2021 to 2023. Now works on communications and narrative strategy for global enterprises, after 8 years building brand campaigns across North America, Europe and Asia.',
  },
  sebastian: {
    name: 'Sebastian Schlimme',
    title: 'B2B Sales',
    company: 'GLS Sprachenzentrum',
    photo: 'https://assets.hubsell.com/avatars/sebastian-schlimme.jpg',
    url: 'https://www.linkedin.com/in/sebastian-schlimme/',
    bio: 'Spent five years at hubsell from 2018 to 2023, starting in customer success and finishing as Sales Director for DACH. Worked directly with the customers running outbound campaigns, then led the team selling to them.',
  },
  guido: {
    name: 'Guido Croce',
    title: 'Co-Founder',
    company: 'E&G Consulting',
    photo: 'https://assets.hubsell.com/avatars/guido-croce.jpg',
    url: 'https://www.linkedin.com/in/guido-c-croce/',
    bio: 'Growth hacker at hubsell from 2018 to 2019, where he set up outbound campaigns and wrote much of the blog. Now co-founder of E&G Consulting and Director of Sales Marketing at Featurely, both in Berlin.',
  },
  kylie: {
    name: 'Kylie Naude',
    title: 'Senior PR Account Manager',
    company: 'Hook, Line & Sinker',
    photo: 'https://assets.hubsell.com/avatars/kylie-naude.jpg',
    url: 'https://www.linkedin.com/in/kylie-naude-0280ab198/',
    bio: 'Wrote content for hubsell in 2021 and 2022, focused on the complex conversations that happen in B2B sales. Now a senior PR account manager at Hook, Line & Sinker in Cape Town, after three years in tech and fintech press.',
  },
  mukul: {
    name: 'Mukul Thakur',
    title: 'GTM & Product Operations',
    company: 'hubsell',
    photo: 'https://assets.hubsell.com/avatars/mukul-thakur.jpg',
    url: 'https://www.linkedin.com/in/mukul-thakur-01b227b8/',
    bio: 'Works alongside the founder at hubsell, helping revenue teams move from high-volume outreach to fewer, better-targeted conversations. Spends his time on the practical side of that shift: which signals are worth acting on, and how to stay in front of buyers who are not ready yet.',
  },
  maria: {
    name: 'Maria R.',
    title: 'Fractional CPO',
    company: 'hubsell',
    photo: 'https://assets.hubsell.com/avatars/maria-r.jpg',
    url: 'https://www.linkedin.com/in/miarichter/',
    bio: 'Fractional CPO at hubsell, after seven years running product management there from 2018. Shaped much of how the platform works today, from the sales workflow to the parts users touch every day.',
  },
} as const;

export type AuthorKey = keyof typeof AUTHORS;
