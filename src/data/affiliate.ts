// === LV Affiliate slug maps ===
// Hotels.com query strings + GYG location slugs per LV destination/category.
// These power every <AffiliateCTA partner=…> on the site. The Cloudflare
// Worker at go.laplandvibes.com handles CJ Website-ID + GYG partner_id
// injection, so we only need to feed it a clean (partner, sid, destination)
// triple.

export const HOTELS_QUERY: Record<string, string> = {
  rovaniemi:  'Rovaniemi, Finland',
  levi:       'Levi, Finland',
  // Sembo polygon "Ylläs" = 3 properties; main village Äkäslompolo = 13.
  // Trip.com maps yllas/akaslompolo to the same city id (9274).
  yllas:      'Äkäslompolo, Finland',
  saariselka: 'Saariselkä, Finland',
  inari:      'Inari, Finland',
  ruka:       'Ruka, Finland',
  posio:      'Posio, Finland',
  tornio:     'Tornio, Finland',
  // Worker TRIP_CITY now carries pyha/pyhatunturi/luosto/kemijarvi ids with
  // longest-key-first matching (2026-07-24), so these resolve on both partners.
  'pyha-luosto': 'Pyhätunturi, Finland',
  kemijarvi:  'Kemijärvi, Finland',
  lapland:    'Lapland, Finland',
};

// Verified GYG location slugs — every destination lands on ITS OWN GYG page
// (Vesa 2026-07-23: a generic Lapland slug surfaced Rovaniemi tours to a user
// standing in Kittilä; per-destination slugs verified live against GYG).
export const GYG_SLUG: Record<string, string> = {
  rovaniemi:  'rovaniemi-l2653',
  levi:       'levi-sirkka-l150197',
  yllas:      'yllas-l87669',
  saariselka: 'saariselka-l181615',
  inari:      'inari-municipality-l164594',
  ruka:       'ruka-l192178',
  posio:      'posio-region-l217155',
  tornio:     'tornio-l192017',
  // Verified live 2026-07-24: both locations exist on GYG with real inventory
  // (NP page lists 20+ tours incl. amethyst mine; Kemijärvi has own ice-fishing
  // + husky products). Never point these at a 0-result page.
  'pyha-luosto': 'pyha-luosto-national-park-l161152',
  kemijarvi:  'kemijarvi-l208937',
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

// Lähin EconomyBookingsin PALVELEMA kenttä per kohde (auditti 2026-08-03:
// jokainen kohdesivu tarjosi kovakoodattua RVN-noutoa — Levin vieraalle
// tarjottiin Rovaniemeä vaikka Kittilä on 15 min päässä). Worker EB_PLC
// kattaa RVN/KTT/IVL/KEM (+ etelän kentät); tuntematon koodi putoaa
// hiljaa RVN:ään, joten tänne EI kirjoiteta kenttiä joita EB ei palvele:
// KAO (Kuusamo) puuttuu EB:n valikoimasta → ruka/posio pysyvät RVN:ssä
// tietoisesti, ei vahingossa.
export const CARS_IATA: Record<string, string> = {
  rovaniemi:  'RVN',
  levi:       'KTT',
  yllas:      'KTT',
  saariselka: 'IVL',
  inari:      'IVL',
  ruka:       'RVN',
  posio:      'RVN',
  tornio:     'KEM',
  'pyha-luosto': 'RVN',
  kemijarvi:  'RVN',
  lapland:    'RVN',
};

export function gygSlugForDestination(slug: string): string {
  return GYG_SLUG[slug] ?? GYG_SLUG.lapland;
}
export function carsIataForDestination(slug: string): string {
  return CARS_IATA[slug] ?? CARS_IATA.lapland;
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
