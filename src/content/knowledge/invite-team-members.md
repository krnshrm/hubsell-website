---
title: "Invite team members"
description: "Invite colleagues to your hubsell account as regular users, who run their own outreach, or as observers, who don't send."
category: "Getting started"
order: 8
series: "First login to first campaign"
seriesStep: 8
seriesTotal: 8
estMinutes: 2
stepCount: 6
appliesTo: "All plans. Only account admins can invite people."
prerequisites: "You're an account admin."
updated: 2026-11-16
faqs:
  - q: "How does someone join after I invite them?"
    a: "They get an invitation email with a link. They open it, enter their name and a password, and accept the terms. The link works for 30 days; after that, invite them again."
  - q: "What's the difference between a regular user and an observer?"
    a: "A regular user takes a seat and can connect a mailbox and LinkedIn, so Flows can send in their name. An observer uses hubsell like everyone else but can't connect a mailbox or LinkedIn, so nothing is sent from their name, and doesn't take a seat."
  - q: "What if I have no unused seat?"
    a: "The dialog says so and asks for the Number of seats you need. Click Request new seats and the hubsell team gets your request."
  - q: "Can I choose what a new team member may change?"
    a: "Yes, with roles. Everyone starts with the Member role. See Roles and permissions."
draft: false
---
<!-- sources: hubsell-client src/components/nav-user.tsx, src/lib/companyAccountSteps.ts, src/components/settings/company/team-management/TeamManagment.tsx, src/components/settings/company/team-management/invite-team-member/InviteTeamMember.tsx, src/i18n/messages/en/settings.json, src/i18n/messages/en/common.json; hubsell-api server/routes.js (invite-user), server/controllers/userController.js (checkInvitation, completeRegistration) -->
<p>Each team member gets their own login. Regular users can be picked as the sender when contacts are added to a Flow.</p>

<h2 class="kb-sub">Send an invitation</h2>
<ol class="kb-steps">
  <li>
    <p>Click your name at the bottom of the left sidebar, then click <span class="kb-kbd">Company settings</span>.</p>
  </li>
  <li>
    <p>In the steps at the top of the page, click <span class="kb-kbd">Team Management</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Invite your team</span>.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Invite regular users and get seats</span>. To invite someone who won't send, click <span class="kb-kbd">Invite observer users</span> instead.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Team Management page with the team list. The Invite your team menu is open: Invite your team is marked 1 and Invite regular users and get seats is marked 2.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/team-management</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__row kb-ui__small">
            <span class="kb-ui__badge is-success">Company info</span>
            <span class="kb-ui__badge is-info">Team Management</span>
            <span class="kb-ui__badge">Add snippet</span>
            <span class="kb-ui__badge">Update privacy policy</span>
          </div>
          <div class="kb-ui__toolbar">
            <span class="kb-ui__btn">Status</span>
            <span style="margin-left:auto" class="kb-ui__btn">Roles &amp; permissions</span>
            <span class="kb-ui__btn is-marked">Invite your team<span class="kb-ui__num">1</span></span>
          </div>
          <div class="kb-ui__menu" style="align-self:flex-end;min-width:0">
            <span class="is-marked">Invite regular users and get seats<span class="kb-ui__num">2</span></span>
            <span>Invite observer users</span>
          </div>
          <div class="kb-ui__tablewrap"><table class="kb-ui__table">
            <tr><th>Team member</th><th>Email address</th><th>Role</th><th>Status</th></tr>
            <tr><td>Anna Berger</td><td>anna@example.com</td><td>Admin</td><td><span style="color:var(--hs-success-strong,#23757e)">active</span></td></tr>
            <tr><td>Tom Fischer</td><td>tom@example.com</td><td>Member</td><td><span style="color:var(--hs-success-strong,#23757e)">active</span></td></tr>
          </table></div>
        </div>
      </div>
      <figcaption>Team Management with the Invite your team menu</figcaption>
    </figure>
  </li>
  <li>
    <p>Check the seats line in the dialog, then enter your colleague's address in the <b>Email</b> field.</p>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Invite regular user</span>. For an observer, the button is called <span class="kb-kbd">Invite observer user</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Invite regular users dialog: a short explanation, the number of seats used and unused, the Email field filled in, and the Cancel and Invite regular user buttons. Invite regular user is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/team-management</span></div>
        <div class="kb-ui__overlay" aria-hidden="true">
          <div class="kb-ui__card">
            <div>
              <p class="kb-ui__title">Invite regular users</p>
              <p class="kb-ui__muted">Here you can invite your team members to use hubsell as an observer or a regular user.</p>
              <p class="kb-ui__label" style="padding-top:8px">Seats: 2/3 used. You have 1 unused seat.</p>
            </div>
            <p class="kb-ui__field"><b>Email</b><span class="kb-ui__input">lena@example.com</span></p>
            <div class="kb-ui__actions">
              <span class="kb-ui__btn">Cancel</span>
              <span class="kb-ui__btn is-primary is-marked">Invite regular user</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Inviting a regular user</figcaption>
    </figure>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>The invitation is on its way.</b> hubsell confirms with <i>Team member invited</i>. Your colleague appears in the team list with the status <b>invited</b> and becomes <b>active</b> once they've created their account from the email.</p>
</div>

<div class="kb-callout kb-callout--tip">
  <p class="kb-callout__h">Next</p>
  <p>Everyone you invite gets the <b>Member</b> role. To change what someone may do, see <a href="/knowledge/roles-and-permissions/">Roles and permissions</a>. To make someone an observer later, select them in the list, click the <b>selected</b> button above the list and choose <span class="kb-kbd">Make it observer</span>.</p>
</div>
