import { Buffer } from 'node:buffer';

export interface JwtTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultToken: string;
}

// Demo tokens are assembled at build time from plain objects so the claims stay
// readable in source and the Base64URL encoding can never drift out of sync.
const b64url = (value: unknown) => Buffer.from(JSON.stringify(value)).toString('base64url');

const DEMO_SIGNATURE = Buffer.from('sandboxmax-demo-signature-not-verified').toString('base64url');

const demoToken = (payload: Record<string, unknown>, header: Record<string, unknown> = { alg: 'HS256', typ: 'JWT' }) =>
  `${b64url(header)}.${b64url(payload)}.${DEMO_SIGNATURE}`;

const ts = (iso: string) => Math.floor(Date.parse(iso) / 1000);

export const jwtTools: JwtTool[] = [
  {
    slug: 'decode-bearer-token',
    metaTitle: 'Free Online JWT Decoder — Decode Bearer Tokens Instantly | SandboxMax',
    metaDescription:
      'Paste any JWT or full Authorization header and decode the header, payload, and expiry instantly. 100% client-side — your token never leaves the browser.',
    toolTitle: 'Bearer Token JWT Decoder',
    explanation:
      'Decodes a standard authentication bearer token into its header and payload claims — a "Bearer " prefix pasted straight from an Authorization header is stripped automatically. Decoding happens locally with native browser Base64; the signature is displayed but never verified or transmitted.',
    defaultToken:
      'Bearer ' +
      demoToken({
        sub: 'usr_8f4e2a91',
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        role: 'admin',
        scope: 'read:projects write:projects',
        iss: 'https://auth.example.com',
        aud: 'sandboxmax-api',
        iat: ts('2026-07-01T00:00:00Z'),
        exp: ts('2027-07-01T00:00:00Z'),
      }),
  },
  {
    slug: 'check-token-expiration',
    metaTitle: 'Check JWT Token Expiration Online — exp Claim Tester | SandboxMax',
    metaDescription:
      'Instantly see whether a JWT is expired, when it expired, and simulate time passing to test session-death handling. Runs entirely in your browser.',
    toolTitle: 'JWT Expiration Checker & Session Simulator',
    explanation:
      'Pre-loaded with an already-expired token so you can see exactly how the exp claim is read, displayed, and flagged. Paste your own token to check its real expiry, or use the fast-forward controls to watch a live session die on schedule.',
    defaultToken: demoToken({
      sub: 'usr_expired_demo',
      session_id: 'sess_91kd02mz',
      role: 'user',
      iss: 'https://auth.example.com',
      iat: ts('2024-01-01T00:00:00Z'),
      exp: ts('2024-01-02T00:00:00Z'),
    }),
  },
  {
    slug: 'inspect-hasura-supabase-claims',
    metaTitle: 'Inspect Hasura & Supabase JWT Claims — Roles, Tenants, Permissions | SandboxMax',
    metaDescription:
      'Decode Hasura and Supabase JWTs to inspect nested x-hasura claims, allowed roles, tenant IDs, and app_metadata — fully client-side, safe for real tokens.',
    toolTitle: 'Hasura / Supabase JWT Claims Inspector',
    explanation:
      'Pre-populated with the deeply nested claim structure Hasura and Supabase issue: the https://hasura.io/jwt/claims namespace with allowed roles and tenant permissions, plus Supabase-style app_metadata. Paste your own token to debug row-level-security and role-mapping issues without sending credentials anywhere.',
    defaultToken: demoToken({
      iss: 'https://auth.acme-corp.io',
      sub: 'user_2xKw9',
      aud: 'authenticated',
      email: 'grace@acme-corp.io',
      iat: ts('2026-07-01T00:00:00Z'),
      exp: ts('2027-01-01T00:00:00Z'),
      app_metadata: {
        provider: 'email',
        tenant_id: 'acme-corp',
        plan: 'enterprise',
      },
      user_metadata: {
        full_name: 'Grace Hopper',
      },
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['anonymous', 'user', 'editor', 'admin'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': 'user_2xKw9',
        'x-hasura-org-id': 'org_acme_01',
        'x-hasura-tenant-permissions': {
          projects: ['read', 'write'],
          billing: ['read'],
        },
      },
    }),
  },
];
