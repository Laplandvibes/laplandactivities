import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Bell, Compass, Snowflake, Mail } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import FounderByline from '../shared/FounderByline';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../lib/supabase';

// Uutiskirjeen kieliohje sivun kielestä (ei <html lang>:sta, joka on esirenderöinnissä aina 'en').
// Kirjeitä lähtee vain suomeksi ja englanniksi, joten fi/en-sivulla ohje toistaisi itsestäänselvää
// eikä näy. Vesa 1.11.2026: "kuinka monta kertaa lukee sähköpostiosoite" (sama kuin skiresorts 92e9878).
const NL_LANG_NOTICE: Record<string, string> = {
  de: 'Die Newsletter werden auf Englisch versendet.', ja: 'ニュースレターは英語でお届けします。',
  es: 'Los boletines se envían en inglés.', pt: 'As newsletters são enviadas em inglês.', zh: '订阅邮件以英语发送。',
  ko: '뉴스레터는 영어로 발송됩니다.', fr: 'Les newsletters sont envoyées en anglais.', it: 'Le newsletter sono inviate in inglese.',
  nl: 'De nieuwsbrieven zijn in het Engels.', sv: 'Nyhetsbreven skickas på engelska.',
};
const NL_EMAIL_LABEL: Record<string, string> = {
  en: 'Email address', fi: 'Sähköpostiosoite', de: 'E-Mail-Adresse', ja: 'メールアドレス',
  es: 'Correo electrónico', pt: 'E-mail', zh: '电子邮箱', ko: '이메일 주소',
  fr: 'Adresse e-mail', it: 'Indirizzo e-mail', nl: 'E-mailadres', sv: 'E-postadress',
};
// Esimerkkiosoite kentän taustalle (4.11.2026): näyttää muodon, ei toista otsikkoa.
const NL_EMAIL_EXAMPLE: Record<string, string> = {
  en: 'name@example.com', fi: 'nimi@esimerkki.fi', de: 'name@beispiel.de', ja: 'name@example.com',
  es: 'nombre@ejemplo.es', pt: 'nome@exemplo.com.br', zh: 'name@example.com', ko: 'name@example.com',
  fr: 'nom@exemple.fr', it: 'nome@esempio.it', nl: 'naam@voorbeeld.nl', sv: 'namn@exempel.se',
};
const nlLang = (l?: string): string => {
  const x = (l || 'en').toLowerCase();
  return x === 'br' ? 'pt' : x === 'cn' ? 'zh' : x === 'kr' ? 'ko' : x === 'jp' ? 'ja' : x.split('-')[0];
};

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

const SOURCE = 'laplandactivities-inline';

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error';

const ICONS = [Bell, Compass, Snowflake];

