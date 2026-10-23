/**
 * Etusivun mainospaikkojen config (LV Media -inventaari).
 *
 * Myyntiprosessi: kauppa → täytä sponsors[0]/[1] tai spots[n].partner
 * Partner-objektilla (ks. shared/PartnerSlot.tsx) → build → deploy.
 * Tyhjät paikat renderöivät house-adin → https://laplandvibes.com/media/site/laplandactivities
 */
import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots';
import { respImg } from '../lib/respImg';
import type { Partner } from '../shared/PartnerSlot';
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid';

/**
 * Bear Kuusamo etusivun kortissa A (Vesa 2026-07-27).
 *
 * MIKSI: kun molemmat kortit olivat tyhjiä, etusivu näytti kaksi identtistä
 * "Haluatko mainoksesi tähän?" -korttia allekkain — mobiilissa se lukee
 * renderöintivirheenä, ei myyntipaikkana. Yksi oikea kumppani + yksi vapaa
 * paikka näyttää toimivalta ja luo niukkuutta. Bear = showcase-asiakas, jolle
 * annetaan tietoisesti yli vakiotuotteen (ks. muisti bear_kuusamo_partner_ad_article).
 *
 * Linkki menee Workerin kautta (`go/bearkuusamo?sid=`) koska tämä on MAINOS:
 * klikki kirjautuu D1:een ja näkyy Command Centerissä. Artikkelilinkit sen
 * sijaan ovat suoria + dofollow — älä reititä niitä Workerin kautta.
 *
 * Copy on Niinan hyväksymää tekstiä (shared/ads/advertisers/bearkuusamo.ts
 * headline per kieli) — älä keksi uutta kumppanicopya tähän.
 */
const BEAR_HERO = '/images/activities/bear-kuusamo/bear-hero.webp';
const BEAR_HERO_RESP = respImg(BEAR_HERO, 'half');

