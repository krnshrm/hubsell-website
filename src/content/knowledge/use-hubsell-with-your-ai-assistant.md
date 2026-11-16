---
title: "Use hubsell with your AI assistant (MCP)"
description: "Connect hubsell to ChatGPT, Claude, Gemini or any other AI assistant that supports MCP, then find contacts, read flow results, tag, enrich and start flows by asking in plain language."
category: "AI assistants (MCP)"
order: 1
estMinutes: 5
stepCount: 4
appliesTo: "All hubsell plans. You need your own subscription to an AI app that supports remote MCP servers. Some apps offer this only on certain plans or in certain countries."
prerequisites: "A hubsell login, and an AI app that supports remote MCP servers, such as ChatGPT, Claude, Gemini, Mistral Vibe, Perplexity, Microsoft Copilot Studio, Cursor or Claude Code."
updated: 2026-11-16
faqs:
  - q: "Which apps work?"
    a: "Any app that can add a remote MCP server by its address and sign in to it. The steps for ChatGPT, Claude, Claude Code, Gemini, Mistral Vibe, Perplexity, Microsoft Copilot Studio, Cursor, Codex, Visual Studio Code and Windsurf are above. They all use the same address."
  - q: "My app isn't in the list. Will it work?"
    a: "If it can add a remote MCP server and sign in with it, use the address https://mcp.hubsell.com/mcp. If it can only send a fixed header, create a personal access token (see Apps that can't sign in)."
  - q: "Does this use hubsell credits?"
    a: "Only enrichment does, exactly as in the app. Everything else is free. The AI itself runs on your own subscription, not on hubsell credits."
  - q: "Can hubsell read my chats with my assistant?"
    a: "No. Your assistant only sends hubsell the questions it needs answered, such as a contact search, and gets the results back. hubsell never sees your conversation."
  - q: "Can the assistant change a teammate's contacts or flows?"
    a: "Only if your role allows it. The assistant acts as you, with your role and permissions. When something isn't allowed, it is told so and tells you why."
  - q: "Can it email someone without asking me?"
    a: "Only if you gave it the Send emails permission. hubsell tells the assistant to ask you before it adds contacts to a flow or starts a flow, but the safest way is to leave Send emails off until you need it."
  - q: "How do I stop it?"
    a: "Click your profile icon, then MCP, and click Revoke next to the connection. It loses access straight away."
draft: false
---
<!-- sources: hubsell-client src/components/settings/user/mcp/McpSettings.tsx, src/components/auth/OAuthConsent.tsx, src/app/oauth/authorize/page.tsx, src/i18n/messages/en/settings.json (mcp); hubsell-mcp src/http.js, src/manifest.js; app menus checked 2026-11-16 against developers.openai.com/api/docs/guides/developer-mode, support.claude.com/en/articles/11175166, support.google.com/gemini/answer/17209137, docs.mistral.ai/le-chat/knowledge-integrations/connectors/mcp-connectors, mistral.ai/news/vibe-agent, perplexity.ai/help-center/en/articles/13915507, learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent, cursor.com/docs/context/mcp, learn.chatgpt.com/docs/extend/mcp, code.visualstudio.com/docs/copilot/customization/mcp-servers, docs.devin.ai/windsurf/plugins/cascade/mcp -->
<p>MCP (Model Context Protocol) is the open standard AI apps use to work with other software. hubsell has an MCP server, so any assistant that can add one can connect: ChatGPT, Claude, Gemini, Mistral Vibe, Microsoft Copilot Studio, Cursor and more. Once you connect it, you can ask things like <i>"Which of my contacts in Germany replied positively?"</i> or <i>"How is my UK flow doing this month?"</i>, and your assistant looks up the answer in your hubsell account.</p>

<div class="kb-callout kb-callout--tip">
  <p>You use <b>your own</b> AI subscription. hubsell doesn't see your chats, charges no credits for the AI, and the assistant can only do what you allow when you connect it.</p>
</div>

