/**
 * FTC / DSA / consumer-protection-compliant affiliate disclosure.
 * Footer-only by default. See LV Affiliate System, §10 + §17.
 */

import { useLang, type Lang } from '../i18n/useLang';

interface AffiliateDisclosureProps {
  variant?: 'subtle' | 'inline';
  className?: string;
  /** Override the auto-detected language. If omitted, uses the current route. */
  lang?: Lang;
}

const TEXT: Record<Lang, string> = {
  en: 'This page contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.',
  fi: 'Tämä sivu sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes voi saada pienen provision ilman lisäkustannuksia sinulle.',
  de: 'Diese Seite enthält Partnerlinks. Wenn Sie darüber buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
  ja: 'このページにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしで LaplandVibes に手数料が支払われることがあります。',
  es: 'Esta página contiene enlaces de afiliación. Si reserva a través de ellos, LaplandVibes puede recibir una comisión sin coste adicional para usted.',
  'pt-BR': 'Esta página contém links de afiliados. Se você reservar por meio deles, a LaplandVibes poderá receber uma comissão sem custo adicional para você.',
  'zh-CN': '本页面包含联盟链接。如果您通过这些链接预订，LaplandVibes 可能会收到佣金，不会增加您的费用。',
  ko: '이 사이트의 일부 링크는 제휴 링크입니다. 귀하가 결제하면 LaplandVibes는 약간의 수수료를 받습니다. 추가 비용은 없습니다.',
  fr: "Certains liens de ce site sont des liens d'affiliation. Si vous effectuez un achat, LaplandVibes touchera une petite commission. Sans coût supplémentaire pour vous.",
  it: 'Alcuni link su questo sito sono link di affiliazione. Se acquista, LaplandVibes riceverà una piccola commissione. Senza costi aggiuntivi per Lei.',
  nl: 'Sommige links op deze site zijn affiliate-links. Als u een aankoop doet, ontvangt LaplandVibes een kleine commissie. Zonder extra kosten voor u.',
};

export default function AffiliateDisclosure({
  variant = 'subtle',
  className = '',
  lang: langOverride,
}: AffiliateDisclosureProps) {
  const detected = useLang();
  const lang = langOverride ?? detected;
  const text = TEXT[lang] ?? TEXT.en;

  if (variant === 'inline') {
    return (
      <p
        className={`text-xs text-snow/80 italic leading-relaxed max-w-3xl mx-auto px-4 ${className}`}
        role="note"
      >
        <span aria-hidden="true">ⓘ </span>
        {text}
      </p>
    );
  }

  return (
    <p className={`text-[11px] text-snow/75 leading-relaxed ${className}`} role="note">
      <span aria-hidden="true">ⓘ </span>
      {text}
    </p>
  );
}
