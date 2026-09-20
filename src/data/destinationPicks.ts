import type { GygPick } from '../shared/gyg/picks';

/**
 * Kohdekohtaiset GetYourGuide-poiminnat — "meidän poimintamme" per paikkakunta
 * (Vesa 2026-09-20: *"miksi meillä ei ole täällä samantyylisiä karuselleja valittuna
 * valmiiksi ja deeplinkit niihin, esim 4 kohdetta joka paikkakuntasivulla mitä siellä
 * voi tehdä, meidän poiminnat niin sanotusti? saadaan eloa?"*).
 *
 * ── Mistä rivit tulevat ────────────────────────────────────────────────────
 * Valittu `_gyg-catalog/catalog.md`-luettelosta (839 tuotetta, crawl 2026-07-30) ja
 * **jokainen avattu selaimessa 2026-09-20**: HTTP 200, ei uudelleenohjausta toiseen
 * tuotteeseen, ja sivun otsikko vastaa alla olevaa nimeä.
 *
 * 🔴🔴 ÄLÄ koskaan lisää riviä arvaamalla tai käsin polkua muokkaamalla. Väärä id ei
 * anna 404:ää vaan tarjoilee jonkin aivan muun tuotteen jossain päin maailmaa
 * (picks.ts:n oma varoitus, mitattu 2026-07-29).
 *
 * 🔴 **Luettelo vanhenee nopeasti.** Kun nämä tarkistettiin 20.9.2026, heinäkuun
 * crawlin tuotteista **8 oli jo poistunut** (Rovaniemi ×2, Saariselkä, Inari ×2,
 * Ruka, Kemi, Luosto ×2). Poistunut tuote ei näytä rikkinäiseltä: GetYourGuide
 * palauttaa 200 ja oman etusivunsa tai kaupunkisivunsa. Ainoa tapa nähdä se on
 * verrata sivun otsikkoa odotettuun. Tarkista rivit uudelleen ennen jokaista
 * isompaa julkaisua.
 *
 * 🔴 Kemijärvelle ja Pyhä-Luostolle EI ole karusellia: Kemijärven kaksi tuotetta
 * ovat molemmat Rovaniemeltä lähteviä retkiä, ja Luoston kolmesta jäi tarkistuksen
 * jälkeen yksi. Tyhjää ei täytetä naapurikaupungin tuotteilla, koska kortti lupaisi
 * silloin jotain mitä paikkakunnalla ei ole.
 *
 * ── Poistuneet 20.9.2026 (älä palauta ilman uutta mittausta) ───────────────
 * rovaniemi t407463 (aurora ice floating), t301248 (aurora snowmobile safari),
 * saariselka t853272 (husky + kennel), inari t1005215 (cultural day), t1003775
 * (e-fatbike), ruka t1123076 (reindeer + husky), t1098667 (Juuma canoe),
 * kemi t1131494 (SnowExperience ticket), t1033297 (Old Kemi cruise),
 * luosto t1072856 (husky 10 km), t1247324 (berry picking).
 *
 * ── Kuvat ──────────────────────────────────────────────────────────────────
 * Näissä korteissa EI ole valokuvaa. Tuotekortti on lupaus yhdestä nimetystä
 * tuotteesta, joten sen kuvaksi ei kelpaa yleiskuva samasta lajista (§24), eikä
 * GetYourGuiden oma kuva ole meidän käytettävissämme (se kuuluu järjestäjälle).
 * Kortin ilme tehdään typografialla ja ikonilla — ei tekoälykuvalla.
 *
 * `place` kertoo lähtöpaikan sellaisena kuin se GetYourGuidella on. Se voi poiketa
 * sivun paikkakunnasta (Posion Korouoma-retket lähtevät Rovaniemeltä, Inarin
 * Siida-päivä Saariselältä) — juuri siksi se näytetään.
 */
