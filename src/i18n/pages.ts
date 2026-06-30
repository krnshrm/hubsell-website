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
