import type { Lang } from './useLang';

// Winter counterpart to the existing `summerBand` copy (which lives in copy.ts).
// Kept here, lang-keyed, so the seasonal band can flip summer↔winter without
// duplicating a full winterBand block inside every one of the 11 SectionCopy
// objects. Native, natural wording per language. The four highlight slots align
// 1:1 with the summer band's slots (hike / paddle / fish / signature) but for the
// winter activities the site is best known for.

export type WinterBandCopy = {
  eyebrow: string;
  h2: string;
  lead: string;
  bookCta: string;
  browseCta: string;
  imageKicker: string;
  imageH3: string;
  highlights: { title: string; body: string }[];
  gygTitle: string;
  gygEyebrow: string;
  /** GYG search query per highlight slot (stable English keywords). */
};

// Stable English GYG search queries per winter highlight slot.
export const WINTER_SEARCH_Q = ['husky safari', 'snowmobile safari', 'northern lights', 'ice fishing'];

export const WINTER_BAND: Record<Lang, WinterBandCopy> = {
  en: {
    eyebrow: 'Winter season: booking now',
    h2: 'Lapland in winter is the real thing.',
    lead: 'Snow settles in November and the polar night brings the strongest aurora. Husky and snowmobile safaris, reindeer sleighs and smoke saunas run all season. The Christmas and February–March peaks book out first.',
    bookCta: 'Book winter activities',
    browseCta: 'Browse winter guide',
    imageKicker: 'Winter season',
    imageH3: 'The Arctic at its most magic',
    highlights: [
      { title: 'Husky sledding', body: 'Drive your own team through silent, snow-loaded forest.' },
      { title: 'Snowmobile safaris', body: 'Frozen lakes and fell trails, from gentle to full-day expeditions.' },
      { title: 'Aurora hunts', body: 'Dark-sky tours with guides who read the forecast for you.' },
      { title: 'Ice fishing & sauna', body: 'Drill the ice, then thaw out in a real smoke sauna.' },
    ],
    gygTitle: 'Winter tours selling fast',
    gygEyebrow: 'Bookable now · Free cancellation',
  },
  fi: {
    eyebrow: 'Talvikausi: varattavissa nyt',
    h2: 'Lappi talvella on sitä aitoa.',
    lead: 'Lumi asettuu marraskuussa ja kaamos tuo voimakkaimmat revontulet. Husky- ja moottorikelkkasafarit, porokyydit ja savusaunat pyörivät koko kauden. Joulun ja helmi–maaliskuun huiput varataan ensimmäisinä.',
    bookCta: 'Varaa talviaktiviteetti',
    browseCta: 'Selaa talviopasta',
    imageKicker: 'Talvikausi',
    imageH3: 'Arktinen taikamaisimmillaan',
    highlights: [
      { title: 'Huskyajelu', body: 'Aja oma valjakko halki hiljaisen, lumisen metsän.' },
      { title: 'Moottorikelkkasafarit', body: 'Jäätyneet järvet ja tunturireitit, lyhyestä koko päivän retkeen.' },
      { title: 'Revontuliretket', body: 'Pimeän taivaan retket oppaiden kanssa, jotka lukevat ennusteen puolestasi.' },
      { title: 'Pilkki & sauna', body: 'Avaa avanto, sulata sitten aidossa savusaunassa.' },
    ],
    gygTitle: 'Talven kysytyimmät retket',
    gygEyebrow: 'Varattavissa nyt · Ilmainen peruutus',
  },
  de: {
    eyebrow: 'Wintersaison: jetzt buchbar',
    h2: 'Lappland im Winter ist das Echte.',
    lead: 'Im November fällt der Schnee, und die Polarnacht bringt die stärksten Polarlichter. Husky- und Schneemobil-Safaris, Rentierschlitten und Rauchsaunen laufen die ganze Saison. Die Hochzeiten um Weihnachten und im Februar/März sind zuerst ausgebucht.',
    bookCta: 'Winteraktivitäten buchen',
    browseCta: 'Winter-Guide ansehen',
    imageKicker: 'Wintersaison',
    imageH3: 'Die Arktis von ihrer magischsten Seite',
    highlights: [
      { title: 'Hundeschlitten', body: 'Lenken Sie Ihr eigenes Gespann durch stillen, verschneiten Wald.' },
      { title: 'Schneemobil-Safaris', body: 'Zugefrorene Seen und Fjell-Trails, von sanft bis Tagestour.' },
      { title: 'Polarlichtjagd', body: 'Touren unter dunklem Himmel mit Guides, die die Vorhersage lesen.' },
      { title: 'Eisangeln & Sauna', body: 'Loch ins Eis bohren, dann in echter Rauchsauna auftauen.' },
    ],
    gygTitle: 'Wintertouren schnell ausgebucht',
    gygEyebrow: 'Jetzt buchbar · Kostenlose Stornierung',
  },
  ja: {
    eyebrow: '冬シーズン：予約受付中',
    h2: '冬のラップランドこそ本物。',
    lead: '11月に雪が積もり、極夜が最も強いオーロラをもたらします。ハスキーやスノーモービルのサファリ、トナカイそり、スモークサウナはシーズン中ずっと楽しめます。クリスマスと2〜3月の繁忙期から先に埋まります。',
    bookCta: '冬のアクティビティを予約',
    browseCta: '冬ガイドを見る',
    imageKicker: '冬シーズン',
    imageH3: '最も幻想的な北極',
    highlights: [
      { title: '犬ぞり', body: '静かな雪の森を自分のチームで駆け抜ける。' },
      { title: 'スノーモービル', body: '凍った湖とフェルの道、短時間から終日ツアーまで。' },
      { title: 'オーロラハント', body: '予報を読むガイドと巡る暗い空のツアー。' },
      { title: '氷上釣り＆サウナ', body: '氷に穴を開け、本物のスモークサウナで温まる。' },
    ],
    gygTitle: '冬ツアーは早い者勝ち',
    gygEyebrow: '予約受付中 · 無料キャンセル',
  },
  es: {
    eyebrow: 'Temporada de invierno: reserva ahora',
    h2: 'La Laponia de invierno es lo auténtico.',
    lead: 'La nieve llega en noviembre y la noche polar trae las auroras más intensas. Los safaris en husky y moto de nieve, los trineos de renos y las saunas de humo funcionan toda la temporada: la Navidad y el pico de febrero-marzo se agotan primero.',
    bookCta: 'Reservar actividades de invierno',
    browseCta: 'Ver guía de invierno',
    imageKicker: 'Temporada de invierno',
    imageH3: 'El Ártico en su momento más mágico',
    highlights: [
      { title: 'Trineo de huskies', body: 'Conduce tu propio tiro por el bosque nevado y silencioso.' },
      { title: 'Safaris en moto de nieve', body: 'Lagos helados y senderos de fjell, de suave a excursión de día.' },
      { title: 'Caza de auroras', body: 'Tours de cielo oscuro con guías que leen el pronóstico por ti.' },
      { title: 'Pesca en hielo y sauna', body: 'Perfora el hielo y luego entra en calor en una sauna de humo real.' },
    ],
    gygTitle: 'Los tours de invierno vuelan',
    gygEyebrow: 'Reservable ahora · Cancelación gratis',
  },
  'pt-BR': {
    eyebrow: 'Temporada de inverno: reserve agora',
    h2: 'A Lapônia no inverno é a coisa de verdade.',
    lead: 'A neve chega em novembro e a noite polar traz as auroras mais fortes. Safáris de husky e moto de neve, trenós de renas e saunas de fumaça funcionam a temporada toda. O Natal e o pico de fevereiro-março esgotam primeiro.',
    bookCta: 'Reservar atividades de inverno',
    browseCta: 'Ver guia de inverno',
    imageKicker: 'Temporada de inverno',
    imageH3: 'O Ártico no seu auge mágico',
    highlights: [
      { title: 'Trenó de huskies', body: 'Conduza sua própria matilha pela floresta nevada e silenciosa.' },
      { title: 'Safáris de moto de neve', body: 'Lagos congelados e trilhas de fjell, do leve à expedição de dia inteiro.' },
      { title: 'Caça à aurora', body: 'Passeios de céu escuro com guias que leem a previsão para você.' },
      { title: 'Pesca no gelo e sauna', body: 'Fure o gelo e depois se aqueça numa sauna de fumaça de verdade.' },
    ],
    gygTitle: 'Tours de inverno esgotando rápido',
    gygEyebrow: 'Reservável agora · Cancelamento grátis',
  },
  'zh-CN': {
    eyebrow: '冬季：现在预订',
    h2: '冬天的拉普兰才是真正的拉普兰。',
    lead: '11月开始积雪，极夜带来最强的极光。哈士奇与雪地摩托之旅、驯鹿雪橇和烟熏桑拿整个冬季运营，圣诞节和2至3月的旺季最先订满。',
    bookCta: '预订冬季活动',
    browseCta: '查看冬季指南',
    imageKicker: '冬季',
    imageH3: '最具魔力的北极',
    highlights: [
      { title: '哈士奇雪橇', body: '驾驭自己的犬队穿越寂静的雪林。' },
      { title: '雪地摩托之旅', body: '冰封湖面与丘陵雪道，从轻松到全天行程。' },
      { title: '极光之旅', body: '暗空行程，由会看预报的向导带队。' },
      { title: '冰钓与桑拿', body: '凿开冰面，再到正宗烟熏桑拿里取暖。' },
    ],
    gygTitle: '冬季行程销售火爆',
    gygEyebrow: '现可预订 · 免费取消',
  },
  ko: {
    eyebrow: '겨울 시즌: 지금 예약',
    h2: '겨울의 라플란드가 진짜입니다.',
    lead: '11월에 눈이 쌓이고 극야가 가장 강한 오로라를 선사합니다. 허스키와 스노모빌 사파리, 순록 썰매, 스모크 사우나가 시즌 내내 운영되며, 크리스마스와 2~3월 성수기가 가장 먼저 마감됩니다.',
    bookCta: '겨울 액티비티 예약',
    browseCta: '겨울 가이드 보기',
    imageKicker: '겨울 시즌',
    imageH3: '가장 마법 같은 북극',
    highlights: [
      { title: '허스키 썰매', body: '고요한 설원의 숲을 직접 모는 썰매로 달리세요.' },
      { title: '스노모빌 사파리', body: '얼어붙은 호수와 펠 트레일, 가볍게부터 종일 원정까지.' },
      { title: '오로라 헌팅', body: '예보를 읽어주는 가이드와 함께하는 어두운 하늘 투어.' },
      { title: '얼음낚시 & 사우나', body: '얼음을 뚫고 진짜 스모크 사우나에서 몸을 녹이세요.' },
    ],
    gygTitle: '겨울 투어 빠르게 마감 중',
    gygEyebrow: '지금 예약 가능 · 무료 취소',
  },
  fr: {
    eyebrow: "Saison d'hiver: réservez maintenant",
    h2: "La Laponie en hiver, c'est l'essentiel.",
    lead: "La neige s'installe en novembre et la nuit polaire offre les aurores les plus intenses. Safaris en husky et motoneige, traîneaux de rennes et saunas à fumée fonctionnent toute la saison. Noël et le pic de février-mars partent en premier.",
    bookCta: "Réserver des activités d'hiver",
    browseCta: "Voir le guide d'hiver",
    imageKicker: "Saison d'hiver",
    imageH3: "L'Arctique au plus magique",
    highlights: [
      { title: 'Traîneau à huskies', body: 'Conduisez votre attelage à travers la forêt enneigée et silencieuse.' },
      { title: 'Safaris en motoneige', body: 'Lacs gelés et pistes de fjell, du tranquille à la sortie journée.' },
      { title: 'Chasse aux aurores', body: 'Sorties au ciel sombre avec des guides qui lisent la météo pour vous.' },
      { title: 'Pêche sous glace & sauna', body: 'Percez la glace, puis réchauffez-vous dans un vrai sauna à fumée.' },
    ],
    gygTitle: "Les tours d'hiver partent vite",
    gygEyebrow: 'Réservable maintenant · Annulation gratuite',
  },
  it: {
    eyebrow: 'Stagione invernale: prenota ora',
    h2: "La Lapponia d'inverno è quella vera.",
    lead: "La neve arriva a novembre e la notte polare porta le aurore più intense. Safari in husky e motoslitta, slitte trainate da renne e saune a fumo sono attivi tutta la stagione: Natale e il picco di febbraio-marzo si esauriscono per primi.",
    bookCta: 'Prenota attività invernali',
    browseCta: 'Vedi la guida invernale',
    imageKicker: 'Stagione invernale',
    imageH3: "L'Artico al massimo della magia",
    highlights: [
      { title: 'Slitta coi husky', body: 'Guida la tua muta attraverso il bosco innevato e silenzioso.' },
      { title: 'Safari in motoslitta', body: 'Laghi ghiacciati e sentieri di fjell, dal leggero alla gita di un giorno.' },
      { title: "Caccia all'aurora", body: 'Tour sotto cieli bui con guide che leggono le previsioni per te.' },
      { title: 'Pesca sul ghiaccio e sauna', body: 'Fora il ghiaccio, poi riscaldati in una vera sauna a fumo.' },
    ],
    gygTitle: 'I tour invernali vanno a ruba',
    gygEyebrow: 'Prenotabile ora · Cancellazione gratuita',
  },
  nl: {
    eyebrow: 'Winterseizoen: nu boeken',
    h2: 'Lapland in de winter is het echte werk.',
    lead: 'In november valt de sneeuw en de poolnacht brengt het sterkste noorderlicht. Husky- en sneeuwscootersafari\'s, rendiersleeën en rooksauna\'s draaien het hele seizoen. Kerst en de piek van februari-maart zijn het eerst vol.',
    bookCta: 'Boek winteractiviteiten',
    browseCta: 'Bekijk wintergids',
    imageKicker: 'Winterseizoen',
    imageH3: 'Het noordpoolgebied op zijn magischst',
    highlights: [
      { title: 'Husky-sledetocht', body: 'Bestuur je eigen team door het stille, besneeuwde bos.' },
      { title: 'Sneeuwscootersafari\'s', body: 'Bevroren meren en fjell-paden, van rustig tot dagtocht.' },
      { title: 'Noorderlichtjacht', body: 'Tochten onder donkere hemel met gidsen die de voorspelling lezen.' },
      { title: 'IJsvissen & sauna', body: 'Boor het ijs open en warm daarna op in een echte rooksauna.' },
    ],
    gygTitle: 'Wintertours snel uitverkocht',
    gygEyebrow: 'Nu boekbaar · Gratis annulering',
  },
  sv: {
    eyebrow: 'Vintersäsong: bokningsbart nu',
    h2: 'Lappland på vintern är den äkta varan.',
    lead: 'Snön lägger sig i november och polarnatten ger det starkaste norrskenet. Hundspann- och snöskotersafarier, renslädar och rökbastur går hela säsongen. Julen och februari–mars-toppen bokas upp först.',
    bookCta: 'Boka vinteraktiviteter',
    browseCta: 'Se vinterguiden',
    imageKicker: 'Vintersäsong',
    imageH3: 'Arktis på sitt mest storslagna',
    highlights: [
      { title: 'Hundspann', body: 'Kör ditt eget spann genom tyst, snötyngd skog.' },
      { title: 'Snöskotersafarier', body: 'Frusna sjöar och fjällstigar, från lugna turer till heldagsexpeditioner.' },
      { title: 'Norrskensjakt', body: 'Turer under mörk himmel med guider som tolkar prognosen åt dig.' },
      { title: 'Pilkfiske & bastu', body: 'Borra upp ett hål i isen och värm sedan upp dig i en äkta rökbastu.' },
    ],
    gygTitle: 'Vinterturer säljer snabbt',
    gygEyebrow: 'Bokningsbart nu · Gratis avbokning',
  },
};
