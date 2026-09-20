import { RESPONSIVE_WIDTHS } from '../data/responsiveImages';

/**
 * Kertoo selaimelle, mitkä kokovaihtoehdot kuvasta on olemassa ja kuinka leveänä
 * se piirretään — jotta puhelin lataa puhelimen kokoisen kuvan.
 *
 * Mitattu 20.9.2026 livenä: etusivun hero oli 1920 px ja 336 kt myös 390 px:n
 * puhelimessa, ja talvikierron raskain ruutu 750 kt. Kapeampi kopio samasta
 * kuvasta painaa 59 kt ja 109 kt. Hero on sivun suurin yksittäinen lataus.
 *
 * 🔴 `srcset` yksin ei riitä. Ilman `sizes`-määrittelyä selain olettaa kuvan
 * olevan koko ikkunan levyinen ja valitsee kortin paikalle silti suurimman
 * tiedoston — eli mitään ei säästy. Siksi jokainen kutsu kertoo myös,
 * minkä kokoisena kuva oikeasti piirretään.
 *
 * 🔴 Palauttaa tyhjän olion, jos kopioita ei ole. Silloin `<img>` jää
 * entiselleen eikä selain saa viittausta tiedostoon jota ei ole.
 * Lista tulee generaattorilta (`scripts/gen_responsive_images.mjs`), ei käsin.
 */

/** Miten leveänä kuva piirretään — tästä selain päättelee tarvittavan tiedoston. */
export type ImgKind =
  /** Koko leveyden kuva: hero, osion taustakuva. */
  | 'hero'
  /** Kortti ruudukossa: yksi kolmasosa työpöydällä, puolikas tabletilla. */
  | 'card'
  /** Iso kortti: puolikas työpöydällä, koko leveys puhelimessa. */
  | 'half';

const SIZES: Record<ImgKind, string> = {
  hero: '100vw',
  card: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  half: '(min-width: 1024px) 50vw, 100vw',
};

/**
 * 🔴🔴 Hakutaulu rakennetaan avaimet NORMALISOIDEN, eikä manifestia lueta suoraan.
 *
 * Mitattu livenä 20.9.2026: ensimmäinen versio palautti tyhjän jokaiselle kuvalle,
 * eikä yhtäkään kapeaa tiedostoa ladattu. Syy ei ollut haussa vaan siinä, mitä
 * manifestille tapahtuu buildissa: `version-images.mjs` leimaa `?v=<tiiviste>`
 * jokaiseen `/images/…`-merkkijonoon kaikissa dist-tiedostoissa — myös tämän
 * manifestin omiin AVAIMIIN. Silloin avain on `/images/x.webp?v=abc` ja haku
 * tehdään polulla `/images/x.webp`, eikä osuma ole mahdollinen.
 *
 * Täsmälleen sama vika oli kuvakuiteissa (`photoCredits.ts`) aiemmin samana
 * päivänä, ja sielläkin se näkyi vasta livenä: lähdekoodi on oikein, build
 * rikkoo sen. Ainoa kestävä korjaus on normalisoida molemmat puolet.
 */
const cleanPath = (s: string) => s.replace(/[?#].*$/, '');

const BY_PATH: Record<string, { full: number; small: number[] }> = Object.fromEntries(
  Object.entries(RESPONSIVE_WIDTHS).map(([k, v]) => [cleanPath(k), v]),
);

export function respImg(src: string | undefined, kind: ImgKind = 'card') {
  if (!src) return {};

  // 🔴🔴 Versiotagi on pakko kantaa mukana, ja tämä oli ensimmäisen version vika.
  //
  // `version-images.mjs` leimaa `?v=<sisällön tiiviste>` buildin lopuksi niihin
  // kuvapolkuihin, jotka ovat nipussa **merkkijonoina**. Tämän funktion rakentamat
  // srcset-polut syntyvät vasta ajonaikana, joten leimain ei näe niitä koskaan.
  // Jos tagi karsittaisiin pois, srcset osoittaisi leimaamattomiin osoitteisiin —
  // ja koska selain valitsee kuvan srcsetistä eikä src:stä, **koko välimuistin
  // ohitus menisi hukkaan**: paluukävijä näkisi vanhan kuvan neljän tunnin ajan.
  //
  // Kopio saa LÄHTEEN tiivisteen, ja se on oikein: kopiot generoidaan uudelleen
  // kun lähde muuttuu (generaattori vertaa muokkausaikaa), joten lähteen
  // tiivisteen vaihtuminen vaihtaa myös kopioiden osoitteet.
  const clean = cleanPath(src);
  const query = src.slice(clean.length);
  const entry = BY_PATH[clean];
  if (!entry || entry.small.length === 0) return {};

  const parts = entry.small.map(
    (w) => `${clean.replace(/\.(webp|jpe?g|png)$/i, `-${w}.webp`)}${query} ${w}w`,
  );
  // Alkuperäinen suurimpana vaihtoehtona, sen OMALLA leveydellä.
  parts.push(`${clean}${query} ${entry.full}w`);

  return { srcSet: parts.join(', '), sizes: SIZES[kind] };
}