<h2 class="kb-sub">Connect your assistant</h2>
<ol class="kb-steps">
  <li>
    <p>Copy the server address: <span class="kb-kbd">https://mcp.hubsell.com/mcp</span>. Every app uses the same one. You also find it in hubsell: click your <b>profile icon</b>, then <span class="kb-kbd">MCP</span>, under <b>Connect your AI assistant</b>.</p>
  </li>
  <li>
    <p>Add it to your app as a custom MCP server or connector. The menus differ per app; see <a href="#steps-for-each-app">Steps for each app</a> below.</p>
  </li>
  <li>
    <p>Your app opens hubsell in your browser. Log in if you aren't already. You then see a page called <b>Connect <i>your app</i> to hubsell</b>, with the name of the app you use.</p>
    <figure class="kb-figure">
      <div class="kb-ui" role="img" aria-label="The Connect Claude to hubsell page, shown here for Claude: four permissions, Read and Write ticked, then the Cancel and Allow access buttons.">
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
      <figcaption>Choosing what the assistant may do, here in Claude. The page shows the name of your app, for example ChatGPT, and the site it sends you back to. Read and Write are ticked to start with.</figcaption>
    </figure>
  </li>
  <li>
    <p>Choose the permissions (see below) and click <span class="kb-kbd">Allow access</span>. You go back to your app, which is now connected.</p>
  </li>
</ol>

<div class="kb-result">
  <p>Ask your assistant <i>"What's my hubsell account and how many credits do I have?"</i> to check that it works.</p>
</div>

<h2 class="kb-sub" id="steps-for-each-app">Steps for each app</h2>
<p>These menus come from each app's own help pages (November 2026) and can change. If a step looks different, check the app's help. Some apps offer custom MCP servers only on certain plans, in certain countries, or when an admin allows it.</p>

<p><b>ChatGPT</b></p>
<ul>
  <li>On chatgpt.com, open <b>Plugins</b>, click <b>+</b> and choose <b>Add custom MCP server</b>.</li>
  <li>Enter a name, for example <i>hubsell</i>, paste the address under <b>Server URL</b> and choose <b>OAuth</b> as the authentication.</li>
  <li>Read the warning, confirm it, click <b>Create as a plugin</b>, then install the plugin and sign in to hubsell.</li>
  <li>Not every ChatGPT plan can add custom MCP servers, and in Business, Enterprise and Edu workspaces an admin decides who may. Which plans may use actions that change data has changed over time, so check OpenAI's help page for your plan. On some accounts the option is under <b>Settings</b> → <b>Apps</b> → <b>Advanced settings</b> → <b>Developer mode</b> instead.</li>
</ul>

<p><b>Claude (web and desktop app)</b></p>
<ul>
  <li>Go to <b>Customize</b> → <b>Connectors</b>, click <b>+ Add</b> and choose <b>Add custom connector</b>.</li>
  <li>Enter the name <i>hubsell</i>, paste the address and click <b>Continue</b>. Keep the sign-in settings Claude suggests and click <b>Add</b>. If signing in fails, choose <b>Register automatically</b> under <b>OAuth client</b>.</li>
  <li>To use it in a chat, click <b>+</b> at the bottom left, then <b>Connectors</b>, and turn hubsell on.</li>
  <li>Works on Free (one custom connector), Pro, Max, Team and Enterprise. On Team and Enterprise an owner adds hubsell once under <b>Organization settings</b> → <b>Connectors</b>; everyone then clicks <b>Connect</b> next to it under <b>Customize</b> → <b>Connectors</b>.</li>
</ul>

<p><b>Claude Code</b></p>
<ul>
  <li>Run <code>claude mcp add --transport http hubsell https://mcp.hubsell.com/mcp</code> in your terminal, then type <code>/mcp</code> in Claude Code to sign in.</li>
</ul>

<p><b>Gemini</b></p>
<ul>
  <li>On gemini.google.com, click <b>Settings</b>, then <b>Connected Apps</b>. Under <b>Custom apps</b>, click <b>Add a custom app</b>, paste the address, click <b>Next</b> and sign in to hubsell.</li>
  <li>You add it in the web app and can then use it in the web and mobile apps.</li>
  <li>At the time of writing, Google offers custom apps only to people aged 18 or over in the US, with a personal Google Account (not a work or school account), in English and with Keep Activity on.</li>
</ul>

<p><b>Mistral Vibe (formerly Le Chat)</b></p>
<ul>
  <li>Open <b>Connectors</b>, click <b>+ Add Connector</b> and switch to the <b>Custom MCP Connector</b> tab.</li>
  <li>Enter <i>hubsell</i> as the <b>Connector name</b> (no spaces), paste the address under <b>Server URL</b>, click <b>Connect</b> and sign in to hubsell.</li>
  <li>Only admins can add connectors. On Free, Pro and Student plans the account owner is the admin. Turn the connector on in the chat where you want to use it.</li>
</ul>

