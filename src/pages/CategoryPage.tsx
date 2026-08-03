import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Sparkles, Snowflake, Sun } from 'lucide-react';
import { getCategoryBySlug, categories } from '../data/categories';
import { getActivitiesByCategory } from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import AffiliateCTA from '../components/AffiliateCTA';
import AdUnit from '../../../shared/ads/AdUnit';
import bearKuusamoAd from '../../../shared/ads/advertisers/bearkuusamo';
import onnipyoraAd from '../../../shared/ads/advertisers/onnipyora';
import { trackAffiliateClick, trackPartnerClick } from '../lib/analytics';
import { gygSlugForCategory, gygQForCategory } from '../data/affiliate';
import { imageForCategory, assignActivityImages, focalFor } from '../data/images';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeCategory } from '../locales/data';
import { SEASON_WORD, SEASON_SECTIONS, currentSeasonBucket, inBucket } from '../i18n/seasonWords';

// Categories that are inherently single-season — no split, no season chrome.
const SINGLE_SEASON = new Set(['northern-lights', 'winter-sports', 'summer']);

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].categoryPage;
  const sec = SEASON_SECTIONS[lang];
  const words = SEASON_WORD[lang];
  const rawCategory = getCategoryBySlug(slug || '');
  const category = rawCategory ? localizeCategory(rawCategory, lang) : undefined;
  const acts = getActivitiesByCategory(slug || '');

  if (!category) {
    return (
      <main className="min-h-screen pt-24 bg-deep-night flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-snow mb-4">{c.notFoundH1}</h1>
          <Link to={to('/categories')} className="text-vibe-pink hover:text-vibe-pink/80">{c.backCategories}</Link>
        </div>
      </main>
    );
  }

  const gygSlug = gygSlugForCategory(slug || 'adventure');
  const gygQ = gygQForCategory(slug || 'adventure');
  const heroImg = imageForCategory(slug || '');
  // Trailing-slash, locale-prefixed page URL (matches prerendered static HTML + sitemap).
  const pageUrl = `https://laplandactivities.fi${to(`/categories/${slug}`)}`.replace(/\/?$/, '/');

  // Season split — for year-round categories (adventure, animals, wellness, culture,
  // food) surface this-season activities first, then the other season. Single-season
  // categories (aurora, winter sports, summer) render as one plain grid.
  const splittable = !SINGLE_SEASON.has(slug || '');
  const bucket = currentSeasonBucket();
  const otherBucket = bucket === 'summer' ? 'winter' : 'summer';
  const inSeason = splittable ? acts.filter((a) => inBucket(a, bucket)) : acts;
  const offSeason = splittable ? acts.filter((a) => !inBucket(a, bucket)) : [];
  const seasonNowWord = bucket === 'summer' ? words.summer : words.winter;
  const seasonOtherWord = otherBucket === 'summer' ? words.summer : words.winter;
  const SeasonNowIcon = bucket === 'summer' ? Sun : Snowflake;
  const SeasonOtherIcon = otherBucket === 'summer' ? Sun : Snowflake;
  // Single list-aware image pass over the displayed order.
  const ordered = [...inSeason, ...offSeason];
  const orderedImgs = assignActivityImages(ordered);
  const imgFor = (id: string) => {
    const i = ordered.findIndex((a) => a.id === id);
    return i >= 0 ? orderedImgs[i] : undefined;
  };

  return (
    <>
      <Helmet>
        <title>{category.name} · LaplandActivities</title>
        <meta name="description" content={`${category.description}`} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${category.name} · LaplandActivities`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:image" content={`https://laplandactivities.fi${heroImg}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${category.name}, Finnish Lapland`,
          description: category.description,
          mainEntityOfPage: pageUrl,
          image: `https://laplandactivities.fi${heroImg}`,
          datePublished: '2025-01-01T00:00:00+02:00',
          dateModified: '2026-05-16T00:00:00+02:00',
          inLanguage: lang,
          author: { '@type': 'Organization', name: 'LaplandActivities', url: 'https://laplandactivities.fi' },
          publisher: { '@type': 'Organization', name: 'LaplandVibes', logo: { '@type': 'ImageObject', url: 'https://laplandactivities.fi/favicon.svg' } },
        })}</script>
      </Helmet>

      {/* HERO — same family as DestinationPage: icon badge above a full-size H1,
          not a small heading beside a floating icon box (Vesa 2026-07-07). */}
      <section className="relative min-h-[56vh] md:min-h-[60vh] flex items-center overflow-hidden pt-16 bg-deep-night">
        <img src={heroImg} alt={category.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(heroImg) }} loading="eager" decoding="async" width="1920" height="1080" fetchPriority="high"/>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.55) 38%, rgba(15,23,42,0.20) 72%, rgba(15,23,42,0.08) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-deep-night/55 backdrop-blur-sm border border-vibe-pink/40 items-center justify-center mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <category.icon className="w-7 h-7 text-vibe-pink" />
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lv-head tracking-wide leading-[0.95] drop-shadow-[0_3px_20px_rgba(0,0,0,0.95)]">{category.name}</h1>
          <p className="text-snow max-w-2xl text-base sm:text-lg leading-relaxed mt-3 mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.98)]">{category.description}</p>

          <AffiliateCTA
            partner="activities"
            sid={`hero_cat_${slug}_book`}
            destination={gygSlug}
            query={gygQ ? { q: gygQ } : undefined}
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
          >
            <Sparkles className="w-4 h-4" />
            {c.bookToursPrefix} {category.name}
          </AffiliateCTA>
        </div>
      </section>

      {/* Breadcrumb — below the hero, not on the photo (Vesa 2026-07-07) */}
      <div className="border-b border-white/5 bg-deep-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <Link to={to('/categories')} className="inline-flex items-center gap-1 text-snow/70 text-sm hover:text-snow transition-colors">
            <ArrowLeft className="w-4 h-4 text-vibe-pink" /> {c.allCategoriesNav}
          </Link>
        </div>
      </div>

      {/* PAID PARTNER (Bear Kuusamo) — flat-fee placement, NOT a commission link.
          Wildlife/bear watching, so it runs on the animals category only; the same
          slug gate keeps it off every other category page. Shows on EVERY locale
          (Vesa 2026-07-30: a paid partner ad is visible on all 12 languages; the
          spec carries full translations), and partner clicks fire the distinct
          `partner_click` GA4 event, never affiliate_click.
          🔴 CONTRAST RULE (Vesa 2026-07-25): a paid ad must STAND OUT, not blend in.
          This page is deep-night, so the unit uses the `light` variant = a solid
          white card, which reads as a distinct paid object against the dark page
          (the `dark` variant is a 3% translucent glass card and disappears here).
          Do NOT "match" the ad to the page surface. */}
      {/* Maksettu kumppanimainos näkyy KAIKILLA 12 kielellä (Vesa 2026-07-30):
          speksi kantaa täydet käännökset, kieliportti poistettu. */}
      {slug === 'animals' && (
        <section className="pt-10 sm:pt-14 px-4 sm:px-6 bg-deep-night">
          <div className="max-w-7xl mx-auto">
            <AdUnit
              spec={bearKuusamoAd}
              sid="animals_category_top"
              lang={lang}
              variant="light"
              imageSrc="/images/activities/bear-kuusamo/bear-hero.webp"
              articleHref={to('/bear-kuusamo')}
              onArticleClick={(_k, adSid) => trackPartnerClick(`article:${adSid}`)}
              onCtaClick={(_specKey, adSid) => trackPartnerClick(adSid)}
            />
          </div>
        </section>
      )}

      {/* AFFILIATE (Onnipyörä) — Adtraction-komissiolinkki Workerin kautta,
          ei maksettu paikka. Näkyy kategorioissa joissa on pyöräilysisältöä:
          summer (Levi Bike Park) ja winter-sports (Fat Bike Tour). Speksissä
          on VAIN fi-copy tarkoituksella — kauppa toimittaa ainoastaan Suomeen,
          joten AdUnit renderöi tyhjää muilla 11 kielellä (dokumentoitu
          käyttäytyminen, älä lisää en-fallbackia). */}
      {(slug === 'summer' || slug === 'winter-sports') && (
        <section className="pt-10 sm:pt-14 px-4 sm:px-6 bg-deep-night">
          <div className="max-w-7xl mx-auto">
            <AdUnit
              spec={onnipyoraAd}
              sid={`${slug === 'summer' ? 'summer' : 'winter_sports'}_category_bike_gear`}
              lang={lang}
              variant="dark"
              onCtaClick={(specKey, adSid, url) => trackAffiliateClick(specKey, `ad_unit:${adSid}`, url)}
            />
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {acts.length === 0 ? (
            <p className="text-snow/80">{c.comingSoon}</p>
          ) : !splittable ? (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-8">{c.activitiesCount(acts.length, category.name)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {ordered.map((act) => <ActivityCard key={act.id} activity={act} image={imgFor(act.id)} />)}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-10">{c.activitiesCount(acts.length, category.name)}</h2>
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
            </>
          )}
        </div>
      </section>

      <GetYourGuideWidget
        locationId="2652"
        cmpTag={`laplandactivities-cat-${slug}`}
        title={`${c.gygTitlePrefix} ${category.name}`}
        eyebrow={c.gygEyebrow}
      />

      {/* Featured partner — surfaced on the wildlife (animals) listing only.
          Direct partner deal, normal-follow internal link to the /bear-kuusamo guide. */}
      {slug === 'animals' && (() => {
        const bk = COPY[lang].bearKuusamo;
        return (
          <section className="py-6 sm:py-10 px-4 sm:px-6 bg-deep-night">
            <div className="max-w-7xl mx-auto">
              <Link
                to={to('/bear-kuusamo')}
                className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1.1fr] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] hover:border-vibe-pink/40 transition-colors"
              >
                <div className="relative min-h-[200px] md:min-h-[240px]">
                  <img
                    src="/images/activities/bear-kuusamo/bear-hero.webp"
                    alt={bk.imageAlts.hero}
                    loading="lazy"
                    decoding="async"
                    width="1600"
                    height="1068"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center 50%' }}
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="inline-flex self-start items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-snow/70 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#007E2E' }} aria-hidden="true" />
                    {bk.card.eyebrow}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide mb-2">{bk.card.title}</h3>
                  <p className="text-snow/70 text-sm leading-relaxed">{bk.card.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                    {bk.card.cta}
                    <ArrowLeft className="w-4 h-4 rotate-180" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        );
      })()}

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">{c.browseOthers}</h2>
            <Link to={to('/categories')} className="text-vibe-pink text-sm font-semibold">{c.allCategoriesLink}</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.filter((cat) => cat.slug !== slug).map((rawCat) => {
              const cat = localizeCategory(rawCat, lang);
              return (
                <Link
                  key={cat.slug}
                  to={to(`/categories/${cat.slug}`)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm text-snow/75 font-medium hover:border-vibe-pink/50 hover:text-snow transition-colors"
                >
                  <cat.icon className="w-4 h-4 text-vibe-pink" />
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA gygSlug={gygSlug} gygQ={gygQ} />
    </>
  );
}
