// ============================= LEARNING NOTES =============================
// Marketing event tracking. This module pushes events into the Google Tag
// Manager `dataLayer`. GTM is injected OUTSIDE this repo (at the edge), so
// this file never loads GTM itself. If GTM is absent the pushes are harmless:
// they just sit in an array nobody reads. Nothing here touches the
// /api/subscribe flow; tracking is a read-only side channel.
//
// Events produced:
//   cta_click            automatic, any link to /book-a-call (any locale)
//   form_start           automatic, first keystroke in any <form>
//   form_error           pushed by the form components via track()
//   form_submit_success  pushed by the form components via track()
//
// GTM picks these up with Custom Event triggers and forwards them to GA4.
// See docs in the GTM setup guide delivered alongside this change.
// ==========================================================================

type Params = Record<string, string | number | undefined>;

/** Push one event into the GTM dataLayer. Safe to call anywhere. */
export function track(event: string, params: Params = {}): void {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

// ------------------------- automatic cta_click ----------------------------
// Every primary CTA on the site is a link ending in /book-a-call (also the
// locale variants like /de/book-a-call). One delegated listener on the
// document catches them all, so new CTAs are tracked without code changes.

const CTA_PATH = '/book-a-call';

function ctaLocation(a: HTMLElement): string {
  // Optional explicit override: wrap any area in data-cta-location="...".
  const tagged = a.closest<HTMLElement>('[data-cta-location]');
  if (tagged?.dataset.ctaLocation) return tagged.dataset.ctaLocation;
  if (a.closest('nav')) return 'nav';
  if (a.closest('footer')) return 'footer';
  if (a.closest('[class*="hero"]')) return 'hero';
  if (a.closest('[class*="pricing"]')) return 'pricing';
  return 'content';
}

function onDocumentClick(e: MouseEvent): void {
  const target = e.target as HTMLElement | null;
  const a = target?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a) return;
  let path = '';
  try { path = new URL(a.href, location.origin).pathname; } catch { return; }
  if (!path.endsWith(CTA_PATH)) return;
  track('cta_click', {
    cta_location: ctaLocation(a),
    cta_text: (a.textContent || '').trim().slice(0, 80),
    page_path: location.pathname,
  });
}

// ------------------------- automatic form_start ---------------------------
// Fires once per form element on the first keystroke or selection. A WeakSet
// remembers which forms already fired; after a client-side navigation the
// forms are new DOM nodes, so each page gets a fresh start event. Correct.

const startedForms = new WeakSet<HTMLFormElement>();

function formId(form: HTMLFormElement): string {
  // WaitlistForm and RequestForm carry the name on a data-form wrapper.
  const holder = form.closest<HTMLElement>('[data-form]');
  if (holder?.dataset.form) return holder.dataset.form;
  // The two remaining forms are identified by their component class.
  if (form.classList.contains('bcf-form')) return 'book-a-call';
  if (form.classList.contains('secta-form')) return 'sdr-partial';
  return 'unknown';
}

function onFirstInput(e: Event): void {
  const form = (e.target as HTMLElement | null)?.closest?.('form');
  if (!form || startedForms.has(form)) return;
  startedForms.add(form);
  track('form_start', { form_id: formId(form), page_path: location.pathname });
}

// Document-level listeners survive Astro client-side navigation, so they are
// bound exactly once. Capture phase so no component can swallow the events.
document.addEventListener('click', onDocumentClick, true);
document.addEventListener('input', onFirstInput, true);
