import SharedNewsletterPopup from '../shared/NewsletterPopup';
import { POPUP_COPY } from './newsletterPopupSite';
import { trackNewsletterSignup } from '../lib/analytics';
import { useLang } from '../i18n/useLang'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../lib/supabase';


export default function NewsletterPopup() {
  const locale = useLang();
  return (
    <SharedNewsletterPopup
copy={POPUP_COPY}
lang={locale as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
            siteId="laplandactivities"
      brandWord="ACTIVITIES"
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_ANON_KEY}
      onSubscribed={(s) => trackNewsletterSignup(s)}
    />
  );
}
