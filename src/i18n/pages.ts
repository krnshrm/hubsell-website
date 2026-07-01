// Central copy for standalone marketing pages, English and German side by side.
// Body components read the per-page accessor (e.g. getContact(locale)). This keeps
// page-level German in one reviewable place. Per-form UI strings (field labels,
// validation messages) live inside the form components themselves.
//
// Locales without a translation fall back to English until they are filled in.
import { asLocale } from './utils';
import type { Locale } from './ui';

function byLocale<T>(en: T, de: T): Record<Locale, T> {
  return { en, de, nl: en, fr: en, es: en, pt: en };
}

// ── Contact ───────────────────────────────────────────────────────────────────
export interface ContactCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  sub: string;
  labelSupport: string;
  labelLegal: string;
  labelOffice: string;
  country: string; // only the country line of the address is localized
  labelTalk: string;
  bookCall: string; // link text (the arrow is added in markup)
  form: {
    buttonLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    successTitle: string;
    successText: string;
  };
}

const contact = byLocale<ContactCopy>(
  {
    metaTitle: 'Contact | hubsell',
    metaDescription:
      'Get in touch with hubsell. Questions about the platform, your account, partnerships, or press. Send a note and the right person will get back to you.',
    eyebrow: 'Contact',
    title: 'Get in touch',
    sub: 'Questions about hubsell, your account, partnerships, or press. Send a note and the right person will get back to you.',
    labelSupport: 'General and support',
    labelLegal: 'Legal and privacy',
    labelOffice: 'Office',
    country: 'D-10117 Berlin, Germany',
    labelTalk: 'Prefer to talk it through?',
    bookCall: 'Book a call',
    form: {
      buttonLabel: 'Send message',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Your message',
      messagePlaceholder: 'How can we help?',
      successTitle: 'Message sent.',
      successText: 'Thanks for reaching out. We will reply by email soon.',
    },
  },
  {
    metaTitle: 'Kontakt | hubsell',
    metaDescription:
      'Nehmen Sie Kontakt mit hubsell auf. Fragen zur Plattform, zu Ihrem Konto, zu Partnerschaften oder Presse. Schreiben Sie uns und die richtige Person meldet sich bei Ihnen.',
    eyebrow: 'Kontakt',
    title: 'Kontakt aufnehmen',
    sub: 'Fragen zu hubsell, zu Ihrem Konto, zu Partnerschaften oder Presse. Schreiben Sie uns und die richtige Person meldet sich bei Ihnen.',
    labelSupport: 'Allgemein und Support',
    labelLegal: 'Recht und Datenschutz',
    labelOffice: 'Büro',
    country: 'D-10117 Berlin, Deutschland',
    labelTalk: 'Lieber persönlich sprechen?',
    bookCall: 'Gespräch buchen',
    form: {
      buttonLabel: 'Nachricht senden',
      emailPlaceholder: 'name@firma.de',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Wie können wir helfen?',
      successTitle: 'Nachricht gesendet.',
      successText: 'Danke für Ihre Nachricht. Wir antworten Ihnen bald per E-Mail.',
    },
  },
);

export function getContact(locale: string | undefined): ContactCopy {
  return contact[asLocale(locale)];
}

// ── Book a call ─────────────────────────────────────────────────────────────────
export interface BookCallCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  sub: string;
  coversHeading: string;
  covers: string[];
  note: string;
}

