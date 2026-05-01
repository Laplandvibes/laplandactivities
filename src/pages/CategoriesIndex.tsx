import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { getActivitiesByCategory } from '../data/activities';
import { imageForCategory } from '../data/images';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import BookingCTA from '../components/BookingCTA';

export default function CategoriesIndex() {
  const hero = categories[0];
  const heroCount = getActivitiesByCategory(hero.slug).length;

  return (
    <>
      <Helmet>
        <title>Activity Categories — LaplandActivities</title>
        <meta name="description" content="Browse Arctic activities by category — adventure, animal experiences, northern lights, winter sports, wellness, culture, summer adventures and food experiences." />
        <link rel="canonical" href="https://laplandactivities.online/categories" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="pt-24 pb-12 bg-deep-night min-h-screen">
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">What to Do</span>
            <h1 className="font-heading text-5xl sm:text-7xl text-snow mt-2 tracking-wide">Activity Categories</h1>
            <p className="text-snow/65 mt-4 max-w-2xl mx-auto text-lg">Eight ways to experience the Arctic — pick a thread and we will route you to verified operators.</p>
          </div>

          <Link
            to={`/categories/${hero.slug}`}
            className="group relative block rounded-2xl overflow-hidden h-72 sm:h-96 mb-6 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
          >
            <img src={imageForCategory(hero.slug)} alt={hero.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-night/95 via-deep-night/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-xl">
              <h2 className="font-heading text-4xl sm:text-5xl text-snow tracking-wide mb-2 group-hover:text-vibe-pink transition-colors">{hero.name}</h2>
              <p className="text-snow/65 text-sm sm:text-base leading-relaxed mb-3">{hero.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-snow/45">{heroCount} activities</span>
                <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Explore Adventures <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((cat) => {
              const count = getActivitiesByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
                >
                  <img src={imageForCategory(cat.slug)} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-heading text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{cat.name}</h2>
                    <p className="text-snow/55 text-sm leading-relaxed mb-3 line-clamp-2 mt-1">{cat.description}</p>
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

      <GetYourGuideWidget cmpTag="laplandactivities-categories-auto" title="Browse the most-booked tours" eyebrow="Across all categories" />
      <BookingCTA />
    </>
  );
}
