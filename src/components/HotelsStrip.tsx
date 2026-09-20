import { Hotel, ArrowRight } from 'lucide-react';

/** Oma valokuvamme: jarven rannan hirsimokki, Kemijarvi 7/2026 (© LaPeso Oy).
 *  Kuvakuitti: src/data/photoCredits.ts. Kayttosaanto: ks. Lomarengas-kortti alla. */
const LOMARENGAS_PHOTO = '/images/hotels/log-cabin-lakeside.webp';
import { respImg } from '../lib/respImg';
import AffiliateCTA from './AffiliateCTA';
import SmartImage from './SmartImage';
import PhotoCredit from './PhotoCredit';
import { HERO, MKT } from '../data/images';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * [2026-08-23] Kohdevahdin löydös: "Lapland glass igloo, Finland" -ss ratkesi
 * Trip.comin maakuntalistaksi ja tarkenne "glass igloo" PUTOSI — kortti lupasi
 * iglut, kohde näytti yleisen Lappi-listan. Korjaus CLAUDE.md:n kiinteistö-
 * mekanismilla (trip_hotel+trip_city / sembo_hotel+sembo_poly):
 *   - Glass Igloos → Golden Crown Levin Iglut. Id-parit appin verifioidusta
 *     taulusta (laplandvibes-app-new/src/data/booking.ts, lev-iglut) ja koko
 *     ketju mitattu livenä 23.8.: Worker → trip.com/hotels/detail/?hotelId=
 *     9528161 (200, "Levin Iglut (Kittila) - 2026 Prices") ja fi → sembo.fi
 *     hotel-details/2512109. Sembo-parit lähetetään KAIKILLA kielillä:
 *     hotellikoodi + polygon-id ovat markkinariippumattomia — todennettu
 *     23.8. renderöimällä sama koodi sembo.se:llä ("Din resa till Levi") ja
 *     sembo.de:llä ("Ihre Reise nach Levi"), molemmat näyttävät Golden Crown
 *     Levin Iglutin. Worker sitoo isännän ja kanavan markkinaan (do.sembo.se
 *     + as=SE-kanava jne.), ja ei-Sembo-lokaalit ohittavat parit harmitta.
 *   - Log cabins → Lomarengas (verkoston mökkikumppani, CLAUDE.md "Cabins").
 *     Sama tarkenne-ongelma: "log cabin" putosi Tripin resolverissa, mutta
 *     Lomarengas MYY juuri järvimökkejä saunoineen. Ohjelmaehto: nimi näkyviin
 *     → per-kortin label. dest-URLit mitattu 23.8. (200 + canonical).
 */
const META: {
  /** Kumppanin (Sembo) oma kuva siitä hotellista, johon kortti vie — tyhjä = tekstikortti ilman valokuvaa. */
  src: string; fallback: string; sid: string; query: string; accent: string;
  trip?: [string, string]; sembo?: [string, string];
  partner?: 'lomarengas'; destFi?: string; label?: string;
  /** Hotellin nimi, joka näytetään kumppanin nimen perässä (Sembo · Levi Hotel Spa). */
  hotel?: string;
}[] = [
  // 19.9.2026: jokainen Sembo-kortti vie NIMETTYYN hotelliin ja näyttää sen oman kuvan (Vesan
  // kuvalupa 10.9., sama kuin hoteldeals/wellness; kuitit public/images/sembo/KUITIT.json).
  // Id-parit hoteldealsin propertyBooking.ts:stä (mitattu livenä 11.9.).
  { src: '/images/sembo/levinIglut.webp', fallback: MKT.igluCouple, sid: 'hotels_strip_glass_igloo', query: 'Golden Crown Levin Iglut, Levi, Finland', accent: 'vibe-pink',
    trip: ['38182', '9528161'], sembo: ['2512109', '360006'], hotel: 'Golden Crown Levin Iglut' },
  { src: '', fallback: '', sid: 'hotels_strip_log_cabin', query: 'https://www.lomarengas.fi/en/cottages/lapland', accent: 'aurora-green',
    partner: 'lomarengas', destFi: 'https://www.lomarengas.fi/mokit/lappi', label: 'Lomarengas' },
  { src: '/images/sembo/leviHotelSpa.webp', fallback: HERO.snowyForest, sid: 'hotels_strip_fell_resort', query: 'Levi Hotel Spa, Levi, Finland', accent: 'arctic-cyan',
    trip: ['38182', '2164910'], sembo: ['24638', '360006'], hotel: 'Levi Hotel Spa' },
  { src: '/images/sembo/arcticTreeHouse.webp', fallback: HERO.huskyAurora, sid: 'hotels_strip_boutique', query: 'Arctic TreeHouse Hotel, Rovaniemi, Finland', accent: 'vibe-pink',
    trip: ['1794', '10035619'], sembo: ['922953', '360732'], hotel: 'Arctic TreeHouse Hotel' },
  { src: '/images/sembo/kakslauttanen.webp', fallback: MKT.igluCouple, sid: 'hotels_strip_smoke_sauna', query: 'Kakslauttanen Arctic Resort, Saariselkä, Finland', accent: 'aurora-green',
    trip: ['56309', '8669535'], sembo: ['1679682', '360014'], hotel: 'Kakslauttanen Arctic Resort' },
];

