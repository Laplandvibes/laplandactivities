import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — LaplandActivities</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center px-4 bg-deep-night pt-16">
        <div className="text-center max-w-lg">
          <h1 className="font-heading text-[10rem] leading-none text-vibe-pink/25 drop-shadow-[0_0_60px_rgba(236,72,153,0.4)]">404</h1>
          <h2 className="font-heading text-4xl text-snow tracking-wide mb-4">Lost in the Arctic?</h2>
          <p className="text-snow/65 mb-8">This page does not exist. Maybe the aurora moved it.</p>
          <Link
            to="/"
            className="inline-block bg-vibe-pink hover:bg-vibe-pink/90 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
