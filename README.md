# Bari Technologies — website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion.

```bash
export PATH=$HOME/.local/node/bin:$PATH   # Node 22 installed locally
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure
- `src/app/*/page.tsx`: one route per page (`/`, `/services`, `/sectors`, `/process`, `/work`, `/about`, `/contact`). Old `/#page` links redirect.
- `src/components/sections/<page>/*`: page sections (server components, static HTML). `sections/shared/`: Plans, FAQ, CTA.
- `src/components/site/*`: header, drawer, footer, `Link` (page-transition link).
- `src/components/runtime/*`: client runtimes that attach behaviour to the markup (`ChromeRuntime`: theme, header, drawer; `PageRuntime`: per-page).
- `src/lib/behaviors/*`: reveals, counters, tabs, filters, FAQ, plan toggle, language switch, chart, globes, KPI card, mail form.
- `src/styles/prototype/*`: the design system, in the original cascade order. Tailwind runs without Preflight, so it doesn't change base styles.

## Visual QA (prototype in `prototype/index.html` is the reference)
```bash
python3 -m http.server 4100 -d prototype &   # prototype
node scripts/compare.mjs [pages] [viewports] [--dark]   # pixel diff → .compare/
node scripts/interact.mjs                                # interaction parity
```
Note: content edits made after the port (hero rings/checklist removed, sample labels removed, brand-colour checks) intentionally differ from the prototype.
