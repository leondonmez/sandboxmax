export interface JsonTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultJson: string;
  defaultPath?: string;
}

// The "query" payload is authored as a real object and stringified at build
// time so it's guaranteed-valid; the "malformed" sample must stay a raw string
// because its syntax errors are the entire point.
const metricsPayload = {
  cluster: 'prod-us-east-1',
  generated_at: '2026-07-04T21:00:00Z',
  summary: { servers_total: 3, servers_healthy: 2, alerts_open: 4, uptime_pct: 99.82 },
  servers: [
    {
      id: 'web-01',
      region: 'us-east-1a',
      status: 'healthy',
      metrics: {
        cpu: { load1: 0.42, load5: 0.38, cores: 8, throttled: false },
        memory: { used_mb: 5120, total_mb: 16384, swap_used_mb: 0 },
        disk: { used_gb: 88.4, total_gb: 250, iops: 1240 },
      },
      containers: [
        { name: 'nginx', restarts: 0, healthy: true },
        { name: 'api', restarts: 2, healthy: true },
      ],
    },
    {
      id: 'web-02',
      region: 'us-east-1b',
      status: 'degraded',
      metrics: {
        cpu: { load1: 3.91, load5: 3.44, cores: 8, throttled: true },
        memory: { used_mb: 14208, total_mb: 16384, swap_used_mb: 512 },
        disk: { used_gb: 201.7, total_gb: 250, iops: 4890 },
      },
      containers: [
        { name: 'nginx', restarts: 0, healthy: true },
        { name: 'api', restarts: 14, healthy: false },
      ],
    },
    {
      id: 'worker-01',
      region: 'us-east-1c',
      status: 'healthy',
      metrics: {
        cpu: { load1: 1.05, load5: 0.97, cores: 16, throttled: false },
        memory: { used_mb: 22016, total_mb: 32768, swap_used_mb: 0 },
        disk: { used_gb: 140.2, total_gb: 500, iops: 2310 },
      },
      containers: [
        { name: 'queue-consumer', restarts: 1, healthy: true },
        { name: 'cron-runner', restarts: 0, healthy: true },
      ],
    },
  ],
  alerts: [
    { severity: 'critical', server: 'web-02', message: 'CPU throttling for 12m' },
    { severity: 'warning', server: 'web-02', message: 'memory above 85%' },
    { severity: 'warning', server: 'web-02', message: 'api container restart loop' },
    { severity: 'info', server: 'worker-01', message: 'queue depth rising' },
  ],
};

const workspaceConfig = {
  editor: {
    fontFamily: 'JetBrains Mono',
    fontSize: 14,
    tabSize: 2,
    formatOnSave: true,
    rulers: [80, 120],
    minimap: { enabled: false, renderCharacters: false },
  },
  terminal: {
    shell: '/bin/zsh',
    fontSize: 13,
    cursorStyle: 'block',
    scrollback: 10000,
  },
  files: {
    autoSave: 'onFocusChange',
    exclude: { '**/node_modules': true, '**/dist': true, '**/.astro': true },
    trimTrailingWhitespace: true,
  },
  extensions: {
    recommendations: ['astro-build.astro-vscode', 'bradlc.vscode-tailwindcss', 'dbaeumer.vscode-eslint'],
    autoUpdate: false,
  },
};

export const jsonTools: JsonTool[] = [
  {
    slug: 'fix-malformed-json-syntax',
    metaTitle: 'Fix Malformed JSON Online — Find the Exact Error Line | SandboxMax',
    metaDescription:
      'Paste broken JSON and get the exact line and column of the syntax error — trailing commas, missing brackets, stray quotes. Free, instant, 100% in your browser.',
    toolTitle: 'Malformed JSON Syntax Fixer',
    explanation:
      'Pre-loaded with the two classic breakages: a trailing comma and a missing closing bracket. The diagnostic banner below the input pinpoints the exact line and column where parsing gives up — fix the errors one by one and watch the banner flip green. Your broken config never leaves this tab.',
    defaultJson: [
      '{',
      '  "service": "checkout-api",',
      '  "version": "2.4.1",',
      '  "features": ["cart", "payments", "refunds",],',
      '  "limits": {',
      '    "rate_per_min": 100,',
      '    "burst": 250,',
      '  }',
      '',
    ].join('\n'),
  },
  {
    slug: 'query-large-nested-api-payload',
    metaTitle: 'Query Nested JSON API Payloads — Path Finder & Formatter | SandboxMax',
    metaDescription:
      'Drill into large nested JSON with dot-notation paths like servers[1].metrics.cpu — see just the snippet you need, syntax-highlighted. Free and fully client-side.',
    toolTitle: 'Nested API Payload Path Finder',
    explanation:
      'Pre-loaded with a production-style server metrics payload — three servers, nested metric groups, container lists, and an alerts array. Type a path like servers[1].metrics.cpu in the Path Finder to extract exactly the branch you care about instead of scrolling. Clear the path to see the whole formatted document.',
    defaultJson: JSON.stringify(metricsPayload, null, 2),
    defaultPath: 'servers[1].metrics.cpu',
  },
  {
    slug: 'minify-json-config-file',
    metaTitle: 'Minify JSON Config Files Online — Instant Size Savings | SandboxMax',
    metaDescription:
      'Flatten indented JSON configs to a single minified line and see the byte savings instantly. Beautify it back with one click — free, private, in your browser.',
    toolTitle: 'JSON Config File Minifier',
    explanation:
      'Pre-loaded with a deeply indented workspace settings file. Hit Minify to flatten it to a single line — the size readout shows exactly how many bytes the whitespace was costing — and Beautify to bring the indentation back. Round-trip as many times as you like; it all happens on your CPU.',
    defaultJson: JSON.stringify(workspaceConfig, null, 4),
  },
];
