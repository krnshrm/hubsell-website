// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// ==========================================================================
// Shared testimonials pool. One source of truth for customer quotes + faces, used
// across use-case pages, comparison pages, and (optionally) the homepage. The first
// six are the customer-story champions (with a storySlug linking to the full story);
// the rest are standalone testimonials. Photos live on R2 (assets.hubsell.com/avatars).
// Quotes are imported verbatim from customer feedback, so their punctuation is kept as-is.

export interface Testimonial {
  slug: string;        // stable key, used to reference a quote from a page
  name: string;
  title?: string;
  company?: string;
  quote: string;
  photo?: string;      // R2 avatar URL (falls back to initials if it fails to load)
  storySlug?: string;  // customer-story slug, when a full story exists
}

const AV = 'https://assets.hubsell.com/avatars';

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: 'safran',
    name: 'Richard Wood', title: 'CEO', company: 'Safran',
    quote: 'hubsell’s automation gives a maximum return for minimum effort on data gathering and cold outreach. Their outreach functionality is excellent.',
    photo: `${AV}/699dcee15832f934d9f15cc7_Richard-W.webp`,
    storySlug: 'safran',
  },
  {
    slug: 'verhaert',
    name: 'Laurent Schauvliege', title: 'Business Manager', company: 'Verhaert',
    quote: 'Thanks to hubsell we can reach more people in less time whilst still communicating in a very personalized way as we would do manually.',
    photo: `${AV}/699dcee15832f934d9f15cb5_Laurent-S.avif`,
    storySlug: 'verhaert',
  },
  {
    slug: 'staffbase',
    name: 'Peter Mallozzi', title: 'Outbound Sales', company: 'Staffbase',
    quote: 'hubsell is a company that is more than just a vendor, they could really partner with you and help you with your whole approach.',
    photo: `${AV}/69bbdc0f42e1ac55b26c3f40_671a1ab711962b4159489497_pm-staffbase.png`,
    storySlug: 'staffbase',
  },
  {
    slug: 'elium',
    name: 'Rachel Chan', title: 'Digital Marketing Team Lead', company: 'Elium',
    quote: 'I’d recommend hubsell as a partner if you’re looking to generate real results from outbound sales & marketing with a limited team.',
    photo: `${AV}/699dcee15832f934d9f15cc8_Rachel-C.avif`,
    storySlug: 'elium',
  },
  {
    slug: 'workspace365',
    name: 'Mark Grasmayer', title: 'Product Evangelist', company: 'Workspace 365',
    quote: 'I haven’t discovered a tool that comes near hubsell in its segmentation, reply detection and social networks and CRM integrations.',
    photo: `${AV}/699dcee15832f934d9f15cd4_Mark-G.avif`,
    storySlug: 'workspace365',
  },
  {
    slug: 'sensolus',
    name: 'Eylül Eygi', title: 'Head of Marketing', company: 'Sensolus',
    quote: 'hubsell helps us generate interactions with prospects from various industries, which is crucial to our expansion efforts.',
    photo: `${AV}/69bbdc0e2945d53ecbca3a4e_671b76cdf4cf5920219b55a7_ee-sensolus.png`,
    storySlug: 'sensolus',
  },
  {
    slug: 'matterway',
    name: 'Anthony Hsiao', title: 'CEO', company: 'Matterway',
    quote: 'We have tried several different tools and services, but only hubsell delivers both the functionality and the qualitative data to truly automate the lead generation process.',
    photo: `${AV}/anthony-hsiao.avif`,
  },
  {
    slug: 'spryker',
    name: 'Greg Greenberger', title: 'International Channel Manager', company: 'Spryker',
    quote: 'hubsell’s automation has enabled us to reach and convert more partners and clients than any other platform or channel I’ve ever used. Our company simply wouldn’t have scaled without it.',
    photo: `${AV}/greg-greenberger.avif`,
  },
  {
    slug: 'cibt',
    name: 'Lee Smith', title: 'VP Business Development', company: 'CIBT',
    quote: 'An excellent product for B2B selling. I have always found that the content the hubsell is able to locate is accurate and fit for purpose for my prospects. It’s easy to use, and it fast-tracks the research aspect of prospecting for my team.',
    photo: `${AV}/lee-smith.avif`,
  },
  {
    slug: 'alon-even',
    name: 'Alon Even', title: 'Fractional CMO',
    quote: 'Excellent 1:1 prospecting at scale across email, LinkedIn & phone. Excellent data that does not age. Really smart concept.',
    photo: `${AV}/alon-even.avif`,
  },
  {
    slug: 'meetyoo',
    name: 'Florian Teufel', title: 'Head of Marketing', company: 'Meetyoo',
    quote: 'I can recommend hubsell, to anybody that uses outbound in their b2b marketing mix. Great customer support, which is helpful and super fast!',
    photo: `${AV}/florian-teufel.avif`,
  },
  {
    slug: 'aspire',
    name: 'Cassie Craven', title: 'Marketing Executive', company: 'Aspire Software',
    quote: 'Great product, fantastic support. hubsell has greatly improved lead generation in our organization. A great product with support that really stands out, with the team always going above and beyond to resolve queries in a timely manner.',
    photo: `${AV}/cassie-craven.webp`,
  },
];

// Look up a set of testimonials by slug, in the order requested.
export const pickTestimonials = (slugs: string[] = []): Testimonial[] =>
  slugs.map((s) => TESTIMONIALS.find((t) => t.slug === s)).filter(Boolean) as Testimonial[];
