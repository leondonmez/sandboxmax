/**
 * Build-time OpenGraph image generator.
 * One 1200×630 PNG per tool page (+ one site-wide card used by the landing
 * page and 404) rendered with satori → resvg. Runs only during `astro build`;
 * nothing here ships to the browser.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

import { regexTools } from '../../data/regexTools';
import { jwtTools } from '../../data/jwtTools';
import { csvTools } from '../../data/csvTools';
import { diffTools } from '../../data/diffTools';
import { cronTools } from '../../data/cronTools';
import { jsonTools } from '../../data/jsonTools';
import { base64Tools } from '../../data/base64Tools';
import { uuidTools } from '../../data/uuidTools';
import { markdownTools } from '../../data/markdownTools';
import { hashTools } from '../../data/hashTools';
import { timestampTools } from '../../data/timestampTools';
import { urlTools } from '../../data/urlTools';

interface OgPage {
  title: string;
  description: string;
}

const clusters: Record<string, { slug: string; toolTitle: string; metaDescription: string }[]> = {
  regex: regexTools,
  jwt: jwtTools,
  csv: csvTools,
  diff: diffTools,
  cron: cronTools,
  json: jsonTools,
  base64: base64Tools,
  uuid: uuidTools,
  markdown: markdownTools,
  hash: hashTools,
  timestamp: timestampTools,
  url: urlTools,
};

const pages: Record<string, OgPage> = {
  site: {
    title: 'The Client-Side Sandbox',
    description: 'Free developer utilities that run 100% in your browser — no signups, no servers, no tokens.',
  },
};
for (const [prefix, tools] of Object.entries(clusters)) {
  for (const tool of tools) {
    pages[`${prefix}/${tool.slug}`] = { title: tool.toolTitle, description: tool.metaDescription };
  }
}

export const getStaticPaths: GetStaticPaths = () =>
  Object.entries(pages).map(([key, page]) => ({
    params: { route: `${key}.png` },
    props: page,
  }));

// --- Visual template ---------------------------------------------------------

/** tiny helper: satori element without JSX */
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, ...(children === undefined ? {} : { children }) },
});

/** clamp on a word boundary so the ellipsis never splits a word */
const clamp = (s: string, max: number) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;—-]$/, '') + ' …';
};

// resvg does not rasterize satori's gradient-pattern backgrounds, so the
// dot grid is drawn as explicit elements — guaranteed to render
const DOT_SPACING = 48;
const dotGrid = Array.from({ length: Math.ceil(630 / DOT_SPACING) }, (_, row) =>
  Array.from({ length: Math.ceil(1200 / DOT_SPACING) }, (_, col) =>
    el('div', {
      position: 'absolute',
      left: `${col * DOT_SPACING + 24}px`,
      top: `${row * DOT_SPACING + 24}px`,
      width: '4px',
      height: '4px',
      borderRadius: '999px',
      backgroundColor: 'rgba(113,113,122,0.32)',
    })
  )
).flat();

function template(page: OgPage) {
  const title = clamp(page.title, 70);
  const titleSize = title.length > 38 ? 52 : 62;

  return el(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '56px 64px 56px 78px',
      backgroundColor: '#09090b',
      fontFamily: 'JetBrains Mono',
      position: 'relative',
    },
    [
      ...dotGrid,
      // left accent bar: emerald → indigo
      el('div', {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '14px',
        height: '630px',
        backgroundImage: 'linear-gradient(180deg, #34d399 0%, #6366f1 100%)',
      }),
      // brand mark, top-left
      el('div', { display: 'flex', alignItems: 'center', gap: '14px' }, [
        el('div', { width: '26px', height: '26px', borderRadius: '6px', backgroundColor: '#34d399' }),
        el(
          'div',
          { display: 'flex', fontSize: '27px', fontWeight: 700, color: '#a1a1aa' },
          'sandboxmax.com'
        ),
      ]),
      // title + description, vertically centered
      el('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }, [
        el(
          'div',
          {
            display: 'flex',
            fontSize: `${titleSize}px`,
            fontWeight: 700,
            color: '#fafafa',
            lineHeight: 1.18,
            maxWidth: '1020px',
          },
          title
        ),
        el(
          'div',
          {
            display: 'flex',
            marginTop: '26px',
            fontSize: '26px',
            color: '#a1a1aa',
            lineHeight: 1.45,
            maxWidth: '980px',
          },
          clamp(page.description, 150)
        ),
      ]),
      // trust badge, bottom-left
      el('div', { display: 'flex' }, [
        el(
          'div',
          {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 26px',
            borderRadius: '999px',
            border: '2px solid rgba(52,211,153,0.45)',
            backgroundColor: 'rgba(52,211,153,0.08)',
          },
          [
            el('div', { width: '11px', height: '11px', borderRadius: '999px', backgroundColor: '#34d399' }),
            el(
              'div',
              { display: 'flex', fontSize: '22px', fontWeight: 700, color: '#34d399' },
              '100% Client-Side • Secure'
            ),
          ]
        ),
      ]),
    ]
  );
}

// --- Rendering ---------------------------------------------------------------

const fontDir = path.join(process.cwd(), 'src/assets/fonts');
const fontsPromise = Promise.all([
  readFile(path.join(fontDir, 'JetBrainsMono-Regular.ttf')),
  readFile(path.join(fontDir, 'JetBrainsMono-Bold.ttf')),
]);

export const GET: APIRoute = async ({ props }) => {
  const [regular, bold] = await fontsPromise;
  const svg = await satori(template(props as OgPage), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'JetBrains Mono', data: regular, weight: 400, style: 'normal' },
      { name: 'JetBrains Mono', data: bold, weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
