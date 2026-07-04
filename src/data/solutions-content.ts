// English copy for the /solutions pages: one hub plus eight leaf pages, split
// across two axes (team, role). German lives in solutions.de.ts, Dutch in
// solutions.nl.ts; getSolutions() in solutions-i18n.ts picks per locale.
// Framing is jobs-to-be-done: each page names the jobs an audience needs done,
// then links out to the platform and use-case pages instead of repeating them.

export interface SolutionHow {
  title: string;
  body: string;
  href: string;       // English-root path to a platform or use-case page
  linkLabel: string;
}

export interface SolutionClosing { titlePre: string; titleAccent: string; titlePost: string; sub: string }

export interface SolutionCard {
  eyebrow: string;    // the audience name, e.g. "Sales teams"
  title: string;      // the one-line promise
  body: string;
  href: string;
  linkLabel: string;
}

export interface SolutionDetailData {
  path: string;                 // English-root path, e.g. '/solutions/team/sales-teams'
  axis: 'team' | 'role';
  title: string;                // <title> (contains "hubsell", so no suffix is appended)
  metaDescription: string;
  eyebrow: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  sub: string;
  demoCta: string;
  jobsEyebrow: string; jobsTitle: string;
  jobs: string[];               // 3 to 4 concrete jobs to be done
  howEyebrow: string; howTitle: string;
  how: SolutionHow[];           // 3 blocks, each linking out
  proofEyebrow: string; proofTitle: string;
  quoteSlug: string;            // testimonial slug in the shared pool
  storySlug?: string;           // customer story slug (omitted = testimonial only)
  storyLabel?: string;
  faqEyebrow: string; faqTitle: string; faqSlugs: string[];
  closing: SolutionClosing;
  closingCta: string;
}

export interface SolutionHubData {
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1Pre: string; h1Accent: string; h1Post: string;
  sub: string;
  demoCta: string;
  teamEyebrow: string; teamTitle: string;
  team: SolutionCard[];
  roleEyebrow: string; roleTitle: string;
  role: SolutionCard[];
  closing: SolutionClosing;
  closingCta: string;
}

export interface SolutionsData { hub: SolutionHubData; details: SolutionDetailData[] }

