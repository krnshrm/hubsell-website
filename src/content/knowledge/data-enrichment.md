---
title: "Data enrichment in hubsell"
description: "What the two enrichment levels add to a contact, and how to choose one when you import contacts or later on the Contacts page."
category: "Data"
order: 1
estMinutes: 4
stepCount: 5
appliesTo: "Paid and trial accounts. Enrichment uses credits."
prerequisites: "Contacts in hubsell, or contacts you are about to import."
updated: 2026-11-16
faqs:
  - q: "What is data enrichment?"
    a: "Enrichment fills in what a contact record is missing, such as the full LinkedIn profile, company details or a verified work email, so the contact is ready for outreach."
  - q: "What is the difference between the two levels?"
    a: "Add LinkedIn data only adds the contact's full LinkedIn profile and company page. Add verified email does the same and also looks for a verified work email."
  - q: "When am I charged?"
    a: "Only when hubsell finds something: a profile for LinkedIn data, an email for a verified email. Contacts where nothing is found cost nothing."
  - q: "How many contacts can I enrich at once?"
    a: "Up to 2,500 contacts per request. For 100 contacts or more, hubsell asks you to type the number of contacts to confirm."
  - q: "Can I enrich suppressed contacts?"
    a: "No. Suppressed contacts can't be enriched. Remove the suppression first if you need them."
draft: false
---
<!-- sources: hubsell-client src/components/data/add-data/enrichment.tsx, src/components/data/add-data/index.tsx, src/components/data/contacts/contact-actions-bar/{enrich-data,ActionDropdown,index,actionsConfig}.tsx, src/app/data/contacts/contact.service.ts (filter config), src/lib/default-views.ts, src/i18n/messages/en/{data,contacts,common}.json; hubsell-api server/services/components/leadgen/automation/index.js (enrichment steps per level) -->
<p>A contact often arrives with only a name, a job title and a company. Enrichment fills the gaps, so you can reach the right person with the right context. For a plain definition of the term, see the <a href="/glossary/data-enrichment/">data enrichment glossary entry</a>.</p>

<h2 class="kb-sub">The two levels</h2>
<ul>
  <li><b>Add LinkedIn data only:</b> the contact's full LinkedIn profile, and the contents of their company's page.</li>
  <li><b>Add verified email:</b> everything above, plus an accurate work email address.</li>
</ul>
<p>When you import a CSV file you can also choose <b>No enrichment</b>, and the contacts come in exactly as they are in the file.</p>

<div class="kb-callout kb-callout--tip">
  <p>Enrichment uses credits, and you're only charged when hubsell finds something: a profile for LinkedIn data, an email for a verified email. It's available on paid and trial accounts.</p>
</div>

<h2 class="kb-sub">Choose enrichment when you import</h2>
<p>Every import asks for an enrichment level in the <b>Enrich Data</b> step, under <b>Select enrichment level</b>. The full import is in <a href="/knowledge/sourcing-data-into-hubsell/">Source data into hubsell</a>.</p>
<figure class="kb-figure">
  <div class="kb-ui" role="img" aria-label="The Enrich Data step of a CSV import with the enrichment list open: No enrichment, Add LinkedIn data only and Add verified email, which is marked.">
    <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/add-data/CSV-import</span></div>
    <div class="kb-ui__stage" aria-hidden="true">
      <div class="kb-ui__card">
        <p class="kb-ui__muted kb-ui__small">Step 4 of 5: Enrich Data</p>
        <p class="kb-ui__title" style="text-align:center">Select enrichment level</p>
        <div class="kb-ui__stack" style="gap:6px">
          <span class="kb-ui__input is-select is-placeholder">Select enrichment</span>
          <div class="kb-ui__menu">
            <span>No enrichment</span>
            <span>Add LinkedIn data only</span>
            <span class="is-marked">Add verified email</span>
          </div>
        </div>
        <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:14px">
          <span class="kb-ui__btn">Back</span>
          <span class="kb-ui__btn is-primary">Next</span>
        </div>
      </div>
    </div>
  </div>
  <figcaption>Choosing the enrichment level during an import</figcaption>
</figure>

<h2 class="kb-sub">Enrich contacts you already have</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Contacts</span>.</p>
  </li>
  <li>
    <p>Tick the contacts you want to enrich. To pick more than one page, tick the box in the table header and choose <span class="kb-kbd">Select all</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Enrich data</span> above the table.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Source LinkedIn data</span> or <span class="kb-kbd">Add verified email</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Contacts page with three contacts selected. The Enrich data button is marked as 1 and its menu shows Source LinkedIn data and Add verified email, marked as 2.">
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
              <span class="kb-ui__btn is-marked">Enrich data<span class="kb-ui__num">1</span></span>
              <span class="kb-ui__btn">Add to flow</span>
              <span class="kb-ui__btn">Change list</span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-start">
              <span>Source LinkedIn data</span>
              <span class="is-marked">Add verified email<span class="kb-ui__num">2</span></span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th></th><th>Contact</th><th>Title</th><th>Company</th></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Anna Berger</td><td>Head of Sales</td><td>Northwind Logistics</td></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>CTO</td><td>Brightpath Software</td></tr>
              <tr class="is-selected"><td><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Lena Vos</td><td>VP Marketing</td><td>Kestrel Analytics</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>Enriching selected contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>If you selected 100 contacts or more, hubsell shows what the enrichment adds. Type the number of contacts into the box and click <span class="kb-kbd">Enrich</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Enrich with emails confirmation for 250 contacts, with the number typed in and the Enrich button marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/contacts</span></div>
        <div class="kb-ui__overlay" aria-hidden="true">
          <div class="kb-ui__card">
            <div>
              <p class="kb-ui__title">Enrich with emails</p>
              <p class="kb-ui__muted">Selected contacts will be enriched with accurate work emails. Charged only when an email is found.</p>
            </div>
            <span class="kb-ui__input">250</span>
            <div class="kb-ui__actions">
              <span class="kb-ui__btn">Cancel</span>
              <span class="kb-ui__btn is-primary is-marked">Enrich</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Confirming a large enrichment</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Enrichment runs in the background.</b> A message confirms that your request has been received, and the new data appears on the contacts as it comes in.</p>
</div>

<h2 class="kb-sub">Find contacts by enrichment</h2>
<p>On the Contacts page, click <span class="kb-kbd">Show/hide filters</span>. Under <b>Enrichment</b> you find:</p>
<ul>
  <li><b>Enrichment status:</b> <i>Ongoing</i> or <i>Completed</i>. The Contacts page shows <i>Completed</i> by default, so contacts that are still being enriched only appear once they're done.</li>
  <li><b>Enrichment level:</b> <i>Has LinkedIn data</i> or <i>Has email</i>.</li>
</ul>
<p>Under <b>Data</b>, <b>Last enriched</b> finds contacts by when they were last enriched. To find contacts that still have no email address, see <a href="/knowledge/isolate-contacts-missing-email-or-linkedin/">Isolate contacts with no email address or LinkedIn URL</a>.</p>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">When Enrich data shows a message instead of options</p>
  <ul>
    <li><b>Enrichment is available for paid accounts only.</b> Your account is on a plan without enrichment.</li>
    <li><b>No credits left for enrichment.</b> Your account has used up its credits.</li>
    <li><b>Enrichment is not allowed for suppressed contacts.</b> You're looking at suppressed contacts. See <a href="/knowledge/suppress-and-unsuppress-contacts/">Suppress and unsuppress contacts</a>.</li>
  </ul>
</div>
