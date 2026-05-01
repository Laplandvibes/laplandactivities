import { Helmet } from 'react-helmet-async';
import PrivacyContent from '../../../../shared/Legal/PrivacyContent';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — LaplandActivities</title>
        <meta name="description" content="How LaplandActivities collects, stores, and protects your data. GDPR-compliant privacy policy for the LaplandVibes ecosystem." />
        <link rel="canonical" href="https://laplandactivities.online/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PrivacyContent siteName="LaplandActivities" />
    </>
  );
}
