import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Moon, Sun, MapPin, ExternalLink, PawPrint } from 'lucide-react';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackPartnerClick } from '../lib/analytics';

// Direct partner deal (NOT affiliate). Every link goes straight to bearkuusamo.com
// as a NORMAL follow link: target="_blank" rel="noopener" only — no nofollow, no
// sponsored, no go.laplandvibes.com redirect, no GetYourGuide. Vesa's decision
// 2026-07-24. Do not route these through the affiliate Worker.
const BEAR_URL = 'https://bearkuusamo.com';

// EVERY outbound Bear link carries campaign UTM, including the two SEO keyword
// anchors. Those two used to be deliberately UTM-free ("clean backlink"), which
// meant Bear Kuusamo had no way to see in their own analytics that a visitor came
// from the article — the single thing they are paying for (Vesa 2026-07-27).
// A query string does not cost link equity: bearkuusamo.com canonicalises to the
// clean URL, so the dofollow backlink is unaffected and both sides get attribution.
// `utm_content` = the sid, so the June 2027 referral report shows WHICH surface
// (intro anchor, where anchor, CTA, logo) actually drove the visit.
//
// Links resolve to bearkuusamo.com's OWN language version when one exists
// (Niina/Bear 2026-07-30): fi/de/fr/es/it/nl live under /{lang}/, every other
// locale goes to the EN root. Anchor texts come from locale copy
// (c.anchorWatching / c.anchorTour) — no more fixed English anchors.
const BEAR_SITE_LANGS = ['fi', 'de', 'fr', 'es', 'it', 'nl'];
const bearHome = (l: string) => {
  const two = l.slice(0, 2);
  return BEAR_SITE_LANGS.includes(two) ? `https://bearkuusamo.com/${two}/` : 'https://bearkuusamo.com/';
};
const bearUrl = (sid: string, lang: string) =>
  `${bearHome(lang)}?utm_source=laplandactivities&utm_medium=partner&utm_campaign=bear-kuusamo-2026&utm_content=${sid}`;

// Partner section images (photographic). Native ~3:2; rendered full-width h-auto so
// nothing crops at 375px. AVIF sibling exists on disk (matches the fishing folder).
const IMG = {
  hero: '/images/activities/bear-kuusamo/bear-hero.webp',
  tree: '/images/activities/bear-kuusamo/bear-tree.webp',
  logo: '/images/partners/bear-kuusamo-logo-white.png',
};

// Bear Kuusamo brand green — used ONLY as a restrained accent (label dot/border,
// logo panel ring), never as body text on the dark background.
const BEAR_GREEN = '#007E2E';

const EYEBROW = 'text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase';
const CARD = 'rounded-2xl border border-white/10 bg-white/[0.04]';
const H2 = 'font-heading text-3xl sm:text-4xl text-snow tracking-wide';

/**
 * Inline normal-follow link to bearkuusamo.com. Fires a GA4 `partner_click` on
 * click (placement = sid) and carries campaign UTM with utm_content=sid.
 */
