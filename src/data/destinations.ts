import { HERO, MKT } from './images';

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  /** Short hero lead (1-2 sentences). Also used as meta/OG description. */
  description: string;
  /** "Why go" body — MUST differ from the hero lead and add substance
   *  (what's there, who it suits, one concrete local detail). Vesa 2026-07-24:
   *  hero lead and Why-section were verbatim identical on every page. */
  why: string;
  access: string;
  elevation: string;
  bestFor: string;
  operators: string[];
  /** GYG numeric location ID — canonical: laplandvibes/_affiliate/gyg-location-ids.md */
  gygLocationId: string;
  image: string;
  heroImage: string;
}

export const destinations: Destination[] = [
  {
    slug: 'rovaniemi',
    gygLocationId: '2653',
    name: 'Rovaniemi',
    tagline: 'The Official Hometown of Santa Claus',
    description: 'The capital of Lapland and gateway to arctic adventures. Home to Santa Claus Village, excellent transport links, and a huge range of winter and summer activities.',
    why: 'Rovaniemi is where Lapland\'s infrastructure lives: an international airport, the night-train terminus and the region\'s widest choice of tours. Beyond Santa Claus Village you will find the Arktikum museum on the riverbank, ski slopes on Ounasvaara right above the city, and dozens of husky, reindeer and aurora operators within a 20 minute drive. It suits first-timers and families who want every booking to be easy. Collect the free Arctic Circle crossing certificate at Santa\'s post office while you are there.',
    access: 'Direct flights from Helsinki (1h 20min)',
    elevation: '92m',
    bestFor: 'First-time visitors & families',
    operators: ['Lapland Safaris', 'Arctic Circle Snowmobile Park', 'Beyond Arctic', 'Arctic Lifestyle'],
    image: HERO.santaClaus,
    heroImage: HERO.santaClaus, // Santa-first: reindeer/lavvu, not a generic igloo (Vesa 2026-07-07)
  },
  {
    slug: 'levi',
    gygLocationId: '150197',
    name: 'Levi',
    tagline: 'Finland\'s Largest Ski Resort',
    description: 'A premier ski destination with 44 slopes and 230 km of cross-country trails. Vibrant après-ski scene at Hullu Poro and year-round outdoor activities.',
    why: 'Levi packs Finland\'s largest ski resort, 44 slopes and 26 lifts including two gondolas, into one walkable village at the foot of Levitunturi. The Alpine World Cup opens its slalom season here every November, and when the lifts close the crowd moves on to Hullu Poro\'s après-ski. It suits skiers, groups and anyone who wants restaurants, nightlife and activities within walking distance of the slopes; in summer the gondola serves Levi Bike Park instead.',
    access: 'Fly to Kittilä (15 min drive)',
    elevation: '531m',
    bestFor: 'Skiers & active travelers',
    operators: ['Lapland Safaris', 'Wild Nordic Finland', 'Kinos Safaris', 'Levi Husky Park'],
    image: HERO.fells,
    heroImage: HERO.fells, // fell-resort-levi — the one photo actually OF Levi
  },
  {
    slug: 'yllas',
    gygLocationId: '87669',
    name: 'Ylläs',
    tagline: 'The Longest Slopes in Finland',
    description: 'Two ski resorts on either side of Ylläs fell offer the longest runs in Finland at 3 km. A quieter, more authentic Lapland experience with Pallas-Yllästunturi National Park.',
    why: 'Ylläs is two quiet villages, Äkäslompolo and Ylläsjärvi, on opposite sides of one big fell, with 62 slopes between them and downhill runs of over three kilometres, the longest in Finland. Around them spreads about 300 km of maintained cross-country track reaching into Pallas-Yllästunturi National Park. Choose it over Levi if you want dark aurora skies, national-park silence and long ski days rather than nightlife; Äkäslompolo is the calmer side, Ylläsjärvi has the bars.',
    access: 'Fly to Kittilä (35 min drive)',
    elevation: '718m',
    bestFor: 'Nature lovers & serious skiers',
    operators: ['SnowFun Safaris', 'Pallas Husky', 'Wild Nordic Finland'],
    // Ei auroraLake: se on revontulikategorian kuva, ja Yllas on hiihtokohde.
    // fjell = sama tiedosto jota Yllaksen oma DEST_HERO kayttaa talvella.
    image: HERO.fjell,
    heroImage: HERO.fjell,
  },
  {
    slug: 'saariselka',
    gygLocationId: '181615',
    name: 'Saariselkä',
    tagline: 'Gateway to Urho Kekkonen National Park',
    description: 'The northernmost ski resort in Finland, bordering one of Europe\'s largest wilderness areas. Famous for aurora viewing, gold panning, and the legendary Kiilopää smoke sauna.',
    why: 'Saariselkä sits at the edge of Urho Kekkonen National Park, a wilderness where marked trails and open wilderness huts start straight from the village. Being this far north means real aurora odds from September to April, plus things you will not find further south: panning for gold in Tankavaara, where every flake you find is yours, and the Kiilopää smoke sauna followed by a roll in the snow. Best for travellers who put wilderness first and services second.',
    access: 'Fly to Ivalo (30 min drive)',
    elevation: '438m',
    bestFor: 'Wilderness seekers & aurora hunters',
    operators: ['Lapland Safaris', 'Tankavaara Gold Village', 'Husky & Co'],
    image: MKT.igluAurora,
    heroImage: MKT.igluDramatic,
  },
  {
    slug: 'inari',
    gygLocationId: '164594',
    name: 'Inari',
    tagline: 'Heart of Sámi Culture',
    description: 'Located on the shores of Lake Inari with over 3,000 islands, this is the cultural capital of the Finnish Sámi people. Home to the Siida museum and pristine wilderness.',
    why: 'Inari is the seat of Finland\'s Sámi Parliament and the best place to meet living Sámi culture rather than a staged version of it: start at the Siida museum, then cruise Lake Inari past the sacred island of Ukonsaari in summer. The village is small and the wilderness around it huge, with the Pielpajärvi wilderness church reachable on foot through old pine forest. It rewards travellers who come for culture, photography and quiet rather than resort services.',
    access: 'Fly to Ivalo (40 min drive)',
    elevation: '118m',
    bestFor: 'Cultural explorers & photographers',
    operators: ['Siida', 'Visit Inari'],
    image: HERO.reindeerSunset,
    heroImage: HERO.reindeerSunset,
  },
  {
    slug: 'ruka',
    gygLocationId: '113322',
    name: 'Ruka & Kuusamo',
    tagline: "Home of Finland's Longest Ski Season",
    description: 'Home to the legendary Karhunkierros Bear Trail, Oulanka National Park, and one of Finland\'s best ski resorts. Famous for bear watching, river rafting, and the longest ski season. Ruka sits in Kuusamo just south of the official Lapland border, with the same snow and the same northern winter.',
    why: 'Ruka is a compact slope-side village with 41 slopes and 22 lifts on top of Kuusamo\'s outdoor country: Oulanka National Park, the 82 km Karhunkierros trail and rapids that run rafting trips from spring into autumn. Stored snow lets the resort open in October and ski into May, the longest season in Finland. Summer flips the script with brown-bear watching hides and Finland\'s award-winning bike park, so hikers and wildlife watchers get as much here as skiers do.',
    access: 'Fly to Kuusamo (25 min drive)',
    elevation: '492m',
    bestFor: 'Hikers, skiers & wildlife enthusiasts',
    operators: ['Ruka Safaris', 'Ruka Adventures', 'Erä-Susi Huskies'],
    image: HERO.ruskaRidge,
    heroImage: HERO.ruskaRidge,
  },
  {
    slug: 'posio',
    gygLocationId: '217155',
    name: 'Posio',
    tagline: 'Hidden Gem of Eastern Lapland',
    description: 'Famous for the spectacular snow-crowned trees of Riisitunturi National Park and the frozen waterfalls of Korouoma canyon. Off the beaten path, pure wilderness.',
    why: 'Posio\'s calling cards are natural ones: Riisitunturi\'s crown-snow spruces, bent into sculptures by midwinter frost, and Korouoma\'s frozen waterfalls hanging up to 40 metres down a canyon wall. Add Pentik, the world\'s northernmost ceramics factory with its galleries and outlet shop, and you have a full day well off the main tourist routes. You need a car; it pairs naturally with a Ruka or Rovaniemi trip, and photographers get the tykky trees at their best from January to March.',
    access: 'Drive from Rovaniemi (2h) or Ruka (1h)',
    elevation: '250m',
    bestFor: 'Off-the-beaten-path explorers',
    operators: ['Pentik', 'Local wilderness guides'],
    image: HERO.skiResortWinter,
    heroImage: HERO.skiResortWinter,
  },
  {
    slug: 'tornio',
    gygLocationId: '217355', // kemi-tornio combined (46 acts vs Tornio-only 21) — page covers both towns
    name: 'Tornio, Haparanda & Kemi',
    tagline: 'Arctic Border Adventures',
    description: 'The Finland-Sweden twin town and gateway to unique Arctic experiences. Home to the legendary Icebreaker Sampo cruise, the SnowCastle Winter Park, and Europe\'s largest free-flowing salmon river.',
    why: 'Tornio and Haparanda are one town in two countries: you can walk across the border in the middle of the shopping street, spend a day comparing prices and ranges on both sides with IKEA Haparanda right by the crossing, and play a golf round that switches country and time zone four times. Kemi, 25 minutes away, adds the Icebreaker Sampo cruise and the SnowCastle Area\'s winter snow park. Down the Tornionjoki, Europe\'s largest free-flowing salmon river, the Kukkolankoski rapids still run traditional net fishing each summer.',
    access: 'Fly to Kemi (15 min drive)',
    elevation: '5m',
    bestFor: 'Unique experiences & family fun',
    operators: ['Icebreaker Sampo', 'SnowCastle', 'Green Zone Golf'],
    image: MKT.huskyAuroraFamily,
    heroImage: HERO.huskyDay,
  },
  {
    slug: 'pyha-luosto',
    gygLocationId: '161152', // Pyhä-Luosto National Park — verified live 2026-07-24, 20+ bookable tours
    name: 'Pyhä-Luosto',
    tagline: 'Twin Fells of the Oldest National Park',
    description: 'Two fell villages, Pyhä and Luosto, joined by an ancient fell chain with Pyhä-Luosto National Park between them. Ski, snowshoe, and dig your own amethyst on Lampivaara.',
    why: 'The national park between the two villages is the point: Isokuru, Finland\'s deepest gorge at about 220 metres, boardwalks through old-growth forest, and open views from Lapland\'s oldest fell chain. On Lampivaara in Luosto you can dig at Europe\'s only active amethyst mine open to visitors and keep one stone; in winter a heated snow train hauls you up the fell. Pyhä\'s slopes include Huttu-Ukko, a mogul run of World Cup pedigree, while families get gentle terrain and short lift lines.',
    access: 'Fly to Rovaniemi (1h 30min drive)',
    elevation: '540m',
    bestFor: 'National-park skiers & families',
    operators: ['Pyhä Ski Resort', 'Amethyst Mine Lapland', 'Lapland Safaris Luosto', 'Metsähallitus'],
    image: HERO.pyhaLuosto,
    heroImage: HERO.pyhaLuosto,
  },
  {
    slug: 'kemijarvi',
    gygLocationId: '208937', // kemijarvi-l208937 — verified live 2026-07-24 (ice fishing, husky safari products)
    name: 'Kemijärvi',
    tagline: 'Finland\'s Northernmost Town',
    description: 'Finland\'s northernmost town sits on its own lake, where the Santa Claus Express night train ends its run. A calm base for eastern Lapland with Pyhä 50 km up the road.',
    why: 'Kemijärvi is the town the Santa Claus Express finishes in: one departure a day continues past Rovaniemi, so you can sleep on the train and wake up by the lake. The town has hosted an international wood-sculpting week since 1985, and its large wooden sculptures stand around the streets all year. On the Uitonniemi shore, Santa\'s Little Village pairs a small log hotel with Santa visits and aurora outings, the Suomu ski fell is a 40 minute drive, and this is the natural gateway to Lapland\'s quieter eastern road.',
    access: 'Night train from Helsinki, or drive from Rovaniemi (1h)',
    elevation: '149m',
    bestFor: 'Rail travellers & quiet-Lapland seekers',
    operators: ['Santa\'s Little Village', 'Suomutunturi', 'Local ice-fishing guides'],
    image: HERO.kemijarvi,
    heroImage: HERO.kemijarvi,
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find(d => d.slug === slug);
}
