---
title: "Manually update a contact's status"
description: "Set a contact's status yourself to stop or resume automation, for example when a conversation has moved offline."
category: "Data"
order: 5
estMinutes: 4
stepCount: 5
appliesTo: "All plans"
prerequisites: "Contacts in your hubsell account."
walkthroughUrl: "https://scribehow.com/o/_VgKCJwkRbGYfCk3CnY0eA/viewer/How_to_manually_update_the_status_of_a_contact_in_hubsell__2amYIeLDSYeemXYtV-ArZQ"
updated: 2026-09-01
faqs:
  - q: "Why do contact statuses exist?"
    a: "A flow is designed to run only up to the point of a reply. Once a contact responds, automation stops and the conversation is handed over to you. Statuses record where each contact sits in that handover."
  - q: "Which statuses stop a flow?"
    a: "Auto is the only status that keeps messages going out. Every other status ends the flow for that contact, including all Replied Positive, Neutral and Negative options, Replied via other contact, Targeted via other channels, Unsubscribe and Bounced."
  - q: "A flow stopped because of an out of office reply. How do I resume it?"
    a: "Set the contact's status back to Auto, and follow-ups continue."
draft: false
---
<p>A flow is designed to run only up to the point of a reply. Once a contact responds, automation stops and the conversation is handed over to you. Statuses are how hubsell records where each contact sits in that handover, and setting one yourself is how you tell the system a conversation has moved offline.</p>

<div class="kb-callout kb-callout--tip">
  <p><b>Auto</b> is the only status that keeps messages going out. Every other status ends the flow for that contact: all Replied Positive, Neutral and Negative options, Replied via other contact, Targeted via other channels, Unsubscribe and Bounced.</p>
</div>

<h2 class="kb-sub">Set a status</h2>
<ol class="kb-steps">
  <li>
    <p>Click the <span class="kb-kbd">Contacts</span> icon in the left sidebar.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Contacts icon">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-09-01/de5382e2-432e-4bfb-801f-4c9b5101520d/action-74bd30be41cc48a99600b06f0c5ae699_03c96595acc64b498b00649619cc214e_text_export.jpeg" alt="The Contacts icon in the left sidebar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Apply filters to narrow down the contacts you want to update, then click <span class="kb-kbd">Apply changes</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: applying filters">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-09-01/ade1847e-85b7-42f2-a894-f3ed3c6d299d/user_cropped_screenshot_9fed0444174845c5b35324c3008fddc5_text_export.jpeg" alt="Applying filters to narrow the contact list" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Narrowing things down</figcaption>
    </figure>
  </li>
  <li>
    <p>Select the contacts you want to update.</p>
    <figure class="kb-figure" data-ph="Screenshot: selecting contacts">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-09-01/e62243c2-e3e0-45ff-a8c8-a5725b906535/action-0e140e7263c44364a50cd7f99cafb294_f697eaa52c7440d89a98d435994ae6cb_text_export.jpeg" alt="Selecting the contacts to update" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Selecting contacts</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Update status</span> in the toolbar above the contact table.</p>
    <figure class="kb-figure" data-ph="Screenshot: Update status">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-09-01/69552249-1148-4937-8b2e-a03b8f71c279/action-c8ed9b6d14204afab726c8442f4d5587_3362fcb47d904b3f87f3a208047dacaa_text_export.jpeg" alt="The Update status button in the toolbar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the status menu</figcaption>
    </figure>
  </li>
  <li>
    <p>Select the status you want to set.</p>
    <figure class="kb-figure" data-ph="Screenshot: choosing a status">
      <img src="https://colony-recorder.s3.us-west-1.amazonaws.com/files/2026-09-01/df54f684-c89d-4305-b239-718fdd41469f/action-b576e4286e3f4f41a50a0537450bc795_e24c34b1bc3d46168f2d8daa1c810fc8_text_export.jpeg" alt="Choosing the status to set" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Choosing the status</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The status is set.</b> Contacts on Auto keep receiving follow-ups, and anything else stops the flow for that contact so the conversation stays with you.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistake</p>
  <ul>
    <li><b>An out of office auto reply gets marked as Replied.</b> That ends the flow for a contact who never really responded. Set the status back to <b>Auto</b> so they continue receiving follow-ups.</li>
  </ul>
</div>
