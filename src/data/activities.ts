import { GYG_SLUG, gygSlugForDestination } from './affiliate';

export interface Activity {
  id: string;
  title: string;
  operator: string;
  destination: string;
  destinationSlug: string;
  category: string;
  categorySlug: string;
  price: number;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  season: ('winter' | 'spring' | 'summer' | 'autumn')[];
  description: string;
  groupSize: string;
  highlights: string[];
  featured?: boolean;
}

// (image now derived deterministically from activity id — see data/images.ts)
export const activities: Activity[] = [
  // === ROVANIEMI ===
  {
    id: 'rov-aurora-snowmobile',
    title: 'Aurora Borealis Snowmobile Safari',
    operator: 'Lapland Safaris',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Chase the northern lights on a thrilling snowmobile ride through the arctic wilderness. Includes warm drinks by a campfire under the aurora.',
    groupSize: '2-12',
    highlights: ['Northern lights viewing', 'Campfire break', 'Warm gear provided'],
    featured: true,
  },
  {
    id: 'rov-santa-village',
    title: 'Santa Claus Village Experience',
    operator: 'Santa Claus Village',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-4 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Visit the official home of Santa Claus right on the Arctic Circle. Meet Santa, send postcards from the Arctic Post Office, and cross the memorable Arctic Circle line.',
    groupSize: 'Unlimited',
    highlights: ['Meet Santa Claus', 'Arctic Circle crossing', 'Santa\'s Post Office'],
    featured: true,
  },
  {
    id: 'rov-husky-safari',
    title: 'Husky Safari & Kennel Visit',
    operator: 'Beyond Arctic',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '4 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Drive your own husky team through snowy forests for up to 18 km, then visit the kennel to meet the puppies and learn about arctic dog sledding.',
    groupSize: '2-8',
    highlights: ['Drive your own sled', 'Puppy visit', 'Hot chocolate & snacks'],
    featured: true,
  },
  {
    id: 'rov-reindeer-farm',
    title: 'Reindeer Farm & Sleigh Ride',
    operator: 'Sirmakko Reindeer Farm',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Visit a traditional reindeer farm, enjoy a peaceful sleigh ride through winter wonderland, and learn about local reindeer-herding culture.',
    groupSize: '2-20',
    highlights: ['Herding culture talk', '2 km sleigh ride', 'Reindeer feeding'],
  },
  {
    id: 'rov-husky-summer',
    title: 'Summer Husky Kennel Visit & Puppy Meet',
    operator: 'Rovaniemi husky kennels',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '2 hours',
    difficulty: 'Easy',
    season: ['summer', 'autumn'],
    description: 'See what sled dogs do on their holiday: tour a working kennel in summer, meet this year\'s puppies and learn how huskies train and rest between seasons. A calm, family-friendly visit where the puppy pen is the undisputed highlight.',
    groupSize: '2-15',
    highlights: ['Meet this year\'s puppies', 'Working kennel tour', 'Family-friendly'],
  },
  {
    id: 'rov-snowmobile-full',
    title: 'Full-Day Wilderness Snowmobile Expedition',
    operator: 'Arctic Circle Snowmobile Park',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '6 hours',
    difficulty: 'Challenging',
    season: ['winter'],
    description: 'A full-day snowmobile journey deep into the Lappish wilderness. Cross frozen rivers, navigate forest trails, and stop at a wilderness cabin for lunch.',
    groupSize: '2-6',
    highlights: ['Full-day expedition', 'Wilderness cabin lunch', 'River crossings'],
    featured: true,
  },
  {
    id: 'rov-ice-karting',
    title: 'Family Snowmobile & Ice Karting Combo',
    operator: 'Arctic Circle Snowmobile Park',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Start with mini snowmobiles for children, then race go-karts on a frozen ice track. Warm up with hot cocoa afterwards.',
    groupSize: '2-16',
    highlights: ['Kids\' snowmobiles', 'Ice karting track', 'Family-friendly'],
  },
  {
    id: 'rov-arktikum',
    title: 'Arktikum Science Museum & Arctic Centre',
    operator: 'Arktikum',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Explore the fascinating history and culture of the Arctic region at this top-tier museum with striking glass tunnel architecture on the bank of the Ounasjoki river.',
    groupSize: 'Unlimited',
    highlights: ['Interactive exhibits', 'Northern Lights theatre', 'Arctic history'],
  },
  {
    id: 'rov-ranua-zoo',
    title: 'Ranua Wildlife Park - Polar Bears',
    operator: 'Ranua Wildlife Park',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '3-4 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Meet arctic animals including the only polar bears in Finland. Walk through snow-covered trails past wolverines, lynx, wolves, and around 50 arctic species.',
    groupSize: 'Unlimited',
    highlights: ['Polar bears', '50+ arctic species', 'Walking trails'],
  },
  {
    id: 'rov-ice-floating',
    title: 'Arctic Ice Floating Experience',
    operator: 'Beyond Arctic',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Wellness',
    categorySlug: 'wellness',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Float in a frozen river wearing a dry suit under the Arctic sky. A surreal, peaceful experience followed by warm drinks by an open fire.',
    groupSize: '2-10',
    highlights: ['Dry suit provided', 'Hot drinks included', 'Unique experience'],
  },
  {
    id: 'rov-santapark',
    title: 'SantaPark Underground Cave',
    operator: 'SantaPark',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'An underground Christmas theme park inside a real cavern. Elf school, ice gallery, gingerbread baking, and memorable shows deep beneath the Arctic ground.',
    groupSize: 'Unlimited',
    highlights: ['Underground cave', 'Elf school', 'Ice gallery'],
  },
  {
    id: 'rov-arctic-snow-hotel',
    title: 'Arctic Snow Hotel Overnight',
    operator: 'Arctic SnowHotel',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: 'Overnight',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Sleep in a room made entirely of ice and snow at -5°C in a cosy thermal sleeping bag. Includes sauna, dinner, and aurora wake-up service.',
    groupSize: '2',
    highlights: ['Ice room overnight', 'Aurora wake-up call', 'Sauna & dinner included'],
  },
  {
    id: 'rov-ounasvaara-ski',
    title: 'Ounasvaara Skiing & Snowboarding',
    operator: 'Ounasvaara Ski Resort',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Ski the city slopes of Rovaniemi. 10 slopes and cross-country trails right in the center, perfect for a quick session between other activities.',
    groupSize: 'Unlimited',
    highlights: ['City location', 'Night skiing', 'Rental available'],
  },
  {
    id: 'rov-campfire-dinner',
    title: 'Wilderness Campfire Dinner',
    operator: 'Local wilderness guides',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Food & Drink',
    categorySlug: 'food',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Enjoy a traditional Lappish dinner cooked over an open fire in the wilderness. Grilled salmon, reindeer sausage, and wild berry dessert under the Arctic sky.',
    groupSize: '2-12',
    highlights: ['Open fire cooking', 'Lappish menu', 'Wilderness setting'],
  },

  // === LEVI ===
  {
    id: 'lev-ski-resort',
    title: 'Levi Ski Resort - 43 Slopes',
    operator: 'Levi Ski Resort',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Finland\'s largest ski resort with 44 slopes, 26 lifts, 230 km of cross-country trails, and a top-tier terrain park. Night skiing under northern lights available.',
    groupSize: 'Unlimited',
    highlights: ['44 slopes', 'Terrain park', 'Night skiing'],
    featured: true,
  },
  {
    id: 'lev-ice-karting',
    title: 'Ice Karting on Frozen Lake',
    operator: 'Local activity operators',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '1.5 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Race high-powered go-karts on a professionally maintained ice track on a frozen lake. Drift through corners at speed in an adrenaline-pumping arctic experience.',
    groupSize: '2-10',
    highlights: ['Frozen lake track', 'High-speed drifting', 'Timed laps'],
  },
  {
    id: 'lev-snowvillage',
    title: 'SnowVillage Ice Hotel, 30 min from Levi',
    operator: 'Lapland Hotels SnowVillage',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1 hour',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Walk through an entire village made of ice and snow 30 minutes from Levi in Lainio, with intricately carved rooms, an ice bar, and a chapel. New theme every year.',
    groupSize: 'Unlimited',
    highlights: ['Ice sculptures', 'Ice bar', 'New theme yearly'],
  },
  {
    id: 'lev-samiland',
    title: 'Samiland Reindeer & Culture',
    operator: 'Samiland',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Meet reindeer and learn about Sami culture at this authentic heritage site. Feed reindeer by hand in the winter paddock, explore the indoor and outdoor exhibitions, and hear stories of the indigenous people.',
    groupSize: '2-20',
    highlights: ['Reindeer feeding', 'Sami storytelling', 'Outdoor exhibition'],
  },
  {
    id: 'lev-husky-safari',
    title: 'Levi Husky Safari',
    operator: 'Levi Husky Park',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Mush your own husky team through the silent wilderness around Levi. 15 km trail through frozen forests with a break for campfire coffee.',
    groupSize: '2-8',
    highlights: ['Drive your own sled', '15 km trail', 'Campfire break'],
  },
  {
    id: 'lev-snowmobile',
    title: 'Snowmobile Safari to Reindeer Farm',
    operator: 'Lapland Safaris',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Ride snowmobiles through the forest to a traditional reindeer farm. Combine two classic Lapland experiences in one thrilling trip.',
    groupSize: '2-10',
    highlights: ['Snowmobile ride', 'Reindeer farm visit', 'Warm drinks'],
  },
  {
    id: 'lev-aurora-photo',
    title: 'Northern Lights Photography Tour',
    operator: 'Local photography guides',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '4 hours',
    difficulty: 'Easy',
    season: ['autumn', 'winter'],
    description: 'A photography-focused aurora tour led by a professional guide. Learn to capture the lights with your camera while enjoying hot berry juice.',
    groupSize: '4-10',
    highlights: ['Camera tips & tripods', 'Best aurora spots', 'Hot drinks & snacks'],
  },
  {
    id: 'lev-midnight-sun-golf',
    title: 'Midnight Sun Golf',
    operator: 'Levi Golf & Country Club',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '4-5 hours',
    difficulty: 'Easy',
    season: ['summer'],
    description: 'Play golf under the midnight sun on one of the world\'s northernmost courses. Tee off at midnight in broad daylight during the Arctic summer.',
    groupSize: '1-4',
    highlights: ['Midnight tee times', '18-hole course', 'Arctic scenery'],
  },
  {
    id: 'lev-ice-fishing',
    title: 'Ice Fishing on Frozen Lake',
    operator: 'Lapland Safaris',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Drill through the ice on a frozen lake and fish for perch and whitefish using traditional Lappish techniques. Catch is cooked over an open fire.',
    groupSize: '2-10',
    highlights: ['Catch & cook', 'Traditional methods', 'Lakeside campfire'],
  },
  {
    id: 'lev-fatbike',
    title: 'Fat Bike Tour Through Snow Forest',
    operator: 'Local activity operators',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: '2.5 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Ride fat-tire bikes through snow-covered trails and frozen landscapes. Wide tires grip the snow as you cruise through ancient boreal forests.',
    groupSize: '2-8',
    highlights: ['Fat bike provided', 'National park trails', 'Hot drinks after'],
  },
  {
    id: 'lev-bike-park',
    title: 'Levi Bike Park',
    operator: 'Levi Ski Resort',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Challenging',
    season: ['summer'],
    description: 'Shred downhill trails at Levi Bike Park with lift-serviced runs from beginner flow trails to expert black diamond descents.',
    groupSize: 'Unlimited',
    highlights: ['Lift-serviced', 'All skill levels', 'Rental available'],
  },
  {
    id: 'lev-kota-dinner',
    title: 'Lappish Kammi Dinner by Open Fire',
    operator: 'Saamen Kammi',
    destination: 'Levi',
    destinationSlug: 'levi',
    category: 'Food & Drink',
    categorySlug: 'food',
    price: 0,
    duration: '2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Dine in a traditional Sami-style turf hut (kammi) around a central open fire. Enjoy flame-grilled salmon, reindeer, and seasonal wild berries.',
    groupSize: '2-20',
    highlights: ['Traditional kammi setting', 'Open fire cooking', 'Wild game menu'],
  },

  // === YLLÄS ===
  {
    id: 'yll-ski-resort',
    title: 'Ylläs Ski Resort - Longest Slopes',
    operator: 'Ylläs Ski Resort',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Finland\'s longest slopes at 3 km on both sides of Ylläs fell. 62 slopes, a gondola, and about 300 km of groomed cross-country trails through national park.',
    groupSize: 'Unlimited',
    highlights: ['3 km longest run', '62 slopes', '300 km cross-country'],
    featured: true,
  },
  {
    id: 'yll-aurora-hunt',
    title: 'Northern Lights Hunt from Ylläs Fell',
    operator: 'SnowFun Safaris',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['autumn', 'winter'],
    description: 'Ylläs has one of the darkest, clearest night skies in Finland. Chase the aurora with expert guides who know the best viewpoints on and around the fell.',
    groupSize: '4-12',
    highlights: ['Dark Sky area', 'Expert guides', 'Fell-top views'],
  },
  {
    id: 'yll-snowmobile',
    title: 'Snowmobile Safari Through Wilderness',
    operator: 'SnowFun Safaris',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Ride through the pristine wilderness between Ylläs and Pallas fells. Routes pass through frozen marshes, boreal forests, and open fell landscapes.',
    groupSize: '2-8',
    highlights: ['Wilderness route', 'Fell landscapes', 'Warm gear included'],
  },
  {
    id: 'yll-pallas-hike',
    title: 'Pallas-Yllästunturi National Park Hike',
    operator: 'Ylläs Experience',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '5-7 hours',
    difficulty: 'Moderate',
    season: ['summer', 'autumn'],
    description: 'Hike through Finland\'s most visited national park on marked fell trails from Ylläs. Striking fell-to-fell views, ancient forests, and crystal-clear streams.',
    groupSize: '2-10',
    highlights: ['National park trails', 'Fell-top panoramas', 'Guide included'],
  },
  {
    id: 'yll-husky',
    title: 'Husky Day Safari in Pallas-Yllästunturi National Park',
    operator: 'Pallas Husky',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '5-6 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Drive your own husky team through Pallas-Yllästunturi National Park with a small family-run farm from Rauhala, north of Ylläs. Maximum six guests per tour.',
    groupSize: '2-6',
    highlights: ['Small group', 'National park trails', 'Meet the huskies'],
  },
  {
    id: 'yll-snowshoe',
    title: 'Snowshoeing in Ancient Forest',
    operator: 'SnowFun Safaris',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Walk through untouched powder snow in ancient forests. Your guide shares stories of the forest while you enjoy the total silence of the Arctic wilderness.',
    groupSize: '2-8',
    highlights: ['Snowshoes provided', 'Ancient forest', 'Peaceful silence'],
  },
  {
    id: 'yll-lainio-snow',
    title: 'Lainio Snow Village',
    operator: 'Lapland Hotels SnowVillage',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1-2 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Explore the ice hotel, ice restaurant, and ice chapel at Lainio. Every year rebuilt with a new theme - striking ice architecture you can walk through.',
    groupSize: 'Unlimited',
    highlights: ['Ice hotel', 'Ice restaurant', 'New theme annually'],
  },
  {
    id: 'yll-reindeer',
    title: 'Reindeer Sleigh Ride in Ylläs',
    operator: 'SnowFun Safaris',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Glide through snowy landscapes on a traditional reindeer sleigh. The slow pace lets you absorb the Arctic silence and take in the frozen beauty.',
    groupSize: '2-12',
    highlights: ['Traditional sleigh', 'Winter scenery', 'Hot drinks'],
  },
  {
    id: 'yll-cross-country',
    title: 'Cross-Country Skiing in Pallas',
    operator: 'Ylläs Ski Resort',
    destination: 'Ylläs',
    destinationSlug: 'yllas',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: '3-5 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'Ski along about 300 km of groomed trails through Pallas-Yllästunturi National Park. Routes for all levels from gentle lakeside loops to fell-top challenges.',
    groupSize: '1-10',
    highlights: ['300 km trail network', 'National park scenery', 'Equipment rental'],
  },

  // === SAARISELKÄ ===
  {
    id: 'saa-gold-panning',
    title: 'Gold Panning at Tankavaara',
    operator: 'Tankavaara Gold Village',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1-2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Pan for real gold at Finland\'s gold museum. Learn the techniques of the 1868 Lapland gold rush and keep any gold you find.',
    groupSize: '2-20',
    highlights: ['Keep your gold', 'Museum included', 'Hands-on panning'],
  },
  {
    id: 'saa-amethyst-mine',
    title: 'Amethyst Mine Day Trip (Luosto)',
    operator: 'Amethyst Mine Lapland',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Dig your own amethyst gemstone at Europe\'s only active amethyst mine on top of Lampivaara fell. In winter, ride the heated Amethyst Pendolino sled up the fell; in summer it is a short scenic walk from the cafe.',
    groupSize: '2-20',
    highlights: ['Dig your own gem', 'Keep one amethyst', 'Fell-top location'],
    featured: true,
  },
  {
    id: 'saa-uk-national-park',
    title: 'Urho Kekkonen National Park Trek',
    operator: 'Metsähallitus',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '1 day - multi-day',
    difficulty: 'Moderate',
    season: ['summer', 'autumn'],
    description: 'Explore one of Europe\'s largest wilderness areas. Day hikes from Kiilopää, or multi-day treks through untouched fell landscape with wilderness huts along the way.',
    groupSize: '1-6',
    highlights: ['Free entry', 'Wilderness huts', '2550 km² area'],
  },
  {
    id: 'saa-kiilopaa-sauna',
    title: 'Kiilopää Smoke Sauna & Ice Swim',
    operator: 'Suomen Latu Kiilopää',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Wellness',
    categorySlug: 'wellness',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Experience Finland\'s most famous smoke sauna at Kiilopää fell centre. Heat up in the traditional savusauna, then plunge into the icy Kiilopuro fell stream.',
    groupSize: '2-30',
    highlights: ['Famous smoke sauna', 'Ice swimming', 'Open year-round'],
  },
  {
    id: 'saa-snowmobile',
    title: 'Snowmobile Safari in Saariselkä Wilderness',
    operator: 'Lapland Safaris',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Ride through the wild fells bordering Urho Kekkonen National Park. The landscape here is more rugged and remote than anywhere else in Finnish Lapland.',
    groupSize: '2-8',
    highlights: ['Wilderness border', 'Fell landscapes', 'Warm gear included'],
  },
  {
    id: 'saa-aurora-hunt',
    title: 'Northern Lights Bus Tour from Saariselkä',
    operator: 'Lapland Safaris',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['autumn', 'winter'],
    description: 'Chase the aurora by bus to the darkest spots in the Saariselkä area. No light pollution means some of the clearest aurora viewing in all of Finland.',
    groupSize: '4-16',
    highlights: ['Minimal light pollution', 'Hot drinks', 'Multiple viewpoints'],
  },
  {
    id: 'saa-ice-fishing',
    title: 'Arctic Ice Fishing Experience',
    operator: 'Lapland Safaris',
    destination: 'Saariselkä',
    destinationSlug: 'saariselka',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Drill through thick ice on a frozen lake and fish for perch and whitefish using traditional methods, then warm up with a campfire lunch in a lavvu.',
    groupSize: '2-10',
    highlights: ['Catch & cook lunch', 'Traditional methods', 'Lakeside campfire'],
  },

  // === INARI ===
  {
    id: 'ina-siida-museum',
    title: 'Siida - Sámi Museum & Nature Centre',
    operator: 'Siida',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Finland\'s premier Sámi museum showcasing the culture, history, and nature of the northernmost region. Striking outdoor exhibition through the seasons.',
    groupSize: 'Unlimited',
    highlights: ['Sámi culture', 'Nature exhibitions', 'Outdoor trails'],
  },
  {
    id: 'ina-lake-cruise',
    title: 'Lake Inari Boat Cruise',
    operator: 'Visit Inari',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '2.5 hours',
    difficulty: 'Easy',
    season: ['summer'],
    description: 'Cruise across Finland\'s third-largest lake with over 3,000 islands. Cruise past the sacred Ukonsaari island and enjoy striking Arctic panoramas.',
    groupSize: '2-40',
    highlights: ['3,000 islands', 'Ukonsaari views', 'Arctic panoramas'],
  },
  {
    id: 'ina-midnight-kayak',
    title: 'Midnight Sun Kayaking on Lake Inari',
    operator: 'Local guides',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '4 hours',
    difficulty: 'Moderate',
    season: ['summer'],
    description: 'Paddle across Lake Inari under the midnight sun, exploring islands and shoreline. Golden light reflecting off calm water creates a distinctive atmosphere.',
    groupSize: '2-8',
    highlights: ['Midnight sun', 'Island exploration', 'Wildlife spotting'],
  },
  {
    id: 'ina-sami-experience',
    title: 'Authentic Sámi Reindeer Herding',
    operator: 'Local reindeer-herding families',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Join a real Sámi reindeer herder for an intimate cultural experience. Learn about the ancient herding traditions that continue today in Inari.',
    groupSize: '2-8',
    highlights: ['Real Sámi herder', 'Cultural immersion', 'Reindeer interaction'],
  },
  {
    id: 'ina-pielpajärvi',
    title: 'Pielpajärvi Wilderness Church Trek',
    operator: 'Metsähallitus',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '4-5 hours',
    difficulty: 'Moderate',
    season: ['summer', 'autumn', 'winter'],
    description: 'Hike (or ski in winter) to one of Finland\'s most remote churches, built in 1760 in the wilderness. A beautiful 4.5 km trail through old-growth forest.',
    groupSize: '1-6',
    highlights: ['Historic church', '4.5 km trail', 'Wilderness setting'],
  },
  {
    id: 'ina-aurora',
    title: 'Northern Lights Hunt from Inari',
    operator: 'Local aurora guides',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '4 hours',
    difficulty: 'Easy',
    season: ['autumn', 'winter'],
    description: 'Inari offers some of the darkest skies in Finland. Your guide uses real-time aurora data to find the best viewing spots around the lake.',
    groupSize: '4-10',
    highlights: ['Darkest skies', 'Real-time tracking', 'Hot drinks & snacks'],
  },
  {
    id: 'ina-berry-foraging',
    title: 'Wild Berry & Mushroom Foraging',
    operator: 'Local nature guides',
    destination: 'Inari',
    destinationSlug: 'inari',
    category: 'Food & Drink',
    categorySlug: 'food',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['summer', 'autumn'],
    description: 'Forage for wild cloudberries, lingonberries, and mushrooms in the Arctic forest with a local guide. Learn traditional preservation and cooking methods.',
    groupSize: '2-8',
    highlights: ['Cloudberries', 'Expert guide', 'Traditional recipes'],
  },

  // === RUKA / KUUSAMO ===
  {
    id: 'ruk-ski-resort',
    title: 'Ruka Ski Resort',
    operator: 'Ruka Ski Resort',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: '41 slopes, 22 lifts, Finland\'s longest ski season (October to May), and world cup-level cross-country trails. Night skiing available.',
    groupSize: 'Unlimited',
    highlights: ['41 slopes', 'Longest season', 'Night skiing'],
  },
  {
    id: 'ruk-karhunkierros',
    title: 'Karhunkierros Bear Trail Hike',
    operator: 'Metsähallitus',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '2-5 days',
    difficulty: 'Challenging',
    season: ['summer', 'autumn'],
    description: 'Finland\'s most famous hiking trail - 82 km through Oulanka National Park. Hanging bridges, rapids, waterfalls, and pristine boreal forest.',
    groupSize: '1-6',
    highlights: ['82 km trail', 'Hanging bridges', 'Oulanka National Park'],
    featured: true,
  },
  {
    id: 'ruk-bear-watching',
    title: 'Wild Bear Watching from Hide',
    operator: 'Local wildlife guides',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: 'Overnight',
    difficulty: 'Moderate',
    season: ['spring', 'summer'],
    description: 'Spend a night in a photography hide near the Russian border watching wild brown bears in their natural habitat. 95% sighting success rate.',
    groupSize: '2-8',
    highlights: ['95% success rate', 'Photography hide', 'Wild bears'],
    featured: true,
  },
  {
    id: 'ruk-river-rafting',
    title: 'White Water Rafting on Kitka River',
    operator: 'Ruka Adventures',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['summer'],
    description: 'Navigate class II-III rapids on the crystal-clear Kitka River through Oulanka National Park. Perfect mix of adrenaline and striking nature.',
    groupSize: '4-12',
    highlights: ['Class II-III rapids', 'Oulanka scenery', 'All gear provided'],
  },
  {
    id: 'ruk-snowmobile',
    title: 'Snowmobile Safari Through Ruka Wilderness',
    operator: 'Ruka Safaris',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Ride through some of the most remote wilderness in Kuusamo, just south of the Lapland border. Deep snow, frozen rivers, and the silence of the backcountry.',
    groupSize: '2-8',
    highlights: ['Remote wilderness', 'Frozen rivers', 'Campfire stop'],
  },
  {
    id: 'ruk-husky',
    title: 'Ruka Husky Safari',
    operator: 'Erä-Susi Huskies',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Mush your own team of Alaskan huskies through the Ruka forest. Visit the kennel and meet the dogs before your ride.',
    groupSize: '2-8',
    highlights: ['Drive your own sled', 'Kennel visit', 'Forest trails'],
  },
  {
    id: 'ruk-ice-climbing',
    title: 'Ice Climbing at Korouoma Canyon',
    operator: 'Bliss Adventure',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: 'Full day',
    difficulty: 'Challenging',
    season: ['winter'],
    description: 'Climb frozen waterfalls in the striking Korouoma canyon. Professional guides provide all gear and instruction for beginners to advanced climbers.',
    groupSize: '2-6',
    highlights: ['Frozen waterfalls', 'All gear provided', 'Professional guides'],
  },
  {
    id: 'ruk-aurora',
    title: 'Northern Lights Snowshoe Hike',
    operator: 'Ruka Safaris',
    destination: 'Ruka',
    destinationSlug: 'ruka',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['autumn', 'winter'],
    description: 'Hike on snowshoes through the silent forest to a hilltop viewpoint, then wait for the aurora with hot drinks and a campfire.',
    groupSize: '4-10',
    highlights: ['Snowshoe hike', 'Hilltop viewpoint', 'Campfire & drinks'],
  },

  // === POSIO ===
  {
    id: 'pos-riisitunturi',
    title: 'Riisitunturi National Park - Snow Trees',
    operator: 'Metsähallitus',
    destination: 'Posio',
    destinationSlug: 'posio',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '3-6 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Famous for spectacular snow-crowned "tykky" trees that look like frozen sculptures. One of Finland\'s most photogenic national parks.',
    groupSize: '1-6',
    highlights: ['Tykky snow trees', 'Free entry', 'Iconic scenery'],
  },
  {
    id: 'pos-korouoma',
    title: 'Korouoma Canyon & Frozen Waterfalls',
    operator: 'Local wilderness guides',
    destination: 'Posio',
    destinationSlug: 'posio',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '5 hours',
    difficulty: 'Moderate',
    season: ['winter'],
    description: 'Hike through the dramatic Korouoma canyon to see massive frozen waterfalls up to 40 metres tall. Ice climbing optional for the adventurous.',
    groupSize: '2-10',
    highlights: ['40m frozen waterfalls', 'Canyon hike', 'Ice climbing option'],
  },
  {
    id: 'pos-pentik',
    title: 'Pentik Ceramic Centre Visit',
    operator: 'Pentik',
    destination: 'Posio',
    destinationSlug: 'posio',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1-2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Visit the birthplace of Pentik, home of the world\'s northernmost ceramics factory. See the galleries and the International Coffee Cup Museum, then browse the factory shop.',
    groupSize: 'Unlimited',
    highlights: ['Anu Pentik Gallery', 'Ceramics museum', 'Outlet shop'],
  },

  // === TORNIO-HAPARANDA ===
  {
    id: 'tor-icebreaker',
    title: 'Icebreaker Sampo Cruise',
    operator: 'Icebreaker Sampo',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Adventure',
    categorySlug: 'adventure',
    price: 0,
    duration: '4 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Cruise through the frozen Baltic Sea on a real icebreaker ship, then float in the frozen sea wearing a survival suit. A bucket-list Arctic experience.',
    groupSize: '2-150',
    highlights: ['Real icebreaker', 'Sea floating', 'Bucket list'],
    featured: true,
  },
  {
    id: 'tor-snowcastle',
    title: 'LumiLinna SnowCastle Kemi',
    operator: 'SnowCastle',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1-2 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'Kemi\'s famous snow-castle tradition lives on as the SnowCastle Winter Park and the year-round SnowExperience365 indoor snow world, with ice sculptures and an ice restaurant. The full castle is no longer rebuilt each year.',
    groupSize: 'Unlimited',
    highlights: ['Year-round indoors', 'Ice restaurant', 'Ice chapel'],
  },
  {
    id: 'tor-green-zone',
    title: 'Green Zone Golf - Two Countries',
    operator: 'Green Zone Golf',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '3-4 hours',
    difficulty: 'Easy',
    season: ['summer'],
    description: 'Play golf across two countries at the Finland-Sweden border. Tee off in Finland, putt in Sweden. You cross the border, and a one-hour time difference, four times in a round.',
    groupSize: '1-4',
    highlights: ['Two countries', 'Two time zones', 'Midnight sun golf'],
  },
  {
    id: 'tor-salmon-fishing',
    title: 'Tornionjoki Salmon Fishing',
    operator: 'Local fishing guides',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '6 hours',
    difficulty: 'Moderate',
    season: ['summer'],
    description: 'Fish for Atlantic salmon on Europe\'s largest free-flowing salmon river. The Tornionjoki runs along the Finland-Sweden border and is famous for massive catches.',
    groupSize: '2-6',
    highlights: ['Europe\'s largest free-flowing salmon river', 'Guide included', 'Equipment provided'],
  },
  {
    id: 'tor-whitefish-festival',
    title: 'Kukkolankoski Whitefish Experience',
    operator: 'Local guides at Kukkolankoski',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Food & Drink',
    categorySlug: 'food',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['summer'],
    description: 'Watch traditional dipnet fishing at Kukkolankoski rapids, then taste flame-grilled whitefish prepared the same way for centuries. Finland\'s oldest fishing tradition.',
    groupSize: '2-20',
    highlights: ['Traditional dipnetting', 'Flame-grilled whitefish', 'Historic rapids'],
  },
  {
    // Intra-EU border: NO tax-free/duty-free claims — the draw is price and range
    // differences plus the two-countries-one-town experience (Vesa 2026-07-24).
    id: 'tor-haparanda-shopping',
    title: 'Haparanda Border Shopping Day',
    operator: 'IKEA Haparanda & border shops',
    destination: 'Tornio',
    destinationSlug: 'tornio',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-4 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Walk across the Finland-Sweden border in the middle of town and spend a day shopping on both sides of one street. IKEA Haparanda sits right by the crossing, and the Swedish side adds supermarkets and outlet stores; prices and product ranges differ between the two countries, which is the real draw. Mind the one-hour time difference when checking opening hours.',
    groupSize: 'Unlimited',
    highlights: ['Cross the border on foot', 'IKEA Haparanda', 'Two countries, one town'],
  },

  // === PYHÄ-LUOSTO ===
  {
    id: 'pyh-amethyst-mine',
    title: 'Lampivaara Amethyst Mine',
    operator: 'Amethyst Mine Lapland',
    destination: 'Pyhä-Luosto',
    destinationSlug: 'pyha-luosto',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '2-3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Dig your own gemstone at Europe\'s only active amethyst mine on top of Lampivaara fell in Luosto, and keep one stone that fits in your palm. In winter the heated Amethyst Pendolino snow train climbs the fell; in summer it is a scenic walk with national-park views the whole way.',
    groupSize: '2-30',
    highlights: ['Dig and keep your own amethyst', 'Heated snow train in winter', 'Views over the national park'],
  },
  {
    id: 'pyh-national-park',
    title: 'Pyhä-Luosto National Park & Isokuru Gorge',
    operator: 'Metsähallitus',
    destination: 'Pyhä-Luosto',
    destinationSlug: 'pyha-luosto',
    category: 'Summer Adventures',
    categorySlug: 'summer',
    price: 0,
    duration: '3-6 hours',
    difficulty: 'Moderate',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'Hike between the twin fell villages through Finland\'s deepest gorge: Isokuru drops about 220 metres between the fells, with stairs and boardwalks leading past the Uhriharju ridge and old-growth forest. Free entry, well-marked trails, and day routes from both Pyhä and Luosto.',
    groupSize: '1-10',
    highlights: ['Isokuru, Finland\'s deepest gorge', 'Free entry', 'Trails from both villages'],
  },
  {
    id: 'pyh-ski-resort',
    title: 'Pyhä Ski Resort',
    operator: 'Pyhä Ski Resort',
    destination: 'Pyhä-Luosto',
    destinationSlug: 'pyha-luosto',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'A national-park ski resort with a 280-metre vertical and slopes for both ends of the skill curve: gentle family terrain on one side, and Huttu-Ukko, a mogul slope that has hosted World Cup freestyle skiing, on the other. Lift tickets and rentals at the resort.',
    groupSize: 'Unlimited',
    highlights: ['280 m vertical', 'World Cup mogul slope', 'Family-friendly terrain'],
  },
  {
    id: 'pyh-aurora-snowshoe',
    title: 'Northern Lights Snowshoe Tour in Luosto',
    operator: 'Lapland Safaris Luosto',
    destination: 'Pyhä-Luosto',
    destinationSlug: 'pyha-luosto',
    category: 'Northern Lights',
    categorySlug: 'northern-lights',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Snowshoe away from the village lights into the quiet forest below the fells and wait for the aurora with hot drinks by a fire. Luosto\'s small size means true darkness starts minutes from your hotel door.',
    groupSize: '2-12',
    highlights: ['Dark skies minutes from the village', 'Snowshoes and gear provided', 'Campfire and hot drinks'],
  },

  // === KEMIJÄRVI ===
  {
    id: 'kem-ice-fishing',
    title: 'Ice Fishing on Lake Kemijärvi',
    operator: 'Local ice-fishing guides',
    destination: 'Kemijärvi',
    destinationSlug: 'kemijarvi',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Drill a hole through the ice of the town\'s own lake and jig for perch with a local guide, warm drinks included. Basic ice fishing needs no licence in Finland, and the lake starts right at the shoreline streets, so this is Lapland ice fishing without any transfer time.',
    groupSize: '2-8',
    highlights: ['Lake starts at the town shore', 'No licence needed', 'Warm drinks on the ice'],
  },
  {
    id: 'kem-husky-safari',
    title: 'Husky Self-Drive Safari',
    operator: 'Local husky farm',
    destination: 'Kemijärvi',
    destinationSlug: 'kemijarvi',
    category: 'Animal Experiences',
    categorySlug: 'animals',
    price: 0,
    duration: '2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Drive your own sled on a 5 km forest loop with a small group, then meet the dogs and their handlers at the farm. Groups run at just a few sleds at a time, so you get real instruction instead of a queue.',
    groupSize: '2-8',
    highlights: ['Drive your own sled', 'Small groups only', 'Meet the dogs afterwards'],
  },
  {
    id: 'kem-suomu-ski',
    title: 'Suomu Ski Resort (Suomutunturi)',
    operator: 'Suomutunturi',
    destination: 'Kemijärvi',
    destinationSlug: 'kemijarvi',
    category: 'Winter Sports',
    categorySlug: 'winter-sports',
    price: 0,
    duration: 'Day pass',
    difficulty: 'Moderate',
    season: ['winter', 'spring'],
    description: 'A quiet fell resort on the Arctic Circle, about 40 minutes from Kemijärvi: 10 long, well-profiled slopes with the longest run at 1.7 km, plus 75 km of cross-country trails, 25 km of them lit. Skiing here since 1965, and lift queues are famously short.',
    groupSize: 'Unlimited',
    highlights: ['10 long slopes, longest 1.7 km', '75 km of cross-country trails', 'On the Arctic Circle'],
  },
  {
    id: 'kem-santas-village',
    title: 'Santa\'s Little Village on Lake Kemijärvi',
    operator: 'Santa\'s Little Village',
    destination: 'Kemijärvi',
    destinationSlug: 'kemijarvi',
    category: 'Culture & Heritage',
    categorySlug: 'culture',
    price: 0,
    duration: '1-2 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring', 'summer', 'autumn'],
    description: 'A small log hotel village on the Uitonniemi lakeshore where you can meet Santa without the theme-park crowds. Winter brings aurora outings on a heated sled and snowshoe rentals; summer swaps them for rowing boats and paddleboards on the lake. Booked directly with the village.',
    groupSize: '2-20',
    highlights: ['Meet Santa by the lake', 'Aurora outings in winter', 'Rowing and SUP in summer'],
  },
  // === FISHING & ICE FISHING ===
  {
    id: 'act-ice-fishing-great',
    title: 'Great Ice Fishing Experience',
    operator: 'Local ice-fishing guides',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter', 'spring'],
    description: 'Drill your own hole in a frozen lake near Rovaniemi and jig for perch and whitefish with an experienced guide. Basic ice fishing needs no licence and no minimum age in Finland; it\'s the easiest way to try Arctic fishing before deciding whether the annual permit for lure fishing elsewhere is worth it. Ends with a fire-grilled lunch.',
    groupSize: '2-10',
    highlights: ['Drill-your-own-hole technique', 'No licence needed for basic ice fishing', 'Fire-grilled lunch included'],
    featured: true,
  },
  {
    id: 'act-ice-fishing-rovaniemi',
    title: 'Rovaniemi Ice Fishing',
    operator: 'Local ice-fishing guides',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'A guide-led ice-fishing outing on a lake just outside Rovaniemi, built to fit around a half-day booking. Basic ice fishing needs no permit and no minimum age, so kids fish alongside adults. Guides cover jig technique and ice safety before anyone steps onto open ice.',
    groupSize: '2-8',
    highlights: ['Half-day, close to Rovaniemi', 'Family-friendly, any age', 'Ice-safety briefing included'],
  },
  {
    id: 'act-ice-fishing-smallgroup',
    title: 'Small-Group Arctic Ice Fishing',
    operator: 'Local ice-fishing guides',
    destination: 'Rovaniemi',
    destinationSlug: 'rovaniemi',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: '3 hours',
    difficulty: 'Easy',
    season: ['winter'],
    description: 'A capped-group version of the ice-fishing trip, with more one-on-one coaching on technique than the bigger tours. Fish for perch and whitefish through the ice on a quiet lake, and take home only what you plan to eat. Pilkki fishing has always been small-scale, and that\'s exactly why Lapland\'s lakes stay healthy.',
    groupSize: '2-6',
    highlights: ['Capped small-group size', 'More individual guide attention', 'Perch & whitefish through the ice'],
  },
  {
    id: 'act-kingcrab-kirkenes-saariselka',
    title: 'King Crab Safari from Saariselkä to Kirkenes',
    operator: 'Local king crab guides (Kirkenes crossing)',
    destination: 'Saariselkä → Kirkenes',
    destinationSlug: 'saariselka',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: 'Full day',
    difficulty: 'Moderate',
    season: ['winter', 'summer'],
    description: 'Cross the border from Saariselkä into Kirkenes, Norway, for a red king crab safari on the Barents Sea. King crab isn\'t native here. It was introduced from the Sea of Okhotsk in the 1960s and has no natural predators in Norwegian waters, so a licensed, quota-controlled harvest keeps the population from overrunning native cod and shellfish stocks. Guides haul the traps; the day ends with a king crab meal.',
    groupSize: '2-12',
    highlights: ['Crosses the border to Kirkenes, Norway', 'Licensed harvest of an invasive species', 'King crab meal included'],
    featured: true,
  },
  {
    id: 'act-kingcrab-rib-kirkenes',
    title: 'Kirkenes Summer King Crab RIB Safari',
    operator: 'Local king crab guides (Kirkenes)',
    destination: 'Saariselkä → Kirkenes',
    destinationSlug: 'saariselka',
    category: 'Fishing & Ice Fishing',
    categorySlug: 'fishing',
    price: 0,
    duration: '3 hours',
    difficulty: 'Moderate',
    season: ['summer'],
    description: 'A summer RIB-boat safari departing from Kirkenes itself, out onto the Barents Sea to haul king crab traps. Red king crab is an invasive species here, and regulated harvest by licensed operators is part of how Norway manages it; crab left untaken keep spreading west along the coast. Trip ends with a fresh crab meal on board or ashore.',
    groupSize: '2-10',
    highlights: ['RIB boat safari on the Barents Sea', 'Quota-controlled harvest of an invasive species', 'Fresh king crab meal'],
  },
];

