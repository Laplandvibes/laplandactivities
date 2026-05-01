import { ChevronDown, Sparkles, Hotel, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import AffiliateCTA from './AffiliateCTA';
import HeroSlider from './HeroSlider';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-deep-night">
      <HeroSlider />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-night/65 via-deep-night/55 to-deep-night/95 pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <p className="font-body text-snow/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">
          Finnish Lapland · Aurora to midnight sun
        </p>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-wider mb-4 leading-[0.95] drop-shadow-[0_0_40px_rgba(236,72,153,0.55)]">
          <span className="text-vibe-pink">#</span>
          <span className="text-snow">LAPLAND</span>
          <span className="text-vibe-pink">ACTIVITIES</span>
        </h1>

        <p className="text-snow/80 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Snowmobile safaris, husky sledding, aurora hunts, smoke saunas, river
          rafting under the midnight sun. Book directly from verified operators
          across Rovaniemi, Levi, Ylläs, Saariselkä and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-10 max-w-2xl mx-auto">
          <AffiliateCTA
            partner="activities"
            sid="hero_book_lapland"
            destination="lappi-suomi-l2652"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-vibe-pink/30"
          >
            <Sparkles className="w-5 h-5" />
            Book Activities Now
          </AffiliateCTA>
          <Link
            to="/destinations"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/25 px-8 py-4 rounded-full text-base font-semibold transition-all"
          >
            Browse Destinations
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
          <AffiliateCTA
            partner="hotels"
            sid="hero_strip_hotels"
            destination="Lapland, Finland"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors"
          >
            <Hotel className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">Stay nearby</p>
            <p className="text-snow/60 text-xs">Hotels.com — best rates</p>
          </AffiliateCTA>
          <AffiliateCTA
            partner="cars"
            sid="hero_strip_cars"
            destination="RVN"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors"
          >
            <Car className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">Rent a car</p>
            <p className="text-snow/60 text-xs">From Rovaniemi airport</p>
          </AffiliateCTA>
          <AffiliateCTA
            partner="activities"
            sid="hero_strip_aurora"
            destination="lappi-suomi-l2652"
            query={{ q: 'aurora' }}
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors col-span-2 sm:col-span-1"
          >
            <Sparkles className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">Aurora tours</p>
            <p className="text-snow/60 text-xs">Verified operators</p>
          </AffiliateCTA>
          <Link
            to="/categories"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors col-span-2 sm:col-span-1"
          >
            <ChevronDown className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">All categories</p>
            <p className="text-snow/60 text-xs">8 ways to experience the Arctic</p>
          </Link>
        </div>

        <a
          href="#categories"
          className="text-snow/40 hover:text-snow/70 transition-colors inline-block"
          aria-label="Scroll to categories"
        >
          <ChevronDown className="w-7 h-7 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
