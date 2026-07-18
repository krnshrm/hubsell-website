---
title: "Source data into hubsell"
description: "Bring contacts into hubsell from LinkedIn, Sales Navigator, or a CSV file, then tag and enrich them so they are ready for outreach."
category: "Getting started"
order: 3
series: "First login to first campaign"
seriesStep: 3
seriesTotal: 6
estMinutes: 6
walkthroughUrl: "https://scribehow.com/o/_VgKCJwkRbGYfCk3CnY0eA/viewer/Sourcing_data_into_hubsell__CXbz6BAISl-1cUrP5yxfCw"
updated: 2026-07-18
faqs:
  - q: "How long does deduplication take?"
    a: "It runs in the background and takes roughly 20 to 30 minutes for a few hundred contacts, and longer for bigger lists. Wait until the status reads Completed."
  - q: "What does my CSV file need?"
    a: "Every column needs a header, and each row needs either a LinkedIn URL or an email address. Save the file as CSV UTF-8 if any names contain accented characters."
  - q: "Why do I have fewer contacts than my file had?"
    a: "This is normal. hubsell skips duplicates that already exist in your account and rows with a broken LinkedIn URL or a missing required field."
draft: false
---
<div class="kb-callout">
  <p>You can bring contacts into hubsell three ways: from a <b>LinkedIn</b> search, from <b>Sales Navigator</b>, or from a <b>CSV</b> file. This article covers a LinkedIn or Sales Navigator search first, then a CSV import.</p>
</div>

<div class="kb-callout kb-callout--tip">
  <p>hubsell removes contacts that already exist in your account, so always add a <b>tag</b> when you import. The tag is how you find each new batch afterwards.</p>
</div>

<nav class="kb-toc" aria-label="On this page">
  <p>On this page</p>
  <ul>
    <li><a href="#linkedin">LinkedIn or Sales Navigator</a></li>
    <li><a href="#csv">CSV file</a></li>
  </ul>
</nav>

<h2 class="kb-sub" id="linkedin">Source from LinkedIn or Sales Navigator</h2>
<ol class="kb-steps">
  <li>
    <p>Go to <span class="kb-kbd">Lists</span>, click <span class="kb-kbd">Add data</span>, and choose <span class="kb-kbd">LinkedIn</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Add data with LinkedIn selected">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/c0cafa52-3d46-4520-8bf7-a335da9e7028/user_cropped_screenshot_a53726b8ed1a48458ea4a772f1ec8f11_text_export.jpeg" alt="Adding data from LinkedIn in the Lists screen" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding data from LinkedIn</figcaption>
    </figure>
  </li>
  <li><p>Pick an existing list, or click <span class="kb-kbd">Create new list</span>, type a name, and click <span class="kb-kbd">Next</span>.</p></li>
  <li><p>Choose the user these contacts should be assigned to.</p></li>
  <li><p>Copy the LinkedIn or Sales Navigator search URL that holds your target prospects, and paste it into the search URL field.</p></li>
  <li>
    <p>Select the <a href="/knowledge/data-enrichment">enrichment</a> level you want.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing the enrichment level">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/f060bcc6-2384-426c-8920-b403b31bacff/sps-redacted-7de4ee954f6a459c834afeff022ea26b_a734a9d6458841afb8f9cdcd06215195_text_export.jpeg" alt="Selecting the enrichment level for the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the enrichment level</figcaption>
    </figure>
  </li>
  <li>
    <p>Add a tag so you can find this batch later. Choose an existing tag, or click <span class="kb-kbd">+</span> to create a new one.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding a tag to the import">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/74b2378f-7de8-4c36-b77c-b07e0d0cf02b/sps-redacted-6121a26b30914cb3ab4d161c52df6111_590249877ea64b0d964595e90364246c_text_export.jpeg" alt="Adding a tag during the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Tagging the batch</figcaption>
    </figure>
  </li>
  <li><p>Decide whether to add these contacts to a flow now, or continue without one. If you are sourcing from LinkedIn or Sales Navigator, it helps to suppress contacts first so you can clean the list before anything enters a flow.</p></li>
  <li><p>Click <span class="kb-kbd">Submit</span>, then <span class="kb-kbd">Finish</span>.</p></li>
  <li>
    <p>Go to <span class="kb-kbd">Searches</span> and find your list. Wait a few minutes and refresh. An <span class="kb-kbd">Active</span> status means sourcing has started.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Searches screen showing status">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/271a874a-6a43-4b0e-8879-74b1f54344e6/user_cropped_screenshot_a8cadf0563ed4fb88176be7bf1847f28_text_export.jpeg" alt="The Searches screen showing the list status" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Checking the search status</figcaption>
    </figure>
  </li>
  <li><p>To see the contacts, go to <span class="kb-kbd">Lists</span> and click the number in the <span class="kb-kbd">Delivered</span> column.</p></li>