// === Bookability + GetYourGuide target (product or browse page) ===
//
// Owner rule (2026-06-26): a booking CTA goes ONLY on genuinely GYG-bookable
// guided experiences (safaris, tours, cruises, climbs). NOT on free landmarks,
// museums, walk-in attractions, free national-park treks, or factory shops —
// those would 404 or land on an irrelevant generic list. Non-bookable cards
// instead route to OFFICIAL_SITE / HOTEL_SEARCH / the category page (ActivityCard).
//
// `NON_BOOKABLE` is an explicit allow-list of activity ids that are NOT sold as
// GYG products (verified case by case). Everything else is bookable.
const NON_BOOKABLE = new Set<string>([
  'rov-arktikum',          // science museum — ticket at the door / museum site
  'rov-santapark',         // theme park — own ticketing
  'ina-siida-museum',      // Sámi museum — museum ticketing
  'pos-pentik',            // ceramics factory + outlet shop (free visit)
  'saa-uk-national-park',  // UKK NP — free wilderness, no booking
  // 🔴 ä KUULUU id:hen (rivi ~774). Tämä rivi oli 2026-08-03 asti 'ina-pielpajarvi'
  // (ilman ä:tä) → Set-haku ohitti sen ja ilmainen erämaakirkkovaellus sai
  // "Etsi ja varaa" -GYG-napin. NON_BOOKABLE-avaimet on kopioitava id:stä, ei
  // kirjoitettava käsin ASCII:na.
  'ina-pielpajärvi',       // free wilderness-church trek
  'pos-riisitunturi',      // Riisitunturi NP — free, self-guided
  'ruk-karhunkierros',     // Bear Trail — free long-distance hike
  'yll-pallas-hike',       // national-park trail (self-guided)
  'tor-snowcastle',        // SnowCastle — own walk-in ticketing
  'lev-snowvillage',       // SnowVillage — own walk-in ticketing
  'yll-lainio-snow',       // Lainio Snow Village — own walk-in ticketing
  'tor-haparanda-shopping',// self-guided shopping day — nothing to book
  'pyh-national-park',     // national park — free, self-guided
  'pyh-ski-resort',        // lift tickets at the resort / pyha.fi
  'kem-suomu-ski',         // lift tickets at the resort / suomutunturi.fi
  'kem-santas-village',    // booked directly with the village (santaslittlevillage.fi)
  // 20.9.2026 (Vesa: "kertoo Levin laskettelurinteestä ja vie Ylläksen yleiseen hakuun"):
  // hissilippua ei osteta GetYourGuidelta vaan keskuksen omalta sivulta. Pyhä ja Suomu olivat
  // jo tällä listalla — Levi, Ylläs ja Ruka puuttuivat, ja niiden kortit lähettivät lukijan
  // geneeriseen hakuun. Sama sääntö kaikille viidelle.
  'lev-ski-resort',
  'yll-ski-resort',
  'ruk-ski-resort',
  // 8.10.2026 (GYG-nappien korjaus): sama sääntö viidelle muulle paikalle, joita GetYourGuide
  // ei myy lainkaan. Kortin "Etsi ja varaa" vei Workerin turvaverkon kautta paikkakunnan
  // yleislistaan, koska GYG:ssä ei ole golfia, bike park -hissilippua eikä Kukkolankosken
  // kalastajakylää. Hissilippu, viherkierros ja kylävierailu ostetaan paikan päältä.
  'rov-ounasvaara-ski',     // Ounasvaaran hissilippu = rinnekeskuksen oma myynti
  'lev-midnight-sun-golf',  // viherkierros = Levi Golfin oma varaus
  'lev-bike-park',          // bike park -hissilippu = Levin oma myynti
  'tor-green-zone',         // viherkierros = Green Zone Golfin oma varaus
  'tor-whitefish-festival', // Kukkolankoski: kylä, nuottakalastus ja ravintola paikan päällä
])

