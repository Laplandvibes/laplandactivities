import { Helmet } from 'react-helmet-async';
import PrivacyContent from '../../../../shared/Legal/PrivacyContent';
import { useLang } from '../../i18n/useLang';

export default function Privacy() {
  const lang = useLang();
  return (
    <>
      <Helmet>
        <title>Privacy Policy · LaplandActivities</title>
        <meta name="description" content="How LaplandActivities collects, stores, and protects your data. GDPR-compliant privacy policy for the LaplandVibes ecosystem." />
        <link rel="canonical" href="https://laplandactivities.online/privacy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PrivacyContent siteName="LaplandActivities" lang={lang} />
    </>
  );
}
