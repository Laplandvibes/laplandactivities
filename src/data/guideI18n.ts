// Season + planning guides for destination and category pages.
//
// WHY THIS FILE EXISTS: destinations.ts / categories.ts carry a hero lead, a
// "why go" paragraph and a handful of facts. That is what the pages rendered,
// and it left every /destinations/* and /categories/* page under the 250-word
// mark a crawler needs — 120 of laplandactivities' 148 thin pages (own crawl
// 2026-08-22). The gap was real missing text, not a broken reader: the
// localized name/why/access already existed in src/locales/data.gen.<lang>.ts.
//
// So this is NEW editorial copy, written natively per language, not translated
// machine-side: when to come, what runs in which season, how to get there and
// what to book ahead. English lives in guides.en.ts and ships in the main
// bundle; every other language is a lazy chunk loaded by the App gate, exactly
// like copy.<lang>.ts and data.gen.<lang>.ts.
//
// 🔴 The pages themselves render these fields (DestinationPage / CategoryPage).
// The prerenderer harvests the SAME per-language record via routes.json
// "harvestRecord", so the crawlable body and the rendered page say the same
// thing in the same language. Never add text to one side only.

import type { Lang } from '../i18n/useLang';
import enGuides from './guides.en';

/** Season + planning guide for one destination. All fields are plain strings:
 *  the prerenderer's harvester reads `key: 'value'` pairs and skips arrays. */
export interface DestinationGuide {
  seasonsTitle: string;
  seasonWinter: string;
  seasonSummer: string;
  planTitle: string;
  planGetting: string;
  planStay: string;
}

/** What a category covers, when it runs, and how to choose within it. */
export interface CategoryGuide {
  coversTitle: string;
  covers: string;
  whenToGo: string;
  chooseTitle: string;
  choosing: string;
  bring: string;
}

/** Editorial lead for the two index pages (/destinations and /categories).
 *  English has no data.gen.en.ts to harvest, so without this the English index
 *  pages are the last two thin pages on the site. */
export interface IndexGuide {
  leadTitle: string;
  lead: string;
  note: string;
}

export interface Guides {
  destinations: Record<string, DestinationGuide>;
  categories: Record<string, CategoryGuide>;
  /** keys: destList (for /destinations), catList (for /categories) */
  indexes: Record<string, IndexGuide>;
}

const REGISTRY: Partial<Record<Lang, Guides>> = { en: enGuides };

const loaders: Partial<Record<Lang, () => Promise<{ default: Guides }>>> = {
  fi: () => import('./guides.fi'),
  de: () => import('./guides.de'),
  ja: () => import('./guides.ja'),
  es: () => import('./guides.es'),
  'pt-BR': () => import('./guides.ptBR'),
  'zh-CN': () => import('./guides.zhCN'),
  ko: () => import('./guides.ko'),
  fr: () => import('./guides.fr'),
  it: () => import('./guides.it'),
  nl: () => import('./guides.nl'),
  sv: () => import('./guides.sv'),
};

export function isGuidesLoaded(lang: Lang): boolean {
  return lang === 'en' || !!REGISTRY[lang] || !loaders[lang];
}

export function loadGuides(lang: Lang): Promise<void> {
  const loader = loaders[lang];
  if (!loader || REGISTRY[lang]) return Promise.resolve();
  return loader().then((m) => { REGISTRY[lang] = m.default; });
}

/** Build tooling (generate-prerender-meta.mjs) resolves every language up front. */
export async function loadAllGuides(): Promise<void> {
  await Promise.all((Object.keys(loaders) as Lang[]).map((l) => loadGuides(l)));
}

/** Guide for a destination slug, falling back FIELD BY FIELD to English so a
 *  half-finished translation can never blank a section. */
export function destinationGuide(slug: string, lang: Lang): DestinationGuide | undefined {
  const base = enGuides.destinations[slug];
  if (!base) return undefined;
  if (lang === 'en') return base;
  const loc = REGISTRY[lang]?.destinations?.[slug];
  if (!loc) return base;
  return {
    seasonsTitle: loc.seasonsTitle || base.seasonsTitle,
    seasonWinter: loc.seasonWinter || base.seasonWinter,
    seasonSummer: loc.seasonSummer || base.seasonSummer,
    planTitle: loc.planTitle || base.planTitle,
    planGetting: loc.planGetting || base.planGetting,
    planStay: loc.planStay || base.planStay,
  };
}

/** Editorial lead for an index page, same field-by-field English fallback. */
export function indexGuide(key: string, lang: Lang): IndexGuide | undefined {
  const base = enGuides.indexes[key];
  if (!base) return undefined;
  if (lang === 'en') return base;
  const loc = REGISTRY[lang]?.indexes?.[key];
  if (!loc) return base;
  return {
    leadTitle: loc.leadTitle || base.leadTitle,
    lead: loc.lead || base.lead,
    note: loc.note || base.note,
  };
}

/** Guide for a category slug, same field-by-field English fallback. */
export function categoryGuide(slug: string, lang: Lang): CategoryGuide | undefined {
  const base = enGuides.categories[slug];
  if (!base) return undefined;
  if (lang === 'en') return base;
  const loc = REGISTRY[lang]?.categories?.[slug];
  if (!loc) return base;
  return {
    coversTitle: loc.coversTitle || base.coversTitle,
    covers: loc.covers || base.covers,
    whenToGo: loc.whenToGo || base.whenToGo,
    chooseTitle: loc.chooseTitle || base.chooseTitle,
    choosing: loc.choosing || base.choosing,
    bring: loc.bring || base.bring,
  };
}