// Ei-varattavan kohteen VIRALLINEN sivu. Ilman tätä kortin "Suunnittele käynti" linkitti
// samalle kohdesivulle, jolla lukija jo seisoi — klikkaus ei tehnyt mitään (Vesa 20.9.2026:
// "miksi Levin SnowVillageen ei voi painaa?"). Jokainen osoite mitattu 20.9.2026 (GET + selain-UA,
// HTTP 200, ei uudelleenohjausta muualle). Nämä ovat toimituksellisia lähdelinkkejä, eivät
// affiliate-linkkejä: ei sponsored/nofollow, mutta utm-merkintä withReferral-funktiolla.
/**
 * Kohteet joiden "virallinen sivu" on MAJOITUSKUMPPANIN hotelli.
 *
 * Vesa 21.9.2026: *"miten tämä voi viedä lapland hotelsin sivulle ilman affilinkkiä
 * vaikka heille meillä on sembo?"* — ei voi. OFFICIAL_SITE on lukijapalvelua museoille
 * ja kansallispuistoille, joista emme saa mitaan. Hotelli on eri asia: majoituksesta
 * meilla on kumppani (fi → Sembo, muut → Trip.com), ja ilman sita linkki vie rahaa pois.
 *
 * Arvo on hakulause, joka syotetaan Workerin `ss`-parametriin. Nimi tarkistettu
 * kumppanin omalta sivulta, ei arvattu.
 */
