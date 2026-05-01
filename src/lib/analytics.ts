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
