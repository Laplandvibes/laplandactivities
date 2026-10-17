import Breadcrumbs from '../shared/Breadcrumbs';
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
/**
 * variant="overlay": murupolku heron YLÄREUNASSA navin alla, puoliläpinäkyvällä kaistalla.
 * Kalastusoppaassa (17.10.2026) valitse tapasi -laatat nousevat heron päälle, joten heron alle
 * mountattu murupolku jäi laattojen perään, puhelimessa kolmen pinotun laatan alle keskelle
 * sivua (Vesa: "miksi murupolku on keskellä sivua mobiilissa?").
 *
 * variant="inline": murupolku heron tekstipalstan alussa, otsikon yläpuolella, ilman omaa kaistaa.
 * 17.10.2026: heromallissa (kuva puhtaana, teksti alla) yläreunan kaista jäi tietokoneella
 * verkostovalikon vihjeen alle; tekstipalstassa se on aina näkyvissä ja heti otsikon yllä.
 */
export default function PageBreadcrumb({ variant = 'band' }: { variant?: 'band' | 'overlay' | 'inline' } = {}) {
  const lang = useLang();
  const c = COPY[lang].nav;
  const to = useLocalePath();
  const labelMap: Record<string, string> = {
    '/destinations': c.destinations,
    '/categories': c.categories,
    '/about': c.about,
    '/fishing': c.fishing,
    '/bear-kuusamo': COPY[lang].bearKuusamo.breadcrumb,
  };
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className={variant === 'overlay' ? 'bg-deep-night/70 backdrop-blur-sm text-snow border-b border-white/10' : variant === 'inline' ? 'text-snow mb-2' : 'bg-deep-night text-snow border-b border-white/10'}
      containerClassName={variant === 'inline' ? '' : undefined}
      accentClassName="hover:text-vibe-pink hover:opacity-100"
    />
  );
}