export const HOTEL_SEARCH: Record<string, string> = {
  'lev-snowvillage': 'Lapland Hotels SnowVillage, Ylläs, Finland',
  'yll-lainio-snow': 'Lapland Hotels SnowVillage, Ylläs, Finland',
};

export const OFFICIAL_SITE: Record<string, string> = {
  'rov-arktikum': 'https://arktikum.fi/',
  'rov-santapark': 'https://santapark.fi/',
  'ina-siida-museum': 'https://siida.fi/',
  'pos-pentik': 'https://www.pentik.com/',
  'saa-uk-national-park': 'https://www.luontoon.fi/en/urho-kekkonen',
  'ina-pielpajärvi': 'https://www.luontoon.fi/en/pielpajarvi',
  'pos-riisitunturi': 'https://www.luontoon.fi/en/riisitunturi',
  'ruk-karhunkierros': 'https://www.luontoon.fi/en/bear-trail',
  'yll-pallas-hike': 'https://www.luontoon.fi/en/pallas-yllastunturi',
  'pyh-national-park': 'https://www.luontoon.fi/en/pyha-luosto',
  'tor-snowcastle': 'https://www.snowcastle.net/',
  // 🔴 lev-snowvillage ja yll-lainio-snow ovat SAMA kohde: Lapland Hotels SnowVillage
  // Lainiossa, 30 min Leviltä ja Ylläkseltä. Kortteja on kaksi, koska kumpikin kylä
  // markkinoi sitä omanaan. Molemmat osoittavat kohteen omalle sivulle.
  'lev-snowvillage': 'https://www.laplandhotels.com/EN/hotels-in-lapland/yllas/lapland-hotels-snowvillage/',
  'yll-lainio-snow': 'https://www.laplandhotels.com/EN/hotels-in-lapland/yllas/lapland-hotels-snowvillage/',
  'pyh-ski-resort': 'https://pyha.fi/',
  'kem-suomu-ski': 'https://www.suomutunturi.fi/',
  'kem-santas-village': 'https://santaslittlevillage.fi/',
  'lev-ski-resort': 'https://www.levi.fi/',
  'yll-ski-resort': 'https://yllas.fi/',
  'ruk-ski-resort': 'https://www.ruka.fi/',
  // Mitattu 8.10.2026 (GET + selain-UA, HTTP 200, otsikko luettu): Ounasvaara "Ounasvaara
  // Outdoor Resort", Levi Golf "Etusivu | Levi Golf", Levi "Levi Bike Park | Levi", Green Zone
  // Golf "Green Zone Golf", Kukkolankoski "Kukkolankoski | Kalan suojaama kylä". Levi Golfilla,
  // Green Zone Golfilla ja Kukkolankoskella ei ole toimivaa /en/-polkua (404 / ohjaus etusivulle).
  'rov-ounasvaara-ski': 'https://ounasvaara.fi/en/',
  'lev-midnight-sun-golf': 'https://levigolf.fi/',
  'lev-bike-park': 'https://www.levi.fi/en/biking/bike-park/',
  'tor-green-zone': 'https://greenzonegolf.com/',
  'tor-whitefish-festival': 'https://kukkolankoski.fi/',
  // tor-haparanda-shopping: omatoiminen ostospäivä kahdessa maassa, ei yhtä virallista
  // sivua ⇒ ei riviä, jolloin kortti putoaa kategoriasivulle (ks. ActivityCard).
};;