const bookCall = byLocale<BookCallCopy>(
  {
    metaTitle: 'Book a call | hubsell',
    metaDescription:
      'See hubsell run on your own market. Request a call and we will show you live-sourced data, the email and LinkedIn flow, and CRM sync on real accounts.',
    eyebrow: 'Get started',
    title: 'Book a call',
    sub: 'See hubsell run on your own market. We will show you live-sourced data, the email and LinkedIn flow, and the CRM sync on real accounts, then map it to your pipeline.',
    coversHeading: 'What the call covers',
    covers: [
      'A live look at zero-day sourcing on your ICP, not a generic demo.',
      'How the email and LinkedIn steps run as one coordinated flow.',
      'Where hubsell replaces tools you already pay for.',
      'A clear answer on fit, pricing, and onboarding for your team.',
    ],
    note: 'Our team handles your first campaign setup, so most teams run their first outbound within the first week.',
  },
  {
    metaTitle: 'Gespräch buchen | hubsell',
    metaDescription:
      'Erleben Sie hubsell in Ihrem eigenen Markt. Buchen Sie ein Gespräch und wir zeigen Ihnen live recherchierte Daten, den E-Mail- und LinkedIn-Ablauf und die CRM-Synchronisierung an echten Accounts.',
    eyebrow: 'Loslegen',
    title: 'Gespräch buchen',
    sub: 'Erleben Sie hubsell in Ihrem eigenen Markt. Wir zeigen Ihnen live recherchierte Daten, den E-Mail- und LinkedIn-Ablauf und die CRM-Synchronisierung an echten Accounts und übertragen das anschließend auf Ihre Pipeline.',
    coversHeading: 'Was das Gespräch abdeckt',
    covers: [
      'Ein Live-Blick auf Zero-Day-Sourcing für Ihr ICP, keine generische Demo.',
      'Wie die E-Mail- und LinkedIn-Schritte als ein abgestimmter Ablauf laufen.',
      'Wo hubsell Tools ersetzt, für die Sie bereits zahlen.',
      'Eine klare Antwort zu Eignung, Preis und Onboarding für Ihr Team.',
    ],
    note: 'Unser Team übernimmt die Einrichtung Ihrer ersten Kampagne, sodass die meisten Teams ihren ersten Outbound schon in der ersten Woche starten.',
  },
);

export function getBookCall(locale: string | undefined): BookCallCopy {
  return bookCall[asLocale(locale)];
}

// ── FAQs page ───────────────────────────────────────────────────────────────────
export interface FaqsCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subPre: string;   // before the inline demo link
  demoLink: string; // inline link text
  subPost: string;  // after the link
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const faqsPage = byLocale<FaqsCopy>(
  {
    metaTitle: 'Frequently asked questions | hubsell',
    metaDescription:
      'Answers to the questions teams ask before switching to hubsell: live data sourcing, deliverability, LinkedIn outreach, CRM sync, GDPR, pricing, and more.',
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    subPre: 'Everything teams ask before switching to hubsell. Still stuck? ',
    demoLink: 'Book a 20-minute demo',
    subPost: '.',
    ctaTitle: 'Still weighing it up?',
    ctaText: 'Put hubsell on your own ICP and see the data and the outreach flow on real accounts.',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo',
  },
  {
    metaTitle: 'Häufig gestellte Fragen | hubsell',
    metaDescription:
      'Antworten auf die Fragen, die Teams vor dem Wechsel zu hubsell stellen: Live-Datenrecherche, Zustellbarkeit, LinkedIn-Outreach, CRM-Synchronisierung, DSGVO, Preise und mehr.',
    eyebrow: 'FAQ',
    title: 'Antworten auf Ihre Fragen.',
    subPre: 'Alles, was Teams vor dem Wechsel zu hubsell fragen. Noch unsicher? ',
    demoLink: '20-minütige Demo buchen',
    subPost: '.',
    ctaTitle: 'Noch am Abwägen?',
    ctaText: 'Testen Sie hubsell mit Ihrem eigenen ICP und sehen Sie die Daten und den Outreach-Ablauf an echten Accounts.',
    ctaPrimary: 'Kostenlos testen',
    ctaSecondary: 'Demo buchen',
  },
);

export function getFaqsPage(locale: string | undefined): FaqsCopy {
  return faqsPage[asLocale(locale)];
}

// ── Reviews page (hubsell-reviews) ───────────────────────────────────────────────
export interface ReviewsCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  wallHead: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  crumbHome: string;
  crumbReviews: string;
}

