import { useState, type ReactNode } from 'react';
import { respImg } from '../lib/respImg';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Fish, Waves, Snowflake, ShieldCheck, AlertTriangle, MapPin, Car,
  Backpack, CalendarDays, HelpCircle, ExternalLink, ScrollText, Anchor,
  Ticket, Ruler, Gift, ListChecks,
} from 'lucide-react';
import PageBreadcrumb from '../components/PageBreadcrumb';
import AffiliateCTA from '../components/AffiliateCTA';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { focalFor } from '../data/images';
import PhotoCredit from '../components/PhotoCredit';
import { withReferral } from '../lib/referral';

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

// Per-river-card: matching direct official permit link + a lodging stay CTA.
// Order mirrors copy.fishing.rivers.cards (Tornio, Teno, Ounasjoki, Ivalojoki,
// Simojoki, wilderness). ss = the nearest sensible town (anchorHotelsSs forces
// ", Finland" so the lodging partner never geocodes to the wrong country).
// (Lodging is resolved by the Worker: Sembo for fi, Trip.com elsewhere.)
// status = tilamerkin väri (auki vihreä, kiinni punainen, muu neutraali). Luetaan tästä
// eikä käännetystä merkkitekstistä, jotta väri on sama kaikilla 12 kielellä.
const RIVER_META = [
  { href: OFFICIAL.tornioArea, ss: 'Pello', sid: 'fishing_river_tornionjoki', status: 'open' },
  { href: OFFICIAL.tenoLuvat, ss: 'Nuorgam', sid: 'fishing_river_teno', status: 'closed' },
  { href: OFFICIAL.ounasArea, ss: 'Rovaniemi', sid: 'fishing_river_ounasjoki', status: 'info' },
  { href: OFFICIAL.ivaloArea, ss: 'Inari', sid: 'fishing_river_ivalojoki', status: 'info' },
  { href: OFFICIAL.simojoki, ss: 'Kemi', sid: 'fishing_river_simojoki', status: 'open' },
  { href: OFFICIAL.permits, ss: 'Saariselkä', sid: 'fishing_river_wilderness', status: 'info' },
] as const;

// 2.0 (19.9.2026): jokikortin oma valokuva — järjestys = copy.fishing.rivers.cards.
// Tornionjoki Karungista (Methem, CC BY 4.0, 1.10.2026), muut Wikimedia Commons oikeasta joesta
// (kuitit src/data/photoCredits.ts): Ounasjoki Rovaniemi, Simojoki Hanskankoski, Luttojoki UKK-puisto.
// 17.10.2026: Teno (tie 970, Utsjoki) ja Ivalojoki (Ivalo) omia kuvia lokakuun 2026 reissulta.
const RIVER_IMG = [
  '/images/activities/fishing/fishing-river.webp',
  '/images/activities/fishing/teno-valley.webp',
  '/images/activities/fishing/ounasjoki.webp',
  '/images/activities/fishing/ivalojoki.webp',
  '/images/activities/fishing/simojoki.webp',
  '/images/activities/fishing/luttojoki.webp',
];

// Järvet-kortin kuva (Inarijärvi, oma 12.10.2026).
const LAKE_IMG = '/images/activities/fishing/inarijarvi-shore.webp';

const FISHING_IMG = {
  river: '/images/activities/fishing/fishing-river.webp',
  // 17.10.2026: kuvausteksti (imageAlts.ice, 12 kieltä) kertoo kairatusta reiästä ja jäähän pystytetystä kairasta,
  // eli se on kirjoitettu tälle kuvalle. Ennen osiossa oli fishing-ice (pilkkijöitä joen jäällä) väärällä kuvauksella.
  ice: '/images/activities/fishing/ice-fishing-hole.webp',
  kingCrab: '/images/activities/fishing/fishing-kingcrab.webp',
};

// 🔴 17.10.2026 (Vesa: "käytetty jo muualla sivulla"): valitsimen laatoilla oli samat kuvat kuin
// osioilla, joihin ne vievät (pilkki, ensimmäinen jokikortti, kuningasrapu), joten sama kuva näkyi
// sivulla kahdesti. Laatoilla on nyt omat kuvat, joita ei käytetä muualla tällä sivulla.
const CHOOSER_IMG = {
  ice: '/images/activities/fishing/fishing-ice.webp',
  rivers: '/images/activities/fishing/kukkolankoski.webp',
  norway: '/images/activities/fishing/fishing-kingcrab-2.webp',
};


