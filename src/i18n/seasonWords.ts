import type { Lang } from './useLang';
import type { Activity } from '../data/activities';

// Shared, fully-localized season vocabulary + section headings used by the
// destination/category season split. Kept here (lang-keyed) rather than inside
// the deep SectionCopy blocks so the 4 season words + a few headings live in one
// place across all 11 locales. Native, natural wording per language.

type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export const SEASON_WORD: Record<Lang, Record<Season, string>> = {
  en: { winter: 'Winter', spring: 'Spring', summer: 'Summer', autumn: 'Autumn' },
  fi: { winter: 'Talvi', spring: 'Kevät', summer: 'Kesä', autumn: 'Syksy' },
  de: { winter: 'Winter', spring: 'Frühling', summer: 'Sommer', autumn: 'Herbst' },
  ja: { winter: '冬', spring: '春', summer: '夏', autumn: '秋' },
  es: { winter: 'Invierno', spring: 'Primavera', summer: 'Verano', autumn: 'Otoño' },
  'pt-BR': { winter: 'Inverno', spring: 'Primavera', summer: 'Verão', autumn: 'Outono' },
  'zh-CN': { winter: '冬季', spring: '春季', summer: '夏季', autumn: '秋季' },
  ko: { winter: '겨울', spring: '봄', summer: '여름', autumn: '가을' },
  fr: { winter: 'Hiver', spring: 'Printemps', summer: 'Été', autumn: 'Automne' },
  it: { winter: 'Inverno', spring: 'Primavera', summer: 'Estate', autumn: 'Autunno' },
  nl: { winter: 'Winter', spring: 'Lente', summer: 'Zomer', autumn: 'Herfst' },
  sv: { winter: 'Vinter', spring: 'Vår', summer: 'Sommar', autumn: 'Höst' },
};

