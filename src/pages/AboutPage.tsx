import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mountain, Heart, Shield, Globe } from 'lucide-react';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

const ICONS = [Mountain, Heart, Shield, Globe];

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
      </Helmet>

      <main className="pt-16 pb-20 bg-deep-night min-h-screen">
        <PageBreadcrumb />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
          <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase mb-3">{c.eyebrow}</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-snow tracking-wide mb-8">{c.h1}</h1>

          <div className="prose-lg max-w-none text-snow/75 space-y-5">
            <p className="text-lg leading-relaxed">{c.para1}</p>
            <p className="text-lg leading-relaxed">{c.para2}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 mb-12">
            {c.pillars.map((item, i) => {
              const Icon = ICONS[i] ?? Mountain;
              return (
                <div key={item.title} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                  <Icon className="w-7 h-7 text-vibe-pink mb-3" />
                  <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{item.title}</h3>
                  <p className="text-snow/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">{c.affiliateH2}</h2>
          <p className="text-snow/65 text-sm leading-relaxed mb-8">
            {c.affiliateBody1}{' '}
            <Link to={to('/terms')} className="text-vibe-pink hover:underline">{c.termsLink}</Link>{c.affiliateBody2}
          </p>

          <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">{c.contactH2}</h2>
          <p className="text-snow/65 text-sm leading-relaxed">
            {c.contactBody1}
            <a href="mailto:info@laplandactivities.fi" className="text-arctic-cyan hover:underline">info@laplandactivities.fi</a>
            {c.contactBody2}{' '}
            <a href="mailto:sales@laplandactivities.fi" className="text-arctic-cyan hover:underline">sales@laplandactivities.fi</a>.
          </p>

          <div className="mt-12">
            <Link to={to('/')} className="text-vibe-pink hover:text-pink-300 font-semibold">{c.backHome}</Link>
          </div>
        </div>
      </main>
    </>
  );
}
