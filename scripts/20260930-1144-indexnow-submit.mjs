// Tell IndexNow (Bing, Yandex, Seznam, Naver) which URLs changed, so they
// recrawl without waiting. Run by hand after a production deploy:
//   node scripts/20260930-1144-indexnow-submit.mjs              every URL in the live sitemap
//   node scripts/20260930-1144-indexnow-submit.mjs /pricing/    only the paths or URLs given
//   add --dry-run to print the URLs without sending them
// The key is public by design: IndexNow verifies it by fetching KEY_LOCATION,
// and only accepts URLs on the host that serves that file.

const HOST = 'www.hubsell.com';
const KEY = 'ad1efd2cd7d543f8e68c45a6aed25e43';
const KEY_LOCATION = `https://${HOST}/20260930-1144-indexnow-key.txt`;
const SITEMAP = `https://${HOST}/sitemap-index.xml`;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const given = args.filter((a) => a !== '--dry-run');

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

async function sitemapUrls() {
  const index = await (await fetch(SITEMAP)).text();
  const urls = [];
  for (const child of locs(index)) urls.push(...locs(await (await fetch(child)).text()));
  return urls;
}

const urls = given.length
  ? given.map((u) => (u.startsWith('http') ? u : `https://${HOST}${u.startsWith('/') ? '' : '/'}${u}`))
  : await sitemapUrls();

const foreign = urls.filter((u) => new URL(u).host !== HOST);
if (foreign.length) {
  console.error(`Not on ${HOST}, IndexNow would reject the whole batch:\n${foreign.join('\n')}`);
  process.exit(1);
}

const keyFile = await fetch(KEY_LOCATION);
if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
  console.error(`${KEY_LOCATION} is missing or wrong. Deploy first, then run this again.`);
  process.exit(1);
}

console.log(`${urls.length} URLs${dryRun ? ' (dry run, nothing sent)' : ''}`);
if (dryRun) {
  console.log(urls.join('\n'));
  process.exit(0);
}

// 10,000 URLs per request is the protocol limit.
for (let i = 0; i < urls.length; i += 10000) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls.slice(i, i + 10000) }),
  });
  // 200 and 202 both mean accepted; 202 means the key is still being checked.
  console.log(`batch ${i / 10000 + 1}: HTTP ${res.status} ${res.statusText}`);
  if (res.status >= 300) {
    console.error(await res.text());
    process.exit(1);
  }
}
