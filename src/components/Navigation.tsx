import { useState, useEffect, useRef } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { Menu, X, ChevronDown} from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import { destinations } from '../data/destinations';
import { categories } from '../data/categories';
import { useLang, useLocalePath, pick } from '../i18n/useLang';
import EcosystemMenu from '../shared/EcosystemMenu';
import { COPY } from '../locales/copy';
import { localizeCategory, localizeDestination } from '../locales/data';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState<null | 'destinations' | 'categories'>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen', 'Öppna/stäng menyn');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDrop(null); }, [pathname]);


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




  const LangDropdown = () => (
    <div className="relative">
      <LanguageSwitcher tone={'dark'} />
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
            <LanguageSwitcher tone={'dark'} />
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
