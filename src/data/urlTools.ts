export interface UrlTool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultDirection: 'encode' | 'decode';
  defaultInput: string;
}

export const urlTools: UrlTool[] = [
  {
    slug: 'url-encode-decode-strings',
    metaTitle: 'URL Encode & Decode Online — encodeURIComponent Tester | SandboxMax',
    metaDescription:
      'Encode or decode URL components instantly with native browser escaping — spaces, ampersands, quotes, and unicode handled correctly. Free, no signup, 100% client-side.',
    toolTitle: 'URL Encoder / Decoder',
    explanation:
      'Pre-loaded with the characters that break query strings — spaces, ampersands, percent signs, quotes, slashes — so you can see exactly how encodeURIComponent escapes each one. Paste anything, hit Encode or Decode, and the last action re-runs live as you keep typing. Malformed percent-sequences are handled leniently instead of crashing.',
    defaultDirection: 'encode',
    defaultInput: 'developer tools & "sandbox" — 100% free (no login) / no server?',
  },
  {
    slug: 'parse-nested-query-parameters',
    metaTitle: 'Parse Nested URL Query Parameters Online — Smart Param Grid | SandboxMax',
    metaDescription:
      'Drop any URL and get every query parameter extracted into a clean key/value grid — including nested encoded callback URLs. Native URLSearchParams, fully client-side.',
    toolTitle: 'Nested Query Parameter Parser',
    explanation:
      'Pre-loaded with a webhook URL of the painful kind: array-style keys, percent-encoded values, and a callback parameter that contains an entire second URL, encoded, with its own query string inside. The Smart Parameter Grid decodes every layer into readable key/value rows — paste the decoded callback back in to unwrap the next layer.',
    defaultDirection: 'decode',
    defaultInput:
      'https://hooks.example.com/webhook?event=purchase&user=usr%2042&items[]=sku_8801&items[]=sku_2214&note=50%25%20off%20applied&callback=https%3A%2F%2Fapp.example.com%2Freturn%3Fstep%3D2%26plan%3Dpro&ts=1782000000',
  },
  {
    slug: 'sanitize-utm-tracking-tokens',
    metaTitle: 'Remove UTM & Tracking Parameters from URLs — Clean Link Tool | SandboxMax',
    metaDescription:
      'Paste a link full of utm_, gclid, and fbclid tokens; see every tracker flagged in the parameter grid and copy a clean URL with one click. Free and 100% in your browser.',
    toolTitle: 'UTM & Tracking Token Sanitizer',
    explanation:
      'Pre-loaded with a link the way marketing emails actually send them: five UTM tags plus Google and Facebook click IDs bolted onto one poor URL. Every known tracking token is flagged amber in the grid, and the "copy clean URL" button hands you the same link with all of them stripped — the parameters that actually matter stay untouched.',
    defaultDirection: 'decode',
    defaultInput:
      'https://sandboxmax.com/tools?ref=changelog&utm_source=news%20letter&utm_medium=email&utm_campaign=july%20launch&utm_content=cta%20button&utm_term=dev%20tools&gclid=Cj0KCQjw_example_click_id&fbclid=IwAR2_example_fb_token',
  },
];
