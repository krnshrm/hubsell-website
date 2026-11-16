---
title: "Roles and permissions"
description: "Choose what each person in your team may change: nothing, only their own contacts and flows, or the whole team's."
category: "Account and billing"
order: 2
estMinutes: 4
stepCount: 6
appliesTo: "All plans. Only account admins can manage roles."
prerequisites: "You're an account admin."
updated: 2026-11-16
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
draft: false
---
<!-- sources: hubsell-client src/components/nav-user.tsx, src/i18n/messages/en/userMenu.json, src/components/settings/company/roles/RolesSettings.tsx, src/components/settings/company/team-management/TeamManagment.tsx, src/components/settings/company/team-management/team-actions/index.tsx, src/components/settings/company/team-management/team-actions/actions-list.tsx, src/i18n/messages/en/settings.json -->
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
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The profile menu, opened from your name at the bottom of the sidebar. Your name is marked 1 and Roles &amp; permissions is marked 2.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/dashboard</span></div>
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
            <span class="kb-ui__item" style="margin-top:auto">Credits</span>
            <span class="kb-ui__item is-marked"><b>Anna Berger</b><span class="kb-ui__num">1</span><br><span class="kb-ui__muted kb-ui__small">anna@example.com</span></span>
          </div>
          <div class="kb-ui__main">
            <div class="kb-ui__menu" style="align-self:flex-start">
              <span><b>Anna Berger</b><br><span class="kb-ui__muted kb-ui__small">anna@example.com</span></span>
              <span class="is-sep"></span>
              <span>User settings</span>
              <span>Company settings</span>
              <span class="is-marked">Roles &amp; permissions<span class="kb-ui__num">2</span></span>
              <span>Plan &amp; usage</span>
              <span>Integrations</span>
              <span>Suppression</span>
              <span class="is-sep"></span>
              <span>MCP</span>
              <span>Language</span>
              <span class="is-sep"></span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Opening Roles &amp; permissions</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">New role</span>.</p>
  </li>
  <li>
    <p>Enter a <b>Name</b>, for example <i>SDR</i>, and optionally a description. Under <b>Start from</b>, pick Member to begin with the defaults, or another role to copy its permissions. Click <span class="kb-kbd">Create role</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The New role dialog: Name filled in with SDR, an empty Description, Start from set to Member, and the Cancel and Create role buttons. Create role is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/roles</span></div>
        <div class="kb-ui__overlay" aria-hidden="true">
          <div class="kb-ui__card">
            <div>
              <p class="kb-ui__title">New role</p>
              <p class="kb-ui__muted">Give the role a name, then choose its permissions.</p>
            </div>
            <p class="kb-ui__field"><b>Name</b><span class="kb-ui__input">SDR</span></p>
            <p class="kb-ui__field"><b>Description</b><span class="kb-ui__input" style="min-height:52px"></span></p>
            <p class="kb-ui__field"><b>Start from</b><span class="kb-ui__input is-select">Member</span><span class="kb-ui__muted kb-ui__small">Copies the permissions of this role. You can change them afterwards.</span></p>
            <div class="kb-ui__actions">
              <span class="kb-ui__btn">Cancel</span>
              <span class="kb-ui__btn is-primary is-marked">Create role</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Creating the role</figcaption>
    </figure>
  </li>
  <li>
    <p>For each action, choose <span class="kb-kbd">None</span>, <span class="kb-kbd">Own</span> or <span class="kb-kbd">Team</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Roles &amp; permissions page with the SDR role selected: the list of roles on the left, and on the right the role's name and description and a None, Own or Team choice for each action. Team for Change contact status is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/roles</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div>
            <p class="kb-ui__h">Roles &amp; permissions</p>
            <p class="kb-ui__muted">Choose what each role may change: nothing, only their own records, or the whole team's. Everyone can still see the team's contacts, lists and flows.</p>
          </div>
          <div class="kb-ui__row"><span class="kb-ui__btn is-primary">New role</span></div>
          <div class="kb-ui__row" style="align-items:flex-start;gap:16px">
            <div class="kb-ui__stack" style="flex:1 1 150px;max-width:200px;gap:4px">
              <span class="kb-ui__item"><b>Admin</b> <span class="kb-ui__badge">Built-in</span><br><span class="kb-ui__muted kb-ui__small">1 user</span></span>
              <span class="kb-ui__item"><b>Member</b> <span class="kb-ui__badge">Built-in</span><br><span class="kb-ui__muted kb-ui__small">2 users</span></span>
              <span class="kb-ui__item is-active"><b>SDR</b><br><span class="kb-ui__muted kb-ui__small">No users</span></span>
            </div>
            <div class="kb-ui__stack" style="flex:3 1 260px;gap:10px">
              <div class="kb-ui__row" style="justify-content:space-between">
                <p class="kb-ui__label" style="font-size:16px">SDR</p>
                <span class="kb-ui__btn">History</span>
              </div>
              <p class="kb-ui__muted kb-ui__small">None: not allowed. Own: only records the user owns. Team: any record in the account.</p>
              <b>Contacts</b>
              <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:8px">
                <div><b>Change contact status</b><p class="kb-ui__muted kb-ui__small">Set statuses such as Interested, or mark contacts as replied or bounced.</p></div>
                <div class="kb-ui__row" style="gap:4px"><span class="kb-ui__btn" style="padding:4px 10px">None</span><span class="kb-ui__btn" style="padding:4px 10px">Own</span><span class="kb-ui__btn is-primary is-marked" style="padding:4px 10px">Team</span></div>
              </div>
              <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:8px">
                <div><b>Edit contacts</b><p class="kb-ui__muted kb-ui__small">Change contact details.</p></div>
                <div class="kb-ui__row" style="gap:4px"><span class="kb-ui__btn" style="padding:4px 10px">None</span><span class="kb-ui__btn is-primary" style="padding:4px 10px">Own</span><span class="kb-ui__btn" style="padding:4px 10px">Team</span></div>
              </div>
              <div class="kb-ui__row" style="justify-content:space-between;border-top:1px solid var(--hs-border,#d3d8e5);padding-top:8px">
                <div><b>Tag contacts</b><p class="kb-ui__muted kb-ui__small">Add and remove tags.</p></div>
                <div class="kb-ui__row" style="gap:4px"><span class="kb-ui__btn" style="padding:4px 10px">None</span><span class="kb-ui__btn" style="padding:4px 10px">Own</span><span class="kb-ui__btn is-primary" style="padding:4px 10px">Team</span></div>
              </div>
              <div class="kb-ui__row" style="border-top:1px solid var(--hs-border,#d3d8e5);padding-top:10px"><span class="kb-ui__btn is-primary">Save changes</span><span class="kb-ui__btn">Discard changes</span></div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Choosing what the role allows</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Save changes</span>.</p>
  </li>
