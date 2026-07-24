// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// German translation file: mirrors the shapes of testimonials-content.ts or its
// English sibling exactly (TypeScript enforces it); the matching *-i18n.ts
// accessor picks this file when the locale asks for it. See the pattern
// notes in src/data/home-i18n.ts.
// ==========================================================================
// German quotes for the shared testimonials pool, mapped onto TESTIMONIALS by slug
// so the shared shape (photo, slug, storySlug) is preserved. The six customer-story
// champions are already translated for the homepage (home.de.ts) and reused here by
// slug; the six standalone quotes are translated below. Only the quote is German —
// names, titles, and companies stay as-is, matching the homepage.
import { TESTIMONIALS, type Testimonial } from './testimonials';
import { testimonialsDe } from './home.de';

const standaloneDe: Record<string, string> = {
  matterway:
    'Wir haben verschiedene Tools und Dienste ausprobiert, aber nur hubsell liefert sowohl die Funktionalität als auch die qualitativen Daten, um die Lead-Generierung wirklich zu automatisieren.',
  spryker:
    'Die Automatisierung von hubsell hat es uns ermöglicht, mehr Partner und Kunden zu erreichen und zu gewinnen als jede andere Plattform oder jeder andere Kanal, den ich je genutzt habe. Ohne sie hätte unser Unternehmen schlicht nicht skaliert.',
  cibt:
    'Ein hervorragendes Produkt für den B2B-Vertrieb. Die Inhalte, die hubsell findet, waren für meine Interessenten stets präzise und passend. Es ist einfach zu bedienen und beschleunigt den Rechercheteil der Neukundengewinnung für mein Team.',
  'alon-even':
    'Hervorragende 1:1-Neukundengewinnung im großen Maßstab über E-Mail, LinkedIn und Telefon. Hervorragende Daten, die nicht veralten. Ein wirklich kluges Konzept.',
  meetyoo:
    'Ich kann hubsell jedem empfehlen, der Outbound in seinem B2B-Marketing-Mix einsetzt. Großartiger Kundensupport, hilfsbereit und superschnell!',
  aspire:
    'Großartiges Produkt, fantastischer Support. hubsell hat die Lead-Generierung in unserem Unternehmen deutlich verbessert. Ein großartiges Produkt mit herausragendem Support, bei dem das Team stets mehr als das Übliche tut, um Anliegen zeitnah zu klären.',
};

// slug -> German quote: champions from the homepage set, plus the standalone six.
const quoteBySlug: Record<string, string> = {};
for (const t of testimonialsDe) quoteBySlug[t.slug] = t.quote;
Object.assign(quoteBySlug, standaloneDe);

export const TESTIMONIALS_DE: Testimonial[] = TESTIMONIALS.map((t) =>
  quoteBySlug[t.slug] ? { ...t, quote: quoteBySlug[t.slug] } : t,
);
