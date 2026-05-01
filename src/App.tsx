import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import NewsletterPopup from './components/NewsletterPopup';
import SharedFooter from '../../shared/Footer';
import SharedCookieBanner from '../../shared/CookieBanner';
import Home from './pages/Home';
import DestinationsIndex from './pages/DestinationsIndex';
import DestinationPage from './pages/DestinationPage';
import CategoriesIndex from './pages/CategoriesIndex';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import CookiePolicy from './pages/legal/CookiePolicy';
import { trackPageView } from './lib/analytics';

const pillarLinks = [
  { name: 'Destinations',     href: '/destinations' },
  { name: 'Categories',       href: '/categories' },
  { name: 'Husky Safaris',    href: 'https://laplandhuskysafaris.com' },
  { name: 'Snowmobile Tours', href: 'https://laplandsnowmobile.com' },
  { name: 'Northern Lights',  href: 'https://laplandnorthernlights.com' },
  { name: 'Where to Stay',    href: 'https://laplandstays.com' },
];

function RouteTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-deep-night text-snow">
      <ScrollToTop />
      <RouteTracker />
      <Navigation />
      <main className="bg-deep-night">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsIndex />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          <Route path="/categories" element={<CategoriesIndex />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SharedFooter pillarLinks={pillarLinks} />
      <SharedCookieBanner consentKey="laplandactivities_cookie_consent" />
      <NewsletterPopup />
    </div>
  );
}
