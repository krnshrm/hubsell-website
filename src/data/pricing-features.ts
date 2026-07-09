// Feature availability matrix for the /pricing comparison table. Source: the
// founder's Pricing_features_list sheet (2026-07-09), with these agreed edits:
// Human Chat Based Support restored (all tiers), "Like last post" and "Invite
// to attend LinkedIn event" added (tier mapping = placeholder, see flags in
// the delivery notes), the two coming-soon features moved into their own
// category, and "Event Attendantes" spelled "Event Attendees".
// Node and group labels are product terms and stay English in every locale;
// only the top-level category headers localize (pricing-page.ts `groups`).
// t = [Start, Grow, Scale]. A row with `children` is an expandable group.

export interface PricingFeatureRow {
  label: string;
  t?: [boolean, boolean, boolean];
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
        { label: 'Track a LinkedIn post', t: [n, y, y] },
        { label: 'Publish & track a LinkedIn post', t: [n, y, y] },
        { label: 'Sales Navigator Lead search', t: [n, y, y] },
        { label: 'LinkedIn Classic People search', t: [n, y, y] },
        { label: 'Contact fills a form', t: [n, y, y] },
        { label: 'Contact added to a list', t: [n, y, y] },
        { label: 'Contact matches filter', t: [n, y, y] },
        { label: 'Contact visits LinkedIn profile', t: [n, y, y] },
        { label: 'Contact replies to Outreach', t: [n, y, y] },
        { label: 'Webhook', t: [n, n, y] },
      ]},
      { label: 'Outreach nodes', children: [
        { label: 'Email', t: [y, y, y] },
        { label: 'Follow-up email', t: [y, y, y] },
        { label: 'LinkedIn Connection request', t: [y, y, y] },
        { label: 'LinkedIn Connection request withdrawal', t: [y, y, y] },
        { label: 'LinkedIn Profile visit', t: [y, y, y] },
        { label: 'LinkedIn Direct Message', t: [y, y, y] },
        { label: 'LinkedIn Inmail', t: [y, y, y] },
        { label: 'Like last post', t: [y, y, y] },
        { label: 'Tasks', t: [y, y, y] },
        { label: 'Invite to follow Company page', t: [n, y, y] },
        { label: 'Invite to attend LinkedIn event', t: [n, y, y] },
      ]},
      { label: 'AI Node Types', children: [
        { label: 'Prompt AI', t: [y, y, y] },
        { label: 'Qualify with AI', t: [n, y, y] },
        { label: 'Enrich with AI', t: [n, y, y] },
      ]},
      { label: 'Data Node Types', children: [
        { label: 'Check Email Address', t: [y, y, y] },
        { label: 'Check LinkedIn URL', t: [y, y, y] },
        { label: 'Enrich Contact Data', t: [n, y, y] },
        { label: 'Update contact field', t: [n, y, y] },
        { label: 'Sync to CRM', t: [n, y, y] },
      ]},
      { label: 'Flow Control Nodes', children: [
        { label: 'Follow-up Conditions', t: [y, y, y] },
        { label: 'Split Branches', t: [y, y, y] },
        { label: 'Move Contact to Flow', t: [n, y, y] },
      ]},
      { label: 'Custom Node Types', t: [n, n, y] },
    ],
  },
  {
    key: 'crmsync',
    children: [
      { label: 'CRM Sync Contacts & Accounts', t: [y, y, y] },
      { label: 'CRM Sync Tasks & Activities', t: [n, y, y] },
      { label: 'Custom CRM Sync', t: [n, n, y] },
    ],
  },
  {
    key: 'datasrc',
    children: [
      { label: 'Social Prospecting', children: [
        { label: 'Prospects from a Sales Navigator Lead search', t: [y, y, y] },
        { label: 'Prospects that react to a LinkedIn post', t: [y, y, y] },
        { label: 'Prospects that attended a LinkedIn event', t: [y, y, y] },
        { label: 'Prospects that follow a thought leader', t: [y, y, y] },
        { label: 'Prospects that changed job recently', t: [y, y, y] },
        { label: 'Prospects that follow a company page', t: [n, y, y] },
        { label: 'Prospects hiring for certain roles', t: [n, y, y] },
      ]},
      { label: 'Data processing', children: [
        { label: 'Email Validation (incl. on Catch-All domains)', t: [y, y, y] },
        { label: 'Phone Number Sourcing', t: [n, y, y] },
        { label: 'Custom Data Sourcing', t: [n, n, y] },
      ]},
      { label: 'Enrichment and targeting', children: [
        { label: 'Event Attendees', t: [n, y, y] },
        { label: 'Named Accounts', t: [n, y, y] },
        { label: 'CRM Enrichment', t: [n, y, y] },
      ]},
    ],
  },
  {
    key: 'support',
    children: [
      { label: 'Human Chat Based Support', t: [y, y, y] },
      { label: 'Full Onboarding', t: [n, y, y] },
      { label: 'Quarterly update call', t: [n, y, y] },
      { label: 'Dedicated CSM', t: [n, n, y] },
    ],
  },
  {
    key: 'comingsoon',
    children: [
      { label: 'Publish to LinkedIn', t: [n, y, y] },
      { label: 'Unified Inbox', t: [n, y, y] },
    ],
  },
];
