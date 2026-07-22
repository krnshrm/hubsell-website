---
title: "Source data into hubsell"
description: "Get contacts into a hubsell list from a LinkedIn or Sales Navigator search, or from a CSV file, then tag and enrich them ready for outreach."
category: "Getting started"
order: 3
series: "First login to first campaign"
seriesStep: 3
seriesTotal: 5
estMinutes: 8
stepCount: 20
appliesTo: "All plans"
prerequisites: "For LinkedIn sourcing, LinkedIn connected through the hubsell plugin. For CSV sourcing, a file with column headers and either a LinkedIn URL or an email address in every row."
walkthroughUrl: "https://scribehow.com/o/_VgKCJwkRbGYfCk3CnY0eA/viewer/Sourcing_data_into_hubsell__CXbz6BAISl-1cUrP5yxfCw"
updated: 2026-07-22
faqs:
  - q: "How long does deduplication take?"
    a: "Background deduplication on a LinkedIn or Sales Navigator search takes 15 to 20 minutes depending on list size. CSV deduplication takes roughly 20 to 30 minutes per few hundred contacts. Sales Navigator email enrichment finishes by the following day."
  - q: "What does my CSV file need?"
    a: "Every column needs a header, and every row needs either a LinkedIn URL or an email address. If any names contain characters such as é, á or ó, save the file as CSV UTF-8."
  - q: "Why did fewer contacts arrive than there were rows in my file?"
    a: "This is expected. hubsell removes contacts you already have and skips rows with a broken LinkedIn URL or a missing mandatory field."
next:
  label: "Connect your CRM account"
  href: "/knowledge/connect-your-crm"
draft: false
---
<nav class="kb-toc" aria-label="On this page">
  <p>On this page</p>
  <ul>
    <li><a href="#linkedin">LinkedIn or Sales Navigator</a></li>
    <li><a href="#csv">CSV import</a></li>
  </ul>
</nav>

<p>You can source data into hubsell from a LinkedIn search, a Sales Navigator search, or a CSV import. hubsell removes contacts you already have, so add a tag on every import to keep track of what came in when.</p>

