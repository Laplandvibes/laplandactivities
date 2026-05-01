import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// CRITICAL: dedupe React across the consumer site + ../../shared/. Without it,
// any shared component using useContext (CookieBanner, NewsletterPopup, Footer)
// will mount with a null context and the whole tree renders blank in production.
// See lv_critical_react_dedupe.md.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
});
