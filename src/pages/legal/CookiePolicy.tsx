import { Helmet } from 'react-helmet-async';
import CookieContent from '../../shared/Legal/CookieContent';
import { useLang, useLocalePath } from '../../i18n/useLang';
import { COPY } from '../../locales/copy';

export default function CookiePolicy() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].cookie;
  const path = to('/cookie-policy');

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.fi${path}`.replace(/\/?$/, '/')} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <CookieContent siteId="laplandactivities" siteName="LaplandActivities" lang={lang} />
    </>
  );
}
