import type { NewsletterPopupCopy } from '../shared/NewsletterPopup';

/**
 * laplandactivities.fi: uutiskirjepopupin oma teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. Huskies, snowmobiles, reindeer and, in summer, paddling. I tell you what\'s worth doing in Lapland in each season and which trips need booking early.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Huskyt, moottorikelkat, porot ja kesällä melonta. Kerron, mitä Lapissa kannattaa tehdä mihinkin vuodenaikaan ja mitkä retket pitää varata ajoissa.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Huskys, Schneemobile, Rentiere und im Sommer Paddeln. Ich erzähle Ihnen, was Sie in Lappland zu welcher Jahreszeit unternehmen sollten und welche Touren Sie früh buchen müssen.',
  },
  ja: {
    description: 'LaplandVibes創業者。ハスキー、スノーモービル、トナカイ、夏にはパドリングも。季節ごとにラップランドで何をするとよいか、早めの予約が必要なのはどのツアーかをご紹介します。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Huskies, motonieves, renos y, en verano, kayak. Le cuento qué vale la pena hacer en Laponia en cada estación del año y qué excursiones hay que reservar con anticipación.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Huskies, motos de neve, renas e, no verão, caiaque. Conto para você o que vale a pena fazer na Lapônia em cada estação do ano e quais passeios é preciso reservar com antecedência.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。哈士奇、雪地摩托、驯鹿，夏天还有皮划艇。我会告诉你在拉普兰什么季节玩什么，哪些行程需要提前预订。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 허스키와 스노모빌, 순록, 여름이면 패들링까지. 계절마다 라플란드에서 무엇을 하면 좋은지, 어떤 투어는 미리 예약해야 하는지 알려드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Huskies, motoneiges, rennes et, l\'été, la pagaie. Je vous dis ce qui vaut le coup en Laponie, saison par saison, et quelles excursions réserver tôt.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Husky, motoslitte, renne e, d\'estate, la canoa. Le racconto cosa vale la pena fare in Lapponia stagione per stagione e quali escursioni vanno prenotate per tempo.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Husky\'s, sneeuwscooters, rendieren en \'s zomers kanoën. Ik vertel u wat in Lapland per seizoen de moeite waard is en welke tours u op tijd moet boeken.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Huskyer, snöskotrar, renar och paddling på sommaren. Jag tipsar om vad du ska hitta på i Lappland under varje årstid och vilka turer du måste boka i god tid.',
  },
};
