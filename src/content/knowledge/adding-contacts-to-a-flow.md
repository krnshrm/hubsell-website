---
title: "Add contacts to a flow"
description: "Filter your contacts, select the ones you want, pick the sender and add them to a Flow, so your outreach starts."
category: "Getting started"
order: 7
series: "First login to first campaign"
seriesStep: 7
seriesTotal: 8
estMinutes: 4
stepCount: 11
appliesTo: "All plans"
prerequisites: "Contacts in a hubsell list, and a Flow you have built."
updated: 2026-11-16
faqs:
  - q: "Why is the Add to flow button greyed out?"
    a: "Pick both a sender under Select a user and a Flow in the list. The button works once both are chosen."
  - q: "What does Force add do?"
    a: "When some of the selected contacts are already in another Flow, hubsell stops and says Some contacts are in another flow. Force add adds them anyway; Skip cancels."
  - q: "Why isn't my Flow in the list?"
    a: "Archived Flows aren't offered. Pick a Flow that is New, Active or Paused."
  - q: "Can I add a single contact?"
    a: "Yes. Click the contact to open its details, then click Add (their name) to a flow, or select just that one contact in the list."
  - q: "Which contacts does a Flow skip?"
    a: "Contacts who are suppressed or have already replied. Email steps also skip contacts without an email address, and LinkedIn steps contacts without a valid LinkedIn URL. The Flow's History lists them under Skipped."
next:
  label: "Invite team members"
  href: "/knowledge/invite-team-members/"
draft: false
---
<!-- sources: hubsell-client src/app/data/contacts/contact.service.ts (getFilterConfigNew), src/components/data/contacts/contact-listing.tsx, src/components/filters/FiltersBody.tsx, src/components/filters/FilterPanel.tsx, src/components/selectionMenu/index.tsx, src/components/data/contacts/contact-actions-bar/index.tsx, src/components/data/contacts/contact-actions-bar/actionsConfig.ts, src/components/data/contacts/contact-actions-bar/add-to-flow.tsx, src/i18n/messages/en/contacts.json, src/i18n/messages/en/data.json, src/i18n/messages/en/common.json, src/i18n/messages/en/flows.json -->
<p>Adding contacts to a Flow is what starts your outreach. Most of the work is the filtering: getting the right people selected before you hand them to the Flow.</p>

<h2 class="kb-sub">Filter your contacts</h2>
<ol class="kb-steps">
  <li>
    <p>In the left sidebar, click <span class="kb-kbd">Contacts</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Show/hide filters</span> above the list.</p>
  </li>
  <li>
    <p>Under <b>Lists</b>, tick your list.</p>
  </li>
  <li>
    <p>Under <b>Status</b>, tick <b>New</b> to leave out contacts you have already reached.</p>
  </li>
  <li>
    <p>For a Flow with email steps, tick <b>Has email</b> under <b>Enrichment level</b>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Apply changes</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts page with the filter panel open: Enrichment level with Has email ticked, Lists with one list ticked, Status with New ticked, and the Apply changes button, which is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__toolbar">
            <span class="kb-ui__btn">Saved filters</span>
            <span class="kb-ui__btn" style="margin-right:auto">Show/hide filters</span>
            <span class="kb-ui__btn is-primary">Add data</span>
          </div>
          <div class="kb-ui__card" style="max-width:340px;padding:16px;gap:10px;font-size:13px">
            <span class="kb-ui__group" style="padding:0">Enrichment</span>
            <b>Enrichment level</b>
            <p class="kb-ui__check"><span class="kb-ui__box"></span><span>Has LinkedIn data</span></p>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">Has email</span></p>
            <span class="kb-ui__group" style="padding:0">Data</span>
            <b>Lists</b>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">DACH logistics leaders</span></p>
            <span class="kb-ui__group" style="padding:0">Engagement</span>
            <b>Status</b>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">New</span></p>
            <div class="kb-ui__actions"><span class="kb-ui__btn">Reset</span><span class="kb-ui__btn is-primary is-marked">Apply changes (3)</span></div>
          </div>
        </div>
      </div>
      <figcaption>Filtering the contacts</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub">Select the contacts</h2>
<ol class="kb-steps">
  <li>
    <p>Tick the checkbox in the header of the list. This selects the contacts on this page. To take every contact that matches your filters, choose <span class="kb-kbd">Select all</span> in that checkbox's menu instead.</p>
  </li>
</ol>

<h2 class="kb-sub">Add them to the Flow</h2>
<ol class="kb-steps">
  <li>
    <p>Click <span class="kb-kbd">Add to flow</span> above the list. If it isn't shown there, open <span class="kb-kbd">More actions</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts list with three contacts selected. Above the list, 3 selected and the actions Enrich data, Add to flow and Remove from flow. Add to flow is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__toolbar">
            <span class="kb-ui__btn">&times; 3 selected</span>
            <span class="kb-ui__btn">Enrich data</span>
            <span class="kb-ui__btn is-marked">Add to flow</span>
            <span class="kb-ui__btn">Remove from flow</span>
          </div>
          <div class="kb-ui__tablewrap"><table class="kb-ui__table">
            <tr><th><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></th><th>Contact</th><th>Title</th><th>Company</th><th>Status</th></tr>
            <tr class="is-selected"><td><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>Head of Operations</td><td>Brightpath Software</td><td>New</td></tr>
            <tr class="is-selected"><td><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Lena Vos</td><td>Logistics Manager</td><td>Northwind Logistics</td><td>New</td></tr>
            <tr class="is-selected"><td><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Anna Berger</td><td>COO</td><td>Kestrel Analytics</td><td>New</td></tr>
          </table></div>
        </div>
      </div>
      <figcaption>The selected contacts and their actions</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Select a user</span> and pick the teammate the outreach goes out from. The Flow uses their mailbox and LinkedIn.</p>
  </li>
  <li>
    <p>Pick the Flow in the list.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Add to flow</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Add to flow panel: the sender picked under Select a user, marked 1, then a list of Flows with Brightpath outreach picked, marked 2, and the Add to flow button, marked 3.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__menu" style="width:300px;padding:10px;gap:8px">
            <span class="is-marked" style="color:var(--hs-primary,#192341)">Anna Berger &#9662;<span class="kb-ui__num">1</span></span>
            <span class="kb-ui__input is-placeholder">Search...</span>
            <span class="kb-ui__muted">&#9675; Kestrel Analytics follow-up</span>
            <span class="is-marked"><b>&#9673; Brightpath outreach</b><span class="kb-ui__num">2</span></span>
            <span class="kb-ui__muted">&#9675; Logistics leaders Q4</span>
            <div class="kb-ui__actions"><span class="kb-ui__btn is-primary is-marked">Add to flow<span class="kb-ui__num">3</span></span></div>
          </div>
        </div>
      </div>
      <figcaption>Choosing the sender and the Flow</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are on their way into the Flow.</b> hubsell confirms with <i>Your request to add the contacts to the flow has been received.</i> In the Flow editor, <span class="kb-kbd">Contacts</span> shows everyone in the Flow, and the trigger step counts them under Total, Started and Queued. The Drip Rate decides how many move from the queue to the first step.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistakes</p>
  <ul>
    <li><b>Contacts that don't match the Flow's channels.</b> Email steps skip contacts without an email address, and LinkedIn steps skip contacts without a valid LinkedIn URL. Filter on <b>Has email</b> or <b>Contact LinkedIn URL</b> first, or use a Flow for the channel they do have.</li>
    <li><b>The wrong sender.</b> The Flow sends from the user you pick under Select a user. Check that their mailbox and LinkedIn are connected.</li>
  </ul>
</div>
