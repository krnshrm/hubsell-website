# Blocking domains

How to stop an email domain from getting through the site forms (book-a-call, the SDR page modal, contact, newsletter). For throwaway domains, spam senders, and competitors.

## Quick reference

Block a throwaway or spam domain:

```bash
npm run block -- baddomain.com
npm run build
git add . && git commit -m "Block domain: baddomain.com" && git push
```

Block a competitor:

```bash
npm run block:competitor -- competitor.com
npm run build
git add . && git commit -m "Block competitor: competitor.com" && git push
```

Both commands accept several domains at once, separated by spaces. The push deploys the change; nothing else is needed.

## What happens to a blocked submitter

The form shows "This domain is restricted." (localized on de/nl pages). The check runs twice:

1. In the browser, for instant feedback while typing.
2. On the server at `/api/subscribe`, which is the authoritative gate. Disabling JavaScript does not get around it.

Subdomains are blocked automatically: blocking `virgilian.com` also blocks `mail.virgilian.com`.

Blocking is silent toward Plunk: a blocked submission never creates a contact or fires an event.

## The two lists

| List | File | For | Kept how |
| --- | --- | --- | --- |
| Ad-hoc blocks | `src/data/blocked-domains.ts` | Throwaways, spam, one-off junk | Alphabetical, one per line |
| Competitors | `COMPETITOR_DOMAINS` in `src/data/free-email-domains.ts` | Competitor companies | Grouped by category (data providers, engagement, LinkedIn automation, AI SDR); CLI additions land under an "Added via" marker at the end |

There is a third list in `free-email-domains.ts`, the ~4,000 free email providers (gmail, yahoo, and so on). That one is auto-generated from an upstream source and shows a different message ("Please use your corporate work email."). Do not edit it by hand.

## Editing by hand

Both lists are plain arrays, one quoted domain per line with a trailing comma. Adding or removing a line in the file does exactly what the commands do. To unblock a domain, delete its line, then build, commit, push.

## Rules the commands enforce

1. Domain shape is validated (`baddomain.com` works, `not a domain` is rejected).
2. Everything is lowercased.
3. Duplicates are skipped, including across the two lists, with a message saying where the domain already sits.

## Things to know

1. Blocking a competitor also blocks their employees who might genuinely want a demo. That is the intended trade-off; if it ever needs to change, the alternative is tagging instead of blocking (a Plunk event marking the lead as a competitor), which is a small build.
2. Blocking does not remove contacts that already reached Plunk. Delete those in the Plunk dashboard.
3. Integration partners (hubspot.com, salesforce.com, pipedrive.com) are deliberately NOT blocked, even where they have competing products. People on those domains are buyers.