const bearKuusamo: Partner = {
  name: 'Bear Kuusamo',
  tagline: 'Yö karhukojulla, aivan Lapin rajalla',
  taglineEn: 'A night in a bear hide, on the edge of Lapland',
  taglineSv: 'En natt i ett björngömsle, vid Lapplands gräns',
  url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
  // fi-lokaalissa kortti vie bearkuusamo.comin fi-kieliversioon Workerin kautta
  // (Niina/Bear 2026-07-30). PartnerSlot valitsee urlFi:n kun locale on fi.
  urlFi: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Ffi%2F',
  imageSrc: BEAR_HERO,
  // Kokovaihtoehdot: kortti on puolet leveydesta tyopoydalla ja koko leveys
  // puhelimessa. Ilman tata puhelin lataisi 1600 px:n tiedoston (126 kt) — se on
  // etusivun toiseksi raskain lataus heti heron jalkeen (mitattu 20.9.2026).
  imageSrcSet: BEAR_HERO_RESP.srcSet,
  imageSizes: BEAR_HERO_RESP.sizes,
  // Kumppanin logo kortin kuvan oikeaan yläkulmaan (Vesa 2026-07-29). Tumma
  // versio, koska PartnerSlot piirtää sen valkoiselle chipille valokuvan päälle.
  logoSrc: '/images/partners/bearkuusamo.png',
  // CTA on pakollinen myydylle paikalle: ilman sitä viereinen tyhjä
  // "Varaa mainospaikka" -house-ad näyttää houkuttelevammalta kuin maksava
  // asiakas (Vesa 2026-07-27). Tekstit ovat Niinan hyväksymiä.
  ctaLabel: 'Varaa yökatselusi',
  ctaLabelEn: 'Book your bear watching',
  ctaLabelSv: 'Boka din björnskådning',
  accent: '#007E2E', // Bear Kuusamon brändivihreä
  // Pidempi kuvaus näkyy vain desktopissa (sm+). Sama hyväksytty teksti kuin
  // AdUnitin `sub` shared/ads/advertisers/bearkuusamo.ts:ssä.
  description:
    'Kuusamon alkuperäinen karhuopas, yli kaksikymmentä vuotta itärajan metsissä. Katsele villejä ruskeakarhuja, ahmoja ja merikotkia kuvauskojusta.',
  descriptionEn:
    "Kuusamo's original bear guides, over twenty years in the eastern border forests. Watch wild brown bears, wolverine and sea eagles from a photography hide.",
  descriptionSv:
    'Kuusamos ursprungliga björnguider, över tjugo år i gränsskogarna i öster. Se vilda brunbjörnar, järv och havsörnar från ett fotogömsle.',
  // Linkki myytyyn esittelyartikkeliin LaplandVibes-blogissa (Vesa 2026-07-27).
  // Hubin EN-versio on juuressa, muut kielet etuliitteen takana.
  articleUrl: 'https://laplandvibes.com/fi/blog/bear-kuusamo/',
  articleUrlEn: 'https://laplandvibes.com/blog/bear-kuusamo/',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/bear-kuusamo/',
  articleLabel: 'Lue esittely',
  articleLabelEn: 'Read the feature',
  articleLabelSv: 'Läs artikeln',
  // 🔴 Myyty kortti näkyy KAIKILLA 12 kielellä (Vesa 2026-07-30, Bear-palaute):
  // loput 9 kieltä tässä. Tekstit = AdUnit-speksin hyväksytty copy per kieli;
  // url = Worker-reitti dest-ohjauksella kumppanin omaan kieliversioon
  // (de/fr/es/it/nl; ja/ko/pt/zh → EN-juuri ilman destiä); articleUrl = hubin
  // blogi kieliprefiksillä (huom. hubin lyhyet /kr/ /cn/ /br/).
  i18n: {
    de: {
      tagline: 'Eine Nacht im Bärenversteck, am Rand Lapplands',
      description: 'Kuusamos ursprüngliche Bärenführer, über zwanzig Jahre in den Wäldern an der Ostgrenze. Beobachte wilde Braunbären, Vielfraße und Seeadler aus einem Fotoversteck.',
      cta: 'Bärenansitz buchen',
      articleLabel: 'Artikel lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Fde%2F',
    },
    fr: {
      tagline: 'Une nuit dans un affût à ours, en lisière de Laponie',
      description: "Les guides ours originels de Kuusamo, plus de vingt ans dans les forêts de la frontière est. Observez des ours bruns sauvages, des gloutons et des pygargues depuis un affût photo.",
      cta: 'Réserver l\'observation',
      articleLabel: "Lire l'article",
      articleUrl: 'https://laplandvibes.com/fr/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Ffr%2F',
    },
    es: {
      tagline: 'Una noche en un escondite de osos, al borde de Laponia',
      description: 'Los guías de osos originales de Kuusamo, más de veinte años en los bosques de la frontera oriental. Observe osos pardos salvajes, glotones y pigargos desde un escondite fotográfico.',
      cta: 'Reservar la observación',
      articleLabel: 'Leer el artículo',
      articleUrl: 'https://laplandvibes.com/es/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Fes%2F',
    },
    it: {
      tagline: 'Una notte in un capanno degli orsi, ai margini della Lapponia',
      description: "Le guide originali di Kuusamo, oltre vent'anni nelle foreste del confine orientale. Osservi orsi bruni selvatici, ghiottoni e aquile di mare da un capanno fotografico.",
      cta: 'Prenoti l\'osservazione',
      articleLabel: "Leggi l'articolo",
      articleUrl: 'https://laplandvibes.com/it/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Fit%2F',
    },
    nl: {
      tagline: 'Een nacht in een berenhut, aan de rand van Lapland',
      description: 'De oorspronkelijke berengidsen van Kuusamo, ruim twintig jaar in de bossen aan de oostgrens. Bekijk wilde bruine beren, veelvraten en zeearenden vanuit een fotohut.',
      cta: 'Boek uw berenobservatie',
      articleLabel: 'Lees het artikel',
      articleUrl: 'https://laplandvibes.com/nl/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a&dest=https%3A%2F%2Fbearkuusamo.com%2Fnl%2F',
    },
    ja: {
      tagline: 'クマのブラインドで過ごす一夜、ラップランドの縁で',
      description: 'クーサモで最も歴史あるクマ観察ガイド。東の国境の森で20年以上。フォトブラインドから野生のヒグマ、クズリ、オジロワシを観察できます。',
      cta: 'クマ観察を予約する',
      articleLabel: '記事を読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
    },
    ko: {
      tagline: '곰 은신처에서의 하룻밤, 라플란드 가장자리에서',
      description: '쿠사모에서 가장 오래된 곰 관찰 가이드. 동쪽 국경의 숲에서 20년 이상. 사진 은신처에서 야생 불곰, 울버린, 흰꼬리수리를 관찰하세요.',
      cta: '곰 관찰 예약하기',
      articleLabel: '기사 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
    },
    pt: {
      tagline: 'Uma noite em um esconderijo de ursos, na borda da Lapônia',
      description: 'Os guias de ursos originais de Kuusamo, mais de vinte anos nas florestas da fronteira leste. Observe ursos-pardos selvagens, carcajus e águias-rabalvas de um esconderijo fotográfico.',
      cta: 'Reserve a observação',
      articleLabel: 'Leia o artigo',
      articleUrl: 'https://laplandvibes.com/br/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
    },
    zh: {
      tagline: '在熊隐蔽屋度过一夜，拉普兰边缘',
      description: '库萨莫历史最悠久的观熊向导，在东部边境森林已超过二十年。从摄影隐蔽屋观察野生棕熊、貂熊和白尾海雕。',
      cta: '预订观熊之夜',
      articleLabel: '阅读专题',
      articleUrl: 'https://laplandvibes.com/cn/blog/bear-kuusamo/',
      url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
    },
  },
};

