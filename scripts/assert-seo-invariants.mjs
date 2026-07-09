/**
 * assert-seo-invariants.mjs — post-build SEO gate, runs as part of `npm run build`.
 * Fails the build (and therefore the deploy) when any indexation invariant breaks.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://sandboxmax.com';
const DIST = 'dist';
// Googlebot stops parsing at 2MB of raw HTML; fail with a wide safety margin
const MAX_HTML_BYTES = 1_500_000;

const failures = [];
const warnings = [];

const pages = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = path.join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (entry === 'index.html' || entry === '404.html') pages.push(p);
  }
})(DIST);

const canonicals = new Set();

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const is404 = page.endsWith('404.html');
  const fail = (msg) => failures.push(`${page}: ${msg}`);

  const bytes = Buffer.byteLength(html);
  if (bytes > MAX_HTML_BYTES) fail(`raw HTML is ${bytes.toLocaleString()} bytes (limit ${MAX_HTML_BYTES.toLocaleString()} — Googlebot cuts off at 2MB)`);

  const title = (html.match(/<title>(.*?)<\/title>/s) || [])[1] ?? '';
  if (!title.trim() || title.includes('undefined')) fail('missing or broken <title>');
  if (title.length > 65) warnings.push(`${page}: title is ${title.length} chars (SERP-truncated past ~60): "${title.slice(0, 70)}"`);

  const desc = (html.match(/name="description" content="(.*?)"/) || [])[1] ?? '';
  if (!desc.trim() || desc.includes('undefined')) fail('missing or broken meta description');
  if (desc.length > 170) fail(`meta description is ${desc.length} chars (>170)`);

  if (!/name="robots" content="(index|noindex), follow"/.test(html)) fail('missing robots meta');

  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) fail(`expected exactly 1 <h1>, found ${h1Count}`);

  const canonical = (html.match(/rel="canonical" href="(.*?)"/) || [])[1] ?? '';
  if (!canonical.startsWith(SITE)) fail(`canonical missing or off-site: "${canonical}"`);
  if (!is404) {
    if (!canonical.endsWith('/')) fail(`canonical lacks trailing slash: "${canonical}"`);
    canonicals.add(canonical);
  }

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  if (ldBlocks.length === 0) fail('no JSON-LD structured data');
  for (const [, block] of ldBlocks) {
    try {
      JSON.parse(block);
    } catch {
      fail('JSON-LD block does not parse');
    }
  }

  const ogImage = (html.match(/property="og:image" content="(.*?)"/) || [])[1] ?? '';
  if (!ogImage) fail('missing og:image');
  else if (!existsSync(path.join(DIST, new URL(ogImage).pathname))) fail(`og:image file not in build: ${ogImage}`);
}

// sitemap parity: every indexable page in the sitemap, nothing extra
const sitemap = readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
for (const url of canonicals) if (!sitemapUrls.has(url)) failures.push(`sitemap: missing ${url}`);
for (const url of sitemapUrls) if (!canonicals.has(url)) failures.push(`sitemap: lists ${url} but no built page canonicalizes to it`);

for (const w of warnings) console.warn(`⚠ ${w}`);
if (failures.length > 0) {
  console.error(`\n✗ SEO invariants FAILED (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`✓ SEO invariants passed: ${pages.length} pages, ${canonicals.size} indexable, ${sitemapUrls.size} sitemap URLs, ${warnings.length} warnings`);
