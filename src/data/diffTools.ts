export interface DiffTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  leftLabel: string;
  rightLabel: string;
  leftData: string;
  rightData: string;
}

export const diffTools: DiffTool[] = [
  {
    slug: 'compare-api-json-responses',
    metaTitle: 'Compare Two JSON API Responses Online — Semantic Diff | SandboxMax',
    metaDescription:
      'Diff two JSON payloads side by side. Semantic mode sorts keys before comparing, so reordered fields stop showing as false errors. 100% client-side and free.',
    toolTitle: 'API JSON Response Comparator',
    explanation:
      'Pre-loaded with two API responses that look wildly different line-by-line — but most of the noise is just reordered keys. Flip on Semantic JSON Mode to sort and normalize both sides: the reordering vanishes and the one real change (a plan upgrade) is all that remains.',
    leftLabel: 'Original response (v1)',
    rightLabel: 'Modified response (v2)',
    leftData: JSON.stringify(
      [
        { id: 101, name: 'Ada Lovelace', role: 'admin', plan: 'pro', active: true },
        { id: 102, name: 'Grace Hopper', role: 'editor', plan: 'pro', active: true },
        { id: 103, name: 'Jean Bartik', role: 'viewer', plan: 'free', active: false },
      ],
      null,
      2
    ),
    rightData: JSON.stringify(
      [
        { active: true, role: 'admin', id: 101, plan: 'pro', name: 'Ada Lovelace' },
        { plan: 'enterprise', id: 102, active: true, name: 'Grace Hopper', role: 'editor' },
        { role: 'viewer', active: false, plan: 'free', id: 103, name: 'Jean Bartik' },
      ],
      null,
      2
    ),
  },
  {
    slug: 'diff-env-config-files',
    metaTitle: 'Diff .env & Config Files Online — Staging vs Production | SandboxMax',
    metaDescription:
      'Spot configuration drift between staging and production .env files instantly. Added, removed, and changed keys highlighted line by line — nothing leaves your browser.',
    toolTitle: 'Staging vs Production Config Diff',
    explanation:
      'Pre-configured with the classic deployment mystery: a staging .env and a production .env that have quietly drifted apart. Removed keys glow red, new keys glow green, and changed values glow amber — the three ways config drift takes a site down on a Friday evening.',
    leftLabel: 'Staging (.env.staging)',
    rightLabel: 'Production (.env.production)',
    leftData: [
      'APP_ENV=staging',
      'API_BASE_URL=https://api.staging.example.com',
      'DEBUG=true',
      'LOG_LEVEL=verbose',
      'DATABASE_POOL=10',
      'REDIS_URL=redis://cache.staging.internal:6379',
      'FEATURE_NEW_CHECKOUT=true',
      'STRIPE_KEY=stripe-key-staging-EXAMPLE-0001',
    ].join('\n'),
    rightData: [
      'APP_ENV=production',
      'API_BASE_URL=https://api.example.com',
      'DEBUG=false',
      'LOG_LEVEL=warn',
      'DATABASE_POOL=10',
      'FEATURE_NEW_CHECKOUT=false',
      'STRIPE_KEY=stripe-key-production-EXAMPLE-0002',
      'SENTRY_DSN=https://a1b2c3@o4504.ingest.sentry.io/451',
    ].join('\n'),
  },
  {
    slug: 'compare-vibe-code-revisions',
    metaTitle: 'Compare AI Code Revisions — Spot Refactor Regressions | SandboxMax',
    metaDescription:
      'Diff your original code against an AI-refactored version and catch subtle logic regressions before they ship. Side-by-side highlights, 100% in your browser.',
    toolTitle: 'AI Code Revision Comparator',
    explanation:
      'Pre-loaded with a classic vibe-coding trap: the original function and an AI refactor that looks cleaner and shorter — but silently dropped the missing-price guard (NaN totals incoming) and swapped || for ??, changing how a quantity of 0 is billed. The diff makes both regressions impossible to miss.',
    leftLabel: 'Original (working)',
    rightLabel: 'AI-refactored (suspicious)',
    leftData: [
      'function calcTotal(items) {',
      '  let total = 0;',
      '  for (const item of items) {',
      '    if (!item.price) continue;',
      '    total += item.price * (item.qty || 1);',
      '  }',
      '  return Math.round(total * 100) / 100;',
      '}',
    ].join('\n'),
    rightData: [
      'const calcTotal = (items) =>',
      '  Math.round(',
      '    items.reduce((sum, item) =>',
      '      sum + item.price * (item.qty ?? 1), 0) * 100',
      '  ) / 100;',
    ].join('\n'),
  },
];
