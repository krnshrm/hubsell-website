---
term: "Email verification"
category: "Data and enrichment"
definition: "Email verification is the process of checking that an email address is valid and able to receive mail before you send to it."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "July 2026"
---

## Why it matters

Sending to invalid addresses causes bounces, and a high bounce rate damages your sender reputation, which then hurts delivery to good addresses too. Verification protects that reputation by filtering out bad addresses first. It is one of the cheapest ways to keep an outbound program healthy and its cost is far lower than the damage a bounce spike causes.

## How it works in practice

Verification checks an address in stages: the format is valid, the domain exists and accepts mail, and the specific mailbox responds. Catch-all domains, which accept mail for any address, are flagged as risky because the mailbox cannot be confirmed. Verification runs in bulk on a list or in real time as each address is added.

## Common mistakes

A frequent mistake is verifying once at import and never again, since addresses go bad over time. Another is sending to catch-all addresses as if they were confirmed. A third is skipping verification on small lists, where a few bounces still nudge the reputation in the wrong direction.

## How hubsell approaches it

hubsell verifies each contact at the point of use, including a catch-all check, so a credit is only spent on an address that can actually receive mail today.