<p><b>Perplexity</b></p>
<ul>
  <li>Open <b>Plugins</b> in the sidebar (or <b>Customize</b> → <b>Connectors</b>), choose <b>Add custom</b> → <b>Add MCP connector</b> and select <b>Remote</b>.</li>
  <li>Enter the name <i>hubsell</i> and paste the address as the <b>MCP server URL</b>. Under <b>Advanced</b>, choose <b>OAuth</b> and <b>Streamable HTTP</b>.</li>
  <li>Tick the acknowledgement, click <b>Add</b>, then click the connector card to sign in to hubsell.</li>
  <li>In an organisation, an admin has to turn on <b>Allow members to add custom connectors</b> first. Check Perplexity's help for which plans include custom connectors.</li>
</ul>

<p><b>Microsoft Copilot Studio</b></p>
<ul>
  <li>For organisations that build their own agents in Copilot Studio. The consumer Microsoft Copilot app is a different product.</li>
  <li>Open your agent's <b>Tools</b> page, click <b>Add a tool</b> → <b>New tool</b> → <b>Model Context Protocol</b>.</li>
  <li>Enter <i>hubsell</i> as the <b>Server name</b>, a short <b>Server description</b> (for example <i>Search and update contacts and flows in hubsell</i>) and the address as the <b>Server URL</b>.</li>
  <li>Choose <b>OAuth 2.0</b>, then <b>Dynamic discovery</b>, and click <b>Create</b> and <b>Next</b>. Choose <b>Create a new connection</b>, sign in to hubsell, then click <b>Add to agent</b>.</li>
  <li>You need a Copilot Studio licence, and your organisation's data policies can block new connections.</li>
</ul>

<p><b>Cursor</b></p>
<ul>
  <li>Add this to <code>~/.cursor/mcp.json</code> (all projects) or <code>.cursor/mcp.json</code> (one project): <code>{"mcpServers": {"hubsell": {"url": "https://mcp.hubsell.com/mcp"}}}</code></li>
  <li>Open <b>Customize</b> in the sidebar and make sure hubsell is on. Cursor opens the hubsell sign-in.</li>
</ul>

<p><b>Codex</b></p>
<ul>
  <li>Run <code>codex mcp add hubsell --url https://mcp.hubsell.com/mcp</code>, then <code>codex mcp login hubsell</code> to sign in.</li>
  <li>The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share this setting.</li>
</ul>

<p><b>Visual Studio Code (GitHub Copilot)</b></p>
<ul>
  <li>Open the Command Palette, run <b>MCP: Add Server</b>, choose <b>HTTP</b> and paste the address.</li>
  <li>Enter <i>hubsell</i> as the server ID, choose <b>Global</b>, and sign in to hubsell when Visual Studio Code asks.</li>
</ul>

<p><b>Windsurf</b></p>
<ul>
  <li>In Cascade's MCP menu, choose <b>Open MCP config file</b> and add <code>{"mcpServers": {"hubsell": {"serverUrl": "https://mcp.hubsell.com/mcp"}}}</code>. Save and press refresh, then sign in to hubsell when asked.</li>
  <li>In a team, an admin can limit MCP servers to an approved list.</li>
</ul>

<p><b>Other apps</b></p>
<ul>
  <li>Any app that can add a remote MCP server (Streamable HTTP) and sign in to it can use the same address. If your app can only send a fixed header, create a personal access token (see <a href="#apps-that-cant-sign-in">Apps that can't sign in</a>).</li>
</ul>

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

<h2 class="kb-sub" id="apps-that-cant-sign-in">Apps that can't sign in</h2>
<p>Some scripts and tools can't open the hubsell sign-in page. For those, create a personal access token instead:</p>
<ol class="kb-steps">
  <li>
    <p>Click your <b>profile icon</b>, then <span class="kb-kbd">MCP</span>, and click <span class="kb-kbd">Create token</span>.</p>
  </li>
  <li>
    <p>Enter a <b>Name</b> you'll recognise, for example <i>Codex on my laptop</i>, pick the permissions and how long it lasts, and click <span class="kb-kbd">Create token</span>.</p>
  </li>
  <li>
    <p>Copy the token. For your security it won't be shown again. Send it as a Bearer header to <span class="kb-kbd">https://mcp.hubsell.com/mcp</span>.</p>
  </li>
</ol>
<p>You can have up to 20 active tokens. Treat a token like a password: anyone who has it can use hubsell as you, within its permissions.</p>
