import { Helmet } from 'react-helmet-async';
import CookieContent from '../../../../shared/Legal/CookieContent';
import { useLang } from '../../i18n/useLang';

export default function CookiePolicy() {
  const lang = useLang();
  return (
    <>
      <Helmet>
        <title>Cookie Policy · LaplandActivities</title>
        <meta name="description" content="How LaplandActivities uses cookies. GDPR + ePrivacy-compliant cookie policy for the LaplandVibes ecosystem." />
        <link rel="canonical" href="https://laplandactivities.fi/cookie-policy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <CookieContent siteId="laplandactivities" siteName="LaplandActivities" lang={lang} />
    </>
  );
}