// === GetYourGuide target per card (8.10.2026) ===
//
// 🔴 Ennen tätä jokainen kortti rakensi hakulauseen ("husky safari levi") ja kortin nappi
// "Etsi ja varaa" vei sen GYG:n hakuun. GYG:n `/s?q=` kuoli 23.8.2026; siitä asti Worker on
// taittanut hakusanat Lapin yleislistaan ja 4.10. alkaen aihekategoriaan (LV-GYG-TOPIC).
// Se on Workerin turvaverkko, ei linkkimalli: "varaa"-nappi lupasi tuotteen ja vei listaan.
//
// Nyt jokaisella varattavalla kortilla on YKSI kahdesta:
//   • GYG_PRODUCT — tuote, jonka aihe JA paikkakunta vastaavat korttia. Nappi "Etsi ja
//                   varaa" (activityCard.findBook), sid `card_book_<id>`.
//   • GYG_BROWSE  — kun sopivaa tuotetta ei ole: kategoria oikealla paikkakunnalla tai
//                   paikkakunnan oma sijaintisivu. Nappi "Selaa retkiä" (activityCard.
//                   browseTours), sid `card_browse_<id>`. Selausnappi ei lupaa tuotetta.
//
// Lähteet, ei arvauksia (GYG:tä ei haeta: Cloudflare-tarkistus, verkosto ei kierrä sitä):
//   [picks]   = src/shared/gyg/picks.ts (selaimessa avattu 29.7.–3.8.2026)
//   [catalog] = monorepon _gyg-catalog/catalog.json (839 tuotetta, GYG:n kategoriasivuilta 30.7.2026)
//   [fishing] = sama tuote kuin FishingPage.tsx:n napissa
//   [dest]    = src/data/destinationPicks.ts (avattu selaimessa 20.9.2026, uusin mittaus)
// 🔴 Katalogin tuote voi olla poistunut sen jälkeen: 20.9. mitattiin 11 poistunutta, mm.
// Rovaniemen revontulimoottorikelkkasafari t301248 (destinationPicks.ts "Poistuneet"). Avaa jokainen uusi polku selaimessa
// Workerin kautta ja lue h1 ennen julkaisua (muisti gyg_haku_kuoli_verkosto_20261004).
// 🔴 Älä lisää karhunkatselulle GYG-riviä: ruk-bear-watching kuuluu PARTNER_PAGElle.
export const GYG_PRODUCT: Record<string, string> = {
  // Rovaniemi
  'rov-aurora-snowmobile': 'rovaniemi-l2653/rovaniemi-drive-new-2025-snowmobiles-aurora-adventure-t1120706',  // [catalog] Northern Lights Snowmobile Tour (t301248 poistui 20.9.)
  'rov-santa-village':     'rovaniemi-l2653/the-santa-claus-village-visit-t434430',                              // [picks] CHRISTMAS_PICKS
  'rov-reindeer-farm':     'rovaniemi-l2653/rovaniemi-reindeer-experience-with-sleigh-ride-t300556',             // [picks] ACTIVITIES_PICKS
  'rov-snowmobile-full':   'rovaniemi-l2653/full-day-snowmobile-tour-in-rovaniemi-t509765',                      // [catalog] Full Day Snowmobile Tour in Rovaniemi
  'rov-ice-karting':       'rovaniemi-l2653/rovaniemi-ice-karting-open-race-t311913',                            // [dest] Arctic Ice Karting Tour (ei minikelkkoja)
  'rov-ranua-zoo':         'rovaniemi-l2653/rovaniemi-ranua-s-wildlife-park-ticket-with-transportation-t786889', // [picks] TOURS_PICKS
  'rov-ice-floating':      'rovaniemi-l2653/daytime-ice-floating-rovaniemi-frozen-lake-experience-t486232',      // [catalog] Daytime Ice Floating
  'rov-arctic-snow-hotel': 'rovaniemi-l2653/rovaniemi-overnight-snowhotel-adventure-t1074394',                   // [catalog] Overnight SnowHotel Adventure
  // Levi
  'lev-ice-karting':       'sirkka-l139331/icekarting-levi-experience-t495459',                                  // [catalog] Levi Ice-Karting Experience
  'lev-samiland':          'kittila-l165074/levi-fell-summit-tour-and-samiland-visit-t988932',                   // [catalog] Fell Summit Tour & Samiland Cultural Visit
  'lev-husky-safari':      'sirkka-l139331/levi-husky-adventure-self-drive-safari-15km-t510769',                 // [catalog] Husky Adventure Self-Drive Safari 15km
  'lev-aurora-photo':      'sirkka-l139331/levi-guided-northern-lights-photography-experience-t1220978',         // [catalog] Guided Northern Lights Photography Experience
  'lev-ice-fishing':       'sirkka-l139331/levi-ice-fishing-on-a-frozen-lake-t468799',                           // [catalog] Ice Fishing on a Frozen Lake with BBQ
  'lev-fatbike':           'sirkka-l139331/levi-e-fatbike-adventure-in-snowy-forest-t515201',                    // [catalog] E-Fatbike Adventure in Snowy Forest
  // Ylläs
  'yll-aurora-hunt':       'akaslompolo-l2931/yllas-seeking-northern-lights-photo-tour-t672280',                 // [catalog] Ylläs seeking northern lights
  'yll-snowmobile':        'akaslompolo-l2931/yllas-wilderness-snowmobile-tour-t96006',                          // [dest] Full Day Snowmobile Tour to Wilderness
  'yll-snowshoe':          'yllasjarvi-l248346/yllas-forest-hike-with-snowshoes-t97047',                         // [catalog] Ylläs forest hike with snowshoes
  // Saariselkä
  'saa-gold-panning':      'ivalo-l187030/ivalo-saariselka-gold-panning-in-lapland-s-gold-rush-area-t1243827',   // [picks] CULTURE_PICKS (Saariselkä/Ivalo, ei Tankavaara)
  'saa-amethyst-mine':     'rovaniemi-l2653/luosto-private-amethyst-mine-tour-with-arctic-guide-t1073428',       // [catalog] Luosto: Amethyst Mine Tour
  'saa-snowmobile':        'saariselka-l181615/saariselka-snowmobile-safari-on-tundra-with-bbq-t790865',         // [picks] SNOWMOBILE_PICKS
  'saa-aurora-hunt':       'saariselka-l181615/saariselka-aurora-hunting-tour-with-northern-lights-experts-t826892', // [dest] Aurora Hunting Photography Tour (bus/minivan)
  'saa-ice-fishing':       'saariselka-l181615/saariselka-kakslauttanen-ice-fishing-experience-barbecue-t865688', // [catalog] Ice Fishing Experience + barbecue
  // Inari
  'ina-lake-cruise':       'inari-l245909/inari-lake-inari-boat-tour-with-campfire-and-bbq-t1073872',            // [catalog] Lake Inari Scenic Boat cruise
  'ina-sami-experience':   'inari-l245909/inari-sami-reindeer-herding-family-workshop-visitlunch-t1303463',      // [catalog] Sámi Reindeer Herding Workshop & Visit
  'ina-aurora':            'ivalo-l187030/inariivalo-aurora-hunting-tour-by-car-with-warm-drinks-t863793',       // [catalog] Inari/Ivalo: Aurora Hunting Tour
  // Ruka / Kuusamo
  'ruk-snowmobile':        'ruka-l192178/ruka-4h-snowmobile-safari-with-snack-and-campfire-t1107299',            // [dest] 4 h Snowmobile Safari
  'ruk-husky':             'ruka-l192178/ruka-10km-husky-sled-ride-with-snacks-and-campfire-t1107156',           // [dest] 10 km Husky Sled Ride
  'ruk-aurora':            'ruka-l192178/ruka-evening-snowshoe-hike-in-search-of-northern-lights-t1134130',      // [catalog] Evening snowshoe hike for northern lights
  // Posio
  'pos-korouoma':          'rovaniemi-l2653/rovaniemi-korouoma-canyon-frozen-waterfalls-tour-t349531',           // [picks] VISIT_PICKS
  // Tornio / Kemi
  'tor-icebreaker':        'kemi-l98127/kemi-afternoon-icebreaker-sampo-cruise-and-ice-floating-t504004',        // [picks] HUB_PICKS + [dest]
  // Pyhä-Luosto
  'pyh-amethyst-mine':     'rovaniemi-l2653/luosto-private-amethyst-mine-tour-with-arctic-guide-t1073428',       // [catalog] Luosto: Amethyst Mine Tour
  // Fishing
  'act-ice-fishing-great':            'rovaniemi-l2653/great-ice-fishing-experience-in-lapland-t539112',                     // [fishing] fishing_hero_cta
  'act-ice-fishing-rovaniemi':        'rovaniemi-l2653/rovaniemi-ice-fishing-experience-t195392',                            // [fishing] fishing_ice_rovaniemi + [catalog]
  'act-kingcrab-kirkenes-saariselka': 'kirkenes-l97740/saariselka-king-crab-safari-to-kirkenes-with-lunch-t1158887',          // [fishing] fishing_crab_kirkenes + [catalog]
  'act-kingcrab-rib-kirkenes':        'kirkenes-l97740/kirkenes-summer-king-crab-safari-by-rib-with-king-crab-meal-t1200620', // [fishing] fishing_crab_rib
};