// "What can you do in {season}" style section labels for the season split.
export const SEASON_SECTIONS: Record<Lang, {
  inSeasonKicker: string;       // eyebrow over the in-season block
  inSeasonNow: (s: string) => string;    // e.g. "Best right now — Summer"
  alsoGreat: (s: string) => string;      // e.g. "Year-round & winter"
  yearRound: string;            // "Year-round"
  whyKicker: string;            // eyebrow over the intro panel
  whyH2: (place: string) => string;      // "Why visit {place}"
  goodToKnowKicker: string;     // eyebrow over the facts panel
  goodToKnowH2: string;         // "Good to know"
  accessLabel: string;
  bestForLabel: string;
  elevationLabel: string;
  operatorsShort: string;
}> = {
  en: {
    inSeasonKicker: 'When to go',
    inSeasonNow: (s) => `Best right now: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Also worth it: ${s.toLowerCase()}`,
    yearRound: 'year-round',
    whyKicker: 'The place',
    whyH2: (p) => `Why go to ${p}`,
    goodToKnowKicker: 'At a glance',
    goodToKnowH2: 'Good to know',
    accessLabel: 'Getting there',
    bestForLabel: 'Best for',
    elevationLabel: 'Highest point',
    operatorsShort: 'Operators',
  },
  fi: {
    inSeasonKicker: 'Milloin kannattaa mennä',
    inSeasonNow: (s) => `Juuri nyt parasta: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Myös tämä kannattaa: ${s.toLowerCase()}`,
    yearRound: 'ympäri vuoden',
    whyKicker: 'Kohde',
    whyH2: (p) => `Miksi ${p}`,
    goodToKnowKicker: 'Lyhyesti',
    goodToKnowH2: 'Hyvä tietää',
    accessLabel: 'Näin pääset perille',
    bestForLabel: 'Parhaiten sopii',
    elevationLabel: 'Korkein kohta',
    operatorsShort: 'Operaattorit',
  },
  de: {
    inSeasonKicker: 'Wann hinfahren',
    inSeasonNow: (s) => `Jetzt am besten: ${s}`,
    alsoGreat: (s) => `Lohnt sich auch: ${s}`,
    yearRound: 'ganzjährig',
    whyKicker: 'Das Reiseziel',
    whyH2: (p) => `Warum nach ${p}`,
    goodToKnowKicker: 'Auf einen Blick',
    goodToKnowH2: 'Gut zu wissen',
    accessLabel: 'Anreise',
    bestForLabel: 'Ideal für',
    elevationLabel: 'Höchster Punkt',
    operatorsShort: 'Anbieter',
  },
  ja: {
    inSeasonKicker: 'ベストシーズン',
    inSeasonNow: (s) => `今がベスト：${s}`,
    alsoGreat: (s) => `こちらもおすすめ：${s}`,
    yearRound: '通年',
    whyKicker: '目的地',
    whyH2: (p) => `${p}の魅力`,
    goodToKnowKicker: '概要',
    goodToKnowH2: '知っておきたいこと',
    accessLabel: 'アクセス',
    bestForLabel: 'おすすめ',
    elevationLabel: '最高地点',
    operatorsShort: '主催会社',
  },
  es: {
    inSeasonKicker: 'Cuándo ir',
    inSeasonNow: (s) => `Mejor ahora mismo: ${s.toLowerCase()}`,
    alsoGreat: (s) => `También merece la pena: ${s.toLowerCase()}`,
    yearRound: 'todo el año',
    whyKicker: 'El destino',
    whyH2: (p) => `Por qué ir a ${p}`,
    goodToKnowKicker: 'De un vistazo',
    goodToKnowH2: 'Conviene saber',
    accessLabel: 'Cómo llegar',
    bestForLabel: 'Ideal para',
    elevationLabel: 'Punto más alto',
    operatorsShort: 'Operadores',
  },
  'pt-BR': {
    inSeasonKicker: 'Quando ir',
    inSeasonNow: (s) => `Melhor agora: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Também vale a pena: ${s.toLowerCase()}`,
    yearRound: 'o ano todo',
    whyKicker: 'O destino',
    whyH2: (p) => `Por que ir a ${p}`,
    goodToKnowKicker: 'Em resumo',
    goodToKnowH2: 'Bom saber',
    accessLabel: 'Como chegar',
    bestForLabel: 'Ideal para',
    elevationLabel: 'Ponto mais alto',
    operatorsShort: 'Operadores',
  },
  'zh-CN': {
    inSeasonKicker: '最佳时间',
    inSeasonNow: (s) => `当下最佳：${s}`,
    alsoGreat: (s) => `同样值得：${s}`,
    yearRound: '全年',
    whyKicker: '目的地',
    whyH2: (p) => `为何前往${p}`,
    goodToKnowKicker: '速览',
    goodToKnowH2: '实用信息',
    accessLabel: '如何抵达',
    bestForLabel: '适合',
    elevationLabel: '最高点',
    operatorsShort: '运营商',
  },
  ko: {
    inSeasonKicker: '방문 시기',
    inSeasonNow: (s) => `지금이 최고: ${s}`,
    alsoGreat: (s) => `이것도 좋아요: ${s}`,
    yearRound: '연중',
    whyKicker: '여행지',
    whyH2: (p) => `${p}을(를) 찾는 이유`,
    goodToKnowKicker: '한눈에',
    goodToKnowH2: '알아두면 좋아요',
    accessLabel: '가는 방법',
    bestForLabel: '추천 대상',
    elevationLabel: '최고 지점',
    operatorsShort: '운영사',
  },
  fr: {
    inSeasonKicker: 'Quand partir',
    inSeasonNow: (s) => `Idéal en ce moment: ${s.toLowerCase()}`,
    alsoGreat: (s) => `À ne pas manquer non plus: ${s.toLowerCase()}`,
    yearRound: "toute l'année",
    whyKicker: 'La destination',
    whyH2: (p) => `Pourquoi aller à ${p}`,
    goodToKnowKicker: "En un coup d'œil",
    goodToKnowH2: 'Bon à savoir',
    accessLabel: 'Comment s\'y rendre',
    bestForLabel: 'Idéal pour',
    elevationLabel: 'Point culminant',
    operatorsShort: 'Prestataires',
  },
  it: {
    inSeasonKicker: 'Quando andare',
    inSeasonNow: (s) => `Il momento migliore: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Vale la pena anche: ${s.toLowerCase()}`,
    yearRound: 'tutto l\'anno',
    whyKicker: 'La destinazione',
    whyH2: (p) => `Perché andare a ${p}`,
    goodToKnowKicker: 'In sintesi',
    goodToKnowH2: 'Buono a sapersi',
    accessLabel: 'Come arrivare',
    bestForLabel: 'Ideale per',
    elevationLabel: 'Punto più alto',
    operatorsShort: 'Operatori',
  },
  nl: {
    inSeasonKicker: 'Wanneer gaan',
    inSeasonNow: (s) => `Nu op zijn best: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Ook de moeite waard: ${s.toLowerCase()}`,
    yearRound: 'het hele jaar',
    whyKicker: 'De bestemming',
    whyH2: (p) => `Waarom naar ${p}`,
    goodToKnowKicker: 'In het kort',
    goodToKnowH2: 'Goed om te weten',
    accessLabel: 'Hoe kom je er',
    bestForLabel: 'Ideaal voor',
    elevationLabel: 'Hoogste punt',
    operatorsShort: 'Aanbieders',
  },
  sv: {
    inSeasonKicker: 'När du bör åka',
    inSeasonNow: (s) => `Bäst just nu: ${s.toLowerCase()}`,
    alsoGreat: (s) => `Också värt det: ${s.toLowerCase()}`,
    yearRound: 'året runt',
    whyKicker: 'Platsen',
    whyH2: (p) => `Varför åka till ${p}`,
    goodToKnowKicker: 'I korthet',
    goodToKnowH2: 'Bra att veta',
    accessLabel: 'Ta dig dit',
    bestForLabel: 'Passar bäst för',
    elevationLabel: 'Högsta punkt',
    operatorsShort: 'Researrangörer',
  },
};

// Current season at runtime (Finnish Lapland): coarse mapping used only to decide
// which activity bucket to surface first. Winter Nov–Apr, Summer Jun–Sep, with
// May=spring, Oct=autumn folded into the nearest dominant bucket for the split.
export function currentSeasonBucket(): 'winter' | 'summer' {
  const m = new Date().getMonth() + 1;
  return m >= 5 && m <= 9 ? 'summer' : 'winter';
}

// Does an activity belong to the given coarse bucket?
export function inBucket(a: Activity, bucket: 'winter' | 'summer'): boolean {
  if (bucket === 'summer') return a.season.includes('summer') || a.season.includes('autumn');
  return a.season.includes('winter') || a.season.includes('spring');
}
