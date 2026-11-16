---
title: "Source data into hubsell"
description: "Bring contacts into a hubsell list from a LinkedIn search, a Sales Navigator search, a LinkedIn post or a CSV file, with the enrichment you need."
category: "Getting started"
order: 3
series: "First login to first campaign"
seriesStep: 3
seriesTotal: 8
estMinutes: 6
stepCount: 14
appliesTo: "All plans"
prerequisites: "For LinkedIn: a teammate with LinkedIn connected in hubsell. For CSV: a file with a header row, first and last names, and an email address or LinkedIn URL for each contact."
updated: 2026-11-16
faqs:
  - q: "Which LinkedIn links can I paste?"
    a: "A LinkedIn people search, a Sales Navigator people search, or a LinkedIn post. From a post, hubsell adds the people who commented on it or reacted to it."
  - q: "Why can't I pick a teammate in the Assign User step?"
    a: "LinkedIn sourcing runs through that person's LinkedIn account, so only people who show LinkedIn connected can be picked. Connect LinkedIn in their user settings first."
  - q: "What does my CSV file need?"
    a: "A header row, and for every contact a first name, a last name, and an email address or a LinkedIn URL. Columns named like a hubsell field, such as First Name or Email, are matched for you."
  - q: "Can I tag a CSV import?"
    a: "The CSV import has no tag step. Once the contacts are in, select them on the Contacts page and use Edit tags."
  - q: "Can I add the contacts to a flow while importing?"
    a: "No. Import first, then add the contacts to a flow from the Contacts page."
next:
  label: "Connect your CRM account"
  href: "/knowledge/connect-your-crm/"
draft: false
---
<!-- sources: hubsell-client src/components/data/lists/index.tsx, src/components/data/lists/columns.tsx, src/components/data/add-data/{index,frame,selectList,selectUser,enterUrl,enrichment,tagging,upload-csv,mapping,review-import}.tsx, src/lib/importMapping.ts, src/app/data/contacts/contact.service.ts (getHubsellFields), src/components/data/searches/columns.tsx, src/i18n/messages/en/{data,nav,common}.json; hubsell-api server/controllers/prospectController.js (post sourcing) -->
<p>You can bring contacts into hubsell in two ways: from LinkedIn (a people search, a Sales Navigator search or a post), or from a CSV file. Either way the contacts land in a list, and you choose how much hubsell should <a href="/knowledge/data-enrichment/">enrich</a> them.</p>

<div class="kb-callout kb-callout--tip">
  <p>hubsell doesn't add a contact you already have a second time. Tag every LinkedIn import, so you can find that batch again later.</p>
</div>

