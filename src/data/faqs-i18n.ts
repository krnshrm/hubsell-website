// Returns the full FAQ list localized. English is the source (faqs.ts). German is
// assembled from two places with no duplication: the homepage FAQ German lives in
// home.de.ts (faqsDe), and the remaining FAQ German lives in faqs.de.ts
// (faqsDeExtra). Other locales fall back to English until translated.
import { faqs, type Faq } from './faqs';
import { faqsDe } from './home.de';
import { faqsNl } from './home.nl';
import { faqsDeExtra } from './faqs.de';
import { faqsNlExtra } from './faqs.nl';
import { homeFr } from './20261114-1030-home.fr';
import { homeEs } from './20261114-1030-home.es';
import { homePt } from './20261114-1030-home.pt';
import { faqsFrExtra } from './20261114-1030-faqs.fr';
import { faqsEsExtra } from './20261114-1030-faqs.es';
import { faqsPtExtra } from './20261114-1030-faqs.pt';
import { asLocale } from '../i18n/utils';

const deBySlug: Record<string, { question: string; answer: string }> = {};
for (const f of faqsDe) deBySlug[f.slug] = { question: f.question, answer: f.answer };
Object.assign(deBySlug, faqsDeExtra);

const nlBySlug: Record<string, { question: string; answer: string }> = {};
for (const f of faqsNl) nlBySlug[f.slug] = { question: f.question, answer: f.answer };
Object.assign(nlBySlug, faqsNlExtra);

const bySlug = (home: Faq[], extra: Record<string, { question: string; answer: string }>) => {
  const m: Record<string, { question: string; answer: string }> = {};
  for (const f of home) m[f.slug] = { question: f.question, answer: f.answer };
  return Object.assign(m, extra);
};
const more: Record<string, Record<string, { question: string; answer: string }>> = {
  fr: bySlug(homeFr.faqs, faqsFrExtra), es: bySlug(homeEs.faqs, faqsEsExtra), pt: bySlug(homePt.faqs, faqsPtExtra),
};

export function getFaqs(locale: string | undefined): Faq[] {
  const loc = asLocale(locale);
  const map = loc === 'de' ? deBySlug : loc === 'nl' ? nlBySlug : more[loc] ?? null;
  if (!map) return faqs;
  return faqs.map((f) => {
    const tr = map[f.slug];
    return tr ? { ...f, question: tr.question, answer: tr.answer } : f;
  });
}
