import {
  Dog, Fish, Flame, Mountain, Snowflake, Sparkles, Waves, Landmark, Gauge,
  Footprints, Compass, ExternalLink,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { gygHref } from '../shared/gyg/picks';
import type { GygPick } from '../shared/gyg/picks';
import { picksForDestination } from '../data/destinationPicks';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * Kohdesivun "meidän poimintamme" — 4 valmiiksi valittua, syvälinkitettyä
 * GetYourGuide-tuotetta per paikkakunta (Vesa 2026-09-20: *"esim 4 kohdetta joka
 * paikkakuntasivulla mitä siellä voi tehdä, meidän poiminnat niin sanotusti?
 * saadaan eloa?"*).
 *
 * Rivit ja niiden tarkistus: `src/data/destinationPicks.ts`. Paikkakunta, jolla ei
 * ole vähintään kolmea elävää tuotetta, ei saa karusellia lainkaan.
 *
 * 🔴 Ei valokuvia. Tuotekortti on lupaus yhdestä nimetystä tuotteesta, joten sen
 * kuvaksi ei kelpaa yleiskuva samasta lajista (lv_permanent_rules §24) eikä
 * tekoälykuva. Ilme tulee vaaleasta paperikortista ja ikonista — sama kieli kuin
 * etusivun vuodenaikakorteissa.
 *
 * 🔴 Hintoja EI renderöidä täällä: heinäkuun katalogin hinnat ovat vanhentuneet
 * ja ajantasainen hinta näkyy kumppanin sivulla. Päivätön kumppanihinta on lupaus,
 * jota emme voi pitää.
 *
 * Mobiilissa vaakavieritys (karuselli), sm+ ruudukko. Jokaisella kortilla oma sid,
 * joten klikit erottuvat Workerin D1-lokissa kortti kortilta.
 */
const ICONS: Array<[RegExp, LucideIcon]> = [
  [/husky|sled dog|dog sled/i, Dog],
  [/reindeer/i, Compass],
  [/snowmobile|safari/i, Gauge],
  [/karting/i, Gauge],
  [/sauna|smoke/i, Flame],
  [/fish/i, Fish],
  [/ski|cross-country/i, Snowflake],
  [/canoe|kayak|boating|cruise|water/i, Waves],
  [/snowshoe|hike|hiking|trail|forest|treasures/i, Mountain],
  [/aurora|northern lights/i, Sparkles],
  [/museum|siida|village/i, Landmark],
  [/horse|riding/i, Footprints],
];
function iconFor(title: string): LucideIcon {
  for (const [re, Icon] of ICONS) if (re.test(title)) return Icon;
  return Compass;
}

export default function DestinationPicks({ slug }: { slug: string }) {
  const lang = useLang();
  const c = COPY[lang].destPicks;
  const rows: GygPick[] | null = picksForDestination(slug);
  if (!rows) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-7 sm:mb-9">
          <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.kicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mt-1">{c.h2}</h2>
          <p className="text-snow/70 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">{c.lede}</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {rows.map((p) => {
            const Icon = iconFor(p.title);
            return (
              <a
                key={p.path}
                href={gygHref(p, lang)}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => trackAffiliateClick('activities', `dest_picks:${p.sid}`, gygHref(p, lang))}
                className="group shrink-0 w-[78%] snap-start sm:w-auto flex flex-col rounded-2xl bg-[#F3F6FA] border border-white/60 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.6)] hover:border-vibe-pink/50 transition-colors p-5 no-underline"
              >
                <span className="inline-flex w-11 h-11 rounded-xl bg-vibe-pink/12 items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-vibe-pink" aria-hidden="true" />
                </span>
                <p className="font-body font-bold text-deep-night text-[15px] leading-snug group-hover:text-vibe-pink transition-colors">
                  {p.title}
                </p>
                <p className="text-deep-night/60 text-xs mt-1.5">
                  {p.place}
                  {p.duration ? ` · ${p.duration}` : ''}
                </p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-vibe-pink text-sm font-semibold">
                  {c.cta} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>

        <p className="text-snow/45 text-xs mt-4">
          {c.disclosure}
        </p>
      </div>
    </section>
  );
}
