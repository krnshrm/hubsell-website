---
title: "Add unwanted emails and domains to the suppression list"
description: "Keep competitors, existing customers and anyone else out of your outreach by adding their email address or domain to your account's suppression list."
category: "Getting started"
order: 6
series: "First login to first campaign"
seriesStep: 6
seriesTotal: 8
estMinutes: 3
stepCount: 5
appliesTo: "All plans. Everyone can see the suppression list; only account admins can change it."
prerequisites: "You're an account admin."
updated: 2026-11-16
faqs:
  - q: "What is a suppression list?"
    a: "The email addresses and domains your company doesn't want to contact, such as competitors or existing customers. Flows skip any contact that matches an entry."
  - q: "What is the difference between an email address and a domain?"
    a: "An email address blocks one person. A domain, such as example.com, blocks everyone whose email or company website is on that domain."
  - q: "What happens to contacts I already have?"
    a: "When you add an entry, hubsell suppresses the matching contacts already in your account. When you remove it, those contacts are unsuppressed again."
  - q: "Why can't I add anything?"
    a: "Only account admins can change the suppression list. Everyone else sees it without the box to add entries."
next:
  label: "Add contacts to a flow"
  href: "/knowledge/adding-contacts-to-a-flow/"
draft: false
---
<!-- sources: hubsell-client src/components/nav-user.tsx, src/components/settings/company/suppression/Suppression.tsx, src/app/settings/company/[tab]/page.tsx, src/i18n/messages/en/{userMenu,settings,breadcrumb}.json; hubsell-api server/routes.js (blacklist routes), server/controllers/blacklist controller (addDomains, deleteDomains); hubsell-mailer server/services/blacklist/index.js (domain and email matching) -->
<p>The suppression list holds the email addresses and domains your company doesn't want to contact: competitors, existing customers, or anyone else who should stay out of your outreach. It applies to the whole account, and flows skip any contact that matches an entry.</p>

<div class="kb-callout kb-callout--tip">
  <p>Add an <b>email address</b> to block one person. Add a <b>domain</b>, such as <i>example.com</i>, to block everyone at that company. To take out individual contacts instead, see <a href="/knowledge/suppress-and-unsuppress-contacts/">Suppress and unsuppress contacts</a>.</p>
</div>

<h2 class="kb-sub">Add an email or domain</h2>
<ol class="kb-steps">
  <li>
    <p>Click your <b>profile icon</b> at the bottom of the sidebar, then <span class="kb-kbd">Suppression</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The profile menu, opened from the name at the bottom of the sidebar, with Suppression marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/lists</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item is-active">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item">Flows</span>
            <span class="kb-ui__item">Tasks</span>
            <span class="kb-ui__item is-marked" style="margin-top:auto"><b>Anna Berger</b><br><span class="kb-ui__muted kb-ui__small">anna@example.com</span></span>
          </div>
          <div class="kb-ui__main" style="justify-content:flex-end">
            <div class="kb-ui__menu" style="align-self:flex-start;width:220px">
              <span><b>Anna Berger</b><br><span class="kb-ui__muted kb-ui__small">anna@example.com</span></span>
              <span class="is-sep"></span>
              <span>User settings</span>
              <span>Company settings</span>
              <span>Roles &amp; permissions</span>
              <span>Plan &amp; usage</span>
              <span>Integrations</span>
              <span class="is-marked">Suppression</span>
              <span>MCP</span>
              <span>Language</span>
              <span class="is-sep"></span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Opening the suppression list from the profile menu</figcaption>
    </figure>
  </li>
  <li>
    <p>Type the email address or domain into the <b>Add domain or email</b> box.</p>
  </li>
  <li>
    <p>Click the <span class="kb-kbd">+</span> button next to the box.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Suppression page: a domain typed into the Add domain or email box with the plus button marked, and below it the list of suppressed domains and emails, one of them ticked, with the Remove Selected button.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/suppression</span></div>
        <div class="kb-ui__app" aria-hidden="true">
          <div class="kb-ui__nav">
            <span class="kb-ui__logo">hubsell</span>
            <span class="kb-ui__group">Source &amp; Enrich</span>
            <span class="kb-ui__item">Lists</span>
            <span class="kb-ui__item">Searches</span>
            <span class="kb-ui__item">Contacts</span>
            <span class="kb-ui__group">Orchestrate &amp; Engage</span>
            <span class="kb-ui__item">Flows</span>
            <span class="kb-ui__item">Tasks</span>
          </div>
          <div class="kb-ui__main">
            <p class="kb-ui__h">Suppression</p>
            <div class="kb-ui__tablewrap kb-ui__stack" style="padding:14px">
              <div class="kb-ui__row" style="flex-wrap:nowrap">
                <span class="kb-ui__input" style="flex:1;min-width:0">competitor.example</span>
                <span class="kb-ui__btn is-primary is-marked">+</span>
              </div>
              <div class="kb-ui__row" style="justify-content:space-between">
                <p class="kb-ui__check"><span class="kb-ui__box"></span><b>Select all domains</b></p>
                <span class="kb-ui__btn is-primary">Remove Selected</span>
              </div>
              <div class="kb-ui__tablewrap"><table class="kb-ui__table">
                <tr class="is-selected"><td><span class="kb-ui__row" style="gap:8px;flex-wrap:nowrap"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>brightpath.example</span></td><td style="text-align:right"><span class="kb-ui__btn">&#10005;</span></td></tr>
                <tr><td><span class="kb-ui__row" style="gap:8px;flex-wrap:nowrap"><span class="kb-ui__box"></span>kestrel.example</span></td><td style="text-align:right"><span class="kb-ui__btn">&#10005;</span></td></tr>
                <tr><td><span class="kb-ui__row" style="gap:8px;flex-wrap:nowrap"><span class="kb-ui__box"></span>lena.vos@example.com</span></td><td style="text-align:right"><span class="kb-ui__btn">&#10005;</span></td></tr>
              </table></div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>The suppression list</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub">Remove an email or domain</h2>
<ol class="kb-steps" start="4" style="counter-reset:step 3">
  <li>
    <p>To remove one entry, click the <span class="kb-kbd">&#10005;</span> button at the end of its row.</p>
  </li>
  <li>
    <p>To remove several, tick their boxes (or <b>Select all domains</b>) and click <span class="kb-kbd">Remove Selected</span>.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your suppression list is set.</b> Matching contacts you already have are suppressed, and flows skip anyone on the list. Removing an entry unsuppresses its contacts again.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Good to know</p>
  <ul>
    <li><b>A domain also matches the company website.</b> A contact is blocked when their email address or their company's website is on a suppressed domain.</li>
    <li><b>The change didn't save.</b> hubsell shows <i>Couldn't save the change to the suppression list. Please try again.</i> Check that you typed a whole domain (such as <i>example.com</i>) or a complete email address.</li>
  </ul>
</div>
