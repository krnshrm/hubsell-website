---
title: "Isolate contacts with no email address or LinkedIn URL"
description: "Filter a list for contacts without an email address or a LinkedIn URL, and move them into a list of their own so they don't sit unnoticed in your outreach."
category: "Data"
order: 4
estMinutes: 4
stepCount: 11
appliesTo: "All plans"
prerequisites: "Contacts already in a hubsell list."
updated: 2026-11-16
faqs:
  - q: "Why isolate contacts with no email address?"
    a: "An email step can't reach a contact without an email address, and a LinkedIn step can't reach one without a LinkedIn URL. In a list of their own you can see them, enrich them, or send them through the channel they can still be reached on."
  - q: "Can I filter for missing email and missing LinkedIn URL at the same time?"
    a: "You can, but then you only see contacts that miss both. Do one field at a time, so each group goes into its own list."
  - q: "Do I need to create the new list first?"
    a: "No. In the Change list menu, type a new list name and click Create list. The list is created and selected straight away."
  - q: "Why are some contacts missing from the results?"
    a: "The Contacts page starts with three filters on: not suppressed, not unsubscribed, and enrichment completed. Contacts that are still being enriched appear once they're done."
draft: false
---
<!-- sources: hubsell-client src/components/data/contacts/contact-listing.tsx, src/components/filters/{FilterPanel,FiltersBody,index}.tsx, src/app/data/contacts/contact.service.ts (getFilterConfigNew), src/lib/default-views.ts, src/components/data/contacts/columns.tsx, src/components/selectionMenu/index.tsx, src/components/data/contacts/contact-actions-bar/{index,move-to-list}.tsx, src/i18n/messages/en/{contacts,data,common,nav}.json -->
<p>Contacts without an email address can't get your emails, and contacts without a LinkedIn URL can't get your LinkedIn steps. Filter for them, then move them into a list of their own, so you decide what happens to them instead of a flow quietly passing them by.</p>

<div class="kb-callout kb-callout--tip">
  <p>Filter on <b>one field at a time</b>. Isolating missing emails and missing LinkedIn URLs separately puts each group in its own list, ready for the channel it can still be reached on.</p>
</div>

<h2 class="kb-sub">Filter for the missing field</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Contacts</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Show/hide filters</span> above the table.</p>
  </li>
  <li>
    <p>Under <b>Data</b>, click <span class="kb-kbd">Lists</span> and tick the list you want to check.</p>
  </li>
  <li>
    <p>Under <b>Contact data</b>, click <span class="kb-kbd">Contact email</span> or <span class="kb-kbd">Contact LinkedIn URL</span> and tick <span class="kb-kbd">Is unknown</span>. This leaves only the contacts where that field is empty.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Apply changes</span> at the bottom of the filters.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The contact filters: the list DACH sales leaders is ticked under Lists, Is unknown is ticked under Contact email and marked, and the Apply changes button is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item is-active">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item">Flows</span>
            <span class="kb-ui__item">Tasks</span>
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <span class="kb-ui__btn">Saved filters</span>
              <span class="kb-ui__btn">Show/hide filters</span>
            </div>
            <div class="kb-ui__tablewrap kb-ui__stack" style="padding:12px;gap:8px;max-width:320px">
              <p class="kb-ui__label">Data</p>
              <div class="kb-ui__tablewrap kb-ui__stack" style="padding:8px 10px;gap:6px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Lists</span><span class="kb-ui__muted">&#8722;</span></div>
                <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><b>DACH sales leaders</b></p>
                <p class="kb-ui__check"><span class="kb-ui__box"></span><b>Logistics CFOs</b></p>
              </div>
              <p class="kb-ui__label">Contact data</p>
              <div class="kb-ui__tablewrap kb-ui__stack" style="padding:8px 10px;gap:6px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Contact email</span><span class="kb-ui__muted">&#8722;</span></div>
                <p class="kb-ui__check is-marked"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><b>Is unknown</b></p>
              </div>
              <div class="kb-ui__tablewrap" style="padding:8px 10px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Contact LinkedIn URL</span><span class="kb-ui__muted">+</span></div>
              </div>
              <div class="kb-ui__actions">
                <span class="kb-ui__btn">Reset</span>
                <span class="kb-ui__btn is-primary is-marked">Apply changes (5)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Filtering one list for contacts with no email address</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub">Move them into a new list</h2>
