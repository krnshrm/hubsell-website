/// <reference types="@cloudflare/workers-types" />

interface Env {
  PLUNK_SECRET_KEY: string;
  PLUNK_API_BASE?: string;
}

// Map the form identifier sent by the browser to a server-side Plunk event name.
// Resolving the event here (instead of trusting a name from the client) means
// visitors can't fire arbitrary events into your Plunk project. Rename these to
// match the events/automations you set up in Plunk.
const EVENT_BY_FORM: Record<string, string> = {
  waitlist: 'waitlist-signup',
  'publish-track': 'publish-track-waitlist',
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.PLUNK_SECRET_KEY) {
    return json({ ok: false, error: 'Server is not configured.' }, 500);
  }

  let email = '';
  let form = 'waitlist';
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const body = (await request.json()) as { email?: string; form?: string };
      email = (body.email || '').trim();
      form = (body.form || 'waitlist').trim();
    } else {
      const data = await request.formData();
      email = String(data.get('email') || '').trim();
      form = String(data.get('form') || 'waitlist').trim();
    }
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Please provide a valid email address.' }, 422);
  }

  const event = EVENT_BY_FORM[form] ?? EVENT_BY_FORM.waitlist;
  const base = (env.PLUNK_API_BASE || 'https://api.useplunk.com').replace(/\/+$/, '');

  try {
    const res = await fetch(`${base}/v1/track`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.PLUNK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        email,
        subscribed: true,
        data: { source: form },
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
