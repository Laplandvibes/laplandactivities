// The GetYourGuide Integration Analyzer script is loaded globally in index.html
// (see <head>, data-gyg-partner-id="VRMKD7N"). The SDK auto-scans the DOM and
// renders any element with data-gyg-widget on every page including SPA route changes.

import { useLang, type Lang } from '../i18n/useLang';

const GYG_PARTNER_ID = 'VRMKD7N';

// Map the page language → GetYourGuide widget locale code, so the embedded tour
// cards render in the visitor's language. Without this the GYG SDK geo-defaults
// to Finnish (the partner's home market), regardless of the page language.
const GYG_LOCALE: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL',
};

const DEFAULTS: Record<Lang, { title: string; eyebrow: string; subtitle: string; pricesNote: string }> = {
  en: {
    title: 'Book Hand-Picked Tours',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Free cancellation up to 24h on most tours · Instant confirmation',
    pricesNote: 'Prices & availability change daily — book ahead for peak season.',
  },
  fi: {
    title: 'Varaa käsin valittuja kierroksia',
    eyebrow: 'Tarjoaa GetYourGuide',
    subtitle: 'Useimmissa tuotteissa ilmainen peruutus 24 h asti · Vahvistus heti',
    pricesNote: 'Hinnat ja saatavuus muuttuvat päivittäin — varaa ajoissa sesonkiin.',
  },
  de: {
    title: 'Handverlesene Touren buchen',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Bei den meisten Touren bis zu 24h kostenlose Stornierung · Sofortige Bestätigung',
    pricesNote: 'Preise & Verfügbarkeit ändern sich täglich — buchen Sie früh für die Hauptsaison.',
  },
  ja: {
    title: '厳選ツアーを予約',
    eyebrow: '提供:GetYourGuide',
    subtitle: 'ほとんどのツアーで24時間前まで無料キャンセル · 即時確定',
    pricesNote: '料金と空き状況は毎日変動します — ピークシーズンはお早めにご予約ください。',
  },
  es: {
    title: 'Reserve tours seleccionados',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'En la mayoría de tours, cancelación gratuita hasta 24 h · Confirmación inmediata',
    pricesNote: 'Precios y disponibilidad cambian a diario — reserve con antelación en temporada alta.',
  },
  'pt-BR': {
    title: 'Reserve tours selecionados',
    eyebrow: 'Por GetYourGuide',
    subtitle: 'Cancelamento grátis até 24h na maioria dos tours · Confirmação imediata',
    pricesNote: 'Preços e disponibilidade mudam diariamente — reserve antes na alta temporada.',
  },
  'zh-CN': {
    title: '预订精选行程',
    eyebrow: '由GetYourGuide提供',
    subtitle: '大多数行程在24小时前可免费取消 · 即时确认',
    pricesNote: '价格与可订情况每日变化 — 旺季请提前预订。',
  },
  ko: {
    title: '엄선한 투어 예약',
    eyebrow: 'GetYourGuide 제공',
    subtitle: '대부분의 투어는 24시간 전까지 무료 취소 · 즉시 확정',
    pricesNote: '가격과 가능 여부는 매일 변동됩니다 — 성수기에는 미리 예약하세요.',
  },
  fr: {
    title: 'Réservez des tours sélectionnés',
    eyebrow: 'Propulsé par GetYourGuide',
    subtitle: "Annulation gratuite jusqu'à 24 h sur la plupart des tours · Confirmation immédiate",
    pricesNote: "Prix et disponibilité changent chaque jour — réservez à l'avance pour la haute saison.",
  },
  it: {
    title: 'Prenoti tour selezionati',
    eyebrow: 'Powered by GetYourGuide',
    subtitle: 'Cancellazione gratuita fino a 24 h sulla maggior parte dei tour · Conferma immediata',
    pricesNote: "Prezzi e disponibilità cambiano ogni giorno — prenoti in anticipo per l'alta stagione.",
  },
  nl: {
    title: 'Boek zorgvuldig gekozen tours',
    eyebrow: 'Aangedreven door GetYourGuide',
    subtitle: 'Gratis annulering tot 24 u op de meeste tours · Directe bevestiging',
    pricesNote: 'Prijzen en beschikbaarheid wijzigen dagelijks — boek vooraf voor het hoogseizoen.',
  },
};

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
  title,
  eyebrow,
  subtitle,
}: Props) {
  const lang = useLang();
  const d = DEFAULTS[lang];
  const resolvedTitle = title ?? d.title;
  const resolvedEyebrow = eyebrow ?? d.eyebrow;
  const resolvedSubtitle = subtitle ?? d.subtitle;
  const widgetType = locationId ? 'activities' : 'auto';

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
          key={`gyg-${lang}`}
          data-gyg-widget={widgetType}
          data-gyg-partner-id={GYG_PARTNER_ID}
          data-gyg-locale-code={GYG_LOCALE[lang]}
          data-gyg-cmp={cmpTag}
          {...(locationId ? { 'data-gyg-location-id': locationId } : {})}
          {...(numberOfItems ? { 'data-gyg-number-of-items': String(numberOfItems) } : {})}
        />

        <p className="text-center mt-6 text-[11px] text-snow/75">
          {d.pricesNote}
        </p>
      </div>
    </section>
  );
}