function BearLink({
  children,
  sid,
  lang,
}: {
  children: ReactNode;
  sid: string;
  lang: string;
}) {
  return (
    <a
      href={bearUrl(sid, lang)}
      target="_blank"
      rel="noopener"
      data-sid={sid}
      onClick={() => trackPartnerClick(sid)}
      className="text-arctic-cyan hover:text-vibe-pink underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  );
}

export default function BearKuusamoPage() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].bearKuusamo;
  const pageUrl = `https://laplandactivities.fi${to('/bear-kuusamo')}`.replace(/\/?$/, '/');
  const heroImgAbs = `https://laplandactivities.fi${IMG.hero}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.hero.title,
    description: c.metaDescription,
    mainEntityOfPage: pageUrl,
    image: heroImgAbs,
    datePublished: '2026-07-25T00:00:00+03:00',
    dateModified: '2026-07-25T00:00:00+03:00',
    inLanguage: lang,
    author: { '@type': 'Organization', name: 'LaplandActivities', url: 'https://laplandactivities.fi' },
    publisher: {
      '@type': 'Organization',
      name: 'LaplandVibes',
      logo: { '@type': 'ImageObject', url: 'https://laplandactivities.fi/favicon.svg' },
    },
    // Sponsored-content disclosure in structured data (matches the visible label).
    sponsor: { '@type': 'Organization', name: 'Bear Kuusamo', url: BEAR_URL },
  };

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
      </Helmet>

      {/* HERO — photo-led feature. The photo is its own block and the headline sits
          BELOW it, never on it: the old bottom-anchored overlay landed the H1 exactly
          on the mother bear and cub whenever object-cover narrowed the 3:2 crop
          (Vesa 2026-08-04, ~720 px in-app panel: "h1 karhujen päällä"). The bears'
          position in the crop shifts with viewport width, so no overlay placement is
          safe — keep the copy off the photo at every width. */}
      <section className="pt-16 bg-deep-night">
        <div className="relative overflow-hidden">
          <img
            src={IMG.hero}
            alt=""
            aria-hidden="true"
            className="w-full h-[44vh] min-h-[300px] md:h-[56vh] max-h-[640px] object-cover"
            style={{ objectPosition: 'center 60%' }}
            loading="eager"
            decoding="async"
            width="1600"
            height="1068"
            fetchPriority="high"
          />
          {/* Soft foot only, so the photo melts into the page surface below —
              the bears themselves stay unscrimmed. */}
          <div
            className="absolute inset-x-0 bottom-0 h-16"
            style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85), rgba(15,23,42,0))' }}
          />
        </div>
        {/* Hero copy sits in the SAME 3xl column as the article body below, with the
            same px-4/sm:px-6 gutters. Before this it was max-w-7xl, so at 1440px the
            headline started 232px to the left of the first paragraph and the page read
            as two unrelated layouts (Vesa 2026-07-27). Hero and body must share one
            measure — do not widen this back. */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-7 pb-10 md:pt-9 md:pb-12 w-full">
          {/* Commercial-partnership disclosure — small, visible, near the top. Bear
              brand green used only as a restrained dot + border accent. */}
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-deep-night/55 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-snow/90 mb-4"
            style={{ borderColor: 'rgba(0,126,46,0.55)' }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: BEAR_GREEN }} aria-hidden="true" />
            {c.partnershipLabel}
          </span>
          <p className={`${EYEBROW} mb-3`}>{c.hero.eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-snow tracking-wide leading-[1.02]">
            {c.hero.title}
          </h1>
        </div>
      </section>

      <PageBreadcrumb />

      {/* Plain <div>, NOT <main>: the app shell already renders a <main> around every
          route, so a second one here nested two <main> landmarks in the document
          (invalid HTML, and screen readers announce two "main" regions). */}
      <div className="bg-deep-night">
        {/* INTRO */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* First paragraph as a larger lead so the feature has a clear opening
                beat under the photo; body paragraph follows at normal size. */}
            <p className="text-snow/90 text-xl sm:text-2xl font-light leading-relaxed">
              {c.intro.para1}
            </p>
            <p className="text-snow/80 text-base sm:text-lg leading-relaxed mt-6">
              {c.intro.para2Pre}
              <BearLink sid="intro_keyword" lang={lang}>{c.anchorWatching}</BearLink>
              {c.intro.para2Post}
            </p>
          </div>
        </section>

        {/* A NIGHT IN A HIDE */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Moon className="w-6 h-6 text-arctic-cyan" aria-hidden="true" />
              <h2 className={H2}>{c.hide.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">{c.hide.body}</p>

            {/* TREE PHOTO — caption + credit (Piritta Paija / Bear Kuusamo) */}
            <figure className="mt-8">
              <img
                src={IMG.tree}
                alt={c.imageAlts.tree}
                loading="lazy"
                decoding="async"
                width="1200"
                height="820"
                className="w-full h-auto rounded-2xl border border-white/10 shadow-lg shadow-black/20"
              />
              <figcaption className="text-snow/60 text-sm leading-relaxed mt-3">
                {c.treeCaption} <span className="text-snow/45">{c.treeCredit}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* TWO WAYS TO GO */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className={H2}>{c.ways.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className={`${CARD} p-6`}>
                <Sun className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{c.ways.eveningLabel}</h3>
                <p className="text-snow/70 text-sm leading-relaxed">{c.ways.eveningBody}</p>
              </div>
              <div className={`${CARD} p-6`}>
                <Moon className="w-6 h-6 text-vibe-pink mb-3" aria-hidden="true" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{c.ways.overnightLabel}</h3>
                <p className="text-snow/70 text-sm leading-relaxed">{c.ways.overnightBody}</p>
              </div>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-6">{c.ways.season}</p>
            <p className="text-snow/75 text-base leading-relaxed mt-4">
              {c.ways.bookingPre}
              <BearLink sid="booking" lang={lang}>{c.ways.bookingLink}</BearLink>
              {c.ways.bookingPost}
            </p>
          </div>
        </section>

        {/* WHERE IT IS */}
        <section className="py-14 sm:py-18 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-3">
              <MapPin className="w-6 h-6 text-vibe-pink" aria-hidden="true" />
              <h2 className={H2}>{c.where.title}</h2>
            </div>
            <p className="text-snow/75 text-base leading-relaxed mt-2">
              {c.where.pre}
              <BearLink sid="where_keyword" lang={lang}>{c.anchorTour}</BearLink>
              {c.where.post}
            </p>

            {/* PRIMARY CTA — direct to Bear Kuusamo (campaign UTM, utm_content=cta_book) */}
            <a
              href={bearUrl('cta_book', lang)}
              target="_blank"
              rel="noopener"
              data-sid="cta_book"
              onClick={() => trackPartnerClick('cta_book')}
              className="inline-flex items-center gap-2 mt-8 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
            >
              <PawPrint className="w-4 h-4" />
              {c.cta}
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* PARTNER LOGO + CREDIT */}
        <section className="py-14 sm:py-18">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <a
              href={bearUrl('logo', lang)}
              target="_blank"
              rel="noopener"
              data-sid="logo"
              onClick={() => trackPartnerClick('logo')}
              aria-label={c.logoAlt}
              className="inline-flex items-center justify-center rounded-2xl border px-8 py-6 bg-white/[0.03] hover:border-vibe-pink/40 transition-colors"
              style={{ borderColor: 'rgba(0,126,46,0.45)' }}
            >
              <img src={IMG.logo} alt={c.logoAlt} width="220" height="65" className="h-12 w-auto" loading="lazy" decoding="async" />
            </a>
            <p className="text-snow/55 text-xs leading-relaxed mt-5">{c.photoCredit}</p>
          </div>
        </section>
      </div>
    </>
  );
}
