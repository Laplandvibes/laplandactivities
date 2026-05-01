import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { getCategoryBySlug, categories } from '../data/categories';
import { getActivitiesByCategory } from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import BookingCTA from '../components/BookingCTA';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import AffiliateCTA from '../components/AffiliateCTA';
import { gygSlugForCategory } from '../data/affiliate';
import { imageForCategory } from '../data/images';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  const acts = getActivitiesByCategory(slug || '');

  if (!category) {
    return (
      <main className="min-h-screen pt-24 bg-deep-night flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-snow mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-vibe-pink hover:text-vibe-pink/80">← Back to Categories</Link>
        </div>
      </main>
    );
  }

  const gygSlug = gygSlugForCategory(slug || 'adventure');

  return (
    <>
      <Helmet>
        <title>{category.name} in Lapland — LaplandActivities</title>
        <meta name="description" content={`${category.description} Book ${acts.length}+ ${category.name.toLowerCase()} activities across Finnish Lapland.`} />
        <link rel="canonical" href={`https://laplandactivities.online/categories/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${category.name} in Finnish Lapland`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:image" content={`https://laplandactivities.online${imageForCategory(slug || '')}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${category.name} in Finnish Lapland`,
          description: category.description,
          mainEntityOfPage: `https://laplandactivities.online/categories/${slug}`,
          image: `https://laplandactivities.online${imageForCategory(slug || '')}`,
          author: { '@type': 'Organization', name: 'LaplandActivities' },
          publisher: { '@type': 'Organization', name: 'LaplandVibes', logo: { '@type': 'ImageObject', url: 'https://laplandactivities.online/favicon.svg' } },
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[460px] flex items-end overflow-hidden pt-16 bg-deep-night">
        <img src={imageForCategory(slug || '')} alt={category.name} className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night via-deep-night/55 to-deep-night/15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
          <Link to="/categories" className="inline-flex items-center gap-1 text-snow/55 text-sm mb-3 hover:text-snow transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Categories
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-vibe-pink/15 border border-vibe-pink/40 flex items-center justify-center">
              <category.icon className="w-6 h-6 text-vibe-pink" />
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl text-snow tracking-wide drop-shadow-[0_0_40px_rgba(236,72,153,0.5)]">{category.name}</h1>
          </div>
          <p className="text-snow/75 max-w-2xl text-sm sm:text-base leading-relaxed mb-6">{category.description}</p>

          <AffiliateCTA
            partner="activities"
            sid={`hero_cat_${slug}_book`}
            destination={gygSlug}
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/30"
          >
            <Sparkles className="w-4 h-4" />
            Book {category.name} tours
          </AffiliateCTA>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide">{acts.length} {category.name} Activities</h2>
          </div>

          {acts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acts.map((act) => <ActivityCard key={act.id} activity={act} />)}
            </div>
          ) : (
            <p className="text-snow/55">Activities coming soon for this category.</p>
          )}
        </div>
      </section>

      <GetYourGuideWidget
        cmpTag={`laplandactivities-cat-${slug}`}
        title={`Most-booked ${category.name.toLowerCase()} tours`}
        eyebrow="Verified operators"
      />

      {/* Other categories */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-snow tracking-wide">Browse other categories</h2>
            <Link to="/categories" className="text-vibe-pink text-sm font-semibold">All categories →</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.filter((c) => c.slug !== slug).map((cat) => (
              <Link
                key={cat.slug}
                to={`/categories/${cat.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm text-snow/75 font-medium hover:border-vibe-pink/50 hover:text-snow transition-colors"
              >
                <cat.icon className="w-4 h-4 text-vibe-pink" />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA gygSlug={gygSlug} />
    </>
  );
}
