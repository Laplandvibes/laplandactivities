import type { Lang } from '../i18n/useLang';

// Meta descriptions for the destination and category pages, with ONE composer for both sides:
// scripts/generate-prerender-meta.mjs loads this module through Vite SSR and writes the
// prerendered HTML with it, and DestinationPage / CategoryPage call the same functions in
// <Helmet>. Search results and the browser tab therefore show the same text.
//
// The window is the prerenderer's own (ensureDescriptionLength and clampDescription in
// scripts/_prerender_routes.mjs): at most 160 characters and 200 width units, and at least
// 70 characters or 100 width units, a CJK character counting as two. Text inside the window
// passes the prerenderer untouched. Outside it the served text would be cut or extended
// while the browser kept the original.

const WIDE = /[\u1100-\u11FF\u2E80-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;

/** Width units: a CJK character counts as two. */
export function descriptionWidth(s: string): number {
  let n = 0;
  for (const c of s) n += WIDE.test(c) ? 2 : 1;
  return n;
}

const fits = (s: string) => s.length <= 160 && descriptionWidth(s) <= 200;
const longEnough = (s: string) => s.length >= 70 || descriptionWidth(s) >= 100;

/** True when the prerenderer leaves the description as it is. */
export function inDescriptionWindow(s: string): boolean {
  return fits(s) && longEnough(s);
}

const tidy = (s: string | undefined) => String(s ?? '').replace(/\s+/g, ' ').trim();

/** ja and zh-CN end a sentence with 。！？ and start the next one without a space. */
const NO_SPACE = new Set<string>(['ja', 'zh-CN']);

function sentences(text: string, lang: string): string[] {
  const parts = NO_SPACE.has(lang) ? text.split(/(?<=[。！？])/u) : text.split(/(?<=[.!?。！？])\s+/u);
  return parts.map((s) => s.trim()).filter(Boolean);
}

/**
 * The description both sides show. Inside the window it is returned as it is. A longer text
 * is cut to its leading whole sentences when they reach the floor. Anything else comes back
 * unchanged, and the build lists it: give that page its own description below.
 */
export function fitMetaDescription(text: string | undefined, lang: string): string {
  const t = tidy(text);
  if (inDescriptionWindow(t)) return t;
  let out = '';
  for (const s of sentences(t, lang)) {
    const next = !out ? s : NO_SPACE.has(lang) ? out + s : `${out} ${s}`;
    if (!fits(next)) break;
    out = next;
  }
  return inDescriptionWindow(out) ? out : t;
}

// Own descriptions for pages whose visible description cannot be cut to the window: the first
// sentence alone is too short while the whole text is too long, or the whole text is too short
// (the shorter ja, ko and zh-CN category leads). The visible description stays as it is.

const DESTINATION_META: Record<string, Partial<Record<Lang, string>>> = {
  rovaniemi: {
    en: "The capital of Lapland and gateway to arctic adventures. Home to Santa Claus Village, great transport links, and a huge range of winter and summer activities.",
    de: "Lapplands Hauptstadt und das Tor zu arktischen Abenteuern, mit dem Weihnachtsmanndorf, hervorragenden Verbindungen und vielen Winter- und Sommeraktivitäten.",
    es: "La capital de Laponia y puerta de acceso a las aventuras árticas, con el Pueblo de Papá Noel, excelentes conexiones y mucho que hacer en invierno y verano.",
    'pt-BR': "A capital da Lapônia e porta de entrada para as aventuras árticas. Abriga a Vila do Papai Noel, ótimas conexões e muitas atividades de inverno e verão.",
    fr: "Capitale de la Laponie et porte d'entrée des aventures arctiques, avec le Village du Père Noël, d’excellentes liaisons et des activités d'hiver comme d'été.",
    it: "La capitale della Lapponia e porta d'accesso alle avventure artiche. Ospita il Villaggio di Babbo Natale, ottimi collegamenti e attività invernali ed estive.",
    nl: "Hoofdstad van Lapland en toegangspoort tot arctische avonturen. Hier vindt u het Kerstmandorp, uitstekende verbindingen en volop winter- en zomeractiviteiten.",
    sv: "Lapplands huvudstad och porten till arktiska äventyr. Här finns Jultomtens by, utmärkta förbindelser och ett stort utbud av vinter- och sommaraktiviteter.",
  },
  posio: {
    'zh-CN': "以 Riisitunturi 国家公园壮观的雪冠树木和 Korouoma 峡谷的冰封瀑布闻名。远离人迹，纯粹荒野。从罗瓦涅米或 Ruka 出发，当天往返最方便。",
  },
};

const CATEGORY_META: Record<string, Partial<Record<Lang, string>>> = {
  adventure: {
    'zh-CN': "雪地摩托探险之旅、冰上卡丁车、攀冰、河流漂流和野外生存课程。在北极荒野中点燃肾上腺素。拉普兰的探险多半靠引擎，或者离不开冰。",
  },
  animals: {
    'zh-CN': "哈士奇雪橇、参观驯鹿农场、观赏野生棕熊以及 Ranua 动物园的北极熊。与北极令人惊叹的动物近距离相遇。棕熊观察屋位于 Kuusamo 以东的森林里。",
  },
  culture: {
    'zh-CN': "萨米博物馆、圣诞老人村、冰雪酒店、淘金、紫水晶矿，以及迷人的北极遗产。萨米文化最好的入口是 Inari 的 Siida 和 Levi 的 Samiland。",
    ko: "사미 박물관, 산타클로스 마을, 아이스 호텔, 사금 채취, 자수정 광산, 북극의 매혹적인 유산. 사미 문화는 이나리의 시이다와 레비의 사미란드가 가장 좋은 입구입니다.",
  },
  'northern-lights': {
    'zh-CN': "专人带领的极光追逐、摄影之旅、雪地摩托追光，以及在舞动光幕下的雪鞋探险。这里的极光行程是追，而不是找个观景台：向导盯着云量预报和活动指数，把车开向当晚看起来最有戏的那片天空缺口。",
    ko: "가이드 오로라 헌트, 사진 투어, 스노모빌 오로라 추적, 춤추는 빛 아래의 스노슈 원정. 이곳의 오로라 투어는 전망대가 아니라 사냥입니다.",
  },
  wellness: {
    'zh-CN': "传统烟熏桑拿、冰泳、北极漂浮、水疗护理，以及极致的北欧康养体验。在拉普兰，休养意味着冷热交替，而不是理疗室。",
    ko: "전통 스모크 사우나, 얼음 수영, 북극 부유, 스파 트리트먼트, 그리고 궁극의 노르딕 웰니스 체험. 라플란드의 웰니스는 시술실이 아니라 뜨거움과 차가움을 번갈아 겪는 일입니다.",
  },
  summer: {
    'zh-CN': "午夜阳光下的徒步、皮划艇、漂流、山地自行车、垂钓、采摘浆果，以及在无尽北极日光下的高尔夫。夏天把同一片风景变成徒步、划桨和骑行的场地。",
    ko: "백야 트레킹, 카약, 강 래프팅, 산악 자전거, 낚시, 베리 따기, 끝없는 북극 일광 아래의 골프. 여름이 되면 같은 풍경이 트레킹과 패들링, 자전거의 무대로 바뀝니다.",
  },
  food: {
    ja: "コタレストラン、野生の食材採集、ベリー摘み、星空の下でのトナカイディナー、地元の醸造所めぐり。ここでの食事は火と季節に結びついています。",
    'zh-CN': "kota 餐厅、野外采食、采摘浆果、星空下的驯鹿晚餐，以及当地酒厂之旅。这里的食物离不开火与季节。kota 或 kammi 是中央设有明火灶的锥形木屋，饭菜就在你面前做出来：驯鹿肉、鱼、薄饼和云莓。",
    ko: "코타 레스토랑, 야생 식재료 채집, 베리 따기, 별 아래의 순록 디너, 현지 양조장 투어. 이곳의 음식은 불과 계절에 묶여 있습니다.",
  },
  'winter-sports': {
    'zh-CN': "在拉普兰最好的度假胜地体验高山滑雪、越野滑雪、单板滑雪、胖胎自行车、雪鞋健行和滑冰。本指南里有六座山丘设有缆车：罗瓦涅米上方的 Ounasvaara，以及 Levi、Ylläs、Ruka、Pyhä 和 Suomu。",
  },
};

/** Meta description of /destinations/<slug> in `lang`. */
export function destinationMetaDescription(slug: string, description: string, lang: Lang): string {
  return fitMetaDescription(DESTINATION_META[slug]?.[lang] ?? description, lang);
}

/** Meta description of /categories/<slug> in `lang`. */
export function categoryMetaDescription(slug: string, description: string, lang: Lang): string {
  return fitMetaDescription(CATEGORY_META[slug]?.[lang] ?? description, lang);
}
