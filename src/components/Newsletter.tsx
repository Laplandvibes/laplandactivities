import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Bell, Compass, Snowflake } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import FounderByline from '../shared/FounderByline';

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

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
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
    checkbox: 'Aceito receber a newsletter da LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
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
          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
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
          <form
            onSubmit={submit}
            onInvalidCapture={(e) => {
              if (blockedTracked.current) return;
              blockedTracked.current = true;
              window.setTimeout(() => { blockedTracked.current = false; }, 400);
              const t = e.target as HTMLInputElement;
              track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
            }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onFocus={trackStart}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.emailPlaceholder}
                aria-label={c.emailPlaceholder}
                autoComplete="email"
                disabled={status === 'loading'}
                className="flex-1 px-5 py-3 rounded-full bg-white/15 text-white placeholder:text-white/80 border border-white/30 focus:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-full bg-white text-vibe-pink font-semibold inline-flex items-center justify-center gap-2 hover:bg-snow transition-colors disabled:opacity-70 cursor-pointer shadow-lg"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> {c.subscribingBtn}</>
                ) : (
                  <><Send className="w-4 h-4" /> {c.subscribeBtn}</>
                )}
              </button>
            </div>
            <label className="mt-4 flex items-start gap-2.5 text-white/85 text-xs leading-relaxed cursor-pointer">
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
                  href={to('/privacy')}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2 hover:text-white"
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
