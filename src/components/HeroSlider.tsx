import { useEffect, useState } from 'react';
import { respImg } from '../lib/respImg';
import SmartImage from './SmartImage';
import { HERO, focalFor } from '../data/images';
import { currentSeason } from '../i18n/seasonWords';
import PhotoCredit from './PhotoCredit';
import { useLang } from '../i18n/useLang';

/**
 * Auto-rotating hero slider — real photographs cycling every 6 s (19.9.2026: AI frames
 * replaced by Wikimedia Commons photos of the actual places + one own Ruka photo; credits
 * in data/photoCredits.ts, shown bottom-right via <PhotoCredit />).
 * Pure CSS cross-fade, no animation libraries (LV brand rule). The ordering is
 * season-aware (owner finding #3): in summer the midnight-sun frames lead; in
 * winter the aurora/snow frames lead — so the first frame a visitor sees matches
 * the season. Each frame carries a focal point so heads/helmets are never cropped.
 */

interface Slide {
  src: string;
  alt: string;
  fallback: string;
  season: 'summer' | 'autumn' | 'winter' | 'any';
}

const S = {
  husky:     { src: '/images/heroes/slider-01-husky-aurora.webp', alt: 'Husky team on a snowy forest trail at Saija, Salla', fallback: HERO.huskyAurora, season: 'winter' as const },
  snowmobile:{ src: '/images/heroes/slider-02-snowmobile-fells.webp', alt: 'Snowmobile on frozen Lake Inari', fallback: HERO.huskySnowmobile, season: 'winter' as const },
  // 23.9.2026: syksyn ensimmainen ruutu oli heinakuun vihrea Rukan gondoli, jonka alt-teksti
  // sanoi "summer forest" — syyskuussa. Ruska on Hetta-Pallas-reitilta (Commons, CC BY-SA 4.0).
  ruska:     { src: '/images/heroes/slider-08-ruska-hetta-pallas.webp', alt: 'Autumn ruska colours on the Hetta–Pallas hiking trail, Enontekiö', fallback: HERO.snowyForest, season: 'autumn' as const },
  ruka:      { src: '/images/heroes/slider-03-summer-hike.webp', alt: 'Ruka gondola lift above the summer forest and lakes, Kuusamo', fallback: HERO.snowyForest, season: 'summer' as const },
  igloo:     { src: '/images/heroes/slider-04-glass-igloo.webp', alt: 'Aurora cabins with glass roofs in Inari', fallback: HERO.glassIgloo, season: 'winter' as const },
  reindeer:  { src: '/images/heroes/slider-05-reindeer-lavvu.webp', alt: 'Reindeer sled in a snowy forest on Hietaliete island, Kemi', fallback: HERO.campfire, season: 'any' as const },
  kayak:     { src: '/images/heroes/slider-07-kayak-lake.webp', alt: 'Kuuva channel on Lake Inari in summer', fallback: HERO.snowyForest, season: 'summer' as const },
  aurora:    { src: '/images/activities/northern-lights/aurora-lake.webp', alt: 'Green northern lights over Levi fell, Kittilä', fallback: HERO.huskyAurora, season: 'winter' as const },
  // 26.9.2026: kesän ja talven ENSIMMÄINEN ruutu on sivuston jakokortin lähde (harvest_heroes.mjs
  // ottaa etusivun ensimmäisen kuvan heinä- ja tammikuun kellolla). Kortti on muunnelma, joten sen
  // lähde ei saa olla CC BY-SA (lv_permanent_rules §34.2): kajakki ja Saijan huskyt ovat BY-SA.
  // Vaellus = Ninara CC BY 2.0, huskyt = Pexels 60050 (paikaton, alt ei väitä paikkaa). Kesä alkaa yhä
  // aktiviteetilla (Vesa 19.9.). Pexels 2531014 hylättiin: sama kuva on laplandchristmasin herona.
  hike:      { src: '/images/heroes/slider-09-hike-saana.webp', alt: 'Hiker descending the Saana fell trail at Kilpisjärvi, Enontekiö, in June', fallback: HERO.snowyForest, season: 'summer' as const },
  huskyTeam: { src: '/images/heroes/slider-10-husky-team.webp', alt: 'Four sled huskies in harness running along a snowy forest trail', fallback: HERO.huskyAurora, season: 'winter' as const },
};