<h2 class="kb-sub" id="linkedin">Source from a LinkedIn or Sales Navigator search</h2>
<ol class="kb-steps">
  <li>
    <p>Go to <span class="kb-kbd">Lists</span>, click <span class="kb-kbd">Add data</span> and select <span class="kb-kbd">LinkedIn</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Add data with LinkedIn selected">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/3f3f43e9-4196-43b6-9609-36952ceb33b4/user_cropped_screenshot_9fbae2d666894144bb74168556cc6db2_text_export.jpeg" alt="Adding data from LinkedIn in the Lists screen" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding data from LinkedIn</figcaption>
    </figure>
  </li>
  <li>
    <p>To add to an existing list, select the list name. To start a new one, click <span class="kb-kbd">Create new list</span> and type the name.</p>
    <figure class="kb-figure" data-ph="Screenshot: naming a new list">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/ee91e169-e043-462d-96b6-60e7f5ef9de3/user_cropped_screenshot_74bfd3e91f0842d09bef066c72b0a2ce_text_export.jpeg" alt="Naming a new list during the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing or naming your list</figcaption>
    </figure>
  </li>
  <li><p>Click <span class="kb-kbd">Next</span>.</p></li>
  <li>
    <p>Select the user this data should be assigned to.</p>
    <figure class="kb-figure" data-ph="Screenshot: assigning the data to a user">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/96b09ff6-61c6-4306-a0f8-02f37b6b0819/user_cropped_screenshot_638a8720e6d54867b38e7716badd8095_text_export.jpeg" alt="Selecting the user the data is assigned to" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Assigning the data</figcaption>
    </figure>
  </li>
  <li>
    <p>In LinkedIn or Sales Navigator, run the search that returns your target customers and copy the search URL.</p>
    <figure class="kb-figure" data-ph="Screenshot: copying the search URL">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/56768d47-c567-4a34-9b27-840f13a0f268/user_cropped_screenshot_0a115485f33b431cb47435302b1300e4_text_export.jpeg" alt="Copying the LinkedIn search URL" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Copying your search URL</figcaption>
    </figure>
  </li>
  <li>
    <p>Paste the URL into the URL box.</p>
    <figure class="kb-figure" data-ph="Screenshot: pasting the search URL">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/afc02779-bdb4-4248-a9c1-d877b573e2d4/user_cropped_screenshot_17752aae2be540b3ad8b3e33fc48908a_text_export.jpeg" alt="Pasting the search URL into the URL box" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Pasting the URL</figcaption>
    </figure>
  </li>
  <li>
    <p>Select the <a href="/knowledge/data-enrichment">enrichment</a> level you need.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing the enrichment level">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/b2871f71-18ed-4cc3-8529-af721f1bb13e/user_cropped_screenshot_dd57198de81d49e9880ffa7ac3eeac9e_text_export.jpeg" alt="Selecting the enrichment level for the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the enrichment level</figcaption>
    </figure>
  </li>
  <li>
    <p>Add a tag so you can find this batch later. Choose an existing tag or click <span class="kb-kbd">+</span> to create one.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding a tag">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/aaf8748a-5499-480a-b994-269cd850ee90/user_cropped_screenshot_29b68ed0fa124b43978b91a95d4ee54d_text_export.jpeg" alt="Choosing or adding a tag during the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Tagging the batch</figcaption>
    </figure>
  </li>
  <li>
    <p>Decide whether to assign these contacts to a flow now or continue without one. Suppressing contacts first cleans up the list before they enter a flow.</p>
    <figure class="kb-figure" data-ph="Screenshot: the flow assignment step">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/a43a9cd0-5a68-4af3-8896-dc8c44a25b31/user_cropped_screenshot_e8216b8c57f64eab89462458941a2496_text_export.jpeg" alt="Deciding whether to assign contacts to a flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing a flow, or not</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Submit</span>, then click <span class="kb-kbd">Finish</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: submitting the import">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/0948b034-084a-47fd-bb10-3e2920589a2f/user_cropped_screenshot_a8a0a767ee8b4bcaa28cc7b69353b7d7_text_export.jpeg" alt="Submitting the import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Submitting</figcaption>
    </figure>
  </li>
  <li>
    <p>Go to <span class="kb-kbd">Searches</span> and find your list name. Wait a few minutes and refresh. A status of <span class="kb-kbd">Active</span> means sourcing has started.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Searches screen showing Active">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/49e112e4-1c67-4006-8bb2-fec31d500034/user_cropped_screenshot_7c469e175b37478bb08bafc7f808c4c1_text_export.jpeg" alt="The Searches screen showing the list status" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Checking the search status</figcaption>
    </figure>
  </li>
  <li>
    <p>To see the contacts, go to <span class="kb-kbd">Lists</span> and click the number in the <span class="kb-kbd">Delivered</span> column.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Delivered column in Lists">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/fe2c5c61-c8b1-4f95-b2f2-412ace935744/screenshot_bc637fe078284446a40878e06330cd6e_text_export.jpeg" alt="The Delivered column in the Lists screen" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the delivered contacts</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="csv">Source from a CSV import</h2>
