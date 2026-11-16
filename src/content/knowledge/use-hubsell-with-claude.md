---
title: "Use hubsell with Claude (MCP)"
description: "Connect hubsell to Claude or another AI assistant, then find contacts, read flow results, tag, enrich and start flows by asking in plain language."
category: "Claude and MCP"
order: 1
estMinutes: 5
stepCount: 4
appliesTo: "All plans. You need your own subscription to Claude or another AI assistant that supports MCP."
prerequisites: "A hubsell login, and Claude (app or Claude Code), Cursor or another app that supports MCP."
updated: 2026-11-16
faqs:
  - q: "Does this use hubsell credits?"
    a: "Only enrichment does, exactly as in the app. Everything else is free. The AI itself runs on your own subscription, not on hubsell credits."
  - q: "Can hubsell read my chats with Claude?"
    a: "No. Your assistant only sends hubsell the questions it needs answered, such as a contact search, and gets the results back. hubsell never sees your conversation."
  - q: "Can the assistant change a teammate's contacts or flows?"
    a: "Only if your role allows it. The assistant acts as you, with your role and permissions. When something isn't allowed, it is told so and tells you why."
  - q: "Can it email someone without asking me?"
    a: "Only if you gave it the Send emails permission. hubsell tells the assistant to ask you before it adds contacts to a flow or starts a flow, but the safest way is to leave Send emails off until you need it."
  - q: "How do I stop it?"
    a: "Click your profile icon, then MCP, and click Revoke next to the connection. It loses access straight away."
  - q: "Which apps work?"
    a: "Any app that supports MCP: the Claude app, Claude Code, Cursor, and command-line tools such as Codex or Gemini CLI. They all use the same address."
draft: false
---
<p>MCP (Model Context Protocol) is the standard way for an AI assistant to use other software. Once you connect hubsell, you can ask Claude things like <i>"Which of my contacts in Germany replied positively?"</i> or <i>"How is my UK flow doing this month?"</i>, and it looks up the answer in your hubsell account.</p>

<div class="kb-callout kb-callout--tip">
  <p>You use <b>your own</b> AI subscription. hubsell doesn't see your chats, and the assistant can only do what you allow when you connect it.</p>
</div>

<h2 class="kb-sub">Connect your assistant</h2>
<ol class="kb-steps">
  <li>
    <p>Copy the server address: <span class="kb-kbd">https://mcp.hubsell.com/mcp</span>. You also find it in hubsell: click your <b>profile icon</b>, then <span class="kb-kbd">MCP</span>, under <b>Connect your AI assistant</b>.</p>
  </li>
  <li>
    <p>Add it to your assistant:</p>
    <ul>
      <li><b>Claude app:</b> go to <b>Settings</b> → <b>Connectors</b> → <b>Add custom connector</b> and paste the address.</li>
      <li><b>Claude Code:</b> run <code>claude mcp add --transport http hubsell https://mcp.hubsell.com/mcp</code> in your terminal, then type <code>/mcp</code> in Claude Code.</li>
      <li><b>Cursor and other apps:</b> add a new MCP server with the same address.</li>
    </ul>
  </li>
  <li>
    <p>Your assistant opens hubsell in your browser. Log in if you aren't already. You then see a page called <b>Connect Claude to hubsell</b> (with the name of your app).</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Connect Claude to hubsell page: four permissions, Read and Write ticked, then the Cancel and Allow access buttons.">
        <div class="kb-ui__bar" aria-hidden="true"><i></i><i></i><i></i><span class="kb-ui__url">app.hubsell.com/oauth/authorize</span></div>
        <div class="kb-ui__stage" aria-hidden="true">
          <div class="kb-ui__card">
            <div class="kb-ui__head">
              <div class="kb-ui__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg></div>
              <div>
                <p class="kb-ui__title">Connect Claude to hubsell</p>
                <p class="kb-ui__muted">Claude wants to work with your hubsell account. Choose what it may do.</p>
                <p class="kb-ui__muted">Signed in as anna@example.com</p>
              </div>
            </div>
            <div class="kb-ui__perms">
              <p class="kb-ui__label">Permissions</p>
              <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><b>Read</b><span>View contacts, lists, flows, templates and statistics.</span></span></p>
              <p class="kb-ui__check"><span class="kb-ui__box is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><b>Write</b><span>Tag contacts, change their status and create lists.</span></span></p>
              <p class="kb-ui__check"><span class="kb-ui__box"></span><span><b>Spend credits</b><span>Enrich contacts. This uses your hubsell credits.</span></span></p>
              <p class="kb-ui__check"><span class="kb-ui__box"></span><span><b>Send emails</b><span>Add contacts to flows and start or pause flows. This can email real people.</span></span></p>
            </div>
            <p class="kb-ui__muted kb-ui__small">Claude only gets the results of what it asks for here. hubsell never sees your chats with Claude. You can disconnect it at any time in Settings → MCP.</p>
            <p class="kb-ui__muted kb-ui__small">You'll go back to claude.ai.</p>
            <div class="kb-ui__actions"><span class="kb-ui__btn">Cancel</span><span class="kb-ui__btn is-primary is-marked">Allow access</span></div>
          </div>
        </div>
      </div>
      <figcaption>Choosing what the assistant may do. Read and Write are ticked to start with.</figcaption>
    </figure>
  </li>
  <li>
    <p>Choose the permissions (see below) and click <span class="kb-kbd">Allow access</span>. You go back to your assistant, which is now connected.</p>
  </li>
