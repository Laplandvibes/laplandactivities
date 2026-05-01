import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Bell, Compass, Snowflake } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
const SOURCE = 'laplandactivities-inline';

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
      setErrorMsg('Newsletter signup is temporarily unavailable.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email, source: SOURCE }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Subscription failed');
      if (data.alreadySubscribed) {
        setStatus('already');
      } else {
        setStatus('success');
        trackNewsletterSignup(SOURCE);
      }
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err?.message || 'Subscription failed. Please try again.');
      setStatus('error');
    }
  }

  const isDone = status === 'success' || status === 'already';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-vibe-pink to-pink-600 py-16 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -left-12 top-12 w-72 h-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-white/85 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            The #LaplandVibes newsletter
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-3">
            Get the booking windows that always sell out.
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            One email a week from people who actually live in Lapland — when aurora
            forecasts spike, which operators are still open in mud-season, and the
            tours that go on sale before the booking sites notice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 text-white">
          {[
            { icon: Bell, title: 'Aurora alerts', body: 'When Kp jumps above 4 — usually 24–48 h before clear skies.' },
            { icon: Compass, title: 'What is open now', body: 'Real seasonal windows for huskies, snowmobiles and saunas.' },
            { icon: Snowflake, title: 'Locals-only tips', body: 'The tour you can not find on the partner sites until June.' },
          ].map((b) => (
            <div key={b.title} className="bg-white/12 rounded-xl p-4 sm:p-5 backdrop-blur-sm border border-white/20">
              <b.icon className="w-5 h-5 mb-2 text-white" />
              <p className="font-heading tracking-wide text-lg leading-tight mb-1">{b.title}</p>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        {isDone ? (
          <div className="max-w-md mx-auto bg-white/15 border border-white/30 rounded-2xl p-6 text-center text-white backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <p className="font-heading text-2xl tracking-wide mb-1">
              {status === 'success' ? 'You\'re in.' : 'Already on the list!'}
            </p>
            <p className="text-white/85 text-sm">
              {status === 'success'
                ? 'Check your inbox for a welcome from Lapland.'
                : 'Looks like you are already subscribed — talk soon.'}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              autoComplete="email"
              disabled={status === 'loading'}
              className="flex-1 px-5 py-3 rounded-full bg-white/15 text-white placeholder:text-white/60 border border-white/30 focus:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-full bg-white text-vibe-pink font-semibold inline-flex items-center justify-center gap-2 hover:bg-snow transition-colors disabled:opacity-70 cursor-pointer shadow-lg"
            >
              {status === 'loading' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing…</>
              ) : (
                <><Send className="w-4 h-4" /> Subscribe</>
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-xs text-white/90 text-center inline-flex items-center justify-center gap-1.5 w-full">
            <AlertCircle className="w-3.5 h-3.5" /> {errorMsg}
          </p>
        )}

        <p className="text-white/70 text-xs text-center mt-5">
          One email a week or less. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
