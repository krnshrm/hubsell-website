---
title: "Connect your mailbox and LinkedIn"
description: "Connect the Google or Microsoft mailbox your Flow emails go out from, and connect LinkedIn with the hubsell Chrome extension."
category: "Getting started"
order: 2
series: "First login to first campaign"
seriesStep: 2
seriesTotal: 8
estMinutes: 5
stepCount: 9
appliesTo: "All plans. Observers can't connect a mailbox or LinkedIn."
prerequisites: "A Google or Microsoft mailbox, Google Chrome, and a LinkedIn account you're signed in to in Chrome."
updated: 2026-11-16
faqs:
  - q: "Which mailboxes does hubsell support?"
    a: "Google and Microsoft. You connect one mailbox per user. While one is connected, the other provider's card can't be used."
  - q: "How do I switch to a different mailbox?"
    a: "Click the card of the connected mailbox, confirm with Yes please disconnect, then connect the other one."
  - q: "The extension says: Please log in to your hubsell account."
    a: "Log in to app.hubsell.com in the same Chrome window, then open the extension again."
  - q: "The extension says I'm not signed into LinkedIn."
    a: "hubsell opens LinkedIn for you. Sign in there, then open the extension and click Connect to LinkedIn again."
  - q: "The cards say Not allowed to connect. Why?"
    a: "You're an observer. Observers can use hubsell like everyone else, but can't connect LinkedIn or a mailbox, so nothing is sent from their name. Ask an account admin if you need to send."
next:
  label: "Source data into hubsell"
  href: "/knowledge/sourcing-data-into-hubsell/"
draft: false
---
<!-- sources: hubsell-client src/lib/userAccountSteps.ts, src/i18n/messages/en/settings.json, src/components/settings/user/mailbox/MailboxSelector.tsx, src/components/settings/user/mailbox/GoogleMailbox.tsx, src/components/settings/user/mailbox/MicrosoftMailbox.tsx, src/components/settings/user/mailbox/IntegrationCard.tsx, src/components/settings/user/linkedin/LinkedIn.tsx, src/components/settings/user/ObserverNotice.tsx, src/i18n/messages/en/common.json; hubsell-plugin src/popup/popup.tsx -->
<p>hubsell sends your Flow emails from your own mailbox and runs LinkedIn steps from your own LinkedIn account. Connect both before you build your first Flow.</p>

<h2 class="kb-sub" id="mailbox">Connect your mailbox</h2>
<ol class="kb-steps">
  <li>
    <p>Click your name at the bottom of the left sidebar, then click <span class="kb-kbd">User settings</span>.</p>
  </li>
  <li>
    <p>In the steps at the top of the page, click <span class="kb-kbd">Connect mailbox</span>.</p>
  </li>
  <li>
    <p>Under <b>Connect your mailbox</b>, click <span class="kb-kbd">Connect</span> on the <b>Google</b> or the <b>Microsoft</b> card.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Connect mailbox step in User settings: a Google card and a Microsoft card, each with a Connect button. Connect on the Google card is marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/user/mailbox</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__row kb-ui__small">
            <span class="kb-ui__badge is-success">Add profile picture</span>
            <span class="kb-ui__badge is-success">Fill info</span>
            <span class="kb-ui__badge is-info">Connect mailbox</span>
            <span class="kb-ui__badge">Add signature</span>
            <span class="kb-ui__badge">Connect LinkedIn</span>
          </div>
          <div class="kb-ui__card" style="max-width:none">
            <p class="kb-ui__title">Connect your mailbox</p>
            <p class="kb-ui__muted">Select your provider below to connect your email account.</p>
            <div class="kb-ui__row" style="align-items:stretch">
              <div class="kb-ui__stack" style="flex:1 1 140px;align-items:center;border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:20px 14px">
                <b>Google</b>
                <span class="kb-ui__btn is-marked" style="width:100%;text-align:center">Connect</span>
              </div>
              <div class="kb-ui__stack" style="flex:1 1 140px;align-items:center;border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:20px 14px">
                <b>Microsoft</b>
                <span class="kb-ui__btn" style="width:100%;text-align:center">Connect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Choosing your mailbox provider</figcaption>
    </figure>
  </li>
  <li>
    <p>Google or Microsoft opens. Sign in with the mailbox you send from and allow the access hubsell asks for.</p>
  </li>
  <li>
    <p>You come back to hubsell. The card of your provider now shows <b>Connected</b>.</p>
  </li>
