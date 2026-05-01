import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mountain, Heart, Shield, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — LaplandActivities</title>
        <meta name="description" content="LaplandActivities is the activities spoke of the LaplandVibes ecosystem — verified Arctic experiences across eight Finnish Lapland destinations." />
        <link rel="canonical" href="https://laplandactivities.online/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="pt-24 pb-20 px-4 sm:px-6 bg-deep-night min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase mb-3">About</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-snow tracking-wide mb-8">A Lapland-locals activity guide</h1>

          <div className="prose-lg max-w-none text-snow/75 space-y-5">
            <p className="text-lg leading-relaxed">
              LaplandActivities is the activities spoke of the #LaplandVibes
              ecosystem — a network of independent guides covering accommodation,
              food, nature, transport and tours across Finnish Lapland.
            </p>
            <p className="text-lg leading-relaxed">
              We connect travellers with verified local operators across eight
              destinations, from snowmobile safaris in Saariselkä to salmon
              fishing on the Tornionjoki river. Every booking goes through
              GetYourGuide so you get instant confirmation and free cancellation
              up to 24 hours on most tours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 mb-12">
            {[
              { icon: Mountain, title: 'Local expertise', text: 'We work only with licensed, experienced operators who know Lapland inside out.' },
              { icon: Heart, title: 'Authentic experiences', text: 'Every activity is vetted for safety and the kind of detail you cannot fake.' },
              { icon: Shield, title: 'Safe and trusted', text: 'All operators are licensed, insured and inspected by Finnish authorities.' },
              { icon: Globe, title: '#LaplandVibes network', text: 'Part of a 23-site Finnish Lapland network — your full trip-planning toolkit.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <item.icon className="w-7 h-7 text-vibe-pink mb-3" />
                <h3 className="font-heading text-xl text-snow tracking-wide mb-2">{item.title}</h3>
                <p className="text-snow/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">Affiliate disclosure</h2>
          <p className="text-snow/65 text-sm leading-relaxed mb-8">
            LaplandActivities earns a commission when you book through partner
            links — Hotels.com, GetYourGuide, EconomyBookings. This costs you
            nothing extra and keeps the site free. We only recommend operators
            and properties we genuinely believe deliver. Read the full disclosure
            in our <Link to="/terms" className="text-vibe-pink hover:underline">Terms of Use</Link>.
          </p>

          <h2 className="font-heading text-3xl text-snow tracking-wide mb-3">Contact</h2>
          <p className="text-snow/65 text-sm leading-relaxed">
            Email{' '}
            <a href="mailto:info@laplandactivities.online" className="text-arctic-cyan hover:underline">info@laplandactivities.online</a>
            {' '}— for partnerships,{' '}
            <a href="mailto:sales@laplandactivities.online" className="text-arctic-cyan hover:underline">sales@laplandactivities.online</a>.
          </p>

          <div className="mt-12">
            <Link to="/" className="text-vibe-pink hover:text-vibe-pink/80 font-semibold">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}
