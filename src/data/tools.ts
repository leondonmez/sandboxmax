export interface Tool {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: 'live' | 'soon';
}

export const tools: Tool[] = [
  {
    slug: 'json/fix-malformed-json-syntax',
    name: 'JSON Formatter',
    category: 'JSON',
    description: 'Validate with exact error locations, beautify, minify & query by path.',
    status: 'live',
  },
  {
    slug: 'jwt/decode-bearer-token',
    name: 'JWT Decoder',
    category: 'JWT',
    description: 'Decode header, payload & expiry — with a live session-death simulator.',
    status: 'live',
  },
  {
    slug: 'regex/tester',
    name: 'Regex Tester',
    category: 'Regex',
    description: 'Live match highlighting, flags, and a plain-English token breakdown.',
    status: 'live',
  },
  {
    slug: 'base64/encode-text-to-base64',
    name: 'Base64 Encode / Decode',
    category: 'Encoding',
    description: 'Text & files to and from Base64 — UTF-8 safe, with live image preview.',
    status: 'live',
  },
  {
    slug: 'csv/convert-crm-contacts-to-json',
    name: 'CSV → JSON Mapper',
    category: 'Data',
    description: 'Map columns to typed JSON, then minify & truncate for LLM prompts.',
    status: 'live',
  },
  {
    slug: 'diff/compare-api-json-responses',
    name: 'Diff Checker',
    category: 'Text',
    description: 'Side-by-side diff with a semantic JSON mode that ignores key order.',
    status: 'live',
  },
  {
    slug: 'url/url-encode-decode-strings',
    name: 'URL Encoder / Decoder',
    category: 'Encoding',
    description: 'Escape & unescape URLs, with a smart param grid that strips trackers.',
    status: 'live',
  },
  {
    slug: 'uuid/generate-bulk-uuid-v4',
    name: 'UUID & NanoID Generator',
    category: 'Generators',
    description: 'Bulk v4 UUIDs & NanoIDs from your browser’s crypto API — up to 5,000 per click.',
    status: 'live',
  },
  {
    slug: 'cron/every-5-minutes-cron-expression',
    name: 'Cron Expression Parser',
    category: 'Time',
    description: 'Translate cron to plain English with your next 5 run times.',
    status: 'live',
  },
  {
    slug: 'hash/generate-sha256-hash-online',
    name: 'Hash Generator',
    category: 'Crypto',
    description: 'SHA-256/512, SHA-1 & MD5 side by side — hex or Base64, all local.',
    status: 'live',
  },
  {
    slug: 'timestamp/convert-unix-timestamp-to-date',
    name: 'Timestamp Converter',
    category: 'Time',
    description: 'Epoch to human & back, with a live ticker and six-zone time machine.',
    status: 'live',
  },
  {
    slug: 'markdown/preview-github-readme-template',
    name: 'Markdown Preview',
    category: 'Text',
    description: 'Live GitHub-dark rendering with tables, task lists & sync scroll.',
    status: 'live',
  },
];
