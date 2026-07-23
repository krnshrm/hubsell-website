---
title: "Create a flow"
description: "Build your first multichannel flow in hubsell: triggers, branches, LinkedIn and email steps, wait times, sending limits, and launch."
category: "Getting started"
order: 5
series: "First login to first campaign"
seriesStep: 5
seriesTotal: 5
estMinutes: 12
stepCount: 26
prerequisites: "Contacts in a hubsell list, and your mailbox and LinkedIn connected."
walkthroughUrl: "https://scribehow.com/o/_VgKCJwkRbGYfCk3CnY0eA/viewer/How_To_Create_A_Flow_in_hubsell__MJVpxMPvQ0mXwpCrCuquNw"
updated: 2026-07-23
faqs:
  - q: "How many LinkedIn connection requests can flows send per day?"
    a: "25 to 30 per day, combined across all your active flows."
  - q: "Why are contacts stuck in my flow?"
    a: "A contact without rules defining how it moves stays where it is. Click the conditional branch in the flow builder and set explicit rules for each track, for example accepted and not accepted."
  - q: "Can I add contacts without an email address to a flow with email steps?"
    a: "Filter them out before importing, or put them into a LinkedIn-only sequence. A contact without an email address cannot move through an email step."
draft: false
---
<nav class="kb-toc" aria-label="On this page">
  <p>On this page</p>
  <ul>
    <li><a href="#create">Create the flow</a></li>
    <li><a href="#logic">Build the branching logic</a></li>
    <li><a href="#outreach">Add outreach steps</a></li>
    <li><a href="#content">Write content and set rules</a></li>
    <li><a href="#launch">Set limits and launch</a></li>
  </ul>
</nav>

<p>A flow is your automated outreach sequence. It defines which channels reach a contact, in what order, and under what conditions. This article builds a sample flow with a LinkedIn connection request, conditional branches, and follow-up steps by LinkedIn message and email.</p>

<div class="kb-callout kb-callout--tip">
  <p>Flows send <b>25 to 30 LinkedIn connection requests per day</b>, combined across all your active flows. Plan your sequence and daily volumes with that ceiling in mind.</p>
</div>

<h2 class="kb-sub" id="create">Create the flow</h2>
<ol class="kb-steps">
  <li>
    <p>Click the <span class="kb-kbd">Flows</span> icon in the sidebar.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Flows icon in the sidebar">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-22/0c11b0b6-2649-490c-bdab-002354db8a64/user_cropped_screenshot_9e026d8be65d4ab1a33fd97f4f3a4fc8_text_export.jpeg" alt="The Flows icon in the sidebar" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Flows</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Create New Flow</span>.</p>
    <figure class="kb-figure" data-ph="Screenshot: Create New Flow">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/4eeb3c2e-1ccf-4850-817c-c946f904eb69/ascreenshot_85cd19098e3b4af29cc490b43e9ae2ee_text_export.jpeg" alt="The Create New Flow button" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Creating a new flow</figcaption>
    </figure>
  </li>
  <li>
    <p>Rename your flow as required.</p>
    <figure class="kb-figure" data-ph="Screenshot: renaming the flow">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/89e73ed5-a815-45c5-b05a-309adfe087ca/ascreenshot_cee294db7a5c41b8b48ab691302909ad_text_export.jpeg" alt="Renaming the flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Naming your flow</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="logic">Build the branching logic</h2>
