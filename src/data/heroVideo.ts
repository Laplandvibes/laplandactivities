/**
 * Revontulisilmukka revontulikategorian herolle.
 *
 * Vesa 21.9.2026: *"eikö tänne revontulet osioon saada myös revontulet video
 * hero kuvaksi, eri toki kuin wedding sivulla tai muualla"* ja *"revontulivideoita
 * on varmasti lisää"*.
 *
 * Kuitti (lv_permanent_rules §24, per klippi):
 *   lähde      https://commons.wikimedia.org/wiki/File:Aurora_borealis_timelapse.webm
 *   tekijä     Harriniva Hotels & Safaris (Muonio)
 *   lisenssi   CC BY 3.0 — kaupallinen käyttö ja muokkaus sallittu, nimeäminen pakollinen
 *   alkuperäinen 1920×1080, VP8, 30 fps, 128,2 s, 49 MB, EI ääniraitaa
 *   kuvattu    Ruotsin ja Suomen Lapissa, syksy 2013 (tekijän oma kuvaus)
 *   meidän     sekunnit 74–86 → 12 s, 1920×1080, ei ääntä;
 *              webm VP9 CRF 40 (1,0 MB) + mp4 H.264 CRF 30 (1,7 MB)
 *   haettu     21.9.2026
 *
 * 🔴 MIKSI JUURI TÄMÄ JAKSO: leikkauskohdat mitattiin (17,2 / 27,5 / 41,9 / 69,6 /
 * 124,2 s), ja 72–92 s on yhtenäinen otos kaislikkojärvestä ja revontulikaaresta
 * tunturihorisontin yllä. Ei ihmisiä, ei rakennuksia, ei logoja. Muut jaksot
 * sisältävät kirkkaan kuunheijastuksen tai vaihtuvat kesken.
 *
 * 🔴 ERI KUIN MUUALLA: laplandweddings käyttää Pexels-klippiä (Honkamies 28492331).
 * Tämä on eri tiedosto eri lähteestä, eikä sitä saa viedä toiselle sivustolle.
 *
 * 🔴 Tekijä on nimettävä sivulla (CC BY). Merkintä tulee `PhotoCredit`-komponentin
 * kautta samalla tavalla kuin valokuvilla.
 */
export type HeroVideo = { webm: string; mp4: string };

export const AURORA_VIDEO: HeroVideo = {
  webm: '/images/heroes/aurora-lappi.webm',
  mp4: '/images/heroes/aurora-lappi.mp4',
};

/** Kategoriat joilla on liikkuva hero. Muut näyttävät valokuvan. */
export const CATEGORY_VIDEO: Record<string, HeroVideo> = {
  'northern-lights': AURORA_VIDEO,
};
