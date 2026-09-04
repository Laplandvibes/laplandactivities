import ProductRail from '../shared/ads/ProductRail'
import scandinavianoutdoorRail from '../shared/ads/rails/scandinavianoutdoor'
import scandinavianoutdoorPicks from '../shared/ads/data/scandinavianoutdoorPicks'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Leaf, Sun, Trees, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import Newsletter from '../components/Newsletter';
import AffiliateCTA from '../components/AffiliateCTA';
import SummerBand from '../components/SummerBand';
import HotelsStrip from '../components/HotelsStrip';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { categories } from '../data/categories';
import { destinations } from '../data/destinations';
import { activities, getFeaturedActivities, getActivitiesByCategory, getActivitiesByDestination } from '../data/activities';
import { imageForActivity, imageForCategory, imageForDestination, assignActivityImages, focalFor } from '../data/images';
import { gygSlugForCategory, hotelsQueryForDestination } from '../data/affiliate';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeCategory, localizeDestination } from '../locales/data';
import { trackEvent } from '../lib/analytics';
import GygPicks from '../components/GygPicks';
import { AppPromoHero } from '../components/AppPromo';

// Sibling LaplandVibes ecosystem sites linked from the home page, index-aligned
// to COPY[lang].relatedSites.links. These are OUR OWN sites — plain in-content
// links with rel="noopener" (NOT affiliate rel attributes).
const RELATED_SITES: { host: string; url: string }[] = [
  { host: 'laplandhuskysafaris', url: 'https://laplandhuskysafaris.com' },
  { host: 'laplandsnowmobile', url: 'https://laplandsnowmobile.com' },
  { host: 'laplandskiresorts', url: 'https://laplandskiresorts.com' },
  { host: 'laplandnature', url: 'https://laplandnature.com' },
  { host: 'laplandstays', url: 'https://laplandstays.com' },
];

const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};
const URL_SEG: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};
// Localized one-liner descriptions for the WebSite + TouristTrip schemas.
const HOME_DESC: Record<Lang, string> = {
  en: 'Husky rides, reindeer sleighs, snowmobile safaris, aurora hunts and summer hikes across Finnish Lapland.',
  fi: 'Huskyajelut, porokyydit, moottorikelkkasafarit, revontuliretket ja kesävaellukset Suomen Lapissa.',
  de: 'Huskyfahrten, Rentierschlitten, Schneemobil-Safaris, Polarlichtjagden und Sommerwanderungen in Finnisch-Lappland.',
  ja: 'フィンランド・ラップランドのハスキー犬ぞり、トナカイそり、スノーモービル、オーロラハント、夏のハイキング。',
  es: 'Paseos en husky, trineos de renos, safaris en moto de nieve, cazas de auroras y excursiones de verano en la Laponia finlandesa.',
  'pt-BR': 'Passeios de husky, trenós de renas, safáris de moto de neve, caça à aurora e trilhas de verão na Lapônia finlandesa.',
  'zh-CN': '芬兰拉普兰的哈士奇雪橇、驯鹿雪橇、雪地摩托、极光之旅与夏季徒步。',
  ko: '핀란드 라플란드의 허스키 라이드, 순록 썰매, 스노모빌 사파리, 오로라 헌팅, 여름 하이킹.',
  fr: 'Safaris en traîneau de huskies, balades en traîneau de rennes, safaris en motoneige, chasses aux aurores et randonnées d\'été en Laponie finlandaise.',
  it: 'Giri in husky, slitte trainate da renne, safari in motoslitta, caccia all\'aurora ed escursioni estive nella Lapponia finlandese.',
  nl: 'Husky-tochten, rendiersleeën, sneeuwscootersafari\'s, noorderlichtjachten en zomerwandelingen in Fins Lapland.',
  sv: 'Huskyturer, renslädar, snöskotersafarin, norrskensjakter och sommarvandringar i finska Lappland.',
};

const SEASON_ICONS = [Snowflake, Trees, Sun, Leaf];
const SEASON_ACCENTS = ['arctic-cyan', 'aurora-green', 'vibe-pink', 'vibe-pink'];