export default function HotelsStrip() {
  const lang = useLang();
  const c = COPY[lang].hotelsStrip;
  // fi links carry locale=fi_FI -> Worker routes to Sembo; every other locale -> Trip.com.
  const partnerLabel = lang === 'fi' ? 'Sembo' : 'Trip.com';

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-deep-night border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-snow tracking-wide mt-1 leading-tight">
              {c.h2}
            </h2>
            <p className="text-snow/65 mt-3 max-w-xl text-sm sm:text-base">
              {c.lead}
            </p>
          </div>
          <AffiliateCTA
            partner="hotels"
            sid="hotels_strip_browse_all"
            destination="Lapland, Finland"
            className="self-start sm:self-auto inline-flex items-center gap-2 whitespace-nowrap bg-[#DB2777] hover:bg-[#BE185D] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-vibe-pink/25"
          >
            <Hotel className="w-4 h-4" />
            {c.compareCta}
          </AffiliateCTA>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.lodging.map((l, idx) => {
            const m = META[idx] ?? META[0];
            const propParams = {
              ...(m.trip ? { trip_city: m.trip[0], trip_hotel: m.trip[1] } : {}),
              ...(m.sembo ? { sembo_hotel: m.sembo[0], sembo_poly: m.sembo[1] } : {}),
            };
            return (
              <AffiliateCTA
                key={m.sid}
                partner={m.partner ?? 'hotels'}
                sid={m.sid}
                destination={m.partner === 'lomarengas' && lang === 'fi' ? m.destFi : m.query}
                query={Object.keys(propParams).length ? propParams : undefined}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-vibe-pink/40 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all aspect-[4/3] ${idx === 0 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[480px]' : ''}`}
              >
                {m.src ? (
                  <SmartImage
                    src={m.src}
                    {...respImg(m.src, 'card')}
                    fallback={m.fallback}
                    alt={m.hotel ? `${m.hotel} — ${l.name}` : l.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* LOMARENGAS — oma valokuvamme taustalle, kumppanin logo oikeaan ylakulmaan.
                     Vesa 20.9.2026: *"miksi tuosta lomarenkaan mainoksesta et saa hienoa, logo oikea
                     ylakulma ja kuva taustalle?"*

                     🔴 Miksi tassa EI ole kumppanin omaa kuvaa: Lomarengas ei ole toimittanut
                     kuvatiedostoja, ja se on pyydettava heilta. Siihen asti kuva on MEIDAN OMA
                     valokuvamme (Kemijarvi 7/2026, © LaPeso Oy) ja se on merkitty kuvakuittiin
                     nakyvasti — kortti ei siis vaita kuvan olevan Lomarenkaan mokki.
                     Sen verran §24 sallii ja vaatii: kortti ei lupaa yhta nimettya kohdetta vaan
                     mokkiluokan, ja kuva on oma aito Lapin kuva, ei yleinen stock muualta.
                     🔴 Ala vaihda tahan generoitua kuvaa eika toisen yrityksen mokkia. */
                  <div className="absolute inset-0" aria-hidden="true">
                    <img
                      src={LOMARENGAS_PHOTO}
                      {...respImg(LOMARENGAS_PHOTO, 'card')}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Logo oikeaan ylakulmaan valkoiselle laatalle: Lomarenkaan sanamerkki on
                        sininen eika erotu tummalta pohjalta (logopolariteettisaanto). */}
                    <span className="absolute top-4 right-4 sm:top-5 sm:right-5 inline-flex rounded-xl bg-white px-3.5 py-2.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.85)]">
                      <img src="/images/partners/lomarengas.png" alt="" width={472} height={150} loading="lazy" decoding="async" className="h-6 sm:h-7 w-auto" />
                    </span>
                  </div>
                )}
                {/* Vesa 19.9.: "tekstit ei erotu". Kirkas kuva (revontulet, valaistu hotelli) söi
                    vanhan scrimin — pohja tummennettu ja musteet saavat varjon. */}
                {/* SCRIM KAHDESSA OSASSA — tama on kolmas versio, ja kaksi edellista olivat
                    kumpikin yhta liikaa johonkin suuntaan:
                      19.9. "tekstit ei erotu"  → tummensin KOKO kortin 45 %:iin asti
                      20.9. "onko overlayta liikaa" → kevensin KOKO kortin
                      20.9. "teksti ei oikein erotu" → kevennys osui myos tekstiin
                    Teksti istuu kortin ALAREUNASSA. Siksi tummennus kuuluu sinne eika muualle:
                    kuva saa jaada kirkkaaksi ylaosassa, ja muste saa taakseen sen mita se
                    tarvitsee. Yksi tasainen peite ei voi palvella molempia. */}
                {/* (a) hyvin kevyt koko kortille: ottaa karjen pois eika peita mitaan */}
                <div className="absolute inset-0 bg-deep-night/12" />
                {/* (b) tekstin oma kaista: alin 60 % kortista, taysin tumma alareunassa */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-deep-night via-deep-night/88 via-38% to-transparent" />
                {m.src && <PhotoCredit src={m.src} links={false} />}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  {/* YLARIVI = KOHTEEN NIMI, ei varauskanavan nimi.
                      🔴 Tassa luki aiemmin "TRIP.COM · Golden Crown Levin Iglut", ja samassa
                      kortissa kuvakuitti sanoi "Sembo". Vesa 20.9.: *"miksi täällä lukee
                      tripo.com ja kuvat kuitenkin sembo?"* Molemmat olivat totta, mutta yhdessa
                      ne vain sekoittavat: varauskanava vaihtuu kielen mukaan (fi → Sembo,
                      muut → Trip.com), kun taas kuvatiedosto on Sembon kaikilla kielilla.
                      Kortin ylarivin tehtava on kertoa MIKA KOHDE kuvassa on. Varauskanava
                      sanotaan CTA-rivilla, jossa se on lupaus siita mihin klikkaus vie.
                      🔴 Valkoisena, ei korostusvarilla: 10 px korostusvari valokuvan paalla on
                      verkoston mitattu heikoin tekstityyppi (skiresorts 14.9.). */}
                  {m.src && m.hotel && (
                    <p className="text-snow/90 text-[11px] font-semibold tracking-[0.18em] uppercase mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{m.hotel}</p>
                  )}
                  <h3 className={`font-heading text-snow tracking-wide leading-tight group-hover:text-vibe-pink transition-colors drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] ${idx === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                    {l.name}
                  </h3>
                  <p className="text-snow/85 text-sm leading-relaxed mt-2 mb-3 max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">{l.blurb}</p>
                  {/* Varauskanava tassa, ei ylarivilla: nain lukija tietaa ENNEN klikkausta
                      mihin han menee, eika se sekoitu kuvakuittiin. Kumppanin nimi on
                      erisnimi, joten se ei tarvitse kaannosta 12 kielelle. */}
                  <span className="inline-flex items-center gap-1 text-vibe-pink text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    {c.comparePrices}
                    {m.label ? '' : ` · ${partnerLabel}`} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </AffiliateCTA>
            );
          })}
        </div>
      </div>
    </section>
  );
}