export const DESTINATION_PICKS: Record<string, GygPick[]> = {
  rovaniemi: [
    { path: 'rovaniemi-l2653/rovaniemi-arctic-snowhotel-tour-and-snow-sauna-experience-t454802', title: 'Arctic SnowHotel and Snow Sauna Experience', place: 'Rovaniemi', duration: '5–6 h', sid: 'dest_rovaniemi_snowhotel' },
    { path: 'rovaniemi-l2653/rovaniemi-ice-karting-open-race-t311913', title: 'Arctic Ice Karting Tour', place: 'Rovaniemi', duration: '1,5 h', sid: 'dest_rovaniemi_ice_karting' },
    { path: 'rovaniemi-l2653/arctic-wilderness-hike-from-rovaniemi-day-evening-t751631', title: 'Arctic Wilderness Hike (Day & Evening)', place: 'Rovaniemi', duration: '3,5–7 h', sid: 'dest_rovaniemi_wilderness_hike' },
    { path: 'rovaniemi-l2653/rovaniemi-all-day-canoe-adventure-t388479', title: 'All-Day Canoe Adventure', place: 'Rovaniemi', duration: '6 h', sid: 'dest_rovaniemi_canoe' },
  ],
  levi: [
    { path: 'sirkka-l139331/levi-arctic-combo-husky-reindeer-ride-t503967', title: 'Arctic Combo – Husky & Reindeer Ride', place: 'Levi', duration: '2 h', sid: 'dest_levi_husky_reindeer' },
    { path: 'sirkka-l139331/levi-6-hour-authentic-snowmobile-safari-to-lappish-villages-t997691', title: 'Authentic Snowmobile Safari to Lappish Villages', place: 'Levi', duration: '6 h', sid: 'dest_levi_snowmobile_villages' },
    { path: 'kittila-l165074/levi-cross-country-skiing-tour-for-beginners-t521039', title: 'Cross-Country Skiing Tour for Beginners', place: 'Levi', duration: '2 h', sid: 'dest_levi_cross_country' },
    { path: 'sirkka-l139331/levi-northern-lights-canoe-tour-t985209', title: 'Canoeing Under the Arctic Night Sky', place: 'Levi', duration: '3 h', sid: 'dest_levi_night_canoe' },
  ],
  yllas: [
    { path: 'akaslompolo-l2931/yllas-wilderness-snowmobile-tour-t96006', title: 'Full Day Snowmobile Tour to Wilderness', place: 'Ylläs', duration: '6 h', sid: 'dest_yllas_snowmobile_day' },
    { path: 'akaslompolo-l2931/snowshoe-to-kellostapuli-smoked-fish-lunch-local-museum-t1100044', title: 'Snowshoe Hike to Kellostapuli and Gourmet Experience', place: 'Ylläs', duration: '5 h', sid: 'dest_yllas_snowshoe_kellostapuli' },
    { path: 'akaslompolo-l2931/day-in-the-wilderness-by-traditional-forest-skis-yllas-t97059', title: 'Guided Wilderness Ski Tour with Outdoor Lunch', place: 'Ylläs', duration: '6 h', sid: 'dest_yllas_forest_skis' },
    { path: 'akaslompolo-l2931/ice-fishing-by-foot-on-lake-yllasjarvi-t1009688', title: 'Ice-Fishing by Foot on Lake Ylläsjärvi', place: 'Ylläs', duration: '1,5 h', sid: 'dest_yllas_ice_fishing' },
  ],
  saariselka: [
    { path: 'saariselka-l181615/saariselka-aurora-hunting-tour-with-northern-lights-experts-t826892', title: 'Aurora Hunting Photography Tour', place: 'Saariselkä', duration: '3 h', sid: 'dest_saariselka_aurora_photo' },
    { path: 'saariselka-l181615/saariselka-evening-snowmobile-tour-with-fire-picnic-t516799', title: 'Evening Snowmobile Tour with Fire & Picnic', place: 'Saariselkä', duration: '3 h', sid: 'dest_saariselka_snowmobile_evening' },
    { path: 'saariselka-l181615/saariselka-arctic-trail-horse-riding-tour-t810536', title: 'Arctic Trail Horse Riding Tour', place: 'Saariselkä', duration: '2 h', sid: 'dest_saariselka_horse_riding' },
    { path: 'saariselka-l181615/saariselka-forest-treasures-excursion-with-outdoor-lunch-t1002928', title: 'Forest Treasures Excursion with Outdoor Lunch', place: 'Saariselkä', duration: '3 h', sid: 'dest_saariselka_forest_treasures' },
  ],
  inari: [
    { path: 'inari-l245909/saariselka-visit-to-sami-museum-siida-inari-village-t1391922', title: 'Visit to Sámi Museum Siida & Inari Village', place: 'Saariselkä', duration: '6 h', sid: 'dest_inari_siida_village' },
    { path: 'inari-l245909/lake-inari-fishing-and-boating-day-trip-t993452', title: 'Lake Inari: Fishing and Boating Day Trip', place: 'Inari', duration: '4,5 h', sid: 'dest_inari_fishing_boating' },
    { path: 'inari-l245909/inari-ice-fishing-safari-with-sleigh-ride-and-snacks-t1139451', title: 'Ice Fishing Safari on Lake Inari by Snowmobile Sleigh', place: 'Ivalo', duration: '4 h', sid: 'dest_inari_ice_fishing_sleigh' },
    { path: 'inari-l245909/muotkantunturi-park-inari-mini-snowshoe-expedition-t1167711', title: 'Muotkantunturi Park: Mini Snowshoe Expedition', place: 'Inari', duration: '3 h', sid: 'dest_inari_snowshoe' },
  ],
  posio: [
    { path: 'posio-l253041/korouoma-canyon-frozen-waterfalls-hike-bbq-experience-t830206', title: 'Korouoma Canyon: Frozen Waterfalls Hike & BBQ', place: 'Posio', duration: '6 h', sid: 'dest_posio_korouoma_bbq' },
    { path: 'posio-l253041/riisitunturi-national-park-10km-husky-ride-and-lunch-t1272707', title: 'Riisitunturi National Park: 10 km Husky Ride and Lunch', place: 'Posio', duration: '9 h', sid: 'dest_posio_riisitunturi_husky' },
    { path: 'posio-l253041/rovaniemi-korouoma-auttikongas-treasures-hiking-adventure-t1231030', title: 'Korouoma & Auttiköngäs Treasures Hiking Adventure', place: 'Rovaniemi', duration: '7 h', sid: 'dest_posio_korouoma_auttikongas' },
    { path: 'posio-l253041/rovaniemi-water-adventure-day-kayaking-waterfalls-hike-t1391700', title: 'Water Adventure: Kayaking, Auttiköngäs, Korouoma', place: 'Rovaniemi', duration: '10 h', sid: 'dest_posio_water_adventure' },
  ],
  tornio: [
    { path: 'kemi-l98127/kemi-afternoon-icebreaker-sampo-cruise-and-ice-floating-t504004', title: 'Icebreaker Sampo Cruise with Ice Floating', place: 'Kemi', duration: '6,5–7 h', sid: 'dest_tornio_sampo' },
    { path: 'kemi-l98127/kemi-tornio-husky-sled-ride-with-hot-drink-t901372', title: 'Husky Sled Ride with Hot Drink', place: 'Kemi-Tornio', duration: '2,5 h', sid: 'dest_tornio_husky' },
    { path: 'kemi-l98127/kemi-tornio-ice-fishing-safari-with-snowmobiles-t896901', title: 'Ice Fishing Safari with Snowmobiles', place: 'Kemi-Tornio', duration: '2 h', sid: 'dest_tornio_ice_fishing' },
  ],
  ruka: [
    { path: 'ruka-l192178/ruka-10km-husky-sled-ride-with-snacks-and-campfire-t1107156', title: '10 km Husky Sled Ride with Snacks and Campfire', place: 'Ruka', duration: '2 h', sid: 'dest_ruka_husky' },
    { path: 'ruka-l192178/ruka-4h-snowmobile-safari-with-snack-and-campfire-t1107299', title: '4 h Snowmobile Safari with Snack and Campfire', place: 'Ruka', duration: '4 h', sid: 'dest_ruka_snowmobile' },
    { path: 'ruka-l192178/ruka-ice-fishing-experience-t1187391', title: 'Ice Fishing Experience', place: 'Ruka', duration: '2,5 h', sid: 'dest_ruka_ice_fishing' },
    { path: 'ruka-l192178/ruka-pyhapiilo-sauna-duo-smoke-ice-sauna-experience-t1167518', title: 'Pyhäpiilo Sauna Duo: Smoke & Ice Sauna Experience', place: 'Ruka', duration: '2 h', sid: 'dest_ruka_sauna_duo' },
  ],
};

/** Kohteen poiminnat, tai null jos niitä on alle kolme (ei täytetä tyhjää). */
export function picksForDestination(slug: string): GygPick[] | null {
  const rows = DESTINATION_PICKS[slug];
  return rows && rows.length >= 3 ? rows : null;
}