// Per-question links to the pages that back each FAQ answer (Vesa 2026-07-07:
// FAQ answers must point to our own supporting content). Labels reuse the
// existing nav translations — no new keys, works in all 11 languages.
const FAQ_LINKS: { route: string; label: 'categories' | 'destinations' | 'about' }[][] = [
  [{ route: '/categories', label: 'categories' }],                                              // 1 what activities
  [{ route: '/categories', label: 'categories' }],                                              // 2 winter vs summer
  [{ route: '/categories', label: 'categories' }, { route: '/about', label: 'about' }],         // 3 costs → browse + how we list
  [{ route: '/categories', label: 'categories' }],                                              // 4 kids
  [{ route: '/destinations', label: 'destinations' }, { route: '/categories', label: 'categories' }], // 5 booking ahead
];

export default function Home() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].home;
  const rs = COPY[lang].relatedSites;
  const faq = COPY[lang].faq;
  const featured = getFeaturedActivities();
  const featuredImgs = assignActivityImages(featured);  // list-aware: alternates multi-image themes, no adjacent repeats
  const totalActivities = activities.length;
  const totalDestinations = destinations.length;

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={URL_SEG[lang] ? `https://laplandactivities.fi/${URL_SEG[lang]}/` : 'https://laplandactivities.fi/'} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={c.ogTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:url" content={URL_SEG[lang] ? `https://laplandactivities.fi/${URL_SEG[lang]}/` : 'https://laplandactivities.fi/'} />
        <meta property="og:image" content="https://laplandactivities.fi/og-default.jpg" />
        {(Object.keys(URL_SEG) as Lang[]).map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={URL_SEG[l] ? `https://laplandactivities.fi/${URL_SEG[l]}/` : 'https://laplandactivities.fi/'} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://laplandactivities.fi/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://laplandactivities.fi/#org',
              name: 'LaplandActivities',
              url: 'https://laplandactivities.fi',
              logo: 'https://laplandactivities.fi/favicon.svg',
              inLanguage: BCP47[lang],
              parentOrganization: { '@type': 'Organization', name: 'LaplandVibes', url: 'https://laplandvibes.com' },
              sameAs: [
                'https://youtube.com/@laplandvibes',
                'https://facebook.com/laplandvibes',
                'https://instagram.com/laplandvibesofficial',
                'https://tiktok.com/@laplandvibes',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://laplandactivities.fi/#site',
              url: 'https://laplandactivities.fi',
              name: 'LaplandActivities',
              description: HOME_DESC[lang],
              inLanguage: BCP47[lang],
              publisher: { '@id': 'https://laplandactivities.fi/#org' },
            },
            {
              '@type': 'TouristTrip',
              '@id': 'https://laplandactivities.fi/#trip',
              name: 'Lapland Activities & Tours',
              description: HOME_DESC[lang],
              inLanguage: BCP47[lang],
              touristType: ['Adventure tourism', 'Winter sports', 'Nature tourism'],
              provider: { '@id': 'https://laplandactivities.fi/#org' },
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://laplandactivities.fi/#faq',
              inLanguage: BCP47[lang],
              mainEntity: faq.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
          ],
        })}</script>
      </Helmet>

      <Hero />




      {/* PÄÄKUMPPANI-banneri heti heron alla — sivun paras mainospaikka,
          tyhjänä kompakti house-ad → LV Media -portaali */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} className="bg-deep-night" />

      <SummerBand />

      {/* CATEGORIES bento */}
      <section id="categories" className="py-16 sm:py-24 px-4 bg-deep-night">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.categoriesKicker}</span>
            <h2 className="font-heading text-4xl sm:text-6xl text-snow mt-2 tracking-wide">{c.categoriesH2}</h2>
            <p className="text-snow/65 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              {c.categoriesLead}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((rawCat, i) => {
              const cat = localizeCategory(rawCat, lang);
              const isBig = i === 0 || i === 5;
              const count = getActivitiesByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={to(`/categories/${cat.slug}`)}
                  className={`group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all border border-white/10 hover:border-vibe-pink/30 ${
                    isBig ? 'col-span-2 row-span-2 h-64 sm:h-96' : 'h-40 sm:h-[calc(12rem-0.5rem)]'
                  }`}
                >
                  <img
                    src={imageForCategory(cat.slug)}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: focalFor(imageForCategory(cat.slug)) }}
                    loading="lazy"
                   decoding="async" width="1920" height="1080" fetchPriority="high"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className={`font-heading text-snow tracking-wide group-hover:text-vibe-pink transition-colors ${
                      isBig ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'
                    }`}>{cat.name}</h3>
                    <p className="text-snow/80 text-xs mt-1">{count} {c.activitiesLabel}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to={to('/categories')} className="inline-flex items-center gap-2 text-vibe-pink hover:text-pink-300 font-semibold transition-colors">
              {c.viewAllCategories} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kumppaniosio ylhäällä (LV Media): kakkospääkumppani + 6 premium-
          paikkaa — pääkumppanit eivät näy vierekkäin (banneri heron alla ↑) */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} className="bg-deep-night border-t border-white/5" />

      {/* Varattavat GYG-tuotteet — korkealla sivulla mutta myytyjen mainospaikkojen ALAPUOLELLA.
          Vain YKSI varaustuoteosio etusivulla (Vesa 2026-08-03: kaksi samanlaista
          peräkkäin) — GYG-auto-widget elää alasivuilla (kohde- ja kategoriaindeksit). */}
      <GygPicks />

      <section id="experiences" className="py-16 sm:py-24 px-4 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">{c.featuredKicker}</span>
              <h2 className="font-heading text-3xl sm:text-5xl text-snow mt-1 tracking-wide">{c.featuredH2}</h2>
            </div>
            <AffiliateCTA
              partner="activities"
              sid="featured_browse_all"
              destination="lappi-suomi-l2652"
              className="inline-flex items-center gap-2 text-vibe-pink hover:text-pink-300 text-sm font-semibold"
            >
              {c.seeAllTours} <ArrowRight className="w-4 h-4" />
            </AffiliateCTA>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((act, i) => <ActivityCard key={act.id} activity={act} image={featuredImgs[i]} />)}
          </div>
        </div>
      </section>

      <section id="seasons" className="py-16 sm:py-24 px-4 aurora-bg relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 shimmer pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.seasonsKicker}</span>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-snow mt-2 tracking-wide">{c.seasonsH2}</h2>
            <p className="text-snow/65 mt-3 max-w-xl mx-auto">{c.seasonsLead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.seasons.map((s, i) => {
              const Icon = SEASON_ICONS[i] ?? Sun;
              const accent = SEASON_ACCENTS[i] ?? 'vibe-pink';
              return (
                <div key={s.name} className="bg-deep-night/55 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 text-${accent}`} />
                    <h3 className="font-heading text-2xl text-snow tracking-wide">{s.name}</h3>
                  </div>
                  <p className="text-snow/80 text-xs mb-2">{s.months} · {s.temp}</p>
                  <p className="text-snow/75 text-sm leading-relaxed">{s.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-16 sm:py-24 px-4 bg-deep-night">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.destinationsKicker}</span>
              <h2 className="font-heading text-3xl sm:text-5xl text-snow mt-1 tracking-wide">{totalDestinations} {c.destinationsH2}</h2>
            </div>
            <Link to={to('/destinations')} className="inline-flex items-center gap-2 text-vibe-pink hover:text-pink-300 text-sm font-semibold">
              {c.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {destinations.slice(0, 2).map((rawDest) => {
              const dest = localizeDestination(rawDest, lang);
              return (
              <Link
                key={dest.slug}
                to={to(`/destinations/${dest.slug}`)}
                className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
              >
                <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForDestination(dest.slug)) }} loading="lazy"  decoding="async" width="800" height="600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-heading text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h3>
                  <p className="text-arctic-cyan text-xs font-medium mt-0.5">{dest.tagline}</p>
                  <div className="flex items-center justify-between mt-3 text-snow/80 text-xs">
                    <span>{getActivitiesByDestination(dest.slug).length} {c.activitiesShort}</span>
                    <Sparkles className="w-3.5 h-3.5 text-vibe-pink" />
                  </div>
                </div>
              </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {destinations.slice(2).map((rawDest) => {
              const dest = localizeDestination(rawDest, lang);
              return (
              <Link
                key={dest.slug}
                to={to(`/destinations/${dest.slug}`)}
                className="group relative rounded-xl overflow-hidden h-44 sm:h-52 border border-white/10 hover:border-vibe-pink/30 transition-all"
              >
                <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForDestination(dest.slug)) }} loading="lazy"  decoding="async" width="800" height="600"/>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/90 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-heading text-base sm:text-lg text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h3>
                  <p className="text-snow/75 text-[10px] line-clamp-1">{dest.tagline}</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HotelsStrip />

      <BookingCTA
        sidTag="home"
        destinationSlug="lapland"
        hotelsQuery={hotelsQueryForDestination('lapland')}
        gygSlug={gygSlugForCategory('adventure')}
        pickupIata="RVN"
      />

      {/* RELATED ECOSYSTEM SITES — in-content internal links to topically-relevant
          LaplandVibes spokes. Keyword-rich anchors, rel="noopener" (NOT affiliate). */}
      <section id="related-sites" className="py-16 sm:py-24 px-4 bg-deep-night border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{rs.kicker}</span>
            <h2 className="font-heading text-3xl sm:text-5xl text-snow mt-2 tracking-wide">{rs.h2}</h2>
            <p className="text-snow/65 mt-3 max-w-2xl mx-auto text-sm sm:text-base">{rs.lead}</p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {rs.links.map((link, i) => {
              const site = RELATED_SITES[i];
              if (!site) return null;
              return (
                <li key={site.host}>
                  <p className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-vibe-pink/30 hover:bg-white/[0.05] transition-colors">
                    <Sparkles className="w-4 h-4 text-vibe-pink shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-snow/80 text-sm sm:text-base leading-relaxed">
                      {link.pre}{' '}
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener"
                        onClick={() => trackEvent('hub_click', { destination: site.host, placement: 'home_related_sites' })}
                        className="font-semibold text-vibe-pink underline decoration-vibe-pink/40 underline-offset-4 hover:decoration-vibe-pink transition-colors"
                      >
                        {link.anchor}
                      </a>{' '}
                      {link.post}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* App launch block, directly under the site's own opening. At the foot
          of the page it measured 81 % down a 33 000 px front page, and an
          announcement nobody scrolls to is not an announcement. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppPromoHero />
      </div>

      {/* FAQ — visible Q&A that mirrors the FAQPage JSON-LD above */}
      <section id="faq" className="py-16 sm:py-24 px-4 bg-deep-night border-t border-white/5" aria-labelledby="faq-h2">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{faq.kicker}</span>
            <h2 id="faq-h2" className="font-heading text-3xl sm:text-5xl text-snow mt-2 tracking-wide">{faq.h2}</h2>
            <p className="text-snow/65 mt-3 max-w-2xl mx-auto text-sm sm:text-base">{faq.lead}</p>
          </div>

          <div className="space-y-3">
            {faq.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05] transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                  <span className="font-heading text-xl sm:text-2xl text-snow tracking-wide">{item.q}</span>
                  <ArrowRight className="w-5 h-5 text-vibe-pink shrink-0 transition-transform duration-200 group-open:rotate-90" aria-hidden="true" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                  <p className="text-snow/75 text-sm sm:text-base leading-relaxed">{item.a}</p>
                  {(FAQ_LINKS[i] ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                      {FAQ_LINKS[i].map(({ route, label }) => (
                        <Link
                          key={route}
                          to={to(route)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-arctic-cyan hover:text-vibe-pink transition-colors"
                        >
                          {COPY[lang].nav[label]} <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Scandinavian Outdoor ad — gear for the activities above (shared/ads).
          Different product than the GYG activity CTAs, so no cannibalisation;
          disclosure lives in the shared Footer bottom strip. */}
      <section className="px-4 pb-16 bg-deep-night">
        <div className="max-w-5xl mx-auto">
          <ProductRail
            partner={scandinavianoutdoorRail}
            snapshot={scandinavianoutdoorPicks}
            lang={lang}
            sid="home_activities_gear"
            variant="dark"
            onCtaClick={(specKey, sid, url) => trackEvent('affiliate_click', { event_category: 'monetisation', event_label: specKey, affiliate_type: `ad_unit:${sid}`, outbound_url: url })}
          />
        </div>
      </section>


      <Newsletter />

      {/* keep imageForActivity used */}
      <div hidden aria-hidden="true">{imageForActivity('decor')}{totalActivities}</div>
    </>
  );
}
