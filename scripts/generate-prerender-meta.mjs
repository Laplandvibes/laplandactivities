/**
 * generate-prerender-meta.mjs  (laplandactivities)
 *
 * Builds scripts/prerender-meta.json so the shared prerenderer (../_prerender_routes.mjs,
 * READER 0 "meta") can bake LOCALIZED <title> + <meta description> (and, for the home
 * page, a FAQPage JSON-LD) into the static HTML of each route, per locale.
 *
 * WHY: the SPA's runtime SEO for category/destination/about/home pages comes from the
 * data layer (src/data/* + src/locales/data.ts) and the COPY object — none of which the
 * prerenderer can see. routes.json carries only English fallbackTitle/fallbackDescription
 * for these routes, so the prerendered HTML shipped an ENGLISH placeholder title +
 * description on every localized subpage (e.g. /fi/categories/animals/ →
 * "Categories · Animals | LaplandActivities"). This generator reads the SAME sources the
 * React pages use (via Vite SSR) and emits per-route × per-locale {title, description}
 * into the meta map, so the static HTML matches what users see — one source of truth.
 *
 * Routes covered (per locale, all 11 langs):
 *   /                         home  — COPY[lang].home.metaTitle / .metaDescription (+ faq)
 *   /about                    about — COPY[lang].about.metaTitle / .metaDescription
 *   /categories               index — COPY[lang].categoriesIndex.metaTitle / .metaDescription
 *   /destinations             index — COPY[lang].destinationsIndex.metaTitle / .metaDescription
 *   /categories/{slug}        ×8    — `${localizeCategory.name} — LaplandActivities`
 *                                     / clamped localizeCategory.description
 *   /destinations/{slug}      ×8    — `${localizeDestination.name} — LaplandActivities`
 *                                     / clamped localizeDestination.description
 *
 * Titles mirror the runtime <title> in CategoryPage.tsx / DestinationPage.tsx
 * (`${name} — LaplandActivities`). Descriptions reuse the already-native localized data
 * descriptions, clamped to a clean complete-sentence prefix ≤ 165 chars (Google's snippet
 * range) so they read as descriptive native copy in every language. The category/
 * destination index pages and /home description already had localized COPY meta; we now
 * surface them through the prerenderer too.
 *
 * Consumed by ../_prerender_routes.mjs via --meta=scripts/prerender-meta.json.
 * Degrades gracefully: on any error it exits 0 with an empty/partial map and the
 * prerender simply falls back to routes.json fallbacks (previous behavior).
 *
 * STRICTLY READ-ONLY over src/ — no source files are modified.
 */

import { writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_FILE = resolve(__dirname, 'prerender-meta.json');

// Keep in sync with src/i18n/useLang.ts Lang union + the COPY keys.
const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];

// Site brand suffix used in the runtime <title> of category/destination pages.
const TITLE_SUFFIX = 'LaplandActivities';
// Max meta-description length (Google snippet range upper bound).
const DESC_MAX = 165;

/**
 * Clamp a description to a clean, native, complete-sentence prefix ≤ max chars.
 * Latin scripts split on . ! ?  — CJK (ja/zh-CN/ko) also honor 。！？. Falls back to a
 * word-boundary (latin) or hard (CJK) cut with an ellipsis only when even the first
 * sentence overflows. Returns descriptive copy (no banned adjectives are introduced —
 * the source data already avoids "stunning/breathtaking/world-class").
 */
