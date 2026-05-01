/**
 * FTC / DSA / consumer-protection-compliant affiliate disclosure.
 * Footer-only by default. See LV Affiliate System, §10 + §17.
 */

interface AffiliateDisclosureProps {
  variant?: 'subtle' | 'inline';
  className?: string;
}

const TEXT =
  'This page contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.';

export default function AffiliateDisclosure({
  variant = 'subtle',
  className = '',
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <p
        className={`text-xs text-snow/60 italic leading-relaxed max-w-3xl mx-auto px-4 ${className}`}
        role="note"
      >
        <span aria-hidden="true">ⓘ </span>
        {TEXT}
      </p>
    );
  }

  return (
    <p className={`text-[11px] text-snow/40 leading-relaxed ${className}`} role="note">
      <span aria-hidden="true">ⓘ </span>
      {TEXT}
    </p>
  );
}
