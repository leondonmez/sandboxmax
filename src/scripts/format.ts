export const escapeHtml = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

/** Pretty-printed JSON with Tailwind-colored syntax, safe for innerHTML. */
export function jsonHtml(value: unknown, depth = 0): string {
  const pad = '  '.repeat(depth);
  if (value === null) return '<span class="text-rose-300">null</span>';
  if (typeof value === 'string') return `<span class="text-emerald-300">"${escapeHtml(value)}"</span>`;
  if (typeof value === 'number') return `<span class="text-amber-300">${value}</span>`;
  if (typeof value === 'boolean') return `<span class="text-rose-300">${value}</span>`;
  if (Array.isArray(value)) {
    if (value.length === 0) return '<span class="text-zinc-500">[]</span>';
    const items = value.map((v) => `${pad}  ${jsonHtml(v, depth + 1)}`).join('<span class="text-zinc-500">,</span>\n');
    return `<span class="text-zinc-500">[</span>\n${items}\n${pad}<span class="text-zinc-500">]</span>`;
  }
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length === 0) return '<span class="text-zinc-500">{}</span>';
  const rows = entries
    .map(
      ([k, v]) =>
        `${pad}  <span class="text-sky-300">"${escapeHtml(k)}"</span><span class="text-zinc-500">:</span> ${jsonHtml(v, depth + 1)}`
    )
    .join('<span class="text-zinc-500">,</span>\n');
  return `<span class="text-zinc-500">{</span>\n${rows}\n${pad}<span class="text-zinc-500">}</span>`;
}

export const formatBytes = (n: number) => (n < 1024 ? `${n} B` : `${(n / 1024).toFixed(2)} KB`);

export const byteLength = (s: string) => new TextEncoder().encode(s).length;
