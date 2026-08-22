import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import SharedNotFound from '../shared/NotFound';

// Thin wrapper around the shared network 404 (Vesa 2026-07-12 migration).
// Title + robots noindex are set by SharedNotFound itself — Helmet dropped.
// Nav/Footer are rendered by App.tsx around <Routes>, so no chrome needed here.
export default function NotFound() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  // landmark={false} because this site's app layout already renders the
  // page's <main>. Without it the 404 route shipped two nested landmarks --
  // measured from the rendered DOM 2026-08-13, invisible to grep.
  return (
    <SharedNotFound
      landmark={false}
      lang={lang}
      siteName="LaplandActivities"
      homeHref={to('/')}
      links={[
        { href: to('/destinations'), label: c.destinations },
        { href: to('/categories'), label: c.categories },
        { href: to('/fishing'), label: c.fishing },
      ]}
    />
  );
}
