---
name: site-analysis
description: Run the standard hubsell.com site analysis (search visibility, conversion, lead quality) from GSC, GA4 and Plunk, and turn it into ranked tasks. Use when asked to run the weekly, biweekly or monthly analysis, or a single numbered analysis such as 1.3, or asked how the site is performing.
argument-hint: weekly | biweekly | monthly | <analysis number, e.g. 1.3>
---

Run the site analysis for: $ARGUMENTS (default: weekly).

1. Read `docs/20261009-1447-SITE-ANALYSIS-PLAYBOOK.md` in full. It holds every
   recipe, rule and threshold. Follow it exactly; do not improvise recipes.
2. Read the newest `docs/analyses/*-TASK-LEDGER.md`.
3. Load the GA4 (`mcp__analytics-mcp__*`), GSC (`mcp__gscServer__*`) and, for Part 3,
   Plunk tools with ToolSearch before the first call.
4. Run the health check, then the analyses the playbook lists for this cadence.
5. Write the report to `docs/analyses/YYYYMMDD-HHMM-<CADENCE>-REPORT.md` and update
   the ledger in place.
6. Do not change site code. In chat, give the health result, the top 10 and the
   path of the report.
