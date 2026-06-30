// Returns the full FAQ list localized. English is the source (faqs.ts). German is
// assembled from two places with no duplication: the homepage FAQ German lives in
// home.de.ts (faqsDe), and the remaining FAQ German lives in faqs.de.ts
// (faqsDeExtra). Other locales fall back to English until translated.
import { faqs, type Faq } from './faqs';
import { faqsDe } from './home.de';
import { faqsDeExtra } from './faqs.de';
import { asLocale } from '../i18n/utils';

const deBySlug: Record<string, { question: string; answer: string }> = {};
for (const f of faqsDe) deBySlug[f.slug] = { question: f.question, answer: f.answer };
Object.assign(deBySlug, faqsDeExtra);

export function getFaqs(locale: string | undefined): Faq[] {
  if (asLocale(locale) !== 'de') return faqs;
  return faqs.map((f) => {
    const de = deBySlug[f.slug];
    return de ? { ...f, question: de.question, answer: de.answer } : f;
  });
}
