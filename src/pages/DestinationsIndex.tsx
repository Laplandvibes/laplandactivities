import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { getActivitiesByDestination } from '../data/activities';
import { imageForDestination } from '../data/images';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';

export default function DestinationsIndex() {
  const featured = destinations.slice(0, 2);
  const rest = destinations.slice(2);

  return (
    <>
      <Helmet>
        <title>{destinations.length} Lapland Destinations — LaplandActivities</title>
        <meta name="description" content="Explore eight iconic Finnish Lapland destinations: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio and Tornio. Activities, operators and lodging." />
        <link rel="canonical" href="https://laplandactivities.online/destinations" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="pt-24 pb-12 bg-deep-night min-h-screen">
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">Where to Go</span>
            <h1 className="font-heading text-5xl sm:text-7xl text-snow mt-2 tracking-wide">Destinations</h1>
            <p className="text-snow/65 mt-4 max-w-2xl mx-auto text-lg">
              {destinations.length} iconic Lapland destinations, each with its own character and operator network.
            </p>
          </div>

          {/* Featured 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featured.map((dest) => {
              const count = getActivitiesByDestination(dest.slug).length;
              return (
                <Link
                  key={dest.slug}
                  to={`/destinations/${dest.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-80 sm:h-96 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
                >
                  <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-snow/55 text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" /> {dest.access}
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h2>
                    <p className="text-arctic-cyan text-sm font-medium mb-2">{dest.tagline}</p>
                    <p className="text-snow/65 text-sm leading-relaxed mb-3 line-clamp-2 hidden sm:block">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-snow/45">{count} activities</span>
                      <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Rest 6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((dest) => {
              const count = getActivitiesByDestination(dest.slug).length;
              return (
                <Link
                  key={dest.slug}
                  to={`/destinations/${dest.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 border border-white/10 hover:border-vibe-pink/30 transition-all"
                >
                  <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1 text-snow/50 text-xs mb-1">
                      <MapPin className="w-3 h-3" /> {dest.access.split('(')[0].trim()}
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h2>
                    <p className="text-arctic-cyan text-xs font-medium mb-2">{dest.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-snow/45">{count} activities</span>
                      <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <GetYourGuideWidget cmpTag="laplandactivities-destinations-auto" title="Most-booked Lapland tours" eyebrow="Across all destinations" />
      <BookingCTA />
    </>
  );
}
