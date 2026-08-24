import { Hotel, ArrowRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import SmartImage from './SmartImage';
import { HERO, MKT } from '../data/images';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * [2026-08-23] Kohdevahdin löydös: "Lapland glass igloo, Finland" -ss ratkesi
 * Trip.comin maakuntalistaksi ja tarkenne "glass igloo" PUTOSI — kortti lupasi
 * iglut, kohde näytti yleisen Lappi-listan. Korjaus CLAUDE.md:n kiinteistö-
 * mekanismilla (trip_hotel+trip_city / sembo_hotel+sembo_poly):
 *   - Glass Igloos → Golden Crown Levin Iglut. Id-parit appin verifioidusta
 *     taulusta (laplandvibes-app-new/src/data/booking.ts, lev-iglut) ja koko
 *     ketju mitattu livenä 23.8.: Worker → trip.com/hotels/detail/?hotelId=
 *     9528161 (200, "Levin Iglut (Kittila) - 2026 Prices") ja fi → sembo.fi
 *     hotel-details/2512109. Sembo-parit lähetetään KAIKILLA kielillä:
 *     hotellikoodi + polygon-id ovat markkinariippumattomia — todennettu
 *     23.8. renderöimällä sama koodi sembo.se:llä ("Din resa till Levi") ja
 *     sembo.de:llä ("Ihre Reise nach Levi"), molemmat näyttävät Golden Crown
 *     Levin Iglutin. Worker sitoo isännän ja kanavan markkinaan (do.sembo.se
 *     + as=SE-kanava jne.), ja ei-Sembo-lokaalit ohittavat parit harmitta.
 *   - Log cabins → Lomarengas (verkoston mökkikumppani, CLAUDE.md "Cabins").
 *     Sama tarkenne-ongelma: "log cabin" putosi Tripin resolverissa, mutta
 *     Lomarengas MYY juuri järvimökkejä saunoineen. Ohjelmaehto: nimi näkyviin
 *     → per-kortin label. dest-URLit mitattu 23.8. (200 + canonical).
 */
const META: {
  src: string; fallback: string; sid: string; query: string; accent: string;
  trip?: [string, string]; sembo?: [string, string];
  partner?: 'lomarengas'; destFi?: string; label?: string;
}[] = [
  { src: '/images/hotels/glass-igloo-interior.webp',     fallback: MKT.igluCouple,    sid: 'hotels_strip_glass_igloo',  query: 'Golden Crown Levin Iglut, Levi, Finland', accent: 'vibe-pink',
    trip: ['38182', '9528161'], sembo: ['2512109', '360006'] },
  { src: '/images/hotels/red-lake-cabin.webp',       fallback: HERO.snowyForest,  sid: 'hotels_strip_log_cabin',    query: 'https://www.lomarengas.fi/en/cottages/lapland', accent: 'aurora-green',
    partner: 'lomarengas', destFi: 'https://www.lomarengas.fi/mokit/lappi', label: 'Lomarengas' },
  { src: '/images/hotels/fell-resort-village.webp',         fallback: HERO.snowyForest,  sid: 'hotels_strip_fell_resort',  query: 'Levi, Finland',                accent: 'arctic-cyan' },
  { src: '/images/hotels/boutique-hotel-rovaniemi.webp', fallback: HERO.huskyAurora,  sid: 'hotels_strip_boutique',     query: 'Rovaniemi, Finland',           accent: 'vibe-pink' },
  { src: '/images/hotels/smoke-sauna-ice.webp', fallback: MKT.igluCouple, sid: 'hotels_strip_smoke_sauna', query: 'Saariselkä, Finland',           accent: 'aurora-green' },
];

export default function HotelsStrip() {
  const lang = useLang();
  const c = COPY[lang].hotelsStrip;
  // fi links carry locale=fi_FI -> Worker routes to Sembo; every other locale -> Trip.com.
  const partnerLabel = lang === 'fi' ? 'Sembo' : 'Trip.com';

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-snow tracking-wide mt-1 leading-tight">
              {c.h2}
            </h2>
            <p className="text-snow/65 mt-3 max-w-xl text-sm sm:text-base">
              {c.lead}
            </p>
          </div>
          <AffiliateCTA
            partner="hotels"
            sid="hotels_strip_browse_all"
            destination="Lapland, Finland"
            className="self-start sm:self-auto inline-flex items-center gap-2 whitespace-nowrap bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/25"
          >
            <Hotel className="w-4 h-4" />
            {c.compareCta}
          </AffiliateCTA>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.lodging.map((l, idx) => {
            const m = META[idx] ?? META[0];
            const propParams = {
              ...(m.trip ? { trip_city: m.trip[0], trip_hotel: m.trip[1] } : {}),
              ...(m.sembo ? { sembo_hotel: m.sembo[0], sembo_poly: m.sembo[1] } : {}),
            };
            return (
              <AffiliateCTA
                key={m.sid}
                partner={m.partner ?? 'hotels'}
                sid={m.sid}
                destination={m.partner === 'lomarengas' && lang === 'fi' ? m.destFi : m.query}
                query={Object.keys(propParams).length ? propParams : undefined}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-vibe-pink/40 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all aspect-[4/3] ${idx === 0 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[480px]' : ''}`}
              >
                <SmartImage
                  src={m.src}
                  fallback={m.fallback}
                  alt={l.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className={`text-${m.accent} text-[10px] font-semibold tracking-[0.25em] uppercase mb-1.5`}>{m.label ?? partnerLabel}</p>
                  <h3 className={`font-heading text-snow tracking-wide leading-tight group-hover:text-vibe-pink transition-colors ${idx === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                    {l.name}
                  </h3>
                  <p className="text-snow/70 text-sm leading-relaxed mt-2 mb-3 max-w-md">{l.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-vibe-pink text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    {c.comparePrices} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </AffiliateCTA>
            );
          })}
        </div>
      </div>
    </section>
  );
}
