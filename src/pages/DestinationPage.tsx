import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Plane, Mountain, Compass, ArrowLeft, ArrowRight, Sparkles, Hotel, Car, Snowflake, Sun } from 'lucide-react';
import { getDestinationBySlug, destinations } from '../data/destinations';
import { getActivitiesByDestination } from '../data/activities';
import { categories } from '../data/categories';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import AffiliateCTA from '../components/AffiliateCTA';
import { gygSlugForDestination, hotelsQueryForDestination, carsIataForDestination } from '../data/affiliate';
import { imageForDestination, assignActivityImages, focalFor } from '../data/images';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeDestination, localizeCategory } from '../locales/data';
import { SEASON_WORD, SEASON_SECTIONS, currentSeasonBucket, inBucket } from '../i18n/seasonWords';

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].destinationPage;
  const sec = SEASON_SECTIONS[lang];
  const words = SEASON_WORD[lang];
  const rawDestination = getDestinationBySlug(slug || '');
  const destination = rawDestination ? localizeDestination(rawDestination, lang) : undefined;
  const acts = getActivitiesByDestination(slug || '');

  if (!destination) {
    return (
      <main className="min-h-screen pt-24 bg-deep-night flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-snow mb-4">{c.notFoundH1}</h1>
          <Link to={to('/destinations')} className="text-vibe-pink hover:text-pink-300">{c.backDestinations}</Link>
        </div>
      </main>
    );
  }

  const gygSlug = gygSlugForDestination(slug || 'lapland');
  const hotelsQ = hotelsQueryForDestination(slug || 'lapland');
  const carsIata = carsIataForDestination(slug || 'lapland');
  // FI taipuu: "Tekemistä Rukalla ja Kuusamossa", ei "Tekemistä kohteessa Ruka
  // ja Kuusamo" (Vesa 2026-08-03). Lokaali antaa paikallissijamuodon
  // destLocative-kartassa; muut kielet käyttävät nimeä sellaisenaan.
  const destIn = c.destLocative?.[slug || ''] ?? destination.name;
  const tips = c.tipsByDestination[slug || ''] || [];
  const heroImg = imageForDestination(slug || '');
  // Trailing-slash, locale-prefixed page URL (matches prerendered static HTML + sitemap).
  const pageUrl = `https://laplandactivities.fi${to(`/destinations/${slug}`)}`.replace(/\/?$/, '/');

  const categoryGroups = categories
    .map((cat) => ({ ...localizeCategory(cat, lang), activities: acts.filter((a) => a.categorySlug === cat.slug) }))
    .filter((g) => g.activities.length > 0);

  const featured = acts.find((a) => a.featured) || acts[0];
  const restActivities = acts.filter((a) => a.id !== featured?.id);

  // --- Season split (owner finding #3: make kesä/talvi explicit) ---
  const bucket = currentSeasonBucket();             // 'summer' in May–Sep, else 'winter'
  const otherBucket = bucket === 'summer' ? 'winter' : 'summer';
  const inSeason = restActivities.filter((a) => inBucket(a, bucket));
  const offSeason = restActivities.filter((a) => !inBucket(a, bucket));
  const seasonNowWord = bucket === 'summer' ? words.summer : words.winter;
  const seasonOtherWord = otherBucket === 'summer' ? words.summer : words.winter;
  const SeasonNowIcon = bucket === 'summer' ? Sun : Snowflake;
  const SeasonOtherIcon = otherBucket === 'summer' ? Sun : Snowflake;

  // Single list-aware image pass over [featured, in-season…, off-season…] so multi-image
  // themes (husky/reindeer) alternate and never repeat on adjacent cards across the grids.
  const ordered = featured ? [featured, ...inSeason, ...offSeason] : [...inSeason, ...offSeason];
  const orderedImgs = assignActivityImages(ordered);
  const imgFor = (id: string) => {
    const i = ordered.findIndex((a) => a.id === id);
    return i >= 0 ? orderedImgs[i] : undefined;
  };
  const otherDestinations = destinations.filter((d) => d.slug !== slug).slice(0, 4).map((d) => localizeDestination(d, lang));

  return (
    <>
      <Helmet>
        <title>{destination.name} · LaplandActivities</title>
        <meta name="description" content={`${acts.length}+ ${c.activitiesShort}, ${destination.name}, Finnish Lapland. ${destination.tagline}.`} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${destination.name} · LaplandActivities`} />
        <meta property="og:description" content={destination.description} />
        <meta property="og:image" content={`https://laplandactivities.fi${heroImg}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: destination.name,
          description: destination.description,
          url: pageUrl,
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Finnish Lapland' },
          touristType: destination.bestFor,
          inLanguage: lang,
          image: `https://laplandactivities.fi${heroImg}`,
        })}</script>
      </Helmet>

      {/* HERO — focal-fixed so heads/helmets are never cropped */}
      <section className="relative min-h-[56vh] md:min-h-[60vh] flex items-center overflow-hidden pt-16 bg-deep-night">
        <img
          src={heroImg}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: focalFor(heroImg) }}
          loading="eager" decoding="async" width="1920" height="1080" fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.62) 45%, rgba(15,23,42,0.30) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
          <span className="inline-flex items-center gap-2 rounded-full bg-deep-night/55 backdrop-blur-sm border border-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-snow/90 mb-3 shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <MapPin className="w-3.5 h-3.5 text-vibe-pink" /> {destination.access.split('(')[0].trim()}
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lv-head tracking-wide leading-[0.95] drop-shadow-[0_3px_20px_rgba(0,0,0,0.95)]">
            {destination.name}
          </h1>
          <p className="text-vibe-pink text-lg sm:text-2xl font-semibold mt-1 mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">{destination.tagline}</p>
          <p className="text-snow/90 max-w-2xl text-sm sm:text-base leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">{destination.description}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <AffiliateCTA
              partner="activities"
              sid={`hero_${slug}_book`}
              destination={gygSlug}
              className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
            >
              <Sparkles className="w-4 h-4" />
              {c.bookActivitiesIn.replace('{dest}', destination.name)}
            </AffiliateCTA>
            <AffiliateCTA
              partner="hotels"
              sid={`hero_${slug}_hotels`}
              destination={hotelsQ}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/25 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            >
              <Hotel className="w-4 h-4" />
              {c.stayIn} {destIn}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      {/* Breadcrumb — below the hero, not on the photo (Vesa 2026-07-07) */}
      <div className="border-b border-white/5 bg-deep-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <Link to={to('/destinations')} className="inline-flex items-center gap-1 text-snow/70 text-sm hover:text-snow transition-colors">
            <ArrowLeft className="w-4 h-4 text-vibe-pink" /> {c.allDestinationsNav}
          </Link>
        </div>
      </div>

      {/* WHY VISIT + GOOD TO KNOW — premium combined intro panel (no flat void) */}
      <section className="lv-aurora-veil bg-deep-night py-12 sm:py-16 px-4 sm:px-6 border-b border-white/5">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 lv-surface rounded-3xl p-6 sm:p-8">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{sec.whyKicker}</span>
            <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mt-1 mb-4">{sec.whyH2(destination.name)}</h2>
            {/* why ≠ hero lead (Vesa 2026-07-24: the two were verbatim identical on one screen) */}
            <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{destination.why}</p>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-snow/70 text-xs uppercase tracking-[0.18em] font-semibold mb-2">{sec.operatorsShort}</p>
              <div className="flex flex-wrap gap-2">
                {destination.operators.map((op) => (
                  <span key={op} className="text-xs text-snow/75 font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full">{op}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lv-surface-pink rounded-3xl p-6 sm:p-8">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{sec.goodToKnowKicker}</span>
            <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mt-1 mb-5">{sec.goodToKnowH2}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Plane className="w-5 h-5 text-vibe-pink shrink-0 mt-0.5" />
                <div>
                  <p className="text-snow/55 text-[11px] uppercase tracking-[0.15em] font-semibold">{sec.accessLabel}</p>
                  <p className="text-snow/90 text-sm leading-snug">{destination.access}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mountain className="w-5 h-5 text-arctic-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-snow/55 text-[11px] uppercase tracking-[0.15em] font-semibold">{sec.elevationLabel}</p>
                  <p className="text-snow/90 text-sm leading-snug">{destination.elevation}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-aurora-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-snow/55 text-[11px] uppercase tracking-[0.15em] font-semibold">{sec.bestForLabel}</p>
                  <p className="text-snow/90 text-sm leading-snug">{destination.bestFor}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-vibe-pink shrink-0 mt-0.5" />
                <div>
                  <p className="text-snow/55 text-[11px] uppercase tracking-[0.15em] font-semibold">{c.activitiesShort}</p>
                  <p className="text-snow/90 text-sm leading-snug">{acts.length}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MUST-DO + LOCAL TIPS — premium surfaces */}
      {featured && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.mustDoKicker}</span>
              <h2 className="font-heading text-2xl sm:text-3xl lv-head tracking-wide mt-1 mb-4">{c.mustDoH2}</h2>
              <ActivityCard activity={featured} image={imgFor(featured.id)} />
            </div>
            {tips.length > 0 && (
              <div className="lg:col-span-2">
                <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">{c.localKicker}</span>
                <h2 className="font-heading text-2xl sm:text-3xl lv-head tracking-wide mt-1 mb-4">{c.localH2}</h2>
                <div className="lv-surface rounded-2xl p-5 sm:p-6 space-y-4">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-2xl shrink-0">{tip.icon}</span>
                      <p className="text-snow/85 text-sm leading-relaxed">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* EI GYG-auto-widgetiä kohdesivuilla (Vesa 2026-08-03): (1) widget +
          aktiviteettigrid oli kaksi varausosiota peräkkäin, ja (2) widgetin
          sisältöä ei voi suodattaa — Rukalla se nosti kilpailevan karhunkatselu-
          safarin, vaikka Bear Kuusamo on maksava kumppanimme. Auto-widget elää
          indeksisivuilla (Lappi-taso l2652, jossa Kuusamo-tuotteet eivät listaudu). */}

      {/* ALL ACTIVITIES — split by season (in-season first, then the other season) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.allActivitiesKicker}</span>
            {/* Ei lukumäärää otsikkoon: featured-kortti renderöityy ylempänä
                Must-do-osiossa, joten "8 tekemistä" istui 7 kortin gridin päällä
                (Vesa 2026-08-03). Luku elää Good to know -paneelissa. */}
            <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide">{c.thingsToDoIn} {destIn}</h2>
          </div>

          {/* category jump chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categoryGroups.map((g) => (
              <Link
                key={g.slug}
                to={to(`/categories/${g.slug}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-white/15 bg-white/5 text-snow/80 hover:bg-vibe-pink/15 hover:border-vibe-pink/40 hover:text-snow transition-colors"
              >
                <g.icon className="w-3.5 h-3.5" /> {g.name} ({g.activities.length})
              </Link>
            ))}
          </div>

          {/* In-season block */}
          {inSeason.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-vibe-pink/15 border border-vibe-pink/30">
                  <SeasonNowIcon className="w-5 h-5 text-vibe-pink" />
                </span>
                <div>
                  <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.22em] uppercase">{sec.inSeasonKicker}</p>
                  <h3 className="font-body text-xl font-bold text-snow leading-tight">{sec.inSeasonNow(seasonNowWord)}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {inSeason.map((act) => <ActivityCard key={act.id} activity={act} image={imgFor(act.id)} />)}
              </div>
            </div>
          )}

          {/* Off-season block */}
          {offSeason.length > 0 && (
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 border border-white/15">
                  <SeasonOtherIcon className="w-5 h-5 text-arctic-cyan" />
                </span>
                <div>
                  <p className="text-arctic-cyan text-[11px] font-semibold tracking-[0.22em] uppercase">{sec.inSeasonKicker}</p>
                  <h3 className="font-body text-xl font-bold text-snow leading-tight">{sec.alsoGreat(seasonOtherWord)}</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {offSeason.map((act) => <ActivityCard key={act.id} activity={act} image={imgFor(act.id)} />)}
              </div>
            </div>
          )}

          {restActivities.length === 0 && (
            <p className="text-snow/80">{c.moreSoon} {destination.name}.</p>
          )}
        </div>
      </section>

      {/* Cross-sell: hotels + cars */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <AffiliateCTA
            partner="hotels"
            sid={`crossell_${slug}_hotels`}
            destination={hotelsQ}
            className="group rounded-2xl lv-surface hover:border-arctic-cyan/50 p-6 sm:p-8 transition-all"
          >
            <Hotel className="w-6 h-6 text-arctic-cyan mb-3" />
            <p className="font-heading text-2xl sm:text-3xl lv-head tracking-wide">{c.sleepInPrefix} {destIn}</p>
            <p className="text-snow/70 text-sm leading-relaxed mt-2 mb-4">{c.sleepInBlurb}</p>
            <span className="inline-flex items-center gap-1 text-arctic-cyan text-sm font-semibold group-hover:translate-x-1 transition-transform">{c.compareHotels} <ArrowRight className="w-4 h-4" /></span>
          </AffiliateCTA>
          <AffiliateCTA
            partner="cars"
            sid={`crossell_${slug}_cars`}
            destination={carsIata}
            className="group rounded-2xl lv-surface hover:border-aurora-green/50 p-6 sm:p-8 transition-all"
          >
            <Car className="w-6 h-6 text-aurora-green mb-3" />
            <p className="font-heading text-2xl sm:text-3xl lv-head tracking-wide">{c.driveYourself}</p>
            <p className="text-snow/70 text-sm leading-relaxed mt-2 mb-4">{c.driveYourselfBlurb}</p>
            <span className="inline-flex items-center gap-1 text-aurora-green text-sm font-semibold group-hover:translate-x-1 transition-transform">{c.findBestPrice} <ArrowRight className="w-4 h-4" /></span>
          </AffiliateCTA>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">{c.keepExploringKicker}</span>
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mt-1">{c.otherDestinationsH2}</h2>
            </div>
            <Link to={to('/destinations')} className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              {c.allDestinations} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                to={to(`/destinations/${d.slug}`)}
                className="group relative rounded-xl overflow-hidden h-44 sm:h-56 border border-white/10 hover:border-vibe-pink/30 transition-all"
              >
                <img src={imageForDestination(d.slug)} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForDestination(d.slug)) }} loading="lazy" decoding="async" width="800" height="600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="font-heading text-lg sm:text-xl lv-head tracking-wide group-hover:text-vibe-pink transition-colors">{d.name}</h3>
                  <p className="text-snow/80 text-xs line-clamp-1">{d.tagline}</p>
                  <div className="flex items-center gap-1 mt-1.5 text-arctic-cyan text-xs font-medium">
                    <MapPin className="w-3 h-3" /> {getActivitiesByDestination(d.slug).length} {c.activitiesShort}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA destinationSlug={slug || 'lapland'} hotelsQuery={hotelsQ} gygSlug={gygSlug} pickupIata={carsIata} />
    </>
  );
}
