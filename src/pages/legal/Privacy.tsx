import { Helmet } from 'react-helmet-async';
import PrivacyContent from '../../shared/Legal/PrivacyContent';
import { useLang, useLocalePath } from '../../i18n/useLang';
import { COPY } from '../../locales/copy';

export default function Privacy() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].privacy;
  const path = to('/privacy');

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.fi${path}`.replace(/\/?$/, '/')} />
      </Helmet>
      <PrivacyContent siteName="LaplandActivities" lang={lang} />
    </>
  );
}
