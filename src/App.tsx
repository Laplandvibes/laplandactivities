import { useEffect, useReducer, lazy, Suspense, type ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import NewsletterPopup from './components/NewsletterPopup';
import SharedFooter from '../../shared/Footer';
import SharedCookieBanner from '../../shared/CookieBanner';
const Home = lazy(() => import('./pages/Home'))
const DestinationsIndex = lazy(() => import('./pages/DestinationsIndex'))
const DestinationPage = lazy(() => import('./pages/DestinationPage'))
const CategoriesIndex = lazy(() => import('./pages/CategoriesIndex'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FishingPage = lazy(() => import('./pages/FishingPage'))
const BearKuusamoPage = lazy(() => import('./pages/BearKuusamoPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Privacy = lazy(() => import('./pages/legal/Privacy'))
const Terms = lazy(() => import('./pages/legal/Terms'))
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'))
import { trackPageView } from './lib/analytics';
import { useHtmlLang, useLang } from './i18n/useLang';
import { COPY, loadCopy } from './locales/copy';
import { isLocaleDataLoaded, loadLocaleData } from './locales/data';
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect';
import { AppPromoNudge } from './components/AppPromo';

// key → label haetaan SharedFooterin pillars-sanakirjasta sivun kielellä;
// name jää EN-fallbackiksi jos avain puuttuu sanakirjasta.
const pillarLinks = [
  { key: 'destinations' as const,    name: 'Destinations',     href: '/destinations' },
  { key: 'categories' as const,      name: 'Categories',       href: '/categories' },
  { key: 'huskySafaris' as const,    name: 'Husky Safaris',    href: 'https://laplandhuskysafaris.com' },
  { key: 'snowmobileTours' as const, name: 'Snowmobile Tours', href: 'https://laplandsnowmobile.com' },
  { key: 'northernLights' as const,  name: 'Northern Lights',  href: 'https://laplandvibes.com/northern-lights' },
  { key: 'whereToStay' as const,     name: 'Where to Stay',    href: 'https://laplandstays.com' },
];

/**
 * 🔴 The app layout's landmark, EXCEPT on /terms.
 *
 * shared/Legal/TermsContent opens its own <main>; nesting it inside this one is
 * invalid HTML and gives a screen reader two "main" regions. Its siblings
 * PrivacyContent/CookieContent open a <div>, so only /terms is affected.
 * Measured from the rendered DOM 2026-08-13 (12 network sites) -- the raw HTML
 * has zero <main> elements, so this is invisible to grep.
 *
 * Do NOT "simplify" this back to a plain <main>.
 */
function MainOrDiv({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const Tag = /(^|\/)terms\/?$/.test(pathname) ? 'div' : 'main';
  return <Tag className="bg-deep-night">{children}</Tag>;
}

function RouteTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);
  return null;
}

function LocaleSync() {
  const lang = useHtmlLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

/**
 * Non-EN copy AND locale data live in per-language lazy chunks (see
 * locales/copy.ts + locales/data.ts). Gate the UI until both chunks for the
 * active language are registered, so consumers keep reading synchronously.
 * EN is bundled eagerly — English visitors never hit the gate.
 */
function CopyGate({ children }: { children: ReactNode }) {
  const lang = useLang();
  const [, bump] = useReducer((x: number) => x + 1, 0);
  const ready = !!COPY[lang] && isLocaleDataLoaded(lang);
  useEffect(() => {
    let alive = true;
    if (!ready) {
      Promise.all([loadCopy(lang), loadLocaleData(lang)]).then(() => { if (alive) bump(); });
    }
    return () => { alive = false; };
  }, [lang, ready]);
  if (!ready) return <div className="min-h-screen bg-deep-night" />;
  return <>{children}</>;
}

export default function App() {
  const lang = useLang();
  return (
    <div className="min-h-screen bg-deep-night text-snow overflow-x-clip">
      <ScrollToTop />
      <RouteTracker />
      <LocaleAutoRedirect />
      <LocaleSync />
      <CopyGate>
      <Navigation />
      <MainOrDiv>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fi" element={<Home />} />
          <Route path="/de" element={<Home />} />
          <Route path="/destinations" element={<DestinationsIndex />} />
          <Route path="/fi/destinations" element={<DestinationsIndex />} />
          <Route path="/de/destinations" element={<DestinationsIndex />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          <Route path="/fi/destinations/:slug" element={<DestinationPage />} />
          <Route path="/de/destinations/:slug" element={<DestinationPage />} />
          <Route path="/categories" element={<CategoriesIndex />} />
          <Route path="/fi/categories" element={<CategoriesIndex />} />
          <Route path="/de/categories" element={<CategoriesIndex />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/fi/categories/:slug" element={<CategoryPage />} />
          <Route path="/de/categories/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fi/about" element={<AboutPage />} />
          <Route path="/de/about" element={<AboutPage />} />
          <Route path="/fishing" element={<FishingPage />} />
          <Route path="/fi/fishing" element={<FishingPage />} />
          <Route path="/de/fishing" element={<FishingPage />} />
          <Route path="/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/fi/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/de/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/fi/privacy" element={<Privacy />} />
          <Route path="/de/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/fi/terms" element={<Terms />} />
          <Route path="/de/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/fi/cookie-policy" element={<CookiePolicy />} />
          <Route path="/de/cookie-policy" element={<CookiePolicy />} />
          <Route path="/ja" element={<Home />} />
          <Route path="/ja/destinations" element={<DestinationsIndex />} />
          <Route path="/ja/destinations/:slug" element={<DestinationPage />} />
          <Route path="/ja/categories" element={<CategoriesIndex />} />
          <Route path="/ja/categories/:slug" element={<CategoryPage />} />
          <Route path="/ja/about" element={<AboutPage />} />
          <Route path="/ja/fishing" element={<FishingPage />} />
          <Route path="/ja/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/ja/privacy" element={<Privacy />} />
          <Route path="/ja/terms" element={<Terms />} />
          <Route path="/ja/cookie-policy" element={<CookiePolicy />} />
          <Route path="/es" element={<Home />} />
          <Route path="/es/destinations" element={<DestinationsIndex />} />
          <Route path="/es/destinations/:slug" element={<DestinationPage />} />
          <Route path="/es/categories" element={<CategoriesIndex />} />
          <Route path="/es/categories/:slug" element={<CategoryPage />} />
          <Route path="/es/about" element={<AboutPage />} />
          <Route path="/es/fishing" element={<FishingPage />} />
          <Route path="/es/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/es/privacy" element={<Privacy />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/es/cookie-policy" element={<CookiePolicy />} />
          <Route path="/br" element={<Home />} />
          <Route path="/br/destinations" element={<DestinationsIndex />} />
          <Route path="/br/destinations/:slug" element={<DestinationPage />} />
          <Route path="/br/categories" element={<CategoriesIndex />} />
          <Route path="/br/categories/:slug" element={<CategoryPage />} />
          <Route path="/br/about" element={<AboutPage />} />
          <Route path="/br/fishing" element={<FishingPage />} />
          <Route path="/br/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/br/privacy" element={<Privacy />} />
          <Route path="/br/terms" element={<Terms />} />
          <Route path="/br/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cn" element={<Home />} />
          <Route path="/cn/destinations" element={<DestinationsIndex />} />
          <Route path="/cn/destinations/:slug" element={<DestinationPage />} />
          <Route path="/cn/categories" element={<CategoriesIndex />} />
          <Route path="/cn/categories/:slug" element={<CategoryPage />} />
          <Route path="/cn/about" element={<AboutPage />} />
          <Route path="/cn/fishing" element={<FishingPage />} />
          <Route path="/cn/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/cn/privacy" element={<Privacy />} />
          <Route path="/cn/terms" element={<Terms />} />
          <Route path="/cn/cookie-policy" element={<CookiePolicy />} />
          <Route path="/kr" element={<Home />} />
          <Route path="/kr/destinations" element={<DestinationsIndex />} />
          <Route path="/kr/destinations/:slug" element={<DestinationPage />} />
          <Route path="/kr/categories" element={<CategoriesIndex />} />
          <Route path="/kr/categories/:slug" element={<CategoryPage />} />
          <Route path="/kr/about" element={<AboutPage />} />
          <Route path="/kr/fishing" element={<FishingPage />} />
          <Route path="/kr/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/kr/privacy" element={<Privacy />} />
          <Route path="/kr/terms" element={<Terms />} />
          <Route path="/kr/cookie-policy" element={<CookiePolicy />} />
          <Route path="/fr" element={<Home />} />
          <Route path="/fr/destinations" element={<DestinationsIndex />} />
          <Route path="/fr/destinations/:slug" element={<DestinationPage />} />
          <Route path="/fr/categories" element={<CategoriesIndex />} />
          <Route path="/fr/categories/:slug" element={<CategoryPage />} />
          <Route path="/fr/about" element={<AboutPage />} />
          <Route path="/fr/fishing" element={<FishingPage />} />
          <Route path="/fr/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/fr/privacy" element={<Privacy />} />
          <Route path="/fr/terms" element={<Terms />} />
          <Route path="/fr/cookie-policy" element={<CookiePolicy />} />
          <Route path="/it" element={<Home />} />
          <Route path="/it/destinations" element={<DestinationsIndex />} />
          <Route path="/it/destinations/:slug" element={<DestinationPage />} />
          <Route path="/it/categories" element={<CategoriesIndex />} />
          <Route path="/it/categories/:slug" element={<CategoryPage />} />
          <Route path="/it/about" element={<AboutPage />} />
          <Route path="/it/fishing" element={<FishingPage />} />
          <Route path="/it/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/it/privacy" element={<Privacy />} />
          <Route path="/it/terms" element={<Terms />} />
          <Route path="/it/cookie-policy" element={<CookiePolicy />} />
          <Route path="/nl" element={<Home />} />
          <Route path="/nl/destinations" element={<DestinationsIndex />} />
          <Route path="/nl/destinations/:slug" element={<DestinationPage />} />
          <Route path="/nl/categories" element={<CategoriesIndex />} />
          <Route path="/nl/categories/:slug" element={<CategoryPage />} />
          <Route path="/nl/about" element={<AboutPage />} />
          <Route path="/nl/fishing" element={<FishingPage />} />
          <Route path="/nl/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/nl/privacy" element={<Privacy />} />
          <Route path="/nl/terms" element={<Terms />} />
          <Route path="/nl/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sv" element={<Home />} />
          <Route path="/sv/destinations" element={<DestinationsIndex />} />
          <Route path="/sv/destinations/:slug" element={<DestinationPage />} />
          <Route path="/sv/categories" element={<CategoriesIndex />} />
          <Route path="/sv/categories/:slug" element={<CategoryPage />} />
          <Route path="/sv/about" element={<AboutPage />} />
          <Route path="/sv/fishing" element={<FishingPage />} />
          <Route path="/sv/bear-kuusamo" element={<BearKuusamoPage />} />
          <Route path="/sv/privacy" element={<Privacy />} />
          <Route path="/sv/terms" element={<Terms />} />
          <Route path="/sv/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </MainOrDiv>
      <SharedFooter pillarLinks={pillarLinks} />
      </CopyGate>
      <SharedCookieBanner consentKey="laplandactivities_cookie_consent" lang={lang} />
      <NewsletterPopup />
      <AppPromoNudge />
    </div>
  );
}
