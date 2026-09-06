/**
 * Localized <title> builders for destination and category pages.
 *
 * [LV-DUP 2026-09-06] "Levi · LaplandActivities" was the title of /destinations/levi
 * in 11 locales — the destination name is a proper noun, so nothing in the title
 * changed with the language. OpenSEO flagged 94 duplicate titles on this site.
 * Categories collided only where two languages share a word (es/pt "Aventura").
 * Shared by scripts/generate-prerender-meta.mjs (served HTML, loaded through
 * Vite SSR) and the React pages (hydrated), so the two never drift.
 */
const SUFFIX = 'LaplandActivities';

const DEST_TAIL: Record<string, string> = {
  en: 'activities and tours',
  fi: 'aktiviteetit ja retket',
  sv: 'aktiviteter och turer',
  de: 'Aktivitäten und Touren',
  fr: 'activités et excursions',
  es: 'actividades y excursiones',
  it: 'attività ed escursioni',
  nl: 'activiteiten en tours',
  'pt-BR': 'atividades e passeios',
  ja: 'アクティビティとツアー',
  ko: '액티비티와 투어',
  'zh-CN': '活动与旅行团',
};

const IN_LAPLAND: Record<string, string> = {
  en: 'in Lapland',
  fi: 'Lapissa',
  sv: 'i Lappland',
  de: 'in Lappland',
  fr: 'en Laponie',
  es: 'en Laponia',
  it: 'in Lapponia',
  nl: 'in Lapland',
  'pt-BR': 'na Lapônia',
};

/** "Levi: aktiviteetit ja retket · LaplandActivities" */
export function destinationTitle(name: string, lang: string): string {
  const tail = DEST_TAIL[lang] ?? DEST_TAIL.en;
  if (lang === 'ja') return `${name}の${tail} · ${SUFFIX}`;
  if (lang === 'zh-CN') return `${name}${tail} · ${SUFFIX}`;
  if (lang === 'ko') return `${name} ${tail} · ${SUFFIX}`;
  return `${name}: ${tail} · ${SUFFIX}`;
}

/** "Seikkailu Lapissa · LaplandActivities" */
export function categoryTitle(name: string, lang: string): string {
  if (lang === 'ja') return `ラップランドの${name} · ${SUFFIX}`;
  if (lang === 'zh-CN') return `拉普兰${name} · ${SUFFIX}`;
  if (lang === 'ko') return `라플란드 ${name} · ${SUFFIX}`;
  return `${name} ${IN_LAPLAND[lang] ?? IN_LAPLAND.en} · ${SUFFIX}`;
}
