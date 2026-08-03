import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { useLang } from '../i18n/useLang';

/**
 * LaplandVibes affiliate CTA — every paid click is funnelled through
 * https://go.laplandvibes.com so the Cloudflare Worker can attach CJ tracking,
 * GYG partner_id, and per-domain Website ID attribution.
 *
 * See LaplandVibes Affiliate System (developer handoff, 2026-04-25), §7.
 */

export type AffiliatePartner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities'
  /**
   * GetYourGuide keyword SEARCH (lands on GYG `/s?q=…` via the Worker). Use for
   * a SPECIFIC activity card where we want the user to land on results for that
   * exact experience + place (e.g. "salmon fishing tornio"), not the broad
   * location page. `destination` carries the concise search query.
   * Owner-mandated 2026-06-26: booking links must target the specific
   * activity, not a generic Lapland search.
   */
  | 'activities-search';

export interface AffiliateCTAProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> {
  partner: AffiliatePartner;
  /** Placement tag — a-z, 0-9, underscore. Max 50. e.g. 'hero_cta', 'card_book'. */
  sid: string;
  /**
   * For hotels/cars: search query passed as `?ss=...`.
   * For activities: GYG slug appended to the path (e.g. 'rovaniemi-l2653').
   */
  destination?: string;
  /** Extra query params (checkin, pickup_date, currency, …). Merged after sid + ss. */
  query?: Record<string, string>;
  children: ReactNode;
}

const REDIRECT_HOST = 'https://go.laplandvibes.com';

type _Lang = "en" | "fi" | "de" | "ja" | "es" | "pt-BR" | "zh-CN" | "ko" | "fr" | "it" | "nl" | "sv";
const HOTELS_LOCALE: Record<_Lang, string> = { en: "en_US", fi: "fi_FI", de: "de_DE", ja: "ja_JP", es: "es_ES", "pt-BR": "pt_BR", "zh-CN": "zh_CN", ko: "ko_KR", fr: "fr_FR", it: "it_IT", nl: "nl_NL", sv: "sv_SE" };
const CARS_LANG: Record<_Lang, string> = { en: "en", fi: "fi", de: "de", ja: "ja", es: "es", "pt-BR": "pt", "zh-CN": "zh", ko: "ko", fr: "fr", it: "it", nl: "nl", sv: "sv" };
/**
 * Worker `?language=` codes (same table as shared/gyg/picks.ts). The Worker's
 * handleGyg turns the code into GetYourGuide's `<lang>-<country>/` PATH prefix
 * — the only localisation GYG honours. 🔴 A raw `?language=xx` appended to a
 * getyourguide.com URL does NOTHING (measured in a real browser 2026-08-02),
 * so never "simplify" back to passing it to GYG directly. `en` is GYG's
 * default and needs no param; `de` needs a code here even though the old raw
 * links didn't send one — they used the getyourguide.de domain instead.
 */
const GYG_WORKER_LANG: Record<_Lang, string | undefined> = {
  en: undefined, fi: "fi", de: "de", ja: "ja", es: "es", "pt-BR": "pt-br",
  "zh-CN": "zh", ko: "ko", fr: "fr", it: "it", nl: "nl", sv: "sv",
};

/**
 * Sid-spesifikaatio on a-z, 0-9 ja alaviiva — mutta kuusi kutsukohtaa
 * interpoloi slugin raakana (`bookcta_hotels_pyha-luosto`,
 * `hero_cat_northern-lights_book`), joten normalisointi kuuluu TÄNNE eikä
 * jokaiseen kutsukohtaan (auditti 2026-08-03). NFKD purkaa tarkkeet
 * (ä → a) ennen suodatusta, ettei ei-ASCII-id tuota alaviivasotkua.
 */
function cleanSid(sid: string): string {
  return sid
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, '_');
}

export function buildAffiliateHref({
  partner,
  sid: rawSid,
  destination,
  query,
  lang = "en",
}: Pick<AffiliateCTAProps, 'partner' | 'sid' | 'destination' | 'query'> & { lang?: _Lang }): string {
  const sid = cleanSid(rawSid);
  if (partner === 'activities-search') {
    // GetYourGuide keyword search — lands on results for a specific experience.
    // `destination` is the concise query (e.g. "salmon fishing tornio").
    const url = new URL(`${GYG_DOMAIN[lang]}/s/`);
    if (destination) url.searchParams.set('q', destination);
    url.searchParams.set('partner_id', GYG_PARTNER_ID);
    url.searchParams.set('cmp', `lv_${SITE_ID}_${sid}`);
    const gygLang = GYG_LANGUAGE[lang];
    if (gygLang) url.searchParams.set('language', gygLang);
    if (query) for (const [k, v] of Object.entries(query)) if (v) url.searchParams.set(k, v);
    return url.toString();
  }
  if (partner === 'activities') {
    const path = (destination ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
    const url = new URL(path ? `${GYG_DOMAIN[lang]}/${path}/` : `${GYG_DOMAIN[lang]}/`);
    url.searchParams.set('partner_id', GYG_PARTNER_ID);
    url.searchParams.set('cmp', `lv_${SITE_ID}_${sid}`);
    const gygLang = GYG_LANGUAGE[lang];
    if (gygLang) url.searchParams.set('language', gygLang);
    if (query) for (const [k, v] of Object.entries(query)) if (v) url.searchParams.set(k, v);
    return url.toString();
  }
  const params = new URLSearchParams({ sid, ...(query || {}) });
  // 🔴 cars käyttää pickup_location=IATA, EI ss:ää. Mitattu 2026-08-03:
  // Worker rakentaa pickup_locationista EB-tulossivun (plc=61893 jne.),
  // mutta ss=IATA valui EB:n ?location=-TEKSTIHAKUUN, jonka EB pudottaa
  // tyhjaksi etusivuksi (sama vikaluokka kuin ENF->Enfidha-tapaus 25.7.).
  if (destination) {
    if (partner === 'cars') params.set('pickup_location', destination);
    else params.set('ss', anchorHotelsSs(partner, destination));
  }
  if (partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget") {
    params.set("locale", HOTELS_LOCALE[lang]);
  } else if (partner === "cars") {
    params.set("lang", CARS_LANG[lang]);
  }
  return `${REDIRECT_HOST}/go/${partner}?${params.toString()}`;
}

export default function AffiliateCTA({
  partner,
  sid,
  destination,
  query,
  children,
  ...rest
}: AffiliateCTAProps) {
  const lang = useLang();
  return (
    <a
      {...rest}
      href={buildAffiliateHref({ partner, sid, destination, query, lang })}
      target="_blank"
      rel="sponsored nofollow noopener"
    >
      {children}
    </a>
  );
}

/**
 * Anchor any lodging search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes the lodging partner geocode to *Lapland, Indiana, USA* — a real
 * revenue/trust bug (Vesa 2026-07-08). Still applies after the 2026-07 CJ exit:
 * the Worker now resolves /go/hotels to Sembo (fi) and Trip.com (other
 * locales), and both geocode from this same query string.
 * Force ", Finland" onto every lodging query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
