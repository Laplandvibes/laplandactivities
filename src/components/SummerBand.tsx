import { Link } from 'react-router-dom';
import { Sun, ArrowRight, Compass, Waves, Mountain, Fish } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import GetYourGuideWidget from './GetYourGuideWidget';
import SmartImage from './SmartImage';
import { HERO } from '../data/images';

const summerHighlights = [
  { icon: Mountain, title: 'Fjell hiking', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas — long days, no crowds.', sid: 'summer_hiking' },
  { icon: Waves,    title: 'Kayak & SUP',  body: 'Lake Inari islands, midnight-sun lakes — glassy water until 1 a.m.', sid: 'summer_kayak' },
  { icon: Fish,     title: 'Salmon fly-fishing', body: 'Tornionjoki and Teno river runs peak June–July.', sid: 'summer_fishing' },
  { icon: Compass,  title: 'Midnight sun tours', body: 'Photography, foraging, fjell mountain biking — daylight 24/7.', sid: 'summer_midnight' },
];

export default function SummerBand() {
  return (
    <section className="bg-deep-night border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* eyebrow + headline left, single feature image right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vibe-pink/15 border border-vibe-pink/35 mb-4">
              <Sun className="w-3.5 h-3.5 text-vibe-pink" />
              <span className="text-vibe-pink text-[11px] font-semibold tracking-[0.2em] uppercase">Summer 2026 — booking now</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-snow tracking-wide leading-[0.95] mb-4">
              Lapland in summer is the best-kept secret.
            </h2>
            <p className="text-snow/75 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
              Midnight sun never sets. Forests open up. Salmon are running and the
              fells are red with ruska from August. Most operators have wide
              availability through June — by July the best slots are gone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <AffiliateCTA
                partner="activities"
                sid="summer_band_book"
                destination="lappi-suomi-l2652"
                query={{ q: 'summer hiking kayak fishing midnight sun' }}
                className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all shadow-xl shadow-vibe-pink/30"
              >
                <Sun className="w-5 h-5" />
                Book summer activities
              </AffiliateCTA>
              <Link
                to="/categories/summer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/25 px-7 py-3.5 rounded-full text-base font-semibold transition-all"
              >
                Browse summer guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Single feature image — not a background */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] border border-white/10">
              <SmartImage
                src="/images/categories/summer.webp"
                fallback={HERO.snowyForest}
                alt="Lapland summer at midnight sun"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-night/80 via-deep-night/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-vibe-pink text-[10px] font-semibold tracking-[0.25em] uppercase mb-1">Summer category</p>
                <p className="font-heading text-snow text-2xl tracking-wide leading-tight">8 ways to feel the midnight sun</p>
              </div>
            </div>
          </div>
        </div>

        {/* highlight tiles — full width row under the header block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {summerHighlights.map((h) => (
            <AffiliateCTA
              key={h.sid}
              partner="activities"
              sid={`summer_band_${h.sid}`}
              destination="lappi-suomi-l2652"
              query={{ q: h.title.toLowerCase() }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-vibe-pink/40 rounded-2xl p-4 sm:p-5 transition-all"
            >
              <h.icon className="w-5 h-5 text-vibe-pink mb-3" />
              <p className="font-heading text-snow tracking-wide text-lg leading-tight mb-1">{h.title}</p>
              <p className="text-snow/60 text-xs sm:text-sm leading-relaxed">{h.body}</p>
            </AffiliateCTA>
          ))}
        </div>
      </div>

      <GetYourGuideWidget
        cmpTag="laplandactivities-summer-band"
        title="Summer tours selling fast"
        eyebrow="Bookable now · Free cancellation"
        numberOfItems={3}
      />
    </section>
  );
}
