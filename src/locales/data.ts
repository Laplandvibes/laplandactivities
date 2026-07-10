// Locale-specific overrides for category, destination, and activity data.
// English (default) is taken from src/data/* directly. For other locales
// (ko/fr/it/nl etc.) we look up translated strings here and fall back to EN.

import type { Lang } from '../i18n/useLang';
import type { Activity } from '../data/activities';
import type { Category } from '../data/categories';
import type { Destination } from '../data/destinations';

// ---------- CATEGORY NAMES ----------
type CategoryT = { name: string; description: string };
type CategoryMap = Record<string, CategoryT>;

type DestinationT = { name: string; tagline: string; description: string; access: string; bestFor: string };
type DestinationMap = Record<string, DestinationT>;
type ActivityT = { title: string; description: string; highlights: string[]; duration: string; difficulty?: string; category: string };
type ActivityMap = Record<string, ActivityT>;

export type LangData = {
  categories: CategoryMap | null;
  destinations: DestinationMap | null;
  difficulty: Record<Activity['difficulty'], string> | null;
  activities: ActivityMap | null;
};

// Per-language locale data lives in lazy chunks (data.gen.<lang>.ts) —
// registered here by loadLocaleData(), which the App-level gate awaits.
// Until loaded, every localize* helper falls back to the EN base (same
// fallback path the old eager maps used for missing keys).
const REGISTRY: Partial<Record<Lang, LangData>> = {};

const loaders: Partial<Record<Lang, () => Promise<{ default: LangData }>>> = {
  fi: () => import('./data.gen.fi'),
  de: () => import('./data.gen.de'),
  ja: () => import('./data.gen.ja'),
  es: () => import('./data.gen.es'),
  'pt-BR': () => import('./data.gen.ptBR'),
  'zh-CN': () => import('./data.gen.zhCN'),
  ko: () => import('./data.gen.ko'),
  fr: () => import('./data.gen.fr'),
  it: () => import('./data.gen.it'),
  nl: () => import('./data.gen.nl'),
};

export function isLocaleDataLoaded(lang: Lang): boolean {
  return lang === 'en' || !!REGISTRY[lang] || !loaders[lang];
}

export function loadLocaleData(lang: Lang): Promise<void> {
  const loader = loaders[lang];
  if (!loader || REGISTRY[lang]) return Promise.resolve();
  return loader().then((m) => {
    REGISTRY[lang] = m.default;
  });
}

export async function loadAllLocaleData(): Promise<void> {
  await Promise.all((Object.keys(loaders) as Lang[]).map((l) => loadLocaleData(l)));
}

function translateDuration(raw: string, lang: Lang): string {
  if (lang === 'ko') {
    return raw
      .replace(/Day pass/i, '1일권')
      .replace(/Overnight/i, '1박')
      .replace(/multi-day/i, '여러 날')
      .replace(/hours?/i, '시간')
      .replace(/days?/i, '일');
  }
  if (lang === 'fr') {
    return raw
      .replace(/Day pass/i, 'Pass journée')
      .replace(/Overnight/i, 'Nuitée')
      .replace(/multi-day/i, 'plusieurs jours')
      .replace(/hours?/i, 'h')
      .replace(/ days?/i, ' j');
  }
  if (lang === 'it') {
    return raw
      .replace(/Day pass/i, 'Giornaliero')
      .replace(/Overnight/i, 'Pernottamento')
      .replace(/multi-day/i, 'più giorni')
      .replace(/hours?/i, 'h')
      .replace(/ days?/i, ' g');
  }
  if (lang === 'nl') {
    return raw
      .replace(/Day pass/i, 'Dagkaart')
      .replace(/Overnight/i, 'Overnachting')
      .replace(/multi-day/i, 'meerdaags')
      .replace(/hours?/i, 'uur')
      .replace(/ days?/i, ' d');
  }
  return raw;
}

// ---------- PUBLIC HELPERS (same API/behavior as before) ----------

export function localizeCategory(cat: Category, lang: Lang): Category {
  const t = REGISTRY[lang]?.categories?.[cat.slug];
  if (!t) return cat;
  return { ...cat, name: t.name, description: t.description };
}

export function localizeDestination(dest: Destination, lang: Lang): Destination {
  const t = REGISTRY[lang]?.destinations?.[dest.slug];
  if (!t) return dest;
  return {
    ...dest,
    name: t.name,
    tagline: t.tagline,
    description: t.description,
    access: t.access,
    bestFor: t.bestFor,
  };
}

export function localizeActivity(act: Activity, lang: Lang): Activity {
  const t = REGISTRY[lang]?.activities?.[act.id];
  if (!t) {
    return {
      ...act,
      duration: translateDuration(act.duration, lang),
      difficulty: act.difficulty,
    };
  }
  return {
    ...act,
    title: t.title,
    description: t.description,
    highlights: t.highlights,
    duration: t.duration,
    category: t.category,
  };
}

export function difficultyLabel(d: Activity['difficulty'], lang: Lang): string {
  return REGISTRY[lang]?.difficulty?.[d] ?? d;
}
