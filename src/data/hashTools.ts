export type HashAlgo = 'SHA-256' | 'SHA-512' | 'SHA-1' | 'MD5';

export interface HashTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  featured: HashAlgo;
  defaultInput: string;
}

export const hashTools: HashTool[] = [
  {
    slug: 'generate-sha256-hash-online',
    metaTitle: 'Generate SHA-256 Hash Online — Instant, Free & Private | SandboxMax',
    metaDescription:
      'Compute SHA-256 hashes (plus SHA-512, SHA-1, MD5) as you type, using your browser’s native Web Crypto API. Hex or Base64 output — nothing leaves your machine.',
    toolTitle: 'SHA-256 Hash Generator',
    explanation:
      'Pre-loaded with an API-token-style string — the kind of value you hash before storing or comparing server-side. SHA-256 is the modern default for integrity checks, signatures, and content addressing; it runs here through your browser’s native crypto.subtle engine, with SHA-512, SHA-1, and MD5 computed alongside for comparison. The timer next to each row shows how little time native hashing actually takes.',
    featured: 'SHA-256',
    defaultInput: 'sbx_live_7f3e9a2c48d1b56e_checkout-api_us-east-1',
  },
  {
    slug: 'compute-md5-checksum-string',
    metaTitle: 'Compute MD5 Checksum of a String Online — Fast & Local | SandboxMax',
    metaDescription:
      'Get the MD5 checksum of any text instantly — plus SHA-256, SHA-512, and SHA-1 side by side. Runs entirely in your browser with zero uploads.',
    toolTitle: 'MD5 String Checksum Calculator',
    explanation:
      'Pre-loaded with a config file of the kind MD5 is still legitimately used for: quick change-detection checksums, cache keys, and matching against legacy .md5 manifest files. To be clear — MD5 has been cryptographically broken since 2004 and must never protect passwords or signatures; for those jobs the SHA-256 row is right above it. SubtleCrypto refuses to implement MD5 for exactly that reason, so this row runs on a built-in RFC 1321 implementation.',
    featured: 'MD5',
    defaultInput: [
      '[deploy]',
      'service = checkout-api',
      'region = us-east-1',
      'replicas = 3',
      '',
      '[cache]',
      'ttl_seconds = 300',
      'strategy = stale-while-revalidate',
    ].join('\n'),
  },
  {
    slug: 'secure-sha1-fingerprint-decoder',
    metaTitle: 'SHA-1 Fingerprint Generator — Git-Style Hashes Online | SandboxMax',
    metaDescription:
      'Generate SHA-1 fingerprints for Git-style object tracking and legacy key verification — with SHA-256 alongside for anything security-critical. 100% client-side.',
    toolTitle: 'SHA-1 Fingerprint Generator',
    explanation:
      'Pre-loaded with a mock deployment key, the classic SHA-1 use case: fingerprinting for identification rather than protection. Git built its entire object model on SHA-1 hashes, and legacy tooling still speaks it fluently — but like MD5, SHA-1 is broken for security purposes (collisions were demonstrated in 2017), so treat these fingerprints as labels, not locks. The SHA-256 row is the drop-in upgrade.',
    featured: 'SHA-1',
    defaultInput:
      'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIExampleDeployKeyForSandboxMax deploy@ci.sandboxmax.com',
  },
];
