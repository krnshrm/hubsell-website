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
