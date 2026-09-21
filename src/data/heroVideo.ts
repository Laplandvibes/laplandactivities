/**
 * Revontulisilmukka revontulikategorian herolle.
 *
 * Vesa 21.9.2026: *"eikö tänne revontulet osioon saada myös revontulet video hero
 * kuvaksi, eri toki kuin wedding sivulla tai muualla"*.
 *
 * 🔴🔴 ENSIMMÄINEN VALINTANI OLI VÄÄRÄ, ja Vesa nimesi syyn: *"mutta halutaanko me
 * minkään hotellin kuvaamaa revontuli videota, ei"*. Otin Commonsista klipin, jonka
 * lisenssi (CC BY 3.0) oli moitteeton — mutta **CC BY pakottaa nimeämään tekijän**, ja
 * tekijä oli Harriniva Hotels & Safaris, kilpaileva Lapin operaattori. Olisimme
 * antaneet sille ilmaisen näkyvyyden juuri sillä sivulla, jolla myymme revontuliretkiä.
 * 🟢 **Sääntö tästä: vapaa lisenssi ei riitä, jos lisenssi pakottaa mainitsemaan
 * kilpailijan.** Katso kuka tekijä on, ei vain mitä lisenssi sallii.
 *
 * Kuitti (lv_permanent_rules §24, per klippi):
 *   lähde      https://mixkit.co/free-stock-video/northern-lights-of-blue-and-green-colors-in-the-night-4038/
 *   asset id   4038 · tiedosto 4038-1080.mp4
 *   lisenssi   Mixkit Stock Video **Free** License (sivun oma merkintä `license/#videoFree`,
 *              tarkistettu klipiltä erikseen 21.9.2026) — kaupallinen käyttö ja muokkaus
 *              sallittu, **nimeämistä ei vaadita**, eli sivulle ei tule kenenkään nimeä
 *   alkuperäinen 1920×1080, 30 fps, 7,1 s, 30 MB, ei ääniraitaa
 *   meidän     koko klippi, mykkä; webm VP9 CRF 48 (535 kt) + mp4 H.264 CRF 33 (1,0 MB)
 *   haettu     21.9.2026, tallennettu paikallisesti — ei koskaan hotlinkattuna
 *
 * 🔴 MIKSI JUURI TÄMÄ KLIPPI: neljästä ehdokkaasta kaksi hylättiin maaston takia
 * (4033 jyrkkä vuono, 4040 alppimaisia huippuja — kumpikaan ei ole Lappia, ja se on
 * sama ansa kuin "snowboarding Lapland" -haun alppivideo). Tässä klipissä **ei ole
 * maastoa lainkaan**, pelkkä revontulitaivas, joten se ei voi väittää mitään paikkaa.
 * Sivun oma Lappi-yhteys tulee videon ALLA olevasta valokuvasta (Commons, aurora-lake).
 *
 * 🔴 Eri tiedosto eri lähteestä kuin laplandweddingsin Pexels-klippi (Honkamies
 * 28492331). Ei saa viedä toiselle sivustolle.
 */
export type HeroVideo = { webm: string; mp4: string };

export const AURORA_VIDEO: HeroVideo = {
  webm: '/images/heroes/aurora-sky.webm',
  mp4: '/images/heroes/aurora-sky.mp4',
};

/** Kategoriat joilla on liikkuva hero. Muut näyttävät valokuvan. */
export const CATEGORY_VIDEO: Record<string, HeroVideo> = {
  'northern-lights': AURORA_VIDEO,
};
