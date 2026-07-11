import Breadcrumbs from '../../../shared/Breadcrumbs';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * Ecosystem murupolku, mounted BELOW the hero (or at the top of hero-less page
 * content) instead of in an App-level bar wedged above it. Same logic as the
 * former App `BreadcrumbShell` — identical labelMap, lang + locale-path helper,
 * and accent — but the container drops `pt-16` and carries the site's deep-night
 * content background so it reads as the first strip under the hero. The shared
 * Breadcrumbs returns null on the home route and on unmapped routes, so mounting
 * it unconditionally is safe.
 */
export default function PageBreadcrumb() {
  const lang = useLang();
  const c = COPY[lang].nav;
  const to = useLocalePath();
  const labelMap: Record<string, string> = {
    '/destinations': c.destinations,
    '/categories': c.categories,
    '/about': c.about,
    '/fishing': c.fishing,
  };
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className="bg-deep-night text-snow border-b border-white/10"
      accentClassName="hover:text-vibe-pink hover:opacity-100"
    />
  );
}
