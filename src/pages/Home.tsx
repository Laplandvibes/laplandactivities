import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Leaf, Sun, Trees, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import Newsletter from '../components/Newsletter';
import AffiliateCTA from '../components/AffiliateCTA';
import SummerBand from '../components/SummerBand';
import HotelsStrip from '../components/HotelsStrip';
import { categories } from '../data/categories';
import { destinations } from '../data/destinations';
import { activities, getFeaturedActivities, getActivitiesByCategory, getActivitiesByDestination } from '../data/activities';
import { imageForActivity, imageForCategory, imageForDestination } from '../data/images';
import { gygSlugForCategory, hotelsQueryForDestination } from '../data/affiliate';

const seasons = [
  { name: 'Winter',  months: 'Nov – Mar', icon: Snowflake, accent: 'arctic-cyan',
    blurb: 'Deep snow, polar nights, peak aurora. Snowmobiles, huskies, smoke saunas.', temp: '-15 to -5°C' },
  { name: 'Spring',  months: 'Apr – May', icon: Trees,     accent: 'aurora-green',
    blurb: 'Snow plus daylight. Late-season skiing, reindeer calving, aurora to mid-April.', temp: '-5 to +5°C' },
  { name: 'Summer',  months: 'Jun – Aug', icon: Sun,       accent: 'vibe-pink',
    blurb: 'Midnight sun never sets. Hiking, kayaking, salmon fishing, mountain biking.', temp: '+10 to +25°C' },
  { name: 'Autumn',  months: 'Sep – Oct', icon: Leaf,      accent: 'vibe-pink',
    blurb: 'Ruska colours the fells. First aurora returns. Mushroom and berry season.', temp: '+5 to -5°C' },
];

