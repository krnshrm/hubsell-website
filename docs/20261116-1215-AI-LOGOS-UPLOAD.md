# Upload the AI assistant logos (integrations page)

Since 2026-11-16 the integrations page (`/integrations`) and the knowledge article
`/knowledge/use-hubsell-with-your-ai-assistant/` list the AI assistants that work with hubsell's MCP
server. Their cards show the app's first letter until the logo files exist on the asset store. The
page already points at `https://assets.hubsell.com/integrations/<file name>`
(`src/components/IntegrationsDirectory.astro`, `LOGOS`), so uploading the files is enough: no code
change, no new deploy.

Jira: HUB-683 "Website: Upload the AI assistant logos" (assigned to Karan, website epic HUB-567).

## Step 1: collect the logos in one folder

Folder: `~/Downloads/hubsell-ai-logos/` (`windsurf.svg` is already in it). Use exactly these file
names, SVG, the square icon (not the wide word logo):

| File name | Where to get it |
|---|---|
| `chatgpt.svg` | https://openai.com/brand/ (the ChatGPT mark) |
| `codex.svg` | the same OpenAI page; optional, Codex shows a letter without it |
| `claude.svg` | https://www.anthropic.com/press-kit (ZIP; take the Claude mark). Used for Claude and Claude Code |
| `gemini.svg` | Google's Gemini brand resources (search "Gemini logo SVG brand") |
| `mistral.svg` | https://mistral.ai/brand, from the logo ZIP (the page itself only offers PNG) |
| `perplexity.svg` | Perplexity's website or brand page |
| `microsoft-copilot-studio.svg` | https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Power-Platform-icons-scalable.zip |
| `visual-studio-code.svg` | https://code.visualstudio.com/assets/branding/visual-studio-code-icons.zip (the blue icon) |
| `cursor.svg` | https://cursor.com/brand, the square icon (the automatic download was a wide banner) |
| `windsurf.svg` | done, from https://windsurf.com/brand |

Check each vendor's brand terms before using its logo on a marketing page. Microsoft, for example,
allows its icons for documentation and diagrams, which may not cover marketing. If a logo feels
risky, leave it out: its card keeps the letter.

## Step 2: upload

1. Cloudflare dashboard → **R2** → bucket **hubsell-assets** → folder **integrations**.
2. **Upload**, drag in the files, keep the names unchanged.

## Step 3: check

Ask Claude to check: every file at `https://assets.hubsell.com/integrations/<file name>` should answer
200 (they answered 404 on 2026-11-16, as expected), and the integrations page should show the logos
instead of letters.

The manifest `20261116-1200-ai-logos-manifest.json` (repo root) lists the same files for
`scripts/migrate-from-manifest.mjs`; the dashboard upload above makes the script unnecessary.
