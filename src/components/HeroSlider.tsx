import { useEffect, useState } from 'react';
import SmartImage from './SmartImage';
import { HERO, focalFor } from '../data/images';
import { currentSeasonBucket } from '../i18n/seasonWords';

/**
 * Auto-rotating hero slider — brand-clean cinematic images cycling every 6 s.
 * Pure CSS cross-fade, no animation libraries (LV brand rule). The ordering is
 * season-aware (owner finding #3): in summer the midnight-sun frames lead; in
 * winter the aurora/snow frames lead — so the first frame a visitor sees matches
 * the season. Each frame carries a focal point so heads/helmets are never cropped.
 */

interface Slide {
  src: string;
  alt: string;
  fallback: string;
  season: 'summer' | 'winter' | 'any';
}

const SUMMER_LED: Slide[] = [
  { src: '/images/heroes/slider-03-summer-hike.webp', alt: 'Hikers on a Lapland fjell ridge under the midnight sun', fallback: HERO.snowyForest, season: 'summer' },
  { src: '/images/categories/summer.webp', alt: 'Kayaker on a glassy Lapland lake at midnight sun', fallback: HERO.snowyForest, season: 'summer' },
  { src: '/images/heroes/slider-05-reindeer-lavvu.webp', alt: 'Reindeer in front of a Sámi lavvu at dusk', fallback: HERO.campfire, season: 'any' },
  { src: '/images/heroes/slider-02-snowmobile-fells.webp', alt: 'Snowmobile rider crossing a snowy fjell ridge at golden hour', fallback: HERO.huskySnowmobile, season: 'winter' },
  { src: '/images/heroes/slider-01-husky-aurora.webp', alt: 'Husky team running across a frozen lake under aurora', fallback: HERO.huskyAurora, season: 'winter' },
  { src: '/images/heroes/slider-04-glass-igloo.webp', alt: 'Glass igloos and a smoke sauna by a frozen lake at twilight', fallback: HERO.glassIgloo, season: 'winter' },
];

const WINTER_LED: Slide[] = [
  { src: '/images/heroes/slider-01-husky-aurora.webp', alt: 'Husky team running across a frozen lake under aurora', fallback: HERO.huskyAurora, season: 'winter' },
  { src: '/images/heroes/slider-02-snowmobile-fells.webp', alt: 'Snowmobile rider crossing a snowy fjell ridge at golden hour', fallback: HERO.huskySnowmobile, season: 'winter' },
  { src: '/images/heroes/slider-06-snowmobile-aurora-couple.webp', alt: 'Two snowmobile riders watching the aurora together', fallback: HERO.huskyAurora, season: 'winter' },
  { src: '/images/heroes/slider-05-reindeer-lavvu.webp', alt: 'Reindeer in front of a Sámi lavvu at dusk', fallback: HERO.campfire, season: 'any' },
  { src: '/images/heroes/slider-04-glass-igloo.webp', alt: 'Glass igloos and a smoke sauna by a frozen lake at twilight', fallback: HERO.glassIgloo, season: 'winter' },
  { src: '/images/heroes/slider-03-summer-hike.webp', alt: 'Hikers on a Lapland fjell ridge under the midnight sun', fallback: HERO.snowyForest, season: 'summer' },
];

const slides: Slide[] = currentSeasonBucket() === 'summer' ? SUMMER_LED : WINTER_LED;

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
