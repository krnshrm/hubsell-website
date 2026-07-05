---
term: "Spam trap"
category: "Deliverability"
definition: "A spam trap is an email address used by providers and blocklists to catch senders with poor list practices, since it should never receive legitimate mail."
related:
  - blocklist
  - sender-reputation
  - email-verification
  - bounce-rate
updated: "July 2026"
---

## Why it matters

Hitting a spam trap is a strong signal that your list is bought, scraped, or poorly maintained, and it can get your domain blocklisted fast. Because traps look like ordinary addresses, you cannot spot them by eye. Avoiding them comes down to good list hygiene, which is why verification and clean sourcing matter so much for protecting deliverability.

## How it works in practice

There are two main kinds. A pristine trap is an address created only to catch senders, never used to sign up for anything, so any mail to it means the address was scraped or guessed. A recycled trap is an old abandoned address that a provider reactivates as a trap, so hitting it means your list is stale. Both are seeded quietly across the web.

## Common mistakes

The root mistake is buying or scraping lists, which is how traps enter a database. Another is never cleaning old records, which is how recycled traps catch you. A third is ignoring rising bounce and complaint signals that often accompany a list full of traps.

## How hubsell approaches it

hubsell sources contacts live and verifies them at the point of use rather than working from bought lists, which is the surest way to keep spam traps out of your sending.