<h2 class="kb-sub" id="linkedin">Add contacts from LinkedIn</h2>
<ol class="kb-steps">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Lists</span>. Click <span class="kb-kbd">Add Data</span>, then <span class="kb-kbd">LinkedIn</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Lists page with the Add Data button marked as 1 and the LinkedIn option in its menu marked as 2.">
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
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <p class="kb-ui__h">Lists</p>
              <span class="kb-ui__btn is-primary is-marked">+ Add Data<span class="kb-ui__num">1</span></span>
              <span class="kb-ui__btn">Create New List</span>
            </div>
            <div class="kb-ui__menu" style="align-self:flex-end">
              <span class="is-marked">LinkedIn<span class="kb-ui__num">2</span></span>
              <span>CSV Import</span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th>Name</th><th>In Progress</th><th>Delivered</th><th>Owner</th></tr>
              <tr><td>DACH sales leaders</td><td>12</td><td>236</td><td>AB</td></tr>
              <tr><td>Logistics CFOs</td><td>0</td><td>118</td><td>AB</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>Starting a LinkedIn import from the Lists page</figcaption>
    </figure>
  </li>
  <li>
    <p>Under <b>Select a list or create a new one</b>, pick an existing list, or click <span class="kb-kbd">Create new list</span> and enter a name. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Under <b>Choose who this data should be assigned to</b>, pick the teammate whose LinkedIn account hubsell should use. Only people marked <b>LinkedIn connected</b> can be picked. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>In LinkedIn or Sales Navigator, run the people search that finds your target customers, and copy the address from your browser's address bar. You can also copy the link of a LinkedIn post.</p>
  </li>
  <li>
    <p>Paste the link into the box and click <span class="kb-kbd">Next</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="Step 3 of 6 of Add contacts from LinkedIn: a Sales Navigator search link is pasted into the box, which is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/add-data/likendIn</span></div>
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
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <div style="margin-right:auto">
                <p class="kb-ui__h">Add contacts from LinkedIn</p>
                <p class="kb-ui__muted kb-ui__small">Step 3 of 6: Enter URL</p>
              </div>
              <span class="kb-ui__btn">Cancel</span>
            </div>
            <div class="kb-ui__tablewrap kb-ui__stack" style="padding:16px">
              <div class="kb-ui__row">
                <span class="kb-ui__badge is-success">Select List</span>
                <span class="kb-ui__badge is-success">Assign User</span>
                <span class="kb-ui__badge is-info">Enter URL</span>
                <span class="kb-ui__badge">Enrich Data</span>
                <span class="kb-ui__badge">Tag Contacts</span>
                <span class="kb-ui__badge">Review Import</span>
              </div>
              <p class="kb-ui__label" style="text-align:center;font-size:16px;font-weight:600">Paste a LinkedIn post or search URL</p>
              <span class="kb-ui__input is-marked" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">https://www.linkedin.com/sales/search/people?query=...</span>
              <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:12px">
                <span class="kb-ui__btn">Back</span>
                <span class="kb-ui__btn is-primary">Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Pasting the search link</figcaption>
    </figure>
  </li>
  <li>
    <p>Under <b>Select enrichment level</b>, choose <span class="kb-kbd">Add LinkedIn data only</span> or <span class="kb-kbd">Add verified email</span>. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Under <b>Add tags to new and existing data</b>, type a tag name. Pick an existing tag, or click <span class="kb-kbd">Create new tag</span>. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Check the summary under <b>Review and start your import</b> and click <span class="kb-kbd">Start import</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="Step 6 of 6, Review Import: the list, assigned user, LinkedIn URL, enrichment and tags, with the Start import button marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/add-data/likendIn</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__card">
            <p class="kb-ui__muted kb-ui__small">Step 6 of 6: Review Import</p>
            <p class="kb-ui__title" style="text-align:center">Review and start your import</p>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><td class="kb-ui__muted">List</td><td style="text-align:right"><b>DACH sales leaders</b></td></tr>
              <tr><td class="kb-ui__muted">Assigned to</td><td style="text-align:right"><b>Anna Berger</b></td></tr>
              <tr><td class="kb-ui__muted">LinkedIn URL</td><td style="text-align:right"><b>linkedin.com/sales/search/people?...</b></td></tr>
              <tr><td class="kb-ui__muted">Enrichment</td><td style="text-align:right"><b>Verified email</b></td></tr>
              <tr><td class="kb-ui__muted">Tags</td><td style="text-align:right"><span class="kb-ui__badge">nov-dach</span></td></tr>
            </table></div>
            <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:14px">
              <span class="kb-ui__btn">Back</span>
              <span class="kb-ui__btn is-primary is-marked">Start import</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>The last step of the LinkedIn import</figcaption>
    </figure>
  </li>
  <li>
    <p>hubsell takes you back to <b>Lists</b>. To follow the import, click <span class="kb-kbd">Searches</span> in the sidebar. The <b>Status</b> column shows how far it is, for example <i>In progress</i> or <i>Completed</i>.</p>
  </li>
</ol>