</ol>

<h2 class="kb-sub" id="linkedin">Connect LinkedIn with the Chrome extension</h2>
<ol class="kb-steps">
  <li>
    <p>In the steps at the top of User settings, click <span class="kb-kbd">Connect LinkedIn</span>.</p>
  </li>
  <li>
    <p>On the <b>Chrome Extension</b> card, click <span class="kb-kbd">Download</span>. The Chrome Web Store opens in a new tab. Click <span class="kb-kbd">Add to Chrome</span> and confirm.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Connect LinkedIn step in User settings: the Chrome Extension card with its Download button marked.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/settings/user/linkedin</span></div>
        <div class="kb-ui__main" aria-hidden="true" style="font-size:13px">
          <div class="kb-ui__row kb-ui__small">
            <span class="kb-ui__badge is-success">Add profile picture</span>
            <span class="kb-ui__badge is-success">Fill info</span>
            <span class="kb-ui__badge is-success">Connect mailbox</span>
            <span class="kb-ui__badge">Add signature</span>
            <span class="kb-ui__badge is-info">Connect LinkedIn</span>
          </div>
          <div class="kb-ui__card" style="max-width:none">
            <div>
              <p class="kb-ui__title">Connect your LinkedIn</p>
              <p class="kb-ui__muted">Connect hubsell to LinkedIn via our Chrome extension to start prospecting.</p>
            </div>
            <p class="kb-ui__muted" style="color:inherit">Add hubsell to Chrome.</p>
            <div class="kb-ui__stack" style="max-width:200px;align-items:center;border:1px solid var(--hs-border,#d3d8e5);border-radius:12px;padding:20px 14px">
              <b>Chrome Extension</b>
              <span class="kb-ui__btn is-marked" style="width:100%;text-align:center">Download</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption>Downloading the hubsell Chrome extension</figcaption>
    </figure>
  </li>
  <li>
    <p>In the same Chrome window, open LinkedIn and check that you're signed in. Then click the <b>Extensions</b> icon in Chrome's toolbar and open <b>hubsell</b>.</p>
  </li>
  <li>
    <p>Check that the extension shows your hubsell name and email, then click <span class="kb-kbd">Connect to LinkedIn</span>.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The hubsell Chrome extension: the signed-in user's name and email, the Connect to LinkedIn button, which is marked, and a note about what connecting allows.">
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__card" style="max-width:320px;padding:18px;gap:14px">
            <div class="kb-ui__row" style="justify-content:space-between;border-bottom:1px solid var(--hs-border,#d3d8e5);padding-bottom:10px">
              <div><b>Anna Berger</b><p class="kb-ui__muted">anna@example.com</p></div>
              <span class="kb-ui__logo" style="padding:0">hubsell</span>
            </div>
            <span class="kb-ui__btn is-primary is-marked" style="text-align:center;border-radius:12px;padding:12px 16px">Connect to LinkedIn</span>
            <p class="kb-ui__muted kb-ui__small">By connecting your account, you authorise hubsell to access your LinkedIn profile, connections, and messages.</p>
          </div>
        </div>
      </div>
      <figcaption>The hubsell extension in Chrome</figcaption>
    </figure>
  </li>
  <li>
    <p>Wait a few seconds until the button changes to <b>Connected</b>.</p>
  </li>
</ol>

<div class="kb-result">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
  <p><b>Both channels are connected.</b> Your mailbox card in User settings shows <b>Connected</b>, and so does the hubsell extension. Your Flows can now send emails and run LinkedIn steps in your name.</p>
</div>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Good to know</p>
  <ul>
    <li><b>One mailbox per user.</b> To switch, click the connected card, confirm with <span class="kb-kbd">Yes please disconnect</span> and connect the other one.</li>
    <li><b>Disconnecting LinkedIn.</b> Open the extension and click <span class="kb-kbd">Connected</span>. It turns into <b>Disconnect</b> when you point at it.</li>
    <li><b>If a connection drops,</b> the Flow's <b>History</b> shows <i>Mailbox disconnected</i> or <i>LinkedIn disconnected</i>, and no emails or LinkedIn steps go out for that sender until you reconnect.</li>
  </ul>
</div>