<ol class="kb-steps" start="6">
  <li>
    <p>Tick the box in the table header. A menu opens.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Select all</span> to take every contact that matches the filters, not only the ones on this page.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The selection menu under the table header checkbox: Select e.g. 100 contacts, Select this page (25) and Select all (148), which is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item is-active">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item">Flows</span>
            <span class="kb-ui__item">Tasks</span>
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></th><th>Contact</th><th>Company</th><th>List Name</th></tr>
            </table></div>
            <div class="kb-ui__menu" style="align-self:flex-start;gap:2px">
              <span class="kb-ui__row" style="gap:8px"><span class="kb-ui__box" style="border-radius:50%"></span>Select <span class="kb-ui__input is-placeholder" style="min-height:0;padding:1px 6px;font-size:12px">e.g. 100</span> contacts</span>
              <span class="kb-ui__row" style="gap:8px"><span class="kb-ui__box" style="border-radius:50%"></span>Select this page <span class="kb-ui__muted">(25)</span></span>
              <span class="kb-ui__row is-marked" style="gap:8px"><span class="kb-ui__box is-on" style="border-radius:50%"></span>Select all <span class="kb-ui__muted">(148)</span></span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Selecting every contact that matches the filters</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Change list</span> above the table. If you don't see it, click the <b>&#8230;</b> button, which holds the actions that don't fit.</p>
  </li>
  <li>
    <p>Type a name for the new list, for example <i>DACH sales leaders, no email</i>, and click <span class="kb-kbd">Create list</span>. To use a list you already have, click its name instead.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Change list menu: the new list DACH sales leaders, no email is selected, and the Move to list button is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item is-active">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item">Flows</span>
            <span class="kb-ui__item">Tasks</span>
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <span class="kb-ui__btn">&#10005; 148 selected</span>
              <span class="kb-ui__btn">Enrich data</span>
              <span class="kb-ui__btn">Add to flow</span>
              <span class="kb-ui__btn is-marked">Change list</span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-start;gap:2px;width:280px">
              <span class="kb-ui__input is-placeholder">Search...</span>
              <span class="kb-ui__row" style="gap:8px"><span class="kb-ui__box" style="border-radius:50%"></span>DACH sales leaders</span>
              <span class="kb-ui__row" style="gap:8px"><span class="kb-ui__box" style="border-radius:50%"></span>Logistics CFOs</span>
              <span class="kb-ui__row" style="gap:8px"><span class="kb-ui__box is-on" style="border-radius:50%"></span>DACH sales leaders, no email</span>
              <span class="kb-ui__actions" style="padding-top:8px">
                <span class="kb-ui__btn">Create list</span>
                <span class="kb-ui__btn is-marked">Move to list</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Choosing the new list and moving the contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Move to list</span>.</p>
  </li>
  <li>
    <p>If you selected 100 contacts or more, type the number of contacts into the box and click <span class="kb-kbd">Move</span>.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The gaps are isolated.</b> The move runs in the background. Your new list holds only the contacts missing that field, so you can <a href="/knowledge/data-enrichment/">enrich</a> them, reach them on another channel, or leave them out of your next flow on purpose.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Good to know</p>
  <ul>
    <li><b>Create list stays off.</b> Type at least three characters, and a name that isn't already a list.</li>
    <li><b>Some contacts were skipped.</b> You can only move contacts in lists you're allowed to change. hubsell moves the rest and tells you how many it skipped.</li>
  </ul>
</div>