const reviewsPage = byLocale<ReviewsCopy>(
  {
    metaTitle: 'hubsell Reviews: ratings and testimonials from B2B teams',
    metaDescription:
      'Read verified reviews of hubsell from teams like Matterway, Spryker, and Workspace 365 who replaced their outbound stack with live-sourced data, multichannel outreach, and CRM sync.',
    eyebrow: 'Reviews',
    h1: 'What teams say about hubsell',
    heroSub:
      'Verified reviews from sales and marketing teams who replaced static lists and a stack of disconnected tools with one platform. Read what they tell us, and see the score on each review platform.',
    wallHead: 'In their words',
    ctaTitle: 'See why teams switch to hubsell',
    ctaSub: 'Start a free trial, or book a call and we will walk you through it.',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a call',
    crumbHome: 'Home',
    crumbReviews: 'Reviews',
  },
  {
    metaTitle: 'hubsell Bewertungen: Rezensionen und Erfahrungen von B2B-Teams',
    metaDescription:
      'Lesen Sie verifizierte Bewertungen von hubsell von Teams wie Matterway, Spryker und Workspace 365, die ihren Outbound-Stack durch live recherchierte Daten, Multichannel-Outreach und CRM-Synchronisierung ersetzt haben.',
    eyebrow: 'Bewertungen',
    h1: 'Was Teams über hubsell sagen',
    heroSub:
      'Verifizierte Bewertungen von Vertriebs- und Marketingteams, die statische Listen und einen Stapel unverbundener Tools durch eine einzige Plattform ersetzt haben. Lesen Sie, was sie uns berichten, und sehen Sie die Bewertung auf jeder Plattform.',
    wallHead: 'In ihren Worten',
    ctaTitle: 'Sehen Sie, warum Teams zu hubsell wechseln',
    ctaSub: 'Starten Sie einen kostenlosen Test oder buchen Sie ein Gespräch, und wir führen Sie durch alles.',
    ctaPrimary: 'Kostenlos testen',
    ctaSecondary: 'Gespräch buchen',
    crumbHome: 'Startseite',
    crumbReviews: 'Bewertungen',
  },
);

export function getReviewsPage(locale: string | undefined): ReviewsCopy {
  return reviewsPage[asLocale(locale)];
}

// ── Use cases (overview + detail) ────────────────────────────────────────────────
export interface UseCasesCopy {
  // overview
  ovMetaTitle: string;
  ovMetaDescription: string;
  ovEyebrow: string;
  ovH1: string;
  ovSub: string;
  // detail
  back: string;
  eyebrowDefault: string;
  ctaPrimary: string;
  ctaSecondary: string;
  powersHead: string;
  rolesHead: string;
  proofLabel: string;
  storyPre: string;
  storyPost: string;
  stripHeading: string;
  ctaHeadingDefault: string;
  ctaTextDefault: string;
  relatedLabel: string;
  explore: string;
}

const useCasesPage = byLocale<UseCasesCopy>(
  {
    ovMetaTitle: 'Use cases | hubsell',
    ovMetaDescription:
      'One platform for outbound: lead generation, multichannel email and LinkedIn outreach, and account-based outreach. See how each one works in hubsell.',
    ovEyebrow: 'Use cases',
    ovH1: 'One platform, every outbound motion',
    ovSub:
      'From sourcing leads to working whole buying committees, here is how teams put hubsell to work. Each one runs on the same live data, the same email and LinkedIn sequencing, and the same automatic CRM sync.',
    back: 'All use cases',
    eyebrowDefault: 'Use case',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo',
    powersHead: 'What powers it',
    rolesHead: 'Who it is for',
    proofLabel: 'Proof',
    storyPre: 'Read the ',
    storyPost: ' story →',
    stripHeading: 'More teams using hubsell',
    ctaHeadingDefault: 'See it run on your own pipeline',
    ctaTextDefault:
      'Start a free trial and put hubsell to work on your outbound: live-sourced data, email and LinkedIn sequences, and automatic CRM sync.',
    relatedLabel: 'More use cases',
    explore: 'Explore →',
  },
  {
    ovMetaTitle: 'Anwendungsfälle | hubsell',
    ovMetaDescription:
      'Eine Plattform für Outbound: Lead-Generierung, Multichannel-Outreach über E-Mail und LinkedIn sowie account-basierter Outreach. So funktioniert jeder Fall in hubsell.',
    ovEyebrow: 'Anwendungsfälle',
    ovH1: 'Eine Plattform, jede Outbound-Bewegung',
    ovSub:
      'Vom Recherchieren von Leads bis zur Ansprache ganzer Buying-Committees: So setzen Teams hubsell ein. Jeder Fall läuft auf denselben Live-Daten, demselben E-Mail- und LinkedIn-Sequencing und derselben automatischen CRM-Synchronisierung.',
    back: 'Alle Anwendungsfälle',
    eyebrowDefault: 'Anwendungsfall',
    ctaPrimary: 'Kostenlos testen',
    ctaSecondary: 'Demo buchen',
    powersHead: 'Was es antreibt',
    rolesHead: 'Für wen es ist',
    proofLabel: 'Beleg',
    storyPre: 'Die Story von ',
    storyPost: ' lesen →',
    stripHeading: 'Weitere Teams, die hubsell nutzen',
    ctaHeadingDefault: 'Sehen Sie es an Ihrer eigenen Pipeline',
    ctaTextDefault:
      'Starten Sie einen kostenlosen Test und setzen Sie hubsell für Ihren Outbound ein: live recherchierte Daten, E-Mail- und LinkedIn-Sequenzen und automatische CRM-Synchronisierung.',
    relatedLabel: 'Weitere Anwendungsfälle',
    explore: 'Entdecken →',
  },
);

