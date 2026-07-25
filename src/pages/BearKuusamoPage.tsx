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

// Conversion links (booking page, primary CTA, logo) carry campaign UTM so Bear
// Kuusamo can attribute bookings to us. The two SEO keyword anchors deliberately
// stay UTM-free (clean backlinks) — they still fire the partner_click event.
const BEAR_URL_UTM =
  'https://bearkuusamo.com/?utm_source=laplandactivities&utm_medium=partner&utm_campaign=bear-kuusamo-2026';

// The two paid SEO keyword anchors. They MUST stay in English on every locale, so
// the page owns them as constants and locale copy only carries the surrounding text.
const ANCHOR_WATCH = 'bear watching in Finland';
const ANCHOR_TOUR = 'bear tour in Finland';

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
 * click (placement = sid). `conversion` links get campaign UTM; keyword anchors
 * stay UTM-free but still track.
 */
function BearLink({
  children,
  sid,
  conversion = false,
}: {
  children: ReactNode;
  sid: string;
  conversion?: boolean;
}) {
  return (
    <a
      href={conversion ? BEAR_URL_UTM : BEAR_URL}
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

      {/* HERO — photo-led feature. Overlay is a bottom-anchored scrim: dark only at
          the very bottom (behind the label + headline), near-clear at the top so the
          backlit mother bear and cubs and the golden light read clearly. */}
      <section className="relative min-h-[62vh] md:min-h-[70vh] flex items-end overflow-hidden pt-16 bg-deep-night">
        <img
          src={IMG.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
          decoding="async"
          width="1600"
          height="1068"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.40) 45%, rgba(15,23,42,0.10) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full">
          {/* Commercial-partnership disclosure — small, visible, near the top. Bear
              brand green used only as a restrained dot + border accent. */}
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-deep-night/55 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-snow/90 mb-4"
            style={{ borderColor: 'rgba(0,126,46,0.55)' }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: BEAR_GREEN }} aria-hidden="true" />
            {c.partnershipLabel}
          </span>
          <p className={`${EYEBROW} mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]`}>{c.hero.eyebrow}</p>
          <h1
            className="font-heading text-4xl sm:text-6xl md:text-7xl text-snow tracking-wide leading-[0.98]"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85), 0 6px 32px rgba(0,0,0,0.8)' }}
          >
            {c.hero.title}
          </h1>
        </div>
      </section>

      <PageBreadcrumb />

      <main className="bg-deep-night">
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
              <BearLink sid="intro_keyword">{ANCHOR_WATCH}</BearLink>
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
              <BearLink sid="booking" conversion>{c.ways.bookingLink}</BearLink>
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
              <BearLink sid="where_keyword">{ANCHOR_TOUR}</BearLink>
              {c.where.post}
            </p>

            {/* PRIMARY CTA — direct to Bear Kuusamo (conversion link: campaign UTM) */}
            <a
              href={BEAR_URL_UTM}
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
              href={BEAR_URL_UTM}
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
      </main>
    </>
  );
}
