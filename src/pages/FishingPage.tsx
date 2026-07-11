import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Fish, Waves, Snowflake, ShieldCheck, AlertTriangle, MapPin, Car,
  Backpack, CalendarDays, HelpCircle, ExternalLink, ScrollText, Anchor,
} from 'lucide-react';
import PageBreadcrumb from '../components/PageBreadcrumb';
import AffiliateCTA from '../components/AffiliateCTA';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { imageForCategory, focalFor } from '../data/images';

// Direct official licence/regulation links — plain <a>, never affiliate.
const OFFICIAL = {
  fee: 'https://www.eraluvat.fi/en/fisheries-management-fee',
  fishing: 'https://www.eraluvat.fi/en/fishing',
  permits: 'https://www.eraluvat.fi/en/fishing/fishing-permits',
  sizes: 'https://www.eraluvat.fi/en/minimum-catch-sizes-and-protection-periods',
  tornioArea: 'https://www.eraluvat.fi/en/areas/2502-tornionjoki-muonionjoki-konkamaeno-896',
  ivaloArea: 'https://www.eraluvat.fi/kohteet/1581-ivalojoki-toloskoski-appisjokisuu-1203',
  inariLake: 'https://www.eraluvat.fi/kalastus/kalastusmaksut-ja-luvat/vapalupa/alueet/inarijarvi.html',
  ounasArea: 'https://ounasjoenkalatalousalue.fi/ounasjoen-kalastusluvat/',
  restrictionMap: 'https://kalastusrajoitus.fi/',
  mmm: 'https://mmm.fi/en/fisheries/recreational-fishing/state-fishing-fees',
  tornioVN: 'https://valtioneuvosto.fi/-/1410837/tulevana-kesana-tornionjoella-sallitaan-edelleen-enintaan-kahden-lohen-saalis-kalastajaa-kohden',
  tenoVN: 'https://valtioneuvosto.fi/-/1410837/tenolla-ei-kalasteta-lohta-tanakaan-kesana-mutta-muun-kalan-pyyntiin-paasee',
  tenoSaadokset: 'https://www.tenonkalatalousalue.fi/saadokset/',
  tenoLuvat: 'https://tenonkalaluvat.fi/en/',
  simojoki: 'https://simojoki.com/information/rules-and-fishing-culture/?lang=en',
  fiskeridirReg: 'https://www.fiskeridir.no/english/sea-angling-in-norway/regulations',
  fiskeridirExport: 'https://www.fiskeridir.no/english/sea-angling-in-norway/export-quota',
  lovdata: 'https://lovdata.no/dokument/SF/forskrift/2021-12-23-3910/KAPITTEL_10',
  fiskeridirCrab: 'https://www.fiskeridir.no/Turistfiske/Turistfiske-etter-kongekrabbe',
  toll: 'https://www.toll.no/en/goods/fish/quota',
  vieraslajit: 'https://vieraslajit.fi/lajit/MX.52999',
  tornioNatura: 'https://www.ymparisto.fi/fi/luonto-vesistot-ja-meri/luonnon-monimuotoisuus/suojelu-ennallistaminen-ja-luonnonhoito/natura-2000-alueet/tornionjoen-muonionjoen-vesistoalue',
};

// Per-river-card: matching direct official permit link + a hotels.com stay CTA.
// Order mirrors copy.fishing.rivers.cards (Tornio, Teno, Ounasjoki, Ivalojoki,
// Simojoki, wilderness). ss = the nearest sensible town (anchorHotelsSs forces
// ", Finland" so Hotels.com never geocodes to the wrong country).
const RIVER_META = [
  { href: OFFICIAL.tornioArea, ss: 'Pello', sid: 'fishing_river_tornionjoki' },
  { href: OFFICIAL.tenoLuvat, ss: 'Nuorgam', sid: 'fishing_river_teno' },
  { href: OFFICIAL.ounasArea, ss: 'Rovaniemi', sid: 'fishing_river_ounasjoki' },
  { href: OFFICIAL.ivaloArea, ss: 'Inari', sid: 'fishing_river_ivalojoki' },
  { href: OFFICIAL.simojoki, ss: 'Kemi', sid: 'fishing_river_simojoki' },
  { href: OFFICIAL.permits, ss: 'Saariselkä', sid: 'fishing_river_wilderness' },
];

function OfficialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-arctic-cyan hover:underline text-sm font-medium"
    >
      {children}
      <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
    </a>
  );
}

const EYEBROW = 'text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase';
const CARD = 'rounded-2xl border border-white/10 bg-white/[0.04]';
const H2 = 'font-heading text-3xl sm:text-4xl text-snow tracking-wide';

export default function FishingPage() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].fishing;
  const compareHotels = COPY[lang].bookingCta.compareHotels;
  const pageUrl = `https://laplandactivities.fi${to('/fishing')}`.replace(/\/?$/, '/');
  const heroImg = imageForCategory('fishing');
  const heroImgAbs = `https://laplandactivities.fi${heroImg}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.hero.title,
    description: c.metaDescription,
    mainEntityOfPage: pageUrl,
    image: heroImgAbs,
    datePublished: '2026-07-11T00:00:00+03:00',
    dateModified: '2026-07-11T00:00:00+03:00',
    inLanguage: lang,
    author: { '@type': 'Organization', name: 'LaplandActivities', url: 'https://laplandactivities.fi' },
    publisher: {
      '@type': 'Organization',
      name: 'LaplandVibes',
      logo: { '@type': 'ImageObject', url: 'https://laplandactivities.fi/favicon.svg' },
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  const ECO_ICONS = [AlertTriangle, Fish, Anchor, Waves];

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:image" content={heroImgAbs} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[54vh] md:min-h-[60vh] flex items-center overflow-hidden pt-16 bg-deep-night">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: focalFor(heroImg) }}
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.66) 45%, rgba(15,23,42,0.34) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
          <p className={`${EYEBROW} mb-3`}>{c.hero.eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-snow tracking-wide leading-[0.98] drop-shadow-[0_3px_20px_rgba(0,0,0,0.95)]">
            {c.hero.title}
          </h1>
          <p className="text-snow/90 max-w-2xl text-sm sm:text-base leading-relaxed mt-4 mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            {c.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <AffiliateCTA
              partner="activities"
              sid="fishing_hero_cta"
              destination="rovaniemi-l2653/great-ice-fishing-experience-in-lapland-t539112"
              className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
            >
              <Fish className="w-4 h-4" />
              {c.hero.ctaBook}
            </AffiliateCTA>
            <a
              href="#licences"
              className="inline-flex items-center justify-center gap-2 border border-snow/40 hover:border-snow text-snow px-6 py-3 rounded-full text-sm font-semibold transition-all"
            >
              <ScrollText className="w-4 h-4" />
              {c.hero.ctaRules}
            </a>
          </div>
          <p className="text-snow/70 text-xs leading-relaxed mt-5 max-w-2xl">{c.hero.trustLine}</p>
        </div>
      </section>

      <PageBreadcrumb />

      {/* VERIFY BANNER */}
      <div className="bg-amber-500/10 border-y border-amber-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-100/90 text-sm leading-relaxed">{c.verifyBanner}</p>
        </div>
      </div>

      <main className="bg-deep-night">
        {/* ECO RED THREAD */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className={`${EYEBROW} mb-3`}>Eco-first</p>
            <h2 className={H2}>{c.eco.title}</h2>
            <p className="text-snow/75 text-base leading-relaxed mt-4 max-w-3xl">{c.eco.lead}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {c.eco.stories.map((s, i) => {
                const Icon = ECO_ICONS[i] ?? Fish;
                return (
                  <div key={s.title} className={`${CARD} p-6`}>
                    <Icon className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{s.title}</h3>
                    <p className="text-snow/70 text-sm leading-relaxed">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FIRST THINGS */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className={H2}>{c.firstThings.title}</h2>
            <div className="text-snow/75 text-base leading-relaxed mt-4 space-y-4">
              <p>{c.firstThings.body1}</p>
              <p>{c.firstThings.body2}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
              <OfficialLink href={OFFICIAL.fee}>{c.firstThings.feeLink}</OfficialLink>
              <OfficialLink href={OFFICIAL.restrictionMap}>{c.firstThings.mapLink}</OfficialLink>
            </div>
          </div>
        </section>

        {/* RIVERS */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className={`${EYEBROW} mb-3`}>Freshwater</p>
            <h2 className={H2}>{c.rivers.title}</h2>
            <p className="text-snow/75 text-base leading-relaxed mt-4 max-w-3xl">{c.rivers.lead}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 items-stretch">
              {c.rivers.cards.map((card, i) => {
                const meta = RIVER_META[i] ?? RIVER_META[0];
                const open = /open/i.test(card.badge);
                const closed = /closed/i.test(card.badge);
                const badgeColor = open
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30'
                  : closed
                  ? 'bg-red-500/15 text-red-300 border-red-400/30'
                  : 'bg-white/5 text-snow/75 border-white/15';
                return (
                  <div key={card.name} className={`${CARD} p-6 flex flex-col`}>
                    <span className={`inline-flex self-start items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase ${badgeColor}`}>
                      {card.badge}
                    </span>
                    <h3 className="font-heading text-2xl text-snow tracking-wide mt-3 mb-2">{card.name}</h3>
                    <p className="text-snow/70 text-sm leading-relaxed">{card.body}</p>
                    <p className="text-snow/60 text-xs leading-relaxed mt-3 flex items-start gap-1.5">
                      <Fish className="w-3.5 h-3.5 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{card.crNote}</span>
                    </p>
                    <div className="mt-auto pt-4 flex flex-col gap-2.5">
                      <OfficialLink href={meta.href}>{card.officialLabel}</OfficialLink>
                      <AffiliateCTA
                        partner="hotels"
                        sid={meta.sid}
                        destination={meta.ss}
                        aria-label={`${compareHotels} — ${meta.ss}`}
                        className="inline-flex items-center gap-1.5 text-vibe-pink hover:text-vibe-pink/80 text-sm font-semibold"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {compareHotels} · {meta.ss}
                      </AffiliateCTA>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LAKES */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className={H2}>{c.lakes.title}</h2>
            <p className="text-snow/75 text-base leading-relaxed mt-4">{c.lakes.body}</p>
            <div className="mt-5">
              <OfficialLink href={OFFICIAL.inariLake}>eräluvat.fi — Inarijärvi</OfficialLink>
            </div>
          </div>
        </section>

        {/* TORNIO SALMON BOX */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className={`${CARD} p-6 sm:p-8 border-vibe-pink/25`}>
              <p className={`${EYEBROW} mb-3`}>High-liability · 2026</p>
              <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">{c.tornioBox.title}</h2>
              <ul className="mt-5 space-y-3">
                {c.tornioBox.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-snow/80 text-sm leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-amber-100/85 text-xs leading-relaxed mt-5 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{c.tornioBox.verifyLine}</span>
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
                <OfficialLink href={OFFICIAL.tornioArea}>eräluvat.fi — area 2502</OfficialLink>
                <OfficialLink href={OFFICIAL.tornioVN}>valtioneuvosto.fi</OfficialLink>
              </div>
              <AffiliateCTA
                partner="hotels"
                sid="fishing_tornio_stay"
                destination="Pello"
                className="inline-flex items-center gap-2 mt-6 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <MapPin className="w-4 h-4" />
                {c.tornioBox.ctaStay}
              </AffiliateCTA>
            </div>
          </div>
        </section>

        {/* ICE FISHING */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Snowflake className="w-6 h-6 text-arctic-cyan" aria-hidden="true" />
              <h2 className={H2}>{c.iceFishing.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">{c.iceFishing.body}</p>
            <div className={`${CARD} p-5 mt-6`}>
              <h3 className="font-heading text-lg text-snow tracking-wide mb-1.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" aria-hidden="true" />
                {c.iceFishing.safetyTitle}
              </h3>
              <p className="text-snow/70 text-sm leading-relaxed">{c.iceFishing.safetyBody}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6">
              <AffiliateCTA
                partner="activities"
                sid="fishing_ice_rovaniemi"
                destination="rovaniemi-l2653/rovaniemi-ice-fishing-experience-t195392"
                className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <Fish className="w-4 h-4" />
                {c.iceFishing.cta}
              </AffiliateCTA>
              <OfficialLink href={OFFICIAL.restrictionMap}>kalastusrajoitus.fi</OfficialLink>
            </div>
          </div>
        </section>

        {/* LICENCES */}
        <section id="licences" className="py-14 sm:py-18 border-b border-white/5 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className={`${EYEBROW} mb-3`}>The legal core</p>
            <h2 className={H2}>{c.licenses.title}</h2>
            <div className="text-snow/75 text-base leading-relaxed mt-4 space-y-4">
              <p>{c.licenses.fee}</p>
              <p>{c.licenses.freeRights}</p>
              <p>{c.licenses.waterPermits}</p>
            </div>
            <h3 className="font-heading text-xl text-snow tracking-wide mt-8 mb-3">{c.licenses.sizesTitle}</h3>
            <ul className={`${CARD} divide-y divide-white/10 overflow-hidden`}>
              {c.licenses.sizes.map((s, i) => (
                <li key={i} className="px-5 py-3 text-snow/75 text-sm leading-relaxed">{s}</li>
              ))}
            </ul>
            <p className="text-snow/80 text-sm leading-relaxed mt-6 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
              <span>{c.licenses.alwaysCheck}</span>
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
              <OfficialLink href={OFFICIAL.fee}>eräluvat.fi — fee</OfficialLink>
              <OfficialLink href={OFFICIAL.permits}>eräluvat.fi — permits</OfficialLink>
              <OfficialLink href={OFFICIAL.sizes}>eräluvat.fi — sizes</OfficialLink>
              <OfficialLink href={OFFICIAL.mmm}>mmm.fi</OfficialLink>
              <OfficialLink href={OFFICIAL.restrictionMap}>kalastusrajoitus.fi</OfficialLink>
            </div>
          </div>
        </section>

        {/* TENO */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className={H2}>{c.teno.title}</h2>
            <p className="text-snow/75 text-base leading-relaxed mt-4">{c.teno.body}</p>
            <p className="text-snow/75 text-base leading-relaxed mt-4">{c.teno.whatYouCan}</p>
            <p className="text-snow/80 text-sm leading-relaxed mt-4 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{c.teno.warnThirdParty}</span>
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
              <OfficialLink href={OFFICIAL.tenoLuvat}>tenonkalaluvat.fi</OfficialLink>
              <OfficialLink href={OFFICIAL.tenoSaadokset}>tenonkalatalousalue.fi</OfficialLink>
              <OfficialLink href={OFFICIAL.tenoVN}>valtioneuvosto.fi</OfficialLink>
            </div>
          </div>
        </section>

        {/* NORWAY */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Waves className="w-6 h-6 text-arctic-cyan" aria-hidden="true" />
              <h2 className={H2}>{c.norway.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">{c.norway.seaBody}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              <OfficialLink href={OFFICIAL.fiskeridirReg}>fiskeridir.no — regulations</OfficialLink>
              <OfficialLink href={OFFICIAL.lovdata}>lovdata.no — §47</OfficialLink>
            </div>

            <h3 className="font-heading text-xl text-snow tracking-wide mt-8 mb-2">{c.norway.exportTitle}</h3>
            <p className="text-snow/75 text-base leading-relaxed">{c.norway.exportBody}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              <OfficialLink href={OFFICIAL.fiskeridirExport}>fiskeridir.no — export quota</OfficialLink>
              <OfficialLink href={OFFICIAL.toll}>toll.no</OfficialLink>
            </div>

            <h3 className="font-heading text-xl text-snow tracking-wide mt-8 mb-2">{c.norway.crabTitle}</h3>
            <p className="text-snow/75 text-base leading-relaxed">{c.norway.crabBody}</p>
            <p className="text-snow/70 text-sm leading-relaxed mt-3 flex items-start gap-2">
              <Car className="w-4 h-4 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
              <span>{c.norway.carNote}</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-5">
              <AffiliateCTA
                partner="activities"
                sid="fishing_crab_kirkenes"
                destination="kirkenes-l97740/saariselka-king-crab-safari-to-kirkenes-with-lunch-t1158887"
                className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <Anchor className="w-4 h-4" />
                {c.norway.cta}
              </AffiliateCTA>
              <AffiliateCTA
                partner="activities"
                sid="fishing_crab_rib"
                destination="kirkenes-l97740/kirkenes-summer-king-crab-safari-by-rib-with-king-crab-meal-t1200620"
                className="inline-flex items-center gap-1.5 text-vibe-pink hover:text-vibe-pink/80 text-sm font-semibold"
              >
                <Anchor className="w-3.5 h-3.5" />
                Summer RIB safari
              </AffiliateCTA>
              <OfficialLink href={OFFICIAL.fiskeridirCrab}>fiskeridir.no — king crab</OfficialLink>
            </div>
          </div>
        </section>

        {/* GETTING THERE */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Car className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
              <h2 className={H2}>{c.gettingThere.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">{c.gettingThere.body}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <AffiliateCTA
                partner="cars"
                sid="fishing_getting_there"
                destination="RVN"
                className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <Car className="w-4 h-4" />
                {c.gettingThere.cta}
              </AffiliateCTA>
              <AffiliateCTA
                partner="cars"
                sid="fishing_getting_there_ktt"
                destination="KTT"
                className="inline-flex items-center gap-2 border border-snow/40 hover:border-snow text-snow px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                Kittilä (KTT)
              </AffiliateCTA>
              <AffiliateCTA
                partner="cars"
                sid="fishing_getting_there_ivl"
                destination="IVL"
                className="inline-flex items-center gap-2 border border-snow/40 hover:border-snow text-snow px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                Ivalo (IVL)
              </AffiliateCTA>
            </div>
          </div>
        </section>

        {/* GEAR */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Backpack className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
              <h2 className={H2}>{c.gear.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">{c.gear.body}</p>
          </div>
        </section>

        {/* SEASON TABLE — mobile-safe definition list (no wide <table>) */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-6">
              <CalendarDays className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
              <h2 className={H2}>{c.season.title}</h2>
            </div>
            <dl className={`${CARD} divide-y divide-white/10 overflow-hidden`}>
              {c.season.rows.map((r, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 px-5 py-4">
                  <dt className="font-heading text-vibe-pink text-lg tracking-wide">{r.period}</dt>
                  <dd className="text-snow/75 text-sm leading-relaxed">{r.what}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
              <h2 className={H2}>{c.faq.title}</h2>
            </div>
            <div className="space-y-3">
              {c.faq.items.map((it, i) => (
                <details key={i} className={`${CARD} group`}>
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 text-snow font-semibold text-base">
                    <span>{it.q}</span>
                    <span className="text-vibe-pink text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="px-5 pb-4 text-snow/72 text-sm leading-relaxed">{it.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* KEEP EXPLORING — cross-links */}
        <section className="py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className={`${EYEBROW} mb-3`}>Keep exploring</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to={to('/categories/fishing')} className={`${CARD} p-6 hover:border-vibe-pink/40 transition-colors block`}>
                <Fish className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1">All fishing tours</h3>
                <p className="text-snow/65 text-sm">Guided ice fishing, salmon and king-crab experiences to book.</p>
              </Link>
              <a
                href="https://laplandnature.com/freshwater/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${CARD} p-6 hover:border-vibe-pink/40 transition-colors block`}
              >
                <Waves className="w-6 h-6 text-arctic-cyan mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1 inline-flex items-center gap-1.5">
                  Lapland’s freshwater nature <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </h3>
                <p className="text-snow/65 text-sm">The rivers and lakes behind the fishery, on LaplandNature.</p>
              </a>
              <a
                href="https://laplandvisit.com/arctic-norway/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${CARD} p-6 hover:border-vibe-pink/40 transition-colors block`}
              >
                <MapPin className="w-6 h-6 text-arctic-cyan mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1 inline-flex items-center gap-1.5">
                  Arctic Norway <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </h3>
                <p className="text-snow/65 text-sm">Crossing to Kirkenes and the Varanger coast, on LaplandVisit.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
