// The GetYourGuide Integration Analyzer script is loaded globally in index.html
// (see <head>, data-gyg-partner-id="VRMKD7N"). The SDK auto-scans the DOM and
// renders any element with data-gyg-widget on every page including SPA route changes.

import { useEffect, useRef, useState } from 'react';
import { Compass, ArrowUpRight } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';
import AffiliateCTA from './AffiliateCTA';

const GYG_PARTNER_ID = 'VRMKD7N';

// Shown when the embed is blocked (ad-block / tracking protection) so the
// section reads as an enticing panel + CTA instead of an empty box.
const BROWSE_CTA: Record<Lang, string> = {
  en: 'Browse tours on GetYourGuide',
  fi: 'Selaa retkiä GetYourGuidessa',
  de: 'Touren auf GetYourGuide ansehen',
  ja: 'GetYourGuide でツアーを見る',
  es: 'Ver tours en GetYourGuide',
  'pt-BR': 'Ver passeios no GetYourGuide',
  'zh-CN': '在 GetYourGuide 浏览行程',
  ko: 'GetYourGuide에서 투어 보기',
  fr: 'Voir les tours sur GetYourGuide',
  it: 'Sfoglia i tour su GetYourGuide',
  nl: 'Tours bekijken op GetYourGuide',
  sv: 'Bläddra bland turer på GetYourGuide',
};
const FALLBACK_LEAD: Record<Lang, string> = {
  en: 'Hand-picked Lapland tours: live prices, free cancellation on most, instant confirmation.',
  fi: 'Käsin valittuja Lapin retkiä: live-hinnat, useimmissa ilmainen peruutus, vahvistus heti.',
  de: 'Handverlesene Lappland-Touren: Live-Preise, bei den meisten kostenlose Stornierung, sofortige Bestätigung.',
  ja: '厳選したラップランドのツアー：リアルタイムの料金、多くが無料キャンセル、即時確定。',
  es: 'Tours seleccionados de Laponia: precios en tiempo real, cancelación gratuita en la mayoría, confirmación inmediata.',
  'pt-BR': 'Passeios selecionados da Lapônia: preços em tempo real, cancelamento grátis na maioria, confirmação imediata.',
  'zh-CN': '精选拉普兰行程：实时价格、多数可免费取消、即时确认。',
  ko: '엄선한 라플란드 투어: 실시간 가격, 대부분 무료 취소, 즉시 확정.',
  fr: 'Excursions sélectionnées en Laponie: prix en temps réel, annulation gratuite sur la plupart, confirmation immédiate.',
  it: 'Tour selezionati della Lapponia: prezzi in tempo reale, cancellazione gratuita sulla maggior parte, conferma immediata.',
  nl: 'Zorgvuldig gekozen Lapland-tours: actuele prijzen, gratis annulering op de meeste, directe bevestiging.',
  sv: 'Handplockade Lappland-turer: priser i realtid, gratis avbokning på de flesta, bekräftelse direkt.',
};

// Map the page language → GetYourGuide widget locale code, so the embedded tour
// cards render in the visitor's language. Without this the GYG SDK geo-defaults
// to Finnish (the partner's home market), regardless of the page language.
const GYG_LOCALE: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};