/**
 * Selaussivu korteille, joille ei löytynyt tuotetta, jonka aihe JA paikkakunta osuvat.
 * Kategoria vain kun pari (paikkakunta × kategoria) on mitattu; muuten paikkakunnan oma
 * sijaintisivu, koska väärä paikkakunta on pahempi kuin laaja lista (husky Ylläksellä ≠
 * husky Rovaniemellä). Lapin tason kategoria vain kortille, jonka paikka on "Lappi".
 */
export const GYG_BROWSE: Record<string, string> = {
  // [catalog] rovaniemi × dinner-packages (31 tulosta 29.7.); ei omaa nuotioillallistuotetta
  'rov-campfire-dinner':        'rovaniemi-l2653/dinner-packages-tc100',
  // Ylläs × husky = 0 tuotetta (hubin gygCategories.ts, mitattu 10.8.); ei poro- eikä latutuotetta
  'yll-husky':                  GYG_SLUG.yllas,
  'yll-reindeer':               GYG_SLUG.yllas,
  'yll-cross-country':          GYG_SLUG.yllas,
  // Inarissa ei melonta- eikä marjastustuotetta katalogissa
  'ina-midnight-kayak':         GYG_SLUG.inari,
  'ina-berry-foraging':         GYG_SLUG.inari,
  // Korouoma on Posiossa; jääkiipeilytuote vain Pyhätunturilla (väärä paikka)
  'ruk-ice-climbing':           GYG_SLUG.posio,
  // Tornionjoen lohelle ei GYG-tuotetta
  'tor-salmon-fishing':         GYG_SLUG.tornio,
  // Luoston revontuli-lumikenkäretkeä ei katalogissa
  'pyh-aurora-snowshoe':        GYG_SLUG['pyha-luosto'],
  // Kemijärven omat tuotteet: sijaintisivu (ks. affiliate.ts, mitattu 24.7.)
  'kem-ice-fishing':            GYG_SLUG.kemijarvi,
  'kem-husky-safari':           GYG_SLUG.kemijarvi,
  // Pienryhmälupausta ei voi todentaa yhdestäkään tuotteesta ⇒ Lapin kalastuskategoria
  // (hubin gygCategories.ts: Lappi × fishing 103, kärjessä pilkkiretket, mitattu 23.8.)
  'act-ice-fishing-smallgroup': 'lapland-finland-l2652/fishing-tours-tc62',
  // Luettu Workerin kautta selaimessa 8.10.2026. Kuollut tuote ohjautuu GYG:llä sijaintisivulle
  // ja pudottaa partner_id:n, joten varaus ei kohdistuisi: t982487 (kesähusky), t1418294 (Levin
  // nuotioillallinen), t492078 (Rukan koskenlasku). Ne ja kortit, joiden tuote lupaa muuta kuin
  // kortti (18 km vs 5 km husky, Kiilopään savusauna vs Muotkan jokisauna, kelkkasafari vs
  // husky-poro-kelkkayhdistelmä), selaavat oikean paikkakunnan listaa.
  'rov-husky-safari':           'rovaniemi-l2653/dog-sledding-husky-tours-tc118',
  'rov-husky-summer':           'rovaniemi-l2653/dog-sledding-husky-tours-tc118',
  'lev-snowmobile':             'levi-sirkka-l150197/snowmobile-tours-tc119',
  'lev-kota-dinner':            'levi-sirkka-l150197',
  'saa-kiilopaa-sauna':         'saariselka-l181615',
  'ruk-river-rafting':          'kuusamo-l113322',
};

