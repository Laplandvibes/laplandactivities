import { Helmet } from 'react-helmet-async';
import CookieContent from '../../../../shared/Legal/CookieContent';

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — LaplandActivities</title>
        <meta name="description" content="How LaplandActivities uses cookies. GDPR + ePrivacy-compliant cookie policy for the LaplandVibes ecosystem." />
        <link rel="canonical" href="https://laplandactivities.online/cookie-policy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <CookieContent siteId="laplandactivities" siteName="LaplandActivities" />
    </>
  );
}
