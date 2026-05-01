import { Helmet } from 'react-helmet-async';
import TermsContent from '../../../../shared/Legal/TermsContent';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — LaplandActivities</title>
        <meta name="description" content="Terms of use for LaplandActivities — the activity guide for Finnish Lapland. Editorial standards, affiliate disclosure, liability." />
        <link rel="canonical" href="https://laplandactivities.online/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <TermsContent siteName="LaplandActivities" siteUrl="laplandactivities.online" />
    </>
  );
}
