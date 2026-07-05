export interface TimestampTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  /** epoch seconds as a string, or '' to load with the current moment */
  defaultEpoch: string;
}

// fixed demo instants computed at build time so they can never drift from their labels
const ts = (iso: string) => String(Math.floor(Date.parse(iso) / 1000));

export const timestampTools: TimestampTool[] = [
  {
    slug: 'convert-unix-timestamp-to-date',
    metaTitle: 'Convert Unix Timestamp to Date Online — Seconds & Milliseconds | SandboxMax',
    metaDescription:
      'Paste any epoch timestamp and get local time, UTC ISO, relative time, and major time zones instantly. Auto-detects seconds vs milliseconds. Free and 100% client-side.',
    toolTitle: 'Unix Timestamp to Date Converter',
    explanation:
      'Paste an epoch value and it converts on the spot — the unit is sniffed from magnitude, so 10-digit seconds, 13-digit milliseconds, 9-digit pre-2001 stamps, and even negative pre-1970 values all work without telling it which is which. Output lands in your local zone, UTC ISO, human relative time, and a six-region time zone matrix.',
    defaultEpoch: '1800000000',
  },
  {
    slug: 'current-epoch-seconds-milliseconds',
    metaTitle: 'Current Epoch Time — Live Unix Timestamp in Seconds & Milliseconds | SandboxMax',
    metaDescription:
      'The current Unix timestamp, ticking live in both seconds and milliseconds with one-click copy. Plus a full epoch converter — free, no signup, runs in your browser.',
    toolTitle: 'Current Epoch Time — Live Seconds & Milliseconds',
    explanation:
      'The banner at the top is the answer: the current Unix epoch, ticking every second, in both seconds and milliseconds with copy buttons beside each. It reads your own device clock — no server round-trip, no latency fudge. The converter below is pre-loaded with the moment you opened the page, so you can immediately see how "now" renders across formats and zones.',
    defaultEpoch: '',
  },
  {
    slug: 'utc-to-local-time-converter',
    metaTitle: 'UTC to Local Time Converter — Compare Time Zone Offsets | SandboxMax',
    metaDescription:
      'Convert UTC timestamps to your local time and compare across New York, LA, London, Berlin, and Tokyo side by side. Instant, free, and fully client-side.',
    toolTitle: 'UTC to Local Time Converter',
    explanation:
      'Pre-loaded with a midday-UTC moment so the offset discrepancies are obvious at a glance: the time zone matrix shows the same instant landing in six engineering regions at once — morning in California, evening in Tokyo. Use the zone picker to add any other region, or switch to Human → Epoch mode to build a UTC timestamp from scratch.',
    defaultEpoch: ts('2026-07-01T12:00:00Z'),
  },
];
