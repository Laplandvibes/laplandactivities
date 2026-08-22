// Lightweight GA4 helpers — `gtag` is loaded by index.html.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string) {
  window.gtag?.('event', 'page_view', { page_path: path });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', name, params);
}

export function trackNewsletterSignup(source: string) {
  trackEvent('newsletter_signup', { source });
}

export function trackAffiliateClick(partner: string, sid: string, destination?: string) {
  trackEvent('affiliate_click', { partner, sid, destination });
}

// Direct partner-deal click (NOT affiliate). Used for the Bear Kuusamo partnership,
// whose links go straight to bearkuusamo.com. Fires a distinct `partner_click` event
// so partner clicks stay separate from affiliate_click in GA4.
export function trackPartnerClick(
  placement: string,
  partner = 'bear-kuusamo',
  site = 'laplandactivities',
) {
  trackEvent('partner_click', { partner, site, placement });
}
