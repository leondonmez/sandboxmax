import { Buffer } from 'node:buffer';

export interface Base64Tool {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  toolTitle: string;
  explanation: string;
  defaultMode: 'text' | 'file';
  defaultDirection: 'encode' | 'decode';
  defaultInput: string;
  usageSnippet?: string;
}

// The decode page's sample is generated at build time so it can never drift
// out of sync with the message it encodes — including the UTF-8 characters
// that exist specifically to prove the double-byte handling works.
const decodeSample = Buffer.from(
  'SandboxMax décodé ✓ — UTF-8 characters, accents, and emojis 🎉 survive the round-trip.',
  'utf-8'
).toString('base64');

export const base64Tools: Base64Tool[] = [
  {
    slug: 'encode-text-to-base64',
    metaTitle: 'Encode Text to Base64 Online — UTF-8 Safe & Instant | SandboxMax',
    metaDescription:
      'Convert any text to Base64 as you type — accents, emojis, and special characters handled correctly. Free, no signup, 100% in your browser.',
    toolTitle: 'Text to Base64 Encoder',
    explanation:
      'Pre-loaded with a config payload of the kind that ends up Base64-encoded in environment variables, Kubernetes secrets, and HTTP basic-auth headers. Encoding is UTF-8 safe — accents and emojis won\'t corrupt — and happens on every keystroke, entirely in your browser.',
    defaultMode: 'text',
    defaultDirection: 'encode',
    defaultInput: [
      '{',
      '  "service": "checkout-api",',
      '  "region": "us-east-1",',
      '  "replicas": 3,',
      '  "owner": "Zoë Muñoz",',
      '  "sealed": true',
      '}',
    ].join('\n'),
  },
  {
    slug: 'decode-base64-to-string',
    metaTitle: 'Decode Base64 to String Online — Instant & Private | SandboxMax',
    metaDescription:
      'Paste Base64 and read the decoded text instantly — handles UTF-8, URL-safe Base64, missing padding, and data: URLs. Free and fully client-side.',
    toolTitle: 'Base64 to String Decoder',
    explanation:
      'Pre-loaded with an encoded string so you can see the decoder work the moment the page loads — including the accented characters and emoji that break naive atob() implementations. It also forgives real-world mess: URL-safe Base64, stripped padding, and pasted data: URLs all decode fine.',
    defaultMode: 'text',
    defaultDirection: 'decode',
    defaultInput: decodeSample,
  },
  {
    slug: 'convert-image-to-data-url',
    metaTitle: 'Convert Image to Base64 Data URL — Embed in HTML/CSS | SandboxMax',
    metaDescription:
      'Drop an image and get a data: URL to embed directly in HTML or CSS — with a live preview to verify it. No upload: the file is read entirely inside your browser.',
    toolTitle: 'Image to Data URL Converter',
    explanation:
      'Drop an image (or any small file) and it becomes a data: URL — the file\'s bytes encoded to Base64 with a MIME prefix, ready to paste into an <img> tag or a CSS background. The live preview renders the result so you can verify it visually before copying. The file is read with FileReader inside your browser; nothing is uploaded.',
    defaultMode: 'file',
    defaultDirection: 'encode',
    defaultInput: '',
    usageSnippet: [
      '<!-- HTML: paste the data URL straight into src -->',
      '<img src="data:image/png;base64,iVBORw0K..." alt="logo" />',
      '',
      '/* CSS: or embed it as a background image */',
      '.logo {',
      '  background-image: url("data:image/png;base64,iVBORw0K...");',
      '}',
    ].join('\n'),
  },
];
