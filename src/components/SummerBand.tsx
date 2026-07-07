import { Link } from 'react-router-dom';
import { Sun, Snowflake, ArrowRight, Compass, Waves, Mountain, Fish, Dog, Sparkles, Flame } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import GetYourGuideWidget from './GetYourGuideWidget';
import SmartImage from './SmartImage';
import { HERO } from '../data/images';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { WINTER_BAND, WINTER_SEARCH_Q } from '../i18n/winterBand';
import { currentSeasonBucket } from '../i18n/seasonWords';

// Summer highlight icons/queries (slots 1:1 with copy.summerBand.highlights).
const SUMMER_ICONS = [Mountain, Waves, Fish, Compass];
const SUMMER_Q = ['hiking', 'kayak', 'salmon fishing', 'midnight sun tour'];
// Winter highlight icons (slots 1:1 with WINTER_BAND.highlights).
const WINTER_ICONS = [Dog, Sparkles, Flame, Fish];

/**
 * Seasonal hero band on Home. Owner finding #3: a summer hero must not sit above
 * winter content. This band flips its WHOLE payload (copy, image, GYG queries,
 * accent icon) to match the live season — summer May–Sep, winter Oct–Apr — so the
 * page a visitor lands on is internally consistent.
 */
export default function SummerBand() {
  const lang = useLang();
  const to = useLocalePath();
  const isSummer = currentSeasonBucket() === 'summer';

  const c = isSummer ? COPY[lang].summerBand : WINTER_BAND[lang];
  const SeasonIcon = isSummer ? Sun : Snowflake;
  const icons = isSummer ? SUMMER_ICONS : WINTER_ICONS;
  const searchQ = isSummer ? SUMMER_Q : WINTER_SEARCH_Q;
  const sids = isSummer
    ? ['summer_hiking', 'summer_kayak', 'summer_fishing', 'summer_midnight']
    : ['winter_husky', 'winter_snowmobile', 'winter_aurora', 'winter_icefishing'];
  const browseTo = isSummer ? '/categories/summer' : '/categories/northern-lights';
  // Season-correct image: summer lake vs the snowmobile-fells winter scene.
  const bandImg = isSummer ? '/images/categories/summer.webp' : '/images/heroes/slider-02-snowmobile-fells.webp';
  const bandImgFallback = isSummer ? HERO.snowyForest : HERO.huskyAurora;
  const sectionSid = isSummer ? 'summer_band_book' : 'winter_band_book';
  const gygCmp = isSummer ? 'laplandactivities-summer-band' : 'laplandactivities-winter-band';
  const heroQuery = isSummer ? 'midnight sun lapland' : 'husky snowmobile lapland';

  return (
    <section className="lv-aurora-veil bg-deep-night border-y border-white/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vibe-pink/15 border border-vibe-pink/35 mb-4">
              <SeasonIcon className="w-3.5 h-3.5 text-vibe-pink" />
              <span className="text-vibe-pink text-[11px] font-semibold tracking-[0.2em] uppercase">{c.eyebrow}</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lv-head tracking-wide leading-[0.95] mb-4">
              {c.h2}
            </h2>
            <p className="text-snow/80 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
              {c.lead}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <AffiliateCTA
                partner="activities-search"
                sid={sectionSid}
                destination={heroQuery}
                className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all shadow-xl shadow-vibe-pink/30"
              >
                <SeasonIcon className="w-5 h-5" />
                {c.bookCta}
              </AffiliateCTA>
              <Link
                to={to(browseTo)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/25 px-7 py-3.5 rounded-full text-base font-semibold transition-all"
              >
                {c.browseCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] border border-white/10">
              <SmartImage
                src={bandImg}
                fallback={bandImgFallback}
                alt={c.imageH3}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-night/80 via-deep-night/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-vibe-pink text-[10px] font-semibold tracking-[0.25em] uppercase mb-1">{c.imageKicker}</p>
                <p className="font-heading text-snow text-2xl tracking-wide leading-tight">{c.imageH3}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
          {c.highlights.map((h, i) => {
            const Icon = icons[i] ?? Compass;
            const sid = sids[i] ?? `season_${i}`;
            const q = `${searchQ[i] ?? h.title.toLowerCase()} lapland`;
            return (
              <AffiliateCTA
                key={sid}
                partner="activities-search"
                sid={sid}
                destination={q}
                className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-vibe-pink/40 rounded-2xl p-4 sm:p-5 transition-all flex flex-col"
              >
                <Icon className="w-5 h-5 text-vibe-pink mb-3" />
                <p className="font-body font-bold text-snow text-[15px] leading-snug mb-1">{h.title}</p>
                <p className="text-snow/75 text-xs sm:text-sm leading-relaxed">{h.body}</p>
              </AffiliateCTA>
            );
          })}
        </div>
      </div>

      <GetYourGuideWidget
        locationId="2652"
        cmpTag={gygCmp}
        title={c.gygTitle}
        eyebrow={c.gygEyebrow}
        numberOfItems={3}
      />
    </section>
  );
}
