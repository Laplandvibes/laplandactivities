import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Hash links (e.g. #categories, or a <Link to="#section">) must scroll to the
    // target section, not the top. The target may mount a frame or two after
    // navigation (lazy routes), so retry a few frames until it exists.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      let cancelled = false;
      const tick = () => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries++ < 40) {
          setTimeout(tick, 60);
        }
      };
      tick();
      return () => { cancelled = true; };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
