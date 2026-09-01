---
title: "Isolate contacts with no email address or LinkedIn URL"
description: "Find the contacts a flow would skip, and move them into a list of their own so they do not sit unnoticed in your outreach."
category: "Data"
order: 4
estMinutes: 6
stepCount: 17
appliesTo: "All plans"
prerequisites: "Contacts already in a hubsell list."
walkthroughUrl: "https://scribehow.com/o/_VgKCJwkRbGYfCk3CnY0eA/viewer/How_to_isolate_contacts_with_no_email_address_or_LinkedIn_URL_in_hubsell__YVkP7zGtTgmM8Skv7sZaBw"
updated: 2026-09-01
faqs:
  - q: "Why isolate contacts with no email address?"
    a: "Contacts with no email address are skipped when a flow sends. Moving them into their own list means you can see them, and route them into a channel they can actually be reached on."
  - q: "Can I filter for missing email and missing LinkedIn URL at the same time?"
    a: "Do one field at a time, so each set goes into its own list."
draft: false
---
<p>Contacts with no email address are skipped when a flow sends, and contacts with no LinkedIn URL get stuck at a connection request step. You can filter for either case and move those contacts into a list of their own.</p>

<div class="kb-callout kb-callout--tip">
  <p>Filter on <b>one field at a time</b>. Isolating missing emails and missing LinkedIn URLs separately means each set lands in its own list, ready for the channel it can still be reached on.</p>
</div>

<h2 class="kb-sub">Create the destination list</h2>
<ol class="kb-steps">
  <li>
    <p>Click the <span class="kb-kbd">Lists</span> icon in the left sidebar.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Lists icon">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/f59f218c-f27c-4895-a02d-492cf91f718f/action-4240a63f994144eaba1c5657244dbe3a_2ce2318a8f5943a6adbdd66ef711f4b3_text_export.jpeg" alt="The Lists icon in the left sidebar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Lists</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Create New List</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Create New List">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/be9dce95-113c-43bf-aff7-5b154a4789af/action-8829f1f888ab46ad8fb6185b2490f706_f38b2862ad324aeabbc2120a547590a0_text_export.jpeg" alt="The Create New List button" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Creating a list</figcaption>
    </figure>
  </li>
  <li>
    <p>Type a name for the list and click <span class="kb-kbd">Submit</span>. A name that says what is in it, such as "without email", saves guessing later.</p>
    <figure class="kb-figure" data-ph="Screenshot: naming the new list">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/0e2d860d-41b3-422b-9b21-26484af1ddff/action-7ca4f598dc0a4c0dac2803763e955d71_dbce6b9d605a41fa9ef48f17dd081b0c_text_export.jpeg" alt="Naming the new list" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Naming the list</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub">Filter for the missing field</h2>