// @@SAMI-VILLAGE-ALKU@@ (generoitu kielitiedostoista, älä muokkaa käsin)
/**
 * Sámi Village, Nellim: Kessijärven Helmin Teijan joiku- ja rumpuesitys kodassa tilauksesta ryhmille ja pareille.
 * Paikka: Inarin kohdesivun aktiviteettiruudukko (lukija selaa, mitä Inarissa voi tehdä). Teksti on Teijan
 * hyväksymän artikkelin (v4.1, 23.10.2026) faktoista, natiivilukijan korjaama; 12 kieltä kielitiedostosta
 * laplandvibes/src/locales/<kieli>/sami-village.json (adInari). Julkaisu ma 26.10.2026 aamulla (Teijan toive).
 * Kuva: oma valokuva 14.10.2026 (20261014_113559), Teija rummun kanssa terassilla, takana Inarijärvi.
 * Kengät, tuolit ja kaide rajattu pois kuten pääkuvasta (Teijan pyyntö 22.10.). Ei sama tiedosto kuin artikkelissa.
 * Logo: Teijan lähettämä valkoinen merkki sinisellä pohjalla (oma pohja ⇒ toimii kummallakin pinnalla).
 */
const samiVillageInari: Partner = {
  name: 'Sámi Village',
  tagline: 'Kuuntele joikua kodassa Nellimissä',
  taglineEn: 'Listen to yoik in a kota in Nellim',
  taglineSv: 'Lyssna på jojk i en kåta i Nellim',
  description: 'Inarinsaamelainen Kessijärven Helmin Teija kertoo saamelaisuudesta ja joikaa kodassa Nellimissä Inarijärven rannalla. Esityksen voi tilata ryhmälle tai parille.',
  descriptionEn: 'Kessijärven Helmin Teija, an Inari Sámi, talks about Sámi culture and yoiks in a kota (a traditional Sámi hut) in Nellim on the shore of Lake Inari. The performance can be booked for a group or a couple.',
  descriptionSv: 'Enaresamen Kessijärven Helmin Teija berättar om det samiska och jojkar i en kåta i Nellim vid Enare träsk. Föreställningen kan beställas för en grupp eller ett par.',
  url: 'https://go.laplandvibes.com/go/samivillage?sid=activities_destination_inari&dest=https%3A%2F%2Fwww.samivillage.fi%2Fen%2F',
  urlFi: 'https://go.laplandvibes.com/go/samivillage?sid=activities_destination_inari&dest=https%3A%2F%2Fwww.samivillage.fi%2Ffi%2F',
  imageSrc: '/images/partners/samivillage-teija-nellim.webp',
  logoSrc: '/images/partners/samivillage.png',
  logoAlt: 'Sámi Village',
  ctaLabel: 'Pyydä tarjous',
  ctaLabelEn: 'Request a quote',
  ctaLabelSv: 'Begär offert',
  articleUrl: 'https://laplandvibes.com/fi/blog/sami-village-nellim/',
  articleUrlEn: 'https://laplandvibes.com/blog/sami-village-nellim/',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/sami-village-nellim/',
  articleLabel: 'Lue juttu',
  articleLabelEn: 'Read the article',
  articleLabelSv: 'Läs artikeln',
  i18n: {
    de: {
      tagline: 'Hören Sie Joik in einer Kota in Nellim',
      description: 'Die Inarisamin Kessijärven Helmin Teija erzählt von der samischen Kultur und joikt in einer Kota, einer traditionellen samischen Hütte, in Nellim am Ufer des Inarisees. Die Vorstellung können Sie für eine Gruppe oder ein Paar buchen.',
      cta: 'Angebot anfragen',
      articleLabel: 'Artikel lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/sami-village-nellim/',
    },
    fr: {
      tagline: 'Écoutez le yoik dans une kota à Nellim',
      description: 'Kessijärven Helmin Teija, Samie d\'Inari, parle de la culture samie et chante le yoik dans une kota à Nellim, au bord du lac Inari. On peut réserver le spectacle pour un groupe ou un couple.',
      cta: 'Demander un devis',
      articleLabel: 'Lire l\'article',
      articleUrl: 'https://laplandvibes.com/fr/blog/sami-village-nellim/',
    },
    it: {
      tagline: 'Ascolti lo joik in una kota a Nellim',
      description: 'Kessijärven Helmin Teija, sami di Inari, parla della cultura sami e canta lo joik in una kota a Nellim, sulla riva del lago Inari. Lo spettacolo si può prenotare per un gruppo o una coppia.',
      cta: 'Richiedi un preventivo',
      articleLabel: 'Leggi l\'articolo',
      articleUrl: 'https://laplandvibes.com/it/blog/sami-village-nellim/',
    },
    es: {
      tagline: 'Escuche yoik en una kota de Nellim',
      description: 'Kessijärven Helmin Teija, sami de Inari, habla de la cultura sami y canta yoik en una kota de Nellim, a orillas del lago Inari. El espectáculo se puede encargar para un grupo o una pareja.',
      cta: 'Solicitar una cotización',
      articleLabel: 'Leer el artículo',
      articleUrl: 'https://laplandvibes.com/es/blog/sami-village-nellim/',
    },
    pt: {
      tagline: 'Ouça yoik numa kota em Nellim',
      description: 'Kessijärven Helmin Teija, sámi de Inari, fala sobre o que é ser sámi e canta yoik numa tradicional kota sámi em Nellim, à beira do lago Inari. Você pode agendar a apresentação para um grupo ou um casal.',
      cta: 'Pedir orçamento',
      articleLabel: 'Ler o artigo',
      articleUrl: 'https://laplandvibes.com/br/blog/sami-village-nellim/',
    },
    nl: {
      tagline: 'Luister naar joik in een kota in Nellim',
      description: 'De Inari-Samische Kessijärven Helmin Teija vertelt over de Samische cultuur en joikt in een traditionele kota in Nellim, aan het Inarimeer. U kunt de voorstelling aanvragen voor een groep of een stel.',
      cta: 'Offerte aanvragen',
      articleLabel: 'Lees het artikel',
      articleUrl: 'https://laplandvibes.com/nl/blog/sami-village-nellim/',
    },
    ja: {
      tagline: 'ネッリムのコタで、ヨイクを聴いてみませんか',
      description: 'イナリ・サーミの Kessijärven Helmin Teija さんが、イナリ湖のほとり、ネッリムのコタでサーミのことを語り、ヨイクを歌います。公演はグループまたはお二人連れで予約できます。',
      cta: '見積もりを依頼',
      articleLabel: '記事を読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/sami-village-nellim/',
    },
    ko: {
      tagline: '넬림의 코타에서 요이크를 들어 보세요',
      description: '이나리 사미인 Kessijärven Helmin Teija 씨가 이나리 호수 기슭, 넬림의 코타에서 사미에 대해 이야기하고 요이크를 부릅니다. 공연은 단체나 두 사람 일행이 예약할 수 있습니다.',
      cta: '견적 요청',
      articleLabel: '기사 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/sami-village-nellim/',
    },
    zh: {
      tagline: '来内利姆的科塔聆听约伊克',
      description: '伊纳里萨米人 Kessijärven Helmin Teija 在伊纳里湖畔内利姆的科塔里讲述萨米文化，并唱约伊克。表演可为团体或两人预订。',
      cta: '申请报价',
      articleLabel: '阅读文章',
      articleUrl: 'https://laplandvibes.com/cn/blog/sami-village-nellim/',
    },
  },
};

