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
    slug: 'url/encode-decode',
    name: 'URL Encoder / Decoder',
    category: 'Encoding',
    description: 'Escape and unescape URLs and query strings correctly.',
    status: 'soon',
  },
  {
    slug: 'uuid/generator',
    name: 'UUID Generator',
    category: 'Generators',
    description: 'Generate v4 UUIDs in bulk using your browser’s crypto API.',
    status: 'soon',
  },
  {
    slug: 'cron/every-5-minutes-cron-expression',
    name: 'Cron Expression Parser',
    category: 'Time',
    description: 'Translate cron to plain English with your next 5 run times.',
    status: 'live',
  },
  {
    slug: 'hash/generator',
    name: 'Hash Generator',
    category: 'Crypto',
    description: 'MD5, SHA-1, SHA-256 hashes computed locally via WebCrypto.',
    status: 'soon',
  },
  {
    slug: 'timestamp/converter',
    name: 'Timestamp Converter',
    category: 'Time',
    description: 'Unix epoch to human-readable and back, any timezone.',
    status: 'soon',
  },
  {
    slug: 'markdown/preview',
    name: 'Markdown Preview',
    category: 'Text',
    description: 'Live GitHub-flavored markdown rendering as you type.',
    status: 'soon',
  },
];
