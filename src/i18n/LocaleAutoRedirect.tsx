import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'lv_locale_choice';

type StoredLocale = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl';

const URL_PREFIX: Record<StoredLocale, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br', 'zh-CN': '/cn',
  ko: '/kr', fr: '/fr', it: '/it', nl: '/nl',
};

export default function LocaleAutoRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/') return;

    const stored =
      typeof window !== 'undefined' && window.localStorage
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;

    let target: StoredLocale = 'en';
    const validValues: StoredLocale[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl'];

    if (stored && (validValues as string[]).includes(stored)) {
      target = stored as StoredLocale;
    } else if (typeof navigator !== 'undefined') {
      const lang = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
      if (lang.startsWith('fi')) target = 'fi';
      else if (lang.startsWith('de')) target = 'de';
      else if (lang.startsWith('ja')) target = 'ja';
      else if (lang.startsWith('pt')) target = 'pt-BR';
      else if (lang.startsWith('zh')) target = 'zh-CN';
      else if (lang.startsWith('es')) target = 'es';
      else if (lang.startsWith('ko')) target = 'ko';
      else if (lang.startsWith('fr')) target = 'fr';
      else if (lang.startsWith('it')) target = 'it';
      else if (lang.startsWith('nl')) target = 'nl';
    }

    const prefix = URL_PREFIX[target];
    if (prefix) navigate(prefix, { replace: true });
  }, [pathname, navigate]);

  return null;
}