<ol class="kb-steps" start="13">
  <li>
    <p>Go to <span class="kb-kbd">Lists</span>, click <span class="kb-kbd">Add data</span> and select <span class="kb-kbd">CSV</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Add data with CSV selected">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/7f5ded0d-129d-46d3-8e49-c5cd7e301d93/screenshot_5c4ca7e53cfb4e778133f0f12ead59ad_text_export.jpeg" alt="Adding data from a CSV in the Lists screen" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding data from a CSV</figcaption>
    </figure>
  </li>
  <li>
    <p>Select an existing list or create a new one, then click <span class="kb-kbd">Next</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing a list for the CSV import">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/ce6d906a-266f-4f43-bddb-5e6e1412ba86/user_cropped_screenshot_546125c7007a4d10a61b42481da48604_text_export.jpeg" alt="Choosing a list for the CSV import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing your list</figcaption>
    </figure>
  </li>
  <li>
    <p>Check your file before you upload it. Every column needs a header, and every row needs either a LinkedIn URL or an email address. If any names contain characters such as é, á or ó, save the file as CSV UTF-8.</p>
    <figure class="kb-figure" data-ph="Screenshot: CSV requirements">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/dd54d25e-6566-4114-98d3-26879630425d/user_cropped_screenshot_b20447b6f9d449f18b3d6c5d683b610f_text_export.jpeg" alt="The CSV requirements shown before upload" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>What your CSV needs</figcaption>
    </figure>
  </li>
  <li>
    <p>Upload the file and click <span class="kb-kbd">Next</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: uploading the file">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/455a0386-a365-4ead-ba82-c695e5364771/user_cropped_screenshot_ad08379f3dca40f493597a196298cb99_text_export.jpeg" alt="Uploading the CSV file" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Uploading your file</figcaption>
    </figure>
  </li>
  <li>
    <p>Map the columns in your file to hubsell fields, then click <span class="kb-kbd">Next</span>. Anything without a matching hubsell field can be mapped to <b>Custom Variables</b>.</p>
    <figure class="kb-figure" data-ph="Screenshot: mapping columns to hubsell fields">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/61165bb7-3376-43ed-9ddd-1e6237136705/user_cropped_screenshot_7d3edb71cc7b4909bc3918dd0d9ddac8_text_export.jpeg" alt="Mapping CSV columns to hubsell fields" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Mapping your columns</figcaption>
    </figure>
  </li>
  <li>
    <p>Choose an enrichment type, or skip enrichment.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing an enrichment type">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/e0b8e51f-82c0-404d-9ebc-80704feb4bce/user_cropped_screenshot_e46ad4413d704d4ca4804c85bfcaea66_text_export.jpeg" alt="Choosing an enrichment type for the CSV import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing enrichment</figcaption>
    </figure>
  </li>
  <li>
    <p>Choose whether the contacts should go into an existing flow.</p>
    <figure class="kb-figure" data-ph="Screenshot: the flow step in the CSV import">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/b18263fd-a663-428a-ad42-4428934ad6cc/user_cropped_screenshot_a9295a91e526448c8333d3c6702601c8_text_export.jpeg" alt="Choosing whether the contacts go into a flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing a flow</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Finish</span>. The imported contacts appear under <span class="kb-kbd">Lists</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: finishing the CSV import">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-20/f139d01b-6634-4256-a491-95eb073187e1/user_cropped_screenshot_cc048b391192411a9b51e9a0b0db331b_text_export.jpeg" alt="Finishing the CSV import" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Finishing the import</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your contacts are in hubsell.</b> Your list appears under Lists with a count in the Delivered column, and the matching entry under Searches moves from Active to Completed.</p>
</div>

<div class="kb-callout kb-callout--tip">
  <p class="kb-callout__h">Timings to expect</p>
  <ul>
    <li>Background deduplication on a LinkedIn or Sales Navigator search takes <b>15 to 20 minutes</b>, depending on list size.</li>
    <li>CSV deduplication takes roughly <b>20 to 30 minutes</b> per few hundred contacts.</li>
    <li>Sales Navigator email enrichment finishes <b>by the following day</b>.</li>
  </ul>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Troubleshooting</p>
  <ul>
    <li><b>Fewer contacts arrived than there were rows in the file.</b> This is expected. hubsell removes contacts you already have and skips rows with a broken LinkedIn URL or a missing mandatory field.</li>
    <li><b>You cannot tell which contacts came from this import.</b> Tag every import. Without a tag, deduplication makes a batch hard to identify afterwards.</li>
    <li><b>The CSV import failed.</b> Check that every column has a header and that every row has a LinkedIn URL or an email address.</li>
    <li><b>Names show as garbled characters.</b> Excel can strip the encoding. Save the file as CSV UTF-8 and import again. If the contacts are already in, run LinkedIn enrichment to overwrite the corrupted names with the correct profile data.</li>
    <li><b>Flow assignment fails on the CSV import screen.</b> Skip flow assignment during the import. Wait about 30 minutes, filter <b>Contacts</b> by list or tag plus <b>Status = New</b>, select all, then use <b>Add to flow</b>.</li>
    <li><b>A search is stuck on Paused.</b> The LinkedIn or Sales Navigator session has gone out of sync. Disconnect and reconnect LinkedIn from the hubsell plugin.</li>
    <li><b>Contacts entered a flow before you had checked them.</b> Suppress contacts during LinkedIn or Sales Navigator sourcing so poor fits are removed before they reach a flow.</li>
  </ul>
</div>
