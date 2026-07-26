import { Helmet } from 'react-helmet-async';
import TermsContent from '../../../../shared/Legal/TermsContent';
import { useLang, useLocalePath } from '../../i18n/useLang';
import { COPY } from '../../locales/copy';

export default function Terms() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].terms;
  const path = to('/terms');

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.fi${path}`.replace(/\/?$/, '/')} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <TermsContent siteName="LaplandActivities" siteUrl="laplandactivities.fi" lang={lang} />
    </>
  );
}
