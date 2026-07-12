import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import { destinations } from '../data/destinations';
import { categories } from '../data/categories';
import { useLang, useLocalePath, pick } from '../i18n/useLang';
import EcosystemMenu from '../../../shared/EcosystemMenu';
import { COPY } from '../locales/copy';
import { localizeCategory, localizeDestination } from '../locales/data';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState<null | 'destinations' | 'categories'>(null);
  const [langOpen, setLangOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const langWrapRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaSwitchLanguage = pick(lang,
    'Switch language', 'Vaihda kieli', 'Sprache wechseln', '言語を切り替える', 'Cambiar idioma',
    'Mudar idioma', '切换语言', '언어 변경', 'Changer de langue', 'Cambia lingua', 'Taal wijzigen', 'Byt språk');
  const ariaLanguage = pick(lang,
    'Language', 'Kieli', 'Sprache', '言語', 'Idioma',
    'Idioma', '语言', '언어', 'Langue', 'Lingua', 'Taal', 'Språk');
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen', 'Öppna/stäng menyn');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDrop(null); setLangOpen(false); }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langWrapRef.current && !langWrapRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  useEffect(() => {
    if (!drop) return;
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDrop(null);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrop(null); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [drop]);

  type LangCode = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';
  const URL_PREFIX_OF: Record<LangCode, string> = {
    en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
    ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
  };
  const ALL_LANGS: { code: LangCode; label: string; native: string }[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'fi', label: 'FI', native: 'Suomi' },
    { code: 'sv', label: 'SV', native: 'Svenska' },
    { code: 'de', label: 'DE', native: 'Deutsch' },
    { code: 'ja', label: 'JA', native: '日本語' },
    { code: 'es', label: 'ES', native: 'Español' },
    { code: 'pt-BR', label: 'BR', native: 'Português' },
    { code: 'zh-CN', label: 'CN', native: '简体中文' },
    { code: 'ko', label: 'KR', native: '한국어' },
    { code: 'fr', label: 'FR', native: 'Français' },
    { code: 'it', label: 'IT', native: 'Italiano' },
    { code: 'nl', label: 'NL', native: 'Nederlands' },
  ];

  const switchTo = (target: LangCode) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target);
    }
    const path = pathname;
    const bare = path.replace(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl|sv)(?=\/|$)/, '') || '/';
    const prefix = URL_PREFIX_OF[target];
    if (!prefix) {
      navigate(bare);
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`);
    }
  };

  const currentLangLabel = ALL_LANGS.find((l) => l.code === lang)?.label ?? 'EN';

  const LangDropdown = () => (
    <div className="relative" ref={langWrapRef}>
      <button
        type="button"
        onClick={() => setLangOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={langOpen}
        aria-label={ariaSwitchLanguage}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide transition-all border text-snow border-snow/40 hover:border-snow hover:text-snow"
      >
        <Globe className="w-3.5 h-3.5" />
        {currentLangLabel}
        <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <ul
          role="listbox"
          aria-label={ariaLanguage}
          className="absolute right-0 top-full mt-2 min-w-[180px] py-1 bg-deep-night/95 backdrop-blur-md border border-white/15 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
        >
          {ALL_LANGS.map((item) => {
            const isActive = item.code === lang;
            return (
              <li key={item.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => { switchTo(item.code); setLangOpen(false); }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? 'bg-vibe-pink/15 text-vibe-pink font-semibold'
                      : 'text-snow/85 hover:bg-white/5 hover:text-snow'
                  }`}
                >
                  <span className="w-8 font-semibold text-xs tracking-wider">{item.label}</span>
                  <span>{item.native}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all border-b ${
        scrolled
          ? 'bg-deep-night/95 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-deep-night/70 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <EcosystemMenu lang={lang} currentDomain="laplandactivities.fi" />
          <Link to={to('/')} className="flex items-center" aria-label="LaplandActivities home">
            <span className="font-heading tracking-wide text-2xl sm:text-3xl">
              <span className="text-vibe-pink">#</span>
              <span className="text-snow">LAPLAND</span>
              <span className="text-vibe-pink">ACTIVITIES</span>
            </span>
          </Link>
        </div>

        {/* Desktop nav only from lg up — at md (768-1023px) the full item row is
            ~230px wider than the viewport (wide Bebas logo + 5 links + lang + CTA),
            so tablets get the mobile hamburger instead. */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6" ref={dropRef}>
          <Link
            to={to('/')}
            className={`text-sm font-medium tracking-wide transition-colors ${pathname === to('/') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
          >
            {c.home}
          </Link>

          {/* Destinations dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDrop(drop === 'destinations' ? null : 'destinations')}
              aria-expanded={drop === 'destinations'}
              aria-haspopup="true"
              className={`text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1 ${pathname.includes('/destinations') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
            >
              {c.destinations} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drop === 'destinations' ? 'rotate-180' : ''}`} />
            </button>
            {drop === 'destinations' && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/15 bg-deep-night/95 backdrop-blur-md shadow-2xl shadow-black/50 p-2">
                <Link to={to('/destinations')} className="block px-3 py-2 rounded-lg text-vibe-pink text-sm font-semibold hover:bg-white/5">{c.allDestinations}</Link>
                <div className="my-1 border-t border-white/10" />
                {destinations.map((raw) => {
                  const d = localizeDestination(raw, lang);
                  return (
                  <Link
                    key={d.slug}
                    to={to(`/destinations/${d.slug}`)}
                    className="block px-3 py-2 rounded-lg text-snow/80 hover:text-snow hover:bg-white/5 text-sm"
                  >
                    {d.name}
                    <span className="text-snow/75 text-xs block">{d.tagline}</span>
                  </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Categories dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDrop(drop === 'categories' ? null : 'categories')}
              aria-expanded={drop === 'categories'}
              aria-haspopup="true"
              className={`text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1 ${pathname.includes('/categories') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
            >
              {c.categories} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drop === 'categories' ? 'rotate-180' : ''}`} />
            </button>
            {drop === 'categories' && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/15 bg-deep-night/95 backdrop-blur-md shadow-2xl shadow-black/50 p-2">
                <Link to={to('/categories')} className="block px-3 py-2 rounded-lg text-vibe-pink text-sm font-semibold hover:bg-white/5">{c.allCategories}</Link>
                <div className="my-1 border-t border-white/10" />
                {categories.map((raw) => {
                  const cat = localizeCategory(raw, lang);
                  return (
                  <Link
                    key={cat.slug}
                    to={to(`/categories/${cat.slug}`)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-snow/80 hover:text-snow hover:bg-white/5 text-sm"
                  >
                    <cat.icon className="w-4 h-4 text-vibe-pink" />
                    {cat.name}
                  </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to={to('/fishing')}
            className={`text-sm font-medium tracking-wide transition-colors ${pathname === to('/fishing') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
          >
            {c.fishing}
          </Link>

          <Link
            to={to('/about')}
            className={`text-sm font-medium tracking-wide transition-colors ${pathname === to('/about') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
          >
            {c.about}
          </Link>

          <div className="border-l border-snow/15 pl-3">
            <LangDropdown />
          </div>

          <AffiliateCTA
            partner="activities"
            sid="nav_book_now"
            destination="lappi-suomi-l2652"
            className="whitespace-nowrap bg-vibe-pink hover:bg-vibe-pink/90 text-white px-4 xl:px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/20"
          >
            <span className="xl:hidden">{c.bookCtaShort}</span>
            <span className="hidden xl:inline">{c.bookCta}</span>
          </AffiliateCTA>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <div className="relative inline-flex items-center">
            <select
              value={lang}
              onChange={(e) => switchTo(e.target.value as LangCode)}
              aria-label={ariaLanguage}
              className="appearance-none bg-deep-night/85 backdrop-blur-sm bg-transparent border border-snow/40 rounded pl-2 pr-6 py-1 text-xs font-semibold uppercase text-snow"
            >
              {ALL_LANGS.map((l) => (
                <option key={l.code} value={l.code} className="bg-deep-night text-snow">
                  {l.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-snow" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="text-snow/80 hover:text-snow"
            aria-label={ariaToggleMenu}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-deep-night border-t border-white/10 px-4 pb-5 max-h-[80vh] overflow-y-auto">
          <Link to={to('/')} className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === to('/') ? 'text-vibe-pink' : 'text-snow/70'}`}>{c.home}</Link>

          <details className="py-2 border-b border-white/5">
            <summary className="text-sm font-medium text-snow/70 cursor-pointer flex items-center justify-between py-1">
              {c.destinations} <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="pl-3 pt-2 pb-1">
              <Link to={to('/destinations')} className="block py-2 text-vibe-pink text-sm font-semibold">{c.allDestinations}</Link>
              {destinations.map((raw) => {
                const d = localizeDestination(raw, lang);
                return (
                <Link key={d.slug} to={to(`/destinations/${d.slug}`)} className="block py-1.5 text-snow/65 text-sm">
                  {d.name}
                </Link>
                );
              })}
            </div>
          </details>

          <details className="py-2 border-b border-white/5">
            <summary className="text-sm font-medium text-snow/70 cursor-pointer flex items-center justify-between py-1">
              {c.categories} <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="pl-3 pt-2 pb-1">
              <Link to={to('/categories')} className="block py-2 text-vibe-pink text-sm font-semibold">{c.allCategories}</Link>
              {categories.map((raw) => {
                const cat = localizeCategory(raw, lang);
                return (
                <Link key={cat.slug} to={to(`/categories/${cat.slug}`)} className="flex items-center gap-2 py-1.5 text-snow/65 text-sm">
                  <cat.icon className="w-4 h-4 text-vibe-pink" />
                  {cat.name}
                </Link>
                );
              })}
            </div>
          </details>

          <Link to={to('/fishing')} className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === to('/fishing') ? 'text-vibe-pink' : 'text-snow/70'}`}>{c.fishing}</Link>

          <Link to={to('/about')} className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === to('/about') ? 'text-vibe-pink' : 'text-snow/70'}`}>{c.about}</Link>

          <AffiliateCTA
            partner="activities"
            sid="mobile_nav_book_now"
            destination="lappi-suomi-l2652"
            className="block mt-2 text-center bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            {c.bookCta}
          </AffiliateCTA>
        </div>
      )}
    </nav>
  );
}