// Rule 4: every official/operator link leaves tagged as an editorial referral
// (utm_source=laplandvibes&utm_medium=referral), applied once here so all 21
// call sites keep passing the clean URL from OFFICIAL. `rel` is unchanged —
// these are editorial links, never sponsored.
// `onPaper`: vaalealla paperikortilla arctic-cyan on 2,3:1 (#06B6D4 / #F3F6FA), joten
// sielläkin linkki on tummempi syaani #0E7490 (5,0:1).
function OfficialLink({ href, children, onPaper = false }: { href: string; children: ReactNode; onPaper?: boolean }) {
  return (
    <a
      href={withReferral(href, 'laplandactivities_fishing')}
      target="_blank"
      rel="noopener noreferrer"
      className={`lv-tap inline-flex items-center gap-1 hover:underline text-sm font-medium ${onPaper ? 'text-[#0E7490]' : 'text-arctic-cyan'}`}
    >
      {children}
      <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
    </a>
  );
}

// 17.10.2026 (Vesa: "pelkkää tekstiä, ei kukaan kalamies jaksa näitä lukea"): pitkä kappale
// näkyy kolmena rivinä ja aukeaa napista. Koko teksti on silti DOMissa ja esirenderöidyssä
// HTML:ssä (haku ja ruudunlukija näkevät kaiken), vain näkyvä osa lyhenee. Lyhyt teksti
// näkyy kokonaan ilman nappia; raja on merkkeinä, koska kiinan/japanin/korean merkki
// vie noin kaksi latinalaista leveyttä.
const CJK = new Set(['ja', 'zh-CN', 'ko']);
function Clamp({ text, more, lang, className = '', onPaper = false }: { text: string; more: string; lang: string; className?: string; onPaper?: boolean }) {
  const [open, setOpen] = useState(false);
  const long = text.length > (CJK.has(lang) ? 90 : 210);
  return (
    <div>
      <p className={`${className} ${long && !open ? 'line-clamp-3' : ''}`}>{text}</p>
      {long && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`lv-tap mt-1.5 inline-flex items-center gap-1 text-sm font-semibold hover:underline ${onPaper ? 'text-[#BE185D]' : 'text-vibe-pink'}`}
        >
          {more} <span aria-hidden="true">↓</span>
        </button>
      )}
    </div>
  );
}

const EYEBROW = 'text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase';
const CARD = 'rounded-2xl border border-white/10 bg-white/[0.04]';
const H2 = 'font-heading text-3xl sm:text-4xl text-snow tracking-wide';
// Kerros tumman sivun päällä: vaalea paperiarkki (sama #F3F6FA kuin valitse-tapasi-laatat ja
// appin .sheet). Pinkki pieni teksti paperilla on #BE185D (6,1:1), ei #EC4899 (3,3:1).
const PAPER = 'rounded-3xl bg-[#F3F6FA] text-deep-night shadow-[0_32px_64px_-32px_rgba(0,0,0,0.75)]';
const EYEBROW_PAPER = 'text-[#BE185D] text-xs font-semibold tracking-[0.25em] uppercase';
const H2_PAPER = 'font-heading text-3xl sm:text-4xl text-deep-night tracking-wide';

/** Otsikon ja rungon välinen kaksoispiste lukijan kielellä: fr sitova väli, ja/zh täysleveä ilman väliä. */
function labelColon(lang: string): string {
  if (lang === 'fr') return ' : ';
  if (lang === 'ja' || lang === 'zh-CN') return '：';
  return ': ';
}

/** Avainluvun koko pituuden mukaan: CJK-merkki on kahden latinalaisen levyinen, ja pitkä
 *  päivämääräväli (fr "8 juin–15 août", zh "6月8日–8月15日") ei mahdu kahden sarakkeen laattaan isona. */
function factSize(v: string): string {
  const w = [...v].reduce((n, ch) => n + (/[　-鿿가-힯]/.test(ch) ? 2 : 1), 0);
  return w <= 6 ? 'text-5xl sm:text-6xl' : w <= 11 ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl';
}

/** "Lohi: yleisesti 60 cm …" -> ['Lohi', 'yleisesti 60 cm …']. Ilman kaksoispistettä koko rivi on runko. */
function splitLabel(s: string): [string, string] {
  const m = s.match(/^([^:：]{1,40})[:：]\s*(.+)$/);
  return m ? [m[1], m[2]] : ['', s];
}

