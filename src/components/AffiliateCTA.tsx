import type { ReactNode, AnchorHTMLAttributes } from 'react';

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
  | 'activities';

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

export function buildAffiliateHref({
  partner,
  sid,
  destination,
  query,
}: Pick<AffiliateCTAProps, 'partner' | 'sid' | 'destination' | 'query'>): string {
  const params = new URLSearchParams({ sid, ...(query || {}) });

  if (destination && partner !== 'activities') {
    params.set('ss', destination);
  }

  const pathname =
    partner === 'activities' && destination
      ? `/go/activities/${destination}`
      : `/go/${partner}`;

  return `${REDIRECT_HOST}${pathname}?${params.toString()}`;
}

export default function AffiliateCTA({
  partner,
  sid,
  destination,
  query,
  children,
  ...rest
}: AffiliateCTAProps) {
  return (
    <a
      {...rest}
      href={buildAffiliateHref({ partner, sid, destination, query })}
      target="_blank"
      rel="sponsored nofollow noopener"
    >
      {children}
    </a>
  );
}
