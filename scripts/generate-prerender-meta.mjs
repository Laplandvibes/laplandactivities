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
 * Routes covered (per locale, all 12 langs):
 *   /                         home  — COPY[lang].home.metaTitle / .metaDescription (+ faq)
 *   /about, /fishing, …       COPY[lang].<key>.metaTitle / .metaDescription, as written
 *   /categories               index — COPY[lang].categoriesIndex.metaTitle / .metaDescription
 *   /destinations             index — COPY[lang].destinationsIndex.metaTitle / .metaDescription
 *   /categories/{slug}        categoryTitle() / categoryMetaDescription()
 *   /destinations/{slug}      destinationTitle() / destinationMetaDescription()
 *
 * Titles come from src/lib/pageTitles.ts and the category/destination descriptions from
 * src/lib/pageMeta.ts: the React pages call the same functions, so the served HTML and the
 * hydrated page cannot disagree. COPY meta descriptions are passed through unchanged, as the
 * pages render them. Every description must sit inside the prerenderer's window (70–160
 * characters, CJK 100–200 width units); one outside it is listed at the end of the run,
 * because the prerenderer would then cut or extend the served text and the browser would not.
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
  let destinationTitle = null, categoryTitle = null;
  let destinationMetaDescription = null, categoryMetaDescription = null, inDescriptionWindow = null;
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
    // [LV-DUP 2026-09-06] localized title builders shared with the React pages.
    const titlesMod = await load('/src/lib/pageTitles.ts');
    destinationTitle = titlesMod.destinationTitle;
    categoryTitle = titlesMod.categoryTitle;
    // Category and destination meta descriptions, shared with the React pages.
    const metaMod = await load('/src/lib/pageMeta.ts');
    destinationMetaDescription = metaMod.destinationMetaDescription;
    categoryMetaDescription = metaMod.categoryMetaDescription;
    inDescriptionWindow = metaMod.inDescriptionWindow;
    const dataMod = await load('/src/locales/data.ts');
    localizeCategory = dataMod.localizeCategory;
    localizeDestination = dataMod.localizeDestination;
    if (typeof dataMod.loadAllLocaleData === 'function') await dataMod.loadAllLocaleData();
  } catch (e) {
    console.error(`[meta] could not load sources via Vite SSR: ${e.message}`);
  } finally {
    if (viteServer) await viteServer.close();
  }

  if (!COPY || !categories || !destinations || !localizeCategory || !localizeDestination || !destinationTitle || !categoryTitle
    || !destinationMetaDescription || !categoryMetaDescription || !inDescriptionWindow) {
    writeFileSync(OUT_FILE, '{}\n', 'utf-8');
    console.error('[meta] sources not loaded — wrote empty map (prerender falls back to routes.json)');
    return;
  }

  const meta = {};

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
      // As written: the page renders COPY[lang][key].metaDescription unchanged.
      if (sec.metaDescription) entry.description = sec.metaDescription;
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
        title: categoryTitle(lc.name, lang),
        description: categoryMetaDescription(cat.slug, lc.description, lang),
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
        title: destinationTitle(ld.name, lang),
        description: destinationMetaDescription(dest.slug, ld.description, lang),
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

  // A description outside the window is cut or extended by the prerenderer while the browser
  // keeps it as written: the served HTML and the hydrated page would then show two texts.
  const outside = [];
  for (const [path, byLang] of Object.entries(meta)) {
    for (const [lang, entry] of Object.entries(byLang)) {
      const d = String(entry.description || '').replace(/\s+/g, ' ').trim();
      if (d && !inDescriptionWindow(d)) outside.push(`${path} ${lang} (${d.length} chars)`);
    }
  }
  if (outside.length) {
    console.warn(`[meta] WARNING ${outside.length} description(s) outside 70-160 chars / CJK 100-200 width; fix the source (COPY metaDescription or src/lib/pageMeta.ts):`);
    for (const o of outside) console.warn(`[meta]   ${o}`);
  } else {
    console.log('[meta] all descriptions inside the prerender window (70-160 chars, CJK 100-200 width)');
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[meta] ERROR (non-fatal, build continues with routes.json fallbacks):', err);
    process.exit(0);
  });
