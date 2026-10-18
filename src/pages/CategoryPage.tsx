import ProductRail from '../shared/ads/ProductRail'
import { respImg } from '../lib/respImg';
import { topicRailFor } from '../data/topicRails'
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Sparkles, Snowflake, Sun } from 'lucide-react';
import { getCategoryBySlug, categories } from '../data/categories';
import { getActivitiesByCategory } from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import AffiliateCTA from '../components/AffiliateCTA';
import AdUnit from '../shared/ads/AdUnit';
import bearKuusamoAd from '../shared/ads/advertisers/bearkuusamo';
import { trackAffiliateClick, trackPartnerClick } from '../lib/analytics';
import { gygPathForCategory } from '../data/affiliate';
import { imageForCategory, assignActivityImages, focalFor } from '../data/images';
import PhotoCredit from '../components/PhotoCredit';
import { useLang, useLocalePath } from '../i18n/useLang';
import { categoryTitle } from '../lib/pageTitles';
import { categoryMetaDescription } from '../lib/pageMeta';
import { COPY } from '../locales/copy';
import { localizeCategory } from '../locales/data';
import { categoryGuide } from '../data/guideI18n';
import { CATEGORY_VIDEO } from '../data/heroVideo';
import { SEASON_WORD, SEASON_SECTIONS, SEASON_ICON, currentSeason, inSeason as isInSeason, counterpartSeason } from '../i18n/seasonWords';

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
  const guide = categoryGuide(slug || '', lang);

  if (!category) {
    return (
      <main className="min-h-screen pt-24 bg-deep-night flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-snow mb-4">{c.notFoundH1}</h1>
          <Link to={to('/categories')} className="text-vibe-pink hover:text-pink-300">{c.backCategories}</Link>
        </div>
      </main>
    );
  }

  // GYG-kategoriasivu (tai kulttuurille Rovaniemen sijaintisivu), ei hakusanaa: ks. affiliate.ts.
  const gygPath = gygPathForCategory(slug || 'adventure');
  const heroImg = imageForCategory(slug || '');
  // Liikkuva hero vain niille kategorioille joille sellainen on; muut valokuva.
  const video = CATEGORY_VIDEO[slug || ''];
  const topicRail = topicRailFor(slug || '', lang);
  // Trailing-slash, locale-prefixed page URL (matches prerendered static HTML + sitemap).
  const pageUrl = `https://laplandactivities.fi${to(`/categories/${slug}`)}`.replace(/\/?$/, '/');
  // Same function as scripts/generate-prerender-meta.mjs, so the served HTML says the same.
  const metaDescription = categoryMetaDescription(category.slug, category.description, lang);

  // Season split — for year-round categories (adventure, animals, wellness, culture,
  // food) surface this-season activities first, then the other season. Single-season
  // categories (aurora, winter sports, summer) render as one plain grid.
  // Kausijako TODELLISEN vuodenajan mukaan, ei kahtiajaolla (Vesa 20.9.2026).
  const bucket = currentSeason();
  const otherBucket = counterpartSeason(bucket);
  // Vesa 19.9.2026 (seikkailu kesällä: 1 kortti "Juuri nyt parasta" + 13 talvikorttia): kausijako
  // vain kun MOLEMMISSA ryhmissä on vähintään kolme korttia, muuten yksi ruudukko kauden kortit edellä.
  const seasonNow = !SINGLE_SEASON.has(slug || '') ? acts.filter((a) => isInSeason(a, bucket)) : acts;
  const seasonOff = !SINGLE_SEASON.has(slug || '')
    ? acts.filter((a) => isInSeason(a, otherBucket) && !isInSeason(a, bucket)) : [];
  const splittable = seasonNow.length >= 3 && seasonOff.length >= 3;
  const inSeason = splittable ? seasonNow : [...seasonNow, ...seasonOff];
  const offSeason = splittable ? seasonOff : [];
  const seasonNowWord = words[bucket];
  const seasonOtherWord = words[otherBucket];
  const SeasonNowIcon = SEASON_ICON[bucket];
  const SeasonOtherIcon = otherBucket === 'summer' ? Sun : Snowflake;
  // Single list-aware image pass over the displayed order.
  const ordered = [...inSeason, ...offSeason];
  // heroImg mukaan: sama valokuva ei saa olla seka sivun hero etta kortin kuva.
  const orderedImgs = assignActivityImages(ordered, heroImg);
  const imgFor = (id: string) => {
    const i = ordered.findIndex((a) => a.id === id);
    return i >= 0 ? orderedImgs[i] : undefined;
  };

  return (
    <>
      <Helmet>
        <title>{categoryTitle(category.name, lang)}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={categoryTitle(category.name, lang)} />
        <meta property="og:description" content={metaDescription} />
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
      {/* 17.10.2026 (Vesa: "enkä pidä noiden h1 tekstien taustoista ollenkaan minkään alasivun hero
          osiossa"): sumennettu laikku tekstin takana pois, tilalle verkoston heromalli kuten
          kohdesivuilla. Alle 1024 px kuva + video ovat oma puhdas kaistansa ja teksti sen alla;
          lg+:ssa teksti kuvan päällä vasemmalla vaakaliukuman varassa. */}
      <section className="relative bg-deep-night pt-16 lg:min-h-[58vh] lg:flex lg:items-center overflow-hidden">
        <div
          className="relative h-[42svh] min-h-[240px] sm:h-[380px] md:h-[440px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0 overflow-hidden"
          data-lv-tp-tausta="hero"
        >
        <img src={heroImg} {...respImg(heroImg, 'band')} alt={category.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(heroImg) }} loading="eager" decoding="async" width="1920" height="1080" fetchPriority="high"/>
        {/* 🔴🔴 VALOKUVA JÄÄ ALLE, VIDEO TULEE PÄÄLLE. Kaksi syytä:
            1) Jos hero olisi pelkkä <video>, kontrastiportti ei enää löytäisi heroa
               lainkaan ja lakkaisi mittaamasta tämän sivun tekstiä — se näkyisi
               vihreänä vaikka mitään ei mitattaisi.
            2) `motion-reduce:hidden` piilottaa videon niiltä, jotka ovat pyytäneet
               vähemmän liikettä; silloin alla oleva valokuva on se mitä he näkevät.
            Video on mykkä ja silmukassa, eikä sillä ole ääniraitaa lähteessäkään. */}
        {video && (
          <video
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            autoPlay muted loop playsInline preload="metadata"
            poster={heroImg}
            aria-hidden="true"
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        )}
        <div aria-hidden="true" className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/70 via-55% to-transparent" />
        {/* Vesa 21.9.2026: "joku liukuma hero-osion alareunaan olisi siisti lisä,
            joku liukuva valkoinen". Ohut vaalea pyyhkäisy alareunassa erottaa heron
            sisällöstä ilman että kuva vaalenee. pointer-events-none, ettei se
            varasta klikkiä kuvakrediitiltä. */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-white/12 via-white/5 to-transparent pointer-events-none" aria-hidden="true" />
        {/* 🔴 Mixkit Free License EI vaadi nimeamista, joten videolla ei ole omaa
            merkintaa. Merkinta koskee alla olevaa valokuvaa, joka on se mita
            vahemman liiketta pyytaneet nakevat. */}
        <PhotoCredit src={heroImg} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 lg:py-16 w-full">
          {/* 17.10.2026: alle 1024 px tekstit keskelle yhdelle akselille (Vesa: tabletti ja puhelin), lg+ vasemmalle. */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* 18.10.2026 (Vesa: "tekstit ja cta painikkeet ihan levällään"): puhelimella ja tabletilla paluulinkki
                tekstipalstan alkuun, ei yksinään heron ja osion väliin; lg+:ssa se on heron alla omassa kaistassaan. */}
            <div className="lg:hidden mb-3">
              <Link to={to('/categories')} className="lv-tap inline-flex items-center gap-1 text-snow/70 text-sm hover:text-snow transition-colors">
                <ArrowLeft className="w-4 h-4 text-vibe-pink" /> {c.allCategoriesNav}
              </Link>
            </div>
            <div className="inline-flex w-14 h-14 rounded-2xl bg-deep-night/70 border border-vibe-pink/40 items-center justify-center mb-4">
              <category.icon className="w-7 h-7 text-vibe-pink" />
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lv-head tracking-wide leading-[0.95] lg:drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">{category.name}</h1>
            <p className="text-snow max-w-2xl text-base sm:text-lg leading-relaxed mt-3 mb-6 max-lg:text-balance">{category.description}</p>

            {/* Selausnappi: avaa kategorian listan GYG:ssä, ei tuotetta ⇒ "Selaa retkiä", ei "Varaa"
                (8.10.2026). Oma sid, koska nappityyppi vaihtui varauksesta selaukseen. */}
            <AffiliateCTA
              partner="activities"
              sid={`hero_cat_${slug}_browse`}
              destination={gygPath}
              className="flex w-full max-w-sm mx-auto sm:inline-flex sm:w-auto lg:mx-0 items-center justify-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
            >
              <Sparkles className="w-4 h-4" />
              {COPY[lang].bookingCta.browseTours}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      {/* Breadcrumb — below the hero, not on the photo (Vesa 2026-07-07) */}
      <div className="hidden lg:block border-b border-white/5 bg-deep-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-center lg:text-left">
          <Link to={to('/categories')} className="lv-tap inline-flex items-center gap-1 text-snow/70 text-sm hover:text-snow transition-colors">
            <ArrowLeft className="w-4 h-4 text-vibe-pink" /> {c.allCategoriesNav}
          </Link>
        </div>
      </div>

      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 px-4 sm:px-6 bg-deep-night lg:border-t lg:border-white/5">
        <div className="max-w-7xl mx-auto">
          {acts.length === 0 ? (
            <p className="text-snow/80">{c.comingSoon}</p>
          ) : !splittable ? (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-8 text-center lg:text-left text-balance">{c.activitiesCount(acts.length, category.name)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {ordered.map((act) => <ActivityCard key={act.id} activity={act} image={imgFor(act.id)} />)}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-10 text-center lg:text-left text-balance">{c.activitiesCount(acts.length, category.name)}</h2>
              {inSeason.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5">
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
                  <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5">
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

      {/* VARAA SUORAAN — heti ruudukon perään, jotta sivulla on YKSI varauskokonaisuus
          (Vesa 19.9.2026: "ei kait samalla sivulla useampaa eri kohtaa eri varauksille tarvitse
          olla tai sitten ne pitää kategorisoida"): ruudukko = kaikki aktiviteetit (haku),
          tämä = varatuimmat tuotteet hintoineen. Yleinen BookingCTA-nauha poistettu sivun lopusta. */}
      <GetYourGuideWidget
        locationId="2652"
        cmpTag={`laplandactivities-cat-${slug}`}
        title={`${c.gygTitlePrefix} ${category.name}`}
        eyebrow={c.gygEyebrow}
        /* Adblock-fallbackin CTA avaa tämän kategorian listan, ei geneeristä
           Lapin listaa (auditti 2026-08-03; polku eikä hakusana 8.10.2026). */
        fallbackPath={gygPath}
      />

      {/* WHAT THIS COVERS + HOW TO CHOOSE — the category page's own editorial.
          Written per language in src/data/guides.<lang>.ts; the prerenderer
          harvests the same record via routes.json, so crawler and reader get the
          same text in the same language. Before this the page carried only a
          20-word category description and read as thin in all 12 locales. */}
      {guide && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-b border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lv-surface rounded-3xl p-6 sm:p-8 text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-4">{guide.coversTitle}</h2>
              <div className="space-y-4">
                <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{guide.covers}</p>
                <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{guide.whenToGo}</p>
              </div>
            </div>
            <div className="lv-surface rounded-3xl p-6 sm:p-8 text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-4">{guide.chooseTitle}</h2>
              <div className="space-y-4">
                <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{guide.choosing}</p>
                <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{guide.bring}</p>
              </div>
            </div>
          </div>
        </section>
      )}

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
              articleHref={to('/bear-kuusamo/')}
              onArticleClick={(_k, adSid) => trackPartnerClick(`article:${adSid}`)}
              onCtaClick={(_specKey, adSid) => trackPartnerClick(adSid)}
            />
          </div>
        </section>
      )}

      {/* MAINOKSET SIVUN AIHEESTA KÄSIN (lv_permanent_rules §20, Vesa 14.9. + 19.9.2026).
          Otsikko on lukijan tilanne tällä sivulla, ei tuotteen kuvaus; kuvat ovat
          kumppanin omia tuotekuvia syötteestä; logo ja brändiväri tulevat mitatusta
          partnerBrand-taulusta. Onnipyörä poistettu 19.9.: syötteessä on vain lasten-
          pyöriä ja Jopoja, mutta mainos lupasi sähkömaastopyöriä ja fatbikeja, ja
          Vesa: "aivan helvetin ruma ja yrityksen logot ja mitkään ei näy". Bear Kuusamo
          (maksettu paikka) pysyy animals-sivulla, nyt ruudukon JÄLKEEN. */}
      {topicRail && (
        <section className="pt-10 sm:pt-14 px-4 sm:px-6 bg-deep-night">
          <div className="max-w-7xl mx-auto">
            <ProductRail
              partner={topicRail.partner}
              snapshot={topicRail.snapshot}
              lang={lang}
              sid={topicRail.sid}
              variant="light"
              onCtaClick={(specKey, adSid, url) => trackAffiliateClick(specKey, `ad_unit:${adSid}`, url)}
            />
          </div>
        </section>
      )}

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
                  {/* 17.10.2026: kumppanin toinen oma kuva (karhu männyssä). Yläreunan mainospaikka
                      näyttää jo emon ja pennut, eikä sama kuva toistu sivulla kahdesti. */}
                  <img
                    src="/images/activities/bear-kuusamo/bear-tree.webp"
                    {...respImg('/images/activities/bear-kuusamo/bear-tree.webp', 'half')}
                    alt={bk.imageAlts.tree}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center 50%' }}
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center max-md:text-center">
                  <span className="inline-flex self-center md:self-start items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-snow/70 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#007E2E' }} aria-hidden="true" />
                    {bk.card.eyebrow}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide mb-2">{bk.card.title}</h3>
                  <p className="text-snow/70 text-sm leading-relaxed">{bk.card.blurb}</p>
                  <span className="inline-flex self-center md:self-start items-center gap-1.5 text-vibe-pink text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
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
          <div className="flex flex-col items-center text-center gap-3 mb-8 lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">{c.browseOthers}</h2>
            <Link to={to('/categories')} className="text-vibe-pink text-sm font-semibold">{c.allCategoriesLink}</Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
            {categories.filter((cat) => cat.slug !== slug).map((rawCat) => {
              const cat = localizeCategory(rawCat, lang);
              return (
                <Link
                  key={cat.slug}
                  to={to(`/categories/${cat.slug}`)}
                  className="inline-flex items-center justify-center text-center leading-tight gap-2 px-3 sm:px-4 py-2 rounded-xl sm:rounded-full bg-white/5 border border-white/15 text-[13px] sm:text-sm text-snow/75 font-medium hover:border-vibe-pink/50 hover:text-snow transition-colors"
                >
                  <cat.icon className="w-4 h-4 text-vibe-pink shrink-0" />
                  <span className="text-balance">{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