export default function FishingPage() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].fishing;
  const compareHotels = COPY[lang].bookingCta.compareHotels;
  const pageUrl = `https://laplandactivities.fi${to('/fishing')}`.replace(/\/?$/, '/');
  // Dedicated guide hero (the iconic fly-fisher). The /categories/fishing grid uses
  // its own seasonal hero (see images.ts CATEGORY_HERO.fishing) so the two fishing
  // surfaces never share the same photo.
  const heroImg = '/images/activities/summer/salmon-fishing.webp';
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
        {/* og:type EI täällä (8.10.2026): esirenderöity HTML sanoo "website", ja se on oikein tälle sivulle
            (opas ilman näkyvää julkaisupäivää tai article:published_timea). Helmet lisäsi toisen og:typen
            arvolla "article" staattisen rinnalle (gate:og-js "ristiriita"). */}
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* HERO */}
      {/* 17.10.2026 (Vesa: "enkä pidä noiden h1 tekstien taustoista ollenkaan minkään alasivun hero
          osiossa"): sumennettu laikku pois, verkoston heromalli kuten kohde- ja kategoriasivuilla.
          Alle 1024 px kuva on puhdas kaista ja teksti sen alla; lg+:ssa teksti kuvan päällä
          vasemmalla vaakaliukuman varassa. Valitse tapasi -laatat nousevat yhä heron alareunaan. */}
      <section className="relative bg-deep-night pt-16 lg:min-h-[60vh] lg:flex lg:items-center overflow-hidden">
        <div
          className="relative h-[42svh] min-h-[240px] sm:h-[380px] md:h-[440px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0 overflow-hidden"
          data-lv-tp-tausta="hero"
        >
          <img
            src={heroImg}
            {...respImg(heroImg, 'band')}
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
          <div aria-hidden="true" className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/70 via-55% to-transparent" />
          {/* CC BY 2.5 -kuva: tekijä + lisenssi näkyviin. lg+:ssa laatat nousevat heron alareunan
              päälle, joten kuitti on niiden yläpuolella. */}
          <div className="absolute inset-x-0 bottom-0 lg:bottom-28 h-6">
            <PhotoCredit src={heroImg} />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-7 pb-32 sm:pb-36 lg:pt-16 lg:pb-40 w-full">
          <div className="max-w-2xl">
            {/* Murupolku otsikon yläpuolelle: laatat nousevat heron alareunan päälle, joten heron
                alla se jäisi laattojen perään (puhelimessa keskelle sivua). */}
            <PageBreadcrumb variant="inline" />
            <p className="text-[#F9A8D4] text-xs font-semibold tracking-[0.25em] uppercase mb-3">{c.hero.eyebrow}</p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-snow tracking-wide leading-[0.98] lg:drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              {c.hero.title}
            </h1>
            <p className="text-snow max-w-2xl text-base sm:text-lg leading-relaxed mt-4 mb-6">
              {c.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <AffiliateCTA
                partner="activities"
                sid="fishing_hero_cta"
                destination="rovaniemi-l2653/great-ice-fishing-experience-in-lapland-t539112"
                className="inline-flex items-center justify-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
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
            <p className="text-snow/90 text-base leading-relaxed mt-5 max-w-2xl">{c.hero.trustLine}</p>
          </div>
        </div>
      </section>

      {/* 2.0 — VALITSE TAPASI: kolme paperilaattaa heti heron alla (Vesa 19.9.2026: sivun alku
          oli tekstimuuri). 17.10.2026 (Vesa: "kaikki on jotenkin tummaa taustaa vasten, ei mitään
          kerrostumisia"): laatat nousevat heron alareunan päälle, ja sivu vuorottelee tumman
          pohjan, valokuvakaistojen ja vaaleiden paperiarkkien välillä. */}
      <section className="relative z-10 -mt-24 sm:-mt-28 px-4 sm:px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <p className={`${EYEBROW} mb-3 text-[#F9A8D4]`}>{c.chooser.kicker}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {([
              { href: '#ice', Icon: Snowflake, img: CHOOSER_IMG.ice, title: c.chooser.ice, sub: c.chooser.iceSub },
              { href: '#rivers', Icon: Fish, img: CHOOSER_IMG.rivers, title: c.chooser.rivers, sub: c.chooser.riversSub },
              { href: '#norway', Icon: Anchor, img: CHOOSER_IMG.norway, title: c.chooser.norway, sub: c.chooser.norwaySub },
            ] as const).map((t) => (
              <a key={t.href} href={t.href} className="group rounded-2xl overflow-hidden bg-[#F3F6FA] border border-white/60 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.8)] hover:border-vibe-pink/50 transition-colors flex flex-col">
                <div className="relative h-28 sm:h-40 overflow-hidden">
                  <img src={t.img} {...respImg(t.img, 'card')} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1600" height="900" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(t.img) }} />
                  <PhotoCredit src={t.img} links={false} />
                </div>
                <div className="p-5 flex items-start gap-3">
                  <span className="inline-flex shrink-0 w-10 h-10 rounded-xl bg-vibe-pink/12 items-center justify-center"><t.Icon className="w-5 h-5 text-vibe-pink" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-heading text-2xl text-deep-night tracking-wide leading-none group-hover:text-vibe-pink transition-colors">{t.title}</span>
                    <span className="block text-deep-night/70 text-sm leading-relaxed mt-1.5">{t.sub}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* VERIFY BANNER */}
      <div className="bg-amber-500/10 border-y border-amber-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-100/90 text-sm leading-relaxed">{c.verifyBanner}</p>
        </div>
      </div>

      <main className="bg-deep-night">
        {/* KAKSI ASIAA ENSIN — paperiarkki: maksu ja ilmainen pilkkiminen rinnakkain */}
        <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-6">
          <div className={`max-w-7xl mx-auto ${PAPER} p-6 sm:p-10`}>
            <h2 className={H2_PAPER}>{c.firstThings.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 w-12 h-12 rounded-2xl bg-[#BE185D]/10 items-center justify-center"><Ticket className="w-6 h-6 text-[#BE185D]" aria-hidden="true" /></span>
                <Clamp text={c.firstThings.body1} more={c.readMore} lang={lang} onPaper className="text-deep-night/80 text-base leading-relaxed" />
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 w-12 h-12 rounded-2xl bg-[#0E7490]/10 items-center justify-center"><Gift className="w-6 h-6 text-[#0E7490]" aria-hidden="true" /></span>
                <Clamp text={c.firstThings.body2} more={c.readMore} lang={lang} onPaper className="text-deep-night/80 text-base leading-relaxed" />
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-5 border-t border-deep-night/10">
              <OfficialLink href={OFFICIAL.fee} onPaper>{c.firstThings.feeLink}</OfficialLink>
              <OfficialLink href={OFFICIAL.restrictionMap} onPaper>{c.firstThings.mapLink}</OfficialLink>
            </div>
          </div>
        </section>

        {/* JOET — tavallinen osion otsikko ja kuusi jokikorttia. 17.10.2026 (Vesa: "miten tämä joet on
            näin paska osio ja kuva täysi leveä, ihan kuin olisi uusi hero osio"): koko leveyden
            valokuvakaista otsikon takana näytti toiselta herolta keskellä sivua. Kuvat ovat korteissa. */}
        <section id="rivers" className="scroll-mt-20 pt-6 sm:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-18">
            <p className={`${EYEBROW} mb-3`}>{c.eyebrows.freshwater}</p>
            <h2 className={`${H2} mb-3`}>{c.rivers.title}</h2>
            <p className="text-snow/80 text-base leading-relaxed max-w-3xl">{c.rivers.lead}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 items-stretch">
              {c.rivers.cards.map((card, i) => {
                const meta = RIVER_META[i] ?? RIVER_META[0];
                // Merkki on valokuvan päällä: pohja tumma ja lähes peittävä, sävy tulee
                // tekstistä ja reunasta (valkoisen kuvan päällä kaikki kolme ≥ 5,5:1).
                const badgeColor = meta.status === 'open'
                  ? 'bg-emerald-950/85 text-emerald-300 border-emerald-400/40'
                  : meta.status === 'closed'
                  ? 'bg-red-950/85 text-red-300 border-red-400/40'
                  : 'bg-deep-night/85 text-snow/85 border-white/20';
                const img = RIVER_IMG[i] ?? RIVER_IMG[0];
                return (
                  <div key={card.name} className="lv-surface rounded-2xl overflow-hidden flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={img} {...respImg(img, 'card')} alt={card.name} loading="lazy" decoding="async" width="1600" height="900" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(img) }} />
                      {/* Ei tummennusta: tilamerkillä ja kuitilla on oma pohja (17.10.2026). */}
                      <span className={`absolute left-4 bottom-3 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur-sm ${badgeColor}`}>
                        {card.badge}
                      </span>
                      <PhotoCredit src={img} links={false} at="top" wrap />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-2xl text-snow tracking-wide mb-2">{card.name}</h3>
                      <Clamp text={card.body} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
                      <p className="mt-4 rounded-xl bg-vibe-pink/10 border border-vibe-pink/20 px-3.5 py-2.5 text-snow/85 text-xs leading-relaxed flex items-start gap-2">
                        <Fish className="w-3.5 h-3.5 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{card.crNote}</span>
                      </p>
                      <div className="mt-auto pt-5 flex flex-col gap-2.5">
                        <OfficialLink href={meta.href}>{card.officialLabel}</OfficialLink>
                        <AffiliateCTA
                          partner="hotels"
                          sid={meta.sid}
                          destination={meta.ss}
                          aria-label={`${compareHotels}: ${meta.ss}`}
                          className="inline-flex items-center gap-1.5 text-vibe-pink hover:text-pink-300 text-sm font-semibold"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          {compareHotels} · {meta.ss}
                        </AffiliateCTA>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TORNION LOHI 2026 — paperiarkki. 17.10.2026 (Vesa: "aivan kamala tyyli ja teksti ja kokonaisuus,
            selkeämmin ja firmimmät tekstit, rivitykset"): yhdeksän pitkää virkettä laatoissa oli puhelimessa
            ~1 700 px. Nyt neljä avainlukua tummissa laatoissa isolla ja loput säännöt lyhyinä riveinä. */}
        <section className="px-4 sm:px-6 pb-14 sm:pb-18">
          <div className={`max-w-7xl mx-auto ${PAPER} p-6 sm:p-10`}>
            <p className={`${EYEBROW_PAPER} mb-2`}>{c.eyebrows.liability}</p>
            <h2 className={`${H2_PAPER} text-balance`}>{c.tornioBox.title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {c.tornioBox.facts.map((f) => (
                // 17.10.2026 (Vesa: "miksi numero ei ole keskitetty laatikkoon"): luku ja selite keskelle
                // laattaa vaaka- ja pystysuunnassa. Sääntö koko verkostolle: lukulaatta on aina keskitetty.
                <div key={f.label} className="rounded-2xl bg-deep-night px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center justify-center text-center">
                  <span className={`block font-heading text-snow tracking-wide leading-none ${factSize(f.value)}`}>{f.value}</span>
                  <span className="block text-snow/80 text-sm leading-snug mt-2 text-balance">{f.label}</span>
                </div>
              ))}
            </div>
            <dl className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 mt-6">
              {c.tornioBox.items.map((it) => (
                <div key={it.label} className="border-t border-deep-night/10 py-3 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-x-4">
                  <dt className="text-deep-night font-bold text-[15px] leading-snug">{it.label}</dt>
                  <dd className="text-deep-night/80 text-[15px] leading-snug mt-0.5 sm:mt-0">{it.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-l-4 border-amber-400 pl-3 text-deep-night/80 text-[15px] leading-snug flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{c.tornioBox.verifyLine}</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6">
              <AffiliateCTA
                partner="hotels"
                sid="fishing_tornio_stay"
                destination="Pello"
                className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                <MapPin className="w-4 h-4" />
                {c.tornioBox.ctaStay}
              </AffiliateCTA>
              <OfficialLink href={OFFICIAL.tornioArea} onPaper>eräluvat.fi: area 2502</OfficialLink>
              <OfficialLink href={OFFICIAL.tornioVN} onPaper>valtioneuvosto.fi</OfficialLink>
            </div>
          </div>
        </section>

        {/* JÄRVET + TENO — kaksi korttia rinnakkain */}
        <section className="px-4 sm:px-6 pb-14 sm:pb-18">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="lv-surface rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img src={LAKE_IMG} {...respImg(LAKE_IMG, 'half')} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1920" height="1440" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(LAKE_IMG) }} />
                <PhotoCredit src={LAKE_IMG} links={false} />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className={H2}>{c.lakes.title}</h2>
                <div className="mt-3">
                  <Clamp text={c.lakes.body} more={c.readMore} lang={lang} className="text-snow/75 text-base leading-relaxed" />
                </div>
                <div className="mt-4">
                  <OfficialLink href={OFFICIAL.inariLake}>eräluvat.fi: Inarijärvi</OfficialLink>
                </div>
              </div>
            </div>
            <div className="lv-surface rounded-2xl overflow-hidden flex flex-col border-red-400/25">
              <div className="h-1.5 bg-gradient-to-r from-red-500/70 via-red-400/40 to-transparent" aria-hidden="true" />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h2 className={H2}>{c.teno.title}</h2>
                <div className="mt-3">
                  <Clamp text={c.teno.body} more={c.readMore} lang={lang} className="text-snow/75 text-base leading-relaxed" />
                </div>
                <p className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-400/25 px-4 py-3 text-snow/85 text-sm leading-relaxed">{c.teno.whatYouCan}</p>
                <p className="text-snow/80 text-sm leading-relaxed mt-4 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{c.teno.warnThirdParty}</span>
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-auto pt-5">
                  <OfficialLink href={OFFICIAL.tenoLuvat}>tenonkalaluvat.fi</OfficialLink>
                  <OfficialLink href={OFFICIAL.tenoSaadokset}>tenonkalatalousalue.fi</OfficialLink>
                  <OfficialLink href={OFFICIAL.tenoVN}>valtioneuvosto.fi</OfficialLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILKKIMINEN — kuva vasemmalla, teksti oikealla, kuten Järvet-kortti. 17.10.2026 (Vesa:
            "toteutettu tosi poor"): koko leveyden valokuva lasipaneelin takana oli kolmas
            hero-tyylinen kaista sivulla, ja kuva oli sama kuin valitsimen laatassa. */}
        <section id="ice" className="scroll-mt-20 px-4 sm:px-6 pb-14 sm:pb-18">
          <div className="max-w-7xl mx-auto lv-surface rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[28rem] overflow-hidden">
              <img src={FISHING_IMG.ice} {...respImg(FISHING_IMG.ice, 'half')} alt={c.imageAlts.ice} loading="lazy" decoding="async" width="1704" height="959" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(FISHING_IMG.ice) }} />
              <PhotoCredit src={FISHING_IMG.ice} at="top" wrap />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2.5 mb-3">
                <Snowflake className="w-6 h-6 text-arctic-cyan" aria-hidden="true" />
                <h2 className={H2}>{c.iceFishing.title}</h2>
              </div>
              <Clamp text={c.iceFishing.body} more={c.readMore} lang={lang} className="text-snow/80 text-base leading-relaxed" />
              <div className="mt-5 rounded-xl bg-amber-500/10 border border-amber-400/30 p-4">
                <h3 className="font-heading text-lg text-snow tracking-wide mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  {c.iceFishing.safetyTitle}
                </h3>
                <Clamp text={c.iceFishing.safetyBody} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6">
                <AffiliateCTA
                  partner="activities"
                  sid="fishing_ice_rovaniemi"
                  destination="rovaniemi-l2653/rovaniemi-ice-fishing-experience-t195392"
                  className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                >
                  <Fish className="w-4 h-4" />
                  {c.iceFishing.cta}
                </AffiliateCTA>
                <OfficialLink href={OFFICIAL.restrictionMap}>kalastusrajoitus.fi</OfficialLink>
              </div>
            </div>
          </div>
        </section>

        {/* LUVAT JA MAKSUT — kolme korttia + alamitat lajilaattoina paperilla */}
        <section id="licences" className="scroll-mt-20 px-4 sm:px-6 py-14 sm:py-18">
          <div className="max-w-7xl mx-auto">
            <p className={`${EYEBROW} mb-3`}>{c.eyebrows.legal}</p>
            <h2 className={H2}>{c.licenses.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {([
                { Icon: Ticket, text: c.licenses.fee },
                { Icon: Gift, text: c.licenses.freeRights },
                { Icon: ListChecks, text: c.licenses.waterPermits },
              ] as const).map(({ Icon, text }, i) => (
                <div key={i} className="lv-surface rounded-2xl p-6">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-vibe-pink/12 items-center justify-center mb-4"><Icon className="w-5 h-5 text-vibe-pink" aria-hidden="true" /></span>
                  <Clamp text={text} more={c.readMore} lang={lang} className="text-snow/80 text-sm leading-relaxed" />
                </div>
              ))}
            </div>

            <div className={`${PAPER} p-6 sm:p-10 mt-8`}>
              <h3 className="font-heading text-2xl sm:text-3xl text-deep-night tracking-wide flex items-center gap-2.5">
                <Ruler className="w-6 h-6 text-[#BE185D]" aria-hidden="true" />
                {c.licenses.sizesTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                {c.licenses.sizes.slice(0, -1).map((s, i) => {
                  const [label, rest] = splitLabel(s);
                  return (
                    <li key={i} className="rounded-2xl bg-white border border-deep-night/10 p-4">
                      {label && <span className="block font-heading text-2xl text-deep-night tracking-wide leading-none mb-1.5">{label}</span>}
                      <span className="block text-deep-night/80 text-sm leading-relaxed">{rest}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="text-deep-night/80 text-base leading-relaxed mt-4">{c.licenses.sizes[c.licenses.sizes.length - 1]}</p>
              <p className="text-deep-night/85 text-sm leading-relaxed mt-5 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{c.licenses.alwaysCheck}</span>
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-5 border-t border-deep-night/10">
                <OfficialLink href={OFFICIAL.fee} onPaper>eräluvat.fi: fee</OfficialLink>
                <OfficialLink href={OFFICIAL.permits} onPaper>eräluvat.fi: permits</OfficialLink>
                <OfficialLink href={OFFICIAL.sizes} onPaper>eräluvat.fi: sizes</OfficialLink>
                <OfficialLink href={OFFICIAL.mmm} onPaper>mmm.fi</OfficialLink>
                <OfficialLink href={OFFICIAL.restrictionMap} onPaper>kalastusrajoitus.fi</OfficialLink>
              </div>
            </div>
          </div>
        </section>

        {/* NORJA — kuva ja meriosa rinnakkain, vienti ja kuningasrapu korteiksi */}
        <section id="norway" className="scroll-mt-20 px-4 sm:px-6 pb-14 sm:pb-18">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 aspect-[4/3]">
                <img src={FISHING_IMG.kingCrab} {...respImg(FISHING_IMG.kingCrab, 'half')} alt={c.imageAlts.kingCrab} loading="lazy" decoding="async" width="1400" height="990" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: focalFor(FISHING_IMG.kingCrab) }} />
                <PhotoCredit src={FISHING_IMG.kingCrab} />
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Waves className="w-6 h-6 text-arctic-cyan" aria-hidden="true" />
                  <h2 className={H2}>{c.norway.title}</h2>
                </div>
                <Clamp text={c.norway.seaBody} more={c.readMore} lang={lang} className="text-snow/80 text-base leading-relaxed" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  <OfficialLink href={OFFICIAL.fiskeridirReg}>fiskeridir.no: regulations</OfficialLink>
                  <OfficialLink href={OFFICIAL.lovdata}>lovdata.no: §47</OfficialLink>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="lv-surface rounded-2xl p-6 sm:p-8 flex flex-col">
                <h3 className="font-heading text-2xl text-snow tracking-wide mb-2">{c.norway.crabTitle}</h3>
                <Clamp text={c.norway.crabBody} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
                <p className="text-snow/70 text-sm leading-relaxed mt-4 flex items-start gap-2">
                  <Car className="w-4 h-4 text-vibe-pink shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{c.norway.carNote}</span>
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-auto pt-5">
                  <AffiliateCTA
                    partner="activities"
                    sid="fishing_crab_kirkenes"
                    destination="kirkenes-l97740/saariselka-king-crab-safari-to-kirkenes-with-lunch-t1158887"
                    className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                  >
                    <Anchor className="w-4 h-4" />
                    {c.norway.cta}
                  </AffiliateCTA>
                  <AffiliateCTA
                    partner="activities"
                    sid="fishing_crab_rib"
                    destination="kirkenes-l97740/kirkenes-summer-king-crab-safari-by-rib-with-king-crab-meal-t1200620"
                    className="inline-flex items-center gap-1.5 text-vibe-pink hover:text-pink-300 text-sm font-semibold"
                  >
                    <Anchor className="w-3.5 h-3.5" />
                    {c.norway.ribLabel}
                  </AffiliateCTA>
                  <OfficialLink href={OFFICIAL.fiskeridirCrab}>fiskeridir.no: king crab</OfficialLink>
                </div>
              </div>
              <div className="lv-surface rounded-2xl p-6 sm:p-8 flex flex-col">
                <h3 className="font-heading text-2xl text-snow tracking-wide mb-2">{c.norway.exportTitle}</h3>
                <Clamp text={c.norway.exportBody} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-auto pt-5">
                  <OfficialLink href={OFFICIAL.fiskeridirExport}>fiskeridir.no: export quota</OfficialLink>
                  <OfficialLink href={OFFICIAL.toll}>toll.no</OfficialLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KALAT ENSIN — neljä lyhyttä tarinaa: otsikko näkyy, runko aukeaa */}
        <section className="border-t border-white/5 px-4 sm:px-6 py-14 sm:py-18 bg-gradient-to-b from-white/[0.03] to-transparent">
          <div className="max-w-7xl mx-auto">
            <p className={`${EYEBROW} mb-3`}>{c.eyebrows.eco}</p>
            <h2 className={H2}>{c.eco.title}</h2>
            <p className="text-snow/75 text-base leading-relaxed mt-4 max-w-3xl">{c.eco.lead}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {c.eco.stories.map((s, i) => {
                const Icon = ECO_ICONS[i] ?? Fish;
                return (
                  <div key={s.title} className="lv-surface rounded-2xl p-6">
                    <Icon className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{s.title}</h3>
                    <Clamp text={s.body} more={c.readMore} lang={lang} className="text-snow/70 text-sm leading-relaxed" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* KAUSI YHDELLÄ SILMÄYKSELLÄ — paperiarkki, jaksot laattoina */}
        <section className="px-4 sm:px-6 pb-14 sm:pb-18">
          <div className={`max-w-7xl mx-auto ${PAPER} p-6 sm:p-10`}>
            <h2 className={`${H2_PAPER} flex items-center gap-2.5`}>
              <CalendarDays className="w-7 h-7 text-[#BE185D]" aria-hidden="true" />
              {c.season.title}
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
              {c.season.rows.slice(0, -1).map((r, i) => (
                <div key={i} className="rounded-2xl bg-white border border-deep-night/10 p-4">
                  <dt className="font-heading text-[#BE185D] text-2xl tracking-wide leading-none">{r.period}</dt>
                  <dd className="text-deep-night/80 text-sm leading-relaxed mt-2">{r.what}</dd>
                </div>
              ))}
            </dl>
            {c.season.rows.length > 0 && (
              <p className="text-deep-night/80 text-base leading-relaxed mt-4">
                <span className="font-semibold">{c.season.rows[c.season.rows.length - 1].period}{labelColon(lang)}</span>
                {c.season.rows[c.season.rows.length - 1].what}
              </p>
            )}
          </div>
        </section>

        {/* SINNE PÄÄSY + VARUSTEET — kaksi korttia rinnakkain */}
        <section className="px-4 sm:px-6 pb-14 sm:pb-18">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="lv-surface rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-3">
                <Car className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
                <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">{c.gettingThere.title}</h2>
              </div>
              <Clamp text={c.gettingThere.body} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
              <div className="flex flex-wrap gap-3 mt-6">
                <AffiliateCTA
                  partner="cars"
                  sid="fishing_getting_there"
                  destination="RVN"
                  className="inline-flex items-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
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
            <div className="lv-surface rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-3">
                <Backpack className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
                <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">{c.gear.title}</h2>
              </div>
              <Clamp text={c.gear.body} more={c.readMore} lang={lang} className="text-snow/75 text-sm leading-relaxed" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-18 border-t border-white/5">
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
        <section className="py-14 sm:py-18 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className={`${EYEBROW} mb-3`}>{c.eyebrows.explore}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to={to('/categories/fishing')} className="lv-surface rounded-2xl p-6 hover:border-vibe-pink/40 transition-colors block">
                <Fish className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1">{c.crossLinks[0].title}</h3>
                <p className="text-snow/65 text-sm">{c.crossLinks[0].blurb}</p>
              </Link>
              <a
                href="https://laplandnature.com/freshwater/"
                target="_blank"
                rel="noopener noreferrer"
                className="lv-surface rounded-2xl p-6 hover:border-vibe-pink/40 transition-colors block"
              >
                <Waves className="w-6 h-6 text-arctic-cyan mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1 inline-flex items-center gap-1.5">
                  {c.crossLinks[1].title} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </h3>
                <p className="text-snow/65 text-sm">{c.crossLinks[1].blurb}</p>
              </a>
              <a
                href="https://laplandvisit.com/arctic-norway/"
                target="_blank"
                rel="noopener noreferrer"
                className="lv-surface rounded-2xl p-6 hover:border-vibe-pink/40 transition-colors block"
              >
                <MapPin className="w-6 h-6 text-arctic-cyan mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-1 inline-flex items-center gap-1.5">
                  {c.crossLinks[2].title} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </h3>
                <p className="text-snow/65 text-sm">{c.crossLinks[2].blurb}</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