// Kuvien altit sivun kielellä (gate:a11y-nimet 24.10.2026); englanti on avain ja oletus.
const ALT_I18N: Record<string, Record<string, string>> = {
  "Husky team on a snowy forest trail at Saija, Salla": {
    "fi": "Huskyvaljakko lumisella metsäpolulla Sallan Saijalla",
    "sv": "Huskyspann på ett snöigt skogsspår vid Saija i Salla",
    "de": "Huskygespann auf einem verschneiten Waldweg in Saija, Salla",
    "es": "Tiro de huskies en un sendero nevado del bosque en Saija, Salla",
    "fr": "Attelage de huskies sur une piste forestière enneigée à Saija, Salla",
    "it": "Muta di husky su un sentiero innevato nel bosco a Saija, Salla",
    "nl": "Huskyspan op een besneeuwd bospad bij Saija, Salla",
    "pt-BR": "Equipe de huskies em uma trilha nevada na floresta em Saija, Salla",
    "ja": "サッラのサイヤ、雪の森の道を走るハスキーチーム",
    "ko": "살라 사이야의 눈 덮인 숲길을 달리는 허스키 팀",
    "zh-CN": "萨拉县赛亚，雪林小道上的哈士奇雪橇队",
  },
  "Snowmobile on frozen Lake Inari": {
    "fi": "Moottorikelkka jäätyneellä Inarijärvellä",
    "sv": "Snöskoter på den frusna sjön Enare träsk",
    "de": "Schneemobil auf dem zugefrorenen Inarisee",
    "es": "Moto de nieve sobre el lago Inari helado",
    "fr": "Motoneige sur le lac Inari gelé",
    "it": "Motoslitta sul lago Inari ghiacciato",
    "nl": "Sneeuwscooter op het bevroren Inarimeer",
    "pt-BR": "Snowmobile sobre o lago Inari congelado",
    "ja": "凍ったイナリ湖を走るスノーモービル",
    "ko": "얼어붙은 이나리 호수 위의 스노모빌",
    "zh-CN": "冰封的伊纳里湖上的雪地摩托",
  },
  "Autumn ruska colours on the Hetta–Pallas hiking trail, Enontekiö": {
    "fi": "Ruskan värit Hetta–Pallas-vaellusreitillä Enontekiöllä",
    "sv": "Höstens ruskafärger längs vandringsleden Hetta–Pallas i Enontekis",
    "de": "Herbstliche Ruska-Farben auf dem Wanderweg Hetta–Pallas, Enontekiö",
    "es": "Colores otoñales de la ruska en la ruta de senderismo Hetta–Pallas, Enontekiö",
    "fr": "Couleurs d’automne de la ruska sur le sentier de randonnée Hetta–Pallas, Enontekiö",
    "it": "I colori autunnali della ruska sul sentiero escursionistico Hetta–Pallas, Enontekiö",
    "nl": "Herfstkleuren (ruska) op het wandelpad Hetta–Pallas, Enontekiö",
    "pt-BR": "Cores de outono da ruska na trilha Hetta–Pallas, Enontekiö",
    "ja": "エノンテキオ、ヘッタ〜パッラス・トレイルの紅葉（ルスカ）",
    "ko": "에논테키외 헤타–팔라스 트레일의 가을 단풍(루스카)",
    "zh-CN": "埃农泰基厄，海塔–帕拉斯徒步道上的秋色（ruska）",
  },
  "Ruka gondola lift above the summer forest and lakes, Kuusamo": {
    "fi": "Rukan gondolihissi kesäisen metsän ja järvien yllä Kuusamossa",
    "sv": "Gondolbanan i Ruka ovanför sommarskog och sjöar, Kuusamo",
    "de": "Gondelbahn in Ruka über sommerlichem Wald und Seen, Kuusamo",
    "es": "Telecabina de Ruka sobre el bosque y los lagos en verano, Kuusamo",
    "fr": "Télécabine de Ruka au-dessus de la forêt et des lacs en été, Kuusamo",
    "it": "Cabinovia di Ruka sopra il bosco e i laghi d’estate, Kuusamo",
    "nl": "Gondelbaan van Ruka boven het zomerse bos en de meren, Kuusamo",
    "pt-BR": "Teleférico de Ruka sobre a floresta e os lagos no verão, Kuusamo",
    "ja": "クーサモ、夏の森と湖の上を行くルカのゴンドラ",
    "ko": "쿠사모, 여름 숲과 호수 위를 지나는 루카 곤돌라",
    "zh-CN": "库萨莫，夏日森林与湖泊上方的鲁卡缆车",
  },
  "Aurora cabins with glass roofs in Inari": {
    "fi": "Lasikattoisia revontulimökkejä Inarissa",
    "sv": "Norrskensstugor med glastak i Enare",
    "de": "Nordlichthütten mit Glasdach in Inari",
    "es": "Cabañas con techo de cristal para ver auroras en Inari",
    "fr": "Chalets à toit de verre pour observer les aurores à Inari",
    "it": "Baite con tetto di vetro per l’aurora a Inari",
    "nl": "Noorderlichthutten met glazen dak in Inari",
    "pt-BR": "Cabanas com teto de vidro para ver a aurora em Inari",
    "ja": "イナリのガラス屋根のオーロラキャビン",
    "ko": "이나리의 유리 지붕 오로라 오두막",
    "zh-CN": "伊纳里的玻璃屋顶极光小屋",
  },
  "Reindeer sled in a snowy forest on Hietaliete island, Kemi": {
    "fi": "Porokyyti lumisessa metsässä Kemin Hietalieteen saarella",
    "sv": "Renslede i en snöig skog på ön Hietaliete i Kemi",
    "de": "Rentierschlitten in einem verschneiten Wald auf der Insel Hietaliete, Kemi",
    "es": "Trineo de renos en un bosque nevado de la isla de Hietaliete, Kemi",
    "fr": "Traîneau à rennes dans une forêt enneigée de l’île de Hietaliete, Kemi",
    "it": "Slitta trainata da renne in un bosco innevato sull’isola di Hietaliete, Kemi",
    "nl": "Rendierslee in een besneeuwd bos op het eiland Hietaliete, Kemi",
    "pt-BR": "Trenó de renas em uma floresta nevada na ilha de Hietaliete, Kemi",
    "ja": "ケミのヒエタリエテ島、雪の森を行くトナカイそり",
    "ko": "케미 히에탈리에테 섬의 눈 덮인 숲속 순록 썰매",
    "zh-CN": "凯米耶塔列特岛雪林中的驯鹿雪橇",
  },
  "Kuuva channel on Lake Inari in summer": {
    "fi": "Kuuvan salmi Inarijärvellä kesällä",
    "sv": "Kuuvasundet i Enare träsk på sommaren",
    "de": "Die Kuuva-Enge im Inarisee im Sommer",
    "es": "El estrecho de Kuuva en el lago Inari en verano",
    "fr": "Le détroit de Kuuva sur le lac Inari en été",
    "it": "Lo stretto di Kuuva sul lago Inari d’estate",
    "nl": "De Kuuva-zeestraat in het Inarimeer in de zomer",
    "pt-BR": "O estreito de Kuuva no lago Inari no verão",
    "ja": "夏のイナリ湖、クーヴァ水道",
    "ko": "여름의 이나리 호수 쿠바 해협",
    "zh-CN": "夏日伊纳里湖的库瓦水道",
  },
  "Green northern lights over Levi fell, Kittilä": {
    "fi": "Vihreät revontulet Levitunturin yllä Kittilässä",
    "sv": "Gröna norrsken över fjället Levi i Kittilä",
    "de": "Grüne Nordlichter über dem Fjell Levi, Kittilä",
    "es": "Aurora boreal verde sobre el monte Levi, Kittilä",
    "fr": "Aurore boréale verte au-dessus du mont Levi, Kittilä",
    "it": "Aurora boreale verde sopra il monte Levi, Kittilä",
    "nl": "Groen noorderlicht boven de fjell Levi, Kittilä",
    "pt-BR": "Aurora boreal verde sobre o monte Levi, Kittilä",
    "ja": "キッティラ、レヴィ山の上空に広がる緑のオーロラ",
    "ko": "키틸래 레비 펠 위의 초록빛 오로라",
    "zh-CN": "基蒂莱列维山上空的绿色北极光",
  },
  "Hiker descending the Saana fell trail at Kilpisjärvi, Enontekiö, in June": {
    "fi": "Vaeltaja laskeutumassa Saanan polkua Kilpisjärvellä Enontekiöllä kesäkuussa",
    "sv": "Vandrare på väg ner för leden på fjället Saana vid Kilpisjärvi i Enontekis i juni",
    "de": "Wanderer beim Abstieg auf dem Pfad am Fjell Saana in Kilpisjärvi, Enontekiö, im Juni",
    "es": "Excursionista bajando por el sendero del monte Saana en Kilpisjärvi, Enontekiö, en junio",
    "fr": "Randonneur descendant le sentier du mont Saana à Kilpisjärvi, Enontekiö, en juin",
    "it": "Escursionista in discesa sul sentiero del monte Saana a Kilpisjärvi, Enontekiö, a giugno",
    "nl": "Wandelaar op weg naar beneden over het pad van de Saana bij Kilpisjärvi, Enontekiö, in juni",
    "pt-BR": "Caminhante descendo a trilha do monte Saana em Kilpisjärvi, Enontekiö, em junho",
    "ja": "6月、エノンテキオのキルピスヤルヴィでサーナ山の道を下るハイカー",
    "ko": "6월 에논테키외 킬피스야르비, 사나 펠 등산로를 내려오는 등산객",
    "zh-CN": "六月，埃农泰基厄基尔皮斯耶尔维，沿萨纳山步道下山的徒步者",
  },
  "Four sled huskies in harness running along a snowy forest trail": {
    "fi": "Neljä valjastettua rekikoiraa juoksemassa lumisella metsäpolulla",
    "sv": "Fyra selade slädhundar som springer längs ett snöigt skogsspår",
    "de": "Vier angeschirrte Schlittenhunde laufen auf einem verschneiten Waldweg",
    "es": "Cuatro huskies de trineo con arnés corriendo por un sendero nevado del bosque",
    "fr": "Quatre chiens de traîneau harnachés courant sur une piste forestière enneigée",
    "it": "Quattro husky da slitta con imbracatura che corrono su un sentiero innevato nel bosco",
    "nl": "Vier ingespannen sledehonden rennen over een besneeuwd bospad",
    "pt-BR": "Quatro huskies de trenó com arreio correndo por uma trilha nevada na floresta",
    "ja": "雪の森の道を走る、ハーネスを付けた4頭のそり犬",
    "ko": "눈 덮인 숲길을 달리는 하네스를 찬 썰매견 네 마리",
    "zh-CN": "四只套着挽具的雪橇犬在雪林小道上奔跑",
  },
};

