import { useEffect, useState } from 'react';
import { respImg } from '../lib/respImg';
import SmartImage from './SmartImage';
import { HERO, focalFor } from '../data/images';
import { currentSeason } from '../i18n/seasonWords';
import PhotoCredit from './PhotoCredit';

/**
 * Auto-rotating hero slider — real photographs cycling every 6 s (19.9.2026: AI frames
 * replaced by Wikimedia Commons photos of the actual places + one own Ruka photo; credits
 * in data/photoCredits.ts, shown bottom-right via <PhotoCredit />).
 * Pure CSS cross-fade, no animation libraries (LV brand rule). The ordering is
 * season-aware (owner finding #3): in summer the midnight-sun frames lead; in
 * winter the aurora/snow frames lead — so the first frame a visitor sees matches
 * the season. Each frame carries a focal point so heads/helmets are never cropped.
 */

interface Slide {
  src: string;
  alt: string;
  fallback: string;
  season: 'summer' | 'autumn' | 'winter' | 'any';
}

const S = {
  husky:     { src: '/images/heroes/slider-01-husky-aurora.webp', alt: 'Husky team on a snowy forest trail at Saija, Salla', fallback: HERO.huskyAurora, season: 'winter' as const },
  snowmobile:{ src: '/images/heroes/slider-02-snowmobile-fells.webp', alt: 'Snowmobile on frozen Lake Inari', fallback: HERO.huskySnowmobile, season: 'winter' as const },
  // 23.9.2026: syksyn ensimmainen ruutu oli heinakuun vihrea Rukan gondoli, jonka alt-teksti
  // sanoi "summer forest" — syyskuussa. Ruska on Hetta-Pallas-reitilta (Commons, CC BY-SA 4.0).
  ruska:     { src: '/images/heroes/slider-08-ruska-hetta-pallas.webp', alt: 'Autumn ruska colours on the Hetta–Pallas hiking trail, Enontekiö', fallback: HERO.snowyForest, season: 'autumn' as const },
  ruka:      { src: '/images/heroes/slider-03-summer-hike.webp', alt: 'Ruka gondola lift above the summer forest and lakes, Kuusamo', fallback: HERO.snowyForest, season: 'summer' as const },
  igloo:     { src: '/images/heroes/slider-04-glass-igloo.webp', alt: 'Aurora cabins with glass roofs in Inari', fallback: HERO.glassIgloo, season: 'winter' as const },
  reindeer:  { src: '/images/heroes/slider-05-reindeer-lavvu.webp', alt: 'Reindeer sled in a snowy forest on Hietaliete island, Kemi', fallback: HERO.campfire, season: 'any' as const },
  kayak:     { src: '/images/heroes/slider-07-kayak-lake.webp', alt: 'Kuuva channel on Lake Inari in summer', fallback: HERO.snowyForest, season: 'summer' as const },
  aurora:    { src: '/images/activities/northern-lights/aurora-lake.webp', alt: 'Green northern lights over Levi fell, Kittilä', fallback: HERO.huskyAurora, season: 'winter' as const },
  // 26.9.2026: kesän ja talven ENSIMMÄINEN ruutu on sivuston jakokortin lähde (harvest_heroes.mjs
  // ottaa etusivun ensimmäisen kuvan heinä- ja tammikuun kellolla). Kortti on muunnelma, joten sen
  // lähde ei saa olla CC BY-SA (lv_permanent_rules §34.2): kajakki ja Saijan huskyt ovat BY-SA.
  // Vaellus = Ninara CC BY 2.0, huskyt = Pexels 60050 (paikaton, alt ei väitä paikkaa). Kesä alkaa yhä
  // aktiviteetilla (Vesa 19.9.). Pexels 2531014 hylättiin: sama kuva on laplandchristmasin herona.
  hike:      { src: '/images/heroes/slider-09-hike-saana.webp', alt: 'Hiker descending the Saana fell trail at Kilpisjärvi, Enontekiö, in June', fallback: HERO.snowyForest, season: 'summer' as const },
  huskyTeam: { src: '/images/heroes/slider-10-husky-team.webp', alt: 'Four sled huskies in harness running along a snowy forest trail', fallback: HERO.huskyAurora, season: 'winter' as const },
};

// 19.9.2026 Vesa: ensimmäinen ruutu näytti rakennustyömaalta (Ruka Park heinäkuussa: soraa, hiekkakasa,
// lumitykit). Kesä alkaa nyt aktiviteetilla (melonta Inarijärvellä) ja Rukan kuva on gondoli metsän yllä.
const SUMMER_LED: Slide[] = [S.hike, S.kayak, S.ruka, S.reindeer, S.snowmobile, S.husky, S.igloo];
const WINTER_LED: Slide[] = [S.huskyTeam, S.snowmobile, S.aurora, S.reindeer, S.igloo, S.kayak];
/**
 * Syksy (syys-lokakuu) on ruska-aika: maassa ei ole lunta, mutta revontulet ovat jo
 * alkaneet. Siksi kierto alkaa tunturimaisemasta ja revontulista, ei melonnasta eika
 * huskyvaljakosta — kumpikin niista lupaisi vaaran kauden (Vesa 20.9.2026:
 * "parasta nyt kesa, vaikka on jo syksy").
 */
const AUTUMN_LED: Slide[] = [S.ruska, S.aurora, S.ruka, S.reindeer, S.igloo, S.husky];
/** Kevat (toukokuu) on kevattalvi: lumi sulaa mutta hiihtokausi on juuri paattynyt. */
const SPRING_LED: Slide[] = [S.ruka, S.reindeer, S.kayak, S.aurora, S.husky, S.igloo];

const season = currentSeason();
const slides: Slide[] =
  season === 'summer' ? SUMMER_LED
  : season === 'autumn' ? AUTUMN_LED
  : season === 'spring' ? SPRING_LED
  : WINTER_LED;

const ROTATE_MS = 6000;

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === idx ? 'opacity-70' : 'opacity-0'}`}
          aria-hidden={i !== idx}
        >
          <SmartImage
            src={s.src}
            {...respImg(s.src, 'hero')}
            fallback={s.fallback}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'low'}
            style={{ objectPosition: focalFor(s.src) }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      <PhotoCredit src={slides[idx].src} />

      {/* indicator dots */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'bg-vibe-pink w-8' : 'bg-white/30 w-2 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