export function getUseCasesPage(locale: string | undefined): UseCasesCopy {
  return useCasesPage[asLocale(locale)];
}

// ── Comparisons (overview + /vs detail) ──────────────────────────────────────────
export interface ComparisonsCopy {
  ovMetaTitle: string;
  ovMetaDescription: string;
  ovEyebrow: string;
  ovH1: string;
  ovSub: string;
  back: string;
  eyebrowPrefix: string;
  ctaPrimary: string;
  ctaButtonDefault: string;
  coreDiffH2: string;
  featureH2: string;
  dataQualityH2: string;
  pricingH2: string;
  chooseH2: string;
  chooseHub: string;
  chooseCompPre: string;
  chooseCompPost: string;
  stripHeading: string;
  ctaHeadingDefault: string;
  ctaText: string;
  factCheckedPre: string;
  factCheckedPost: string;
  sourcesSummary: string;
  relatedLabel: string;
  compare: string;
  altPre: string;
  altPost: string;
  crumbHome: string;
  crumbComparisons: string;
}

const comparisonsPage = byLocale<ComparisonsCopy>(
  {
    ovMetaTitle: 'hubsell vs the alternatives | hubsell',
    ovMetaDescription:
      'Honest, fact-checked comparisons of hubsell against Apollo, ZoomInfo, Cognism, Lusha, and Seamless. Where each tool fits, and where hubsell is the better choice.',
    ovEyebrow: 'Comparisons',
    ovH1: 'hubsell vs the alternatives',
    ovSub:
      'Most outbound stacks bolt a database to a sequencer to a sync tool. hubsell sources contacts live, runs email and LinkedIn as one flow, and syncs every touch to your CRM. Here is how it compares, including where the other tools are the better fit.',
    back: 'All comparisons',
    eyebrowPrefix: 'Comparison',
    ctaPrimary: 'Start free trial',
    ctaButtonDefault: 'Book a demo',
    coreDiffH2: 'The core difference',
    featureH2: 'Feature by feature',
    dataQualityH2: 'Data quality',
    pricingH2: 'Pricing',
    chooseH2: 'Which should you choose?',
    chooseHub: 'Choose hubsell if',
    chooseCompPre: 'Choose ',
    chooseCompPost: ' if',
    stripHeading: 'Why teams switch to hubsell',
    ctaHeadingDefault: 'See hubsell on your own ICP',
    ctaText: 'Put hubsell on your own ICP and see the data and the outreach flow on real accounts, no commitment.',
    factCheckedPre: 'Last fact-checked ',
    factCheckedPost: '. Competitor details change; tell us if anything here is out of date.',
    sourcesSummary: 'Sources',
    relatedLabel: 'More comparisons',
    compare: 'Compare →',
    altPre: ' The live-sourced ',
    altPost: ' alternative.',
    crumbHome: 'Home',
    crumbComparisons: 'Comparisons',
  },
  {
    ovMetaTitle: 'hubsell vs. die Alternativen | hubsell',
    ovMetaDescription:
      'Ehrliche, faktengeprüfte Vergleiche von hubsell mit Apollo, ZoomInfo, Cognism, Lusha und Seamless. Wo jedes Tool passt und wo hubsell die bessere Wahl ist.',
    ovEyebrow: 'Vergleiche',
    ovH1: 'hubsell vs. die Alternativen',
    ovSub:
      'Die meisten Outbound-Stacks schrauben eine Datenbank an einen Sequencer an ein Sync-Tool. hubsell recherchiert Kontakte live, betreibt E-Mail und LinkedIn als einen Ablauf und synchronisiert jeden Kontaktpunkt mit Ihrem CRM. So schneidet es im Vergleich ab, samt der Fälle, in denen die anderen Tools besser passen.',
    back: 'Alle Vergleiche',
    eyebrowPrefix: 'Vergleich',
    ctaPrimary: 'Kostenlos testen',
    ctaButtonDefault: 'Demo buchen',
    coreDiffH2: 'Der zentrale Unterschied',
    featureH2: 'Funktion für Funktion',
    dataQualityH2: 'Datenqualität',
    pricingH2: 'Preise',
    chooseH2: 'Was sollten Sie wählen?',
    chooseHub: 'hubsell wählen, wenn',
    chooseCompPre: '',
    chooseCompPost: ' wählen, wenn',
    stripHeading: 'Warum Teams zu hubsell wechseln',
    ctaHeadingDefault: 'hubsell an Ihrem eigenen ICP sehen',
    ctaText: 'Setzen Sie hubsell auf Ihren eigenen ICP an und sehen Sie die Daten und den Outreach-Ablauf an echten Accounts, ohne Verpflichtung.',
    factCheckedPre: 'Zuletzt geprüft am ',
    factCheckedPost: '. Angaben zu Wettbewerbern ändern sich. Sagen Sie uns Bescheid, wenn hier etwas veraltet ist.',
    sourcesSummary: 'Quellen',
    relatedLabel: 'Weitere Vergleiche',
    compare: 'Vergleichen →',
    altPre: ' Die live recherchierte Alternative zu ',
    altPost: '.',
    crumbHome: 'Startseite',
    crumbComparisons: 'Vergleiche',
  },
);

