---
term: "Bounce rate"
category: "Outbound and email"
definition: "Bounce rate is the share of sent emails that could not be delivered, and a high rate is an early warning of list quality and deliverability problems."
related:
  - email-verification
  - catch-all-domain
  - email-deliverability
  - open-rate
updated: "July 2026"
---

## Why it matters

Bounces are more than wasted sends. A high bounce rate tells mailbox providers your list is poor, which lowers your sender reputation and pushes even valid mail toward spam. Keeping bounces low is one of the most direct ways to protect deliverability. It is a symptom to watch and a cause to control.

## How it works in practice

A bounce is either hard, meaning the address does not exist, or soft, meaning a temporary issue like a full mailbox. Hard bounces are the ones that hurt reputation and come from invalid or decayed addresses. The fix is upstream: verify addresses before sending and remove ones that bounce, so the rate stays low across future sends.

## Common mistakes

The root mistake is sending to unverified or bought lists, which is the usual cause of a bounce spike. Another is ignoring a rising bounce rate until deliverability has already dropped. A third is not removing hard-bounced addresses, so the same bad records bounce again.

## How hubsell approaches it

hubsell verifies each contact at the point of use and flags catch-all domains, so invalid addresses are caught before send and the bounce rate stays low.