// 19.9.2026 Vesa: ensimmäinen ruutu näytti rakennustyömaalta (Ruka Park heinäkuussa: soraa, hiekkakasa,
// lumitykit). Kesä alkaa nyt aktiviteetilla (melonta Inarijärvellä) ja Rukan kuva on gondoli metsän yllä.
const SUMMER_LED: Slide[] = [S.hike, S.kayak, S.ruka, S.reindeer, S.snowmobile, S.husky, S.igloo];
const WINTER_LED: Slide[] = [S.huskyTeam, S.snowmobile, S.aurora, S.reindeer, S.igloo, S.kayak];
/**
 * Syksy (syys-lokakuu) on ruska-aika: maassa ei ole lunta, mutta revontulet ovat jo
 * alkaneet. Siksi kierto alkaa tunturimaisemasta ja revontulista, ei melonnasta eika
 * huskyvaljakosta — kumpikin niista lupaisi vaaran kauden (Vesa 20.9.2026:
 * "parasta nyt kesa, vaikka on jo syksy").
 */
const AUTUMN_LED: Slide[] = [S.ruska, S.aurora, S.ruka, S.reindeer, S.igloo, S.husky];
/** Kevat (toukokuu) on kevattalvi: lumi sulaa mutta hiihtokausi on juuri paattynyt. */
const SPRING_LED: Slide[] = [S.ruka, S.reindeer, S.kayak, S.aurora, S.husky, S.igloo];

