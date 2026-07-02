// Central destinations for the primary CTAs, so there's one place to update.
// Login points at https://app.hubsell.com/. SIGNUP_URL is the trial CTA target.
// There is no signup page yet, so it is temporarily routed to the book-a-call
// page. When signup goes live, set SIGNUP_URL back to
// 'https://app.hubsell.com/signup' — every "Book a demo" button reads this
// one constant, so that single edit restores the real flow everywhere.
export const SIGNUP_URL = '/book-a-call';
export const LOGIN_URL = 'https://app.hubsell.com/';
export const DEMO_URL = '/book-a-call';
