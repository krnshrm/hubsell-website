---
title: "Create a flow"
description: "Build your first Flow in hubsell: the trigger, LinkedIn and email steps, waits, follow-up conditions with branches, sending limits, and launch."
category: "Getting started"
order: 5
series: "First login to first campaign"
seriesStep: 5
seriesTotal: 8
estMinutes: 12
stepCount: 17
appliesTo: "All plans"
prerequisites: "Your mailbox and LinkedIn connected, and contacts in hubsell to add to the Flow afterwards."
updated: 2026-11-16
faqs:
  - q: "How many LinkedIn connection requests does a Flow send per day?"
    a: "You decide, per Flow and per sender: click Settings in the editor and set Connection request send rate. The same panel has limits for emails, profile views, LinkedIn direct messages and InMails."
  - q: "Why can't I put Follow-up Conditions straight after the trigger?"
    a: "Follow-up conditions react to an outreach step, so add one first, for example a connection request. hubsell says Add an outreach node first otherwise."
  - q: "Some items in the Flow Builder are grey and say Coming Soon."
    a: "Those aren't available yet. Today the trigger is Contact added to the flow, and the Outreach and Utilities steps without a Coming Soon label can be used."
  - q: "Can I edit a teammate's Flow?"
    a: "You can open it, but it shows View only: this flow belongs to a teammate. Clone it to get your own copy you can change."
  - q: "What happens to contacts without an email address in an email step?"
    a: "The email step skips them. The Flow's History lists them under Skipped with the reason No email address."
next:
  label: "Add unwanted emails and domains to the suppression list"
  href: "/knowledge/suppression-list/"
draft: false
---
<!-- sources: hubsell-client src/app/flows/(list)/(flows)/page.tsx, src/components/flow/listing/index.tsx, src/components/flow/listing/columns.tsx, src/components/flow/configure-flow/index.tsx, src/components/flow/FlowSidebar.tsx, src/components/flow/FlowUtil.tsx, src/components/flow/nodes/TriggerNode.tsx, src/components/flow/nodes/LinkedInNode.tsx, src/components/flow/nodes/EmailNode.tsx, src/components/flow/nodes/DelayNode.tsx, src/components/flow/nodes/RouterNode.tsx, src/components/flow/nodes/BranchNode.tsx, src/components/flow/node-configs/RouterBranchNodeConfigs.tsx, src/components/flow/node-configs/EmailNodeConfig.tsx, src/components/flow/node-configs/EmailSettings.tsx, src/components/flow/ActionStatusToggle.tsx, src/components/flow/SettingsSidebar.tsx, src/components/flow/settings/configurableObject.tsx, src/i18n/messages/en/flows.json, src/i18n/messages/en/flowEditor.json -->
<p>A Flow is your automated outreach. It decides which channels reach a contact, in what order and under which conditions. This article builds a sample Flow: a LinkedIn connection request, then a LinkedIn message for people who accept and an email for people who don't.</p>

<h2 class="kb-sub" id="create">Create the Flow</h2>
<ol class="kb-steps">
  <li>
    <p>In the left sidebar, click <span class="kb-kbd">Flows</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Create New Flow</span>. hubsell creates a Flow with a made-up name and opens it in the editor.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Flows page with a list of Flows and their status. The Create New Flow button is marked.">
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
              <span class="kb-ui__btn" style="margin-right:auto">Show/hide Filters</span>
              <span class="kb-ui__btn is-primary is-marked">Create New Flow</span>
              <span class="kb-ui__btn">Columns</span>
            </div>
            <div class="kb-ui__tablewrap"><table class="kb-ui__table">
              <tr><th>Name</th><th>Status</th><th>Recipients</th><th>User</th></tr>
              <tr><td>Kestrel Analytics follow-up</td><td>Active</td><td>184</td><td>Anna Berger</td></tr>
              <tr><td>Logistics leaders Q4</td><td>Paused</td><td>96</td><td>Anna Berger</td></tr>
            </table></div>
          </div>
        </div>
      </div>
      <figcaption>The Flows page</figcaption>
    </figure>
  </li>
  <li>
    <p>At the top of the editor, click the pencil next to the Flow's name, type a name you'll recognise and press <span class="kb-kbd">Enter</span>.</p>
  </li>
</ol>