<h2 class="kb-sub" id="csv">Import contacts from a CSV file</h2>
<ol class="kb-steps" start="10" style="counter-reset:step 9">
  <li>
    <p>In the sidebar, click <span class="kb-kbd">Lists</span>. Click <span class="kb-kbd">Add Data</span>, then <span class="kb-kbd">CSV Import</span>.</p>
  </li>
  <li>
    <p>Pick a list, or click <span class="kb-kbd">Create new list</span> and enter a name. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Under <b>Select CSV File</b>, drag your file into the box, or click the box to browse. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Under <b>Map the correct fields</b>, pick a <b>hubsell field</b> for each column you want to keep. Columns named like a hubsell field are already matched. You must map <b>First Name</b>, <b>Last Name</b>, and <b>Email</b> or <b>Contact LinkedIn URL</b>; until then, <span class="kb-kbd">Next</span> stays off. Columns you leave on <i>Select field</i> are not imported.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Map the correct fields step of the CSV import: four columns of the file are mapped to hubsell fields and one is not mapped yet, with its field box marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/data/add-data/CSV-import</span></div>
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
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__toolbar">
              <div style="margin-right:auto">
                <p class="kb-ui__h">Import contacts from a CSV file</p>
                <p class="kb-ui__muted kb-ui__small">Step 3 of 5: Mapping</p>
              </div>
              <span class="kb-ui__btn">Cancel</span>
            </div>
            <p class="kb-ui__label" style="text-align:center;font-size:16px;font-weight:600">Map the correct fields</p>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th>Column headers</th><th>hubsell field</th><th>Mapped?</th></tr>
              <tr><td>First Name</td><td><span style="white-space:nowrap" class="kb-ui__input is-select">First Name</span></td><td><span class="kb-ui__badge is-success">&#10003;</span></td></tr>
              <tr><td>Last Name</td><td><span style="white-space:nowrap" class="kb-ui__input is-select">Last Name</span></td><td><span class="kb-ui__badge is-success">&#10003;</span></td></tr>
              <tr><td>Email</td><td><span style="white-space:nowrap" class="kb-ui__input is-select">Email</span></td><td><span class="kb-ui__badge is-success">&#10003;</span></td></tr>
              <tr><td>Company</td><td><span style="white-space:nowrap" class="kb-ui__input is-select">Company Name</span></td><td><span class="kb-ui__badge is-success">&#10003;</span></td></tr>
              <tr><td>Event</td><td><span style="white-space:nowrap" class="kb-ui__input is-select is-placeholder is-marked">Select field</span></td><td><span class="kb-ui__badge">&#10005;</span></td></tr>
            </table></div>
            <div class="kb-ui__row" style="justify-content:space-between">
              <span class="kb-ui__btn">Back</span>
              <span class="kb-ui__btn is-primary">Next</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Matching your columns to hubsell fields</figcaption>
    </figure>
  </li>
  <li>
    <p>Under <b>Select enrichment level</b>, choose <span class="kb-kbd">No enrichment</span>, <span class="kb-kbd">Add LinkedIn data only</span> or <span class="kb-kbd">Add verified email</span>. Click <span class="kb-kbd">Next</span>.</p>
  </li>
  <li>
    <p>Check the list, file name and number of contacts under <b>Review and start your import</b>, and click <span class="kb-kbd">Start import</span>.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are on their way.</b> On the Lists page, <b>In Progress</b> counts contacts that are still being enriched and <b>Delivered</b> counts the ones that are ready. Click a number to see those contacts.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Troubleshooting</p>
  <ul>
    <li><b>Next stays off on the Enter URL step.</b> hubsell accepts a LinkedIn people search, a Sales Navigator people search or a LinkedIn post. A company page or a profile link doesn't work.</li>
    <li><b>Next stays off on the Mapping step.</b> Map First Name, Last Name, and Email or Contact LinkedIn URL.</li>
    <li><b>Fewer contacts arrived than you expected.</b> Contacts you already have are not added again.</li>
    <li><b>The search shows Reconnect needed or Connection needed.</b> The LinkedIn connection of the assigned teammate has stopped working. Connect LinkedIn again (see <a href="/knowledge/connect-your-mailbox-and-linkedin/">Connect your mailbox and LinkedIn</a>).</li>
    <li><b>Names show odd characters.</b> Save the file as <i>CSV UTF-8</i> in your spreadsheet app and import it again.</li>
  </ul>
</div>
