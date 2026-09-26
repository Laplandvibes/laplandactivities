#!/usr/bin/env node
/**
 * gen_responsive_images.mjs — puhelin ei lataa työpöydän kokoista kuvaa.
 *
 * ── MIKSI ──────────────────────────────────────────────────────────────
 *
 * Mitattu 20.9.2026 livenä: etusivun ensimmäinen hero (`slider-07-kayak-lake.webp`)
 * on 1920×1080 ja painaa **336 kt**, ja sama tiedosto menee 390 px:n puhelimeen.
 * Talvikierron raskain ruutu (`slider-05-reindeer-lavvu.webp`) painaa **750 kt**.
 * Hero on sivun suurin yksittäinen lataus — enemmän kuin kaikki JavaScript yhteensä
 * (168 kt) — ja se on se elementti, jota selain mittaa sivun latausnopeudeksi.
 *
 * 🔴 **Uudelleenpakkaus ei ollut vastaus, ja se mitattiin ennen kuin tätä kirjoitettiin.**
 * Sama kuva laadulla 82 painoi 749 kt eli täsmälleen saman verran: kuva ei ole
 * ylipakattu, se on yksityiskohtainen. Ainoa vipu on resoluutio:
 *
 * | leveys | reindeer-lavvu | kayak-lake |
 * |--------|----------------|------------|
 * | 1920   | 750 kt         | 336 kt     |
 * | 1280   | 292 kt         | 143 kt     |
 * |  768   | 109 kt         |  59 kt     |
 *
 * ── MITÄ TÄMÄ TEKEE ────────────────────────────────────────────────────
 *
 * Jokaisesta `public/images/`-kuvasta, joka on leveämpi kuin 1100 px, tehdään
 * kaksi kapeampaa kopiota (`-768.webp`, `-1280.webp`). Selain valitsee niistä
 * `srcset`-määrittelyn perusteella, alkuperäinen jää suurimmaksi vaihtoehdoksi.
 *
 * 🔴 Alkuperäistä tiedostoa EI kosketa. Se on yhä se kuva, jonka kuvakuitti
 * (`photoCredits.ts`) ja kuvainventaario tuntevat; kopiot ovat johdannaisia.
 *
 * 🔴 `.avif`-tiedostoja ei käsitellä: mitattu 20.9. ettei yksikään komponentti
 * viittaa niihin (`<picture>`-elementtejä 0 kpl), joten kopiot olisivat kuollutta
 * painoa. Jos avif otetaan joskus käyttöön, tämä skripti laajennetaan silloin.
 *
 * 🔴 Kopio tehdään uudelleen vain jos lähde on sitä uudempi, joten toistuva ajo
 * on halpa eikä muuta tiedostojen sisältöä turhaan (= `?v=`-tiiviste pysyy).
 *
 * Lopuksi kirjoitetaan `src/data/responsiveImages.ts`, josta `respImg()` tietää
 * mille poluille kopiot on oikeasti olemassa. 🔴 Lista generoidaan tiedostoista,
 * ei käsin: käsin ylläpidetty lista osoittaisi ennen pitkää tiedostoon jota ei ole,
 * ja silloin selain lataisi 404:n hero-kuvakseen.
 *
 * Käyttö: `node scripts/gen_responsive_images.mjs`
 *         `--check` = älä kirjoita, kerro vain mitä tekisi.
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, 'public', 'images');
const MANIFEST = path.join(ROOT, 'src', 'data', 'responsiveImages.ts');
const CHECK = process.argv.includes('--check');

/** Leveydet, joille kopiot tehdään. 768 = puhelin, 1280 = tabletti ja kapea kannettava. */
const WIDTHS = [768, 1280];
/** Tätä kapeampaa kuvaa ei kannata pienentää — säästö jää kohinaksi. */
const MIN_SOURCE_WIDTH = 1100;
/** Kopio tehdään vain jos lähde on selvästi leveämpi, muuten se olisi lähes sama tiedosto. */
const MIN_GAIN = 1.15;
/** Tätä leveämpi kuva (leveys/korkeus) on panoraama: ei kopioita, ks. silmukka. */
const MAX_ASPECT = 2;

