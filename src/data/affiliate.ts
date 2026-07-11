// === LV Affiliate slug maps ===
// Hotels.com query strings + GYG location slugs per LV destination/category.
// These power every <AffiliateCTA partner=…> on the site. The Cloudflare
// Worker at go.laplandvibes.com handles CJ Website-ID + GYG partner_id
// injection, so we only need to feed it a clean (partner, sid, destination)
// triple.

export const HOTELS_QUERY: Record<string, string> = {
  rovaniemi:  'Rovaniemi, Finland',
  levi:       'Levi, Finland',
  yllas:      'Ylläs, Finland',
  saariselka: 'Saariselkä, Finland',
  inari:      'Inari, Finland',
  ruka:       'Ruka, Finland',
  posio:      'Posio, Finland',
  tornio:     'Tornio, Finland',
  lapland:    'Lapland, Finland',
};

// Verified GYG location slugs. When a per-destination slug isn't confirmed
// we fall back to the Lapland-wide slug; the Worker still attributes correctly.
export const GYG_SLUG: Record<string, string> = {
  rovaniemi:  'rovaniemi-l2653',
  levi:       'lappi-suomi-l2652',
  yllas:      'lappi-suomi-l2652',
  saariselka: 'lappi-suomi-l2652',
  inari:      'lappi-suomi-l2652',
  ruka:       'lappi-suomi-l2652',
  posio:      'lappi-suomi-l2652',
  tornio:     'lappi-suomi-l2652',
  lapland:    'lappi-suomi-l2652',
};

// Per-category fallback slug (the SDK shows tagged tours of that type when
// rendered alongside `data-gyg-q="..."`, but we use the slug primarily).
export const GYG_BY_CATEGORY: Record<string, string> = {
  adventure:        'lappi-suomi-l2652',
  animals:          'lappi-suomi-l2652',
  'northern-lights': 'lappi-suomi-l2652',
  'winter-sports':  'lappi-suomi-l2652',
  wellness:         'lappi-suomi-l2652',
  culture:          'rovaniemi-l2653', // Santa, Sámi, Arktikum — Rovaniemi-anchored
  summer:           'lappi-suomi-l2652',
  food:             'lappi-suomi-l2652',
  fishing:          'lappi-suomi-l2652',
};

export function gygSlugForDestination(slug: string): string {
  return GYG_SLUG[slug] ?? GYG_SLUG.lapland;
}
export function hotelsQueryForDestination(slug: string): string {
  return HOTELS_QUERY[slug] ?? HOTELS_QUERY.lapland;
}
export function gygSlugForCategory(slug: string): string {
  return GYG_BY_CATEGORY[slug] ?? GYG_SLUG.lapland;
}

// Per-category GYG search filter (?q=). Lands a category page on tours of THAT type
// instead of ALL activities at the location — the biggest GYG conversion fix
// (lv memory: 2026-06-15_gyg_targeting_monetization.md). Empty string => no filter
// (e.g. homepage/destination pages stay broad on purpose).
export const GYG_Q_BY_CATEGORY: Record<string, string> = {
  adventure:         'snowmobile',
  animals:           'husky',
  'northern-lights': 'northern lights',
  'winter-sports':   'snowmobile',
  wellness:          'sauna',
  culture:           'sami',
  summer:            'hiking',
  food:              'food',
  fishing:           'fishing',
};
export function gygQForCategory(slug: string): string {
  return GYG_Q_BY_CATEGORY[slug] ?? '';
}