<h2 class="kb-sub" id="trigger">Add the trigger</h2>
<ol class="kb-steps">
  <li>
    <p>In the <b>Flow Builder</b> panel on the left, click <span class="kb-kbd">Triggers</span>. If the panel is folded in, click its Triggers icon.</p>
  </li>
  <li>
    <p>Drag <span class="kb-kbd">Contact added to the flow</span> onto the canvas. hubsell adds the trigger and an <b>End</b> step below it.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Flow editor. Along the top: the Flow's name with a pencil to rename it, and the Save, Contacts, Settings, Statistics, History and Launch buttons. On the left, the Flow Builder panel with Triggers open; Contact added to the flow is marked. On the canvas, the trigger step and the End step.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows/64f1c2a9e8b7d3</span></div>
        <div aria-hidden="true">
          <div class="kb-ui__toolbar" style="padding:10px 14px;background:var(--hs-card,#fff);border-bottom:1px solid var(--hs-border,#d3d8e5);font-size:13px">
            <span class="kb-ui__logo" style="padding:0">hubsell</span>
            <span class="kb-ui__muted">Flows /</span>
            <b style="margin-right:auto">Brightpath outreach <span class="kb-ui__btn" style="padding:0 6px;font-size:12px">&#9998;</span></b>
            <span class="kb-ui__btn" style="font-size:12px;padding:4px 10px">Save</span>
            <span class="kb-ui__btn" style="font-size:12px;padding:4px 10px">Contacts</span>
            <span class="kb-ui__btn" style="font-size:12px;padding:4px 10px">Settings</span>
            <span class="kb-ui__btn" style="font-size:12px;padding:4px 10px">Statistics</span>
            <span class="kb-ui__btn" style="font-size:12px;padding:4px 10px">History</span>
            <span class="kb-ui__btn is-primary" style="font-size:12px;padding:4px 10px">Launch</span>
          </div>
          <div class="kb-ui__row" style="align-items:stretch;gap:0;font-size:13px">
            <div class="kb-ui__stack" style="flex:1 1 220px;max-width:300px;gap:8px;padding:12px;background:var(--hs-card,#fff);border-right:1px solid var(--hs-border,#d3d8e5)">
              <div><p class="kb-ui__label">Flow Builder</p><p class="kb-ui__muted kb-ui__small">Drag nodes to the canvas</p></div>
              <b>Triggers</b>
              <div class="kb-ui__node is-marked" style="min-width:0"><b>Contact added to the flow</b><span class="kb-ui__muted kb-ui__small">When a contact is manually added to the flow</span></div>
              <div class="kb-ui__node" style="min-width:0;opacity:.55"><b>Contact matches filters <span class="kb-ui__badge">Coming Soon</span></b><span class="kb-ui__muted kb-ui__small">When a contact matches filters for the first time</span></div>
              <b>Outreach</b>
              <b>Utilities</b>
              <b>Data &amp; CRM</b>
            </div>
            <div class="kb-ui__canvas" style="flex:1 1 220px;justify-content:flex-start">
              <div class="kb-ui__node"><b>Contact added</b><span class="kb-ui__muted kb-ui__small">Trigger when a contact is added to your contact list</span></div>
              <div class="kb-ui__link"></div>
              <span class="kb-ui__badge">+</span>
              <div class="kb-ui__link"></div>
              <div class="kb-ui__node" style="min-width:0;text-align:center"><b>End</b></div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Adding the trigger in the Flow editor</figcaption>
    </figure>
  </li>
</ol>