// Marketing consent + age confirmation. Lives here (not in locales/copy.*) so the
// wording the user ticks is the exact string sent to the server as consentText.
const CONSENT_COPY: Record<Lang, { checkbox: string; privacy: string }> = {
  en: {
    checkbox: 'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    checkbox: 'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    checkbox: 'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    checkbox: '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    checkbox: 'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    checkbox: 'Aceito receber a newsletter do LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    checkbox: '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    checkbox: '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    checkbox: "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    checkbox: "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    checkbox: 'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    checkbox: 'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
};

export default function Newsletter() {
  const lang = useLang();
  const c = COPY[lang].newsletter;
  const cc = CONSENT_COPY[lang] ?? CONSENT_COPY.en;
  const to = useLocalePath();
  const [email, setEmail] = useState('');
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  // [LV-FUNNEL] view = osio vieritetty näkyviin (kerran), start = 1. fokus,
  // blocked kerran per submit-yritys (natiivi invalid laukeaa per kenttä).
  const funnelData = { surface: 'inline', lang };
  const sectionRef = useRef<HTMLElement | null>(null);
  const startTracked = useRef(false);
  const blockedTracked = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        track('nl_view', funnelData);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const trackStart = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track('nl_start', funnelData);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !consented || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
      track('nl_blocked', { ...funnelData, reason: !email ? 'email' : !consented ? 'consent' : 'env' });
      setErrorMsg(c.errorFallback);
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    track('nl_submit', funnelData);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          source: SOURCE,
          consent: true,
          ageConfirmed: true,
          consentText: cc.checkbox,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || c.errorFallback);
      if (data.alreadySubscribed) {
        setStatus('already');
        track('nl_success', { ...funnelData, already: true });
      } else {
        setStatus('success');
        track('nl_success', funnelData);
        trackNewsletterSignup(SOURCE);
      }
      setEmail('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : c.errorFallback;
      setErrorMsg(msg);
      setStatus('error');
      track('nl_error', funnelData);
    }
  }

  const isDone = status === 'success' || status === 'already';

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6" ref={sectionRef}
      style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7E22CE 35%, #BE185D 70%, #DB2777 100%)' }}>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -left-12 top-12 w-72 h-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-white/85 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-3">
            {c.h2}
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed max-lg:text-left">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 text-white">
          {c.benefits.map((b, i) => {
            const Icon = ICONS[i] ?? Bell;
            return (
              <div key={b.title} className="bg-white/12 rounded-xl p-4 sm:p-5 backdrop-blur-sm border border-white/20">
                <Icon className="w-5 h-5 mb-2 text-white" />
                <p className="font-heading tracking-wide text-lg leading-tight mb-1">{b.title}</p>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{b.body}</p>
              </div>
            );
          })}
        </div>

        {isDone ? (
          <div className="max-w-md mx-auto bg-white/15 border border-white/30 rounded-2xl p-6 text-center text-white backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <p className="font-heading text-2xl tracking-wide mb-1">
              {status === 'success' ? c.successTitle : c.alreadyTitle}
            </p>
            <p className="text-white/85 text-sm">
              {status === 'success' ? c.successBody : c.alreadyBody}
            </p>
          </div>
        ) : (
          <><FounderByline tone="pink" />
          {/* 4.11.2026 (Vesa: kenttä "leijuu" eikä "anna esimerkkiä taustalle"): Codexin 28.10. tumma laatikko pois, otsikko kentän yllä, kenttä ja nappi samalla rivillä, esimerkkiosoite kentässä. */}
          <form onSubmit={submit}
            onInvalidCapture={(e) => {
              if (blockedTracked.current) return;
              blockedTracked.current = true;
              window.setTimeout(() => { blockedTracked.current = false; }, 400);
              const t = e.target as HTMLInputElement;
              track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
            }}
            className="max-w-lg mx-auto text-left"
          >
            <label htmlFor="nl-inline-email" className="block text-white font-semibold text-sm mb-2">
              {NL_EMAIL_LABEL[nlLang(lang)] ?? NL_EMAIL_LABEL.en}
            </label>
            {NL_LANG_NOTICE[nlLang(lang)] && (
              <p id="nl-inline-email-lang" className="text-white text-[13px] leading-relaxed -mt-1 mb-2">
                {NL_LANG_NOTICE[nlLang(lang)]}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 min-w-0">
                <Mail aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                <input
                  id="nl-inline-email"
                  aria-describedby={NL_LANG_NOTICE[nlLang(lang)] ? 'nl-inline-email-lang' : undefined}
                  type="email"
                  required
                  value={email}
                  placeholder={NL_EMAIL_EXAMPLE[nlLang(lang)] ?? NL_EMAIL_EXAMPLE.en}
                  onFocus={trackStart}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  disabled={status === 'loading'}
                  className="w-full h-14 bg-white text-slate-900 border border-white rounded-full pl-11 pr-4 text-base placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-14 shrink-0 bg-deep-night hover:bg-[#1E293B] text-white font-bold px-7 rounded-full shadow-lg transition-colors text-base whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> {c.subscribingBtn}</>
                ) : (
                  <><Send className="w-4 h-4" /> {c.subscribeBtn}</>
                )}
              </button>
            </div>
            <label className="mt-4 flex items-start gap-2.5 text-white text-xs leading-relaxed cursor-pointer">
              <input
                type="checkbox"
                checked={consented}
                onFocus={trackStart}
                onChange={(e) => setConsented(e.target.checked)}
                required
                className="mt-0.5 w-4 h-4 shrink-0 rounded border border-white/40 accent-white cursor-pointer"
              />
              <span>
                {cc.checkbox}{' '}
                <a
                  href={to('/privacy/')}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-white underline underline-offset-2"
                >
                  {cc.privacy}
                </a>
              </span>
            </label>
          </form></>
        )}

        {status === 'error' && (
          <p className="mt-3 text-xs text-white/90 text-center inline-flex items-center justify-center gap-1.5 w-full">
            <AlertCircle className="w-3.5 h-3.5" /> {errorMsg}
          </p>
        )}

        <p className="text-white/70 text-xs text-center mt-5">
          {c.footnote}
        </p>
      </div>
    </section>
  );
}