export default function Home() {
  const featured = getFeaturedActivities();
  const totalActivities = activities.length;
  const totalDestinations = destinations.length;

  return (
    <>
      <Helmet>
        <title>LaplandActivities — Book Verified Arctic Tours in Finnish Lapland</title>
        <meta name="description" content="Snowmobile safaris, husky sledding, aurora hunts, smoke saunas and more. Book verified activities across 8 Lapland destinations through GetYourGuide and trusted local operators." />
        <link rel="canonical" href="https://laplandactivities.online" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="LaplandActivities — Verified Arctic Experiences" />
        <meta property="og:description" content={`${totalActivities}+ Lapland tours across ${totalDestinations} destinations. Aurora to midnight sun.`} />
        <meta property="og:url" content="https://laplandactivities.online/" />
        <meta property="og:image" content="https://laplandactivities.online/og-default.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://laplandactivities.online/#org',
              name: 'LaplandActivities',
              url: 'https://laplandactivities.online',
              logo: 'https://laplandactivities.online/favicon.svg',
              parentOrganization: { '@type': 'Organization', name: 'LaplandVibes', url: 'https://laplandvibes.com' },
              sameAs: [
                'https://youtube.com/@laplandvibes',
                'https://facebook.com/laplandvibes',
                'https://instagram.com/laplandvibesofficial',
                'https://tiktok.com/@laplandvibesofficial',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://laplandactivities.online/#site',
              url: 'https://laplandactivities.online',
              name: 'LaplandActivities',
              inLanguage: 'en',
              publisher: { '@id': 'https://laplandactivities.online/#org' },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'When is the best time to visit Lapland for activities?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Late November to early April for snow activities and northern lights. June to August for hiking and the midnight sun. Reindeer and ice activities run only December to March.' } },
                { '@type': 'Question', name: 'How do I book activities through LaplandActivities?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Every "Find & Book" button routes through our partner GetYourGuide for verified operators with instant confirmation, free cancellation up to 24h on most tours.' } },
                { '@type': 'Question', name: 'Which Lapland city is best for first-time visitors?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Rovaniemi — direct flights from Helsinki, the largest range of activities, Santa Claus Village, and the official Arctic Circle marker.' } },
              ],
            },
          ],
        })}</script>
      </Helmet>

      <Hero />

      {/* SUMMER PUSH — booking window opening, prioritise above categories */}
      <SummerBand />

      {/* CATEGORIES bento */}
      <section id="categories" className="py-16 sm:py-24 px-4 bg-deep-night">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">What to Do</span>
            <h2 className="font-heading text-4xl sm:text-6xl text-snow mt-2 tracking-wide">Choose Your Adventure</h2>
            <p className="text-snow/65 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Eight ways to experience the Arctic — pick a category and we will route you to the verified tour operators.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat, i) => {
              const isBig = i === 0 || i === 5;
              const count = getActivitiesByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className={`group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all border border-white/10 hover:border-vibe-pink/30 ${
                    isBig ? 'col-span-2 row-span-2 h-64 sm:h-96' : 'h-40 sm:h-[calc(12rem-0.5rem)]'
                  }`}
                >
                  <img
                    src={imageForCategory(cat.slug)}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className={`font-heading text-snow tracking-wide group-hover:text-vibe-pink transition-colors ${
                      isBig ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'
                    }`}>{cat.name}</h3>
                    <p className="text-snow/55 text-xs mt-1">{count} activities</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/categories" className="inline-flex items-center gap-2 text-vibe-pink hover:text-vibe-pink/80 font-semibold transition-colors">
              View all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GYG widget — auto, Lapland-wide */}
      <GetYourGuideWidget
        cmpTag="laplandactivities-home-auto"
        title="Top-rated Lapland tours this week"
        eyebrow="Bookable now"
        numberOfItems={3}
      />

      {/* FEATURED experiences */}
      <section id="experiences" className="py-16 sm:py-24 px-4 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-arctic-cyan text-xs font-semibold tracking-[0.25em] uppercase">Handpicked</span>
              <h2 className="font-heading text-3xl sm:text-5xl text-snow mt-1 tracking-wide">Top Experiences</h2>
            </div>
            <AffiliateCTA
              partner="activities"
              sid="featured_browse_all"
              destination="lappi-suomi-l2652"
              className="inline-flex items-center gap-2 text-vibe-pink hover:text-vibe-pink/80 text-sm font-semibold"
            >
              See all bookable tours <ArrowRight className="w-4 h-4" />
            </AffiliateCTA>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((act) => <ActivityCard key={act.id} activity={act} />)}
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section id="seasons" className="py-16 sm:py-24 px-4 aurora-bg relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 shimmer pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">Year-Round</span>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-snow mt-2 tracking-wide">Four Seasons of Adventure</h2>
            <p className="text-snow/65 mt-3 max-w-xl mx-auto">Each season changes Lapland into a different country.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((s) => (
              <div key={s.name} className="bg-deep-night/55 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <s.icon className={`w-5 h-5 text-${s.accent}`} />
                  <h3 className="font-heading text-2xl text-snow tracking-wide">{s.name}</h3>
                </div>
                <p className="text-snow/55 text-xs mb-2">{s.months} · {s.temp}</p>
                <p className="text-snow/75 text-sm leading-relaxed">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="py-16 sm:py-24 px-4 bg-deep-night">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">Where to Go</span>
              <h2 className="font-heading text-3xl sm:text-5xl text-snow mt-1 tracking-wide">{totalDestinations} Destinations</h2>
            </div>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-vibe-pink hover:text-vibe-pink/80 text-sm font-semibold">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Top 2 big */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {destinations.slice(0, 2).map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
              >
                <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-heading text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h3>
                  <p className="text-arctic-cyan text-xs font-medium mt-0.5">{dest.tagline}</p>
                  <div className="flex items-center justify-between mt-3 text-snow/55 text-xs">
                    <span>{getActivitiesByDestination(dest.slug).length} activities</span>
                    <Sparkles className="w-3.5 h-3.5 text-vibe-pink" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom 6 smaller */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {destinations.slice(2).map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative rounded-xl overflow-hidden h-44 sm:h-52 border border-white/10 hover:border-vibe-pink/30 transition-all"
              >
                <img src={imageForDestination(dest.slug)} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/90 via-deep-night/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-heading text-base sm:text-lg text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{dest.name}</h3>
                  <p className="text-snow/45 text-[10px] line-clamp-1">{dest.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HotelsStrip />

      <BookingCTA
        destinationSlug="lapland"
        hotelsQuery={hotelsQueryForDestination('lapland')}
        gygSlug={gygSlugForCategory('adventure')}
        pickupIata="RVN"
      />

      <Newsletter />

      {/* tiny tail decoration to keep image var used */}
      <div hidden aria-hidden="true">{imageForActivity('decor')}</div>
    </>
  );
}
