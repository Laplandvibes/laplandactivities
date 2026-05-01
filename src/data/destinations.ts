import { HERO, HERO_BRANDED, MKT } from './images';

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  access: string;
  elevation: string;
  bestFor: string;
  operators: string[];
  image: string;
  heroImage: string;
}

export const destinations: Destination[] = [
  {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    tagline: 'The Official Hometown of Santa Claus',
    description: 'The capital of Lapland and gateway to arctic adventures. Home to Santa Claus Village, excellent transport links, and a huge range of winter and summer activities.',
    access: 'Direct flights from Helsinki (1h 15min)',
    elevation: '75m',
    bestFor: 'First-time visitors & families',
    operators: ['Lapland Safaris', 'Arctic Circle Snowmobile Park', 'Beyond Arctic', 'Arctic Lifestyle'],
    image: HERO.santaClaus,
    heroImage: HERO_BRANDED.magicOfLapland,
  },
  {
    slug: 'levi',
    name: 'Levi',
    tagline: 'Finland\'s Largest Ski Resort',
    description: 'A premier ski destination with 43 slopes and 230 km of cross-country trails. Vibrant après-ski scene at Hullu Poro and year-round outdoor activities.',
    access: 'Fly to Kittilä (15 min drive)',
    elevation: '531m',
    bestFor: 'Skiers & active travelers',
    operators: ['Lapland Safaris', 'Beyond Arctic', 'Bearhill Husky', 'Levi Activities'],
    image: MKT.huskyDaylight,
    heroImage: HERO_BRANDED.distinctive,
  },
  {
    slug: 'yllas',
    name: 'Ylläs',
    tagline: 'The Longest Slopes in Finland',
    description: 'Two ski resorts on either side of Ylläs fell offer the longest runs in Finland at 3.2 km. A quieter, more authentic Lapland experience with Pallas-Yllästunturi National Park.',
    access: 'Fly to Kittilä (35 min drive)',
    elevation: '718m',
    bestFor: 'Nature lovers & serious skiers',
    operators: ['SnowFun Safaris', 'Wild Nordic Finland', 'Erä-Susi Huskies'],
    image: HERO.snowyForest,
    heroImage: HERO.snowyForest,
  },
  {
    slug: 'saariselka',
    name: 'Saariselkä',
    tagline: 'Gateway to Urho Kekkonen National Park',
    description: 'The northernmost ski resort in Finland, bordering one of Europe\'s largest wilderness areas. Famous for aurora viewing, gold panning, and the legendary Kiilopää smoke sauna.',
    access: 'Fly to Ivalo (30 min drive)',
    elevation: '438m',
    bestFor: 'Wilderness seekers & aurora hunters',
    operators: ['Lapland Safaris', 'Tankavaara Gold Village', 'Amethyst Mine Lapland'],
    image: MKT.igluAurora,
    heroImage: MKT.igluDramatic,
  },
  {
    slug: 'inari',
    name: 'Inari',
    tagline: 'Heart of Sámi Culture',
    description: 'Located on the shores of Lake Inari with over 3,000 islands, this is the cultural capital of the Finnish Sámi people. Home to the Siida museum and pristine wilderness.',
    access: 'Fly to Ivalo (40 min drive)',
    elevation: '118m',
    bestFor: 'Cultural explorers & photographers',
    operators: ['Beyond Arctic', 'Inari Sámi Heritage'],
    image: HERO.reindeerHerd,
    heroImage: HERO.reindeerHerd,
  },
  {
    slug: 'ruka',
    name: 'Ruka & Kuusamo',
    tagline: 'Wilderness Capital of Finland',
    description: 'Home to the legendary Karhunkierros Bear Trail, Oulanka National Park, and one of Finland\'s best ski resorts. Famous for bear watching, river rafting, and the longest ski season.',
    access: 'Fly to Kuusamo (25 min drive)',
    elevation: '492m',
    bestFor: 'Hikers, skiers & wildlife enthusiasts',
    operators: ['Kuusamo Safaris', 'Ruka Adventures', 'Ruka Husky'],
    image: '/images/hero_03.png',
    heroImage: '/images/hero_03.png',
  },
  {
    slug: 'posio',
    name: 'Posio',
    tagline: 'Hidden Gem of Eastern Lapland',
    description: 'Famous for the spectacular snow-crowned trees of Riisitunturi National Park and the frozen waterfalls of Korouoma canyon. Off the beaten path, pure wilderness.',
    access: 'Drive from Rovaniemi (2h) or Ruka (1h)',
    elevation: '250m',
    bestFor: 'Off-the-beaten-path explorers',
    operators: ['Posio Adventures', 'Pentik'],
    image: '/images/mkt_01.png',
    heroImage: '/images/mkt_01.png',
  },
  {
    slug: 'tornio',
    name: 'Tornio & Kemi',
    tagline: 'Arctic Border Adventures',
    description: 'The Finland-Sweden border town and gateway to unique Arctic experiences. Home to the legendary Icebreaker Sampo cruise, the world\'s largest SnowCastle, and Europe\'s best salmon river.',
    access: 'Fly to Kemi (15 min drive)',
    elevation: '5m',
    bestFor: 'Unique experiences & family fun',
    operators: ['Icebreaker Sampo', 'SnowCastle', 'Green Zone Golf'],
    image: MKT.huskyAuroraFamily,
    heroImage: HERO_BRANDED.gatewayLapland,
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find(d => d.slug === slug);
}
