// Generated SEO component — created by fix-seo-ecosystem.mjs.
// React 19 native head-tag SEO helper.
// 2026-05-21: locale-aware hreflang + og:locale; JSON-LD inLanguage injection.

import type { ReactNode } from 'react';
import { useLang, type Lang } from '../i18n/useLang';

interface SEOProps {
  title: string;
  description: string;
  /** Path-only canonical (e.g. "/operators"). Defaults to "/" for home. */
  path?: string;
  /** Path-only canonical, alternate name. */
  canonical?: string;
  schema?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
}

const BASE = 'https://laplandactivities.fi';
const SITE_NAME = 'LaplandActivities';

const PATH_PREFIX: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br', 'zh-CN': '/cn',
  ko: '/kr', fr: '/fr', it: '/it', nl: '/nl',
};
const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES',
  'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL',
};
const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL',
};

function injectInLanguage(node: unknown, bcp47: string): unknown {
  if (Array.isArray(node)) return node.map((n) => injectInLanguage(n, bcp47));
  if (node && typeof node === 'object') {
    const o = node as Record<string, unknown>;
    if (o['@type'] && o.inLanguage === undefined) o.inLanguage = bcp47;
    if (Array.isArray(o['@graph'])) o['@graph'] = (o['@graph'] as unknown[]).map((n) => injectInLanguage(n, bcp47));
    return o;
  }
  return node;
}

export default function SEO({
  title,
  description,
  path,
  canonical,
  schema,
  breadcrumbs,
  noindex,
}: SEOProps): ReactNode {
  const lang = useLang();
  const fullTitle = title.includes('|') ? title : `${title} | ${SITE_NAME}`;
  const rawP = path ?? canonical ?? '/';
  // Strip a locale prefix if a caller accidentally passed one in.
  const cleanP = rawP.replace(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl)(?=\/|$)/, '') || '/';
  // Trailing-slash form matches the prerendered static HTML (Cloudflare Pages
  // serves /path/index.html at /path/ with 200; the no-slash form 308-redirects).
  const url = `${BASE}${PATH_PREFIX[lang]}${cleanP === '/' ? '' : cleanP}`.replace(/\/?$/, '/');
  const bcp47 = BCP47[lang];

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          inLanguage: bcp47,
          itemListElement: breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: `${BASE}${b.url}`,
          })),
        }
      : null;

  const localizedSchema = schema ? injectInLanguage(JSON.parse(JSON.stringify(schema)), bcp47) : null;

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      {(Object.keys(PATH_PREFIX) as Lang[]).map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${BASE}${PATH_PREFIX[l]}${cleanP === '/' ? '' : cleanP}`.replace(/\/?$/, '/')} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE}${cleanP === '/' ? '' : cleanP}`.replace(/\/?$/, '/')} />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {localizedSchema !== null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedSchema) }}
        />
      )}
    </>
  );
}

// Backward-compat shim — keeps old useSEO imports compiling during migration.
export function useSEO(_: SEOProps): void {
  /* no-op: pages should migrate to <SEO /> */
}