const season = currentSeason();
const slides: Slide[] =
  season === 'summer' ? SUMMER_LED
  : season === 'autumn' ? AUTUMN_LED
  : season === 'spring' ? SPRING_LED
  : WINTER_LED;

const ROTATE_MS = 6000;

const SLIDE_WORD: Record<string, string> = {
  en: 'Slide', fi: 'Kuva', sv: 'Bild', de: 'Bild', es: 'Imagen', fr: 'Image', it: 'Immagine', nl: 'Afbeelding',
  'pt-BR': 'Imagem', ja: 'スライド', ko: '슬라이드', 'zh-CN': '幻灯片',
};

export default function HeroSlider() {
  const lang = useLang();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.src}
          // 18.10.2026: täysi peittävyys (oli opacity-70 = koko kuva 30 % tummempi). Puhelimella kuva on
          // nyt oma kaistansa ilman tekstiä, ja lg+:n luettavuuden hoitaa Heron vaakaliukuma.
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== idx}
        >
          {/* 'band': puhelimen 42svh-kaista on lähes neliö, joten 16:9-kuva piirtyy ~1,6 × ikkunan
              levyisenä; '100vw' valitsisi liian pienen kopion (sama syy kuin alasivujen herot 17.10.). */}
          <SmartImage
            src={s.src}
            {...respImg(s.src, 'band')}
            fallback={s.fallback}
            alt={ALT_I18N[s.alt]?.[lang] ?? s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'low'}
            style={{ objectPosition: focalFor(s.src) }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      <PhotoCredit src={slides[idx].src} />

      {/* indicator dots */}
      {/* Alle lg:n kaistassa vasempaan alakulmaan (oikealla on kuvateksti), lg+:ssa keskelle heron alaosaan. */}
      <div className="absolute bottom-3 left-4 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`${SLIDE_WORD[lang] ?? SLIDE_WORD.en} ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'bg-vibe-pink w-8' : 'bg-white/30 w-2 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