const DEFAULTS: Record<Lang, { title: string; eyebrow: string; subtitle: string; pricesNote: string }> = {
  en: {
    title: 'Book Hand-Picked Tours',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Free cancellation up to 24h on most tours · Instant confirmation',
    pricesNote: 'Prices & availability change daily. Book ahead for peak season.',
  },
  fi: {
    title: 'Varaa käsin valittuja kierroksia',
    eyebrow: 'Tarjoaa GetYourGuide',
    subtitle: 'Useimmissa tuotteissa ilmainen peruutus 24 h asti · Vahvistus heti',
    pricesNote: 'Hinnat ja saatavuus muuttuvat päivittäin. Varaa ajoissa sesonkiin.',
  },
  de: {
    title: 'Handverlesene Touren buchen',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Bei den meisten Touren bis zu 24h kostenlose Stornierung · Sofortige Bestätigung',
    pricesNote: 'Preise & Verfügbarkeit ändern sich täglich. Buchen Sie früh für die Hauptsaison.',
  },
  ja: {
    title: '厳選ツアーを予約',
    eyebrow: '提供:GetYourGuide',
    subtitle: 'ほとんどのツアーで24時間前まで無料キャンセル · 即時確定',
    pricesNote: '料金と空き状況は毎日変動します。ピークシーズンはお早めにご予約ください。',
  },
  es: {
    title: 'Reserve tours seleccionados',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'En la mayoría de tours, cancelación gratuita hasta 24 h · Confirmación inmediata',
    pricesNote: 'Precios y disponibilidad cambian a diario. Reserve con antelación en temporada alta.',
  },
  'pt-BR': {
    title: 'Reserve tours selecionados',
    eyebrow: 'Por GetYourGuide',
    subtitle: 'Cancelamento grátis até 24h na maioria dos tours · Confirmação imediata',
    pricesNote: 'Preços e disponibilidade mudam diariamente. Reserve antes na alta temporada.',
  },
  'zh-CN': {
    title: '预订精选行程',
    eyebrow: '由GetYourGuide提供',
    subtitle: '大多数行程在24小时前可免费取消 · 即时确认',
    pricesNote: '价格与可订情况每日变化。旺季请提前预订。',
  },
  ko: {
    title: '엄선한 투어 예약',
    eyebrow: 'GetYourGuide 제공',
    subtitle: '대부분의 투어는 24시간 전까지 무료 취소 · 즉시 확정',
    pricesNote: '가격과 가능 여부는 매일 변동됩니다. 성수기에는 미리 예약하세요.',
  },
  fr: {
    title: 'Réservez des tours sélectionnés',
    eyebrow: 'Propulsé par GetYourGuide',
    subtitle: "Annulation gratuite jusqu'à 24 h sur la plupart des tours · Confirmation immédiate",
    pricesNote: "Prix et disponibilité changent chaque jour. Réservez à l'avance pour la haute saison.",
  },
  it: {
    title: 'Prenoti tour selezionati',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Cancellazione gratuita fino a 24 h sulla maggior parte dei tour · Conferma immediata',
    pricesNote: "Prezzi e disponibilità cambiano ogni giorno. Prenoti in anticipo per l'alta stagione.",
  },
  nl: {
    title: 'Boek zorgvuldig gekozen tours',
    eyebrow: 'Aangedreven door GetYourGuide',
    subtitle: 'Gratis annulering tot 24 u op de meeste tours · Directe bevestiging',
    pricesNote: 'Prijzen en beschikbaarheid wijzigen dagelijks. Boek vooraf voor het hoogseizoen.',
  },
  sv: {
    title: 'Boka handplockade turer',
    eyebrow: 'Drivs av GetYourGuide',
    subtitle: 'Gratis avbokning upp till 24 timmar på de flesta turer · Bekräftelse direkt',
    pricesNote: 'Priser och tillgänglighet ändras dagligen. Boka i god tid inför högsäsong.',
  },
};

interface Props {
  /** Campaign tag (cmp) — used by GYG analytics. Lowercase, hyphenated. */
  cmpTag: string;
  /** GYG numeric location ID (REQUIRED). Canonical verified table:
   *  laplandvibes/_affiliate/gyg-location-ids.md — e.g. Rovaniemi 2653,
   *  Inari 164594, Lapland region 2652. NEVER omit: without a valid ID the
   *  SDK falls back to its GLOBAL list (Shanghai tours on an Inari page,
   *  Vesa 2026-07-07). Note: 178 was invalid and caused exactly that. */
  locationId: string;
  /** Number of tour cards to show. Defaults to 3. */
  numberOfItems?: number;
  /** Section heading. */
  title?: string;
  /** Section eyebrow. */
  eyebrow?: string;
  /** Optional sub-line under the heading. */
  subtitle?: string;
  /** GYG search query for the ad-block fallback CTA (never 404s). Defaults to 'Lapland'. */
  fallbackQuery?: string;
}

