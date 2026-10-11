// Sample data for the homepage flow demo.
//
// The demo mirrors the product loop as the founder describes it: source, add to
// flow, outreach, sync, repeat. It shows ONLY what the product does today. Left
// out on purpose, because they do not exist yet: AI-written messages, inbound
// LinkedIn triggers (profile visits, post reactions), routers and splits, and
// funding signals. The one branch shown is the follow-up condition node. Showing a feature the product lacks is the fastest way to lose
// a buyer on the demo call.
//
// The three sources and the URL rules match the add-data step in the app
// (components/data/add-data/enterUrl.tsx): a LinkedIn post, a LinkedIn people
// search, or a Sales Navigator people search.
//
// Counts are DERIVED in the component from the source and the rates below, so
// switching source or turning phone on changes the whole run. Rates are
// illustrative and the panel says so.

export type SourceId = 'post' | 'search' | 'salesnav';

export type Source = {
  id: SourceId;
  tab: string;
  sample: string;      // a sample link of the right shape, never a real person
  found: number;
  detail: string;      // what the source node says it found
  who: string;         // used in the summary sentence
  warmth: number;      // people who engaged with a post on the topic reply more
};

export const SOURCES: Source[] = [
  {
    id: 'post',
    tab: 'LinkedIn post',
    sample: 'https://www.linkedin.com/posts/sample-author_outbound-is-broken-activity-7381024',
    found: 214,
    detail: '132 reacted, 61 commented, 21 reposted',
    who: 'who engaged with one LinkedIn post',
    warmth: 1.25,
  },
  {
    id: 'search',
    tab: 'LinkedIn search',
    sample: 'https://www.linkedin.com/search/results/people/?keywords=head%20of%20sales&geo=DE,NL',
    found: 480,
    detail: 'Heads of Sales in Germany and the Netherlands',
    who: 'from one LinkedIn people search',
    warmth: 1.0,
  },
  {
    id: 'salesnav',
    tab: 'Sales Navigator',
    sample: 'https://www.linkedin.com/sales/search/people?query=hiring-sdr&region=DACH',
    found: 312,
    detail: 'Sales leaders at companies hiring SDRs',
    who: 'from one Sales Navigator search of teams hiring SDRs',
    warmth: 1.1,
  },
];

// The same rule the app uses to accept a link.
export const URL_RULE = ['linkedin.com/posts', 'search/results/people', 'sales/search/people'];

// The flow branches after the connection request. Accepted within 7 days: a
// LinkedIn message. Not accepted: the invite is withdrawn, which keeps the
// sender's pending-invite count down, and the person moves on to email. Both
// tracks meet at one email step for everyone who has not replied yet.
export const RATES = {
  email: 0.92,        // verified email found
  phone: 0.64,        // phone found, when enrichment includes it
  accept: 0.33,       // connection requests accepted within 7 days, times warmth
  msgReply: 0.17,     // reply to the LinkedIn message, times warmth
  open: 0.56,         // email opened
  emailReply: 0.045,  // reply to the email, times warmth
  meeting: 0.32,      // replies that turn into a booked meeting
  bulkFactor: 50,     // the homepage's own claim: 50 times the contacts for the same meetings
};
