/**
 * Refreshes src/data/cloudIpRanges.json from the authoritative published sources.
 * Run manually whenever the snapshot should be updated:  node scripts/refresh-cloud-ips.mjs
 *
 * Runs at dev time only — never at runtime, never in the browser.
 */
import { writeFile } from 'node:fs/promises';

const AWS_REGIONS = ['us-east-1', 'us-west-2', 'eu-west-1'];
const AWS_SERVICES = ['EC2', 'S3', 'AMAZON'];
const GCP_SCOPES = ['us-east1', 'us-west1', 'europe-west1', 'global'];
const GITHUB_KEYS = ['actions', 'hooks', 'git'];

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': 'sandboxmax-snapshot-refresh' } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.json();
};

console.log('fetching AWS ip-ranges.json …');
const aws = await get('https://ip-ranges.amazonaws.com/ip-ranges.json');
const awsServices = {};
for (const service of AWS_SERVICES) {
  awsServices[service] = {};
  for (const region of AWS_REGIONS) {
    const v4 = aws.prefixes
      .filter((p) => p.service === service && p.region === region)
      .map((p) => p.ip_prefix);
    const v6 = aws.ipv6_prefixes
      .filter((p) => p.service === service && p.region === region)
      .map((p) => p.ipv6_prefix);
    awsServices[service][region] = [...v4, ...v6];
  }
}

console.log('fetching GitHub meta …');
const gh = await get('https://api.github.com/meta');
const githubServices = {};
for (const key of GITHUB_KEYS) {
  githubServices[key] = { global: gh[key] ?? [] };
}

console.log('fetching Google Cloud cloud.json …');
const gcp = await get('https://www.gstatic.com/ipranges/cloud.json');
const gcpRanges = {};
for (const scope of GCP_SCOPES) {
  gcpRanges[scope] = gcp.prefixes
    .filter((p) => (p.scope ?? 'global') === scope)
    .map((p) => p.ipv4Prefix ?? p.ipv6Prefix)
    .filter(Boolean);
}

const snapshot = {
  fetchedAt: new Date().toISOString(),
  sources: {
    aws: 'https://ip-ranges.amazonaws.com/ip-ranges.json',
    github: 'https://api.github.com/meta',
    gcp: 'https://www.gstatic.com/ipranges/cloud.json',
  },
  providers: {
    aws: { label: 'AWS', services: awsServices },
    github: { label: 'GitHub', services: githubServices },
    gcp: { label: 'Google Cloud', services: { 'Google Cloud': gcpRanges } },
  },
};

await writeFile(
  new URL('../src/data/cloudIpRanges.json', import.meta.url),
  JSON.stringify(snapshot, null, 1)
);

const count = (obj) =>
  Object.values(obj.providers)
    .flatMap((p) => Object.values(p.services))
    .flatMap((s) => Object.values(s))
    .reduce((n, arr) => n + arr.length, 0);
console.log(`wrote src/data/cloudIpRanges.json — ${count(snapshot)} CIDR blocks, fetched ${snapshot.fetchedAt}`);
