// FAQs that are not on the homepage, by slug: Spanish (Spain), "tú". Created as a copy of the English text; every string
// here is to be translated. Same shape as the English source, which stays the
// reference. Product terms: docs/20261113-1401-APP-TERMS.md.
export const faqsEsExtra: Record<string, { question: string; answer: string }> = {
  "orchestrate-multiple-profiles": {
    question: "Can hubsell orchestrate across multiple executive profiles simultaneously?",
    answer: "<p>hubsell allows you to manage outreach from your CEO, VP of Sales, and Subject Matter Experts from a single, unified command centre, enabling coordinated, peer-to-peer engagement across the entire target account.</p>",
  },
  "hubsell-email-infrastructure": {
    question: "Does hubsell send emails from external servers or through our own mailboxes?",
    answer: "<p>hubsell's infrastructure is \"entirely not present\" in the sent email. We do not use external SMTP servers or spam-triggering redirect links for tracking. Emails are sent via direct API integration (Google/Microsoft), resulting in significantly higher open rates.</p>",
  },
  "personalize-outreach-at-scale": {
    question: "How can we personalise cold outreach at scale without sounding like an AI robot?",
    answer: "<p>Buyers spot AI-written flattery instantly, and it costs you replies. A simple, direct message sent to a highly relevant list, say attendees of a specific webinar or people engaging with a specific post, consistently beats machine-personalised copy sent to a generic persona. hubsell builds the relevance in at the data stage: live-sourced contacts matched to your ICP, so the message can stay short and honest.</p>",
  },
  "stop-sales-email-bounces": {
    question: "How do we stop our sales emails from bouncing due to bad CRM data?",
    answer: "<p>The average tenure of a B2B decision-maker is roughly 2.5 years, meaning static CRMs and purchased lists decay by 25 to 30% annually. hubsell solves this with zero-day sourcing, our live-data method: we source and verify contact data at the exact moment of your request, which keeps accuracy high and protects your sender reputation.</p>",
  },
  "hubsell-high-volume-sales": {
    question: "Is hubsell suitable for high-volume, low-ACV transactional sales?",
    answer: "<p>Yes. While hubsell can be used for high-volume outreach, we recommend to use hubsell for highly targeted outreach.</p>",
  },
  "mass-email-brand-reputation": {
    question: "Is mass cold emailing actively damaging our brand reputation and deliverability?",
    answer: "<p>Google and Yahoo’s latest rules mean high-volume spray and pray tactics will quickly ruin your domain’s sender reputation. hubsell protects it with precise targeting, native API sending through Google and Microsoft, and by spreading outreach safely across 5 to 10 internal sender profiles. Lower volume per sender, higher deliverability, no domain burn.</p>",
  },
  "third-party-intent-data-accuracy": {
    question: "Is third-party B2B intent data actually accurate?",
    answer: "<p>Most intent data relies on probabilistic algorithms (guessing who is buying based on anonymous web traffic). Because 95% of B2B buyers are out-of-market at any given time, applying a generic algorithm to a non-buying market results in your sales team chasing ghosts.</p>",
  },
  "sdr-vs-executive-linkedin-outreach": {
    question: "Should our SDRs or our Executives be sending LinkedIn outreach?",
    answer: "<p>Who sends the message changes the result. When an SDR sends a connection request, acceptance rates typically sit below 20% because buyers anticipate a pitch. When a founder, executive, or subject matter expert sends the exact same request, acceptance rates jump above 50%. hubsell is built to run outreach from the profiles buyers actually accept.</p>",
  },
  "cold-email-reply-rates-dropping": {
    question: "Why are our cold email reply rates suddenly dropping so low?",
    answer: "<p>Traditional \"spray and pray\" outreach is failing for two structural reasons. First, strict new spam thresholds (0.3% complaint rates) from Google and Yahoo mean high-volume email blasts are actively damaging your domain reputation. Second, buyers instantly recognise automated AI personalisation. It looks personal but feels hollow, triggering a mental firewall.</p>",
  },
  "sdr-first-meetings-week-one": {
    question: "Can a new SDR really book meetings in week one?",
    answer: "<p>Yes, when three things hold: the offer fits the market you go after, the targeting is right (the right titles at the right organisations), and execution does not stall (targeting agreed and copy approved in the first days). hubsell removes the usual ramp blockers, list building, tool setup, and data cleaning, so the first week can go to outreach instead of admin.</p>",
  },
  "hubsell-setup-before-first-sdr": {
    question: "We’re hiring our first SDR. When should we set hubsell up?",
    answer: "<p>Before day one, so week one is spent selling instead of tooling. Targeting and the first flow can be ready when the SDR walks in, and because contacts are sourced live, nothing goes stale while you hire.</p>",
  },
};