</ol>

<div class="kb-result">
  <p>Ask your assistant <i>"What's my hubsell account and how many credits do I have?"</i> to check that it works.</p>
</div>

<h2 class="kb-sub">The four permissions</h2>
<ul>
  <li><b>Read:</b> view contacts, lists, flows, templates and statistics.</li>
  <li><b>Write:</b> tag contacts, change their status and create lists.</li>
  <li><b>Spend credits:</b> enrich contacts. This uses your hubsell credits.</li>
  <li><b>Send emails:</b> add contacts to flows and start or pause flows. This can email real people.</li>
</ul>
<p>Pick only what you need. You can start with <b>Read</b> and connect again later with more.</p>

<h2 class="kb-sub">What you can ask</h2>
<p><b>Your account and team</b></p>
<ul>
  <li>Your account, your plan limits and how many credits you have left.</li>
  <li>Who is in your team. Example: <i>"Who in my team can send flow emails?"</i></li>
</ul>
<p><b>Contacts</b></p>
<ul>
  <li>Search your contacts by name, email, job title or company, and filter by list, flow, status, tag, seniority, department, industry, company size, the contact's country, the company's country, source and enrichment status. Example: <i>"Find CEOs in the Netherlands in my Angels list."</i></li>
  <li>Show everything about one contact: job, company, email, LinkedIn profile, lists, flows and campaigns.</li>
  <li>List the statuses and tags you use.</li>
</ul>
<p><b>Lists, flows and templates</b></p>
<ul>
  <li>List your lists (segments) and your flows, with their basic numbers.</li>
  <li>Show the results of one flow for any period: sent, opened, clicked, replied, positive and neutral replies, bounces and LinkedIn invitations accepted. Without a period you get the last 30 days. Example: <i>"How did my UK hiring flow do in October?"</i></li>
  <li>List your saved email and LinkedIn templates with a preview of each.</li>
</ul>
<p><b>Changes (needs Write)</b></p>
<ul>
  <li>Add or remove tags on up to 500 contacts at once.</li>
  <li>Change the status of contacts, for example to <i>Replied Positive: Next Stage</i>, with an optional note.</li>
  <li>Create a new, empty list.</li>
</ul>
<p><b>Enrichment (needs Spend credits)</b></p>
<ul>
  <li>Find verified emails, or emails and phone numbers, for up to 500 contacts at once. It runs in the background and the results appear on the contacts.</li>
</ul>
<p><b>Flows (needs Send emails)</b></p>
<ul>
  <li>Add up to 500 contacts to a flow and choose which teammate sends. Suppressed and locked contacts are skipped.</li>
  <li>Start or pause a flow.</li>
</ul>

<div class="kb-callout kb-callout--warn">
  <p class="kb-callout__h">Before anything is sent or spent</p>
  <p>hubsell tells your assistant to ask you before it enriches contacts, adds them to a flow or starts a flow, and to say how many contacts that affects. Read the question before you say yes: once a flow runs, emails and LinkedIn messages go out in the sender's name. If you want to be sure, connect without <b>Spend credits</b> and <b>Send emails</b>.</p>
</div>

<h2 class="kb-sub">What it can't do yet</h2>
<ul>
  <li>Create or edit flows and templates.</li>
  <li>Delete contacts, lists or flows.</li>
  <li>Move contacts into a list, import or export contacts.</li>
  <li>Push contacts to your CRM, run LinkedIn searches, or read and answer replies.</li>
  <li>Change your account or team settings.</li>
</ul>
<p>Do these in the app. We add new abilities regularly.</p>

<h2 class="kb-sub">Your role applies</h2>
<p>The assistant acts as you. It sees what you see in hubsell and can only change what your role allows (see <a href="/knowledge/roles-and-permissions/">Roles and permissions</a>). When you change many contacts at once, it tells you how many were skipped and why, for example because they belong to a teammate.</p>

<h2 class="kb-sub">See and disconnect your connections</h2>
<p>Click your <b>profile icon</b>, then <span class="kb-kbd">MCP</span>. The list shows every connected app and personal access token, when it was last used and what it may do. Click <span class="kb-kbd">Revoke</span> to cut off its access straight away. A connected app also disconnects by itself after 90 days without use.</p>

<h2 class="kb-sub">Apps that can't sign in</h2>
<p>Some scripts and tools can't open the hubsell sign-in page. For those, create a personal access token instead:</p>
<ol class="kb-steps">
  <li>
    <p>Click your <b>profile icon</b>, then <span class="kb-kbd">MCP</span>, and click <span class="kb-kbd">Create token</span>.</p>
  </li>
  <li>
    <p>Enter a <b>Name</b> you'll recognise, for example <i>Claude on my laptop</i>, pick the permissions and how long it lasts, and click <span class="kb-kbd">Create token</span>.</p>
  </li>
  <li>
    <p>Copy the token. For your security it won't be shown again. Send it as a Bearer header to <span class="kb-kbd">https://mcp.hubsell.com/mcp</span>.</p>
  </li>
</ol>
<p>You can have up to 20 active tokens. Treat a token like a password: anyone who has it can use hubsell as you, within its permissions.</p>
