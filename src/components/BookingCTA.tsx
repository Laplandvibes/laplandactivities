import { Sparkles, Hotel, Car, ArrowRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';

interface Props {
  destinationSlug?: string;
  hotelsQuery?: string;
  gygSlug?: string;
  pickupIata?: string;
  /** Optional eyebrow + heading override */
  eyebrow?: string;
  heading?: string;
  blurb?: string;
}

export default function BookingCTA({
  destinationSlug = 'lapland',
  hotelsQuery = 'Lapland, Finland',
  gygSlug = 'lappi-suomi-l2652',
  pickupIata = 'RVN',
  eyebrow = 'Plan The Whole Trip',
  heading = 'Book Activities, Stays &amp; Cars in One Place',
  blurb = 'Three taps and your Lapland trip is sorted — verified tour operators via GetYourGuide, the best lodging deals via Hotels.com, and a car waiting at the airport.',
}: Props) {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 aurora-bg overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 shimmer pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-vibe-pink text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            {eyebrow}
          </p>
          <h2
            className="font-heading text-3xl sm:text-5xl text-snow tracking-wide leading-tight mb-3"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="text-snow/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {blurb}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AffiliateCTA
            partner="activities"
            sid={`bookcta_activities_${destinationSlug}`}
            destination={gygSlug}
            className="group rounded-2xl bg-deep-night/70 hover:bg-deep-night/95 border border-vibe-pink/40 hover:border-vibe-pink p-6 backdrop-blur-sm transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-vibe-pink/15 border border-vibe-pink/30 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-vibe-pink" />
            </div>
            <p className="font-heading text-2xl text-snow tracking-wide mb-1">
              Activities
            </p>
            <p className="text-snow/65 text-sm leading-relaxed mb-4">
              Husky safaris, snowmobiles, aurora tours, ice-fishing — instant
              confirmation via GetYourGuide.
            </p>
            <span className="inline-flex items-center gap-1 text-vibe-pink text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Browse tours <ArrowRight className="w-4 h-4" />
            </span>
          </AffiliateCTA>

          <AffiliateCTA
            partner="hotels"
            sid={`bookcta_hotels_${destinationSlug}`}
            destination={hotelsQuery}
            className="group rounded-2xl bg-deep-night/70 hover:bg-deep-night/95 border border-arctic-cyan/40 hover:border-arctic-cyan p-6 backdrop-blur-sm transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-arctic-cyan/15 border border-arctic-cyan/30 flex items-center justify-center mb-3">
              <Hotel className="w-5 h-5 text-arctic-cyan" />
            </div>
            <p className="font-heading text-2xl text-snow tracking-wide mb-1">
              Stay nearby
            </p>
            <p className="text-snow/65 text-sm leading-relaxed mb-4">
              Glass igloos, log cabins, ski-in hotels — the operators we like
              keep selling out, so book the bed first.
            </p>
            <span className="inline-flex items-center gap-1 text-arctic-cyan text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Compare hotels <ArrowRight className="w-4 h-4" />
            </span>
          </AffiliateCTA>

          <AffiliateCTA
            partner="cars"
            sid={`bookcta_cars_${destinationSlug}`}
            destination={pickupIata}
            className="group rounded-2xl bg-deep-night/70 hover:bg-deep-night/95 border border-aurora-green/40 hover:border-aurora-green p-6 backdrop-blur-sm transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-aurora-green/15 border border-aurora-green/30 flex items-center justify-center mb-3">
              <Car className="w-5 h-5 text-aurora-green" />
            </div>
            <p className="font-heading text-2xl text-snow tracking-wide mb-1">
              Rent a car
            </p>
            <p className="text-snow/65 text-sm leading-relaxed mb-4">
              Compare 600+ suppliers across Rovaniemi, Kittilä, Ivalo and Kemi
              airports. Winter tires included.
            </p>
            <span className="inline-flex items-center gap-1 text-aurora-green text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Find best price <ArrowRight className="w-4 h-4" />
            </span>
          </AffiliateCTA>
        </div>

        <p className="text-center text-snow/45 text-[11px] mt-7 max-w-xl mx-auto leading-relaxed">
          ⓘ This page contains affiliate links. We may earn a commission when
          you book — at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