export function getComparisonsPage(locale: string | undefined): ComparisonsCopy {
  return comparisonsPage[asLocale(locale)];
}

// ── Customer stories (overview + detail) ─────────────────────────────────────────
export interface CustomerStoriesCopy {
  ovMetaTitle: string;
  ovMetaDescription: string;
  ovEyebrow: string;
  ovH1: string;
  ovSub: string;
  back: string;
  eyebrowStory: string;
  relatedLabel: string;
  readStory: string;
  ctaTitlePre: string;
  ctaTitleFallback: string;
  ctaTitlePost: string;
  ctaButton: string;
  ctaTextDefault: string;
  crumbHome: string;
  crumbStories: string;
}

const customerStoriesPage = byLocale<CustomerStoriesCopy>(
  {
    ovMetaTitle: 'Customer stories | hubsell',
    ovMetaDescription:
      'How B2B teams use hubsell to lower acquisition cost, enter new markets, and generate more pipeline. Real results from real customers.',
    ovEyebrow: 'Customers',
    ovH1: 'Real teams, real pipeline',
    ovSub:
      'How sales and marketing teams use hubsell to lower acquisition cost, reach new markets, and generate more opportunities.',
    back: 'All customer stories',
    eyebrowStory: 'Customer story',
    relatedLabel: 'More customer stories',
    readStory: 'Read the story →',
    ctaTitlePre: 'Want results like ',
    ctaTitleFallback: 'these',
    ctaTitlePost: '?',
    ctaButton: 'Start free trial',
    ctaTextDefault:
      'Start a free trial and put hubsell to work on your own outbound: verified data, email and LinkedIn sequences, and automatic CRM sync.',
    crumbHome: 'Home',
    crumbStories: 'Customer stories',
  },
  {
    ovMetaTitle: 'Kundenstorys | hubsell',
    ovMetaDescription:
      'Wie B2B-Teams mit hubsell die Akquisekosten senken, neue Märkte erschließen und mehr Pipeline erzeugen. Echte Ergebnisse von echten Kunden.',
    ovEyebrow: 'Kunden',
    ovH1: 'Echte Teams, echte Pipeline',
    ovSub:
      'Wie Vertriebs- und Marketingteams mit hubsell die Akquisekosten senken, neue Märkte erreichen und mehr Chancen erzeugen.',
    back: 'Alle Kundenstorys',
    eyebrowStory: 'Kundenstory',
    relatedLabel: 'Weitere Kundenstorys',
    readStory: 'Story lesen →',
    ctaTitlePre: 'Möchten Sie Ergebnisse wie ',
    ctaTitleFallback: 'diese',
    ctaTitlePost: '?',
    ctaButton: 'Kostenlos testen',
    ctaTextDefault:
      'Starten Sie einen kostenlosen Test und setzen Sie hubsell für Ihren eigenen Outbound ein: verifizierte Daten, E-Mail- und LinkedIn-Sequenzen und automatische CRM-Synchronisierung.',
    crumbHome: 'Startseite',
    crumbStories: 'Kundenstorys',
  },
);

export function getCustomerStoriesPage(locale: string | undefined): CustomerStoriesCopy {
  return customerStoriesPage[asLocale(locale)];
}
