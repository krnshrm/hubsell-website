// ============================= LEARNING NOTES =============================
// Shared BROWSER module (no HTML): imported by the form components' <script>
// blocks. Astro bundles it once and reuses it. It implements the client half
// of the bot protection described in docs/BOT-PROTECTION.md: a honeypot
// field (hidden input real people never fill), a fill-time measurement (bots
// submit instantly), and the optional Turnstile widget. The server half
// lives in functions/api/subscribe.ts, which verifies these signals.
// ==========================================================================
// Shared bot guard for every form that posts to /api/subscribe.
// Three layers, all verified server-side in functions/api/subscribe.ts:
//   1. Honeypot: a visually hidden "website" field injected at bind time.
//      Humans never see it; naive bots fill it and get silently dropped.
//   2. Fill time: the form stamps when it was armed; submissions faster than
//      a human can type are silently dropped.
//   3. Cloudflare Turnstile (when TURNSTILE_SITE_KEY in site.ts is set):
//      invisible managed challenge, token verified per submission.
// Usage inside a form component's submit handler:
//   const guard = guardForm(form);
//   ...on submit: body: JSON.stringify({ ...payload, ...(await guard.fields()) })
//   ...after the fetch resolves (success or error): guard.reset()
import { TURNSTILE_SITE_KEY } from '../data/site';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      getResponse: (id: string) => string | undefined;
      reset: (id: string) => void;
    };
  }
}

const SCRIPT_ID = 'cf-turnstile-script';

function ensureTurnstileScript(): void {
  if (document.getElementById(SCRIPT_ID)) return;
  const s = document.createElement('script');
  s.id = SCRIPT_ID;
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export interface FormGuard {
  fields: () => Promise<Record<string, string>>;
  reset: () => void;
}

export function guardForm(form: HTMLFormElement): FormGuard {
  // 1. honeypot (inline styles: scoped component CSS cannot reach injected nodes)
  const hp = document.createElement('input');
  hp.type = 'text';
  hp.name = 'website';
  hp.tabIndex = -1;
  hp.autocomplete = 'off';
  hp.setAttribute('aria-hidden', 'true');
  hp.style.cssText = 'position:absolute;left:-9999px;top:auto;width:1px;height:1px;opacity:0;pointer-events:none';
  form.appendChild(hp);

  // 2. armed-at timestamp
  const armedAt = Date.now();

  // 3. Turnstile, only when the site key is configured
  let widgetId: string | null = null;
  if (TURNSTILE_SITE_KEY) {
    ensureTurnstileScript();
    const slot = document.createElement('div');
    slot.style.cssText = 'margin-top:10px';
    form.appendChild(slot);
    const tryRender = () => {
      if (widgetId !== null) return;
      if (window.turnstile) {
        widgetId = window.turnstile.render(slot, {
          sitekey: TURNSTILE_SITE_KEY,
          appearance: 'interaction-only', // invisible unless a challenge is needed
          'refresh-expired': 'auto',
          'response-field': false,
        });
      } else {
        setTimeout(tryRender, 250);
      }
    };
    tryRender();
  }

  async function fields(): Promise<Record<string, string>> {
    let token = '';
    if (TURNSTILE_SITE_KEY) {
      // token is usually ready long before a human submits; wait briefly if not
      for (let i = 0; i < 12; i++) {
        token = (widgetId !== null && window.turnstile?.getResponse(widgetId)) || '';
        if (token) break;
        await new Promise((r) => setTimeout(r, 250));
      }
    }
    return { website: hp.value, hpt: String(armedAt), turnstileToken: token };
  }

  function reset(): void {
    // tokens are single-use: refresh after every submit attempt
    if (widgetId !== null && window.turnstile) window.turnstile.reset(widgetId);
  }

  return { fields, reset };
}
