---
title: "Move contacts between lists"
description: "Reorganise your contacts by moving them from one list to another, without changing their status, tags or flows."
category: "Data"
order: 3
estMinutes: 3
stepCount: 7
appliesTo: "All plans"
prerequisites: "Contacts in a hubsell list. Your role must allow you to move contacts."
updated: 2026-11-16
faqs:
  - q: "Can a contact be in more than one list?"
    a: "No. A contact sits in one list at a time, so moving it to another list takes it out of the one it was in."
  - q: "Does moving a contact affect its flow, status or tags?"
    a: "No. Moving only changes the list. The contact keeps its status and tags, and stays in any flow it is in."
  - q: "Can I move contacts into a new list?"
    a: "Yes. In the Change list menu, type a name of at least three characters and click Create list. The new list is selected straight away."
  - q: "Why were some contacts skipped?"
    a: "You can only move contacts out of lists you're allowed to change, and only into a list you may change. hubsell moves the rest and tells you how many it skipped and why."
draft: false
---
<!-- sources: hubsell-client src/components/data/contacts/contact-listing.tsx, src/components/filters/FiltersBody.tsx, src/components/selectionMenu/index.tsx, src/components/data/contacts/contact-actions-bar/{index,actionsConfig,move-to-list}.tsx, src/components/stylesComponents/OverflowActions.tsx, src/i18n/messages/en/{contacts,data,common}.json; hubsell-api server/controllers/prospectController.js (moveProspectsToList), server/routes.js -->
<p>Lists are how you organise contacts so you can find and filter them. Moving contacts between lists is tidying up: it changes where a contact lives, not what happens to it.</p>

<div class="kb-callout kb-callout--tip">
  <p>A contact sits in <b>one list at a time</b>. Moving it to another list takes it out of the one it was in. Its status, tags and flows stay as they are.</p>
</div>

<h2 class="kb-sub">Move the contacts</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Contacts</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Show/hide filters</span>, choose the filters that find the contacts you want to move (for example a list under <b>Lists</b>, or a tag under <b>Tags</b>), and click <span class="kb-kbd">Apply changes</span>.</p>
  </li>
  <li>
    <p>Tick the contacts you want to move. To take every contact that matches the filters, tick the box in the table header and click <span class="kb-kbd">Select all</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Change list</span> above the table. If you don't see it, click the <b>&#8230;</b> button, which holds the actions that don't fit.</p>
  </li>
  <li>
    <p>Click the list you want to move the contacts to. Type in the search box to find it in a long list.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts page with 3 contacts selected and the Change list menu open: the list Logistics CFOs is chosen and the Move to list button is marked.">
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
              <span class="kb-ui__btn">&#10005; 3 selected</span>
              <span class="kb-ui__btn">Enrich data</span>
              <span class="kb-ui__btn">Add to flow</span>
              <span class="kb-ui__btn is-marked">Change list</span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-start;gap:2px;width:280px">
              <span class="kb-ui__input">Logi</span>
              <span class="kb-ui__row is-marked" style="gap:8px"><span class="kb-ui__box is-on" style="border-radius:50%"></span>Logistics CFOs</span>
              <span class="kb-ui__actions" style="padding-top:8px">
                <span class="kb-ui__btn">Create list</span>
                <span class="kb-ui__btn is-marked">Move to list</span>
              </span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th></th><th>Contact</th><th>Company</th><th>List Name</th></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Anna Berger</td><td>Northwind Logistics</td><td>DACH sales leaders</td></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>Brightpath Software</td><td>DACH sales leaders</td></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Lena Vos</td><td>Kestrel Analytics</td><td>DACH sales leaders</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>Choosing the list to move the contacts to</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Move to list</span>.</p>
  </li>
  <li>
    <p>If you selected 100 contacts or more, hubsell asks you to confirm. Type the number of contacts into the box and click <span class="kb-kbd">Move</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Change list confirmation for 148 contacts moving to Logistics CFOs, with the number typed in and the Move button marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__overlay" aria-hidden="true">
          <div class="kb-ui__card">
            <div>
              <p class="kb-ui__title">Change list</p>
              <p class="kb-ui__muted">Selected contacts will be moved to the <b>"Logistics CFOs"</b> list.</p>
            </div>
            <span class="kb-ui__input">148</span>
            <div class="kb-ui__actions">
              <span class="kb-ui__btn">Cancel</span>
              <span class="kb-ui__btn is-primary is-marked">Move</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Confirming a move of 100 contacts or more</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are moving.</b> The move runs in the background, and a message confirms it. The contacts then show the new list in the <b>List Name</b> column, with their status, tags and flows unchanged.</p>
</div>

<p>Want to move the contacts that miss an email address or a LinkedIn URL? See <a href="/knowledge/isolate-contacts-missing-email-or-linkedin/">Isolate contacts with no email address or LinkedIn URL</a>.</p>