export default function GetYourGuideWidget({
  cmpTag,
  locationId,
  numberOfItems = 3,
  title,
  eyebrow,
  subtitle,
  fallbackQuery = 'Lapland',
}: Props) {
  const lang = useLang();
  const d = DEFAULTS[lang];
  const resolvedTitle = title ?? d.title;
  const resolvedEyebrow = eyebrow ?? d.eyebrow;
  const resolvedSubtitle = subtitle ?? d.subtitle;
  const boxRef = useRef<HTMLDivElement>(null);
  const [blocked, setBlocked] = useState(false);

  // If no iframe has mounted shortly after render, the embed is likely blocked
  // (ad-block / tracking protection) → show the designed fallback panel. BUT
  // keep polling: on slow loads the SDK mounts the iframe well after the first
  // check, and the fallback must yield back to the real widget. A one-shot
  // check left the fallback stuck on for slow loads (Vesa 2026-07-12).
  useEffect(() => {
    setBlocked(false);
    let cancelled = false;
    let waited = 0;
    const FIRST_CHECK = 2500;
    const STEP = 1000;
    const MAX_WAIT = 12000;
    const tick = (delay: number): ReturnType<typeof setTimeout> =>
      setTimeout(() => {
        if (cancelled) return;
        waited += delay;
        if (boxRef.current?.querySelector('iframe')) {
          setBlocked(false);
          return;
        }
        setBlocked(true);
        if (waited < MAX_WAIT) tick(STEP);
      }, delay);
    const t = tick(FIRST_CHECK);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [lang, locationId]);
  // 'auto' and 'city' widget modes are BANNED (2026-07-02 rule) — they ignore
  // location targeting and show GYG's global inventory.
  const widgetType = 'activities';

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-vibe-pink text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {resolvedEyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-snow tracking-wide mb-2 leading-tight">
            {resolvedTitle}
          </h2>
          <p className="text-snow/70 text-sm">{resolvedSubtitle}</p>
        </div>

        <div
          ref={boxRef}
          // h-0 (ei display:none): leveys säilyy, jotta myöhään mounttaava
          // iframe mittaa itsensä oikein ja voidaan nostaa esiin
          className={blocked ? 'h-0 overflow-hidden' : ''}
          key={`gyg-${lang}`}
          data-gyg-widget={widgetType}
          data-gyg-partner-id={GYG_PARTNER_ID}
          data-gyg-locale-code={GYG_LOCALE[lang]}
          data-gyg-cmp={cmpTag}
          data-gyg-location-id={locationId}
          {...(numberOfItems ? { 'data-gyg-number-of-items': String(numberOfItems) } : {})}
        />

        {blocked && (
          <div className="flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-vibe-pink/15 border border-vibe-pink/40 text-vibe-pink mb-4">
              <Compass className="w-6 h-6" strokeWidth={2} />
            </span>
            <p className="text-snow/80 text-sm leading-relaxed max-w-md mb-5">
              {FALLBACK_LEAD[lang] ?? FALLBACK_LEAD.en}
            </p>
            <AffiliateCTA
              partner="activities-search"
              sid={`${cmpTag.replace(/[^a-z0-9_]/gi, '_')}_fallback`}
              destination={fallbackQuery}
              className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
            >
              {BROWSE_CTA[lang] ?? BROWSE_CTA.en}
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
            </AffiliateCTA>
          </div>
        )}

        <p className="text-center mt-6 text-[11px] text-snow/75">
          {d.pricesNote}
        </p>
      </div>
    </section>
  );
}