<h2 class="kb-sub" id="steps">Add the outreach steps</h2>
<ol class="kb-steps">
  <li>
    <p>Click <span class="kb-kbd">Outreach</span> and drag <span class="kb-kbd">Connection request</span> onto the plus sign below the trigger. hubsell puts a <b>Wait</b> step in front of it, 1 day by default.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Utilities</span> and drag <span class="kb-kbd">Follow-up Conditions</span> onto the plus sign below the connection request. It splits the Flow into two branches, <b>Branch 1</b> and <b>Branch 2</b>.</p>
  </li>
  <li>
    <p>Click the <b>Follow-up Conditions</b> step. Next to a branch, click the pencil, type a name such as <i>Accepted</i> and save it. Do the same for the other branch. <span class="kb-kbd">Add Branch 3</span> adds another branch, up to five.</p>
  </li>
  <li>
    <p>Click a branch on the canvas and choose its condition under <b>Branch Conditions</b>, for example <b>Connection Accepts</b>: <b>Accepted</b> for one branch and <b>Not Accepted</b> for the other. Give every branch a condition, so each contact has a path.</p>
  </li>
  <li>
    <p>Drag <span class="kb-kbd">Direct message</span> onto the plus sign in the <i>Accepted</i> branch, and <span class="kb-kbd">Email</span> onto the plus sign in the <i>Not accepted</i> branch.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="A finished Flow on the canvas: the Contact added trigger, a one-day wait, the connection request, then Follow-up Conditions, which is marked, splitting into an Accepted branch with a direct message and a Not accepted branch with an email.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows/64f1c2a9e8b7d3</span></div>
        <div class="kb-ui__canvas" aria-hidden="true">
          <div class="kb-ui__node"><b>Contact added</b><span class="kb-ui__muted kb-ui__small">Trigger when a contact is added to your contact list</span></div>
          <div class="kb-ui__link"></div>
          <span class="kb-ui__badge is-info">Wait - 1 day</span>
          <div class="kb-ui__link"></div>
          <div class="kb-ui__node"><div class="kb-ui__row" style="justify-content:space-between;gap:6px"><b>1 Connection request</b><span class="kb-ui__badge is-success">On</span></div><span class="kb-ui__muted kb-ui__small">LinkedIn Connection Request</span></div>
          <div class="kb-ui__link"></div>
          <div class="kb-ui__node is-marked"><b>Follow-up Conditions</b><span class="kb-ui__muted kb-ui__small">Follow-up conditions</span><br><span class="kb-ui__small">Branches 2</span></div>
          <div class="kb-ui__link"></div>
          <div style="display:flex;gap:8px;justify-content:center;width:100%">
            <div class="kb-ui__stack" style="flex:1 1 0;max-width:150px;min-width:0;gap:0;align-items:center">
              <span class="kb-ui__badge is-info">Accepted</span>
              <div class="kb-ui__link"></div>
              <span class="kb-ui__badge is-info">Wait - 1 day</span>
              <div class="kb-ui__link"></div>
              <div class="kb-ui__node" style="min-width:0;width:100%"><b>2 Direct message</b><span class="kb-ui__badge is-success">On</span></div>
            </div>
            <div class="kb-ui__stack" style="flex:1 1 0;max-width:150px;min-width:0;gap:0;align-items:center">
              <span class="kb-ui__badge is-info">Not accepted</span>
              <div class="kb-ui__link"></div>
              <span class="kb-ui__badge is-info">Wait - 1 day</span>
              <div class="kb-ui__link"></div>
              <div class="kb-ui__node" style="min-width:0;width:100%"><b>3 Email</b><span class="kb-ui__badge is-success">On</span></div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>The sample Flow with two branches</figcaption>
    </figure>
  </li>
  <li>
    <p>To change a wait, click the <b>Wait</b> step and set <b>Duration</b> and <b>Unit</b> (hours or days). Under <b>Conditions</b>, the <b>No-reply</b> condition applies by default; add a condition there to target other contacts, for example those who replied.</p>
  </li>
</ol>

<h2 class="kb-sub" id="content">Write the messages</h2>
<ol class="kb-steps">
  <li>
    <p>Click an outreach step on the canvas. Its settings open on the right, on the <b>Set-up action</b> tab.</p>
  </li>
  <li>
    <p>Write the text. For an email, fill in <b>Email subject</b> and <b>Email body</b>. For a LinkedIn step, fill in the <b>Message body</b>; for a connection request, leave it empty to send it without a note. <span class="kb-kbd">Preview Email</span> or <span class="kb-kbd">Preview Message</span> shows the text for a real contact.</p>
  </li>
  <li>
    <p>Set <b>Action status</b> to <span class="kb-kbd">On</span>. New steps start at <b>Off</b>. Repeat for every outreach step, then click <span class="kb-kbd">Save</span> at the top.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The settings of an email step on the Set-up action tab: Action status with Off, Skip and On, where On is marked, then Version 1 with the email subject and body, and the tracking switches.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows/64f1c2a9e8b7d3</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__card" style="max-width:420px;padding:20px;gap:14px;font-size:13px">
            <p class="kb-ui__h">Email</p>
            <div class="kb-ui__tabs"><span class="kb-ui__tab is-active">Set-up action</span><span class="kb-ui__tab">Check run details</span></div>
            <div class="kb-ui__stack" style="gap:6px">
              <b>Action status</b>
              <div class="kb-ui__row" style="gap:4px"><span class="kb-ui__btn">Off</span><span class="kb-ui__btn">Skip</span><span class="kb-ui__btn is-primary is-marked">On</span></div>
            </div>
            <div class="kb-ui__tabs"><span class="kb-ui__tab is-active">Version 1</span></div>
            <p class="kb-ui__field"><b>Email subject - Version 1</b><span class="kb-ui__input">Shipping volumes at Brightpath Software</span></p>
            <p class="kb-ui__field"><b>Email body - Version 1</b><span class="kb-ui__input" style="min-height:64px">Hi Tom, I noticed Brightpath is hiring for its logistics team...</span></p>
            <p class="kb-ui__label">Tracking options</p>
            <div class="kb-ui__row"><span class="kb-ui__switch is-on"></span>Track email opens</div>
            <div class="kb-ui__row"><span class="kb-ui__switch is-on"></span>Brand link tracking</div>
          </div>
        </div>
      </div>
      <figcaption>The settings of an email step</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-callout kb-callout--tip">
  <p>Further down in a step's settings, <b>Schedule</b> sets the allowed weekdays, <b>Sending windows</b> the times of day the step may run, and the random delay a gap between each action, in minutes.</p>
