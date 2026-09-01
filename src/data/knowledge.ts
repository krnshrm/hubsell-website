// LEARNING NOTES: knowledge center categories
// -------------------------------------------
// One list, used in four places: the hub's category cards, the sidebar, the
// category landing pages (/knowledge/category/<slug>), and the article
// breadcrumb. Keeping it here means a rename or a new category is a one-line
// edit rather than a hunt across templates.
//
// `name` MUST match the `category` value in an article's frontmatter exactly:
// that string is how articles are grouped. `slug` is the URL segment.
// Order in this array is the display order everywhere.

export interface KnowledgeCategory {
  slug: string;
  name: string;
  description: string;
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  {
    slug: 'getting-started',
    name: 'Getting started',
    description: 'Set up your account, connect your channels, and launch your first flow.',
  },
  {
    slug: 'data',
    name: 'Data',
    description: 'How hubsell sources, enriches, and delivers contact data.',
  },
  {
    slug: 'flows',
    name: 'Flows',
    description: 'Build and run multichannel outreach flows.',
  },
  {
    slug: 'integrations',
    name: 'Integrations',
    description: 'Connect hubsell to your mailbox, LinkedIn, and CRM.',
  },
  {
    slug: 'deliverability',
    name: 'Deliverability',
    description: 'Keep your sending healthy and land in the inbox.',
  },
  {
    slug: 'account-and-billing',
    name: 'Account and billing',
    description: 'Plans, credits, users, and invoices.',
  },
];

/** Category record for a frontmatter category name, or undefined if unknown. */
export const categoryByName = (name: string): KnowledgeCategory | undefined =>
  KNOWLEDGE_CATEGORIES.find((c) => c.name === name);

/** URL for a category name. Falls back to the hub if the name is not in the list. */
export const categoryHref = (name: string): string => {
  const c = categoryByName(name);
  return c ? `/knowledge/category/${c.slug}` : '/knowledge';
};

/** Sort rank for a category name. Unknown names sort last. */
export const categoryRank = (name: string): number => {
  const i = KNOWLEDGE_CATEGORIES.findIndex((c) => c.name === name);
  return i === -1 ? KNOWLEDGE_CATEGORIES.length : i;
};

/**
 * Articles that appear in the hub's "Popular" row, by slug and in order.
 * Slugs that do not exist are skipped, so this is safe to edit ahead of time.
 */
export const POPULAR_ARTICLES: string[] = [
  'set-up-your-personal-and-company-account',
  'connect-your-mailbox-and-linkedin',
  'sourcing-data-into-hubsell',
  'create-a-flow',
  'adding-contacts-to-a-flow',
  'update-contact-status',
];