/**
 * Sámi Village / Ságe, Saariselkä (Lutontie 2 A 8): sama esiintyjä muutamana iltana viikossa marraskuusta 2026.
 * Paikka: Saariselän kohdesivun aktiviteettiruudukko. Ságesta ei ole omaa kuvaa, joten kuva on esiintyjästä:
 * Teija rummun kanssa 14.10.2026 (20261014_113553), rajattu kuten pääkuva. Kuvateksti ei väitä kuvaa Ságesta.
 */
const samiVillageSaariselka: Partner = {
  name: 'Sámi Village',
  tagline: 'Saamelaisesitys Saariselän keskustassa',
  taglineEn: 'Sámi performance in central Saariselkä',
  taglineSv: 'Samisk föreställning i centrala Saariselkä',
  description: 'Marraskuusta 2026 alkaen Kessijärven Helmin Teija joikaa ja kertoo saamelaisuudesta Ságessa osoitteessa Lutontie 2 A 8. Esitys on muutamana iltana viikossa ja kestää vajaan tunnin.',
  descriptionEn: 'From November 2026, Kessijärven Helmin Teija will yoik and talk about Sámi culture at Ságe, Lutontie 2 A 8. The performance runs on a few evenings a week and lasts just under an hour.',
  descriptionSv: 'Från november 2026 jojkar Kessijärven Helmin Teija och berättar om det samiska på Ságe, Lutontie 2 A 8. Föreställningen ges några kvällar i veckan och tar knappt en timme.',
  url: 'https://go.laplandvibes.com/go/samivillage?sid=activities_destination_saariselka&dest=https%3A%2F%2Fwww.samivillage.fi%2Fen%2F',
  urlFi: 'https://go.laplandvibes.com/go/samivillage?sid=activities_destination_saariselka&dest=https%3A%2F%2Fwww.samivillage.fi%2Ffi%2F',
  imageSrc: '/images/partners/samivillage-teija-rumpu.webp',
  logoSrc: '/images/partners/samivillage.png',
  logoAlt: 'Sámi Village',
  ctaLabel: 'Varaa paikka esitykseen',
  ctaLabelEn: 'Book your place',
  ctaLabelSv: 'Boka din plats',
  articleUrl: 'https://laplandvibes.com/fi/blog/sami-village-nellim/',
  articleUrlEn: 'https://laplandvibes.com/blog/sami-village-nellim/',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/sami-village-nellim/',
  articleLabel: 'Lue juttu',
  articleLabelEn: 'Read the article',
  articleLabelSv: 'Läs artikeln',
  i18n: {
    de: {
      tagline: 'Samische Vorstellung im Zentrum von Saariselkä',
      description: 'Ab November 2026 joikt Kessijärven Helmin Teija und erzählt von der samischen Kultur im Ságe, Lutontie 2 A 8. Die Vorstellung findet an einigen Abenden pro Woche statt und dauert knapp eine Stunde.',
      cta: 'Platz reservieren',
      articleLabel: 'Artikel lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/sami-village-nellim/',
    },
    fr: {
      tagline: 'Un spectacle sami au centre de Saariselkä',
      description: 'À partir de novembre 2026, Kessijärven Helmin Teija chante le yoik et parle de la culture samie à Ságe, Lutontie 2 A 8. Le spectacle a lieu quelques soirs par semaine et dure un peu moins d\'une heure.',
      cta: 'Réserver une place',
      articleLabel: 'Lire l\'article',
      articleUrl: 'https://laplandvibes.com/fr/blog/sami-village-nellim/',
    },
    it: {
      tagline: 'Uno spettacolo sami nel centro di Saariselkä',
      description: 'A partire da novembre 2026 Kessijärven Helmin Teija canta lo joik e parla della cultura sami da Ságe, in Lutontie 2 A 8. Lo spettacolo si tiene alcune sere a settimana e dura poco meno di un\'ora.',
      cta: 'Prenota un posto',
      articleLabel: 'Leggi l\'articolo',
      articleUrl: 'https://laplandvibes.com/it/blog/sami-village-nellim/',
    },
    es: {
      tagline: 'Un espectáculo sami en el centro de Saariselkä',
      description: 'A partir de noviembre de 2026, Kessijärven Helmin Teija canta yoik y habla de la cultura sami en Ságe, Lutontie 2 A 8. El espectáculo se ofrece algunas noches por semana y dura poco menos de una hora.',
      cta: 'Reservar un lugar',
      articleLabel: 'Leer el artículo',
      articleUrl: 'https://laplandvibes.com/es/blog/sami-village-nellim/',
    },
    pt: {
      tagline: 'Apresentação sámi no centro de Saariselkä',
      description: 'A partir de novembro de 2026, Kessijärven Helmin Teija canta yoik e fala sobre o que é ser sámi no Ságe, na Lutontie 2 A 8. A apresentação acontece algumas noites por semana e dura pouco menos de uma hora.',
      cta: 'Reservar um lugar',
      articleLabel: 'Ler o artigo',
      articleUrl: 'https://laplandvibes.com/br/blog/sami-village-nellim/',
    },
    nl: {
      tagline: 'Samische voorstelling in het centrum van Saariselkä',
      description: 'Vanaf november 2026 joikt Kessijärven Helmin Teija en vertelt ze over de Samische cultuur in Ságe, aan de Lutontie 2 A 8. De voorstelling is een paar avonden per week te zien en duurt iets minder dan een uur.',
      cta: 'Plaats reserveren',
      articleLabel: 'Lees het artikel',
      articleUrl: 'https://laplandvibes.com/nl/blog/sami-village-nellim/',
    },
    ja: {
      tagline: 'サーリセルカ中心部でサーミの公演',
      description: '2026年11月から、Kessijärven Helmin Teija さんが Lutontie 2 A 8 の Ságe でヨイクを歌い、サーミのことを語ります。公演は週に数晩で、所要時間は一時間弱です。',
      cta: '公演の席を予約',
      articleLabel: '記事を読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/sami-village-nellim/',
    },
    ko: {
      tagline: '사리셀카 중심가의 사미 공연',
      description: '2026년 11월부터 Kessijärven Helmin Teija 씨가 Lutontie 2 A 8의 Ságe에서 요이크를 부르고 사미에 대해 이야기합니다. 공연은 일주일에 며칠 저녁에 열리며 한 시간이 채 걸리지 않습니다.',
      cta: '공연 좌석 예약',
      articleLabel: '기사 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/sami-village-nellim/',
    },
    zh: {
      tagline: '萨利色尔卡中心的萨米表演',
      description: '从2026年11月起，Kessijärven Helmin Teija 将在 Lutontie 2 A 8 的 Ságe 唱约伊克、讲述萨米文化。表演每周有几个晚上，时长不到一小时。',
      cta: '预订座位',
      articleLabel: '阅读文章',
      articleUrl: 'https://laplandvibes.com/cn/blog/sami-village-nellim/',
    },
  },
};

/** Kohdesivun slug → myyty kumppanikortti aktiviteettiruudukkoon. Puuttuva slug = ei korttia. */
export const DESTINATION_PARTNERS: Record<string, Partner | undefined> = {
  inari: samiVillageInari,
  saariselka: samiVillageSaariselka,
};
// @@SAMI-VILLAGE-LOPPU@@

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandactivities',
  // [0] = pääkumppani (banneri heti heron alla), [1] = kakkospääkumppani (osion kortti)
  sponsors: [null, null],
  // Etusivun kortit: [0]=A (vasen), [1]=B (oikea). `cards` ohittaa `sponsors`in
  // HomeAdSlotsissa mutta EI vaikuta MainPartnerBanneriin (se lukee mainPartner
  // ?? sponsors[0]) → pääkumppanipaikka jää edelleen myytäväksi.
  cards: [bearKuusamo, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