<ol class="kb-steps" start="4">
  <li>
    <p>Click <span class="kb-kbd">Triggers</span>. A trigger defines the event that enrolls a contact into the flow.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Triggers menu">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/29efb4ec-62c7-49d0-8b56-599b3de4d79d/ascreenshot_7dad7b2602e74c78ad1a9ee66793f89a_text_export.jpeg" alt="The Triggers menu in the flow builder" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Triggers</figcaption>
    </figure>
  </li>
  <li>
    <p>Drag <span class="kb-kbd">Contact added to the flow</span> onto the centre of the canvas.</p>
    <figure class="kb-figure" data-ph="Screenshot: dragging the trigger onto the canvas">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/c6226cdb-a1fe-4f45-8d63-a465ae1f6955/ascreenshot_f5226efce8bd41fbbcebb5dffd332d93_text_export.jpeg" alt="Dragging Contact added to the flow onto the canvas" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Placing the trigger</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Outreach</span> to open the outreach actions.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Outreach menu">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/835c4c80-5c50-4783-bd50-077b03cfa26c/ascreenshot_da79f516b84640e48c2f6f03df75d25c_text_export.jpeg" alt="The Outreach menu in the flow builder" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Outreach</figcaption>
    </figure>
  </li>
  <li>
    <p>Drag <span class="kb-kbd">Connection request</span> onto the plus sign below the trigger card.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding a connection request">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/5949c9de-55ed-43b2-933f-a011812b2019/ascreenshot_cb1450b46932446aba32b4ee42c93ff9_text_export.jpeg" alt="Dragging Connection request into the flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding the connection request</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Utilities</span> to open the follow-up tools.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Utilities menu">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/e0784600-38f0-4ea6-8a05-514b072d78b4/ascreenshot_5b6ca73fad8a4c12b3de6c44c796638c_text_export.jpeg" alt="The Utilities menu in the flow builder" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Utilities</figcaption>
    </figure>
  </li>
  <li>
    <p>Drag <span class="kb-kbd">Follow-up Conditions</span> onto the plus sign.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding follow-up conditions">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/e723a996-9218-4146-9f7e-75735c290de3/ascreenshot_2062a357d06c4ddaafeb58838ef1ea8f_text_export.jpeg" alt="Dragging Follow-up Conditions into the flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding follow-up conditions</figcaption>
    </figure>
  </li>
  <li>
    <p>Click the <span class="kb-kbd">Follow-up Conditions</span> card to define the branches coming out of the previous card.</p>
    <figure class="kb-figure" data-ph="Screenshot: defining branches">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/54f90812-7d1a-4de1-8f43-7330e5e23448/ascreenshot_602332c2188d43478086bec5d74e0e04_text_export.jpeg" alt="Defining the branches on the Follow-up Conditions card" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Defining the branches</figcaption>
    </figure>
  </li>
  <li>
    <p>Rename the branches as required.</p>
    <figure class="kb-figure" data-ph="Screenshot: renaming a branch">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/0c66e5b6-09b9-403e-8155-ea34e55a4405/ascreenshot_9cbf67065ab64b9c952c103760807495_text_export.jpeg" alt="Renaming a branch" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Renaming a branch</figcaption>
    </figure>
  </li>
  <li>
    <p>To add another branch, click <span class="kb-kbd">Add New Branch</span> and name it.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding a new branch">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/2413ec48-c1f7-464f-8e80-b84ae02e16fe/ascreenshot_35bb09287bdc47c8a9c0b1242aa32b6e_text_export.jpeg" alt="The Add New Branch button" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding a branch</figcaption>
    </figure>
  </li>
  <li>
    <p>Close the menu with the <span class="kb-kbd">x</span>, then click a branch name to set the rules for that branch.</p>
    <figure class="kb-figure" data-ph="Screenshot: opening a branch's rules">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/629fc255-cca5-49af-9c14-4b9f26b4f94e/ascreenshot_e6105c67f2754e69a21fad4980deedf0_text_export.jpeg" alt="Clicking a branch name to set its rules" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the branch rules</figcaption>
    </figure>
  </li>
  <li>
    <p>Click the branch rule, for example <span class="kb-kbd">Connection Accepts</span>, and select the condition that applies from the drop-down. Repeat for each branch, so every path has an explicit rule.</p>
    <figure class="kb-figure" data-ph="Screenshot: selecting a branch condition">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/fedfcf17-ac2a-4a16-a483-3332db4a6e46/ascreenshot_b36f040504b448b6870dcb0d184d5b1a_text_export.jpeg" alt="Selecting a condition from the drop-down" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Setting the branch condition</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="outreach">Add outreach steps to each branch</h2>
<ol class="kb-steps" start="15">
  <li>
    <p>To add a LinkedIn message, drag <span class="kb-kbd">Direct Message</span> onto the plus sign below the relevant branch.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding a direct message step">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/e8ed9a9e-ec5a-44da-80c5-6187b089a86e/ascreenshot_5e86edcebff04406944ae5e1a07fb4f2_text_export.jpeg" alt="Dragging Direct Message into a branch" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding a LinkedIn message</figcaption>
    </figure>
  </li>
  <li>
    <p>To add an email step, drag <span class="kb-kbd">Email</span> onto the plus sign.</p>
    <figure class="kb-figure" data-ph="Screenshot: adding an email step">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/39243426-9bc9-4997-9a2d-e2b2339e33f4/ascreenshot_39aecd37b26d4b6d8257de7c653f02c2_text_export.jpeg" alt="Dragging Email into a branch" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Adding an email step</figcaption>
    </figure>
  </li>
  <li>
    <p>Click a <span class="kb-kbd">Wait</span> card to set the delay between actions, and set the duration and unit in the panel.</p>
    <figure class="kb-figure" data-ph="Screenshot: setting the wait duration">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/a62c9766-cc39-454c-a786-f8f38a3a931d/ascreenshot_5cb07db9b24747dbb2d03bab5738c06e_text_export.jpeg" alt="Setting the wait duration and unit" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Setting a wait</figcaption>
    </figure>
  </li>
  <li>
    <p>Keep building each branch with outreach steps, waits and conditions until the sequence is complete.</p>
    <figure class="kb-figure" data-ph="Screenshot: a branch built out with steps">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/0f598aaa-8331-4aea-93a5-0edee74462ba/ascreenshot_02057f0b155b41cfab0d443e32c6f581_text_export.jpeg" alt="A branch built out with outreach steps and conditions" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Building out the branches</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="content">Write content and set sending rules</h2>
