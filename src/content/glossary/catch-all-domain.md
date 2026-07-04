---
term: "Catch-all domain"
category: "Data and enrichment"
definition: "A catch-all domain is an email domain set up to accept mail for any address, which makes it hard to tell whether a specific mailbox actually exists."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "July 2026"
---

## Why it matters

Catch-all domains break normal email verification. A standard check asks the mail server whether an address exists, but a catch-all server says yes to everything, so the check cannot confirm the mailbox is real. Send to it anyway and the message may bounce later or land nowhere, which quietly raises your bounce rate and hurts deliverability.

## How it works in practice

On a normal domain, the receiving server rejects mail to an address that does not exist, which lets a verifier confirm the mailbox. A catch-all domain is configured to accept all mail and sort or discard it after the fact, so the server accepts every address at check time. Verifiers can only mark these as risky, not valid, so they need extra handling.

## Common mistakes

The mistake is treating catch-all addresses as verified and sending to them at volume. They pass a naive check but a share of them are not real mailboxes, so they bounce or disappear. Ignoring the catch-all flag is one of the fastest ways to run up a bounce rate on an otherwise clean list.

## How hubsell approaches it

hubsell flags catch-all domains during its point-of-use verification, so these risky addresses are identified before a credit is spent, rather than after a bounce.
