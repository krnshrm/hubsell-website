---
title: "Suppress and unsuppress contacts"
description: "Keep individual contacts out of your outreach without deleting them, and put them back when you want to."
category: "Data"
order: 2
estMinutes: 4
stepCount: 11
appliesTo: "All plans"
prerequisites: "Contacts already in your hubsell account. Your role must allow you to move contacts."
updated: 2026-11-16
faqs:
  - q: "What does suppressing a contact do?"
    a: "A suppressed contact stays in your account with all its data, but flows skip it and it can't be enriched."
  - q: "Can I undo suppression?"
    a: "Yes. Filter for suppressed contacts, select them and click Remove suppression. They go back to normal with no other change."
  - q: "Where do suppressed contacts go?"
    a: "The Contacts page hides them by default. Set the Suppression filter to Yes to see them, or click the number in the Suppressed column on the Lists page."
  - q: "When is the best time to suppress a contact?"
    a: "Before you enrich. Suppressed contacts can't be enriched, so you don't spend credits on people you will never contact."
draft: false
---
<!-- sources: hubsell-client src/components/data/contacts/contact-listing.tsx, src/components/data/contacts/contact-actions-bar/{index,actionsConfig,enrich-data}.tsx, src/components/stylesComponents/OverflowActions.tsx, src/components/filters/{FiltersBody,index}.tsx, src/app/data/contacts/contact.service.ts (getFilterConfigNew), src/lib/default-views.ts, src/components/data/lists/columns.tsx, src/i18n/messages/en/{contacts,data,common}.json; hubsell-api server/controllers/prospectController.js (addProspectsToSuppersionList); hubsell-mailer server/services/mailer/flowEmailTemplateJobCreator.js (suppressed contacts excluded) -->
<p>Suppression takes individual contacts out of your outreach without deleting them. A suppressed contact stays in your account and keeps its data, but flows skip it.</p>

<div class="kb-callout kb-callout--tip">
  <p>This is different from the <a href="/knowledge/suppression-list/">suppression list</a>, which blocks email addresses and whole domains for your entire account. Use the list for competitors and customers, and this for individual people in your lists.</p>
</div>

<h2 class="kb-sub">Suppress contacts</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Contacts</span>. It shows contacts that aren't suppressed.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Show/hide filters</span>, narrow down with <b>Lists</b> or <b>Tags</b>, and click <span class="kb-kbd">Apply changes</span>.</p>
  </li>
  <li>
    <p>Tick the contacts you want to suppress.</p>
  </li>
  <li>
    <p>Click the <b>&#8230;</b> button above the table, then <span class="kb-kbd">Suppress contacts</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts page with 2 contacts selected. The more actions button, marked as 1, is open and Suppress contacts is marked as 2.">
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
              <span class="kb-ui__btn">&#10005; 2 selected</span>
              <span class="kb-ui__btn">Enrich data</span>
              <span class="kb-ui__btn">Add to flow</span>
              <span class="kb-ui__btn is-marked">&#8230; <span class="kb-ui__badge">8</span><span class="kb-ui__num">1</span></span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-start;width:240px">
              <span>Change list</span>
              <span>Edit data</span>
              <span>Update status</span>
              <span>Edit tags</span>
              <span>Push to CRM</span>
              <span>Export to CSV</span>
              <span>Add to social connections</span>
              <span class="is-marked">Suppress contacts<span class="kb-ui__num">2</span></span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th></th><th>Contact</th><th>Company</th></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Anna Berger</td><td>Northwind Logistics</td></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>Brightpath Software</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>Suppress contacts is in the more actions menu</figcaption>
    </figure>
  </li>
  <li>
    <p>If you selected 100 contacts or more, hubsell asks you to confirm. Type the number of contacts into the box and click <span class="kb-kbd">Suppress</span>.</p>
  </li>
</ol>

<h2 class="kb-sub">Remove suppression</h2>
<ol class="kb-steps" start="6" style="counter-reset:step 5">
  <li>
    <p>On the Contacts page, click <span class="kb-kbd">Show/hide filters</span>.</p>
  </li>
  <li>
    <p>Under <b>Data</b>, click <span class="kb-kbd">Suppression</span> and choose <span class="kb-kbd">Yes</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Apply changes</span>. The table now shows suppressed contacts only.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The contact filters with the Suppression filter open and Yes chosen, marked, and the Apply changes button marked.">
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
              <div class="kb-ui__tablewrap" style="padding:8px 10px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Tags</span><span class="kb-ui__muted">+</span></div>
              </div>
              <div class="kb-ui__tablewrap" style="padding:8px 10px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Lists</span><span class="kb-ui__muted">+</span></div>
              </div>
              <div class="kb-ui__tablewrap kb-ui__stack" style="padding:8px 10px;gap:6px">
                <div class="kb-ui__row" style="justify-content:space-between"><span>Suppression</span><span class="kb-ui__muted">&#8722;</span></div>
                <p class="kb-ui__check is-marked"><span class="kb-ui__box is-on" style="border-radius:50%"></span><b>Yes</b></p>
                <p class="kb-ui__check"><span class="kb-ui__box" style="border-radius:50%"></span><b>No</b></p>
              </div>
              <div class="kb-ui__actions">
                <span class="kb-ui__btn">Reset</span>
                <span class="kb-ui__btn is-primary is-marked">Apply changes (3)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Showing suppressed contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Tick the contacts you want back. To take all of them, tick the box in the table header and click <span class="kb-kbd">Select all</span>.</p>
  </li>
  <li>
    <p>Click the <b>&#8230;</b> button above the table, then <span class="kb-kbd">Remove suppression</span>.</p>
  </li>
  <li>
    <p>If you selected 100 contacts or more, a <b>Please confirm</b> window opens. Type the number of contacts into the box and click <span class="kb-kbd">Yes</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Please confirm window for removing suppression from 120 contacts, with the number typed in and the Yes button marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__overlay" aria-hidden="true">
          <div class="kb-ui__card">
            <div>
              <p class="kb-ui__title">Please confirm</p>
              <p class="kb-ui__muted">Are you sure you want to remove the selected contacts from the suppression list?</p>
            </div>
            <span class="kb-ui__input">120</span>
            <div class="kb-ui__actions">
              <span class="kb-ui__btn">No</span>
              <span class="kb-ui__btn is-primary is-marked">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Confirming for 100 contacts or more</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are updated.</b> Suppressed contacts are skipped the next time a flow sends, and the ones you unsuppressed go back to normal with no other change. On the Lists page, the <b>Suppressed</b> column counts the suppressed contacts in each list.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Good to know</p>
  <ul>
    <li><b>Remove suppression isn't in the menu.</b> It only appears while the Suppression filter is set to Yes.</li>
    <li><b>Suppressing just before outreach.</b> By then the contacts may already be enriched, and the credits are spent. Suppress before you enrich.</li>
  </ul>
</div>
