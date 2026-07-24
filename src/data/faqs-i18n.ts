// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// Locale ACCESSOR file: merges the English source with the translated
// siblings and exports get*(locale) functions for components. The pattern is
// explained in src/data/home-i18n.ts.
// ==========================================================================
// Returns the full FAQ list localized. English is the source (faqs.ts). German is
// assembled from two places with no duplication: the homepage FAQ German lives in
// home.de.ts (faqsDe), and the remaining FAQ German lives in faqs.de.ts
// (faqsDeExtra). Other locales fall back to English until translated.
import { faqs, type Faq } from './faqs';
import { faqsDe } from './home.de';
import { faqsNl } from './home.nl';
import { faqsDeExtra } from './faqs.de';
import { faqsNlExtra } from './faqs.nl';
import { asLocale } from '../i18n/utils';

const deBySlug: Record<string, { question: string; answer: string }> = {};
for (const f of faqsDe) deBySlug[f.slug] = { question: f.question, answer: f.answer };
Object.assign(deBySlug, faqsDeExtra);

const nlBySlug: Record<string, { question: string; answer: string }> = {};
for (const f of faqsNl) nlBySlug[f.slug] = { question: f.question, answer: f.answer };
Object.assign(nlBySlug, faqsNlExtra);

export function getFaqs(locale: string | undefined): Faq[] {
  const loc = asLocale(locale);
  const map = loc === 'de' ? deBySlug : loc === 'nl' ? nlBySlug : null;
  if (!map) return faqs;
  return faqs.map((f) => {
    const tr = map[f.slug];
    return tr ? { ...f, question: tr.question, answer: tr.answer } : f;
  });
}
