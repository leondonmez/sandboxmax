## Project

SandboxMax (sandboxmax.com) — free client-side developer utilities. Positioning: zero friction (no signups/paywalls), 100% local browser execution (no data leaves the tab), infinite free iterations (no tokens/credits). Tagline: "The Client-Side Sandbox. No LLM Costs. No Accounts. Just Pure Code Utilities."

Hard rules:
- Every tool runs entirely client-side. No API routes, no server code, no data upload.
- Zero external requests at runtime: system fonts only, no third-party scripts, no trackers or cookies.
- Stay platform-independent: static output only, no Vercel-specific features. Hosting: Vercel via GitHub; domain/DNS/email-forwarding: Namecheap.
- Tool pages follow the pSEO pattern: metadata lives in `src/data/tools.ts`, URLs like `/json/formatter`; static pre-rendered SEO copy around a small interactive island (vanilla TS first, Preact only if state gets complex).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
