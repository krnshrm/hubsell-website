// Sample data for the homepage flow demo.
//
// The demo mirrors the product loop as the founder describes it: source, add to
// flow, outreach, sync, repeat. Left out on purpose, because they do not exist
// yet or are not what we sell: AI-written messages, inbound LinkedIn triggers,
// routers and splits, and funding signals. The branches shown are the follow-up
// condition node. Calls are always a task created in the CRM, never a dialer.
//
// Everything runs on sample data. Nothing is sourced live, so each source only
// needs an input of the right shape for the visitor to see.
//
// Counts are DERIVED in the component from the source and the rates below, so
// switching source or turning phone on changes the whole run. Rates are
// illustrative and the panel says so.

export type SourceId = 'post' | 'event' | 'hiring' | 'search' | 'salesnav' | 'csv';

export type Source = {
  id: SourceId;
  tab: string;
  flow: 'li' | 'csv';            // which flow the source feeds
  input: 'url' | 'text' | 'file';
  label: string;                 // accessible label for the input
  sample: string;                // a sample value of the right shape, never a real person
  found: number;
  detail: string;                // what the source node says it found
  who: string;                   // used in the summary sentence
  warmth: number;                // people who engaged on the topic reply more
};

export const SOURCES: Source[] = [
  { id: 'post', tab: 'LinkedIn post', flow: 'li', input: 'url', label: 'LinkedIn post link',
    sample: 'https://www.linkedin.com/posts/sample-author_outbound-is-broken-activity-7381024',
    found: 214, detail: 'Reactions, comments and reposts',
    who: 'who engaged with one LinkedIn post', warmth: 1.25 },
  { id: 'event', tab: 'Event participants', flow: 'li', input: 'url', label: 'LinkedIn event link',
    sample: 'https://www.linkedin.com/events/sample-revops-meetup-7380112',
    found: 386, detail: '386 people signed up for the event',
    who: 'who signed up for one LinkedIn event', warmth: 1.15 },
  { id: 'hiring', tab: 'Hiring for roles', flow: 'li', input: 'text', label: 'Roles the company is hiring for',
    sample: 'SDR, Account Executive',
    found: 268, detail: 'Sales leaders at 41 hiring companies',
    who: 'at companies hiring SDRs or Account Executives', warmth: 1.1 },
  { id: 'search', tab: 'People search', flow: 'li', input: 'url', label: 'LinkedIn people search link',
    sample: 'https://www.linkedin.com/search/results/people/?keywords=head%20of%20sales&geo=DE,NL',
    found: 480, detail: 'Heads of Sales in Germany and the Netherlands',
    who: 'from one LinkedIn people search', warmth: 1.0 },
  { id: 'salesnav', tab: 'Sales Navigator', flow: 'li', input: 'url', label: 'Sales Navigator lead search link',
    sample: 'https://www.linkedin.com/sales/search/people?query=head-of-sales&region=DACH',
    found: 312, detail: 'Sales leaders in DACH, 51 to 500 staff',
    who: 'from one Sales Navigator lead search', warmth: 1.05 },
  { id: 'csv', tab: 'Import CSV', flow: 'csv', input: 'file', label: 'CSV file',
    sample: 'sample-leads.csv',
    found: 500, detail: 'sample-leads.csv, 500 rows',
    who: 'from one imported CSV', warmth: 0.9 },
];

export const RATES = {
  qualify: 0.72,      // AI qualification: share that fits the ideal customer
  email: 0.92,        // verified email found during enrichment
  phone: 0.64,        // phone found, when enrichment includes it
  accept: 0.33,       // connection requests accepted within 7 days, times warmth
  msgReply: 0.17,     // reply to the LinkedIn message, times warmth
  open: 0.56,         // email opened
  emailReply: 0.045,  // reply to an email, times warmth
  meeting: 0.32,      // replies that turn into a booked meeting
  callMeeting: 0.05,  // call tasks that turn into a booked meeting
  bulkFactor: 50,     // the homepage's own claim: 50 times the contacts for the same meetings
  // CSV only
  csvEmail: 0.66,     // rows that arrive with a valid email
  csvProfile: 0.58,   // rows that arrive with a valid LinkedIn URL
  findEmail: 0.62,    // missing emails found by enrichment
  findProfile: 0.7,   // missing LinkedIn URLs found by enrichment
  csvPhone: 0.55,     // phones found across all rows, when enrichment includes it
};