</div>

<h2 class="kb-sub" id="launch">Set the limits and launch</h2>
<ol class="kb-steps">
  <li>
    <p>Click <span class="kb-kbd">Settings</span> at the top. <b>Flow Settings</b> opens.</p>
  </li>
  <li>
    <p>Set <b>Drip Rate</b>, the number of contacts that go from the queue to the first action, and the daily limits per sender, such as <b>Email send rate</b> and <b>Connection request send rate</b>. Choose the <b>Timezone</b> and click <span class="kb-kbd">Save Settings</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Flow Settings panel: Drip Rate, Email send rate and Connection request send rate with their values, the Timezone, and the Save Settings button, which is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/flows/64f1c2a9e8b7d3</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__card" style="max-width:420px;padding:20px;gap:14px;font-size:13px">
            <p class="kb-ui__h">Flow Settings</p>
            <div class="kb-ui__stack" style="gap:4px">
              <div class="kb-ui__row" style="justify-content:space-between"><b>Drip Rate</b><span>20</span></div>
              <span class="kb-ui__muted kb-ui__small">Number of contacts going <b>from the queue to the first action</b></span>
              <span style="display:block;height:4px;border-radius:2px;background:linear-gradient(90deg,var(--hs-primary,#192341) 10%,var(--hs-border,#d3d8e5) 10%)"></span>
            </div>
            <div class="kb-ui__stack" style="gap:4px">
              <div class="kb-ui__row" style="justify-content:space-between"><b>Email send rate</b><span>50</span></div>
              <span class="kb-ui__muted kb-ui__small">Max number of <b>emails</b> sent per day per sender</span>
              <span style="display:block;height:4px;border-radius:2px;background:linear-gradient(90deg,var(--hs-primary,#192341) 10%,var(--hs-border,#d3d8e5) 10%)"></span>
            </div>
            <div class="kb-ui__stack" style="gap:4px">
              <div class="kb-ui__row" style="justify-content:space-between"><b>Connection request send rate</b><span>20</span></div>
              <span class="kb-ui__muted kb-ui__small">Max number of <b>connection requests</b> per day per sender</span>
              <span style="display:block;height:4px;border-radius:2px;background:linear-gradient(90deg,var(--hs-primary,#192341) 20%,var(--hs-border,#d3d8e5) 20%)"></span>
            </div>
            <p class="kb-ui__field"><b>Timezone</b><span class="kb-ui__input is-select">Europe/Berlin</span></p>
            <span class="kb-ui__btn is-primary is-marked" style="text-align:center">Save Settings</span>
          </div>
        </div>
      </div>
      <figcaption>Flow Settings with the daily limits</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Launch</span> at the top right.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Your Flow is live.</b> hubsell confirms with <i>Flow launched. Sending starts with the next run.</i> and the button changes to <b>Pause</b>. Next, add contacts to it, see <a href="/knowledge/adding-contacts-to-a-flow/">Add contacts to a flow</a>.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Common mistakes</p>
  <ul>
    <li><b>A step never runs.</b> Its Action status is still <b>Off</b>. Click the step and set it to <b>On</b>.</li>
    <li><b>A branch has no condition.</b> Click the branch and pick one under Branch Conditions, so each contact knows which path to take.</li>
    <li><b>Contacts without an email address in an email Flow.</b> Email steps skip them. Filter on <b>Has email</b> before you add contacts, or give them a LinkedIn-only Flow.</li>
  </ul>
</div>
