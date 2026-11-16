---
title: "Connect your CRM account"
description: "Connect HubSpot, Salesforce or Pipedrive to hubsell, map the fields, and push contacts to your CRM when you're ready."
category: "Getting started"
order: 4
series: "First login to first campaign"
seriesStep: 4
seriesTotal: 8
estMinutes: 3
stepCount: 5
appliesTo: "All plans. Only account admins see Integrations."
prerequisites: "You're an account admin, and you have a CRM login that may approve a new connection."
updated: 2026-11-16
faqs:
  - q: "Which CRMs does hubsell support?"
    a: "HubSpot, Salesforce and Pipedrive."
  - q: "Does connecting my CRM send contacts across straight away?"
    a: "No. Connecting sends nothing on its own. You push contacts from the Contacts page, and in the field mapping you can choose whether contacts are pushed always or only when their status is one you pick."
  - q: "Does hubsell read contacts back from my CRM?"
    a: "No. Data goes one way, from hubsell into your CRM."
  - q: "How do I disconnect my CRM?"
    a: "Click the Connected button on the CRM's card in Integrations and confirm with Yes please disconnect. Data is then no longer exchanged with hubsell."
next:
  label: "Create a flow"
  href: "/knowledge/create-a-flow/"
draft: false
---
<!-- sources: hubsell-client src/components/nav-user.tsx, src/app/integrations/page.tsx, src/components/integrations/Integrations.tsx, src/components/settings/user/mailbox/IntegrationCard.tsx, src/app/integrations/[crm]/callback/page.tsx, src/components/integrations/entity-mapping.tsx, src/components/integrations/entity-mapping-row.tsx, src/components/integrations/fields-mapping.tsx, src/components/data/contacts/contact-actions-bar/actionsConfig.ts, src/components/data/contacts/contact-actions-bar/push-to-crm.tsx, src/i18n/messages/en/integrations.json, src/i18n/messages/en/contacts.json -->
<p>Connect your CRM once for the whole account. After that, everyone in your team can push contacts from hubsell into it.</p>

<h2 class="kb-sub">Connect your CRM</h2>
<ol class="kb-steps">
  <li>
    <p>Click your name at the bottom of the left sidebar, then click <span class="kb-kbd">Integrations</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Connect</span> on the card of your CRM: <b>HubSpot</b>, <b>Pipedrive</b> or <b>Salesforce</b>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Integrations page with a card each for HubSpot, Pipedrive and Salesforce. Connect on the HubSpot card is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/integrations</span></div>
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
            <div class="kb-ui__row" style="align-items:stretch">
              <div class="kb-ui__stack" style="flex:1 1 120px;align-items:center;background:var(--hs-card,#fff);border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:22px 12px">
                <span class="kb-ui__h">HubSpot</span>
                <span class="kb-ui__btn is-marked" style="width:100%;text-align:center">Connect</span>
              </div>
              <div class="kb-ui__stack" style="flex:1 1 120px;align-items:center;background:var(--hs-card,#fff);border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:22px 12px">
                <span class="kb-ui__h">Pipedrive</span>
                <span class="kb-ui__btn" style="width:100%;text-align:center">Connect</span>
              </div>
              <div class="kb-ui__stack" style="flex:1 1 120px;align-items:center;background:var(--hs-card,#fff);border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:22px 12px">
                <span class="kb-ui__h">Salesforce</span>
                <span class="kb-ui__btn" style="width:100%;text-align:center">Connect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>The Integrations page</figcaption>
    </figure>
  </li>
  <li>
    <p>Your CRM opens. Sign in and approve the access hubsell asks for.</p>
  </li>
  <li>
    <p>You come back to <b>Integrations</b>. The card of your CRM now shows <b>Connected</b>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Setup field mapping</span> below the card to check which hubsell fields fill which CRM fields. Click an entity, for example the contact, to change its fields, choose under <b>Push to</b> whether contacts go across <b>always</b> or only <b>when status is in</b> the statuses you pick, and click <span class="kb-kbd">Save this mapping</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The HubSpot card on the Integrations page after connecting: the button says Connected, and the Setup field mapping button below it is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/integrations</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__stack" style="width:100%;max-width:240px">
            <div class="kb-ui__stack" style="align-items:center;background:var(--hs-card,#fff);border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:22px 12px">
              <span class="kb-ui__h">HubSpot</span>
              <span class="kb-ui__btn" style="width:100%;text-align:center;border-color:var(--hs-primary,#192341)">Connected</span>
            </div>
            <span class="kb-ui__btn is-marked" style="text-align:center">Setup field mapping</span>
          </div>
        </div>
      </div>
      <figcaption>A connected CRM with its field mapping</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your CRM is connected.</b> The card in Integrations shows <b>Connected</b>. Nothing has been sent yet: you decide when contacts go across.</p>
</div>

<h2 class="kb-sub">Push contacts to your CRM</h2>
<p>Go to <b>Contacts</b>, select the contacts, open <span class="kb-kbd">More actions</span> and click <span class="kb-kbd">Push to CRM</span>. Choose <b>Contacts only</b> or <b>Contacts with activities</b>. hubsell confirms with <i>Your request to push the data to the CRM has been received.</i></p>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Troubleshooting</p>
  <ul>
    <li><b>I don't see Integrations in the menu.</b> Only account admins can connect a CRM. Ask an admin in your team.</li>
    <li><b>No field mapping available.</b> hubsell couldn't load the mapping settings. Check in Integrations that the CRM is still connected and try again.</li>
  </ul>
</div>
