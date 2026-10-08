// === LV Affiliate slug maps ===
// lodging partner query strings + GYG location slugs per LV destination/category.
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

/**
 * GYG-selaussivu per kategoriasivu: kategoriasivun hero-nappi ("Selaa retkiä") ja
 * mainosesto-varakortti vievät tänne.
 *
 * 🔴 8.10.2026 asti tämä oli sijaintisivu + hakusana (`GYG_Q_BY_CATEGORY`, ?q=). GYG:n
 * `/s?q=` kuoli 23.8.2026, joten hakusana ei suodattanut mitään: Worker taittoi sen ensin
 * Lapin yleislistaan ja 4.10. alkaen aihekategoriaan (turvaverkko, ei linkkimalli). Polku
 * kirjoitetaan nyt suoraan. Jokainen kategoriapolku on mitattu Lapin tasolla:
 * northern-lights 307, snowmobile 186, husky 134, hiking 147, fishing 103 (hubin
 * gygCategories.ts, 10.8. ja 23.8.), snow-winter-sports 648 (picks.ts CATEGORY_LINKS),
 * wellness-spas 51, food-drinks 318 (Workerin GYG_TOPICS, 4.10.).
 *
 * animals = husky eikä wildlife: Lapin eläinsafarilistassa voi näkyä Kuusamon karhutuote,
 * jonka sopimuskumppanimme (Bear Kuusamo) sopimus sulkee pois. Kulttuurille GYG:ssä ei ole
 * kategoriaa ⇒ Rovaniemen sijaintisivu (Joulupukki, saamelaiskulttuuri, Arktikum).
 */
export const GYG_CATEGORY_PATH: Record<string, string> = {
  adventure:         'lapland-finland-l2652/snowmobile-tours-tc119',
  animals:           'lapland-finland-l2652/dog-sledding-husky-tours-tc118',
  'northern-lights': 'lapland-finland-l2652/northern-lights-tc310',
  'winter-sports':   'lapland-finland-l2652/snow-winter-sports-tc113',
  wellness:          'lapland-finland-l2652/wellness-spas-tc92',
  culture:           'rovaniemi-l2653',
  summer:            'lapland-finland-l2652/hiking-tc71',
  food:              'lapland-finland-l2652/food-drinks-tc103',
  fishing:           'lapland-finland-l2652/fishing-tours-tc62',
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
export function gygPathForCategory(slug: string): string {
  return GYG_CATEGORY_PATH[slug] ?? GYG_SLUG.lapland;
}
