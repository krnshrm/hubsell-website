---
title: "Set up your personal and company account"
description: "Fill in your user profile and your company profile in hubsell, so your account is ready before you connect a mailbox."
category: "Getting started"
order: 1
series: "First login to first campaign"
seriesStep: 1
seriesTotal: 8
estMinutes: 3
stepCount: 7
appliesTo: "All plans. Only account admins can fill in the company profile."
prerequisites: "A hubsell account you can log in to at app.hubsell.com."
updated: 2026-11-16
faqs:
  - q: "I can't see Company settings in the profile menu. Why?"
    a: "Company settings, Roles & permissions, Plan & usage and Integrations are only shown to account admins. Ask an account admin in your team to fill in the company profile or to make you an admin."
  - q: "Can I change my email address on the profile form?"
    a: "No. The Email address field shows the address you log in with and can't be edited there."
  - q: "Do I have to add a profile picture?"
    a: "No. Click Skip for now on the Add your profile picture step and add one later with Update photo."
  - q: "What are the steps at the top of the page?"
    a: "They show where you are in setting up your account. User settings has five: Add profile picture, Fill info, Connect mailbox, Add signature and Connect LinkedIn. Company settings has four: Company info, Team Management, Add snippet and Update privacy policy."
next:
  label: "Connect your mailbox and LinkedIn"
  href: "/knowledge/connect-your-mailbox-and-linkedin/"
draft: false
---
<!-- sources: hubsell-client src/components/nav-user.tsx, src/components/app-sidebar.tsx, src/i18n/messages/en/userMenu.json, src/i18n/messages/en/settings.json, src/app/settings/user/page.tsx, src/app/settings/user/[tab]/page.tsx, src/components/settings/SettingsFrames.tsx, src/components/settings/user/UserSettings.tsx, src/lib/userAccountSteps.ts, src/lib/companyAccountSteps.ts, src/components/settings/user/profile/UserProfileCard.tsx, src/components/settings/user/profile-picture/ProfilePicture.tsx, src/components/settings/company/company-info/CompanyInfo.tsx -->
<p>Your user profile tells your team who you are, and your company profile holds your business and billing details. Filling both in now is the first step of setting up hubsell.</p>

<h2 class="kb-sub">Fill in your user profile</h2>
<ol class="kb-steps">
  <li>
    <p>Click your name at the bottom of the left sidebar, then click <span class="kb-kbd">User settings</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The profile menu, opened from your name at the bottom of the sidebar. Your name is marked 1 and User settings is marked 2.">
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
              <span class="is-marked">User settings<span class="kb-ui__num">2</span></span>
              <span>Company settings</span>
              <span>Roles &amp; permissions</span>
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
      <figcaption>The profile menu at the bottom of the sidebar</figcaption>
    </figure>
  </li>
  <li>
    <p>If you don't have a profile picture yet, hubsell starts at <b>Add your profile picture</b>. Click <span class="kb-kbd">Update photo</span> to upload a PNG or JPG of up to 5MB, or click <span class="kb-kbd">Use this photo</span> if hubsell found one from your sign-in. Then click <span class="kb-kbd">Next</span>, or <span class="kb-kbd">Skip for now</span> to do it later.</p>
  </li>
  <li>
    <p>On <b>Complete your user profile</b>, fill in <b>First name</b>, <b>Last name</b> and <b>Title</b>. These three are required. Add your <b>LinkedIn profile URL</b> and <b>Phone number</b> if you like.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The User settings page on the Fill info step: the Complete your user profile form with first name, last name, title, email address, LinkedIn profile URL and phone number. The Update your profile button is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/user/profile</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div>
            <p class="kb-ui__label">Onboarding</p>
            <p class="kb-ui__muted kb-ui__small">Complete the steps below to fully activate your hubsell account.</p>
          </div>
          <div class="kb-ui__row kb-ui__small">
            <span class="kb-ui__badge is-success">Add profile picture</span>
            <span class="kb-ui__badge is-info">Fill info</span>
            <span class="kb-ui__badge">Connect mailbox</span>
            <span class="kb-ui__badge">Add signature</span>
            <span class="kb-ui__badge">Connect LinkedIn</span>
          </div>
          <div class="kb-ui__card" style="max-width:none">
            <p class="kb-ui__title">Complete your user profile</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px">
              <p class="kb-ui__field"><b>First name *</b><span class="kb-ui__input">Anna</span></p>
              <p class="kb-ui__field"><b>Last name *</b><span class="kb-ui__input">Berger</span></p>
              <p class="kb-ui__field"><b>Title *</b><span class="kb-ui__input">Head of Sales</span></p>
              <p class="kb-ui__field"><b>Email address *</b><span class="kb-ui__input is-placeholder">anna@example.com</span></p>
              <p class="kb-ui__field"><b>LinkedIn profile URL</b><span class="kb-ui__input is-placeholder">linkedin.com/in/name</span></p>
              <p class="kb-ui__field"><b>Phone number</b><span class="kb-ui__input is-placeholder">eg. 99444*****</span></p>
            </div>
            <div class="kb-ui__row"><span class="kb-ui__btn is-primary is-marked">Update your profile</span></div>
          </div>
        </div>
      </div>
      <figcaption>The Fill info step in User settings</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Update your profile</span>. During your first set-up this button also shows the credits the step earns, and <span class="kb-kbd">Skip for now</span> lets you come back later.</p>
  </li>
