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
    // 18.10.2026 (Vesa: "No korjaa se laikku"): verkoston heromalli, sama kuin kohde-, kategoria- ja
    // kalastussivuilla 17.10. (muisti feedback_hero_kuva_puhtaana_otsikko_alle). Tekstin takana oli
    // kaksi sumennettua tummaa laikkua (tekstilohkon soikio + sanamerkin blur) ja koko kuva 30 %
    // himmennettynä (HeroSlider opacity-70), joten valokuvasta näkyivät vain reunat. Nyt alle 1024 px
    // kuva on oma puhdas kaistansa ja teksti sen alla sivun pohjalla; lg+:ssa teksti on kuvan päällä
    // vasemmalla, ja luettavuus tulee vaakaliukumasta, joka jättää kuvan oikean puolen kirkkaaksi.
    // 🔴 Ei laikkuja takaisin: heroteksti-portti mittaa lg+:n kontrastin liukuvärin päältä.
    <section className="relative bg-deep-night pt-16 lg:min-h-[92vh] lg:flex lg:items-center overflow-hidden">
      <div
        className="relative h-[42svh] min-h-[240px] sm:h-[380px] md:h-[440px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0 overflow-hidden"
        data-lv-tp-tausta="hero"
      >
        <HeroSlider />
        <div aria-hidden="true" className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/70 via-55% to-transparent pointer-events-none" />
        <div aria-hidden="true" className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10 lg:py-16">
        <div className="max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
        <p className="font-body text-snow/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 lg:mb-6">
          {c.eyebrow}
        </p>

        {/* Sanamerkki on AINA yksi rivi. Mitattu 18.10.2026: leveys ≈ 7,23 × fonttikoko
            (36 px = 260, 72 px = 521, 96 px = 694). Puhelimella 11,5vw (320 px: 266 / tilaa 288),
            sm–lg 72 px, xl 96 px 768 px:n palstassa. Ennen 96 px lg:n 672 px:n palstassa katkesi
            "…ACTIVITIE / S".
            Pinkki on lg+:ssa heropinkki #F9A8D4, koska sanamerkki on silloin valokuvan päällä:
            #EC4899 mitattiin ruska- ja kesävaellusruudun kirkkaissa kohdissa 2,1:1 (raja 3:1,
            korttiteksti + heroteksti 18.10.2026). Sama ratkaisu kuin skiresortsin herossa 23.9.;
            alle lg:n sanamerkki on sivun tummalla pohjalla ja pysyy vibe-pinkkinä. */}
        <h1 className="font-heading text-[clamp(2.25rem,11.5vw,3.75rem)] sm:text-7xl xl:text-8xl whitespace-nowrap tracking-wider mb-4 leading-[0.95] drop-shadow-[0_0_40px_rgba(236,72,153,0.55)] lg:[text-shadow:0_3px_18px_rgba(0,0,0,0.85)]">
          <span className="text-vibe-pink lg:text-[#F9A8D4]">#</span>
          <span className="text-snow">LAPLAND</span>
          <span className="text-vibe-pink lg:text-[#F9A8D4]">ACTIVITIES</span>
        </h1>

        <p className="text-snow/90 text-base sm:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed max-lg:text-balance lg:drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          {c.lead}
        </p>

        {/* 🔴 Pääpainike on SELAUSNAPPI ("Selaa retkiä", 8.10.2026): se avaa GYG:n Lapin
            listan, ei tuotetta, joten se ei saa luvata varausta. Varausnapit ("Etsi ja varaa")
            ovat korteissa, joissa kullakin on oma tuotteensa (data/activities.ts GYG_PRODUCT). */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center mb-8 lg:mb-10 max-w-sm sm:max-w-none mx-auto lg:mx-0">
          <AffiliateCTA
            partner="activities"
            sid="hero_browse_lapland"
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
            BookingCTA:ssa alempana. Kolmas kortti vaihtuu kauden mukaan.
            Kortit ovat aihekortteja: kukin avaa GYG:n Lapin KATEGORIAsivun (mitattu: revontulet 307,
            husky 134, moottorikelkka 186 tuotetta, hubin gygCategories.ts 10.8.), ei hakua. */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 lg:mb-12">
          <AffiliateCTA
            partner="activities"
            sid="hero_strip_aurora"
            destination="lapland-finland-l2652/northern-lights-tc310"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-center lg:text-left transition-colors"
          >
            <Sparkles className="w-4 h-4 text-vibe-pink mb-1 mx-auto lg:mx-0" />
            <p className="font-heading tracking-wide text-base">{c.auroraTours}</p>
            <p className="text-snow/90 text-xs">{c.auroraToursDesc}</p>
          </AffiliateCTA>
          <AffiliateCTA
            partner="activities"
            sid="hero_strip_husky_reindeer"
            destination="lapland-finland-l2652/dog-sledding-husky-tours-tc118"
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-center lg:text-left transition-colors"
          >
            <Dog className="w-4 h-4 text-vibe-pink mb-1 mx-auto lg:mx-0" />
            <p className="font-heading tracking-wide text-base">{c.huskyReindeer}</p>
            <p className="text-snow/90 text-xs">{c.huskyReindeerDesc}</p>
          </AffiliateCTA>
          {summer ? (
            <Link
              to={to('/categories/summer')}
              className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-center lg:text-left transition-colors col-span-2 sm:col-span-1"
            >
              <Sun className="w-4 h-4 text-vibe-pink mb-1 mx-auto lg:mx-0" />
              <p className="font-heading tracking-wide text-base">{c.summerAdventures}</p>
              <p className="text-snow/90 text-xs">{c.summerAdventuresDesc}</p>
            </Link>
          ) : (
            <AffiliateCTA
              partner="activities"
              sid="hero_strip_snowmobile"
              destination="lapland-finland-l2652/snowmobile-tours-tc119"
              className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-center lg:text-left transition-colors col-span-2 sm:col-span-1"
            >
              <Snowflake className="w-4 h-4 text-vibe-pink mb-1 mx-auto lg:mx-0" />
              <p className="font-heading tracking-wide text-base">{c.snowmobileTours}</p>
              <p className="text-snow/90 text-xs">{c.snowmobileToursDesc}</p>
            </AffiliateCTA>
          )}
          <Link
            to={to('/categories')}
            className="rounded-2xl bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 px-4 py-3 text-snow text-center lg:text-left transition-colors col-span-2 sm:col-span-1"
          >
            <ChevronDown className="w-4 h-4 text-vibe-pink mb-1 mx-auto lg:mx-0" />
            <p className="font-heading tracking-wide text-base">{c.allCategories}</p>
            <p className="text-snow/90 text-xs">{c.allCategoriesDesc}</p>
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
      </div>
    </section>
  );
}