</ol>

<div class="kb-callout kb-callout--tip">
  <p>Deduplication runs in the background and takes roughly <b>20 to 30 minutes for a few hundred contacts</b>, longer for bigger lists. Check back until the status reads <b>Completed</b>. For Sales Navigator, email enrichment usually finishes by the next day.</p>
</div>

<h2 class="kb-sub" id="csv">Import from a CSV file</h2>
<ol class="kb-steps" start="11">
  <li>
    <p>Go to <span class="kb-kbd">Lists</span>, click <span class="kb-kbd">Add data</span>, and choose <span class="kb-kbd">CSV</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Add data with CSV selected">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/b7ba7dd7-a6fa-47c1-8155-446adc7b8dfd/user_cropped_screenshot_b3c95e99ea244fd49f1834936ea45c1b_text_export.jpeg" alt="Adding data from a CSV in the Lists screen" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding data from a CSV</figcaption>
    </figure>
  </li>
  <li><p>Pick a list or create a new one, then click <span class="kb-kbd">Next</span>.</p></li>
  <li>
    <p>Check your file before you upload. Every column needs a header, and each row needs either a LinkedIn URL or an email address.</p>
    <figure class="kb-figure" data-ph="Screenshot: CSV requirements">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-17/1bd63b2f-8f90-406a-8a71-4e98a12aa6b0/user_cropped_screenshot_69caebe545b74c7dbd6d4a5281cc5575_text_export.jpeg" alt="The CSV requirements shown before upload" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>What your CSV needs</figcaption>
    </figure>
  </li>
  <li><p>Upload the file and click <span class="kb-kbd">Next</span>.</p></li>
  <li>
    <p>Map each column in your file to the matching hubsell field, then click <span class="kb-kbd">Next</span>. If a column has no matching field, map it to <b>Custom Variables</b>.</p>
    <figure class="kb-figure" data-ph="Screenshot: mapping CSV fields to hubsell fields">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-16/8bdcb1e8-786c-4415-8917-cd013c75f68c/sps-redacted-c0f1f514944c4bc0a63b6bfbc177033e_868be92b4c504c35b075db670c5bb6c0_text_export.jpeg" alt="Mapping CSV columns to hubsell fields" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Mapping your columns</figcaption>
    </figure>
  </li>
  <li><p>Choose an enrichment type, or skip enrichment.</p></li>
  <li><p>Choose whether to add these contacts to an existing flow.</p></li>
  <li><p>Click <span class="kb-kbd">Finish</span>. Your contacts appear in the <span class="kb-kbd">Lists</span> section.</p></li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are in hubsell.</b> Once the status reads Completed, they are tagged, enriched, and ready to add to a campaign.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistakes and how to avoid them</p>
  <ul>
    <li><b>Untagged imports.</b> Auto-deduplication makes untagged batches hard to find later. Tag every import.</li>
    <li><b>Bad-fit contacts in a live flow.</b> Suppress contacts during LinkedIn or Sales Navigator sourcing so you can clean the list before it reaches a flow.</li>
    <li><b>CSV import fails.</b> Usually a missing header or a row with no LinkedIn URL and no email. Add the headers and a unique identifier per row.</li>
    <li><b>Garbled names like Ã© or Ã¡.</b> Save the file as CSV UTF-8. If it is already imported, run LinkedIn enrichment to overwrite the names with clean profile data.</li>
    <li><b>Flow assignment fails on the CSV screen.</b> Skip the flow step during import, wait about 30 minutes, then filter contacts by list or tag with status New, select all, and add them to the flow.</li>
    <li><b>Fewer contacts than the file had.</b> This is normal. hubsell skips duplicates already in your account and rows with a broken LinkedIn URL or missing required field.</li>
  </ul>
</div>
