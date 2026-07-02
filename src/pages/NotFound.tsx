import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function NotFound() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].notFound;

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center px-4 bg-deep-night pt-16">
        <div className="text-center max-w-lg">
          <h1 className="font-heading text-[10rem] leading-none text-vibe-pink/25 drop-shadow-[0_0_60px_rgba(236,72,153,0.4)]">404</h1>
          <h2 className="font-heading text-4xl text-snow tracking-wide mb-4">{c.h2}</h2>
          <p className="text-snow/65 mb-8">{c.body}</p>
          <Link
            to={to('/')}
            className="inline-block bg-vibe-pink hover:bg-vibe-pink/90 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            {c.backCta}
          </Link>
        </div>
      </main>
    </>
  );
}