/** `-768.webp` on johdannainen, ei lähde — muuten seuraava ajo tekisi kopiosta kopion. */
const DERIVATIVE_RE = new RegExp(`-(${WIDTHS.join('|')})\\.webp$`);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const sources = walk(IMG_DIR).filter(
  (f) => /\.(webp|jpe?g|png)$/i.test(f) && !DERIVATIVE_RE.test(f),
);

const made = [];
const skipped = [];
const haveDerivatives = new Map(); // web-polku -> [leveydet]

for (const file of sources) {
  let meta;
  try {
    meta = await sharp(file).metadata();
  } catch {
    skipped.push([file, 'ei luettavissa']);
    continue;
  }
  const w = meta.width || 0;
  if (w < MIN_SOURCE_WIDTH) continue;
  // 🔴 Panoraama (≥ 2:1) ei saa kapeita kopioita (26.9.2026). CC BY-SA -kuvat ovat nyt
  // rajaamattomia, ja kolme niistä on 2,1–3,2:1. object-cover skaalaa ne kehyksen
  // KORKEUDEN mukaan, joten piirretty leveys on kehyksen korkeus × kuvasuhde (puhelimen
  // herossa ~1 900 px), ei 100vw. `sizes`-rivi olettaa leveyden = ikkuna, jolloin selain
  // valitsisi 1280×404-kopion ja venyttäisi sen 4×. Ilman kopioita `respImg()` palauttaa
  // tyhjän ja kuva ladataan täysikokoisena. Sama havainto: laplandweddings 25.9.2026.
  if (meta.height && w / meta.height >= MAX_ASPECT) continue;

  const webPath = '/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
  const widths = [];

  for (const target of WIDTHS) {
    if (w < target * MIN_GAIN) continue;
    const out = file.replace(/\.(webp|jpe?g|png)$/i, `-${target}.webp`);
    const outWeb = webPath.replace(/\.(webp|jpe?g|png)$/i, `-${target}.webp`);
    widths.push([target, outWeb]);

    const fresh =
      fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(file).mtimeMs;
    if (fresh) continue;
    if (CHECK) {
      made.push([outWeb, 'tekisi']);
      continue;
    }
    const buf = await sharp(file).resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 }).toBuffer();
    fs.writeFileSync(out, buf);
    made.push([outWeb, Math.round(buf.length / 1024) + ' kt']);
  }

  if (widths.length) haveDerivatives.set(webPath, { full: w, small: widths.map(([t]) => t) });
}

const entries = [...haveDerivatives.entries()].sort((a, b) => a[0].localeCompare(b[0]));

const ts = `// GENEROITU — älä muokkaa käsin. Lähde: scripts/gen_responsive_images.mjs
//
// Mille kuville on olemassa kapeammat kopiot. Lista tulee tiedostojärjestelmästä,
// jotta \`respImg()\` ei koskaan rakenna srcset-riviä tiedostoon jota ei ole:
// se näkyisi lukijalle 404:nä hero-kuvan paikalla.
//
// 🔴 \`full\` on kuvan TODELLINEN leveys, ei oletus. Kuvat eivät ole kaikki 1920 px:
// esimerkiksi kumppanin hero on 1600 px. Väärä leveysluku srcset-rivillä saisi
// selaimen valitsemaan liian pienen tiedoston ja kuva näyttäisi sumealta.
//
// Kuvia joilla kopiot: ${entries.length}
export const RESPONSIVE_WIDTHS: Record<string, { full: number; small: number[] }> = {
${entries.map(([p, v]) => `  ${JSON.stringify(p)}: { full: ${v.full}, small: [${v.small.join(', ')}] },`).join('\n')}
};
`;

if (!CHECK) {
  const prev = fs.existsSync(MANIFEST) ? fs.readFileSync(MANIFEST, 'utf8') : '';
  if (prev !== ts) fs.writeFileSync(MANIFEST, ts);
}

const bytesNew = made.reduce((s, [, t]) => s + (parseInt(t, 10) || 0), 0);
console.log(
  `[responsive] lähdekuvia ${sources.length}, kopioitavia ${entries.length}, ` +
    `uusia kopioita ${made.length}${CHECK ? ' (--check, ei kirjoitettu)' : ` (${bytesNew} kt)`}`,
);
if (skipped.length) console.log('[responsive] ohitettu:', skipped.length);
