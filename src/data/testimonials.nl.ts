// ============================= LEARNING NOTES =============================
// Part of the DATA LAYER (src/data/). This repo separates CONTENT (strings,
// lists, tables, in .ts files here) from PRESENTATION (components that render
// it). Benefits: copy edits never risk breaking markup, TypeScript checks
// that data and components agree on shape, and one dataset can serve every
// locale and page that needs it. The file's own comment below says what this
// particular file holds.
// Dutch translation file: mirrors the shapes of testimonials-content.ts or its
// English sibling exactly (TypeScript enforces it); the matching *-i18n.ts
// accessor picks this file when the locale asks for it. See the pattern
// notes in src/data/home-i18n.ts.
// ==========================================================================
// Dutch quotes for the shared testimonials pool, mapped onto TESTIMONIALS by slug
// so the shared shape (photo, slug, storySlug) is preserved. The six customer-story
// champions are already translated for the homepage (home.nl.ts) and reused here by
// slug; the six standalone quotes are translated below. Only the quote is Dutch —
// names, titles, and companies stay as-is, matching the homepage.
import { TESTIMONIALS, type Testimonial } from './testimonials';
import { testimonialsNl } from './home.nl';

const standaloneNl: Record<string, string> = {
  matterway:
    'We hebben verschillende tools en diensten geprobeerd, maar alleen hubsell levert zowel de functionaliteit als de kwalitatieve data om leadgeneratie echt te automatiseren.',
  spryker:
    'De automatisering van hubsell stelde ons in staat meer partners en klanten te bereiken en te winnen dan welk ander platform of kanaal dan ook dat ik ooit heb gebruikt. Zonder hubsell was ons bedrijf simpelweg niet geschaald.',
  cibt:
    'Een uitstekend product voor B2B-verkoop. De informatie die hubsell weet te vinden, was voor mijn prospects altijd accuraat en bruikbaar. Het is eenvoudig in gebruik en versnelt het researchgedeelte van prospecting voor mijn team.',
  'alon-even':
    'Uitstekende 1-op-1-prospecting op schaal via e-mail, LinkedIn en telefoon. Uitstekende data die niet veroudert. Een echt slim concept.',
  meetyoo:
    'Ik kan hubsell aanbevelen aan iedereen die outbound inzet in de B2B-marketingmix. Geweldige klantensupport, behulpzaam en supersnel!',
  aspire:
    'Geweldig product, fantastische support. hubsell heeft de leadgeneratie in onze organisatie sterk verbeterd. Een geweldig product met support die er echt uitspringt, waarbij het team altijd een stap extra zet om vragen snel op te lossen.',
};

// slug -> Dutch quote: champions from the homepage set, plus the standalone six.
const quoteBySlug: Record<string, string> = {};
for (const t of testimonialsNl) quoteBySlug[t.slug] = t.quote;
Object.assign(quoteBySlug, standaloneNl);

export const TESTIMONIALS_NL: Testimonial[] = TESTIMONIALS.map((t) =>
  quoteBySlug[t.slug] ? { ...t, quote: quoteBySlug[t.slug] } : t,
);
