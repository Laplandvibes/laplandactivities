import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Activity } from '../data/activities';
import { isBookable, gygQueryForActivity } from '../data/activities';
import { imageForActivity } from '../data/images';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeActivity, localizeDestination } from '../locales/data';
import { getDestinationBySlug } from '../data/destinations';

export default function ActivityCard({ activity: rawActivity, image }: { activity: Activity; image?: string }) {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].activityCard;
  const activity = localizeActivity(rawActivity, lang);
  const rawDest = getDestinationBySlug(rawActivity.destinationSlug);
  const destName = rawDest ? localizeDestination(rawDest, lang).name : rawActivity.destination;
  const img = image ?? imageForActivity(rawActivity);
  const bookable = isBookable(rawActivity);
  const gygQ = gygQueryForActivity(rawActivity);
  const sid = `card_${rawActivity.id}`.slice(0, 50).replace(/-/g, '_');

  return (
    <div className="group bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-vibe-pink/10 flex flex-col">
      <div className="h-52 relative overflow-hidden">
        <img
          src={img}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
         decoding="async" width="800" height="600"/>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night/85 via-deep-night/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Link
            to={to(`/destinations/${activity.destinationSlug}`)}
            className="bg-deep-night/70 backdrop-blur-sm text-snow text-[11px] px-2.5 py-1 rounded-full inline-flex items-center gap-1 hover:bg-deep-night/90 transition-colors border border-white/15"
          >
            <MapPin className="w-3 h-3" /> {destName}
          </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <Link
          to={to(`/categories/${activity.categorySlug}`)}
          className="text-[11px] text-arctic-cyan font-semibold tracking-wide uppercase mb-1 block hover:text-arctic-cyan/80 transition-colors"
        >
          {activity.category}
        </Link>
        <h3 className="font-body text-[17px] font-bold text-snow mb-2 group-hover:text-vibe-pink transition-colors leading-snug tracking-tight">
          {activity.title}
        </h3>
        <p className="text-snow/80 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
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

        {bookable ? (
          <AffiliateCTA
            partner="activities-search"
            sid={sid}
            destination={gygQ}
            className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/20"
          >
            {c.findBook} <ExternalLink className="w-3.5 h-3.5" />
          </AffiliateCTA>
        ) : (
          <Link
            to={to(`/destinations/${activity.destinationSlug}`)}
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 text-snow border border-white/20 hover:border-vibe-pink/40 px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
          >
            {c.planVisit} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