<ol class="kb-steps" start="19">
  <li>
    <p>Click any node to open the step editor and add your copy.</p>
    <figure class="kb-figure" data-ph="Screenshot: opening the step editor">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/f368fac8-9acf-433d-b99b-1531d5fb7f5e/ascreenshot_d291bb6858a64e718106f4cd6adaab8c_text_export.jpeg" alt="Opening the step editor from a node" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening the step editor</figcaption>
    </figure>
  </li>
  <li>
    <p>For a LinkedIn step, enter your message in the <b>Message body</b> box. <span class="kb-kbd">Preview Message</span> shows how the rendered content appears to the recipient.</p>
    <figure class="kb-figure" data-ph="Screenshot: the LinkedIn message body">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/24cbdb54-639d-4468-b786-1e267f55fe0f/ascreenshot_ca7cd7e8a428416092d59d8dcb2cb5e7_text_export.jpeg" alt="Entering the LinkedIn message in the Message body box" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Writing the LinkedIn message</figcaption>
    </figure>
  </li>
  <li>
    <p>Use the <b>Schedule</b> panel to define your active sending days, daily delivery windows, and randomized delays between individual prospect actions.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Schedule panel">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/dc878445-0a5e-4944-b9f2-a32d1de2aac2/ascreenshot_bac09324ee924a5ea5c95a89ed6b036e_text_export.jpeg" alt="The Schedule panel with sending days and delivery windows" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Setting the schedule</figcaption>
    </figure>
  </li>
  <li>
    <p>For an email step, select the <span class="kb-kbd">Email</span> node to set the subject line, compose the body, and apply formatting. You can also enable tracking preferences such as <b>Track email opens</b> and <b>Brand link tracking</b>.</p>
    <figure class="kb-figure" data-ph="Screenshot: the email step editor">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/375bdabb-4623-4880-b063-88aa5871baa7/ascreenshot_342ac377060945bcb128b335da6c191d_text_export.jpeg" alt="The email step editor with subject and body" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Writing the email step</figcaption>
    </figure>
  </li>
  <li>
    <p>After configuring the content and rules, set the <span class="kb-kbd">Action status</span> to <b>On</b> to activate the node.</p>
    <figure class="kb-figure" data-ph="Screenshot: setting the Action status to On">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-23/4c101576-b7f8-4175-ab32-ed9e834643d2/screenshot_38bf6d498a0e4bb491d663db4018c0b7_text_export.jpeg" alt="Setting the Action status to On" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Activating the node</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="launch">Set sending limits and launch</h2>
<ol class="kb-steps" start="24">
  <li>
    <p>Click <span class="kb-kbd">Settings</span> in the top-right menu to open the Flow Settings.</p>
    <figure class="kb-figure" data-ph="Screenshot: opening Flow Settings">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-23/f700692a-572e-4fde-a869-f11de69cc627/screenshot_26396052e61b433587983d94e16f799b_text_export.jpeg" alt="Opening the Flow Settings from the top-right menu" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Opening Flow Settings</figcaption>
    </figure>
  </li>
  <li>
    <p>Adjust the sliders to set your <b>Drip Rate</b> and the maximum daily sending limits per channel, such as emails, profile views and connection requests. Click <span class="kb-kbd">Save Settings</span> to apply.</p>
    <figure class="kb-figure" data-ph="Screenshot: the Drip Rate and channel limit sliders">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-23/5badab8d-3b07-4892-af4f-1d2e85ebf549/screenshot_4a79bcd0804849e280868d66ab68eb15_text_export.jpeg" alt="Adjusting the Drip Rate and daily channel limits" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Setting your limits</figcaption>
    </figure>
  </li>
  <li>
    <p>Once all nodes, content and branch conditions are configured, click <span class="kb-kbd">Launch</span> to activate the flow. Then go to <span class="kb-kbd">Contacts</span>, filter by list or tag, and add contacts to the flow.</p>
    <figure class="kb-figure" data-ph="Screenshot: launching the flow">
      <img src="https://colony-recorder.s3.amazonaws.com/files/2026-07-21/022b1b68-00e8-4714-8a25-29fa954a7ecc/ascreenshot_4b10e69e66014fa885e711f021899a36_text_export.jpeg" alt="Launching the flow" loading="lazy" onerror="this.closest('.kb-figure').classList.add('is-missing')" />
      <figcaption>Launching</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your flow is live.</b> Contacts you add now move through the sequence branch by branch, within the schedule and sending limits you set. You have completed the onboarding series.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistakes</p>
  <ul>
    <li><b>Contacts stall or move down the wrong path.</b> A contact without rules defining how it moves stays stuck. Click the conditional branch inside the flow builder and define explicit rules for each track, for example accepted and not accepted.</li>
    <li><b>Contacts without emails end up in an email-focused flow.</b> Filter them out before importing, or push them into a LinkedIn-only sequence.</li>
  </ul>
</div>
