// The GetYourGuide Integration Analyzer script is loaded globally in index.html
// (see <head>, data-gyg-partner-id="VRMKD7N"). The SDK auto-scans the DOM and
// renders any element with data-gyg-widget on every page including SPA route changes.

const GYG_PARTNER_ID = 'VRMKD7N';

interface Props {
  /** Campaign tag (cmp) — used by GYG analytics. Lowercase, hyphenated. */
  cmpTag: string;
  /** Optional GYG location ID, e.g. 'l2653' for Rovaniemi. Omit for "all of Lapland". */
  locationId?: string;
  /** Number of tour cards to show. Defaults to 3. */
  numberOfItems?: number;
  /** Section heading. */
  title?: string;
  /** Section eyebrow. */
  eyebrow?: string;
  /** Optional sub-line under the heading. */
  subtitle?: string;
}

export default function GetYourGuideWidget({
  cmpTag,
  locationId,
  numberOfItems = 3,
  title = 'Book Verified Tours',
  eyebrow = 'Powered by GetYourGuide',
  subtitle = 'Free cancellation up to 24h on most tours · Instant confirmation',
}: Props) {
  const widgetType = locationId ? 'activities' : 'auto';

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-vibe-pink text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-snow/70 text-sm">{subtitle}</p>
        </div>

        <div
          data-gyg-widget={widgetType}
          data-gyg-partner-id={GYG_PARTNER_ID}
          data-gyg-cmp={cmpTag}
          {...(locationId ? { 'data-gyg-location-id': locationId } : {})}
          {...(numberOfItems ? { 'data-gyg-number-of-items': String(numberOfItems) } : {})}
        />

        <p className="text-center mt-6 text-[11px] text-snow/50">
          Prices &amp; availability change daily — book ahead for peak season.
        </p>
      </div>
    </section>
  );
}
