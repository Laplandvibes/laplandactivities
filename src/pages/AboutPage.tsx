import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Mail } from 'lucide-react';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { PhotoCreditList } from '../components/PhotoCredit';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * Tietoja-sivu uusiksi 19.9.2026. Vesa: "tämä sivuhan on käytännössä ihan turha ja
 * geneerinen, ihan kuin sitä ei olisi koskaan tehtykään." Vanha sivu kertoi neljä
 * abstraktia lupausta ilman yhtään tarkistettavaa faktaa. Uusi sivu vastaa neljään
 * kysymykseen, jotka lukija ja kumppani oikeasti kysyvät: kuka, miten valitaan,
 * mistä raha tulee, mitä emme tee. Yritystiedot (LaPeso Oy, Y-tunnus 3309136-7)
 * näkyvät, ja perustajan oma valokuva on aito (public/vesa-pesola-2026.webp; 19.9.2026 LinkedIn-kuva,
 * tiedostonimi vaihdettiin koska sama nimi jäi selainten välimuistiin).
 * Copy 12 kielellä copy.<lang>.ts `about`.
 */
export default function AboutPage() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].about;
  const path = to('/about');

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.fi${path}`.replace(/\/?$/, '/')} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: c.h1,
          url: `https://laplandactivities.fi${path}`.replace(/\/?$/, '/'),
          inLanguage: lang,
          mainEntity: {
            '@type': 'Organization',
            name: 'LaplandActivities',
            legalName: 'LaPeso Oy',
            url: 'https://laplandactivities.fi',
            email: 'info@laplandvibes.com',
            founder: { '@type': 'Person', name: 'Vesa Pesola' },
            address: { '@type': 'PostalAddress', addressCountry: 'FI' },
            identifier: { '@type': 'PropertyValue', propertyID: 'Y-tunnus', value: '3309136-7' },
            parentOrganization: { '@type': 'Organization', name: 'LaplandVibes', url: 'https://laplandvibes.com' },
          },
        })}</script>
      </Helmet>

      <main className="pt-16 pb-20 bg-deep-night min-h-screen">
        <PageBreadcrumb />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
          <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase mb-3">{c.eyebrow}</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-snow tracking-wide mb-5">{c.h1}</h1>
          <p className="text-snow/80 text-lg leading-relaxed mb-10">{c.lead}</p>

          {/* Kuka: aito valokuva perustajasta, ei kuvituskuvaa. */}
          <section className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] gap-6 items-start mb-12">
            <img
              src="/vesa-pesola-2026.webp"
              alt="Vesa Pesola"
              width={480}
              height={480}
              loading="eager"
              decoding="async"
              className="w-40 h-40 rounded-2xl object-cover border border-white/10 shadow-lg shadow-black/30"
            />
            <div>
              <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">{c.whoH2}</h2>
              <p className="text-snow/80 leading-relaxed">{c.whoBody}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-3xl text-snow tracking-wide mb-4">{c.howH2}</h2>
            <ul className="space-y-3">
              {c.howItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-snow/80 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-aurora-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 rounded-2xl border border-vibe-pink/25 bg-vibe-pink/5 p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">{c.earnH2}</h2>
            <p className="text-snow/80 leading-relaxed">{c.earnBody}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-heading text-3xl text-snow tracking-wide mb-4">{c.notH2}</h2>
            <ul className="space-y-3">
              {c.notItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-snow/80 leading-relaxed">
                  <XCircle className="w-5 h-5 text-snow/40 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-heading text-2xl text-snow tracking-wide mb-4">{c.factsH2}</h2>
              <dl className="space-y-2 text-sm">
                {c.facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <dt className="text-snow/60">{f.label}</dt>
                    <dd className="text-snow font-medium text-right">
                      {f.value.includes('@') ? <a href={`mailto:${f.value}`} className="text-arctic-cyan hover:underline">{f.value}</a> : f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-heading text-2xl text-snow tracking-wide mb-3">{c.contactH2}</h2>
              <p className="text-snow/75 text-sm leading-relaxed mb-4">{c.contactBody}</p>
              <a href="mailto:info@laplandvibes.com" className="lv-tap inline-flex items-center gap-2 rounded-full bg-[#DB2777] hover:bg-[#BE185D] text-white px-5 py-2.5 text-sm font-semibold transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" /> info@laplandvibes.com
              </a>
            </div>
          </section>

          <p className="text-snow/65 text-sm leading-relaxed">
            {c.termsLead}{' '}
            <Link to={to('/terms')} className="text-vibe-pink hover:underline">{c.termsLink}</Link>{c.termsAfter}
          </p>

          <PhotoCreditList />

          <div className="mt-12">
            <Link to={to('/')} className="lv-tap text-vibe-pink hover:text-pink-300 font-semibold">{c.backHome}</Link>
          </div>
        </div>
      </main>
    </>
  );
}