export type GygTarget = { kind: 'product' | 'browse'; path: string };

/**
 * Kortin GYG-kohde. Tuntematon id (uusi kortti ilman riviä) putoaa kohteen omalle
 * sijaintisivulle selausnappina, EI koskaan varausnappina yleislistaan.
 */
export function gygTargetForActivity(a: Activity): GygTarget {
  const product = GYG_PRODUCT[a.id];
  if (product) return { kind: 'product', path: product };
  return { kind: 'browse', path: GYG_BROWSE[a.id] ?? gygSlugForDestination(a.destinationSlug) };
}

// === Paid-partner routing (Vesa 2026-07-25) ===
// Activities owned by a SIGNED LV partner must never send booking intent to a
// GetYourGuide search where the partner's competitors bid on the same query
// (the only GYG bear product around Kuusamo is the contract-excluded
// competitor's). The card CTA goes to our own partner feature page instead —
// it carries the tracked direct-booking links. Checked BEFORE isBookable.
export const PARTNER_PAGE: Record<string, string> = {
  'ruk-bear-watching': '/bear-kuusamo', // Bear Kuusamo (Karhu-Kuusamo Oy), deal 2026-07
};

export function isBookable(a: Activity): boolean {
  return !NON_BOOKABLE.has(a.id);
}

export function getActivityById(id: string) {
  return activities.find(a => a.id === id);
}

export function getActivitiesByDestination(slug: string) {
  return activities.filter(a => a.destinationSlug === slug);
}

export function getActivitiesByCategory(slug: string) {
  return activities.filter(a => a.categorySlug === slug);
}

export function getFeaturedActivities() {
  return activities.filter(a => a.featured);
}
