import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import { destinations } from '../data/destinations';
import { categories } from '../data/categories';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState<null | 'destinations' | 'categories'>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all border-b ${
        scrolled
          ? 'bg-deep-night/95 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-deep-night/70 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="LaplandActivities home">
          <span className="font-heading tracking-wide text-xl sm:text-2xl">
            <span className="text-vibe-pink">#</span>
            <span className="text-snow">LAPLAND</span>
            <span className="text-vibe-pink">ACTIVITIES</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-7" ref={dropRef}>
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide transition-colors ${pathname === '/' ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
          >
            Home
          </Link>

          {/* Destinations dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDrop(drop === 'destinations' ? null : 'destinations')}
              aria-expanded={drop === 'destinations'}
              aria-haspopup="true"
              className={`text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1 ${pathname.startsWith('/destinations') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
            >
              Destinations <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drop === 'destinations' ? 'rotate-180' : ''}`} />
            </button>
            {drop === 'destinations' && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/15 bg-deep-night/95 backdrop-blur-md shadow-2xl shadow-black/50 p-2">
                <Link to="/destinations" className="block px-3 py-2 rounded-lg text-vibe-pink text-sm font-semibold hover:bg-white/5">All destinations →</Link>
                <div className="my-1 border-t border-white/10" />
                {destinations.map((d) => (
                  <Link
                    key={d.slug}
                    to={`/destinations/${d.slug}`}
                    className="block px-3 py-2 rounded-lg text-snow/80 hover:text-snow hover:bg-white/5 text-sm"
                  >
                    {d.name}
                    <span className="text-snow/40 text-xs block">{d.tagline}</span>
                  </Link>
                ))}
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
              className={`text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1 ${pathname.startsWith('/categories') ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
            >
              Categories <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drop === 'categories' ? 'rotate-180' : ''}`} />
            </button>
            {drop === 'categories' && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/15 bg-deep-night/95 backdrop-blur-md shadow-2xl shadow-black/50 p-2">
                <Link to="/categories" className="block px-3 py-2 rounded-lg text-vibe-pink text-sm font-semibold hover:bg-white/5">All categories →</Link>
                <div className="my-1 border-t border-white/10" />
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/categories/${c.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-snow/80 hover:text-snow hover:bg-white/5 text-sm"
                  >
                    <c.icon className="w-4 h-4 text-vibe-pink" />
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`text-sm font-medium tracking-wide transition-colors ${pathname === '/about' ? 'text-snow' : 'text-snow/65 hover:text-snow'}`}
          >
            About
          </Link>

          <AffiliateCTA
            partner="activities"
            sid="nav_book_now"
            destination="lappi-suomi-l2652"
            className="bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/20"
          >
            Book Activities
          </AffiliateCTA>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-snow/80 hover:text-snow"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-deep-night border-t border-white/10 px-4 pb-5 max-h-[80vh] overflow-y-auto">
          <Link to="/" className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === '/' ? 'text-vibe-pink' : 'text-snow/70'}`}>Home</Link>

          <details className="py-2 border-b border-white/5">
            <summary className="text-sm font-medium text-snow/70 cursor-pointer flex items-center justify-between py-1">
              Destinations <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="pl-3 pt-2 pb-1">
              <Link to="/destinations" className="block py-2 text-vibe-pink text-sm font-semibold">All destinations →</Link>
              {destinations.map((d) => (
                <Link key={d.slug} to={`/destinations/${d.slug}`} className="block py-1.5 text-snow/65 text-sm">
                  {d.name}
                </Link>
              ))}
            </div>
          </details>

          <details className="py-2 border-b border-white/5">
            <summary className="text-sm font-medium text-snow/70 cursor-pointer flex items-center justify-between py-1">
              Categories <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="pl-3 pt-2 pb-1">
              <Link to="/categories" className="block py-2 text-vibe-pink text-sm font-semibold">All categories →</Link>
              {categories.map((c) => (
                <Link key={c.slug} to={`/categories/${c.slug}`} className="flex items-center gap-2 py-1.5 text-snow/65 text-sm">
                  <c.icon className="w-4 h-4 text-vibe-pink" />
                  {c.name}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/about" className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === '/about' ? 'text-vibe-pink' : 'text-snow/70'}`}>About</Link>

          <AffiliateCTA
            partner="activities"
            sid="mobile_nav_book_now"
            destination="lappi-suomi-l2652"
            className="block mt-4 text-center bg-vibe-pink hover:bg-vibe-pink/90 text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            Book Activities
          </AffiliateCTA>
        </div>
      )}
    </nav>
  );
}
