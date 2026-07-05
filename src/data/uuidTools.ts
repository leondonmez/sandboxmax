export interface UuidTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultType: 'uuid' | 'nanoid';
  defaultQuantity: number;
  defaultNanoLength: number;
  defaultAlphabet: string;
  defaultUppercase: boolean;
  defaultHyphens: boolean;
  defaultPrefix: string;
  defaultSuffix: string;
}

/** nanoid's classic URL-safe default pool — 64 symbols, so sampling is bias-free by construction */
export const DEFAULT_ALPHABET = '_~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const uuidTools: UuidTool[] = [
  {
    slug: 'generate-bulk-uuid-v4',
    metaTitle: 'Bulk UUID v4 Generator — Up to 5,000 at Once, Free | SandboxMax',
    metaDescription:
      'Generate up to 5,000 cryptographically secure UUID v4 strings in one click with your browser’s native crypto API. Copy or download as .txt — no signup, no server.',
    toolTitle: 'Bulk UUID v4 Generator',
    explanation:
      'Generates RFC 4122 version-4 UUIDs with the browser’s native crypto.randomUUID() — the same cryptographically secure source your backend uses, running on your own machine. Crank the quantity slider to 5,000 and watch the timing metric: the whole batch lands in milliseconds, because nothing makes a network round-trip.',
    defaultType: 'uuid',
    defaultQuantity: 100,
    defaultNanoLength: 21,
    defaultAlphabet: DEFAULT_ALPHABET,
    defaultUppercase: false,
    defaultHyphens: true,
    defaultPrefix: '',
    defaultSuffix: '',
  },
  {
    slug: 'generate-custom-nanoid-strings',
    metaTitle: 'NanoID Generator — Short URL-Friendly Unique IDs in Bulk | SandboxMax',
    metaDescription:
      'Generate compact, URL-safe NanoID strings in bulk with adjustable length — secure crypto.getRandomValues entropy, zero dependencies, 100% in your browser.',
    toolTitle: 'Custom NanoID String Generator',
    explanation:
      'NanoIDs pack more entropy per character than UUIDs by drawing from a 64-symbol URL-safe alphabet — a 21-character NanoID is comparably collision-proof to a 36-character UUID at nearly half the length. Tune the length slider to trade compactness against safety; the entropy banner shows the collision math live.',
    defaultType: 'nanoid',
    defaultQuantity: 100,
    defaultNanoLength: 21,
    defaultAlphabet: DEFAULT_ALPHABET,
    defaultUppercase: false,
    defaultHyphens: true,
    defaultPrefix: '',
    defaultSuffix: '',
  },
  {
    slug: 'secure-cryptographic-id-seeding',
    metaTitle: 'Mock Database ID Seeding — Prefixed Secure IDs in Bulk | SandboxMax',
    metaDescription:
      'Seed mock databases with prefixed, cryptographically random IDs (usr_..., ord_...) in bulk. Custom prefix/suffix, hyphen stripping, uppercase — free and client-side.',
    toolTitle: 'Cryptographic ID Seeder for Mock Databases',
    explanation:
      'Pre-configured for fixture and seed-file workflows: a usr_ prefix, hyphens stripped for compact column values, and 50 IDs per batch — the shape you paste straight into mock data. Swap the prefix per table (ord_, inv_, sess_) and regenerate; every ID still comes from the browser’s secure random source, so seeds never collide across batches.',
    defaultType: 'uuid',
    defaultQuantity: 50,
    defaultNanoLength: 21,
    defaultAlphabet: DEFAULT_ALPHABET,
    defaultUppercase: false,
    defaultHyphens: false,
    defaultPrefix: 'usr_',
    defaultSuffix: '',
  },
];