function clampMeta(text, max, lang) {
  text = String(text || '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cjk = lang === 'ja' || lang === 'zh-CN' || lang === 'ko';
  const enders = cjk ? /[。.!?！？]/g : /[.!?]/g;
  let best = '';
  let m;
  while ((m = enders.exec(text)) !== null) {
    const end = m.index + 1;
    if (end <= max) best = text.slice(0, end);
    else break;
  }
  const floor = cjk ? 24 : 55;
  if (best && best.trim().length >= floor) return best.trim();
  if (cjk) return text.slice(0, max).replace(/[、，,；;：:\s]+$/, '') + '…';
  const slice = text.slice(0, max + 1);
  const lastSpace = slice.lastIndexOf(' ');
  return (lastSpace > 50 ? slice.slice(0, lastSpace) : text.slice(0, max))
    .replace(/[\s,;:.\-–—]+$/, '') + '…';
}

async function main() {
  const needed = ['src/locales/copy.ts', 'src/data/categories.ts', 'src/data/destinations.ts', 'src/locales/data.ts'];
  for (const f of needed) {
    if (!existsSync(resolve(ROOT, f))) {
      console.error(`[meta] ${f} missing — wrote empty map`);
      writeFileSync(OUT_FILE, '{}\n', 'utf-8');
      return;
    }
  }

  // Load the real modules through Vite SSR so TS resolves exactly as at runtime.
  let COPY = null, categories = null, destinations = null, localizeCategory = null, localizeDestination = null;
  let viteServer = null;
  try {
    const vite = await import('vite');
    viteServer = await vite.createServer({
      root: ROOT,
      logLevel: 'error',
      server: { middlewareMode: true, hmr: false, watch: null },
      appType: 'custom',
      optimizeDeps: { noDiscovery: true, include: [] },
    });
    let load;
    if (typeof viteServer.ssrLoadModule === 'function') {
      load = (p) => viteServer.ssrLoadModule(p);
    } else {
      const runner = vite.createServerModuleRunner(viteServer.environments.ssr, { hmr: false });
      load = (p) => runner.import(p);
    }
    const copyMod = await load('/src/locales/copy.ts');
    if (typeof copyMod.loadAllCopy === 'function') await copyMod.loadAllCopy();
    COPY = copyMod.COPY;
    categories = (await load('/src/data/categories.ts')).categories;
    destinations = (await load('/src/data/destinations.ts')).destinations;
    const dataMod = await load('/src/locales/data.ts');
    localizeCategory = dataMod.localizeCategory;
    localizeDestination = dataMod.localizeDestination;
    if (typeof dataMod.loadAllLocaleData === 'function') await dataMod.loadAllLocaleData();
  } catch (e) {
    console.error(`[meta] could not load sources via Vite SSR: ${e.message}`);
  } finally {
    if (viteServer) await viteServer.close();
  }

  if (!COPY || !categories || !destinations || !localizeCategory || !localizeDestination) {
    writeFileSync(OUT_FILE, '{}\n', 'utf-8');
    console.error('[meta] sources not loaded — wrote empty map (prerender falls back to routes.json)');
    return;
  }

  const meta = {};
  const titleOf = (name) => `${name} · ${TITLE_SUFFIX}`;

  // ---- HOME ('/') : localized title + description, plus the existing FAQ array ----
  const home = {};
  for (const lang of LANGS) {
    const h = (COPY[lang] && COPY[lang].home) || (COPY.en && COPY.en.home) || {};
    const faqSec = (COPY[lang] && COPY[lang].faq) || (COPY.en && COPY.en.faq);
    const items = faqSec && Array.isArray(faqSec.items)
      ? faqSec.items
          .filter((it) => it && typeof it.q === 'string' && typeof it.a === 'string')
          .map((it) => ({ q: it.q, a: it.a }))
      : null;
    const entry = {};
    if (h.metaTitle) entry.title = h.metaTitle;
    if (h.metaDescription) entry.description = h.metaDescription;
    if (items && items.length) entry.faq = items;
    if (Object.keys(entry).length) home[lang] = entry;
  }
  if (Object.keys(home).length) meta['/'] = home;

  // ---- COPY-backed index/standalone pages: localized metaTitle + metaDescription ----
  // about + the two index pages (/categories, /destinations) all carry localized
  // metaTitle/metaDescription in COPY but only English fallbacks in routes.json.
  const copyPages = [
    { path: '/about', key: 'about' },
    { path: '/fishing', key: 'fishing' },
    { path: '/bear-kuusamo', key: 'bearKuusamo' },
    { path: '/categories', key: 'categoriesIndex' },
    { path: '/destinations', key: 'destinationsIndex' },
    { path: '/privacy', key: 'privacy' },
    { path: '/terms', key: 'terms' },
    { path: '/cookie-policy', key: 'cookie' },
  ];
  for (const { path, key } of copyPages) {
    const byLang = {};
    for (const lang of LANGS) {
      const sec = (COPY[lang] && COPY[lang][key]) || (COPY.en && COPY.en[key]) || {};
      const entry = {};
      if (sec.metaTitle) entry.title = sec.metaTitle;
      if (sec.metaDescription) entry.description = clampMeta(sec.metaDescription, DESC_MAX, lang);
      if (Object.keys(entry).length) byLang[lang] = entry;
    }
    if (Object.keys(byLang).length) meta[path] = byLang;
  }

  // ---- CATEGORY subpages ('/categories/{slug}') ----
  let catCount = 0;
  for (const cat of categories) {
    const path = `/categories/${cat.slug}`;
    const byLang = {};
    for (const lang of LANGS) {
      const lc = localizeCategory(cat, lang);
      if (!lc || !lc.name) continue;
      byLang[lang] = {
        title: titleOf(lc.name),
        description: clampMeta(lc.description, DESC_MAX, lang),
      };
    }
    if (Object.keys(byLang).length) { meta[path] = byLang; catCount++; }
  }

  // ---- DESTINATION subpages ('/destinations/{slug}') ----
  let destCount = 0;
  for (const dest of destinations) {
    const path = `/destinations/${dest.slug}`;
    const byLang = {};
    for (const lang of LANGS) {
      const ld = localizeDestination(dest, lang);
      if (!ld || !ld.name) continue;
      byLang[lang] = {
        title: titleOf(ld.name),
        description: clampMeta(ld.description, DESC_MAX, lang),
      };
    }
    if (Object.keys(byLang).length) { meta[path] = byLang; destCount++; }
  }

  writeFileSync(OUT_FILE, JSON.stringify(meta, null, 2) + '\n', 'utf-8');
  console.log(`[meta] wrote scripts/prerender-meta.json: home${meta['/'] ? '✓' : '✗'} about${meta['/about'] ? '✓' : '✗'} catIndex${meta['/categories'] ? '✓' : '✗'} destIndex${meta['/destinations'] ? '✓' : '✗'} categories=${catCount} destinations=${destCount} (×${LANGS.length} locales)`);
  if (meta['/'] && meta['/'].fi) console.log(`[meta] sample / fi title: ${meta['/'].fi.title}`);
  if (meta['/categories/animals'] && meta['/categories/animals'].fi) {
    console.log(`[meta] sample /categories/animals fi: "${meta['/categories/animals'].fi.title}" | ${meta['/categories/animals'].fi.description}`);
  }
  if (meta['/destinations/levi'] && meta['/destinations/levi'].de) {
    console.log(`[meta] sample /destinations/levi de: "${meta['/destinations/levi'].de.title}" | ${meta['/destinations/levi'].de.description}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[meta] ERROR (non-fatal, build continues with routes.json fallbacks):', err);
    process.exit(0);
  });
