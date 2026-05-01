import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Plane, Mountain, Thermometer, ArrowLeft, ArrowRight, Sparkles, Hotel, Car } from 'lucide-react';
import { getDestinationBySlug, destinations } from '../data/destinations';
import { getActivitiesByDestination } from '../data/activities';
import { categories } from '../data/categories';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import AffiliateCTA from '../components/AffiliateCTA';
import { gygSlugForDestination, hotelsQueryForDestination } from '../data/affiliate';
import { imageForDestination } from '../data/images';

const localTips: Record<string, { tip: string; icon: string }[]> = {
  rovaniemi: [
    { tip: 'Book Santa Claus Village early morning to skip the cruise-coach crowds.', icon: '🎅' },
    { tip: 'The Arctic Circle crossing certificate is free at the post office.', icon: '📮' },
    { tip: 'Arktikum has the strongest aurora exhibition in Finland.', icon: '🏛️' },
  ],
  levi: [
    { tip: 'Hullu Poro is the loudest après-ski in Lapland — go on a Friday.', icon: '🍺' },
    { tip: 'Bearhill Husky books out weeks ahead in peak weeks.', icon: '🐕' },
    { tip: 'Night skiing under aurora is a Levi-only thing — dec/jan only.', icon: '⛷️' },
  ],
  yllas: [
    { tip: 'Ylläs is a certified Dark Sky area — the best aurora skies in Finland.', icon: '✨' },
    { tip: 'Äkäslompolo side is quieter; Ylläsjärvi has the bars.', icon: '🏔️' },
    { tip: 'The 330 km cross-country network is Finland\'s best, mid-Mar is sweet.', icon: '🎿' },
  ],
  saariselka: [
    { tip: 'Kiilopää smoke sauna runs year-round — book the afternoon slot.', icon: '🧖' },
    { tip: 'Tankavaara gold panning — anything you find, you keep.', icon: '🥇' },
    { tip: 'UKK National Park wilderness huts are free, first-come-first-served.', icon: '🏕️' },
  ],
  inari: [
    { tip: 'Siida museum needs three hours minimum — read the Sámi-language wing.', icon: '🏛️' },
    { tip: 'Lake Inari boat trips run only June–September.', icon: '⛵' },
    { tip: 'Cloudberry season peaks late July along the Pielpajärvi trail.', icon: '🫐' },
  ],
  ruka: [
    { tip: 'Bear-watching hides book out months ahead.', icon: '🐻' },
    { tip: 'Karhunkierros has a 12 km "Little Bear" loop for non-multi-day hikers.', icon: '🥾' },
    { tip: 'Ruka opens for skiing already in October — Finland\'s earliest.', icon: '⛷️' },
  ],
  posio: [
    { tip: 'Riisitunturi tykky-snow trees are best Jan–Mar.', icon: '🌲' },
    { tip: 'Korouoma frozen waterfalls need a 3 km forest walk to reach.', icon: '🧊' },
    { tip: 'The Pentik outlet shop runs 30–50% off all year.', icon: '🏺' },
  ],
  tornio: [
    { tip: 'Icebreaker Sampo runs Dec–Apr only — book the moment dates open.', icon: '🚢' },
    { tip: 'SnowCastle is rebuilt annually with a new theme.', icon: '🏰' },
    { tip: 'Green Zone Golf crosses the Finland-Sweden border mid-round.', icon: '⛳' },
  ],
};

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');
  const acts = getActivitiesByDestination(slug || '');

  if (!destination) {
    return (
      <main className="min-h-screen pt-24 bg-deep-night flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-snow mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-vibe-pink hover:text-vibe-pink/80">← Back to Destinations</Link>
        </div>
      </main>
    );
  }

  const gygSlug = gygSlugForDestination(slug || 'lapland');
  const hotelsQ = hotelsQueryForDestination(slug || 'lapland');
  const tips = localTips[slug || ''] || [];

  const categoryGroups = categories
    .map((cat) => ({ ...cat, activities: acts.filter((a) => a.categorySlug === cat.slug) }))
    .filter((g) => g.activities.length > 0);

  const featured = acts.find((a) => a.featured) || acts[0];
  const restActivities = acts.filter((a) => a.id !== featured?.id);
  const otherDestinations = destinations.filter((d) => d.slug !== slug).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{destination.name} Activities — LaplandActivities</title>
        <meta name="description" content={`${acts.length}+ activities in ${destination.name}, Finnish Lapland. ${destination.tagline}.`} />
        <link rel="canonical" href={`https://laplandactivities.online/destinations/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${destination.name} Activities — LaplandActivities`} />
        <meta property="og:description" content={destination.description} />
        <meta property="og:image" content={`https://laplandactivities.online${imageForDestination(slug || '')}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: destination.name,
          description: destination.description,
          url: `https://laplandactivities.online/destinations/${slug}`,
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Finnish Lapland' },
          touristType: destination.bestFor,
          image: `https://laplandactivities.online${imageForDestination(slug || '')}`,
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[68vh] min-h-[520px] flex items-end overflow-hidden pt-16 bg-deep-night">
        <img src={imageForDestination(slug || '')} alt={destination.name} className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night via-deep-night/55 to-deep-night/15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
          <Link to="/destinations" className="inline-flex items-center gap-1 text-snow/55 text-sm mb-3 hover:text-snow transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Destinations
          </Link>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl text-snow tracking-wide leading-[0.95] drop-shadow-[0_0_40px_rgba(236,72,153,0.5)]">
            {destination.name}
          </h1>
          <p className="text-arctic-cyan text-lg sm:text-xl font-medium mt-1 mb-3">{destination.tagline}</p>
          <p className="text-snow/75 max-w-2xl text-sm sm:text-base leading-relaxed">{destination.description}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <AffiliateCTA
              partner="activities"
              sid={`hero_${slug}_book`}
              destination={gygSlug}
              className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
            >
              <Sparkles className="w-4 h-4" />
              Book Activities in {destination.name}
            </AffiliateCTA>
            <AffiliateCTA
              partner="hotels"
              sid={`hero_${slug}_hotels`}
              destination={hotelsQ}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/20 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            >
              <Hotel className="w-4 h-4" />
              Stay in {destination.name}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-deep-night border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-7 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-8 justify-center">
          <div className="flex items-center gap-2 text-sm text-snow/65"><Plane className="w-4 h-4 text-vibe-pink" />{destination.access}</div>
          <div className="flex items-center gap-2 text-sm text-snow/65"><Mountain className="w-4 h-4 text-arctic-cyan" />{destination.elevation}</div>
          <div className="flex items-center gap-2 text-sm text-snow/65"><Thermometer className="w-4 h-4 text-aurora-green" />{destination.bestFor}</div>
          <div className="flex items-center gap-2 text-sm text-snow/65"><Sparkles className="w-4 h-4 text-vibe-pink" />{acts.length} activities</div>
        </div>
      </section>

      {/* Featured + tips */}
      {featured && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">Must-Do</span>
              <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide mt-1 mb-4">Most-booked experience</h2>
              <ActivityCard activity={featured} />
            </div>
            {tips.length > 0 && (
              <div className="lg:col-span-2">
                <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">Local intel</span>
                <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide mt-1 mb-4">Insider tips</h2>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-2xl shrink-0">{tip.icon}</span>
                      <p className="text-snow/80 text-sm leading-relaxed">{tip.tip}</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-snow/45 text-xs">Trusted operators in {destination.name}:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {destination.operators.map((op) => (
                        <span key={op} className="text-xs text-snow/65 font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full">{op}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* GYG widget — destination-scoped */}
      <GetYourGuideWidget
        cmpTag={`laplandactivities-dest-${slug}`}
        title={`Verified ${destination.name} tours`}
        eyebrow="Bookable now"
      />

      {/* All activities */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">All Activities</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide">{acts.length} Things to Do in {destination.name}</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categoryGroups.map((g) => (
              <Link
                key={g.slug}
                to={`/categories/${g.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-white/15 bg-white/5 text-snow/75 hover:bg-vibe-pink/15 hover:border-vibe-pink/40 hover:text-snow transition-colors"
              >
                <g.icon className="w-3.5 h-3.5" /> {g.name} ({g.activities.length})
              </Link>
            ))}
          </div>

          {restActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restActivities.map((act) => <ActivityCard key={act.id} activity={act} />)}
            </div>
          ) : (
            <p className="text-snow/55">More activities coming soon for {destination.name}.</p>
          )}
        </div>
      </section>

      {/* Stay + drive cross-sell */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <AffiliateCTA
            partner="hotels"
            sid={`crossell_${slug}_hotels`}
            destination={hotelsQ}
            className="group rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-arctic-cyan/30 hover:border-arctic-cyan p-6 sm:p-8 transition-all"
          >
            <Hotel className="w-6 h-6 text-arctic-cyan mb-3" />
            <p className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">Sleep in {destination.name}</p>
            <p className="text-snow/65 text-sm leading-relaxed mt-2 mb-4">Glass igloos, log cabins, ski-in hotels — Hotels.com aggregates the best rates across {destination.operators.length}+ properties.</p>
            <span className="inline-flex items-center gap-1 text-arctic-cyan text-sm font-semibold group-hover:translate-x-1 transition-transform">Compare hotels <ArrowRight className="w-4 h-4" /></span>
          </AffiliateCTA>
          <AffiliateCTA
            partner="cars"
            sid={`crossell_${slug}_cars`}
            destination="RVN"
            className="group rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-aurora-green/30 hover:border-aurora-green p-6 sm:p-8 transition-all"
          >
            <Car className="w-6 h-6 text-aurora-green mb-3" />
            <p className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">Drive yourself</p>
            <p className="text-snow/65 text-sm leading-relaxed mt-2 mb-4">Lapland is wide open and the rentals come with winter tires already fitted. Compare 600+ suppliers.</p>
            <span className="inline-flex items-center gap-1 text-aurora-green text-sm font-semibold group-hover:translate-x-1 transition-transform">Find best price <ArrowRight className="w-4 h-4" /></span>
          </AffiliateCTA>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">Keep Exploring</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide mt-1">Other Destinations</h2>
            </div>
            <Link to="/destinations" className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              All destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group relative rounded-xl overflow-hidden h-44 sm:h-56 border border-white/10 hover:border-vibe-pink/30 transition-all"
              >
                <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="font-heading text-lg sm:text-xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{d.name}</h3>
                  <p className="text-snow/45 text-xs line-clamp-1">{d.tagline}</p>
                  <div className="flex items-center gap-1 mt-1.5 text-arctic-cyan text-xs font-medium">
                    <MapPin className="w-3 h-3" /> {getActivitiesByDestination(d.slug).length} activities
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA destinationSlug={slug || 'lapland'} hotelsQuery={hotelsQ} gygSlug={gygSlug} />
    </>
  );
}