</ol>

<div class="kb-callout kb-callout--tip">
  <p>After you save, hubsell takes you to the next step, <b>Connect mailbox</b>. That's covered in the next article, so you can leave it for now and fill in your company profile first.</p>
</div>

<h2 class="kb-sub">Fill in your company profile</h2>
<ol class="kb-steps">
  <li>
    <p>Click your name at the bottom of the sidebar again, then click <span class="kb-kbd">Company settings</span>. It opens on the <b>Company info</b> step.</p>
  </li>
  <li>
    <p>On <b>Complete your company profile</b>, fill in your company's registered details: <b>Company legal name</b>, the address fields, <b>Billing email</b>, <b>Registration number</b> and <b>VAT identification number</b>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Company settings page on the Company info step: the Complete your company profile form with company legal name, address, billing email, registration number and VAT number. The Update company profile button is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/company/company-information</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div>
            <p class="kb-ui__label">Onboarding</p>
            <p class="kb-ui__muted kb-ui__small">Complete the steps below to fully activate your hubsell account.</p>
          </div>
          <div class="kb-ui__row kb-ui__small">
            <span class="kb-ui__badge is-info">Company info</span>
            <span class="kb-ui__badge">Team Management</span>
            <span class="kb-ui__badge">Add snippet</span>
            <span class="kb-ui__badge">Update privacy policy</span>
          </div>
          <div class="kb-ui__card" style="max-width:none">
            <p class="kb-ui__title">Complete your company profile</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px">
              <p class="kb-ui__field"><b>Company legal name</b><span class="kb-ui__input">Northwind Logistics</span></p>
              <p class="kb-ui__field"><b>Street Address</b><span class="kb-ui__input is-placeholder">123 Main Street, Suite 4B</span></p>
              <p class="kb-ui__field"><b>City</b><span class="kb-ui__input is-placeholder">City name</span></p>
              <p class="kb-ui__field"><b>Postcode</b><span class="kb-ui__input is-placeholder">Postcode</span></p>
              <p class="kb-ui__field"><b>Country</b><span class="kb-ui__input is-placeholder">Country name</span></p>
              <p class="kb-ui__field"><b>Billing email</b><span class="kb-ui__input">billing@example.com</span></p>
              <p class="kb-ui__field"><b>Registration number</b><span class="kb-ui__input is-placeholder">e.g. HRB123456</span></p>
              <p class="kb-ui__field"><b>VAT identification number</b><span class="kb-ui__input is-placeholder">e.g. DE123456789</span></p>
            </div>
            <div class="kb-ui__row"><span class="kb-ui__btn is-primary is-marked">Update company profile</span></div>
          </div>
        </div>
      </div>
      <figcaption>The Company info step in Company settings</figcaption>
    </figure>
  </li>
  <li>
    <p>Click <span class="kb-kbd">Update company profile</span>.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Both profiles are saved.</b> hubsell confirms with <i>Profile updated successfully.</i> and <i>Company information has been saved successfully.</i> Next, connect your mailbox and LinkedIn.</p>
</div>
