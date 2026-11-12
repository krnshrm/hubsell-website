---
title: "Roles and permissions"
description: "Choose what each person in your team may change: nothing, only their own contacts and flows, or the whole team's."
category: "Account and billing"
order: 2
estMinutes: 4
stepCount: 6
appliesTo: "All plans. Only account admins can manage roles."
prerequisites: "You're an account admin."
updated: 2026-11-12
faqs:
  - q: "Can a role hide contacts or flows from someone?"
    a: "No. Roles only decide what people may change. Everyone in the account still sees the team's contacts, lists and flows."
  - q: "What happens to people when I delete a role?"
    a: "They move to the Member role straight away. The confirmation tells you how many people that is."
  - q: "Can a role let someone manage the team or billing?"
    a: "No. Inviting people, roles, seats, billing, company settings and changing who owns a flow or list always stay with account admins."
  - q: "Does a role apply when someone uses hubsell through Claude (MCP)?"
    a: "Yes. The MCP acts as that person, so it can change exactly what their role allows. When something isn't allowed, Claude is told so and says why."
  - q: "When does a change to a role take effect?"
    a: "Immediately: from the next thing the person does, without logging out."
draft: true
---
<p>By default, everyone in your team can change their own contacts, lists and flows, and only account admins can change a teammate's. Roles let you change that per action. For example, SDRs may update the status of any contact in the team, while only team leads may launch or pause flows.</p>

<div class="kb-callout kb-callout--tip">
  <p>Roles only control <b>changes</b>. Everyone can still <b>see</b> the whole team's contacts, lists and flows.</p>
</div>

<h2 class="kb-sub">How roles work</h2>
<p>For every action, a role has one of three levels:</p>
<ul>
  <li><b>None</b>: not allowed, not even on the person's own records.</li>
  <li><b>Own</b>: only records the person owns. This is the default for every action.</li>
  <li><b>Team</b>: any record in the account, including teammates'.</li>
</ul>
<p>Every account starts with two built-in roles:</p>
<ul>
  <li><b>Admin</b>: account admins. They can do everything, including managing the team, roles and billing. This role can't be changed.</li>
  <li><b>Member</b>: everyone without another role. You can change its permissions, which changes them for all members at once. It can't be renamed or deleted.</li>
</ul>
<p>You can add up to 20 roles in total. The actions are grouped as follows:</p>
<ul>
  <li><b>Contacts</b>: change status, edit, tag, move, enrich (uses credits), push to CRM, export, and add to flows.</li>
  <li><b>Lists and segments</b>: create, rename, convert and delete.</li>
  <li><b>Flows</b>: edit (steps, templates, settings), launch and pause, and handle tasks.</li>
  <li><b>Templates</b>, <b>Sourcing</b> (LinkedIn and sourcing searches) and <b>AI</b> (personas).</li>
</ul>

<h2 class="kb-sub">Create a role</h2>
<ol class="kb-steps">
  <li>
    <p>Click your <b>profile icon</b>, then <span class="kb-kbd">Roles &amp; permissions</span>. You can also open it from <b>Team management</b> with the <span class="kb-kbd">Roles &amp; permissions</span> button.</p>
    <figure class="kb-figure is-missing" data-ph="Screenshot: Roles & permissions in the profile menu"><figcaption>Opening Roles &amp; permissions</figcaption></figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">New role</span>.</p>
  </li>
  <li>
    <p>Enter a <b>Name</b>, for example <i>SDR</i>, and optionally a description. Under <b>Start from</b>, pick Member to begin with the defaults, or another role to copy its permissions. Click <span class="kb-kbd">Create role</span>.</p>
    <figure class="kb-figure is-missing" data-ph="Screenshot: the New role dialog"><figcaption>Creating the role</figcaption></figure>
  </li>
  <li>
    <p>For each action, choose <span class="kb-kbd">None</span>, <span class="kb-kbd">Own</span> or <span class="kb-kbd">Team</span>.</p>
    <figure class="kb-figure is-missing" data-ph="Screenshot: the permissions of a role"><figcaption>Choosing what the role allows</figcaption></figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Save changes</span>.</p>
  </li>
</ol>

<h2 class="kb-sub">Give someone a role</h2>
<ol class="kb-steps">
  <li>
    <p>Go to <b>Company settings</b> → <b>Team management</b>, select one person, open the actions menu and click <span class="kb-kbd">Change role</span>. Pick the role and click <span class="kb-kbd">Change role</span> again.</p>
    <figure class="kb-figure is-missing" data-ph="Screenshot: Change role in the team list"><figcaption>Changing a person's role</figcaption></figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The role applies right away.</b> The Role column in Team management shows who has which role. Choosing Admin makes someone an account admin; choosing any other role removes that.</p>
</div>

<h2 class="kb-sub">Examples</h2>
<ul>
  <li><b>SDR</b>: Change contact status and Tag contacts on <b>Team</b>, so SDRs can work any lead in the team. Everything else on <b>Own</b>.</li>
  <li><b>Team lead</b>: Launch and pause flows and Handle tasks on <b>Team</b>, so they can step in on a teammate's flow. Edit flows stays on <b>Own</b>.</li>
  <li><b>Research assistant</b>: Add contacts to flows, Launch and pause flows, Enrich contacts and Export contacts on <b>None</b>. They can source, tag and organise contacts, but can't send anything or spend credits.</li>
</ul>

<h2 class="kb-sub">Change or delete a role</h2>
<p>Select the role in the list, change its name or levels, and click <span class="kb-kbd">Save changes</span>. <span class="kb-kbd">History</span> shows who changed the role, when, and what. <span class="kb-kbd">Delete role</span> moves everyone with the role to Member.</p>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Good to know</p>
  <p>When a bulk action includes records someone may not change, hubsell changes the rest and tells them how many were skipped and why. Every account keeps at least one account admin, so the last admin can't be given another role.</p>
</div>

<h2 class="kb-sub">Observers</h2>
<p>An observer is a team member who uses hubsell like everyone else, with any role, but can't connect LinkedIn or a mailbox, so nothing is sent from their name. Observers don't take a paid seat and get the same notification emails as everyone else. Make someone an observer in Team management with <span class="kb-kbd">Make it observer</span>.</p>
