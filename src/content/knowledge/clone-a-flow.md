---
title: "Clone an existing flow"
description: "Copy a Flow you already have, or one a teammate built, and adapt the copy instead of building it again."
category: "Flows"
order: 1
estMinutes: 3
stepCount: 6
appliesTo: "All plans. Your role must allow editing Flows."
prerequisites: "A Flow in your account, yours or a teammate's."
updated: 2026-11-16
faqs:
  - q: "Can I clone a teammate's Flow?"
    a: "Yes. Filter the Flows page by their name under User, then clone it. The copy belongs to you."
  - q: "What does the copy contain?"
    a: "The steps, branches and messages of the original. It starts with no contacts and the status New, so nothing is sent until you add contacts and launch it."
  - q: "Where is my copy?"
    a: "It's called like the original with (clone) at the end. If you filtered the list by a teammate, tick your own name under User again to see it."
  - q: "Why can't I edit a teammate's Flow directly?"
    a: "A teammate's Flow opens as View only: this flow belongs to a teammate. Clone it to make changes, or ask them or an account admin."
draft: false
---
<!-- sources: hubsell-client src/app/flows/(list)/(flows)/page.tsx, src/app/flows/(list)/(flows)/layout.tsx, src/components/flow/listing/index.tsx, src/components/flow/listing/actions-bar/index.tsx, src/components/flow/listing/actions-bar/actionsConfig.ts, src/components/filters/FiltersBody.tsx, src/components/flow/configure-flow/index.tsx, src/i18n/messages/en/flows.json, src/i18n/messages/en/data.json, src/i18n/messages/en/flowEditor.json; hubsell-api server/routes.js (flow clone), server/controllers/flowController.js (clone) -->
<p>Cloning saves building a Flow step by step. It's the quickest way to run a Flow that works for a new group of contacts, or to reuse what a teammate has built.</p>

<h2 class="kb-sub">Clone the Flow</h2>
<ol class="kb-steps">
  <li>
    <p>In the left sidebar, click <span class="kb-kbd">Flows</span>. The list starts with your own Flows that are New, Active or Paused.</p>
  </li>
  <li>
    <p>If the Flow belongs to a teammate, click <span class="kb-kbd">Show/hide Filters</span>, tick their name under <b>User</b> and click <span class="kb-kbd">Apply changes</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The filter panel of the Flows page: Status with Active, New and Paused ticked, User with Anna Berger and Tom Fischer ticked, and the Apply changes button, which is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__toolbar">
            <span class="kb-ui__btn" style="margin-right:auto">Show/hide Filters</span>
            <span class="kb-ui__btn is-primary">Create New Flow</span>
          </div>
          <div class="kb-ui__card" style="max-width:340px;padding:16px;gap:10px;font-size:13px">
            <span class="kb-ui__group" style="padding:0">Filters</span>
            <b>Status</b>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">Active</span></p>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">New</span></p>
            <p class="kb-ui__check"><span class="kb-ui__box"></span><span>Archived</span></p>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">Paused</span></p>
            <b>User</b>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">Anna Berger</span></p>
            <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span style="color:inherit">Tom Fischer</span></p>
            <div class="kb-ui__actions"><span class="kb-ui__btn">Reset</span><span class="kb-ui__btn is-primary is-marked">Apply changes (5)</span></div>
          </div>
        </div>
      </div>
      <figcaption>Showing a teammate's Flows</figcaption>
    </figure>
  </li>
  <li>
    <p>Tick the checkbox of the Flow you want to clone. Select only this one: Clone works on one Flow at a time.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Clone</span> above the list.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Flows list with one Flow selected. Above the list: 1 selected and the actions Pause, Clone, Archive and Delete. Clone is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item is-active">Flows</span>
            <span class="kb-ui__item">Tasks</span>
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <span class="kb-ui__btn">&times; 1 selected</span>
              <span class="kb-ui__btn">Pause</span>
              <span class="kb-ui__btn is-marked">Clone</span>
              <span class="kb-ui__btn">Archive</span>
              <span class="kb-ui__btn">Delete</span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th></th><th>Name</th><th>Status</th><th>User</th></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Kestrel Analytics follow-up</td><td>Active</td><td>Tom Fischer</td></tr>
              <tr><td><span class="kb-ui__box" style="margin:0"></span></td><td>Brightpath outreach</td><td>Active</td><td>Anna Berger</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>Cloning the selected Flow</figcaption>
    </figure>
  </li>
  <li>
    <p>hubsell confirms with <i>Flow cloned.</i> Click the name of the copy, called like the original with <b>(clone)</b> at the end, to open it in the editor.</p>
  </li>
  <li>
    <p>Click the pencil next to the name at the top, give the copy its own name and press <span class="kb-kbd">Enter</span>. Then change the steps and messages as you need.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your copy is ready.</b> It has the original's steps, branches and messages, belongs to you and has the status <b>New</b>, with no contacts yet. Check each step, then add contacts and click <span class="kb-kbd">Launch</span>. See <a href="/knowledge/create-a-flow/">Create a flow</a> and <a href="/knowledge/adding-contacts-to-a-flow/">Add contacts to a flow</a>.</p>
</div>
