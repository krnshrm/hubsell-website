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
  { id: 'hiring', tab: 'Hiring for roles', flow: 'li', input: 'url', label: 'LinkedIn search link for people at companies hiring',
    sample: 'https://www.linkedin.com/search/results/people/?origin=FACETED_SEARCH&activelyHiringForJobTitles=%5B%229625%22%5D',
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

// ---- copy, per locale ----
// The demo is chrome around sample data, so everything a visitor reads lives
// here: source tabs, node titles, stat labels, waits. German is third person, with no direct
// address and a lowercase "hubsell"; Dutch is formal (u) and keeps LinkedIn, CRM and
// credits in English. Stat labels sit three to a card, so they are kept to
// about ten letters in every language.
type SourceCopy = { tab: string; label: string; detail: string; crumb: string };
type FlowCopy = {
  numberLocale: string; pctSpace: boolean;
  src: Record<SourceId, SourceCopy>;
  ui: Record<'flows' | 'sample' | 'source' | 'roles' | 'rolesSample' | 'file' | 'verified' | 'phone' | 'credit' | 'repeat' | 'on' | 'off' | 'skip' | 'skipped', string>;
  n: Record<string, string>;
};

export const FLOW_COPY: Record<'en' | 'de' | 'nl', FlowCopy> = {
  en: {
    numberLocale: 'en-GB', pctSpace: false,
    src: {
      post:     { tab: 'LinkedIn post', label: 'LinkedIn post link', detail: 'Reactions, comments and reposts', crumb: 'Outbound from a LinkedIn post' },
      event:    { tab: 'Event participants', label: 'LinkedIn event link', detail: '386 people signed up', crumb: 'Outbound from a LinkedIn event' },
      hiring:   { tab: 'Hiring for roles', label: 'LinkedIn search link for people at companies hiring', detail: 'Sales leaders at 41 hiring companies', crumb: 'Outbound to companies hiring' },
      search:   { tab: 'People search', label: 'LinkedIn people search link', detail: 'Heads of Sales in DE and NL', crumb: 'Outbound from a people search' },
      salesnav: { tab: 'Sales Navigator', label: 'Sales Navigator lead search link', detail: 'Sales leaders in DACH, 51 to 500 staff', crumb: 'Outbound from Sales Navigator' },
      csv:      { tab: 'Import CSV', label: 'CSV file', detail: 'sample-leads.csv, 500 rows', crumb: 'Outbound from a CSV import' },
    },
    ui: {
      flows: 'Flows', sample: 'Sample data', source: 'Source', roles: 'Roles', rolesSample: 'SDR, Account Executive',
      file: '500 rows, some with missing emails and LinkedIn URLs', verified: 'Verified email', phone: 'Phone', credit: '+0.5 credit',
      repeat: 'Repeat with the next source', on: 'On', off: 'Off', skip: 'Skip', skipped: 'Skipped',
    },
    n: {
      source: 'Source', found: 'Found', rows: 'Rows', importCsv: 'Import CSV',
      qualify: 'Qualify with AI', qualifySub: 'Against your ideal customer', checked: 'Checked', qualified: 'Qualified', notFit: 'Not a fit',
      enrich: 'Enrich', enrichSub: 'Verified email, phone if selected', emails: 'Emails', phones: 'Phones',
      connect: 'Connection request', connectSub: 'LinkedIn invite', sent: 'Sent', accepted: 'Accepted', notAccepted: 'Not accepted',
      cond: 'Follow-up conditions', condSub: 'Accepted within 7 days?',
      wait1: 'Wait 1 day', wait2: 'Wait 2 days', wait3: 'Wait 3 days', wait7: 'Wait 7 days',
      dm: 'Direct message', dmSub: 'LinkedIn message', replied: 'Replied',
      withdraw: 'Withdraw connection', withdrawSub: 'Cancel the pending invite', withdrawn: 'Withdrawn',
      email: 'Send email', emailSub: 'Everyone without a reply', emailSubAll: 'Everyone with an email', opened: 'Opened',
      call: 'Call task', callSub: 'Created in your CRM', tasks: 'Tasks created',
      sync: 'CRM sync', syncSub: 'HubSpot, Salesforce or Pipedrive', synced: 'Synced', replies: 'Replies', meetings: 'Meetings',
      verify: 'Verify data', verifySub: 'Check emails and LinkedIn URLs', validEmail: 'Valid email', validProfile: 'Valid profile',
      enrichGaps: 'Enrich missing data', enrichGapsSub: 'Only the rows with gaps', profiles: 'Profiles',
      condProfile: 'Has a LinkedIn profile?', branchAcc: 'Accepted', branchNot: 'Not accepted', hasProfile: 'Has profile', emailOnly: 'Email only',
    },
  },
  de: {
    numberLocale: 'de-DE', pctSpace: true,
    src: {
      post:     { tab: 'LinkedIn-Beitrag', label: 'Link zum LinkedIn-Beitrag', detail: 'Reaktionen, Kommentare, Reposts', crumb: 'Outbound aus einem LinkedIn-Beitrag' },
      event:    { tab: 'Event-Teilnehmer', label: 'Link zum LinkedIn-Event', detail: '386 Anmeldungen zum Event', crumb: 'Outbound aus einem LinkedIn-Event' },
      hiring:   { tab: 'Offene Stellen', label: 'LinkedIn-Suchlink für Personen bei Firmen, die einstellen', detail: 'Vertrieb bei 41 Firmen, die einstellen', crumb: 'Outbound an Firmen, die einstellen' },
      search:   { tab: 'Personensuche', label: 'Link zur LinkedIn-Personensuche', detail: 'Heads of Sales in DE und NL', crumb: 'Outbound aus einer Personensuche' },
      salesnav: { tab: 'Sales Navigator', label: 'Link zur Lead-Suche im Sales Navigator', detail: 'Vertrieb in DACH, 51 bis 500 MA', crumb: 'Outbound aus dem Sales Navigator' },
      csv:      { tab: 'CSV importieren', label: 'CSV-Datei', detail: 'sample-leads.csv, 500 Zeilen', crumb: 'Outbound aus einem CSV-Import' },
    },
    ui: {
      flows: 'Flows', sample: 'Beispieldaten', source: 'Quelle', roles: 'Rollen', rolesSample: 'SDR, Account Executive',
      file: '500 Zeilen, teils ohne E-Mail oder LinkedIn-URL', verified: 'Verifizierte E-Mail', phone: 'Telefon', credit: '+0,5 Credits',
      repeat: 'Mit der nächsten Quelle wiederholen', on: 'An', off: 'Aus', skip: 'Übersprungen', skipped: 'Übersprungen',
    },
    n: {
      source: 'Quelle', found: 'Gefunden', rows: 'Zeilen', importCsv: 'CSV importieren',
      qualify: 'Mit KI qualifizieren', qualifySub: 'Abgleich mit dem Idealkunden', checked: 'Geprüft', qualified: 'Passend', notFit: 'Unpassend',
      enrich: 'Anreichern', enrichSub: 'Verifizierte E-Mail, Telefon optional', emails: 'E-Mails', phones: 'Telefon',
      connect: 'Kontaktanfrage', connectSub: 'LinkedIn-Einladung', sent: 'Gesendet', accepted: 'Angenommen', notAccepted: 'Offen',
      cond: 'Folgebedingungen', condSub: 'In 7 Tagen angenommen?',
      wait1: 'Warten: 1 Tag', wait2: 'Warten: 2 Tage', wait3: 'Warten: 3 Tage', wait7: 'Warten: 7 Tage',
      dm: 'Direktnachricht', dmSub: 'LinkedIn-Nachricht', replied: 'Antworten',
      withdraw: 'Anfrage zurückziehen', withdrawSub: 'Offene Einladung zurückziehen', withdrawn: 'Zurückgezogen',
      email: 'E-Mail senden', emailSub: 'Alle ohne Antwort', emailSubAll: 'Alle mit E-Mail-Adresse', opened: 'Geöffnet',
      call: 'Anrufaufgabe', callSub: 'Im CRM angelegt', tasks: 'Angelegte Aufgaben',
      sync: 'CRM-Sync', syncSub: 'HubSpot, Salesforce oder Pipedrive', synced: 'Im CRM', replies: 'Antworten', meetings: 'Termine',
      verify: 'Daten prüfen', verifySub: 'E-Mails und LinkedIn-URLs prüfen', validEmail: 'E-Mail gültig', validProfile: 'Profil gültig',
      enrichGaps: 'Lücken anreichern', enrichGapsSub: 'Nur Zeilen mit Lücken', profiles: 'Profile',
      condProfile: 'LinkedIn-Profil vorhanden?', branchAcc: 'Angenommen', branchNot: 'Nicht angenommen', hasProfile: 'Mit Profil', emailOnly: 'Nur E-Mail',
    },
  },
  nl: {
    numberLocale: 'nl-NL', pctSpace: false,
    src: {
      post:     { tab: 'LinkedIn-post', label: 'Link naar LinkedIn-post', detail: 'Reacties, opmerkingen, reposts', crumb: 'Outbound uit een LinkedIn-post' },
      event:    { tab: 'Eventdeelnemers', label: 'Link naar LinkedIn-event', detail: '386 aanmeldingen voor het event', crumb: 'Outbound uit een LinkedIn-event' },
      hiring:   { tab: 'Vacatures', label: 'LinkedIn-zoeklink voor mensen bij bedrijven die werven', detail: 'Sales bij 41 bedrijven die werven', crumb: 'Outbound naar bedrijven die werven' },
      search:   { tab: 'Personen zoeken', label: 'Link naar zoekopdracht op LinkedIn', detail: 'Heads of Sales in DE en NL', crumb: 'Outbound uit een zoekopdracht' },
      salesnav: { tab: 'Sales Navigator', label: 'Link naar leadzoekopdracht in Sales Navigator', detail: 'Sales in DACH, 51 tot 500 medewerkers', crumb: 'Outbound uit Sales Navigator' },
      csv:      { tab: 'CSV importeren', label: 'CSV-bestand', detail: 'sample-leads.csv, 500 rijen', crumb: 'Outbound uit een CSV-import' },
    },
    ui: {
      flows: 'Flows', sample: 'Voorbeelddata', source: 'Bron', roles: 'Functies', rolesSample: 'SDR, Account Executive',
      file: '500 rijen, deels zonder e-mail of LinkedIn-URL', verified: 'Geverifieerd e-mailadres', phone: 'Telefoon', credit: '+0,5 credit',
      repeat: 'Herhaal met de volgende bron', on: 'Aan', off: 'Uit', skip: 'Overgeslagen', skipped: 'Overgeslagen',
    },
    n: {
      source: 'Bron', found: 'Gevonden', rows: 'Rijen', importCsv: 'CSV importeren',
      qualify: 'Kwalificeren met AI', qualifySub: 'Getoetst aan uw ideale klant', checked: 'Bekeken', qualified: 'Passend', notFit: 'Past niet',
      enrich: 'Verrijken', enrichSub: 'Geverifieerd e-mailadres, telefoon optioneel', emails: 'E-mails', phones: 'Telefoon',
      connect: 'Connectieverzoek', connectSub: 'LinkedIn-uitnodiging', sent: 'Verstuurd', accepted: 'Aanvaard', notAccepted: 'Open',
      cond: 'Vervolgcondities', condSub: 'Binnen 7 dagen aanvaard?',
      wait1: 'Wacht 1 dag', wait2: 'Wacht 2 dagen', wait3: 'Wacht 3 dagen', wait7: 'Wacht 7 dagen',
      dm: 'Direct bericht', dmSub: 'LinkedIn-bericht', replied: 'Antwoorden',
      withdraw: 'Connectie intrekken', withdrawSub: 'Openstaande uitnodiging intrekken', withdrawn: 'Ingetrokken',
      email: 'E-mail versturen', emailSub: 'Iedereen zonder antwoord', emailSubAll: 'Iedereen met een e-mailadres', opened: 'Geopend',
      call: 'Beltaak', callSub: 'Aangemaakt in uw CRM', tasks: 'Aangemaakte taken',
      sync: 'CRM-sync', syncSub: 'HubSpot, Salesforce of Pipedrive', synced: 'In CRM', replies: 'Antwoorden', meetings: 'Afspraken',
      verify: 'Data controleren', verifySub: 'E-mails en LinkedIn-URL’s controleren', validEmail: 'E-mail geldig', validProfile: 'Profiel geldig',
      enrichGaps: 'Ontbrekende data verrijken', enrichGapsSub: 'Alleen rijen met hiaten', profiles: 'Profielen',
      condProfile: 'LinkedIn-profiel aanwezig?', branchAcc: 'Aanvaard', branchNot: 'Niet aanvaard', hasProfile: 'Met profiel', emailOnly: 'Alleen e-mail',
    },
  },
};
