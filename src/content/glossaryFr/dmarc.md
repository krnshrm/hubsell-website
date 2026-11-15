---
term: "DMARC"
category: "Deliverability"
definition: "DMARC is an email authentication policy that tells receiving servers what to do when a message fails SPF and DKIM, and reports on who is sending as your domain."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "July 2026"
---

## Why it matters

DMARC ties SPF and DKIM together and gives you control and visibility. It tells providers to allow, quarantine, or reject mail that fails the checks, which protects your domain from spoofing and protects recipients from fraud sent in your name. It has also become close to mandatory: major providers now expect a DMARC policy from bulk senders.

## How it works in practice

DMARC is a DNS record that sets a policy (none, quarantine, or reject) and an address for reports. When a message fails both SPF and DKIM alignment, the receiving server applies your policy. The reports show which servers are sending as your domain, so you can spot abuse and confirm your own tools are aligned before you tighten the policy.

## Common mistakes

A common mistake is jumping straight to a reject policy before confirming all your legitimate senders pass, which blocks your own mail. The opposite mistake is leaving the policy at none forever, so it never actually protects anything. A third is never reading the reports, which are the whole point of the visibility.

## How hubsell approaches it

hubsell helps you align your sending with DMARC and move safely from monitoring to enforcement, so your domain is protected without blocking your own outreach.
