/// <reference types="@cloudflare/workers-types" />

import { classifyEmail, EMAIL_DOMAIN_MESSAGES } from '../../src/data/free-email-domains';

interface Env {
  PLUNK_PUBLIC_KEY?: string; // pk_ — records form events via /v1/track
  PLUNK_SECRET_KEY?: string; // sk_ — reserved for sending email via /v1/send (team alerts)
  PLUNK_API_BASE?: string;
}

// Map the form identifier sent by the browser to a server-side Plunk event name.
// Resolving the event here (instead of trusting a name from the client) means
// visitors can't fire arbitrary events into your Plunk project. Rename these to
// match the events/automations you set up in Plunk.
const EVENT_BY_FORM: Record<string, string> = {
  waitlist: 'waitlist-signup',
  'publish-track': 'publish-track-waitlist',
  newsletter: 'newsletter-signup',
  'book-a-call': 'book-a-call-request',
  contact: 'contact-form',
};

// Forms that accept any email address (no corporate-only rule). The general
// contact form lets anyone reach us; the sales/waitlist forms stay corporate-only.
const UNGATED_FORMS = new Set<string>(['contact']);

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Keep free-text fields short so a form can't push large payloads into Plunk.
const clip = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

// Sanitize an arbitrary { key: value } map of extra form fields (book-a-call etc.):
// cap the number of keys, clip each value, and drop empties.
function sanitizeFields(input: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (input && typeof input === 'object') {
    let n = 0;
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (n++ >= 40) break;
      const val = clip(v, 2000);
      if (val) out[String(k).slice(0, 60)] = val;
    }
  }
  return out;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // /v1/track authenticates with the PUBLIC key (pk_); the secret key only works on
  // other endpoints. Prefer the public key, and fall back to PLUNK_SECRET_KEY only so
  // an older setup that put the right value in the wrong var keeps working.
  const trackKey = env.PLUNK_PUBLIC_KEY || env.PLUNK_SECRET_KEY;
  if (!trackKey) {
    return json({ ok: false, error: 'Server is not configured.' }, 500);
  }

  let email = '';
  let form = 'waitlist';
  let name = '';
  let company = '';
  let message = '';
  let extraFields: Record<string, string> = {};
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const body = (await request.json()) as Record<string, unknown>;
      email = clip(body.email, 200);
      form = clip(body.form, 60) || 'waitlist';
      name = clip(body.name, 120);
      company = clip(body.company, 160);
      message = clip(body.message, 2000);
      extraFields = sanitizeFields(body.fields);
    } else {
      const data = await request.formData();
      email = clip(data.get('email'), 200);
      form = clip(data.get('form'), 60) || 'waitlist';
      name = clip(data.get('name'), 120);
      company = clip(data.get('company'), 160);
      message = clip(data.get('message'), 2000);
    }
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Please provide a valid email address.' }, 422);
  }

  // Authoritative corporate-email gate (the client check is UX only and can be
  // bypassed). Blocks competitor domains and free providers using the full list.
  // Skipped for ungated forms like the general contact form.
  if (!UNGATED_FORMS.has(form)) {
    const verdict = classifyEmail(email);
    if (verdict === 'blocked') {
      return json({ ok: false, error: EMAIL_DOMAIN_MESSAGES.blocked }, 422);
    }
    if (verdict === 'free') {
      return json({ ok: false, error: EMAIL_DOMAIN_MESSAGES.free }, 422);
    }
  }

  const event = EVENT_BY_FORM[form] ?? EVENT_BY_FORM.waitlist;
  const base = (env.PLUNK_API_BASE || 'https://api.useplunk.com').replace(/\/+$/, '');

  // Only send fields that were filled, so empty values don't clutter Plunk.
  const data: Record<string, string> = { source: form, ...extraFields };
  if (name) data.name = name;
  if (company) data.company = company;
  if (message) data.message = message;

  try {
    const res = await fetch(`${base}/v1/track`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${trackKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        email,
        subscribed: true,
        data,
      }),
    });

    // Any non-2xx is a failure. Plunk's success envelope differs across API
    // versions, so we check `success` only when present and never rely on shape.
    if (!res.ok) {
      return json({ ok: false, error: 'Subscription service error.' }, 502);
    }
    const payload = (await res.json().catch(() => ({}))) as { success?: boolean };
    if (payload && payload.success === false) {
      return json({ ok: false, error: 'Subscription was rejected.' }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'Could not reach subscription service.' }, 502);
  }
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
