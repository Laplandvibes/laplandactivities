import { Hotel, ArrowRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import SmartImage from './SmartImage';
import { HERO, MKT } from '../data/images';

/**
 * Lodging cross-sell — five hotel-type cards each routed to a
 * Hotels.com search via go.laplandvibes.com. The hero image inside
 * each card prefers the curated /images/hotels/* file when available,
 * else falls back to the safe-pool. As Vesa drops files into
 * /public/images/hotels/, the cards swap automatically.
 */

const lodging = [
  {
    name: 'Glass Igloos',
    blurb: 'Sleep under aurora through a curved glass roof. Most-booked Lapland nights.',
    src:  '/images/hotels/glass-igloo-interior.webp',
    fallback: MKT.igluCouple,
    sid:  'hotels_strip_glass_igloo',
    query:'Lapland glass igloo, Finland',
    accent: 'vibe-pink',
  },
  {
    name: 'Lakeside log cabins',
    blurb: 'Smoke saunas, wood-fired hot tubs, your own dock. Year-round.',
    src:  '/images/hotels/log-cabin-lakeside.webp',
    fallback: HERO.snowyForest,
    sid:  'hotels_strip_log_cabin',
    query:'Lapland log cabin, Finland',
    accent: 'aurora-green',
  },
  {
    name: 'Fell resorts',
    blurb: 'Levi · Ylläs · Saariselkä · Ruka — ski-in, ski-out + summer activities.',
    src:  '/images/hotels/fell-resort-levi.webp',
    fallback: HERO.snowyForest,
    sid:  'hotels_strip_fell_resort',
    query:'Levi, Finland',
    accent: 'arctic-cyan',
  },
  {
    name: 'Boutique city',
    blurb: 'Rovaniemi · Kemi · Ivalo — design hotels with kitchen and city access.',
    src:  '/images/hotels/boutique-hotel-rovaniemi.webp',
    fallback: HERO.huskyAurora,
    sid:  'hotels_strip_boutique',
    query:'Rovaniemi, Finland',
    accent: 'vibe-pink',
  },
  {
    name: 'Smoke sauna cabins',
    blurb: 'The real savusauna experience — small, dark, ridiculously hot.',
    src:  '/images/hotels/smoke-sauna-cabin-saariselka.webp',
    fallback: MKT.igluCouple,
    sid:  'hotels_strip_smoke_sauna',
    query:'Saariselkä, Finland',
    accent: 'aurora-green',
  },
];

export default function HotelsStrip() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">Where to stay</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-snow tracking-wide mt-1 leading-tight">
              Book the bed first.
            </h2>
            <p className="text-snow/65 mt-3 max-w-xl text-sm sm:text-base">
              The activities are easy — most operators add capacity. The lodging
              you actually want sells out months ahead. Lock the room, then book
              the tours.
            </p>
          </div>
          <AffiliateCTA
            partner="hotels"
            sid="hotels_strip_browse_all"
            destination="Lapland, Finland"
            className="self-start sm:self-auto inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/25"
          >
            <Hotel className="w-4 h-4" />
            Compare all Lapland hotels
          </AffiliateCTA>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lodging.map((l, idx) => (
            <AffiliateCTA
              key={l.sid}
              partner="hotels"
              sid={l.sid}
              destination={l.query}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-vibe-pink/40 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all aspect-[4/3] ${idx === 0 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[480px]' : ''}`}
            >
              <SmartImage
                src={l.src}
                fallback={l.fallback}
                alt={l.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className={`text-${l.accent} text-[10px] font-semibold tracking-[0.25em] uppercase mb-1.5`}>Hotels.com</p>
                <h3 className={`font-heading text-snow tracking-wide leading-tight group-hover:text-vibe-pink transition-colors ${idx === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                  {l.name}
                </h3>
                <p className="text-snow/70 text-sm leading-relaxed mt-2 mb-3 max-w-md">{l.blurb}</p>
                <span className="inline-flex items-center gap-1 text-vibe-pink text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Compare prices <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </AffiliateCTA>
          ))}
        </div>
      </div>
    </section>
  );
}
