import { useEffect, useState } from 'react';
import SmartImage from './SmartImage';
import { HERO } from '../data/images';

/**
 * Auto-rotating hero slider — 5 brand-clean cinematic images cycling
 * every 6 s. Pure CSS cross-fade, no animation libraries (LV brand
 * rule). Each frame falls back to a safe-pool image until Vesa drops
 * the curated file in /public/images/heroes/.
 */

interface Slide {
  src: string;
  alt: string;
  fallback: string;
}

const slides: Slide[] = [
  {
    src:      '/images/heroes/slider-01-husky-aurora.webp',
    alt:      'Husky team running across a frozen lake under aurora',
    fallback: HERO.huskyAurora,
  },
  {
    src:      '/images/heroes/slider-02-snowmobile-fells.webp',
    alt:      'Snowmobile rider crossing snowy fjell ridge at golden hour',
    fallback: HERO.huskySnowmobile,
  },
  {
    src:      '/images/heroes/slider-03-summer-hike.webp',
    alt:      'Hikers on a Lapland fjell ridge under midnight sun',
    fallback: HERO.snowyForest,
  },
  {
    src:      '/images/heroes/slider-04-glass-igloo.webp',
    alt:      'Glass igloos and a smoke sauna by a frozen lake at twilight',
    fallback: HERO.glassIgloo,
  },
  {
    src:      '/images/heroes/slider-05-reindeer-lavvu.webp',
    alt:      'Reindeer in front of a Sámi lavvu at dusk',
    fallback: HERO.campfire,
  },
  {
    src:      '/images/heroes/slider-06-snowmobile-aurora-couple.webp',
    alt:      'Two snowmobile riders watching aurora together',
    fallback: HERO.huskyAurora,
  },
];

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
