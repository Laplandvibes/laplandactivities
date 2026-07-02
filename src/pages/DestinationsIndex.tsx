import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { getActivitiesByDestination } from '../data/activities';
import { imageForDestination, focalFor } from '../data/images';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeDestination } from '../locales/data';

export default function DestinationsIndex() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].destinationsIndex;
  const localized = destinations.map((d) => localizeDestination(d, lang));
  const featured = localized.slice(0, 2);
  const rest = localized.slice(2);
  const path = to('/destinations');

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.online${path}`.replace(/\/?$/, '/')} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="pt-16 pb-12 bg-deep-night min-h-screen">
        <PageBreadcrumb />
        <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.kicker}</span>
            <h1 className="font-heading text-5xl sm:text-7xl text-snow mt-2 tracking-wide">{c.h1}</h1>
            <p className="text-snow/65 mt-4 max-w-2xl mx-auto text-lg">
              {c.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featured.map((dest) => {
              const count = getActivitiesByDestination(dest.slug).length;
              return (
                <Link
                  key={dest.slug}
                  to={to(`/destinations/${dest.slug}`)}
                  className="group relative rounded-2xl overflow-hidden h-80 sm:h-96 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
                >
                  <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForDestination(dest.slug)) }} loading="lazy"  decoding="async" width="1920" height="1080" fetchPriority="high"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-snow/80 text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" /> {dest.access}
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h2>
                    <p className="text-arctic-cyan text-sm font-medium mb-2">{dest.tagline}</p>
                    <p className="text-snow/65 text-sm leading-relaxed mb-3 line-clamp-2 hidden sm:block">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-snow/75">{count} {c.activitiesLabel}</span>
                      <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {c.explore} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((dest) => {
              const count = getActivitiesByDestination(dest.slug).length;
              return (
                <Link
                  key={dest.slug}
                  to={to(`/destinations/${dest.slug}`)}
                  className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 border border-white/10 hover:border-vibe-pink/30 transition-all"
                >
                  <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForDestination(dest.slug)) }} loading="lazy"  decoding="async" width="800" height="600"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1 text-snow/75 text-xs mb-1">
                      <MapPin className="w-3 h-3" /> {dest.access.split('(')[0].trim()}
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h2>
                    <p className="text-arctic-cyan text-xs font-medium mb-2">{dest.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-snow/75">{count} {c.activitiesLabel}</span>
                      <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {c.explore} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <GetYourGuideWidget cmpTag="laplandactivities-destinations-auto" title={c.gygTitle} eyebrow={c.gygEyebrow} />
      <BookingCTA />
    </>
  );
}
