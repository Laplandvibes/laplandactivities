import { Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Activity } from '../data/activities';
import { imageForActivity } from '../data/images';
import { gygSlugForDestination } from '../data/affiliate';
import AffiliateCTA from './AffiliateCTA';

const difficultyChip: Record<Activity['difficulty'], string> = {
  Easy:        'bg-aurora-green/15 text-aurora-green border-aurora-green/30',
  Moderate:    'bg-arctic-cyan/15 text-arctic-cyan border-arctic-cyan/30',
  Challenging: 'bg-vibe-pink/15 text-vibe-pink border-vibe-pink/30',
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  const img = imageForActivity(activity);
  const gygSlug = gygSlugForDestination(activity.destinationSlug);
  const sid = `card_${activity.id}`.slice(0, 50).replace(/-/g, '_');

  return (
    <div className="group bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-vibe-pink/10 flex flex-col">
      <div className="h-52 relative overflow-hidden">
        <img
          src={img}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night/85 via-deep-night/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Link
            to={`/destinations/${activity.destinationSlug}`}
            className="bg-deep-night/70 backdrop-blur-sm text-snow text-[11px] px-2.5 py-1 rounded-full inline-flex items-center gap-1 hover:bg-deep-night/90 transition-colors border border-white/15"
          >
            <MapPin className="w-3 h-3" /> {activity.destination}
          </Link>
          <span className={`text-[11px] px-2.5 py-1 rounded-full border ${difficultyChip[activity.difficulty]}`}>
            {activity.difficulty}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <Link
          to={`/categories/${activity.categorySlug}`}
          className="text-[11px] text-arctic-cyan font-semibold tracking-wide uppercase mb-1 block hover:text-arctic-cyan/80 transition-colors"
        >
          {activity.category}
        </Link>
        <h3 className="font-heading text-xl text-snow tracking-wide mb-2 group-hover:text-vibe-pink transition-colors leading-tight">
          {activity.title}
        </h3>
        <p className="text-snow/60 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {activity.description}
        </p>

        {activity.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {activity.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-snow/65"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-snow/50 text-xs mb-4">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {activity.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {activity.groupSize}
          </span>
          <span className="text-snow/40">{activity.operator}</span>
        </div>

        <AffiliateCTA
          partner="activities"
          sid={sid}
          destination={gygSlug}
          query={{ q: activity.title }}
          className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/20"
        >
          Find &amp; Book <ExternalLink className="w-3.5 h-3.5" />
        </AffiliateCTA>
      </div>
    </div>
  );
}
