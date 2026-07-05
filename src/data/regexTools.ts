export interface RegexTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultRegex: string;
  defaultFlags: string;
  testString: string;
}

export const regexTools: RegexTool[] = [
  {
    slug: 'tester',
    metaTitle: 'Free Online Regex Tester & Debugger — 100% Client-Side | SandboxMax',
    metaDescription:
      'Test regular expressions with live match highlighting, flags, and a plain-English token breakdown. Runs entirely in your browser — no signup, no server, no limits.',
    toolTitle: 'Interactive Regex Studio & Testing Sandbox',
    explanation:
      'A general-purpose regex workbench: edit the pattern, toggle flags, and watch matches highlight in real time as you type. The default pattern hunts for error, warning, and failure keywords in log output.',
    defaultRegex: String.raw`\b(error|warn(?:ing)?|fail(?:ed)?)\b`,
    defaultFlags: 'gi',
    testString: [
      '2026-07-04 12:01:22 INFO  server started on :4321',
      '2026-07-04 12:01:23 WARN  cache miss for key "user:42"',
      '2026-07-04 12:01:24 ERROR connection refused (db-primary)',
      '2026-07-04 12:01:25 INFO  retrying in 500ms — attempt 2',
      '2026-07-04 12:01:26 error: deploy failed after 3 retries',
      '2026-07-04 12:01:27 INFO  fallback succeeded, warning cleared',
      'This line mentions terrorism-free words like errorless — no match here? Watch the word boundary.',
    ].join('\n'),
  },
  {
    slug: 'extract-emails',
    metaTitle: 'Free Online Email Regex Extractor & Tester | SandboxMax',
    metaDescription:
      'Extract and validate email addresses from any text with a proven regex pattern. Live highlighting, fully editable, runs 100% in your browser — paste sensitive data safely.',
    toolTitle: 'Email Address Regex Extractor',
    explanation:
      'Matches standard email addresses — a local part of letters, digits, and common symbols, an @ sign, and a dotted domain with a 2+ letter TLD. It deliberately skips malformed strings like user@host (no TLD) or double @@ addresses.',
    defaultRegex: String.raw`[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`,
    defaultFlags: 'g',
    testString: [
      'Valid samples that WILL match:',
      '  contact@sandboxmax.com',
      '  first.last+newsletter@sub.example.co.uk',
      '  DEV_team%2026@build-server.io',
      '',
      'Invalid samples that will NOT match (fully):',
      '  not-an-email.com',
      '  user@localhost',
      '  double@@at.com',
      '  trailing.dot@domain.',
    ].join('\n'),
  },
  {
    slug: 'password-validation',
    metaTitle: 'Password Validation Regex Tester (Uppercase, Lowercase, Number, 8+ Chars) | SandboxMax',
    metaDescription:
      'Test the classic strong-password regex: at least one uppercase, one lowercase, one number, minimum 8 characters. Live per-line matching in your browser — nothing is uploaded.',
    toolTitle: 'Strong Password Validation Regex',
    explanation:
      'Uses three lookaheads to require at least one lowercase letter, one uppercase letter, and one digit, then demands 8+ total characters. With the m flag enabled, each line below is validated independently — matching lines pass the policy.',
    defaultRegex: String.raw`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$`,
    defaultFlags: 'gm',
    testString: [
      'Correct1Horse',
      'sandbox_MAX_2026',
      'Tr0ub4dor&3',
      'alllowercase1',
      'ALLUPPERCASE1',
      'NoNumbersHere',
      'Sh0rt!',
    ].join('\n'),
  },
  {
    slug: 'strip-html-tags',
    metaTitle: 'Strip HTML Tags Regex — Find & Remove Markup Safely | SandboxMax',
    metaDescription:
      'Match and strip HTML tags from text with a safe, non-greedy regex. See exactly which tags match with live highlighting — 100% client-side, paste anything.',
    toolTitle: 'Strip HTML Tags Regex',
    explanation:
      'Matches opening, closing, and self-closing HTML tags — an angle bracket, an optional slash, a tag name, then any attributes up to the closing bracket. Plain text, stray less-than signs like "3 < 5", and already-escaped entities are left untouched.',
    defaultRegex: String.raw`<\/?[a-zA-Z][^>]*>`,
    defaultFlags: 'g',
    testString: [
      '<article class="post">',
      '  <h1>Pricing update</h1>',
      '  <p>Now <strong>free forever</strong> — no <em>tokens</em> required.<br/></p>',
      '</article>',
      '',
      'Will NOT match:',
      '  math like 3 < 5 and x > 2',
      '  escaped entities: &lt;div&gt;',
    ].join('\n'),
  },
];
