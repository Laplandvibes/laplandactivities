import {
  Dog, Fish, Flame, Mountain, Snowflake, Sparkles, Waves, Landmark, Gauge,
  Footprints, Compass,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Ikoni GetYourGuide-tuotekortille tuotteen nimen perusteella. Yksi sääntö, jotta etusivun
 * poiminnat (GygPicks) ja kohdesivujen karusellit (DestinationPicks) näyttävät samalta.
 *
 * Järjestys ratkaisee: tarkempi osuma ensin. "Aurora Hunting Photography Tour" saa revontulet,
 * ei kameraa; "Snowmobile Safari" saa kelkan, ei yleistä safaria.
 */
const ICONS: Array<[RegExp, LucideIcon]> = [
  [/husky|sled dog|dog sled/i, Dog],
  [/aurora|northern lights/i, Sparkles],
  [/reindeer/i, Compass],
  [/snowmobile|karting/i, Gauge],
  [/sauna|smoke|floating/i, Flame],
  [/fish/i, Fish],
  [/ski|cross-country|snowshoe/i, Snowflake],
  [/canoe|kayak|boating|cruise|water|icebreaker/i, Waves],
  [/hike|hiking|trail|forest|treasures|wilderness/i, Mountain],
  [/museum|siida|village/i, Landmark],
  [/horse|riding/i, Footprints],
];

export function pickIcon(title: string): LucideIcon {
  for (const [re, Icon] of ICONS) if (re.test(title)) return Icon;
  return Compass;
}