export const solutions: SolutionsData = {
  hub: {
    title: 'Solutions for every sales team and role | hubsell',
    metaDescription: 'Whether you run a sales team, an agency, or your own outbound, hubsell fits the job you need done. Find your setup.',
    eyebrow: 'Solutions',
    h1Pre: 'Built around the ', h1Accent: 'job you need done', h1Post: '',
    sub: 'hubsell is one platform, but the job looks different depending on who you are. Pick your team or your role and see how it works for you.',
    demoCta: 'Book a demo',
    teamEyebrow: 'By team',
    teamTitle: 'Find your team',
    team: [
      { eyebrow: 'Sales teams', title: 'One platform your whole team can run', body: 'Live data, multichannel outreach, and automatic CRM sync in one place, so reps sell instead of switching tabs.', href: '/solutions/team/sales-teams', linkLabel: 'For sales teams' },
      { eyebrow: 'Agencies', title: 'Run outbound for every client', body: 'Fresh data, safe sending, and reporting you can show, without a separate stack per account.', href: '/solutions/team/agencies', linkLabel: 'For agencies' },
      { eyebrow: 'RevOps', title: 'One connected revenue engine', body: 'Sourcing, outreach, and CRM sync on one data set, with reporting the leadership team can trust.', href: '/solutions/team/revops', linkLabel: 'For RevOps' },
      { eyebrow: 'Founders', title: 'Founder-led outbound, without the stack', body: 'The data, outreach, and sync a full team would use, run from your own profile.', href: '/solutions/team/founders', linkLabel: 'For founders' },
    ],
    roleEyebrow: 'By role',
    roleTitle: 'Find your role',
    role: [
      { eyebrow: 'SDRs', title: 'More conversations, less list building', body: 'Fresh data, multichannel sequences, and automatic logging, so your day goes to selling.', href: '/solutions/role/sdr', linkLabel: 'For SDRs' },
      { eyebrow: 'Sales leaders', title: 'A pipeline number you can stand behind', body: 'One platform for the team and reporting that reflects reality, not hand-typed guesses.', href: '/solutions/role/sales-leader', linkLabel: 'For sales leaders' },
      { eyebrow: 'Marketing', title: 'An audience that compounds', body: 'Live data and a first-degree LinkedIn audience that travels with your team as people move.', href: '/solutions/role/marketing', linkLabel: 'For marketing' },
      { eyebrow: 'Sales operations', title: 'Clean data, without the manual work', body: 'Verified data and automatic activity logging, so the CRM stays accurate on its own.', href: '/solutions/role/sales-operations', linkLabel: 'For sales operations' },
    ],
    closing: {
      titlePre: 'See it for ', titleAccent: 'your setup', titlePost: '.',
      sub: 'Book a demo and we will show you hubsell for your team and your role.',
    },
    closingCta: 'Book a demo',
  },

  details: [
    // ---------------------------------------------------------------- TEAM ----
    {
      path: '/solutions/team/sales-teams', axis: 'team',
      title: 'hubsell for sales teams: one outbound platform | hubsell',
      metaDescription: 'Give your sales team live data, multichannel outreach, and automatic CRM sync in one place. Less tab switching, more selling.',
      eyebrow: 'For sales teams',
      h1Pre: 'One platform your whole ', h1Accent: 'sales team', h1Post: ' can run',
      sub: 'Your reps should spend their time selling, not moving data between a prospecting tool, an email tool, and the CRM. hubsell brings the whole outbound motion into one place.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Fill the pipeline without buying six separate tools.',
        'Keep every rep\u2019s outreach on brand and on deliverability.',
        'See real pipeline numbers, not what got typed in by hand.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'Live data, matched to your ICP', body: 'Contacts sourced the day you ask and verified at the point of use, so reps work a fresh list instead of a stale one.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'Every channel in one sequence', body: 'Email, LinkedIn, and phone run as one coordinated flow that reacts to what each contact does.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'Logged to the CRM automatically', body: 'Every send, open, and reply lands in Salesforce, HubSpot, or Pipedrive on its own, so reporting stays honest.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'A team that made the switch',
      quoteSlug: 'staffbase', storySlug: 'workspace365', storyLabel: 'Read the Workspace 365 story',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['hubsell-replace-outbound-stack', 'hubsell-crm-integration', 'mass-email-brand-reputation'],
      closing: { titlePre: 'Give your team ', titleAccent: 'one platform', titlePost: '.', sub: 'Book a demo and we will show you hubsell running the whole outbound motion for your team.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/team/agencies', axis: 'team',
      title: 'hubsell for agencies: run outbound for every client | hubsell',
      metaDescription: 'Run live-sourced, multichannel outbound for each client from one platform, with clean separation and reporting you can show.',
      eyebrow: 'For agencies',
      h1Pre: 'Run outbound for ', h1Accent: 'every client', h1Post: ' from one place',
      sub: 'When you sell outbound as a service, you need fresh data, safe sending, and results you can put in front of a client. hubsell gives you all three without a stack per account.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Source fresh, correct data for each client\u2019s ICP.',
        'Run many clients\u2019 campaigns without burning any domain.',
        'Show clients results they can trust.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'Zero-day sourcing, per client', body: 'A fresh, verified list built for each client\u2019s ICP at the moment you need it, not pulled from a shared database.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'Safe sending, per client', body: 'Outreach spread across sender profiles within strict limits, so no client\u2019s domain gets burned.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'Reporting you can hand over', body: 'Clear activity and pipeline data per client, logged automatically, ready to show at the next review.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'Client work, done at scale',
      quoteSlug: 'verhaert', storySlug: 'verhaert', storyLabel: 'Read the Verhaert story',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['stop-sales-email-bounces', 'mass-email-brand-reputation', 'hubsell-email-infrastructure'],
      closing: { titlePre: 'Run every client ', titleAccent: 'from one platform', titlePost: '.', sub: 'Book a demo and we will show you how agencies run client outbound in hubsell.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/team/revops', axis: 'team',
      title: 'hubsell for RevOps: one connected revenue engine | hubsell',
      metaDescription: 'Give RevOps one system across sourcing, outreach, and CRM, with clean handoffs and reporting the leadership team can trust.',
      eyebrow: 'For RevOps',
      h1Pre: 'One connected engine, not a ', h1Accent: 'stack to reconcile', h1Post: '',
      sub: 'You own the numbers. That is hard when data lives in six tools that do not talk. hubsell runs sourcing, outreach, and CRM sync on one data set, so the pipeline reflects reality.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Cut the fragmented stack down to one system.',
        'Keep data clean from source to CRM.',
        'Report pipeline the leadership team can trust.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'One platform, not six', body: 'hubsell replaces the data, enrichment, sequencer, deliverability, dialer, and CRM sync tools with one system on one data set.', href: '/platform', linkLabel: 'See the platform' },
        { title: 'Verified data in, no rot between tools', body: 'Data is sourced and checked at the point of use, so records do not decay in a handover between products.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'Real-time two-way CRM sync', body: 'Every activity logs to Salesforce, HubSpot, or Pipedrive automatically, with no middleware to maintain.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'Hours back, numbers you trust',
      quoteSlug: 'spryker', storySlug: 'elium', storyLabel: 'Read the Elium story',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['hubsell-crm-integration', 'hubsell-replace-outbound-stack', 'stop-sales-email-bounces'],
      closing: { titlePre: 'Connect your ', titleAccent: 'revenue engine', titlePost: '.', sub: 'Book a demo and we will map your current stack onto one system.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/team/founders', axis: 'team',
      title: 'hubsell for founders: outbound that runs itself | hubsell',
      metaDescription: 'Founder-led outbound without a full sales stack. Live data, email and LinkedIn from your own profile, and CRM sync that keeps itself current.',
      eyebrow: 'For founders',
      h1Pre: 'Founder-led outbound, ', h1Accent: 'without the stack', h1Post: '',
      sub: 'Early on, you are the salesperson. hubsell gives you the data, the outreach, and the sync a full team would use, run from your own profile, so you can sell without hiring an ops function first.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Get in front of the right accounts without a data team.',
        'Run outreach from the profile buyers actually accept, yours.',
        'Keep track of it all without living in a CRM.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'The right accounts, no data team', body: 'Live data matched to your ICP, sourced the day you ask, so there is no static list to buy or maintain.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'Sent from your own profile', body: 'Founder-sent requests land above 50% acceptance, versus below 20% for an SDR. hubsell runs outreach from the profile that gets accepted.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'Nothing falls through', body: 'Automatic CRM sync keeps every conversation logged, so you can sell without living in a spreadsheet.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'Founder-led, and it worked',
      quoteSlug: 'safran', storySlug: 'safran', storyLabel: 'Read the Safran story',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['sdr-vs-executive-linkedin-outreach', 'build-b2b-audience-no-decay', 'hubsell-replace-outbound-stack'],
      closing: { titlePre: 'Sell like you have ', titleAccent: 'a team', titlePost: '.', sub: 'Book a demo and we will show you founder-led outbound running in hubsell.' },
      closingCta: 'Book a demo',
    },

    // ---------------------------------------------------------------- ROLE ----
    {
      path: '/solutions/role/sdr', axis: 'role',
      title: 'hubsell for SDRs: hit quota without the busywork | hubsell',
      metaDescription: 'Give SDRs fresh data, multichannel sequences, and automatic CRM logging so they spend their day selling, not building lists.',
      eyebrow: 'For SDRs',
      h1Pre: 'More conversations, ', h1Accent: 'less list building', h1Post: '',
      sub: 'An SDR\u2019s day gets eaten by finding contacts, checking emails, and updating the CRM. hubsell does that part, so you can spend your hours on the conversations that hit quota.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Get a list of the right people without hours of research.',
        'Reach them across email, LinkedIn, and phone in one flow.',
        'Stop logging activity by hand.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'A ready list, not hours of research', body: 'Live-sourced contacts matched to your ICP and verified, so you start the day with people worth calling.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'One flow across every channel', body: 'Email, LinkedIn, and phone in a single sequence with branching, so you follow up in the right place at the right time.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'No more manual logging', body: 'Every send, open, and reply lands in the CRM by itself, so you are not updating records at the end of the day.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'What reps say',
      quoteSlug: 'aspire',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['personalize-outreach-at-scale', 'sdr-vs-executive-linkedin-outreach', 'stop-sales-email-bounces'],
      closing: { titlePre: 'Spend your day ', titleAccent: 'selling', titlePost: '.', sub: 'Book a demo and we will show you an SDR\u2019s day in hubsell.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/role/sales-leader', axis: 'role',
      title: 'hubsell for sales leaders: a pipeline you can trust | hubsell',
      metaDescription: 'Give your team one outbound platform and get pipeline reporting that reflects reality, not what got typed in by hand.',
      eyebrow: 'For sales leaders',
      h1Pre: 'A pipeline number you can ', h1Accent: 'stand behind', h1Post: '',
      sub: 'You are asked to forecast off data your reps enter by hand between tabs. hubsell runs the whole outbound motion on one platform, so the pipeline you report is the pipeline you actually have.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Give the team one system instead of a stack to manage.',
        'Protect the domain and the brand as volume grows.',
        'Forecast off numbers that reflect reality.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'One system, one invoice', body: 'hubsell replaces the data, outreach, and sync tools with one platform, so the team stops stitching products together.', href: '/platform', linkLabel: 'See the platform' },
        { title: 'Deliverability protected at scale', body: 'Safe sending and precise targeting keep the domain healthy as volume grows, so growth does not cost you the brand.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'Reporting that stays truthful', body: 'Automatic logging means the pipeline reflects what happened, not what a rep remembered to enter.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'Pipeline and cost, moved',
      quoteSlug: 'cibt', storySlug: 'sensolus', storyLabel: 'Read the Sensolus story',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['hubsell-replace-outbound-stack', 'mass-email-brand-reputation', 'hubsell-crm-integration'],
      closing: { titlePre: 'Give your team ', titleAccent: 'one platform', titlePost: '.', sub: 'Book a demo and we will show you the reporting a sales leader gets from hubsell.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/role/marketing', axis: 'role',
      title: 'hubsell for marketing: build an audience that lasts | hubsell',
      metaDescription: 'Reach the right people with live data and coordinated outreach, and build a first-degree LinkedIn audience that does not decay.',
      eyebrow: 'For marketing',
      h1Pre: 'An audience that compounds, not ', h1Accent: 'one that decays', h1Post: '',
      sub: 'Bought lists rot from the day you get them. hubsell sources live data matched to your ICP and helps you build a first-degree LinkedIn audience that travels with your team, even when people change jobs.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Reach the right accounts with data that is correct today.',
        'Run outreach that does not read as machine written.',
        'Build an audience you keep, not one you rent.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'Data that is correct today', body: 'Zero-day sourcing, matched to your ICP and verified at the point of use, so campaigns reach real people.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'Outreach from real profiles', body: 'Coordinated email and LinkedIn sent from real people, so the message reads as human, not machine written.', href: '/platform/multichannel-outreach', linkLabel: 'See multichannel outreach' },
        { title: 'An audience that stays warm', body: 'A first-degree LinkedIn network travels with the person, so every job change is a warm way into a new account.', href: '/use-cases/lead-generation', linkLabel: 'See lead generation' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'What marketing leaders say',
      quoteSlug: 'alon-even',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['build-b2b-audience-no-decay', 'personalize-outreach-at-scale', 'stop-sales-email-bounces'],
      closing: { titlePre: 'Build an audience ', titleAccent: 'that lasts', titlePost: '.', sub: 'Book a demo and we will show you how marketing teams build a lasting audience with hubsell.' },
      closingCta: 'Book a demo',
    },
    {
      path: '/solutions/role/sales-operations', axis: 'role',
      title: 'hubsell for sales operations: clean data, less admin | hubsell',
      metaDescription: 'Stop losing hours to manual CRM entry and list cleanup. hubsell keeps pipeline data accurate and logs every activity by itself.',
      eyebrow: 'For sales operations',
      h1Pre: 'Clean data, without the ', h1Accent: 'manual work', h1Post: '',
      sub: 'You keep the machine running, and manual entry and list cleanup quietly eat the day. hubsell sources verified data and logs every activity on its own, so the CRM stays accurate without you chasing it.',
      demoCta: 'Book a demo',
      jobsEyebrow: 'The work', jobsTitle: 'The jobs you need done',
      jobs: [
        'Stop cleaning lists that were stale on arrival.',
        'Cut the manual CRM entry that eats rep time.',
        'Keep the pipeline data accurate as a matter of course.',
      ],
      howEyebrow: 'How hubsell helps', howTitle: 'How hubsell gets it done',
      how: [
        { title: 'Less rot to clean', body: 'Data is verified at the point of use, so you are not scrubbing a list that was stale before it arrived.', href: '/platform/live-data', linkLabel: 'See live data' },
        { title: 'No middleware to babysit', body: 'Real-time two-way CRM sync keeps records current with no nightly jobs and no CSV exports to manage.', href: '/platform/crm-sync', linkLabel: 'See CRM sync' },
        { title: 'Hours back for the reps', body: 'Automatic activity logging removes the manual entry that eats selling time across the team.', href: '/platform', linkLabel: 'See the platform' },
      ],
      proofEyebrow: 'Proof', proofTitle: 'What operators say',
      quoteSlug: 'meetyoo',
      faqEyebrow: 'FAQ', faqTitle: 'Common questions',
      faqSlugs: ['hubsell-crm-integration', 'stop-sales-email-bounces', 'hubsell-replace-outbound-stack'],
      closing: { titlePre: 'Keep your data ', titleAccent: 'clean by default', titlePost: '.', sub: 'Book a demo and we will show you what hubsell logs and keeps current on its own.' },
      closingCta: 'Book a demo',
    },
  ],
};
