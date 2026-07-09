// Feature availability matrix for the /pricing comparison table. Source: the
// founder's Pricing_features_list sheet (2026-07-09) plus the 2026-07-09 update
// round: sentence case throughout (only the first word and names capitalized),
// "AI nodes" and "Data nodes" renamed, and `soon: true` on every node the
// founder marked as coming soon. Ticks show the tier the node lands in.
// Node and group labels are product terms and stay English in every locale;
// only the top-level category headers localize (pricing-page.ts `groups`).
// t = [Start, Grow, Scale]. A row with `children` is a group with a static
// sub-header; all rows render expanded (no collapse).

export interface PricingFeatureRow {
  label: string;
  t?: [boolean, boolean, boolean];
  soon?: boolean;
  children?: PricingFeatureRow[];
}
export type PricingCategoryKey = 'workflow' | 'crmsync' | 'datasrc' | 'support' | 'comingsoon';
export interface PricingFeatureCategory { key: PricingCategoryKey; children: PricingFeatureRow[] }

const y = true, n = false;

export const PRICING_FEATURES: PricingFeatureCategory[] = [
  {
    key: 'workflow',
    children: [
      { label: 'Triggers', children: [
        { label: 'Contact added to the flow', t: [y, y, y] },
        { label: 'Track a LinkedIn post', t: [n, y, y], soon: true },
        { label: 'Publish & track a LinkedIn post', t: [n, y, y], soon: true },
        { label: 'Sales Navigator lead search', t: [n, y, y], soon: true },
        { label: 'LinkedIn classic people search', t: [n, y, y], soon: true },
        { label: 'Contact fills a form', t: [n, y, y], soon: true },
        { label: 'Contact added to a list', t: [n, y, y], soon: true },
        { label: 'Contact matches filter', t: [n, y, y], soon: true },
        { label: 'Contact visits LinkedIn profile', t: [n, y, y], soon: true },
        { label: 'Contact replies to outreach', t: [n, y, y], soon: true },
        { label: 'Webhook', t: [n, n, y], soon: true },
      ]},
      { label: 'Outreach nodes', children: [
        { label: 'Email', t: [y, y, y] },
        { label: 'Follow-up email', t: [y, y, y] },
        { label: 'LinkedIn connection request', t: [y, y, y] },
        { label: 'LinkedIn connection request withdrawal', t: [y, y, y] },
        { label: 'LinkedIn profile visit', t: [y, y, y] },
        { label: 'LinkedIn direct message', t: [y, y, y] },
        { label: 'LinkedIn InMail', t: [y, y, y] },
        { label: 'Like last post', t: [y, y, y], soon: true },
        { label: 'Tasks', t: [y, y, y] },
        { label: 'Invite to follow company page', t: [n, y, y], soon: true },
        { label: 'Invite to attend LinkedIn event', t: [n, y, y], soon: true },
      ]},
      { label: 'AI nodes', children: [
        { label: 'Prompt AI', t: [y, y, y], soon: true },
        { label: 'Qualify with AI', t: [n, y, y], soon: true },
        { label: 'Enrich with AI', t: [n, y, y], soon: true },
      ]},
      { label: 'Data nodes', children: [
        { label: 'Check email address', t: [y, y, y], soon: true },
        { label: 'Check LinkedIn URL', t: [y, y, y], soon: true },
        { label: 'Enrich contact data', t: [n, y, y], soon: true },
        { label: 'Update contact field', t: [n, y, y], soon: true },
        { label: 'Sync to CRM', t: [n, y, y], soon: true },
      ]},
      { label: 'Flow control nodes', children: [
        { label: 'Follow-up conditions', t: [y, y, y] },
        { label: 'Split branches', t: [y, y, y], soon: true },
        { label: 'Move contact to flow', t: [n, y, y] },
      ]},
      { label: 'Custom node types', t: [n, n, y] },
    ],
  },
  {
    key: 'crmsync',
    children: [
      { label: 'CRM sync contacts & accounts', t: [y, y, y] },
      { label: 'CRM sync tasks & activities', t: [n, y, y] },
      { label: 'Custom CRM sync', t: [n, n, y] },
    ],
  },
  {
    key: 'datasrc',
    children: [
      { label: 'Social prospecting', children: [
        { label: 'Prospects from a Sales Navigator lead search', t: [y, y, y] },
        { label: 'Prospects that react to a LinkedIn post', t: [y, y, y] },
        { label: 'Prospects that attended a LinkedIn event', t: [y, y, y] },
        { label: 'Prospects that follow a thought leader', t: [y, y, y] },
        { label: 'Prospects that changed job recently', t: [y, y, y] },
        { label: 'Prospects that follow a company page', t: [n, y, y] },
        { label: 'Prospects hiring for certain roles', t: [n, y, y] },
      ]},
      { label: 'Data processing', children: [
        { label: 'Email validation (incl. on catch-all domains)', t: [y, y, y] },
        { label: 'Phone number sourcing', t: [n, y, y] },
        { label: 'Custom data sourcing', t: [n, n, y] },
      ]},
      { label: 'Enrichment and targeting', children: [
        { label: 'Event attendees', t: [n, y, y] },
        { label: 'Named accounts', t: [n, y, y] },
        { label: 'CRM enrichment', t: [n, y, y] },
      ]},
    ],
  },
  {
    key: 'support',
    children: [
      { label: 'Human chat based support', t: [y, y, y] },
      { label: 'Full onboarding', t: [n, y, y] },
      { label: 'Quarterly update call', t: [n, y, y] },
      { label: 'Dedicated CSM', t: [n, n, y] },
    ],
  },
  {
    key: 'comingsoon',
    children: [
      { label: 'Publish to LinkedIn', t: [n, y, y] },
      { label: 'Unified inbox', t: [n, y, y] },
    ],
  },
];