</ol>

<h2 class="kb-sub">Give someone a role</h2>
<ol class="kb-steps">
  <li>
    <p>Go to <b>Company settings</b> → <b>Team management</b>, select one person, open the actions menu and click <span class="kb-kbd">Change role</span>. Pick the role and click <span class="kb-kbd">Change role</span> again.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="Team Management with Tom Fischer selected. The 1 selected button above the list is open and shows Change role, which is marked, Make it observer and Deactivate.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/team-management</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__toolbar">
            <span class="kb-ui__btn">Status</span>
            <span class="kb-ui__btn" style="margin-right:auto">1 selected</span>
            <span class="kb-ui__btn">Roles &amp; permissions</span>
            <span class="kb-ui__btn">Invite your team</span>
          </div>
          <div class="kb-ui__menu" style="align-self:flex-start;min-width:0">
            <span class="is-marked">Change role</span>
            <span>Make it observer</span>
            <span>Deactivate</span>
          </div>
          <div class="kb-ui__tablewrap"><table class="kb-ui__table">
            <tr><th></th><th>Team member</th><th>Email address</th><th>Role</th><th>Status</th></tr>
            <tr><td><span class="kb-ui__box" style="margin:0"></span></td><td>Anna Berger</td><td>anna@example.com</td><td>Admin</td><td><span style="color:var(--hs-success-strong,#23757e)">active</span></td></tr>
            <tr class="is-selected"><td><span class="kb-ui__box is-on" style="margin:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td><td>Tom Fischer</td><td>tom@example.com</td><td>Member</td><td><span style="color:var(--hs-success-strong,#23757e)">active</span></td></tr>
          </table></div>
        </div>
      </div>
      <figcaption>Changing a person's role</figcaption>
    </figure>
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