<ol class="kb-steps" start="4">
  <li>
    <p>Click the <span class="kb-kbd">Contacts</span> icon in the left sidebar.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Contacts icon">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/c501b167-c1aa-4f73-9fab-5412065785bd/action-e4c67a4e47cc46f48d60e942f396f635_8f3e40b052744749b0a662a2fffabb12_text_export.jpeg" alt="The Contacts icon in the left sidebar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Remove every existing filter from the filter bar, so nothing is excluded before you start.</p>
    <figure class="kb-figure" data-ph="Screenshot: clearing existing filters">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/db339417-3cdb-4596-a122-2dee800b4d2d/action-a308a8a97bb84521a394d2cc678273a2_d14ed17e6bb0424989e540e5ec9a6d2f_text_export.jpeg" alt="Clearing the existing filters" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Clearing the filter bar</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Lists</span> in the filter panel.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Lists filter">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/245147ae-d875-4f6c-b38c-f09b4be1b2e0/action-fbd3c2b3aabb4d178f5259bba2795322_4c1c3201d28a4a39807659a67714b9cb_text_export.jpeg" alt="The Lists filter in the filter panel" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the list filter</figcaption>
    </figure>
  </li>
  <li>
    <p>Type the name of the list you want to search in.</p>
    <figure class="kb-figure" data-ph="Screenshot: typing the source list name">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/4a19e775-3b74-45fa-a0f2-c7711c3087e9/action-8d564bfa652a479aaabb7a831121fa35_5be00f19a7784e45a91c638e0c779e1d_text_export.jpeg" alt="Typing the name of the source list" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing where to search</figcaption>
    </figure>
  </li>
  <li>
    <p>Select the list.</p>
    <figure class="kb-figure" data-ph="Screenshot: selecting the source list">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/222b9406-d7a8-47a4-a1bb-72710da811d7/action-1e078eaf7e7e4eb7a1f49cd55d0c472a_ee0e069bd7b84b12a60c9be530e702ac_text_export.jpeg" alt="Selecting the source list" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Selecting the list</figcaption>
    </figure>
  </li>
  <li>
    <p>Under <b>Contact data</b>, expand <span class="kb-kbd">Contact email</span> or <span class="kb-kbd">Contact LinkedIn URL</span>, depending on which contacts you want to isolate.</p>
    <figure class="kb-figure" data-ph="Screenshot: expanding the contact data field">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/1b0d5e83-c25a-413d-8e8e-f5fdbd4b7d06/action-35e6b32206294a23b30a1b9ea82e3a93_3aa57561e80340a09f4a6ff90b67ee17_text_export.jpeg" alt="Expanding Contact email or Contact LinkedIn URL under Contact data" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the field</figcaption>
    </figure>
  </li>
  <li>
    <p>Select <span class="kb-kbd">Is unknown</span>. This leaves only the contacts where that field is empty.</p>
    <figure class="kb-figure" data-ph="Screenshot: selecting Is unknown">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/81e49e0d-e161-4353-8df4-1498b4fe8d2f/action-4cd2c3df533549aba1b04aba3f26358d_0e44de5444014005b88d0f0d917dbed4_text_export.jpeg" alt="Selecting Is unknown for the chosen field" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Filtering to empty values</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Apply changes</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Apply changes">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/7c406c5d-f47c-472f-b664-96e8f4522148/action-b0c3bc3833f64b8c95e7ccc8ccf55c70_dabbed1bc3414299b5d3fd7cf5d3ecc9_text_export.jpeg" alt="The Apply changes button" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Applying the filter</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub">Move them into the new list</h2>
<ol class="kb-steps" start="12">
  <li>
    <p>Click the checkbox in the table header to select all contacts.</p>
    <figure class="kb-figure" data-ph="Screenshot: the select-all checkbox">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/6cf8828a-e5f9-424e-a660-eeddf375fec3/action-8b850992ea61467eb496cb098921eb20_648bcfa2687c434da98fbefde5bdfc35_text_export.jpeg" alt="The select-all checkbox in the table header" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Selecting the contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Choose whether to move only the contacts on this page or every contact matching the filters, then click <span class="kb-kbd">Apply</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing the selection scope">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/a2de3a12-8af0-47b7-8037-92e173387b38/action-b2b347f24b134c01ae00c5c2d9ae1d47_fd7c317f06444c168ddd72dcd257a3db_text_export.jpeg" alt="Choosing whether to move this page or all matching contacts" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the scope</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Change list</span> in the toolbar above the contact table.</p>
    <figure class="kb-figure" data-ph="Screenshot: Change list">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/cb41e9f0-2089-48e1-9311-6b0d6f1cd662/action-2c8c16f8e8fb4a79a02bb3d9b6800504_6c04e72ee7c44707b255dedfc3a7203a_text_export.jpeg" alt="The Change list button in the toolbar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the move dialog</figcaption>
    </figure>
  </li>
  <li>
    <p>Select the list you created.</p>
    <figure class="kb-figure" data-ph="Screenshot: selecting the destination list">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/3e9f9039-1458-44d9-a641-c1b10fe85df4/action-3af39d3d4b194111a62f69b1da916599_822f8461a6064dfea17da7406f9a9359_text_export.jpeg" alt="Selecting the destination list" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the destination</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Move to list</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Move to list">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/c92d2a1b-ac76-40c6-8e02-c73e50881bd1/action-0fb4d6f81d00416c94942e360a71929b_1d4aae99c26b425cb4c1427c8540ce5f_text_export.jpeg" alt="The Move to list button" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Completing the move</figcaption>
    </figure>
  </li>
  <li>
    <p>Click the <span class="kb-kbd">Lists</span> icon and open your new list to confirm the contacts arrived.</p>
    <figure class="kb-figure" data-ph="Screenshot: confirming the contacts moved">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-08-27/392f9f08-627d-45f0-be56-b9006ce1f188/action-9d19e22bb8724972911ef3c3db5715c4_4216bf319b5e4e2d9db3c497991d611c_text_export.jpeg" alt="Opening the new list to confirm the contacts moved" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Confirming the move</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The gaps are isolated.</b> Your new list holds only the contacts missing that field, so you can enrich them, route them to another channel, or leave them out of your next flow deliberately rather than by accident.</p>
</div>
