---
title: "Manually update a contact's status"
description: "Set a contact's status yourself to stop a flow for that contact or let it carry on, for example when a conversation has moved offline or an out-of-office reply stopped it."
category: "Data"
order: 5
estMinutes: 3
stepCount: 6
appliesTo: "All plans"
prerequisites: "Contacts in your hubsell account. Your role must allow you to change contact status."
updated: 2026-11-16
faqs:
  - q: "Why do contact statuses exist?"
    a: "A flow is meant to run only until the contact replies. Once they do, the flow stops for that contact and the conversation is yours. The status records where each contact stands."
  - q: "Which statuses stop a flow?"
    a: "Of the statuses you can set, every one except Auto stops the flow for that contact: all Replied Positive, Neutral and Negative options, Replied via other contact, Targeted via other channels, Unsubscribe and Bounced. Auto lets the flow carry on."
  - q: "A flow stopped because of an out-of-office reply. How do I resume it?"
    a: "Set the contact's status to Auto. The flow then carries on with its next steps."
  - q: "Why does Bounced ask for an email?"
    a: "hubsell records a bounce together with the bounce message, so it asks you to paste the message you received."
  - q: "Can I filter contacts by status?"
    a: "Yes. On the Contacts page, click Show/hide filters and use Status under Engagement."
draft: false
---
<!-- sources: hubsell-client src/components/data/contacts/contact-listing.tsx, src/components/data/contacts/contact-actions-bar/{index,actionsConfig,ActionDropdown,change-status}.tsx, src/app/data/contacts/{layout.tsx,contact.service.ts}, src/i18n/statusLabels.ts, src/i18n/messages/en/{contacts,common}.json; hubsell-api server/services/components/leads/status.js, server/controllers/prospectController.js (markCustomStatus); hubsell-mailer server/services/mailer/{flowEmailJobProcessor,flowEmailTemplateJobCreator}.js (replied statuses stop sending) -->
<p>A flow is meant to run only until the contact replies. Once they do, the flow stops for that contact and the conversation is handed over to you. Statuses record where each contact stands, and setting one yourself tells hubsell that a conversation has moved on, for example to a phone call.</p>

<div class="kb-callout kb-callout--tip">
  <p><b>Auto</b> is the only status you can set that lets the flow carry on. Every other one stops it for that contact: all Replied Positive, Neutral and Negative options, Replied via other contact, Targeted via other channels, Unsubscribe and Bounced.</p>
</div>

<h2 class="kb-sub">Set a status</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Contacts</span>.</p>
  </li>
  <li>
    <p>Find the contacts: type a name into the search box, or click <span class="kb-kbd">Show/hide filters</span>, choose your filters and click <span class="kb-kbd">Apply changes</span>.</p>
  </li>
  <li>
    <p>Tick the contacts you want to update.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Update status</span> above the table. If you don't see it, click the <b>&#8230;</b> button, which holds the actions that don't fit.</p>
  </li>
  <li>
    <p>Click the status you want to set.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts page with one contact selected and the Update status menu open, listing the eleven statuses you can set. Auto is marked.">
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
              <span class="kb-ui__btn">&#10005; 1 selected</span>
              <span class="kb-ui__btn">Enrich data</span>
              <span class="kb-ui__btn">Add to flow</span>
              <span class="kb-ui__btn">Change list</span>
              <span class="kb-ui__btn">Edit data</span>
              <span class="kb-ui__btn is-marked">Update status</span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-start;width:260px">
              <span>Replied Neutral: Postponement</span>
              <span>Replied Neutral: Referral</span>
              <span>Replied Negative: Wrong Identity</span>
              <span>Replied Negative: Not Interested</span>
              <span>Unsubscribe</span>
              <span>Replied via other contact</span>
              <span>Targeted via other channels</span>
              <span>Replied Positive: Next Stage</span>
              <span>Replied Positive: Referral</span>
              <span class="is-marked">Auto</span>
              <span>Bounced</span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th></th><th>Contact</th><th>Company</th><th>Status</th></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>Brightpath Software</td><td>Replied</td></tr>
              <tr><td><span class="kb-ui__box"></span></td><td>Lena Vos</td><td>Kestrel Analytics</td><td>In Cadence</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>The statuses you can set</figcaption>
    </figure>
  </li>
  <li>
    <p>If you selected 100 contacts or more, type the number of contacts into the box and click <span class="kb-kbd">Update</span>.</p>
  </li>
</ol>

<h2 class="kb-sub">Mark a contact as bounced</h2>
<p>When you click <span class="kb-kbd">Bounced</span>, a window called <b>Bounce prospects</b> opens. Paste the body of the bounce message you received and click <span class="kb-kbd">Change status</span>.</p>
<figure class="kb-figure">
  <div class="kb-ui" role="img" aria-label="The Bounce prospects window with a pasted bounce message and the Change status button marked.">
    <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
    <div class="kb-ui__overlay" aria-hidden="true">
      <div class="kb-ui__card">
        <div>
          <p class="kb-ui__title">Bounce prospects</p>
          <p class="kb-ui__muted">Please paste the body of the bounced email here</p>
        </div>
        <span class="kb-ui__input" style="min-height:90px">Delivery to the following recipient failed permanently: tom.fischer@example.com</span>
        <div class="kb-ui__actions">
          <span class="kb-ui__btn">Cancel</span>
          <span class="kb-ui__btn is-primary is-marked">Change status</span>
        </div>
      </div>
    </div>
  </div>
  <figcaption>Pasting the bounce message</figcaption>
</figure>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The status is updated.</b> The change runs in the background and shows in the <b>Status</b> column. Contacts on Auto keep getting the flow's next steps; any other status stops the flow for them, so the conversation stays with you.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistake</p>
  <ul>
    <li><b>An out-of-office reply was counted as a reply.</b> The contact then gets no more steps. Set the status to <b>Auto</b> and the flow carries on.</li>
    <li><b>Some contacts were skipped.</b> You can only change contacts your role allows, usually your own. hubsell changes the rest and tells you how many it skipped.</li>
  </ul>
</div>
