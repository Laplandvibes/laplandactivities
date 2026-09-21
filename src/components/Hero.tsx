import { ChevronDown, Sparkles, Dog, Sun, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import AffiliateCTA from './AffiliateCTA';
import HeroSlider from './HeroSlider';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { currentSeasonBucket } from '../i18n/seasonWords';

export default function Hero() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].hero;
  const summer = currentSeasonBucket() === 'summer';

  // Keep the hero height in `vh`. Tailwind v4 does NOT emit CSS for `svh`
  // arbitrary values here (min-h-[92svh] compiles to nothing at all), so the
  // min-height silently disappears and the hero collapses to content height
  // (~350px). Verified 2026-07-25 against the built CSS. Do not "modernise"
  // these units without checking dist/assets/*.css for the generated rule.
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-deep-night">
      <HeroSlider />
      {/* PEITE: kaksi kerrosta, ei yhta paksua.
          Vesa 20.9.2026: *"onko overlayta liikaa, jopa etusivun hero osiossakin?"* — oli.
          Edellinen versio tummensi KOKO kuvan 65-70 %:lla, koska heroteksti-portti mittasi
          leadille 2,74:1 rajan 4,5:1 sijaan. Se korjasi kontrastin mutta tappoi valokuvan:
          kuva oli ostettu, valittu ja rajattu, ja sitten peitetty.

          🔴 Oikea tapa on tummentaa SE KOHTA jossa teksti on, ei koko kuvaa. Portti mittaa
          tekstin todellisen taustan pikseleina, joten paikallinen tummennus kelpaa silla
          tasmalleen yhta hyvin kuin kokonainen — ja kuva jaa nakyviin.
          Kerros 1: kevyt pohjustus + alareunan hairoltapa sivun taustaan (kuva ei saa katketa
          viivaan). Kerros 2: soikea tummennus tekstipalstan kohdalla.
          🔴 Ala kevenna kumpaakaan ilman mittausta:
          npm run build && node ../scripts/portti.mjs --site laplandactivities-new --taso selain */}
      {/* Kevyt pohjustus koko kuvalle: ottaa karjen pois, ei peita. Alareuna sulaa
          sivun taustaan, ettei kuva katkea viivaan. */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-night/30 via-deep-night/10 to-deep-night pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* TUMMENNUS ANKKUROIDAAN TEKSTIIN, ei kuvaan.
            Vesa 20.9.: *"onko overlayta liikaa"* → kevensin. 21.9.: *"hero osion paalla on
            liikaa overlayta ja tummaa, ei kuvat nay"* → oli yha. Syy: tummennus oli
            IKKUNAN kokoinen soikio (96 % x 74 %, ydin 86 %), jotta 12 px:n ingressi
            lapaisi kontrastimittarin. Se peitti koko valokuvan.
            Nyt soikio on TEKSTILOHKON kokoinen ja kulkee sen mukana: muste saa taakseen
            sen mita tarvitsee, ja kuva jaa nakyviin kaikkialla muualla. Sama ratkaisu
            kuin korttien teksteissa (20.9.).
            🔴 Ala kevenna ilman mittausta:
            npm run build && node ../scripts/portti.mjs --site laplandactivities-new --portti heroteksti */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 -inset-y-8 sm:-inset-x-10 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 104% 58% at 50% 46%, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.82) 64%, rgba(15,23,42,0) 94%)',
          }}
        />
        <p className="font-body text-snow/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          {c.eyebrow}
        </p>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl tracking-wider mb-4 leading-[0.95] drop-shadow-[0_0_40px_rgba(236,72,153,0.55)] [text-shadow:0_3px_18px_rgba(0,0,0,0.85)]">
          <span className="text-vibe-pink">#</span>
          <span className="text-snow">LAPLAND</span>
          <span className="text-vibe-pink">ACTIVITIES</span>
        </h1>

        <p className="text-snow/90 text-base sm:text-xl xl:text-2xl max-w-2xl xl:max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          {c.lead}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-10 max-w-2xl mx-auto">
          <AffiliateCTA
            partner="activities"
            sid="hero_book_lapland"
            destination="lappi-suomi-l2652"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-vibe-pink/30"
          >
            <Sparkles className="w-5 h-5" />
            {c.primaryCta}
          </AffiliateCTA>
          <Link
            to={to('/destinations')}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-snow border border-white/25 px-8 py-4 rounded-full text-base font-semibold transition-all"
          >
            {c.secondaryCta}
          </Link>
        </div>

        {/* Pikakortit = aktiviteetteja, ei majoitusta eikä vuokra-autoa (Vesa 19.9.2026:
            "miksi etusivun hero-osiossa lukee vuokraa auto? ei se ole varmaan se ykkösjuttu
            kun tullaan aktiviteettisivulle"). Majoitus ja auto elävät HotelsStripissä ja
            BookingCTA:ssa alempana. Kolmas kortti vaihtuu kauden mukaan. */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
          <AffiliateCTA
            partner="activities-search"
            sid="hero_strip_aurora"
            destination="northern lights lapland"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors"
          >
            <Sparkles className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">{c.auroraTours}</p>
            <p className="text-snow/80 text-xs">{c.auroraToursDesc}</p>
          </AffiliateCTA>
          <AffiliateCTA
            partner="activities-search"
            sid="hero_strip_husky_reindeer"
            destination="husky reindeer lapland"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors"
          >
            <Dog className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">{c.huskyReindeer}</p>
            <p className="text-snow/80 text-xs">{c.huskyReindeerDesc}</p>
          </AffiliateCTA>
          {summer ? (
            <Link
              to={to('/categories/summer')}
              className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors col-span-2 sm:col-span-1"
            >
              <Sun className="w-4 h-4 text-vibe-pink mb-1" />
              <p className="font-heading tracking-wide text-base">{c.summerAdventures}</p>
              <p className="text-snow/80 text-xs">{c.summerAdventuresDesc}</p>
            </Link>
          ) : (
            <AffiliateCTA
              partner="activities-search"
              sid="hero_strip_snowmobile"
              destination="snowmobile safari lapland"
              className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors col-span-2 sm:col-span-1"
            >
              <Snowflake className="w-4 h-4 text-vibe-pink mb-1" />
              <p className="font-heading tracking-wide text-base">{c.snowmobileTours}</p>
              <p className="text-snow/80 text-xs">{c.snowmobileToursDesc}</p>
            </AffiliateCTA>
          )}
          <Link
            to={to('/categories')}
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-left transition-colors col-span-2 sm:col-span-1"
          >
            <ChevronDown className="w-4 h-4 text-vibe-pink mb-1" />
            <p className="font-heading tracking-wide text-base">{c.allCategories}</p>
            <p className="text-snow/80 text-xs">{c.allCategoriesDesc}</p>
          </Link>
        </div>

        <a
          href="#categories"
          className="text-snow/75 hover:text-snow/70 transition-colors hidden sm:inline-block"
          aria-label={c.scrollAria}
        >
          <ChevronDown className="w-7 h-7 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
