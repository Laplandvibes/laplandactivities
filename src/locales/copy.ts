import type { Lang } from '../i18n/useLang';

type Tip = { tip: string; icon: string };
type TipsMap = Record<string, Tip[]>;
type SeasonItem = { name: string; months: string; blurb: string; temp: string };
type SummerHighlight = { title: string; body: string };
type LodgingItem = { name: string; blurb: string };
type NewsletterBenefit = { title: string; body: string };

export type SectionCopy = {
  nav: {
    home: string;
    destinations: string;
    categories: string;
    about: string;
    bookCta: string;
    allDestinations: string;
    allCategories: string;
  };
  hero: {
    eyebrow: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    stayNearby: string;
    stayNearbyDesc: string;
    rentCar: string;
    rentCarDesc: string;
    auroraTours: string;
    auroraToursDesc: string;
    allCategories: string;
    allCategoriesDesc: string;
    scrollAria: string;
  };
  summerBand: {
    eyebrow: string;
    h2: string;
    lead: string;
    bookCta: string;
    browseCta: string;
    imageKicker: string;
    imageH3: string;
    highlights: SummerHighlight[];
    gygTitle: string;
    gygEyebrow: string;
  };
  hotelsStrip: {
    kicker: string;
    h2: string;
    lead: string;
    compareCta: string;
    lodging: LodgingItem[];
    comparePrices: string;
  };
  bookingCta: {
    eyebrow: string;
    heading: string;
    blurb: string;
    activities: string;
    activitiesDesc: string;
    browseTours: string;
    stayNearby: string;
    stayNearbyDesc: string;
    compareHotels: string;
    rentCar: string;
    rentCarDesc: string;
    findBestPrice: string;
    disclaimer: string;
  };
  newsletter: {
    eyebrow: string;
    h2: string;
    lead: string;
    benefits: NewsletterBenefit[];
    emailPlaceholder: string;
    subscribeBtn: string;
    subscribingBtn: string;
    successTitle: string;
    successBody: string;
    alreadyTitle: string;
    alreadyBody: string;
    footnote: string;
    errorFallback: string;
  };
  activityCard: {
    findBook: string;
    /** CTA for non-bookable cards (museums, free parks) → destination page. */
    planVisit: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    categoriesKicker: string;
    categoriesH2: string;
    categoriesLead: string;
    activitiesLabel: string;
    viewAllCategories: string;
    gygTitle: string;
    gygEyebrow: string;
    featuredKicker: string;
    featuredH2: string;
    seeAllTours: string;
    seasonsKicker: string;
    seasonsH2: string;
    seasonsLead: string;
    seasons: SeasonItem[];
    destinationsKicker: string;
    destinationsH2: string;
    viewAll: string;
    activitiesShort: string;
  };
  relatedSites: {
    kicker: string;
    h2: string;
    lead: string;
    // Each card carries a localized sentence whose middle clause (`anchor`) is the
    // keyword-rich visible link text. URLs live in the component, not here.
    links: { pre: string; anchor: string; post: string }[];
  };
  faq: {
    kicker: string;
    h2: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  categoriesIndex: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    h1: string;
    lead: string;
    activitiesLabel: string;
    exploreAdventures: string;
    explore: string;
    gygTitle: string;
    gygEyebrow: string;
  };
  categoryPage: {
    notFoundH1: string;
    backCategories: string;
    allCategoriesNav: string;
    bookToursPrefix: string;
    activitiesCount: (n: number, name: string) => string;
    comingSoon: string;
    gygTitlePrefix: string;
    gygEyebrow: string;
    browseOthers: string;
    allCategoriesLink: string;
  };
  destinationsIndex: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    h1: string;
    lead: string;
    activitiesLabel: string;
    explore: string;
    gygTitle: string;
    gygEyebrow: string;
  };
  destinationPage: {
    notFoundH1: string;
    backDestinations: string;
    allDestinationsNav: string;
    bookActivitiesIn: string;
    stayIn: string;
    activitiesShort: string;
    mustDoKicker: string;
    mustDoH2: string;
    localKicker: string;
    localH2: string;
    operatorsLabel: string;
    gygTitlePrefix: string;
    gygTitleSuffix: string;
    gygEyebrow: string;
    allActivitiesKicker: string;
    thingsToDoIn: string;
    moreSoon: string;
    sleepInPrefix: string;
    sleepInBlurb: string;
    compareHotels: string;
    driveYourself: string;
    driveYourselfBlurb: string;
    findBestPrice: string;
    keepExploringKicker: string;
    otherDestinationsH2: string;
    allDestinations: string;
    tipsByDestination: TipsMap;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    para1: string;
    para2: string;
    pillars: { title: string; text: string }[];
    affiliateH2: string;
    affiliateBody1: string;
    affiliateBody2: string;
    termsLink: string;
    contactH2: string;
    contactBody1: string;
    contactBody2: string;
    backHome: string;
  };
  notFound: {
    metaTitle: string;
    h2: string;
    body: string;
    backCta: string;
  };
};

// ---------- ENGLISH ----------
const en: SectionCopy = {
  nav: {
    home: 'Home',
    destinations: 'Destinations',
    categories: 'Categories',
    about: 'About',
    bookCta: 'Book Activities',
    allDestinations: 'All destinations →',
    allCategories: 'All categories →',
  },
  hero: {
    eyebrow: 'Finnish Lapland · Aurora to midnight sun',
    lead: 'Snowmobile safaris, husky sledding, aurora hunts, smoke saunas, river rafting under the midnight sun. Book directly from hand-picked operators across Rovaniemi, Levi, Ylläs, Saariselkä and beyond.',
    primaryCta: 'Book Activities Now',
    secondaryCta: 'Browse Destinations',
    stayNearby: 'Stay nearby',
    stayNearbyDesc: 'Hotels.com, best rates',
    rentCar: 'Rent a car',
    rentCarDesc: 'From Rovaniemi airport',
    auroraTours: 'Aurora tours',
    auroraToursDesc: 'Hand-picked operators',
    allCategories: 'All categories',
    allCategoriesDesc: '8 ways to experience the Arctic',
    scrollAria: 'Scroll to categories',
  },
  summerBand: {
    eyebrow: 'Summer 2026 · booking now',
    h2: 'Lapland in summer is the best-kept secret.',
    lead: 'Midnight sun never sets. Forests open up. Salmon are running and the fells turn red with ruska from August. Most operators still have wide availability through June. By July the best slots are gone.',
    bookCta: 'Book summer activities',
    browseCta: 'Browse summer guide',
    imageKicker: 'Summer category',
    imageH3: '8 ways to feel the midnight sun',
    highlights: [
      { title: 'Fjell hiking', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas. Long days, no crowds.' },
      { title: 'Kayak & SUP', body: 'Lake Inari islands and midnight-sun lakes, glassy water until 1 a.m.' },
      { title: 'Salmon fly-fishing', body: 'Tornionjoki and Teno river runs peak June–July.' },
      { title: 'Midnight sun tours', body: 'Photography, foraging, fjell mountain biking, all in 24-hour daylight.' },
    ],
    gygTitle: 'Summer tours selling fast',
    gygEyebrow: 'Bookable now · Free cancellation',
  },
  hotelsStrip: {
    kicker: 'Where to stay',
    h2: 'Book the bed first.',
    lead: 'Activities are easy, since most operators add capacity. The lodging you actually want sells out months ahead. Lock the room, then book the tours.',
    compareCta: 'Compare all Lapland hotels',
    lodging: [
      { name: 'Glass Igloos', blurb: 'Sleep under aurora through a curved glass roof. Most-booked Lapland nights.' },
      { name: 'Lakeside log cabins', blurb: 'Smoke saunas, wood-fired hot tubs, your own dock. Year-round.' },
      { name: 'Fell resorts', blurb: 'Levi · Ylläs · Saariselkä · Ruka. Ski-in, ski-out, plus summer activities.' },
      { name: 'Boutique city', blurb: 'Rovaniemi · Kemi · Ivalo. Design hotels with a kitchen and city access.' },
      { name: 'Smoke sauna cabins', blurb: 'The real savusauna: small, dark, ridiculously hot.' },
    ],
    comparePrices: 'Compare prices',
  },
  bookingCta: {
    eyebrow: 'Plan The Whole Trip',
    heading: 'Book Activities, Stays &amp; Cars in One Place',
    blurb: 'Three taps and your Lapland trip is sorted: hand-picked tour operators via GetYourGuide, the best lodging deals via Hotels.com, and a car waiting at the airport.',
    activities: 'Activities',
    activitiesDesc: 'Husky safaris, snowmobiles, aurora tours and ice-fishing, with instant confirmation via GetYourGuide.',
    browseTours: 'Browse tours',
    stayNearby: 'Stay nearby',
    stayNearbyDesc: 'Glass igloos, log cabins, ski-in hotels. Book the bed first, since the best ones sell out fast.',
    compareHotels: 'Compare hotels',
    rentCar: 'Rent a car',
    rentCarDesc: 'Compare 600+ suppliers across Rovaniemi, Kittilä, Ivalo and Kemi airports. Winter tires included.',
    findBestPrice: 'Find best price',
    disclaimer: 'ⓘ This page contains affiliate links. LaplandVibes may earn a commission when you book, at no extra cost to you.',
  },
  newsletter: {
    eyebrow: 'The #LaplandVibes newsletter',
    h2: 'Get the booking windows that always sell out.',
    lead: 'A short email when something is worth flagging: aurora forecast spikes, operators still open in mud-season, tours that go on sale before the booking sites notice.',
    benefits: [
      { title: 'Aurora alerts', body: 'When Kp jumps above 4, usually 24–48 h before clear skies.' },
      { title: 'What is open now', body: 'Real seasonal windows for huskies, snowmobiles and saunas.' },
      { title: 'Local-only tips', body: 'The tour you cannot find on the partner sites until June.' },
    ],
    emailPlaceholder: 'Your email address',
    subscribeBtn: 'Subscribe',
    subscribingBtn: 'Subscribing…',
    successTitle: "You're in.",
    successBody: 'Check your inbox for a welcome from Lapland.',
    alreadyTitle: 'Already on the list!',
    alreadyBody: 'Looks like you are already subscribed. Talk soon.',
    footnote: 'Unsubscribe any time.',
    errorFallback: 'Subscription failed. Please try again.',
  },
  activityCard: {
    findBook: 'Find & Book',
    planVisit: 'Plan your visit',
  },
  home: {
    metaTitle: 'LaplandActivities: book hand-picked Arctic tours in Finnish Lapland',
    metaDescription: 'Snowmobile safaris, husky sledding, aurora hunts, smoke saunas and more. Book hand-picked activities across 8 Lapland destinations through GetYourGuide and trusted local operators.',
    ogTitle: 'LaplandActivities · Hand-Picked Arctic Experiences',
    categoriesKicker: 'What to Do',
    categoriesH2: 'Choose Your Adventure',
    categoriesLead: 'Eight ways to experience the Arctic. Pick a category and we will route you to the hand-picked tour operators.',
    activitiesLabel: 'activities',
    viewAllCategories: 'View all categories',
    gygTitle: 'Top-rated Lapland tours this week',
    gygEyebrow: 'Bookable now',
    featuredKicker: 'Handpicked',
    featuredH2: 'Top Experiences',
    seeAllTours: 'See all bookable tours',
    seasonsKicker: 'Year-Round',
    seasonsH2: 'Four Seasons of Adventure',
    seasonsLead: 'Each season turns Lapland into a different country.',
    seasons: [
      { name: 'Winter', months: 'Nov – Mar', blurb: 'Deep snow, polar nights, peak aurora. Snowmobiles, huskies, smoke saunas.', temp: '-15 to -5°C' },
      { name: 'Spring', months: 'Apr – May', blurb: 'Snow plus daylight. Late-season skiing, reindeer calving, aurora to mid-April.', temp: '-5 to +5°C' },
      { name: 'Summer', months: 'Jun – Aug', blurb: 'Midnight sun never sets. Hiking, kayaking, salmon fishing, mountain biking.', temp: '+10 to +25°C' },
      { name: 'Autumn', months: 'Sep – Oct', blurb: 'Ruska colours the fells. First aurora returns. Mushroom and berry season.', temp: '+5 to -5°C' },
    ],
    destinationsKicker: 'Where to Go',
    destinationsH2: 'Destinations',
    viewAll: 'View all',
    activitiesShort: 'activities',
  },
  relatedSites: {
    kicker: 'More from #LaplandVibes',
    h2: 'Plan the rest of your Arctic trip',
    lead: 'Activities are only half the trip. These sister guides in our Lapland network go deep on the rest.',
    links: [
      { pre: 'Sledding with the dogs? Our', anchor: 'dedicated husky safari guide', post: 'compares kennels, distances and prices.' },
      { pre: 'Prefer your own throttle? See the best', anchor: 'snowmobile safari routes & prices', post: 'across Lapland.' },
      { pre: 'Chasing fresh powder? Find out', anchor: 'where to ski in Lapland', post: 'with resort-by-resort comparisons.' },
      { pre: 'For the quiet side of the Arctic, read about', anchor: 'northern lights & national parks', post: 'and the best aurora skies.' },
      { pre: 'And before you book the tours, sort out', anchor: 'where to stay in Lapland', post: ': igloos, cabins and fell resorts.' },
    ],
  },
  faq: {
    kicker: 'Good to know',
    h2: 'Lapland activities, answered',
    lead: 'The questions travellers ask most before booking an Arctic experience.',
    items: [
      {
        q: 'What activities can you do in Lapland?',
        a: 'In winter the classics are husky and reindeer sledding, snowmobile safaris, northern-lights hunts, snowshoeing, cross-country and downhill skiing, ice fishing and ice floating. In summer the same wilderness turns to hiking, kayaking and canoeing, white-water rafting, mountain biking, salmon fishing and gold panning. Year-round, the smoke sauna and Sámi-culture experiences are a different, quieter side of the Arctic.',
      },
      {
        q: 'What are the best winter vs summer activities?',
        a: 'Winter (November to March) is the season for snow and darkness: snowmobiles, dog sledding and aurora tours all need that. Summer (June to August) trades the snow for the midnight sun, when the light never fully fades and hiking, paddling and fishing run almost around the clock. Spring still has snow with far more daylight, and autumn brings the ruska colours and the first auroras. Both are quieter shoulder seasons.',
      },
      {
        q: 'How much do Lapland activities cost?',
        a: 'It varies a lot by activity, length and group size. A short shared session like a reindeer ride or an aurora bus tour sits at the lower end; multi-hour or private trips such as a long husky safari or a guided snowmobile expedition cost more, partly because they include warm overalls, boots, safety gear and a guide. For current, accurate prices, open any tour through our booking partner; the live price is shown before you commit.',
      },
      {
        q: 'Are Lapland activities suitable for young children?',
        a: 'Many are, with the right choice. Reindeer sleigh rides, husky-farm visits, gentle snowshoe walks, tobogganing and meeting Santa work well for small children. Snowmobiling usually has a minimum age to drive (children ride along in a sled or trailer), and late-night aurora hunts can be long and cold for little ones. Most operators list age limits and family options on the activity page, so check before booking.',
      },
      {
        q: 'Do you need to book Lapland activities in advance?',
        a: 'For the busiest weeks, Christmas and New Year and the February–March aurora and ski peak, yes: book well ahead, as popular husky and snowmobile tours fill up. In quieter periods you have more flexibility, but the best-rated operators and small-group departures still sell out first. Booking ahead also lets you build clear-sky flexibility into aurora plans rather than competing for the last seats.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Activity Categories · LaplandActivities',
    metaDescription: 'Browse Arctic activities by category: adventure, animal experiences, northern lights, winter sports, wellness, culture, summer adventures and food experiences.',
    kicker: 'What to Do',
    h1: 'Activity Categories',
    lead: 'Eight ways to experience the Arctic. Pick a thread and we will route you to hand-picked operators.',
    activitiesLabel: 'activities',
    exploreAdventures: 'Explore adventures',
    explore: 'Explore',
    gygTitle: 'Browse the most-booked tours',
    gygEyebrow: 'Across all categories',
  },
  categoryPage: {
    notFoundH1: 'Category Not Found',
    backCategories: '← Back to Categories',
    allCategoriesNav: 'All Categories',
    bookToursPrefix: 'Book',
    activitiesCount: (n, name) => `${n} ${name} activities`,
    comingSoon: 'Activities coming soon for this category.',
    gygTitlePrefix: 'Most-booked',
    gygEyebrow: 'Hand-picked operators',
    browseOthers: 'Browse other categories',
    allCategoriesLink: 'All categories →',
  },
  destinationsIndex: {
    metaTitle: 'Lapland Destinations · LaplandActivities',
    metaDescription: 'Eight iconic Finnish Lapland destinations: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio and Tornio. Activities, operators and lodging.',
    kicker: 'Where to Go',
    h1: 'Destinations',
    lead: 'Eight iconic Lapland destinations, each with its own character and operator network.',
    activitiesLabel: 'activities',
    explore: 'Explore',
    gygTitle: 'Most-booked Lapland tours',
    gygEyebrow: 'Across all destinations',
  },
  destinationPage: {
    notFoundH1: 'Destination Not Found',
    backDestinations: '← Back to Destinations',
    allDestinationsNav: 'All Destinations',
    bookActivitiesIn: 'Book Activities in',
    stayIn: 'Stay in',
    activitiesShort: 'activities',
    mustDoKicker: 'Must-Do',
    mustDoH2: 'Most-booked experience',
    localKicker: 'Local intel',
    localH2: 'Insider tips',
    operatorsLabel: 'Trusted operators in',
    gygTitlePrefix: 'Hand-picked',
    gygTitleSuffix: 'tours',
    gygEyebrow: 'Bookable now',
    allActivitiesKicker: 'All Activities',
    thingsToDoIn: 'Things to Do in',
    moreSoon: 'More activities coming soon for',
    sleepInPrefix: 'Sleep in',
    sleepInBlurb: 'Glass igloos, log cabins, ski-in hotels. Hotels.com aggregates the best rates.',
    compareHotels: 'Compare hotels',
    driveYourself: 'Drive yourself',
    driveYourselfBlurb: 'Lapland is wide open and rentals come with winter tires already fitted. Compare 600+ suppliers.',
    findBestPrice: 'Find best price',
    keepExploringKicker: 'Keep Exploring',
    otherDestinationsH2: 'Other Destinations',
    allDestinations: 'All destinations',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Book Santa Claus Village early morning to skip the cruise-coach crowds.', icon: '🎅' },
        { tip: 'The Arctic Circle crossing certificate is free at the post office.', icon: '📮' },
        { tip: 'Arktikum has the strongest aurora exhibition in Finland.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro is the loudest après-ski in Lapland. Go on a Friday.', icon: '🍺' },
        { tip: 'Bearhill Husky books out weeks ahead in peak weeks.', icon: '🐕' },
        { tip: 'Night skiing under aurora is a Levi-only thing, Dec/Jan only.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs has some of the darkest, clearest aurora skies in Finland.', icon: '✨' },
        { tip: 'Äkäslompolo side is quieter; Ylläsjärvi has the bars.', icon: '🏔️' },
        { tip: "The 330 km cross-country network is Finland's best; mid-March is sweet.", icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Kiilopää smoke sauna runs year-round. Book the afternoon slot.', icon: '🧖' },
        { tip: 'Tankavaara gold panning: anything you find, you keep.', icon: '🥇' },
        { tip: 'UKK National Park wilderness huts are free, first-come-first-served.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Siida museum needs three hours minimum. Read the Sámi-language wing.', icon: '🏛️' },
        { tip: 'Lake Inari boat trips run only June–September.', icon: '⛵' },
        { tip: 'Cloudberry season peaks late July along the Pielpajärvi trail.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Bear-watching hides book out months ahead.', icon: '🐻' },
        { tip: 'Karhunkierros has a 12 km "Little Bear" loop for non-multi-day hikers.', icon: '🥾' },
        { tip: "Ruka opens for skiing already in October, Finland's earliest.", icon: '⛷️' },
      ],
      posio: [
        { tip: 'Riisitunturi tykky-snow trees are best Jan–Mar.', icon: '🌲' },
        { tip: 'Korouoma frozen waterfalls need a 3 km forest walk to reach.', icon: '🧊' },
        { tip: 'The Pentik outlet shop runs 30–50% off all year.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'Icebreaker Sampo runs Dec–Apr only. Book the moment dates open.', icon: '🚢' },
        { tip: 'SnowCastle is rebuilt annually with a new theme.', icon: '🏰' },
        { tip: 'Green Zone Golf crosses the Finland-Sweden border mid-round.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'About · LaplandActivities',
    metaDescription: 'LaplandActivities is the activities spoke of the LaplandVibes ecosystem: hand-picked Arctic experiences across eight Finnish Lapland destinations.',
    eyebrow: 'About',
    h1: 'A Finnish Lapland activities guide',
    para1: 'LaplandActivities is the activities spoke of the #LaplandVibes ecosystem, a network of independent guides covering accommodation, food, nature, transport and tours across Finnish Lapland.',
    para2: 'The site routes travellers to hand-picked local operators across eight destinations, from snowmobile safaris in Saariselkä to salmon fishing on the Tornionjoki river. Every booking goes through GetYourGuide so you get instant confirmation and free cancellation up to 24 hours on most tours.',
    pillars: [
      { title: 'Real operators', text: 'Listings feature established local operators, and every booking runs through GetYourGuide.' },
      { title: 'Authentic experiences', text: 'Each activity is chosen for the kind of detail you cannot fake.' },
      { title: 'Safe and trusted', text: 'Activity operators in Finland fall under the Consumer Safety Act and are supervised by Tukes, the national safety authority.' },
      { title: '#LaplandVibes network', text: 'Part of a 23-site Finnish Lapland network, your full trip-planning toolkit.' },
    ],
    affiliateH2: 'Affiliate disclosure',
    affiliateBody1: 'LaplandActivities earns a commission when you book through partner links: Hotels.com, GetYourGuide, EconomyBookings. This costs you nothing extra and keeps the site free. Recommendations cover operators and properties that consistently deliver. Read the full disclosure in our',
    affiliateBody2: '.',
    termsLink: 'Terms of Use',
    contactH2: 'Contact',
    contactBody1: 'Email ',
    contactBody2: ' for partnerships,',
    backHome: '← Back to Home',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: 'Lost in the Arctic?',
    body: 'This page does not exist. Maybe the aurora moved it.',
    backCta: 'Back to Home',
  },
};

// ---------- FINNISH ----------
const fi: SectionCopy = {
  nav: {
    home: 'Etusivu',
    destinations: 'Kohteet',
    categories: 'Kategoriat',
    about: 'Tietoja',
    bookCta: 'Varaa aktiviteetti',
    allDestinations: 'Kaikki kohteet →',
    allCategories: 'Kaikki kategoriat →',
  },
  hero: {
    eyebrow: 'Suomen Lappi · revontulet ja keskiyön aurinko',
    lead: 'Moottorikelkkasafareja, huskysafareja, revontuliretkiä, savusaunoja ja koskenlaskua keskiyön auringossa. Varaa suoraan luotettavilta paikallisilta toimijoilta Rovaniemellä, Levillä, Ylläksellä, Saariselällä ja muualla.',
    primaryCta: 'Varaa aktiviteetti',
    secondaryCta: 'Selaa kohteita',
    stayNearby: 'Majoitus lähistöllä',
    stayNearbyDesc: 'Hotels.com, parhaat hinnat',
    rentCar: 'Vuokraa auto',
    rentCarDesc: 'Rovaniemen lentokentältä',
    auroraTours: 'Revontuliretket',
    auroraToursDesc: 'Luotettavat oppaat',
    allCategories: 'Kaikki kategoriat',
    allCategoriesDesc: 'Kahdeksan tapaa kokea Arktis',
    scrollAria: 'Vieritä kategorioihin',
  },
  summerBand: {
    eyebrow: 'Kesä 2026 · varattavissa nyt',
    h2: 'Lappi kesällä on parhaiten varjeltu salaisuus.',
    lead: 'Keskiyön aurinko ei laske. Metsät avautuvat. Lohi nousee ja tunturit punertuvat ruskan myötä elokuusta alkaen. Useimmilla toimijoilla on hyvin tilaa kesäkuun loppuun asti. Heinäkuussa parhaat ajat on jo varattu.',
    bookCta: 'Varaa kesäaktiviteetti',
    browseCta: 'Selaa kesäopasta',
    imageKicker: 'Kesäkategoria',
    imageH3: 'Kahdeksan tapaa kokea keskiyön aurinko',
    highlights: [
      { title: 'Tunturivaellus', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas. Pitkät päivät, ei ruuhkia.' },
      { title: 'Melonta & SUP', body: 'Inarin saaret ja keskiyön auringon järvet, peilityyni vesi yhteen yöllä.' },
      { title: 'Lohenkalastus perhokalastusvälinein', body: 'Tornionjoen ja Tenon nousu huipussaan kesä- ja heinäkuussa.' },
      { title: 'Keskiyön auringon retket', body: 'Valokuvaus, ruoka-ainesten keräily, tunturipyöräily, valoa 24/7.' },
    ],
    gygTitle: 'Kesän kysytyimmät retket',
    gygEyebrow: 'Varattavissa nyt · Ilmainen peruutus',
  },
  hotelsStrip: {
    kicker: 'Missä yöpyä',
    h2: 'Varaa ensin sänky.',
    lead: 'Aktiviteetit järjestyvät, sillä useimmat oppaat lisäävät paikkoja. Halutuin majoitus loppuu kuukausia etukäteen. Lukitse huone ensin, varaa retket sen jälkeen.',
    compareCta: 'Vertaile kaikkia Lapin hotelleja',
    lodging: [
      { name: 'Lasi-iglut', blurb: 'Nuku revontulien alla kaarevan lasikaton kautta. Lapin kysytyimmät yöt.' },
      { name: 'Järvenrantamökit', blurb: 'Savusauna, puulämmitteinen palju, oma laituri. Ympärivuotinen.' },
      { name: 'Tunturikeskukset', blurb: 'Levi · Ylläs · Saariselkä · Ruka. Rinteet vieressä ja kesäaktiviteetit.' },
      { name: 'Boutique-kaupunkihotellit', blurb: 'Rovaniemi · Kemi · Ivalo. Design-hotellit keittiöllä ja keskustan vieressä.' },
      { name: 'Savusaunamökit', blurb: 'Aito savusaunakokemus: pieni, pimeä, järjettömän kuuma.' },
    ],
    comparePrices: 'Vertaile hintoja',
  },
  bookingCta: {
    eyebrow: 'Suunnittele koko reissu',
    heading: 'Varaa aktiviteetit, majoitus ja auto yhdestä paikasta',
    blurb: 'Kolmella napautuksella Lapin matka on kasassa: luotettavat retkioppaat GetYourGuiden kautta, parhaat majoitukset Hotels.comin kautta ja auto odottamassa lentokentällä.',
    activities: 'Aktiviteetit',
    activitiesDesc: 'Huskysafarit, moottorikelkka, revontuliretket ja pilkkiminen, vahvistus heti GetYourGuiden kautta.',
    browseTours: 'Selaa retkiä',
    stayNearby: 'Majoitus lähistöllä',
    stayNearbyDesc: 'Lasi-iglut, hirsimökit, rinnehotellit. Varaa ensin sänky, sillä parhaat menevät nopeasti.',
    compareHotels: 'Vertaile hotelleja',
    rentCar: 'Vuokraa auto',
    rentCarDesc: 'Vertaile yli 600 toimittajaa Rovaniemen, Kittilän, Ivalon ja Kemin lentokentiltä. Talvirenkaat sisältyvät.',
    findBestPrice: 'Etsi paras hinta',
    disclaimer: 'ⓘ Tämä sivu sisältää kumppanilinkkejä. LaplandVibes voi saada komission varauksestasi, sinulle se ei maksa mitään ylimääräistä.',
  },
  newsletter: {
    eyebrow: '#LaplandVibes-uutiskirje',
    h2: 'Saa tiedot varausikkunoista, jotka loppuvat aina kesken.',
    lead: 'Lyhyt sähköposti silloin kun on jotain kerrottavaa: revontuliennusteen piikit, mud-seasonin avoimet toimijat ja retket jotka tulevat myyntiin ennen kuin varaussivustot huomaavat.',
    benefits: [
      { title: 'Revontulihälytykset', body: 'Kun Kp nousee yli 4, yleensä 24–48 h ennen selkeitä yötaivaita.' },
      { title: 'Mikä on auki nyt', body: 'Todelliset kausi-ikkunat huskysafareille, moottorikelkoille ja saunoille.' },
      { title: 'Paikallisten vinkit', body: 'Retket joita ei löydy kumppanisivuilta kuin vasta kesäkuussa.' },
    ],
    emailPlaceholder: 'Sähköpostiosoitteesi',
    subscribeBtn: 'Tilaa',
    subscribingBtn: 'Tilataan…',
    successTitle: 'Olet listalla.',
    successBody: 'Tarkista sähköpostisi tervehdyksen varalta Lapista.',
    alreadyTitle: 'Olet jo listalla!',
    alreadyBody: 'Näyttää siltä että olet jo tilannut. Pidetään yhteyttä.',
    footnote: 'Voit peruuttaa milloin tahansa.',
    errorFallback: 'Tilaus epäonnistui. Yritä uudelleen.',
  },
  activityCard: {
    findBook: 'Etsi ja varaa',
    planVisit: 'Suunnittele käynti',
  },
  home: {
    metaTitle: 'LaplandActivities: arktiset retket Suomen Lapissa',
    metaDescription: 'Moottorikelkkasafarit, huskysafarit, revontuliretket, savusaunat. Varaa luotettavia aktiviteetteja kahdeksassa Lapin kohteessa GetYourGuiden kautta.',
    ogTitle: 'LaplandActivities · luotettavia arktisia elämyksiä',
    categoriesKicker: 'Mitä tehdä',
    categoriesH2: 'Valitse seikkailusi',
    categoriesLead: 'Kahdeksan tapaa kokea Arktis. Valitse kategoria, niin ohjataan luotettavien retkijärjestäjien luokse.',
    activitiesLabel: 'aktiviteettia',
    viewAllCategories: 'Katso kaikki kategoriat',
    gygTitle: 'Tämän viikon parhaiten arvioidut Lapin retket',
    gygEyebrow: 'Varattavissa nyt',
    featuredKicker: 'Käsin valittu',
    featuredH2: 'Toimituksen poiminta',
    seeAllTours: 'Katso kaikki varattavat retket',
    seasonsKicker: 'Ympärivuotinen',
    seasonsH2: 'Neljä vuodenaikaa, neljä seikkailua',
    seasonsLead: 'Jokainen vuodenaika muuttaa Lapin eri maaksi.',
    seasons: [
      { name: 'Talvi', months: 'marras – maalis', blurb: 'Paksu lumi, kaamos, parhaat revontulet. Moottorikelkat, huskyt, savusaunat.', temp: '-15…-5°C' },
      { name: 'Kevät', months: 'huhti – touko', blurb: 'Lunta ja päivänvaloa. Kevätlasketteluja, poron vasominen, revontulia huhtikuun puoliväliin.', temp: '-5…+5°C' },
      { name: 'Kesä', months: 'kesä – elo', blurb: 'Keskiyön aurinko ei laske. Vaellus, melonta, lohenkalastus, maastopyöräily.', temp: '+10…+25°C' },
      { name: 'Syksy', months: 'syys – loka', blurb: 'Ruska värittää tunturit. Ensimmäiset revontulet palaavat. Sienien ja marjojen kausi.', temp: '+5…-5°C' },
    ],
    destinationsKicker: 'Minne mennä',
    destinationsH2: 'Kohteet',
    viewAll: 'Katso kaikki',
    activitiesShort: 'aktiviteettia',
  },
  relatedSites: {
    kicker: 'Lisää #LaplandVibes-verkostosta',
    h2: 'Suunnittele loputkin Lapin-reissustasi',
    lead: 'Aktiviteetit ovat vain puolet matkasta. Nämä sisaroppaat Lapin-verkostostamme syventyvät loppuun.',
    links: [
      { pre: 'Koiravaljakot kiinnostavat? Oma', anchor: 'huskysafarien erikoisopas', post: 'vertailee tarhoja, matkoja ja hintoja.' },
      { pre: 'Mieluummin oma kaasukahva? Katso parhaat', anchor: 'moottorikelkkareitit ja hinnat', post: 'eri puolilta Lappia.' },
      { pre: 'Tuoretta puuteria etsimässä? Selvitä', anchor: 'missä Lapissa kannattaa lasketella', post: 'rinnekeskusten vertailuilla.' },
      { pre: 'Arktiksen hiljaisesta puolesta lue lisää aiheesta', anchor: 'revontulet ja kansallispuistot', post: 'ja parhaat revontulitaivaat.' },
      { pre: 'Ja ennen kuin varaat retket, päätä', anchor: 'missä yöpyä Lapissa', post: ': iglut, mökit ja tunturikeskukset.' },
    ],
  },
  faq: {
    kicker: 'Hyvä tietää',
    h2: 'Lapin aktiviteetit: vastauksia',
    lead: 'Kysymykset, joita matkailijat kysyvät useimmin ennen arktisen elämyksen varaamista.',
    items: [
      {
        q: 'Mitä aktiviteetteja Lapissa voi tehdä?',
        a: 'Talvella klassikoita ovat husky- ja porovaljakot, moottorikelkkasafarit, revontuliretket, lumikenkäily, maasto- ja lasketteluhiihto, pilkkiminen ja avantokelluminen. Kesällä sama erämaa muuttuu vaellukseksi, melonnaksi, koskenlaskuksi, maastopyöräilyksi, lohenkalastukseksi ja kullanhuuhdonnaksi. Ympäri vuoden savusauna ja saamelaiskulttuurin elämykset tarjoavat hiljaisemman puolen arktisesta.',
      },
      {
        q: 'Mitkä ovat parhaat talvi- ja kesäaktiviteetit?',
        a: 'Talvi (marraskuusta maaliskuuhun) on lumen ja pimeyden aikaa: moottorikelkat, koiravaljakot ja revontuliretket tarvitsevat sen. Kesä (kesäkuusta elokuuhun) vaihtaa lumen keskiyön aurinkoon, jolloin valo ei täysin haalistu ja vaellus, melonta ja kalastus onnistuvat lähes kellon ympäri. Keväällä on yhä lunta mutta paljon enemmän valoa, ja syksy tuo ruskan ja ensimmäiset revontulet. Molemmat ovat hiljaisempia väliaikoja.',
      },
      {
        q: 'Paljonko Lapin aktiviteetit maksavat?',
        a: 'Hinta vaihtelee paljon aktiviteetin, keston ja ryhmäkoon mukaan. Lyhyt jaettu hetki kuten porokyyti tai revontulibussiretki on edullisemmasta päästä; usean tunnin tai yksityiset retket kuten pitkä husky-safari tai opastettu moottorikelkkaretki maksavat enemmän, osin koska niihin sisältyvät lämpöhaalarit, saappaat, turvavarusteet ja opas. Ajantasaiset, tarkat hinnat näet avaamalla minkä tahansa retken varauskumppanimme kautta; hinta näkyy ennen vahvistusta.',
      },
      {
        q: 'Sopivatko Lapin aktiviteetit pienille lapsille?',
        a: 'Monet sopivat, kun valitsee oikein. Porovaljakkoajelut, husky-tilavierailut, rauhalliset lumikenkäkävelyt, pulkkamäki ja Joulupukin tapaaminen toimivat hyvin pienille lapsille. Moottorikelkkailussa on yleensä ikäraja kuljettajalle (lapset matkustavat reessä tai kärryssä), ja myöhäiset revontuliretket voivat olla pitkiä ja kylmiä pienimmille. Useimmat järjestäjät ilmoittavat ikärajat ja perhevaihtoehdot retken sivulla, joten tarkista ennen varausta.',
      },
      {
        q: 'Pitääkö Lapin aktiviteetit varata etukäteen?',
        a: 'Kiireisimpinä viikkoina, jouluna ja uutenavuotena sekä helmi–maaliskuun revontuli- ja hiihtohuippuna, kyllä: varaa hyvissä ajoin, sillä suositut husky- ja moottorikelkkaretket täyttyvät. Hiljaisempina aikoina on enemmän joustoa, mutta parhaiten arvioidut järjestäjät ja pienryhmälähdöt myydään silti ensin loppuun. Etukäteen varaaminen antaa myös pelivaraa revontulisuunnitelmiin kirkkaan taivaan mukaan sen sijaan, että kilpailisit viimeisistä paikoista.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Aktiviteettikategoriat · LaplandActivities',
    metaDescription: 'Selaa arktisia aktiviteetteja kategorioittain: seikkailu, eläinkokemukset, revontulet, talviurheilu, hyvinvointi, kulttuuri, kesäaktiviteetit ja ruoka.',
    kicker: 'Mitä tehdä',
    h1: 'Aktiviteettikategoriat',
    lead: 'Kahdeksan tapaa kokea Arktis. Valitse aihe, niin ohjataan luotettavien toimijoiden luokse.',
    activitiesLabel: 'aktiviteettia',
    exploreAdventures: 'Tutustu seikkailuihin',
    explore: 'Tutustu',
    gygTitle: 'Selaa varatuimpia retkiä',
    gygEyebrow: 'Kaikissa kategorioissa',
  },
  categoryPage: {
    notFoundH1: 'Kategoriaa ei löydy',
    backCategories: '← Takaisin kategorioihin',
    allCategoriesNav: 'Kaikki kategoriat',
    bookToursPrefix: 'Varaa',
    activitiesCount: (n, name) => `${n} ${name.toLowerCase()} -aktiviteettia`,
    comingSoon: 'Tämän kategorian aktiviteetit tulossa pian.',
    gygTitlePrefix: 'Varatuimmat',
    gygEyebrow: 'Luotettavat toimijat',
    browseOthers: 'Selaa muita kategorioita',
    allCategoriesLink: 'Kaikki kategoriat →',
  },
  destinationsIndex: {
    metaTitle: 'Lapin kohteet · LaplandActivities',
    metaDescription: 'Kahdeksan ikonista Suomen Lapin kohdetta: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio ja Tornio. Aktiviteetit, toimijat ja majoitus.',
    kicker: 'Minne mennä',
    h1: 'Kohteet',
    lead: 'Kahdeksan ikonista Lapin kohdetta, jokaisella oma luonne ja toimijaverkosto.',
    activitiesLabel: 'aktiviteettia',
    explore: 'Tutustu',
    gygTitle: 'Varatuimmat Lapin retket',
    gygEyebrow: 'Kaikissa kohteissa',
  },
  destinationPage: {
    notFoundH1: 'Kohdetta ei löydy',
    backDestinations: '← Takaisin kohteisiin',
    allDestinationsNav: 'Kaikki kohteet',
    bookActivitiesIn: 'Varaa aktiviteetit kohteessa',
    stayIn: 'Yövy',
    activitiesShort: 'aktiviteettia',
    mustDoKicker: 'Pakko tehdä',
    mustDoH2: 'Varatuin elämys',
    localKicker: 'Paikallistietoa',
    localH2: 'Sisäpiirivinkit',
    operatorsLabel: 'Luotettavat toimijat kohteessa',
    gygTitlePrefix: 'Luotettavat',
    gygTitleSuffix: 'retket',
    gygEyebrow: 'Varattavissa nyt',
    allActivitiesKicker: 'Kaikki aktiviteetit',
    thingsToDoIn: 'Tekemistä kohteessa',
    moreSoon: 'Lisää aktiviteetteja tulossa kohteeseen',
    sleepInPrefix: 'Yövy kohteessa',
    sleepInBlurb: 'Lasi-iglut, hirsimökit, rinnehotellit. Hotels.com kokoaa parhaat hinnat.',
    compareHotels: 'Vertaile hotelleja',
    driveYourself: 'Aja itse',
    driveYourselfBlurb: 'Lappi on laaja ja vuokra-autot on jo varustettu talvirenkailla. Vertaile yli 600 toimittajaa.',
    findBestPrice: 'Etsi paras hinta',
    keepExploringKicker: 'Jatka tutkimista',
    otherDestinationsH2: 'Muita kohteita',
    allDestinations: 'Kaikki kohteet',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Varaa Joulupukin pajakylä aikaiseksi aamuksi välttääksesi risteilybussien ruuhkat.', icon: '🎅' },
        { tip: 'Napapiirin ylitystodistus on ilmainen postitoimistossa.', icon: '📮' },
        { tip: 'Arktikumissa on Suomen vahvin revontulinäyttely.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro on Lapin äänekkäin après-ski. Käy perjantaina.', icon: '🍺' },
        { tip: 'Bearhill Husky myydään loppuun viikkoja etukäteen huippuviikkoina.', icon: '🐕' },
        { tip: 'Yölaskettelu revontulien alla on vain Levin juttu, joulu- ja tammikuussa.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläksellä on yhdet Suomen pimeimmistä ja kirkkaimmista revontulitaivaista.', icon: '✨' },
        { tip: 'Äkäslompolon puoli on rauhallisempi; Ylläsjärvellä on baarit.', icon: '🏔️' },
        { tip: '330 km hiihtolatuverkosto on Suomen paras, ja maaliskuun puoliväli on parasta aikaa.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Kiilopään savusauna toimii ympäri vuoden. Varaa iltapäiväkierros.', icon: '🧖' },
        { tip: 'Tankavaaran kullankaivuu: kaikki mitä löydät, on sinun.', icon: '🥇' },
        { tip: 'UKK-kansallispuiston erämaakämpät ovat ilmaisia, ensimmäinen ehtii.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Siida-museoon tarvitaan vähintään kolme tuntia. Lue myös saamenkielinen siipi.', icon: '🏛️' },
        { tip: 'Inarinjärven veneretket vain kesä–syyskuussa.', icon: '⛵' },
        { tip: 'Lakkasesonki huipussaan heinäkuun lopussa Pielpajärven polulla.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Karhunkatselukojut menevät täyteen kuukausia etukäteen.', icon: '🐻' },
        { tip: 'Karhunkierroksella on 12 km "Pieni karhu" -lenkki ilman monipäiväreittiä.', icon: '🥾' },
        { tip: 'Ruka avaa lasketteluhiihtokauden jo lokakuussa, Suomen varhaisimpana.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Riisitunturin tykkylumipuut parhaimmillaan tammi–maaliskuussa.', icon: '🌲' },
        { tip: 'Korouoman jääputouksille pääsee 3 km metsäkävelyllä.', icon: '🧊' },
        { tip: 'Pentikin tehtaanmyymälä alennus 30–50 % ympäri vuoden.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'Jäänmurtaja Sampo kulkee vain joulu–huhtikuussa. Varaa heti kun varauskausi aukeaa.', icon: '🚢' },
        { tip: 'Lumilinna rakennetaan vuosittain uudella teemalla.', icon: '🏰' },
        { tip: 'Green Zone Golf ylittää Suomi-Ruotsi -rajan kierroksen aikana.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Tietoja · LaplandActivities',
    metaDescription: 'LaplandActivities on #LaplandVibes-ekosysteemin aktiviteettiopas: luotettavia arktisia elämyksiä kahdeksassa Suomen Lapin kohteessa.',
    eyebrow: 'Tietoja',
    h1: 'Suomen Lapin aktiviteettiopas',
    para1: 'LaplandActivities on #LaplandVibes-ekosysteemin aktiviteetti-osio, itsenäinen oppaaverkosto, joka kattaa majoituksen, ruoan, luonnon, liikkumisen ja retket Suomen Lapissa.',
    para2: 'Sivusto ohjaa matkailijat luotettavien paikallisten toimijoiden luokse kahdeksassa kohteessa, Saariselän moottorikelkkasafareista Tornionjoen lohenkalastukseen. Jokainen varaus tehdään GetYourGuiden kautta, joten saat välittömän vahvistuksen ja useimmissa retkissä ilmaisen peruutuksen 24 tuntiin asti.',
    pillars: [
      { title: 'Luotettavat toimijat', text: 'Listauksissa paikallisia, vakiintuneita toimijoita; jokainen varaus kulkee GetYourGuiden kautta.' },
      { title: 'Aidot elämykset', text: 'Jokainen aktiviteetti on valittu sellaisten yksityiskohtien perusteella, joita ei voi väärentää.' },
      { title: 'Turvallista ja luotettavaa', text: 'Ohjelmapalveluyritykset kuuluvat kuluttajaturvallisuuslain piiriin, ja niiden turvallisuutta valvoo Tukes.' },
      { title: '#LaplandVibes-verkosto', text: 'Osa 23 sivuston Suomen Lapin verkostoa, täydellinen matkasuunnittelutyökalu.' },
    ],
    affiliateH2: 'Kumppanilinkit',
    affiliateBody1: 'LaplandActivities saa komission kun varaat kumppanilinkkien kautta: Hotels.com, GetYourGuide, EconomyBookings. Sinulle se ei maksa mitään ylimääräistä ja pitää sivuston ilmaisena. Suosituksissa on vain toimijoita ja majoituspaikkoja, jotka toimittavat luvatun. Lue tarkemmin sivulta',
    affiliateBody2: '.',
    termsLink: 'Käyttöehdot',
    contactH2: 'Yhteystiedot',
    contactBody1: 'Kirjoita ',
    contactBody2: ' yhteistyöasioissa:',
    backHome: '← Takaisin etusivulle',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: 'Eksyitkö Arktisille?',
    body: 'Tätä sivua ei ole olemassa. Ehkä revontulet siirsivät sen.',
    backCta: 'Takaisin etusivulle',
  },
};

// ---------- GERMAN ----------
const de: SectionCopy = {
  nav: {
    home: 'Startseite',
    destinations: 'Reiseziele',
    categories: 'Kategorien',
    about: 'Über uns',
    bookCta: 'Aktivität buchen',
    allDestinations: 'Alle Reiseziele →',
    allCategories: 'Alle Kategorien →',
  },
  hero: {
    eyebrow: 'Finnisch-Lappland · Nordlicht bis Mitternachtssonne',
    lead: 'Schneemobiltouren, Schlittenhundefahrten, Nordlicht-Touren, Rauchsaunas und Wildwasserfahrten unter der Mitternachtssonne. Buchen Sie direkt bei handverlesenen Anbietern in Rovaniemi, Levi, Ylläs, Saariselkä und darüber hinaus.',
    primaryCta: 'Aktivitäten jetzt buchen',
    secondaryCta: 'Reiseziele entdecken',
    stayNearby: 'Übernachten in der Nähe',
    stayNearbyDesc: 'Hotels.com, beste Preise',
    rentCar: 'Mietwagen',
    rentCarDesc: 'Ab Flughafen Rovaniemi',
    auroraTours: 'Nordlicht-Touren',
    auroraToursDesc: 'Handverlesene Anbieter',
    allCategories: 'Alle Kategorien',
    allCategoriesDesc: 'Acht Wege, die Arktis zu erleben',
    scrollAria: 'Zu Kategorien scrollen',
  },
  summerBand: {
    eyebrow: 'Sommer 2026 · jetzt buchbar',
    h2: 'Lappland im Sommer ist das bestgehütete Geheimnis.',
    lead: 'Die Mitternachtssonne geht nicht unter. Die Wälder öffnen sich. Der Lachs zieht, und ab August färben sich die Fjälls durch die Ruska rot. Bis Ende Juni haben die meisten Anbieter gute Verfügbarkeit, im Juli sind die besten Slots vergeben.',
    bookCta: 'Sommeraktivität buchen',
    browseCta: 'Sommerguide ansehen',
    imageKicker: 'Sommerkategorie',
    imageH3: 'Acht Wege, die Mitternachtssonne zu erleben',
    highlights: [
      { title: 'Fjäll-Wanderung', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas: lange Tage, keine Menschenmassen.' },
      { title: 'Kajak & SUP', body: 'Inselgruppen im Inari-See und Mitternachtssonnen-Seen, spiegelglattes Wasser bis 1 Uhr morgens.' },
      { title: 'Lachs-Fliegenfischen', body: 'Der Lachsaufstieg an Tornionjoki und Teno erreicht im Juni und Juli seinen Höhepunkt.' },
      { title: 'Mitternachtssonnen-Touren', body: 'Fotografie, Sammeln, Fjäll-Mountainbiking: Tageslicht rund um die Uhr.' },
    ],
    gygTitle: 'Sommertouren sind schnell ausgebucht',
    gygEyebrow: 'Jetzt buchbar · Kostenlose Stornierung',
  },
  hotelsStrip: {
    kicker: 'Wo Sie übernachten',
    h2: 'Buchen Sie zuerst das Bett.',
    lead: 'Aktivitäten lassen sich leicht arrangieren, denn die meisten Anbieter erweitern ihre Kapazitäten. Die wirklich gefragte Unterkunft ist Monate im Voraus ausgebucht. Sichern Sie sich das Zimmer, dann die Touren.',
    compareCta: 'Alle Lappland-Hotels vergleichen',
    lodging: [
      { name: 'Glas-Iglus', blurb: 'Schlafen Sie unter Nordlichtern durch ein gewölbtes Glasdach. Die meistgebuchten Nächte Lapplands.' },
      { name: 'Blockhütten am See', blurb: 'Rauchsauna, holzbefeuerter Hot Tub, eigener Steg. Ganzjährig.' },
      { name: 'Fjäll-Resorts', blurb: 'Levi · Ylläs · Saariselkä · Ruka: Ski-in/Ski-out plus Sommeraktivitäten.' },
      { name: 'Boutique-Stadthotels', blurb: 'Rovaniemi · Kemi · Ivalo: Designhotels mit Küche und Stadtzugang.' },
      { name: 'Rauchsaunahütten', blurb: 'Das echte Savusauna-Erlebnis: klein, dunkel, unfassbar heiß.' },
    ],
    comparePrices: 'Preise vergleichen',
  },
  bookingCta: {
    eyebrow: 'Die ganze Reise planen',
    heading: 'Aktivitäten, Unterkunft &amp; Mietwagen an einem Ort buchen',
    blurb: 'Drei Klicks und Ihre Lapplandreise steht: handverlesene Tour-Anbieter über GetYourGuide, beste Unterkunftspreise über Hotels.com, und ein Mietwagen wartet am Flughafen.',
    activities: 'Aktivitäten',
    activitiesDesc: 'Husky-Safaris, Schneemobile, Nordlicht-Touren, Eisfischen. Sofortige Bestätigung über GetYourGuide.',
    browseTours: 'Touren ansehen',
    stayNearby: 'Übernachten in der Nähe',
    stayNearbyDesc: 'Glas-Iglus, Blockhütten, Ski-in-Hotels. Buchen Sie zuerst das Bett, denn die besten sind schnell weg.',
    compareHotels: 'Hotels vergleichen',
    rentCar: 'Mietwagen',
    rentCarDesc: 'Vergleichen Sie 600+ Anbieter an den Flughäfen Rovaniemi, Kittilä, Ivalo und Kemi. Winterreifen inklusive.',
    findBestPrice: 'Besten Preis finden',
    disclaimer: 'ⓘ Diese Seite enthält Affiliate-Links. LaplandVibes erhält ggf. eine Provision, für Sie ohne Aufpreis.',
  },
  newsletter: {
    eyebrow: 'Der #LaplandVibes-Newsletter',
    h2: 'Hinweise zu den Buchungsfenstern, die immer ausverkauft sind.',
    lead: 'Eine kurze E-Mail, wenn es etwas zu melden gibt: Spitzen in der Nordlicht-Vorhersage, Anbieter, die noch in der Schlammsaison öffnen, und Touren, die in den Verkauf gehen, bevor die Buchungsportale es merken.',
    benefits: [
      { title: 'Nordlicht-Hinweise', body: 'Wenn der Kp-Wert über 4 springt, meist 24–48 Stunden vor klarem Himmel.' },
      { title: 'Was gerade geöffnet ist', body: 'Reale Saisonfenster für Huskys, Schneemobile und Saunas.' },
      { title: 'Tipps von Einheimischen', body: 'Die Tour, die Sie auf den Partnerseiten erst im Juni finden.' },
    ],
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    subscribeBtn: 'Abonnieren',
    subscribingBtn: 'Wird abonniert…',
    successTitle: 'Sie sind dabei.',
    successBody: 'Schauen Sie in Ihren Posteingang. Eine Begrüßung aus Lappland wartet.',
    alreadyTitle: 'Schon auf der Liste!',
    alreadyBody: 'Sie sind bereits angemeldet. Bis bald!',
    footnote: 'Jederzeit kündbar.',
    errorFallback: 'Anmeldung fehlgeschlagen. Bitte erneut versuchen.',
  },
  activityCard: {
    findBook: 'Finden & Buchen',
    planVisit: 'Besuch planen',
  },
  home: {
    metaTitle: 'LaplandActivities: arktische Touren in Lappland',
    metaDescription: 'Schneemobiltouren, Schlittenhundefahrten, Nordlicht-Touren, Rauchsaunas und mehr. Handverlesene Aktivitäten in 8 Reisezielen Lapplands über GetYourGuide buchen.',
    ogTitle: 'LaplandActivities: handverlesene arktische Erlebnisse',
    categoriesKicker: 'Was zu tun ist',
    categoriesH2: 'Wählen Sie Ihr Abenteuer',
    categoriesLead: 'Acht Wege, die Arktis zu erleben. Wählen Sie eine Kategorie, und Sie werden zu handverlesenen Tour-Anbietern geleitet.',
    activitiesLabel: 'Aktivitäten',
    viewAllCategories: 'Alle Kategorien ansehen',
    gygTitle: 'Bestbewertete Lappland-Touren diese Woche',
    gygEyebrow: 'Jetzt buchbar',
    featuredKicker: 'Sorgfältig ausgewählt',
    featuredH2: 'Top-Erlebnisse',
    seeAllTours: 'Alle buchbaren Touren sehen',
    seasonsKicker: 'Ganzjährig',
    seasonsH2: 'Vier Jahreszeiten voller Abenteuer',
    seasonsLead: 'Jede Saison verwandelt Lappland in ein anderes Land.',
    seasons: [
      { name: 'Winter', months: 'Nov – Mär', blurb: 'Tiefer Schnee, Polarnächte, intensive Nordlichter. Schneemobile, Huskys, Rauchsaunas.', temp: '-15 bis -5 °C' },
      { name: 'Frühling', months: 'Apr – Mai', blurb: 'Schnee mit Tageslicht. Skifahren spät in der Saison, Rentierkälber, Nordlichter bis Mitte April.', temp: '-5 bis +5 °C' },
      { name: 'Sommer', months: 'Jun – Aug', blurb: 'Die Mitternachtssonne geht nicht unter. Wandern, Kajak, Lachsfischen, Mountainbiking.', temp: '+10 bis +25 °C' },
      { name: 'Herbst', months: 'Sep – Okt', blurb: 'Ruska färbt die Fjälls. Die ersten Nordlichter kehren zurück. Pilz- und Beerensaison.', temp: '+5 bis -5 °C' },
    ],
    destinationsKicker: 'Wohin reisen',
    destinationsH2: 'Reiseziele',
    viewAll: 'Alle ansehen',
    activitiesShort: 'Aktivitäten',
  },
  relatedSites: {
    kicker: 'Mehr von #LaplandVibes',
    h2: 'Planen Sie den Rest Ihrer Arktis-Reise',
    lead: 'Aktivitäten sind nur die halbe Reise. Diese Schwester-Guides aus unserem Lappland-Netzwerk gehen in die Tiefe.',
    links: [
      { pre: 'Lust auf Schlittenhunde? Unser', anchor: 'spezieller Husky-Safari-Guide', post: 'vergleicht Kennel, Strecken und Preise.' },
      { pre: 'Lieber selbst Gas geben? Sehen Sie die besten', anchor: 'Schneemobil-Routen & Preise', post: 'in ganz Lappland.' },
      { pre: 'Auf der Suche nach frischem Pulverschnee? Erfahren Sie,', anchor: 'wo man in Lappland Ski fährt', post: 'mit Vergleichen Resort für Resort.' },
      { pre: 'Für die ruhige Seite der Arktis lesen Sie über', anchor: 'Nordlichter & Nationalparks', post: 'und den besten Polarlichthimmel.' },
      { pre: 'Und bevor Sie die Touren buchen, klären Sie,', anchor: 'wo man in Lappland übernachtet', post: ': Iglus, Hütten und Fjell-Resorts.' },
    ],
  },
  faq: {
    kicker: 'Gut zu wissen',
    h2: 'Lappland-Aktivitäten: beantwortet',
    lead: 'Die Fragen, die Reisende vor der Buchung eines arktischen Erlebnisses am häufigsten stellen.',
    items: [
      {
        q: 'Welche Aktivitäten kann man in Lappland unternehmen?',
        a: 'Im Winter sind die Klassiker Husky- und Rentierschlittenfahrten, Schneemobil-Safaris, Nordlichter-Touren, Schneeschuhwandern, Langlauf und Abfahrtski, Eisangeln und Eis-Floating. Im Sommer wird dieselbe Wildnis zum Wandern, Kajak- und Kanufahren, Wildwasser-Rafting, Mountainbiken, Lachsangeln und Goldwaschen. Ganzjährig bieten die Rauchsauna und Erlebnisse rund um die Sámi-Kultur eine andere, ruhigere Seite der Arktis.',
      },
      {
        q: 'Was sind die besten Winter- bzw. Sommeraktivitäten?',
        a: 'Der Winter (November bis März) ist die Zeit für Schnee und Dunkelheit: Schneemobile, Hundeschlitten und Aurora-Touren brauchen genau das. Der Sommer (Juni bis August) tauscht den Schnee gegen die Mitternachtssonne, wenn das Licht nie ganz verblasst und Wandern, Paddeln und Angeln fast rund um die Uhr möglich sind. Der Frühling hat noch Schnee bei deutlich mehr Tageslicht, und der Herbst bringt die Ruska-Farben und die ersten Nordlichter. Beides sind ruhigere Nebensaisons.',
      },
      {
        q: 'Wie viel kosten Aktivitäten in Lappland?',
        a: 'Das hängt stark von Aktivität, Dauer und Gruppengröße ab. Eine kurze Gruppenaktivität wie eine Rentierfahrt oder eine Aurora-Bustour liegt am unteren Ende; mehrstündige oder private Touren wie eine lange Husky-Safari oder eine geführte Schneemobil-Expedition kosten mehr, auch weil warme Overalls, Stiefel, Sicherheitsausrüstung und ein Guide enthalten sind. Aktuelle, genaue Preise sehen Sie, wenn Sie eine Tour über unseren Buchungspartner öffnen. Der Live-Preis wird vor der Buchung angezeigt.',
      },
      {
        q: 'Sind Aktivitäten in Lappland für kleine Kinder geeignet?',
        a: 'Viele sind es, mit der richtigen Wahl. Rentierschlittenfahrten, Besuche auf der Huskyfarm, sanfte Schneeschuhwanderungen, Schlittenfahren und das Treffen mit dem Weihnachtsmann eignen sich gut für kleine Kinder. Beim Schneemobilfahren gibt es meist ein Mindestalter zum Fahren (Kinder fahren im Schlitten oder Anhänger mit), und späte Aurora-Touren können für die Kleinsten lang und kalt sein. Die meisten Anbieter nennen Altersgrenzen und Familienoptionen auf der Aktivitätsseite, also am besten vor der Buchung prüfen.',
      },
      {
        q: 'Muss man Aktivitäten in Lappland im Voraus buchen?',
        a: 'Für die geschäftigsten Wochen, also Weihnachten und Neujahr sowie den Aurora- und Ski-Höhepunkt von Februar bis März, gilt: buchen Sie früh, denn beliebte Husky- und Schneemobiltouren sind schnell ausgebucht. In ruhigeren Zeiten haben Sie mehr Spielraum, aber die bestbewerteten Anbieter und Kleingruppen-Abfahrten sind trotzdem zuerst ausverkauft. Frühzeitig zu buchen lässt Sie zudem Spielraum für klare Nächte in Aurora-Pläne einbauen, statt um die letzten Plätze zu konkurrieren.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Aktivitätskategorien · LaplandActivities',
    metaDescription: 'Arktische Aktivitäten nach Kategorie durchsuchen: Abenteuer, Tiererlebnisse, Nordlicht, Wintersport, Wellness, Kultur, Sommeraktivitäten und Kulinarik.',
    kicker: 'Was zu tun ist',
    h1: 'Aktivitätskategorien',
    lead: 'Acht Wege, die Arktis zu erleben. Wählen Sie ein Thema, und Sie werden zu handverlesenen Anbietern geleitet.',
    activitiesLabel: 'Aktivitäten',
    exploreAdventures: 'Abenteuer entdecken',
    explore: 'Entdecken',
    gygTitle: 'Meistgebuchte Touren ansehen',
    gygEyebrow: 'Über alle Kategorien',
  },
  categoryPage: {
    notFoundH1: 'Kategorie nicht gefunden',
    backCategories: '← Zurück zu den Kategorien',
    allCategoriesNav: 'Alle Kategorien',
    bookToursPrefix: 'Buchen:',
    activitiesCount: (n, name) => `${n} ${name}-Aktivitäten`,
    comingSoon: 'Aktivitäten für diese Kategorie folgen bald.',
    gygTitlePrefix: 'Meistgebuchte',
    gygEyebrow: 'Handverlesene Anbieter',
    browseOthers: 'Weitere Kategorien ansehen',
    allCategoriesLink: 'Alle Kategorien →',
  },
  destinationsIndex: {
    metaTitle: 'Lappland-Reiseziele · LaplandActivities',
    metaDescription: 'Acht ikonische Reiseziele in Finnisch-Lappland: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio und Tornio. Aktivitäten, Anbieter und Unterkünfte.',
    kicker: 'Wohin reisen',
    h1: 'Reiseziele',
    lead: 'Acht ikonische Reiseziele in Lappland, jedes mit eigenem Charakter und Anbieternetzwerk.',
    activitiesLabel: 'Aktivitäten',
    explore: 'Entdecken',
    gygTitle: 'Meistgebuchte Lappland-Touren',
    gygEyebrow: 'Über alle Reiseziele',
  },
  destinationPage: {
    notFoundH1: 'Reiseziel nicht gefunden',
    backDestinations: '← Zurück zu den Reisezielen',
    allDestinationsNav: 'Alle Reiseziele',
    bookActivitiesIn: 'Aktivitäten buchen in',
    stayIn: 'Übernachten in',
    activitiesShort: 'Aktivitäten',
    mustDoKicker: 'Pflichtprogramm',
    mustDoH2: 'Meistgebuchtes Erlebnis',
    localKicker: 'Lokales Wissen',
    localH2: 'Insider-Tipps',
    operatorsLabel: 'Handverlesene Anbieter in',
    gygTitlePrefix: 'Handverlesene',
    gygTitleSuffix: '-Touren',
    gygEyebrow: 'Jetzt buchbar',
    allActivitiesKicker: 'Alle Aktivitäten',
    thingsToDoIn: 'Aktivitäten in',
    moreSoon: 'Weitere Aktivitäten folgen bald für',
    sleepInPrefix: 'Schlafen in',
    sleepInBlurb: 'Glas-Iglus, Blockhütten, Ski-in-Hotels: Hotels.com bündelt die besten Preise.',
    compareHotels: 'Hotels vergleichen',
    driveYourself: 'Selbst fahren',
    driveYourselfBlurb: 'Lappland ist weit, und die Mietwagen sind bereits mit Winterreifen ausgestattet. Vergleichen Sie 600+ Anbieter.',
    findBestPrice: 'Besten Preis finden',
    keepExploringKicker: 'Weiter entdecken',
    otherDestinationsH2: 'Weitere Reiseziele',
    allDestinations: 'Alle Reiseziele',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Buchen Sie das Weihnachtsmanndorf für den frühen Morgen, um den Reisebus-Andrang zu vermeiden.', icon: '🎅' },
        { tip: 'Die Polarkreis-Überquerungs-Urkunde gibt es kostenlos im Postamt.', icon: '📮' },
        { tip: 'Das Arktikum zeigt die ausführlichste Nordlicht-Ausstellung Finnlands.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro ist das lauteste Après-Ski Lapplands, am besten freitags.', icon: '🍺' },
        { tip: 'Bearhill Husky ist in der Hochsaison Wochen im Voraus ausgebucht.', icon: '🐕' },
        { tip: 'Nachtskifahren unter Nordlichtern gibt es nur in Levi, und nur im Dezember und Januar.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs hat einen der dunkelsten, klarsten Nordlicht-Himmel Finnlands.', icon: '✨' },
        { tip: 'Die Seite Äkäslompolo ist ruhiger; in Ylläsjärvi sind die Bars.', icon: '🏔️' },
        { tip: 'Das 330 km lange Langlauf-Netz ist Finnlands bestes; Mitte März ist ideal.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Die Rauchsauna in Kiilopää läuft ganzjährig. Buchen Sie das Nachmittagsfenster.', icon: '🧖' },
        { tip: 'Goldwaschen in Tankavaara, was Sie finden, gehört Ihnen.', icon: '🥇' },
        { tip: 'Die Wildnis-Hütten im UKK-Nationalpark sind kostenlos, nach dem Prinzip der Reihenfolge.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Für das Siida-Museum sollten Sie mindestens drei Stunden einplanen, auch den samischsprachigen Flügel lesen.', icon: '🏛️' },
        { tip: 'Bootsfahrten auf dem Inari-See nur von Juni bis September.', icon: '⛵' },
        { tip: 'Moltebeerensaison Ende Juli entlang des Pielpajärvi-Pfades.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Bärenbeobachtungs-Hütten sind Monate im Voraus ausgebucht.', icon: '🐻' },
        { tip: 'Der Karhunkierros bietet einen 12 km langen "Kleiner Bär"-Rundweg für Tageswanderer.', icon: '🥾' },
        { tip: 'Ruka öffnet bereits im Oktober für den Skibetrieb, der früheste Start Finnlands.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Die tykky-beladenen Bäume auf dem Riisitunturi sind von Januar bis März am schönsten.', icon: '🌲' },
        { tip: 'Die gefrorenen Wasserfälle in Korouoma erreichen Sie über eine 3 km lange Waldwanderung.', icon: '🧊' },
        { tip: 'Der Pentik-Outlet-Shop bietet ganzjährig 30–50 % Rabatt.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'Der Eisbrecher Sampo fährt nur von Dezember bis April, buchen Sie, sobald die Termine geöffnet sind.', icon: '🚢' },
        { tip: 'Das SnowCastle wird jedes Jahr mit einem neuen Thema neu errichtet.', icon: '🏰' },
        { tip: 'Der Green Zone Golf führt mitten in der Runde über die finnisch-schwedische Grenze.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Über uns · LaplandActivities',
    metaDescription: 'LaplandActivities ist die Aktivitäten-Sektion des #LaplandVibes-Ökosystems, handverlesene arktische Erlebnisse in acht Reisezielen Finnisch-Lapplands.',
    eyebrow: 'Über uns',
    h1: 'Ein Aktivitäten-Guide für Finnisch-Lappland',
    para1: 'LaplandActivities ist die Aktivitäten-Sektion des #LaplandVibes-Ökosystems, ein Netzwerk unabhängiger Reiseführer für Unterkunft, Essen, Natur, Transport und Touren in Finnisch-Lappland.',
    para2: 'Die Seite vermittelt Reisende an handverlesene lokale Anbieter in acht Reisezielen, von der Schneemobiltour in Saariselkä bis zum Lachsfischen am Tornionjoki. Jede Buchung läuft über GetYourGuide, daher erhalten Sie sofortige Bestätigung und bei den meisten Touren kostenlose Stornierung bis 24 Stunden vor Beginn.',
    pillars: [
      { title: 'Echte Anbieter', text: 'Die Listings führen etablierte lokale Anbieter, und jede Buchung läuft über GetYourGuide.' },
      { title: 'Authentische Erlebnisse', text: 'Jede Aktivität ist nach der Art von Detail ausgewählt, die sich nicht vortäuschen lässt.' },
      { title: 'Sicher und vertrauenswürdig', text: 'Aktivitätsanbieter in Finnland unterliegen dem Verbrauchersicherheitsgesetz und werden von der Sicherheitsbehörde Tukes beaufsichtigt.' },
      { title: '#LaplandVibes-Netzwerk', text: 'Teil eines Netzwerks aus 23 Seiten zu Finnisch-Lappland, Ihr vollständiges Werkzeug zur Reiseplanung.' },
    ],
    affiliateH2: 'Affiliate-Hinweis',
    affiliateBody1: 'LaplandActivities erhält eine Provision, wenn Sie über Partner-Links buchen, Hotels.com, GetYourGuide, EconomyBookings. Für Sie entstehen keine Mehrkosten, und die Seite bleibt kostenfrei. Empfohlen werden Anbieter und Unterkünfte, die nachweislich liefern. Den vollständigen Hinweis lesen Sie in den',
    affiliateBody2: '.',
    termsLink: 'Nutzungsbedingungen',
    contactH2: 'Kontakt',
    contactBody1: 'E-Mail an ',
    contactBody2: ', für Partnerschaften:',
    backHome: '← Zurück zur Startseite',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: 'Verirrt in der Arktis?',
    body: 'Diese Seite existiert nicht. Vielleicht haben die Nordlichter sie verschoben.',
    backCta: 'Zurück zur Startseite',
  },
};

// ---------- JAPANESE ----------
const ja: SectionCopy = {
  nav: {
    home: 'ホーム',
    destinations: '目的地',
    categories: 'カテゴリー',
    about: '当サイトについて',
    bookCta: 'アクティビティを予約',
    allDestinations: 'すべての目的地 →',
    allCategories: 'すべてのカテゴリー →',
  },
  hero: {
    eyebrow: 'フィンランド・ラップランド · オーロラから白夜まで',
    lead: 'スノーモービルサファリ、ハスキーそり、オーロラハント、スモークサウナ、白夜の下のリバーラフティング。ロヴァニエミ、レヴィ、ウッラス、サーリセルカほかの厳選オペレーターから直接予約。',
    primaryCta: 'アクティビティを予約',
    secondaryCta: '目的地を見る',
    stayNearby: '近くに泊まる',
    stayNearbyDesc: 'Hotels.com・ベスト料金',
    rentCar: 'レンタカー',
    rentCarDesc: 'ロヴァニエミ空港から',
    auroraTours: 'オーロラツアー',
    auroraToursDesc: '厳選オペレーター',
    allCategories: 'すべてのカテゴリー',
    allCategoriesDesc: '北極を体験する8つの方法',
    scrollAria: 'カテゴリーへスクロール',
  },
  summerBand: {
    eyebrow: '2026年夏、予約受付中',
    h2: 'ラップランドの夏は最大の隠れた魅力。',
    lead: '白夜は沈まない。森が開ける。サーモンが遡上し、8月から山々がルスカで赤く染まる。ほとんどのオペレーターは6月まで広く空きがある。7月までにベストの枠はなくなる。',
    bookCta: '夏のアクティビティを予約',
    browseCta: '夏のガイドを見る',
    imageKicker: '夏のカテゴリー',
    imageH3: '白夜を感じる8つの方法',
    highlights: [
      { title: 'フィエル・ハイキング', body: 'パッラス・ウッラストゥントゥリ、カルフンキエロス、ヘッタ・パッラス。長い日、混雑なし。' },
      { title: 'カヤック&SUP', body: 'イナリ湖の島々、白夜の湖。午前1時まで鏡のような水面。' },
      { title: 'サーモン・フライフィッシング', body: 'トルニオ川とテノ川は6月〜7月がピーク。' },
      { title: '白夜ツアー', body: '写真撮影、フォレージング、フィエルでのマウンテンバイク。24時間日照。' },
    ],
    gygTitle: '夏のツアー、好評受付中',
    gygEyebrow: '今すぐ予約可能 · 無料キャンセル',
  },
  hotelsStrip: {
    kicker: 'どこに泊まるか',
    h2: 'まずベッドを予約。',
    lead: 'アクティビティは簡単。オペレーターは枠を増やせます。本当に欲しい宿泊は数ヶ月前に売り切れます。部屋を確保してから、ツアーを予約しましょう。',
    compareCta: 'すべてのラップランド・ホテルを比較',
    lodging: [
      { name: 'ガラスイグルー', blurb: '曲面ガラス屋根越しにオーロラの下で眠る。ラップランドで最も予約される宿泊。' },
      { name: '湖畔のログキャビン', blurb: 'スモークサウナ、薪の温水ジャグジー、専用桟橋。通年。' },
      { name: 'フィエル・リゾート', blurb: 'レヴィ・ウッラス・サーリセルカ・ルカ。スキーイン/スキーアウト、夏のアクティビティも。' },
      { name: 'ブティック・シティ', blurb: 'ロヴァニエミ・ケミ・イヴァロ。キッチン付き、市街アクセスのデザインホテル。' },
      { name: 'スモークサウナ・キャビン', blurb: '本物のサヴサウナ体験。小さく、暗く、ものすごく熱い。' },
    ],
    comparePrices: '料金を比較',
  },
  bookingCta: {
    eyebrow: '旅行全体を計画',
    heading: 'アクティビティ、宿泊、車を一カ所で予約',
    blurb: 'タップ3回でラップランド旅行が完成。GetYourGuide経由の厳選ツアーオペレーター、Hotels.com経由の最高の宿泊、空港で待っているレンタカー。',
    activities: 'アクティビティ',
    activitiesDesc: 'ハスキーサファリ、スノーモービル、オーロラツアー、アイスフィッシング。GetYourGuide経由で即時確認。',
    browseTours: 'ツアーを見る',
    stayNearby: '近くに泊まる',
    stayNearbyDesc: 'ガラスイグルー、ログキャビン、スキーインホテル。ベストのものは早く売り切れるので、ベッドを先に予約しましょう。',
    compareHotels: 'ホテルを比較',
    rentCar: 'レンタカー',
    rentCarDesc: 'ロヴァニエミ、キッティラ、イヴァロ、ケミ空港で600以上のサプライヤーを比較。冬タイヤ込み。',
    findBestPrice: 'ベスト価格を探す',
    disclaimer: 'ⓘ このページにはアフィリエイトリンクが含まれます。ご予約いただいた場合、追加費用なしでLaplandVibesが手数料を受け取ることがあります。',
  },
  newsletter: {
    eyebrow: '#LaplandVibesニュースレター',
    h2: 'いつも売り切れる予約のタイミングを掴みましょう。',
    lead: 'お知らせする価値があるときだけ短いメール。オーロラ予報の急上昇、泥のシーズン中も営業しているオペレーター、予約サイトが気づく前にセールになるツアー。',
    benefits: [
      { title: 'オーロラ通知', body: 'Kpが4を超えたとき。通常、晴天の24〜48時間前。' },
      { title: '今営業中の施設', body: 'ハスキー、スノーモービル、サウナの実際の季節ウィンドウ。' },
      { title: '地元限定のヒント', body: '6月まで提携サイトに掲載されないツアー。' },
    ],
    emailPlaceholder: 'メールアドレス',
    subscribeBtn: '購読',
    subscribingBtn: '購読中…',
    successTitle: '登録完了。',
    successBody: 'ラップランドからのウェルカムメールを受信箱でご確認ください。',
    alreadyTitle: 'すでに登録済みです!',
    alreadyBody: 'すでに購読中のようです。また近いうちに。',
    footnote: 'いつでも配信停止可能。',
    errorFallback: '購読に失敗しました。もう一度お試しください。',
  },
  activityCard: {
    findBook: '探す&予約',
    planVisit: '訪問を計画する',
  },
  home: {
    metaTitle: 'LaplandActivities｜フィンランド・ラップランドの厳選北極ツアー予約',
    metaDescription: 'スノーモービルサファリ、ハスキーそり、オーロラハント、スモークサウナほか。GetYourGuideと信頼できる地元オペレーター経由で、8つのラップランドの目的地で厳選アクティビティを予約。',
    ogTitle: 'LaplandActivities｜厳選の北極体験',
    categoriesKicker: 'やること',
    categoriesH2: '冒険を選ぶ',
    categoriesLead: '北極を体験する8つの方法。カテゴリーを選び、厳選ツアーオペレーターへご案内。',
    activitiesLabel: '件のアクティビティ',
    viewAllCategories: 'すべてのカテゴリーを見る',
    gygTitle: '今週のラップランド人気ツアー',
    gygEyebrow: '今すぐ予約可能',
    featuredKicker: '厳選',
    featuredH2: 'トップ体験',
    seeAllTours: '予約可能なツアーをすべて見る',
    seasonsKicker: '一年中',
    seasonsH2: '冒険の四季',
    seasonsLead: '季節ごとにラップランドは別の国になります。',
    seasons: [
      { name: '冬', months: '11月〜3月', blurb: '深い雪、極夜、オーロラのピーク。スノーモービル、ハスキー、スモークサウナ。', temp: '-15〜-5°C' },
      { name: '春', months: '4月〜5月', blurb: '雪と日照の組み合わせ。シーズン終盤スキー、トナカイの出産、4月中旬までのオーロラ。', temp: '-5〜+5°C' },
      { name: '夏', months: '6月〜8月', blurb: '白夜は沈まない。ハイキング、カヤック、サーモン釣り、マウンテンバイク。', temp: '+10〜+25°C' },
      { name: '秋', months: '9月〜10月', blurb: 'ルスカが山々を彩る。初オーロラが戻ってくる。キノコとベリーのシーズン。', temp: '+5〜-5°C' },
    ],
    destinationsKicker: 'どこへ行くか',
    destinationsH2: '目的地',
    viewAll: 'すべてを見る',
    activitiesShort: '件',
  },
  relatedSites: {
    kicker: '#LaplandVibes ネットワーク',
    h2: '北極の旅の続きを計画する',
    lead: 'アクティビティは旅の半分にすぎません。ラップランド・ネットワークの姉妹ガイドが残りを詳しく案内します。',
    links: [
      { pre: '犬ぞりをお探しなら、', anchor: '専用ハスキーサファリガイド', post: 'がケンネル・距離・料金を比較します。' },
      { pre: '自分でアクセルを握りたいなら、ラップランド各地の', anchor: 'スノーモービルのルートと料金', post: 'をご覧ください。' },
      { pre: '新雪を求めるなら、リゾートごとの比較で', anchor: 'ラップランドでスキーをする場所', post: 'を確認しましょう。' },
      { pre: '北極の静かな一面については、', anchor: 'オーロラと国立公園', post: 'と最高のオーロラ空をご覧ください。' },
      { pre: 'そしてツアーを予約する前に、', anchor: 'ラップランドの宿泊先', post: '（イグルー・コテージ・フェルリゾート）を決めましょう。' },
    ],
  },
  faq: {
    kicker: '知っておきたいこと',
    h2: 'ラップランドのアクティビティ Q&A',
    lead: '北極圏の体験を予約する前に、旅行者が最もよく尋ねる質問。',
    items: [
      {
        q: 'ラップランドではどんなアクティビティができますか?',
        a: '冬の定番はハスキーやトナカイのそり、スノーモービルサファリ、オーロラハント、スノーシュー、クロスカントリーとアルペンスキー、アイスフィッシング、アイスフローティングです。夏には同じ原野がハイキング、カヤックやカヌー、ラフティング、マウンテンバイク、サーモンフィッシング、砂金採りの舞台に変わります。一年を通じて、スモークサウナやサーミ文化の体験は、北極圏の静かなもう一つの側面を見せてくれます。',
      },
      {
        q: '冬と夏でおすすめのアクティビティは?',
        a: '冬(11月〜3月)は雪と暗闇の季節です。スノーモービル、犬ぞり、オーロラツアーはこの条件を必要とします。夏(6月〜8月)は雪に代わって白夜が訪れ、光が完全には消えないため、ハイキング、パドリング、釣りがほぼ一日中楽しめます。春はまだ雪がありながら日照が大幅に増え、秋にはルスカの紅葉と最初のオーロラが訪れます。どちらも静かな端境期です。',
      },
      {
        q: 'ラップランドのアクティビティの費用は?',
        a: 'アクティビティ、所要時間、グループ人数によって大きく変わります。トナカイ乗車やオーロラのバスツアーのような短い共同セッションは低めの価格帯、長いハスキーサファリやガイド付きスノーモービル遠征のような数時間または貸切のツアーは高めです。後者には防寒つなぎ、ブーツ、安全装備、ガイドが含まれるためです。最新の正確な価格は、予約パートナー経由で各ツアーを開くと、確定前に表示されます。',
      },
      {
        q: 'ラップランドのアクティビティは小さな子どもに向いていますか?',
        a: '選び方次第で、多くが向いています。トナカイのそり、ハスキー牧場の見学、ゆるやかなスノーシューウォーク、そり遊び、サンタクロースとの面会は小さな子どもにぴったりです。スノーモービルは運転に年齢制限があるのが普通で(子どもはそりやトレーラーに同乗)、夜遅いオーロラハントは幼い子には長く寒くなりがちです。多くの事業者はアクティビティページに年齢制限と家族向けの選択肢を記載しているので、予約前に確認してください。',
      },
      {
        q: 'ラップランドのアクティビティは事前予約が必要ですか?',
        a: '最も混み合う時期、つまりクリスマスと年末年始、そして2〜3月のオーロラとスキーのピークは、人気のハスキーやスノーモービルツアーが埋まるため、早めの予約を。閑散期はより柔軟ですが、評価の高い事業者や少人数の出発回はそれでも先に売り切れます。事前に予約しておくと、最後の座席を争うのではなく、晴天に合わせてオーロラ計画に余裕を持たせられます。',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'アクティビティのカテゴリー｜LaplandActivities',
    metaDescription: 'カテゴリー別に北極アクティビティを閲覧。アドベンチャー、動物体験、オーロラ、ウィンタースポーツ、ウェルネス、文化、夏の冒険、食体験。',
    kicker: 'やること',
    h1: 'アクティビティのカテゴリー',
    lead: '北極を体験する8つの方法。テーマを選び、厳選オペレーターへご案内。',
    activitiesLabel: '件のアクティビティ',
    exploreAdventures: '冒険を探す',
    explore: '探す',
    gygTitle: '最も予約されているツアーを見る',
    gygEyebrow: '全カテゴリー',
  },
  categoryPage: {
    notFoundH1: 'カテゴリーが見つかりません',
    backCategories: '← カテゴリーに戻る',
    allCategoriesNav: 'すべてのカテゴリー',
    bookToursPrefix: '予約',
    activitiesCount: (n, name) => `${n}件の${name}アクティビティ`,
    comingSoon: 'このカテゴリーのアクティビティは近日公開予定。',
    gygTitlePrefix: '最も予約されている',
    gygEyebrow: '厳選オペレーター',
    browseOthers: '他のカテゴリーを見る',
    allCategoriesLink: 'すべてのカテゴリー →',
  },
  destinationsIndex: {
    metaTitle: 'ラップランドの目的地｜LaplandActivities',
    metaDescription: 'フィンランド・ラップランドの象徴的な8つの目的地: ロヴァニエミ、レヴィ、ウッラス、サーリセルカ、イナリ、ルカ、ポシオ、トルニオ。アクティビティ、オペレーター、宿泊。',
    kicker: 'どこへ行くか',
    h1: '目的地',
    lead: '8つの象徴的なラップランドの目的地、それぞれ独自の個性とオペレーターネットワーク。',
    activitiesLabel: '件のアクティビティ',
    explore: '探す',
    gygTitle: '最も予約されているラップランドのツアー',
    gygEyebrow: '全目的地',
  },
  destinationPage: {
    notFoundH1: '目的地が見つかりません',
    backDestinations: '← 目的地に戻る',
    allDestinationsNav: 'すべての目的地',
    bookActivitiesIn: 'アクティビティを予約:',
    stayIn: '宿泊:',
    activitiesShort: '件',
    mustDoKicker: '必須',
    mustDoH2: '最も予約されている体験',
    localKicker: '地元情報',
    localH2: 'インサイダーのヒント',
    operatorsLabel: '信頼できるオペレーター:',
    gygTitlePrefix: '厳選',
    gygTitleSuffix: 'ツアー',
    gygEyebrow: '今すぐ予約可能',
    allActivitiesKicker: 'すべてのアクティビティ',
    thingsToDoIn: 'やること:',
    moreSoon: '近日中に追加予定のアクティビティ:',
    sleepInPrefix: '泊まる:',
    sleepInBlurb: 'ガラスイグルー、ログキャビン、スキーインホテル。Hotels.comがベスト料金を集約。',
    compareHotels: 'ホテルを比較',
    driveYourself: '自分で運転する',
    driveYourselfBlurb: 'ラップランドは広く、レンタカーは冬タイヤ装着済み。600以上のサプライヤーを比較。',
    findBestPrice: 'ベスト価格を探す',
    keepExploringKicker: '探検を続ける',
    otherDestinationsH2: 'その他の目的地',
    allDestinations: 'すべての目的地',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'サンタクロース村は早朝に予約してクルーズバスの混雑を避けましょう。', icon: '🎅' },
        { tip: '北極圏横断証明書は郵便局で無料です。', icon: '📮' },
        { tip: 'Arktikum博物館はフィンランド最大のオーロラ展示があります。', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poroはラップランドで最も賑やかなアフタースキー。金曜に行きましょう。', icon: '🍺' },
        { tip: 'Bearhill Huskyはピーク週に数週間前から満員になります。', icon: '🐕' },
        { tip: 'オーロラ下のナイトスキーはレヴィだけ。12月/1月限定。', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'ウッラスはフィンランド有数の暗く澄んだオーロラ空。', icon: '✨' },
        { tip: 'Äkäslompoloの側は静か、Ylläsjärviの側にバーがあります。', icon: '🏔️' },
        { tip: '330kmのクロスカントリーネットワークはフィンランド屈指。3月中旬がベスト。', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Kiilopääのスモークサウナは通年営業。午後の枠を予約しましょう。', icon: '🧖' },
        { tip: 'Tankavaaraの砂金採り。見つけたものはすべて持ち帰れます。', icon: '🥇' },
        { tip: 'UKK国立公園のウィルダネスハットは無料で先着順。', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Siida博物館は最低3時間必要。サーミ語の展示も読みましょう。', icon: '🏛️' },
        { tip: 'イナリ湖のボートツアーは6月〜9月のみ運行。', icon: '⛵' },
        { tip: 'クラウドベリーのシーズンはPielpajärviトレイル沿いの7月下旬がピーク。', icon: '🫐' },
      ],
      ruka: [
        { tip: '熊観察小屋は数ヶ月前に予約完了。', icon: '🐻' },
        { tip: 'Karhunkierrosには日帰り向けの12km「リトルベア」ループがあります。', icon: '🥾' },
        { tip: 'ルカはすでに10月にスキー営業開始。フィンランド最早。', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Riisitunturiの霧氷の木は1〜3月がベスト。', icon: '🌲' },
        { tip: 'Korouomaの凍った滝へは3kmの森歩きが必要。', icon: '🧊' },
        { tip: 'Pentikアウトレットは年間を通じて30〜50%オフ。', icon: '🏺' },
      ],
      tornio: [
        { tip: '砕氷船Sampoは12月〜4月のみ運行。日程公開と同時に予約を。', icon: '🚢' },
        { tip: 'スノーキャッスルは毎年新しいテーマで再建されます。', icon: '🏰' },
        { tip: 'Green Zone GolfはラウンドにフィンランドとスウェーデンのGolf国境を越えます。', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: '当サイトについて｜LaplandActivities',
    metaDescription: 'LaplandActivitiesはLaplandVibesエコシステムのアクティビティ部門。8つのフィンランド・ラップランドの目的地で厳選した北極体験。',
    eyebrow: '当サイトについて',
    h1: 'フィンランド・ラップランドのアクティビティガイド',
    para1: 'LaplandActivitiesは#LaplandVibesエコシステムのアクティビティ部門です。フィンランド・ラップランドの宿泊、食事、自然、交通、ツアーを網羅する独立系ガイドのネットワーク。',
    para2: 'サイトは旅行者を8つの目的地の厳選した地元オペレーターへご案内します。サーリセルカのスノーモービルサファリからトルニオ川のサーモン釣りまで。すべての予約はGetYourGuide経由なので、即時確認とほとんどのツアーで24時間前まで無料キャンセル可能です。',
    pillars: [
      { title: '実在のオペレーター', text: '地元で実績のあるオペレーターを掲載し、すべての予約はGetYourGuide経由で行われます。' },
      { title: '本物の体験', text: '各アクティビティは、偽造できない細部にこだわって選んでいます。' },
      { title: '安全で信頼できる', text: 'フィンランドのアクティビティ事業者は消費者安全法の対象で、安全当局Tukesの監督を受けています。' },
      { title: '#LaplandVibesネットワーク', text: '23サイトのフィンランド・ラップランドネットワークの一部。完全な旅行計画ツールキット。' },
    ],
    affiliateH2: 'アフィリエイト開示',
    affiliateBody1: 'LaplandActivitiesはパートナーリンク経由のご予約から手数料を受け取ります。Hotels.com、GetYourGuide、EconomyBookings。これによりお客様に追加費用は発生せず、サイトを無料で維持できます。推薦は一貫して期待に応える施設とオペレーターを取り上げます。完全な開示は以下でお読みください:',
    affiliateBody2: '。',
    termsLink: '利用規約',
    contactH2: 'お問い合わせ',
    contactBody1: 'メール ',
    contactBody2: '。パートナーシップは、',
    backHome: '← ホームに戻る',
  },
  notFound: {
    metaTitle: '404｜LaplandActivities',
    h2: '北極で迷子に?',
    body: 'このページは存在しません。オーロラが動かしてしまったのかも。',
    backCta: 'ホームに戻る',
  },
};

// ---------- ESPAÑOL ----------
const es: SectionCopy = {
  nav: {
    home: 'Inicio',
    destinations: 'Destinos',
    categories: 'Categorías',
    about: 'Acerca de',
    bookCta: 'Reservar actividades',
    allDestinations: 'Todos los destinos →',
    allCategories: 'Todas las categorías →',
  },
  hero: {
    eyebrow: 'Laponia finlandesa · de la aurora al sol de medianoche',
    lead: 'Safaris en motonieve, trineo de huskies, cazas de aurora, saunas de humo y rafting bajo el sol de medianoche. Reserve directamente con operadores seleccionados a mano en Rovaniemi, Levi, Ylläs, Saariselkä y más.',
    primaryCta: 'Reservar actividades ahora',
    secondaryCta: 'Explorar destinos',
    stayNearby: 'Alójese cerca',
    stayNearbyDesc: 'Hotels.com, mejores tarifas',
    rentCar: 'Alquilar coche',
    rentCarDesc: 'Desde el aeropuerto de Rovaniemi',
    auroraTours: 'Tours de aurora',
    auroraToursDesc: 'Operadores seleccionados',
    allCategories: 'Todas las categorías',
    allCategoriesDesc: '8 formas de vivir el Ártico',
    scrollAria: 'Bajar a categorías',
  },
  summerBand: {
    eyebrow: 'Verano 2026 · reservas abiertas',
    h2: 'El verano lapón es el secreto mejor guardado.',
    lead: 'El sol de medianoche nunca se pone. Los bosques se abren. Suben los salmones y los fjells se vuelven rojos con el ruska desde agosto. La mayoría de operadores tienen disponibilidad hasta junio; en julio se acaban las mejores plazas.',
    bookCta: 'Reservar actividades de verano',
    browseCta: 'Ver guía de verano',
    imageKicker: 'Categoría verano',
    imageH3: '8 formas de sentir el sol de medianoche',
    highlights: [
      { title: 'Senderismo en fjells', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas: días largos, sin masificación.' },
      { title: 'Kayak y SUP', body: 'Islas del lago Inari, lagos del sol de medianoche: agua como un espejo hasta la 1 de la madrugada.' },
      { title: 'Pesca de salmón con mosca', body: 'El Tornionjoki y el Teno tienen su pico en junio–julio.' },
      { title: 'Tours bajo el sol de medianoche', body: 'Fotografía, recolección, MTB en los fjells, 24 horas de luz.' },
    ],
    gygTitle: 'Tours de verano que vuelan',
    gygEyebrow: 'Reservables ahora · Cancelación gratuita',
  },
  hotelsStrip: {
    kicker: 'Dónde alojarse',
    h2: 'Reserve la cama primero.',
    lead: 'Las actividades son fáciles: los operadores añaden capacidad. El alojamiento que de verdad quiere se agota con meses. Asegure la habitación y luego reserve los tours.',
    compareCta: 'Comparar todos los hoteles de Laponia',
    lodging: [
      { name: 'Iglús de cristal', blurb: 'Duerma bajo la aurora con un techo curvo de cristal. Las noches más reservadas de Laponia.' },
      { name: 'Cabañas junto al lago', blurb: 'Saunas de humo, jacuzzis a leña, embarcadero propio. Todo el año.' },
      { name: 'Resorts en fjell', blurb: 'Levi · Ylläs · Saariselkä · Ruka: ski-in/ski-out y actividades de verano.' },
      { name: 'Hoteles boutique de ciudad', blurb: 'Rovaniemi · Kemi · Ivalo: hoteles de diseño con cocina y acceso urbano.' },
      { name: 'Cabañas con sauna de humo', blurb: 'La auténtica savusauna: pequeña, oscura, ridículamente caliente.' },
    ],
    comparePrices: 'Comparar precios',
  },
  bookingCta: {
    eyebrow: 'Planifique todo el viaje',
    heading: 'Reserve actividades, alojamientos y coches en un solo sitio',
    blurb: 'En tres toques tiene su viaje a Laponia listo: operadores seleccionados a mano vía GetYourGuide, las mejores tarifas de alojamiento en Hotels.com y un coche esperando en el aeropuerto.',
    activities: 'Actividades',
    activitiesDesc: 'Safaris de huskies, motonieves, tours de aurora, pesca en hielo: confirmación instantánea por GetYourGuide.',
    browseTours: 'Ver tours',
    stayNearby: 'Alójese cerca',
    stayNearbyDesc: 'Iglús de cristal, cabañas, hoteles ski-in: reserve la cama primero, las mejores se llenan rápido.',
    compareHotels: 'Comparar hoteles',
    rentCar: 'Alquilar coche',
    rentCarDesc: 'Compare más de 600 proveedores en los aeropuertos de Rovaniemi, Kittilä, Ivalo y Kemi. Con neumáticos de invierno.',
    findBestPrice: 'Encontrar mejor precio',
    disclaimer: 'ⓘ Esta página contiene enlaces de afiliación. LaplandVibes puede obtener una comisión por sus reservas, sin coste adicional para usted.',
  },
  newsletter: {
    eyebrow: 'Boletín #LaplandVibes',
    h2: 'Reciba las ventanas de reserva que siempre se agotan.',
    lead: 'Un correo breve cuando algo merezca destacarse: picos de aurora, operadores aún abiertos en temporada media, tours que salen antes de aparecer en las webs.',
    benefits: [
      { title: 'Alertas de aurora', body: 'Cuando Kp sube por encima de 4: normalmente 24–48 h antes de cielos despejados.' },
      { title: 'Qué está abierto ahora', body: 'Ventanas estacionales reales para huskies, motonieves y saunas.' },
      { title: 'Consejos de locales', body: 'El tour que no encontrará en los partners hasta junio.' },
    ],
    emailPlaceholder: 'Su correo electrónico',
    subscribeBtn: 'Suscribirse',
    subscribingBtn: 'Uniéndose…',
    successTitle: 'Hecho.',
    successBody: 'Mire su bandeja para el mensaje de bienvenida desde Laponia.',
    alreadyTitle: '¡Ya está en la lista!',
    alreadyBody: 'Parece que ya está suscrito: nos leemos pronto.',
    footnote: 'Baja en cualquier momento.',
    errorFallback: 'No se pudo completar la suscripción. Inténtelo de nuevo.',
  },
  activityCard: {
    findBook: 'Ver y reservar',
    planVisit: 'Planifica tu visita',
  },
  home: {
    metaTitle: 'LaplandActivities: Tours árticos en Laponia',
    metaDescription: 'Safaris en motonieve, trineo de huskies, cazas de aurora, saunas de humo y más. Reserve actividades seleccionadas a mano en 8 destinos de Laponia mediante GetYourGuide.',
    ogTitle: 'LaplandActivities: Experiencias árticas seleccionadas a mano',
    categoriesKicker: 'Qué hacer',
    categoriesH2: 'Elija su aventura',
    categoriesLead: 'Ocho formas de vivir el Ártico: elija una categoría y le enviamos a los operadores seleccionados.',
    activitiesLabel: 'actividades',
    viewAllCategories: 'Ver todas las categorías',
    gygTitle: 'Tours de Laponia mejor valorados esta semana',
    gygEyebrow: 'Reservables ahora',
    featuredKicker: 'Selección a mano',
    featuredH2: 'Mejores experiencias',
    seeAllTours: 'Ver todos los tours reservables',
    seasonsKicker: 'Todo el año',
    seasonsH2: 'Cuatro estaciones de aventura',
    seasonsLead: 'Cada estación convierte Laponia en un país distinto.',
    seasons: [
      { name: 'Invierno', months: 'Nov – Mar', blurb: 'Nieve profunda, noche polar, pico de auroras. Motonieves, huskies, saunas de humo.', temp: '-15 a -5°C' },
      { name: 'Primavera', months: 'Abr – May', blurb: 'Nieve y luz. Esquí de fin de temporada, partos de renos, auroras hasta mediados de abril.', temp: '-5 a +5°C' },
      { name: 'Verano', months: 'Jun – Ago', blurb: 'El sol de medianoche no se pone. Senderismo, kayak, pesca de salmón, MTB.', temp: '+10 a +25°C' },
      { name: 'Otoño', months: 'Sep – Oct', blurb: 'El ruska tiñe los fjells. Vuelven las primeras auroras. Temporada de setas y bayas.', temp: '+5 a -5°C' },
    ],
    destinationsKicker: 'Dónde ir',
    destinationsH2: 'Destinos',
    viewAll: 'Ver todo',
    activitiesShort: 'actividades',
  },
  relatedSites: {
    kicker: 'Más de #LaplandVibes',
    h2: 'Planifica el resto de tu viaje ártico',
    lead: 'Las actividades son solo la mitad del viaje. Estas guías hermanas de nuestra red de Laponia profundizan en el resto.',
    links: [
      { pre: '¿Trineo de perros? Nuestra', anchor: 'guía dedicada de safaris en husky', post: 'compara perreras, distancias y precios.' },
      { pre: 'Si prefieres tu propio acelerador, mira las mejores', anchor: 'rutas y precios de safaris en moto de nieve', post: 'por toda Laponia.' },
      { pre: '¿Buscas nieve fresca? Descubre', anchor: 'dónde esquiar en Laponia', post: 'con comparativas estación por estación.' },
      { pre: 'Para el lado tranquilo del Ártico, lee sobre', anchor: 'auroras boreales y parques nacionales', post: 'y los mejores cielos para la aurora.' },
      { pre: 'Y antes de reservar los tours, decide', anchor: 'dónde alojarte en Laponia', post: ': iglús, cabañas y resorts de montaña.' },
    ],
  },
  faq: {
    kicker: 'Conviene saber',
    h2: 'Actividades en Laponia, respondidas',
    lead: 'Las preguntas que más hacen los viajeros antes de reservar una experiencia ártica.',
    items: [
      {
        q: '¿Qué actividades se pueden hacer en Laponia?',
        a: 'En invierno, los clásicos son los trineos de huskies y renos, los safaris en moto de nieve, la caza de auroras, las raquetas de nieve, el esquí de fondo y alpino, la pesca en hielo y el ice floating. En verano, la misma naturaleza se convierte en senderismo, kayak y canoa, rafting, bicicleta de montaña, pesca de salmón y búsqueda de oro. Todo el año, la sauna de humo y las experiencias de cultura sami muestran un lado más tranquilo del Ártico.',
      },
      {
        q: '¿Cuáles son las mejores actividades de invierno y de verano?',
        a: 'El invierno (de noviembre a marzo) es la temporada de nieve y oscuridad: las motos de nieve, los trineos de perros y los tours de auroras lo necesitan. El verano (de junio a agosto) cambia la nieve por el sol de medianoche, cuando la luz nunca desaparece del todo y el senderismo, el remo y la pesca son posibles casi a cualquier hora. La primavera aún tiene nieve con mucha más luz, y el otoño trae los colores de la ruska y las primeras auroras; ambas son temporadas intermedias más tranquilas.',
      },
      {
        q: '¿Cuánto cuestan las actividades en Laponia?',
        a: 'Varía mucho según la actividad, la duración y el tamaño del grupo. Una sesión corta y compartida, como un paseo en reno o un tour de auroras en autobús, está en la gama baja; las salidas de varias horas o privadas, como un safari largo con huskies o una expedición guiada en moto de nieve, cuestan más, en parte porque incluyen monos térmicos, botas, equipo de seguridad y un guía. Para precios actuales y exactos, abre cualquier tour a través de nuestro socio de reservas: el precio en vivo se muestra antes de confirmar.',
      },
      {
        q: '¿Las actividades de Laponia son adecuadas para niños pequeños?',
        a: 'Muchas lo son, con la elección correcta. Los paseos en trineo de renos, las visitas a granjas de huskies, los paseos suaves con raquetas, el trineo y el encuentro con Papá Noel funcionan bien para los más pequeños. La moto de nieve suele tener una edad mínima para conducir (los niños viajan en un trineo o remolque), y las cazas de auroras nocturnas pueden ser largas y frías para los más pequeños. La mayoría de los operadores indican los límites de edad y las opciones familiares en la página de la actividad, así que compruébalo antes de reservar.',
      },
      {
        q: '¿Hay que reservar las actividades de Laponia con antelación?',
        a: 'En las semanas de mayor demanda, como Navidad y Año Nuevo y el pico de auroras y esquí de febrero a marzo, conviene reservar con tiempo, ya que los tours populares de huskies y motos de nieve se llenan. En periodos más tranquilos hay más flexibilidad, pero los operadores mejor valorados y las salidas en grupo pequeño se agotan primero igualmente. Reservar con antelación también te permite dar margen al cielo despejado en los planes de auroras en lugar de competir por las últimas plazas.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Categorías de actividades · LaplandActivities',
    metaDescription: 'Explore actividades árticas por categoría: aventura, experiencias con animales, aurora boreal, deportes de invierno, bienestar, cultura, verano y gastronomía.',
    kicker: 'Qué hacer',
    h1: 'Categorías de actividades',
    lead: 'Ocho formas de vivir el Ártico: elija un hilo y le derivamos a los operadores seleccionados.',
    activitiesLabel: 'actividades',
    exploreAdventures: 'Explorar aventuras',
    explore: 'Explorar',
    gygTitle: 'Tours más reservados',
    gygEyebrow: 'En todas las categorías',
  },
  categoryPage: {
    notFoundH1: 'Categoría no encontrada',
    backCategories: '← Volver a categorías',
    allCategoriesNav: 'Todas las categorías',
    bookToursPrefix: 'Reservar',
    activitiesCount: (n, name) => `${n} actividades de ${name}`,
    comingSoon: 'Las actividades de esta categoría estarán disponibles pronto.',
    gygTitlePrefix: 'Más reservados',
    gygEyebrow: 'Operadores seleccionados',
    browseOthers: 'Explorar otras categorías',
    allCategoriesLink: 'Todas las categorías →',
  },
  destinationsIndex: {
    metaTitle: 'Destinos de Laponia · LaplandActivities',
    metaDescription: 'Ocho destinos icónicos de la Laponia finlandesa: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio y Tornio. Actividades, operadores y alojamiento.',
    kicker: 'Dónde ir',
    h1: 'Destinos',
    lead: 'Ocho destinos icónicos de Laponia, cada uno con su carácter y su red de operadores.',
    activitiesLabel: 'actividades',
    explore: 'Explorar',
    gygTitle: 'Tours de Laponia más reservados',
    gygEyebrow: 'En todos los destinos',
  },
  destinationPage: {
    notFoundH1: 'Destino no encontrado',
    backDestinations: '← Volver a destinos',
    allDestinationsNav: 'Todos los destinos',
    bookActivitiesIn: 'Reservar actividades en',
    stayIn: 'Alojarse en',
    activitiesShort: 'actividades',
    mustDoKicker: 'Imprescindible',
    mustDoH2: 'Experiencia más reservada',
    localKicker: 'Información local',
    localH2: 'Consejos de locales',
    operatorsLabel: 'Operadores de confianza en',
    gygTitlePrefix: 'Seleccionados',
    gygTitleSuffix: 'tours',
    gygEyebrow: 'Reservables ahora',
    allActivitiesKicker: 'Todas las actividades',
    thingsToDoIn: 'Qué hacer en',
    moreSoon: 'Más actividades llegarán pronto a',
    sleepInPrefix: 'Dormir en',
    sleepInBlurb: 'Iglús de cristal, cabañas, hoteles ski-in: Hotels.com agrupa las mejores tarifas.',
    compareHotels: 'Comparar hoteles',
    driveYourself: 'Conducir uno mismo',
    driveYourselfBlurb: 'Laponia es muy abierta y los alquileres ya llevan neumáticos de invierno. Compare más de 600 proveedores.',
    findBestPrice: 'Encontrar mejor precio',
    keepExploringKicker: 'Seguir explorando',
    otherDestinationsH2: 'Otros destinos',
    allDestinations: 'Todos los destinos',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Reserve el Pueblo de Papá Noel a primera hora para esquivar a los grupos de los cruceros.', icon: '🎅' },
        { tip: 'El certificado de cruce del Círculo Polar es gratis en la oficina de correos.', icon: '📮' },
        { tip: 'El Arktikum tiene la mejor exposición sobre auroras de Finlandia.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'El Hullu Poro es el après-ski más animado de Laponia, vaya un viernes.', icon: '🍺' },
        { tip: 'Bearhill Husky se llena con semanas de antelación en temporada alta.', icon: '🐕' },
        { tip: 'Esquiar de noche bajo la aurora es exclusivo de Levi, solo en dic/ene.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs tiene unos de los cielos de aurora más oscuros y despejados de Finlandia.', icon: '✨' },
        { tip: 'El lado de Äkäslompolo es más tranquilo; en Ylläsjärvi están los bares.', icon: '🏔️' },
        { tip: 'La red de 330 km de esquí de fondo es la mejor de Finlandia; mediados de marzo es ideal.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'La sauna de humo de Kiilopää abre todo el año, reserve el turno de tarde.', icon: '🧖' },
        { tip: 'Lavado de oro en Tankavaara: lo que encuentre, se lo queda.', icon: '🥇' },
        { tip: 'Las cabañas de naturaleza del Parque Nacional UKK son gratis, por orden de llegada.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'El museo Siida pide tres horas como mínimo, lea el ala en lengua sámi.', icon: '🏛️' },
        { tip: 'Los paseos en barco por el lago Inari solo operan de junio a septiembre.', icon: '⛵' },
        { tip: 'La temporada de camemoro alcanza su pico a finales de julio en el sendero de Pielpajärvi.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Los escondites para ver osos se llenan con meses de antelación.', icon: '🐻' },
        { tip: 'El Karhunkierros tiene un bucle "Oso Pequeño" de 12 km para quien no hace varios días.', icon: '🥾' },
        { tip: 'Ruka abre el esquí ya en octubre, la más temprana de Finlandia.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Los árboles cargados de tykky de Riisitunturi están mejor de enero a marzo.', icon: '🌲' },
        { tip: 'A las cascadas heladas de Korouoma se llega tras una caminata de 3 km por el bosque.', icon: '🧊' },
        { tip: 'La tienda de fábrica de Pentik tiene un 30–50 % de descuento todo el año.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'El rompehielos Sampo solo navega de dic a abr, reserve en cuanto abran las fechas.', icon: '🚢' },
        { tip: 'El SnowCastle se reconstruye cada año con una temática nueva.', icon: '🏰' },
        { tip: 'El Green Zone Golf cruza la frontera Finlandia-Suecia a mitad de recorrido.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Acerca de · LaplandActivities',
    metaDescription: 'LaplandActivities es la rama de actividades del ecosistema LaplandVibes: experiencias árticas seleccionadas a mano en ocho destinos de la Laponia finlandesa.',
    eyebrow: 'Acerca de',
    h1: 'Una guía de actividades de la Laponia finlandesa',
    para1: 'LaplandActivities es la rama de actividades del ecosistema #LaplandVibes: una red de guías independientes que cubre alojamiento, gastronomía, naturaleza, transporte y tours por la Laponia finlandesa.',
    para2: 'El sitio dirige a los viajeros a operadores locales seleccionados a mano en ocho destinos, desde safaris en motonieve en Saariselkä a pesca de salmón en el Tornionjoki. Cada reserva pasa por GetYourGuide para que tenga confirmación instantánea y cancelación gratuita hasta 24 h en la mayoría de tours.',
    pillars: [
      { title: 'Operadores reales', text: 'Presentamos operadores locales consolidados; cada reserva se gestiona a través de GetYourGuide.' },
      { title: 'Experiencias auténticas', text: 'Cada actividad se revisa por seguridad y por el tipo de detalle que no se puede fingir.' },
      { title: 'Seguro y de confianza', text: 'Los operadores de actividades en Finlandia están sujetos a la ley de seguridad del consumidor y supervisados por Tukes, la autoridad finlandesa de seguridad.' },
      { title: 'Red #LaplandVibes', text: 'Parte de una red de 23 webs sobre la Laponia finlandesa: todo lo que necesita para planificar el viaje.' },
    ],
    affiliateH2: 'Aviso de afiliación',
    affiliateBody1: 'LaplandActivities gana una comisión cuando reserva a través de enlaces de socios, Hotels.com, GetYourGuide, EconomyBookings. No le cuesta nada extra y mantiene el sitio gratuito. Recomendamos operadores y propiedades que cumplen de forma constante. Lea el aviso completo en nuestras',
    affiliateBody2: '.',
    termsLink: 'Condiciones de uso',
    contactH2: 'Contacto',
    contactBody1: 'Escriba a ',
    contactBody2: ' para colaboraciones,',
    backHome: '← Volver al inicio',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: '¿Perdido en el Ártico?',
    body: 'Esta página no existe. Quizá la aurora se la llevó.',
    backCta: 'Volver al inicio',
  },
};

// ---------- PORTUGUÊS (BR) ----------
const ptBR: SectionCopy = {
  nav: {
    home: 'Início',
    destinations: 'Destinos',
    categories: 'Categorias',
    about: 'Sobre',
    bookCta: 'Reservar atividades',
    allDestinations: 'Todos os destinos →',
    allCategories: 'Todas as categorias →',
  },
  hero: {
    eyebrow: 'Lapônia finlandesa · da aurora ao sol da meia-noite',
    lead: 'Safáris de snowmobile, trenó de huskies, caçadas de aurora, saunas a fumaça e rafting sob o sol da meia-noite. Reserve direto com operadoras escolhidas a dedo em Rovaniemi, Levi, Ylläs, Saariselkä e mais.',
    primaryCta: 'Reservar atividades agora',
    secondaryCta: 'Explorar destinos',
    stayNearby: 'Hospede-se perto',
    stayNearbyDesc: 'Hotels.com, melhores tarifas',
    rentCar: 'Alugue um carro',
    rentCarDesc: 'Saindo do aeroporto de Rovaniemi',
    auroraTours: 'Tours de aurora',
    auroraToursDesc: 'Operadoras selecionadas',
    allCategories: 'Todas as categorias',
    allCategoriesDesc: '8 formas de viver o Ártico',
    scrollAria: 'Rolar até as categorias',
  },
  summerBand: {
    eyebrow: 'Verão 2026 · reservas abertas',
    h2: 'O verão na Lapônia é o segredo mais bem guardado.',
    lead: 'O sol da meia-noite nunca se põe. As florestas se abrem. O salmão sobe e os fells ficam vermelhos com o ruska a partir de agosto. A maioria das operadoras tem boa disponibilidade até junho, em julho as melhores vagas vão embora.',
    bookCta: 'Reservar atividades de verão',
    browseCta: 'Ver guia de verão',
    imageKicker: 'Categoria verão',
    imageH3: '8 formas de sentir o sol da meia-noite',
    highlights: [
      { title: 'Trilhas em fells', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas, dias longos, sem multidão.' },
      { title: 'Caiaque e SUP', body: 'Ilhas do lago Inari, lagos do sol da meia-noite, água espelhada até 1h da manhã.' },
      { title: 'Pesca de salmão com mosca', body: 'Tornionjoki e Teno têm pico em junho–julho.' },
      { title: 'Tours sob o sol da meia-noite', body: 'Fotografia, coleta, MTB nos fells, 24 h de luz.' },
    ],
    gygTitle: 'Tours de verão vendendo rápido',
    gygEyebrow: 'Reservável agora · Cancelamento grátis',
  },
  hotelsStrip: {
    kicker: 'Onde se hospedar',
    h2: 'Reserve a cama primeiro.',
    lead: 'Atividades são fáceis, as operadoras adicionam capacidade. A hospedagem que você realmente quer esgota com meses. Garanta o quarto e depois reserve os tours.',
    compareCta: 'Comparar todos os hotéis da Lapônia',
    lodging: [
      { name: 'Iglus de vidro', blurb: 'Durma sob a aurora com teto curvo de vidro. As noites mais reservadas da Lapônia.' },
      { name: 'Cabanas à beira do lago', blurb: 'Sauna a fumaça, hidromassagem a lenha, seu próprio deque. O ano todo.' },
      { name: 'Resorts em fell', blurb: 'Levi · Ylläs · Saariselkä · Ruka, ski-in/ski-out e atividades de verão.' },
      { name: 'Boutique urbano', blurb: 'Rovaniemi · Kemi · Ivalo, hotéis-design com cozinha e acesso urbano.' },
      { name: 'Cabanas com sauna a fumaça', blurb: 'A verdadeira savusauna, pequena, escura, absurdamente quente.' },
    ],
    comparePrices: 'Comparar preços',
  },
  bookingCta: {
    eyebrow: 'Planeje tudo',
    heading: 'Reserve atividades, hospedagem e carros em um só lugar',
    blurb: 'Três cliques e sua viagem à Lapônia está resolvida, operadoras escolhidas a dedo via GetYourGuide, melhores hospedagens via Hotels.com e um carro esperando no aeroporto.',
    activities: 'Atividades',
    activitiesDesc: 'Safáris de huskies, snowmobiles, tours de aurora, pesca no gelo, confirmação imediata via GetYourGuide.',
    browseTours: 'Ver tours',
    stayNearby: 'Hospede-se perto',
    stayNearbyDesc: 'Iglus de vidro, cabanas, hotéis ski-in, reserve a cama primeiro, porque os melhores lotam rápido.',
    compareHotels: 'Comparar hotéis',
    rentCar: 'Alugue um carro',
    rentCarDesc: 'Compare 600+ fornecedores nos aeroportos de Rovaniemi, Kittilä, Ivalo e Kemi. Pneus de inverno inclusos.',
    findBestPrice: 'Achar melhor preço',
    disclaimer: 'ⓘ Esta página contém links de afiliados. O LaplandVibes pode receber comissão quando você reserva, sem custo extra para você.',
  },
  newsletter: {
    eyebrow: 'Newsletter #LaplandVibes',
    h2: 'Receba as janelas de reserva que sempre lotam.',
    lead: 'Um e-mail curto quando algo vale destacar, picos de previsão de aurora, operadoras ainda abertas na entressafra, tours em promoção antes dos sites de reservas perceberem.',
    benefits: [
      { title: 'Alertas de aurora', body: 'Quando o Kp sobe acima de 4, em geral 24–48 h antes do céu limpo.' },
      { title: 'O que está aberto agora', body: 'Janelas sazonais reais para huskies, snowmobile e sauna.' },
      { title: 'Dicas só de quem mora lá', body: 'O tour que você não acha nos sites parceiros até junho.' },
    ],
    emailPlaceholder: 'Seu e-mail',
    subscribeBtn: 'Assinar',
    subscribingBtn: 'Entrando…',
    successTitle: 'Você está dentro.',
    successBody: 'Veja sua caixa de entrada para o e-mail de boas-vindas da Lapônia.',
    alreadyTitle: 'Você já está na lista!',
    alreadyBody: 'Parece que você já assinou, até breve.',
    footnote: 'Cancele a qualquer momento.',
    errorFallback: 'Falha ao assinar. Tente de novo.',
  },
  activityCard: {
    findBook: 'Ver e reservar',
    planVisit: 'Planeje sua visita',
  },
  home: {
    metaTitle: 'LaplandActivities: Tours árticos na Lapônia',
    metaDescription: 'Safáris de snowmobile, trenó de huskies, caçadas de aurora, saunas a fumaça e mais. Reserve atividades escolhidas a dedo em 8 destinos da Lapônia via GetYourGuide.',
    ogTitle: 'LaplandActivities: Experiências árticas escolhidas a dedo',
    categoriesKicker: 'O que fazer',
    categoriesH2: 'Escolha sua aventura',
    categoriesLead: 'Oito formas de viver o Ártico, escolha uma categoria e te encaminhamos às operadoras selecionadas.',
    activitiesLabel: 'atividades',
    viewAllCategories: 'Ver todas as categorias',
    gygTitle: 'Tours mais bem avaliados desta semana',
    gygEyebrow: 'Reservável agora',
    featuredKicker: 'Curadoria',
    featuredH2: 'Experiências principais',
    seeAllTours: 'Ver todos os tours reserváveis',
    seasonsKicker: 'O ano todo',
    seasonsH2: 'Quatro estações de aventura',
    seasonsLead: 'Cada estação transforma a Lapônia em um país diferente.',
    seasons: [
      { name: 'Inverno', months: 'Nov – Mar', blurb: 'Neve profunda, noite polar, pico de aurora. Snowmobile, huskies, sauna a fumaça.', temp: '-15 a -5°C' },
      { name: 'Primavera', months: 'Abr – Mai', blurb: 'Neve e luz. Esqui de fim de temporada, parto das renas, aurora até meados de abril.', temp: '-5 a +5°C' },
      { name: 'Verão', months: 'Jun – Ago', blurb: 'O sol da meia-noite nunca se põe. Trilhas, caiaque, pesca de salmão, MTB.', temp: '+10 a +25°C' },
      { name: 'Outono', months: 'Set – Out', blurb: 'O ruska colore os fells. As primeiras auroras retornam. Temporada de cogumelos e frutas.', temp: '+5 a -5°C' },
    ],
    destinationsKicker: 'Para onde ir',
    destinationsH2: 'Destinos',
    viewAll: 'Ver todos',
    activitiesShort: 'atividades',
  },
  relatedSites: {
    kicker: 'Mais da #LaplandVibes',
    h2: 'Planeje o resto da sua viagem ártica',
    lead: 'As atividades são só metade da viagem. Estes guias irmãos da nossa rede da Lapônia aprofundam o resto.',
    links: [
      { pre: 'Trenó puxado por cães? Nosso', anchor: 'guia dedicado de safáris de husky', post: 'compara canis, distâncias e preços.' },
      { pre: 'Prefere o seu próprio acelerador, veja as melhores', anchor: 'rotas e preços de safáris de moto de neve', post: 'por toda a Lapônia.' },
      { pre: 'Atrás de neve fresca? Descubra', anchor: 'onde esquiar na Lapônia', post: 'com comparações estação por estação.' },
      { pre: 'Para o lado tranquilo do Ártico, leia sobre', anchor: 'aurora boreal e parques nacionais', post: 'e os melhores céus para a aurora.' },
      { pre: 'E antes de reservar os passeios, defina', anchor: 'onde se hospedar na Lapônia', post: ': iglus, cabanas e resorts de montanha.' },
    ],
  },
  faq: {
    kicker: 'Bom saber',
    h2: 'Atividades na Lapônia, respondidas',
    lead: 'As perguntas que os viajantes mais fazem antes de reservar uma experiência no Ártico.',
    items: [
      {
        q: 'Quais atividades dá para fazer na Lapônia?',
        a: 'No inverno, os clássicos são os trenós de huskies e renas, os safáris de moto de neve, a caça à aurora, as caminhadas com raquetes de neve, o esqui cross-country e alpino, a pesca no gelo e o ice floating. No verão, a mesma natureza vira trilha, caiaque e canoagem, rafting, mountain bike, pesca de salmão e garimpo de ouro. O ano todo, a sauna de fumaça e as experiências da cultura sami mostram um lado mais silencioso do Ártico.',
      },
      {
        q: 'Quais são as melhores atividades de inverno e de verão?',
        a: 'O inverno (de novembro a março) é a estação da neve e da escuridão: motos de neve, trenós puxados por cães e tours de aurora dependem disso. O verão (de junho a agosto) troca a neve pelo sol da meia-noite, quando a luz nunca some de vez e trilhas, remada e pesca rolam quase o dia inteiro. A primavera ainda tem neve com muito mais luz, e o outono traz as cores da ruska e as primeiras auroras, ambas são temporadas intermediárias mais tranquilas.',
      },
      {
        q: 'Quanto custam as atividades na Lapônia?',
        a: 'Varia bastante conforme a atividade, a duração e o tamanho do grupo. Uma sessão curta e compartilhada, como um passeio de rena ou um tour de aurora de ônibus, fica na faixa mais baixa; passeios de várias horas ou privativos, como um longo safári de husky ou uma expedição guiada de moto de neve, custam mais, em parte porque incluem macacões térmicos, botas, equipamento de segurança e um guia. Para preços atuais e exatos, abra qualquer passeio pelo nosso parceiro de reservas, o preço ao vivo aparece antes de você confirmar.',
      },
      {
        q: 'As atividades da Lapônia são adequadas para crianças pequenas?',
        a: 'Muitas são, com a escolha certa. Passeios de trenó de renas, visitas a fazendas de huskies, caminhadas leves com raquetes de neve, descidas de trenó e o encontro com o Papai Noel funcionam bem para os pequenos. A moto de neve costuma ter idade mínima para dirigir (as crianças vão em um trenó ou reboque), e as caças à aurora tarde da noite podem ser longas e frias para os menores. A maioria dos operadores indica limites de idade e opções para a família na página da atividade, então confira antes de reservar.',
      },
      {
        q: 'Precisa reservar as atividades da Lapônia com antecedência?',
        a: 'Para as semanas mais movimentadas, Natal e Ano Novo, e o pico de aurora e esqui de fevereiro a março, sim, reserve com bastante antecedência, pois os tours populares de husky e moto de neve lotam. Em períodos mais tranquilos há mais flexibilidade, mas os operadores mais bem avaliados e as saídas em grupo pequeno esgotam primeiro mesmo assim. Reservar antes também permite dar margem para o céu limpo nos planos de aurora, em vez de disputar as últimas vagas.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Categorias de atividades · LaplandActivities',
    metaDescription: 'Veja atividades árticas por categoria, aventura, experiências com animais, aurora boreal, esportes de inverno, bem-estar, cultura, verão e gastronomia.',
    kicker: 'O que fazer',
    h1: 'Categorias de atividades',
    lead: 'Oito formas de viver o Ártico, escolha um caminho e te encaminhamos às operadoras selecionadas.',
    activitiesLabel: 'atividades',
    exploreAdventures: 'Explorar aventuras',
    explore: 'Explorar',
    gygTitle: 'Tours mais reservados',
    gygEyebrow: 'Em todas as categorias',
  },
  categoryPage: {
    notFoundH1: 'Categoria não encontrada',
    backCategories: '← Voltar para Categorias',
    allCategoriesNav: 'Todas as categorias',
    bookToursPrefix: 'Reservar',
    activitiesCount: (n, name) => `${n} atividades de ${name}`,
    comingSoon: 'Atividades em breve para esta categoria.',
    gygTitlePrefix: 'Mais reservados',
    gygEyebrow: 'Operadoras selecionadas',
    browseOthers: 'Ver outras categorias',
    allCategoriesLink: 'Todas as categorias →',
  },
  destinationsIndex: {
    metaTitle: 'Destinos da Lapônia · LaplandActivities',
    metaDescription: 'Oito destinos icônicos da Lapônia finlandesa: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio e Tornio. Atividades, operadoras e hospedagem.',
    kicker: 'Para onde ir',
    h1: 'Destinos',
    lead: 'Oito destinos icônicos da Lapônia, cada um com seu caráter e sua rede de operadoras.',
    activitiesLabel: 'atividades',
    explore: 'Explorar',
    gygTitle: 'Tours mais reservados da Lapônia',
    gygEyebrow: 'Em todos os destinos',
  },
  destinationPage: {
    notFoundH1: 'Destino não encontrado',
    backDestinations: '← Voltar aos destinos',
    allDestinationsNav: 'Todos os destinos',
    bookActivitiesIn: 'Reservar atividades em',
    stayIn: 'Hospedar em',
    activitiesShort: 'atividades',
    mustDoKicker: 'Imperdível',
    mustDoH2: 'Experiência mais reservada',
    localKicker: 'Informação local',
    localH2: 'Dicas de quem mora ali',
    operatorsLabel: 'Operadoras confiáveis em',
    gygTitlePrefix: 'Selecionados',
    gygTitleSuffix: 'tours',
    gygEyebrow: 'Reservável agora',
    allActivitiesKicker: 'Todas as atividades',
    thingsToDoIn: 'O que fazer em',
    moreSoon: 'Mais atividades em breve para',
    sleepInPrefix: 'Dormir em',
    sleepInBlurb: 'Iglus de vidro, cabanas, hotéis ski-in, Hotels.com agrega as melhores tarifas.',
    compareHotels: 'Comparar hotéis',
    driveYourself: 'Dirija você mesmo',
    driveYourselfBlurb: 'A Lapônia tem estradas vazias e os aluguéis já vêm com pneus de inverno. Compare 600+ fornecedores.',
    findBestPrice: 'Achar melhor preço',
    keepExploringKicker: 'Continuar explorando',
    otherDestinationsH2: 'Outros destinos',
    allDestinations: 'Todos os destinos',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Reserve a Vila do Papai Noel logo de manhã para escapar das excursões dos cruzeiros.', icon: '🎅' },
        { tip: 'O certificado de cruzamento do Círculo Polar é grátis nos correios.', icon: '📮' },
        { tip: 'O Arktikum tem a melhor exposição sobre aurora da Finlândia.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'O Hullu Poro é o après-ski mais agitado da Lapônia, vá numa sexta.', icon: '🍺' },
        { tip: 'A Bearhill Husky lota com semanas de antecedência na alta temporada.', icon: '🐕' },
        { tip: 'Esquiar à noite sob a aurora é só em Levi, apenas dez/jan.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs tem alguns dos céus de aurora mais escuros e limpos da Finlândia.', icon: '✨' },
        { tip: 'O lado de Äkäslompolo é mais tranquilo; os bares ficam em Ylläsjärvi.', icon: '🏔️' },
        { tip: 'A rede de 330 km de cross-country é a melhor da Finlândia; meados de março é o auge.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'A sauna a fumaça de Kiilopää funciona o ano todo, reserve o horário da tarde.', icon: '🧖' },
        { tip: 'Garimpo de ouro em Tankavaara: o que você achar, é seu.', icon: '🥇' },
        { tip: 'As cabanas selvagens do Parque Nacional UKK são grátis, por ordem de chegada.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'O museu Siida pede no mínimo três horas, leia a ala em língua sámi.', icon: '🏛️' },
        { tip: 'Os passeios de barco no lago Inari só rodam de junho a setembro.', icon: '⛵' },
        { tip: 'A temporada de amora-ártica tem pico no fim de julho na trilha de Pielpajärvi.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Os esconderijos de observação de ursos lotam com meses de antecedência.', icon: '🐻' },
        { tip: 'O Karhunkierros tem um circuito "Ursinho" de 12 km para quem não faz vários dias.', icon: '🥾' },
        { tip: 'Ruka abre o esqui já em outubro, a mais cedo da Finlândia.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'As árvores cobertas de tykky em Riisitunturi ficam melhores de jan a mar.', icon: '🌲' },
        { tip: 'Chega-se às cachoeiras congeladas de Korouoma após 3 km de caminhada na floresta.', icon: '🧊' },
        { tip: 'A loja de fábrica da Pentik tem 30–50% de desconto o ano todo.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'O quebra-gelo Sampo navega só de dez a abr, reserve assim que as datas abrirem.', icon: '🚢' },
        { tip: 'O SnowCastle é reconstruído todo ano com um tema novo.', icon: '🏰' },
        { tip: 'O Green Zone Golf cruza a fronteira Finlândia-Suécia no meio da partida.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Sobre · LaplandActivities',
    metaDescription: 'LaplandActivities é o ramo de atividades do ecossistema LaplandVibes, experiências árticas escolhidas a dedo em oito destinos da Lapônia finlandesa.',
    eyebrow: 'Sobre',
    h1: 'Um guia de atividades da Lapônia finlandesa',
    para1: 'LaplandActivities é o ramo de atividades do ecossistema #LaplandVibes, uma rede de guias independentes cobrindo hospedagem, comida, natureza, transporte e tours pela Lapônia finlandesa.',
    para2: 'O site direciona viajantes a operadoras locais escolhidas a dedo em oito destinos, de safáris de snowmobile em Saariselkä à pesca de salmão no Tornionjoki. Toda reserva passa pelo GetYourGuide, com confirmação imediata e cancelamento grátis em até 24 h na maioria dos tours.',
    pillars: [
      { title: 'Operadoras reais', text: 'Destacamos operadoras locais consolidadas; toda reserva passa pelo GetYourGuide.' },
      { title: 'Experiências autênticas', text: 'Cada atividade é escolhida pelo nível de detalhe que não dá para fingir.' },
      { title: 'Seguro e confiável', text: 'As operadoras de atividades na Finlândia estão sujeitas à lei de segurança do consumidor e são supervisionadas pela Tukes, a autoridade finlandesa de segurança.' },
      { title: 'Rede #LaplandVibes', text: 'Parte de uma rede de 23 sites sobre a Lapônia, kit completo de planejamento da viagem.' },
    ],
    affiliateH2: 'Aviso de afiliados',
    affiliateBody1: 'O LaplandActivities recebe comissão quando você reserva por links de parceiros, Hotels.com, GetYourGuide, EconomyBookings. Sem custo extra para você e ajuda a manter o site gratuito. Recomendamos operadoras e hospedagens que entregam de forma consistente. Leia o aviso completo nos nossos',
    affiliateBody2: '.',
    termsLink: 'Termos de Uso',
    contactH2: 'Contato',
    contactBody1: 'Escreva para ',
    contactBody2: ', para parcerias,',
    backHome: '← Voltar para o início',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: 'Perdido no Ártico?',
    body: 'Esta página não existe. Talvez a aurora a tenha levado embora.',
    backCta: 'Voltar para o início',
  },
};

// ---------- 简体中文 ----------
const zhCN: SectionCopy = {
  nav: {
    home: '首页',
    destinations: '目的地',
    categories: '分类',
    about: '关于',
    bookCta: '预订活动',
    allDestinations: '全部目的地 →',
    allCategories: '全部分类 →',
  },
  hero: {
    eyebrow: '芬兰拉普兰 · 从北极光到午夜阳光',
    lead: '雪地摩托安全游、哈士奇雪橇、极光追逐、烟桑拿、午夜阳光下的漂流。直接向罗瓦涅米、莱维、于拉斯、萨利色尔卡等地的精选运营商预订。',
    primaryCta: '立即预订活动',
    secondaryCta: '浏览目的地',
    stayNearby: '就近住宿',
    stayNearbyDesc: 'Hotels.com，最优价',
    rentCar: '租车',
    rentCarDesc: '罗瓦涅米机场出发',
    auroraTours: '极光行程',
    auroraToursDesc: '精选运营商',
    allCategories: '全部分类',
    allCategoriesDesc: '8种体验北极的方式',
    scrollAria: '滚动到分类',
  },
  summerBand: {
    eyebrow: '2026年夏季 · 现在可订',
    h2: '夏天的拉普兰是最被低估的秘密。',
    lead: '午夜阳光永不落下,森林敞开,八月起鲑鱼洄游、山地泛红。多数运营商在六月仍有充足名额,七月后好位置便所剩无几。',
    bookCta: '预订夏季活动',
    browseCta: '查看夏季指南',
    imageKicker: '夏季分类',
    imageH3: '8种感受午夜阳光的方式',
    highlights: [
      { title: '山地徒步', body: 'Pallas-Yllästunturi、Karhunkierros、Hetta-Pallas，长日,无人潮。' },
      { title: '皮划艇与桨板', body: '伊纳里湖群岛、午夜阳光湖泊，镜面般的水面持续到凌晨一点。' },
      { title: '鲑鱼飞钓', body: 'Tornionjoki与Teno河流的高峰在6–7月。' },
      { title: '午夜阳光行程', body: '摄影、采集、山地骑行，24小时日光。' },
    ],
    gygTitle: '热卖中的夏季行程',
    gygEyebrow: '当前可订 · 免费取消',
  },
  hotelsStrip: {
    kicker: '住在哪里',
    h2: '先订好住宿。',
    lead: '活动容易安排,运营商会扩容。您真正想住的地方提前数月就订满。先锁定住宿,再订行程。',
    compareCta: '比较所有拉普兰酒店',
    lodging: [
      { name: '玻璃冰屋', blurb: '在弧形玻璃顶下入眠,共赏极光。拉普兰最热预订的房型。' },
      { name: '湖畔木屋', blurb: '烟桑拿、柴火热水池、独立码头。全年可订。' },
      { name: '山地度假村', blurb: '莱维 · 于拉斯 · 萨利色尔卡 · 鲁卡，ski-in/ski-out,夏季活动一应俱全。' },
      { name: '城市精品酒店', blurb: '罗瓦涅米 · 凯米 · 伊瓦洛，带厨房的设计酒店,出门即可入城。' },
      { name: '烟桑拿木屋', blurb: '真正的savusauna体验，小、暗、热到不可思议。' },
    ],
    comparePrices: '比较价格',
  },
  bookingCta: {
    eyebrow: '一次性规划全程',
    heading: '在一处搞定活动、住宿与租车',
    blurb: '三次点击就能搞定您的拉普兰行程，通过GetYourGuide预订精选运营商,Hotels.com锁定最优住宿,以及机场已备好的租车。',
    activities: '活动',
    activitiesDesc: '哈士奇之旅、雪地摩托、极光行程、冰钓，通过GetYourGuide即时确认。',
    browseTours: '浏览行程',
    stayNearby: '就近住宿',
    stayNearbyDesc: '玻璃冰屋、木屋、ski-in酒店，先订住宿,因为最佳房源最快被抢光。',
    compareHotels: '比较酒店',
    rentCar: '租车',
    rentCarDesc: '比较罗瓦涅米、基蒂莱、伊瓦洛、凯米机场的600+家供应商。已配冬季轮胎。',
    findBestPrice: '查找最优价',
    disclaimer: 'ⓘ 本页面包含联盟链接。您通过这些链接预订时,LaplandVibes可能获得佣金，您本人不会产生额外费用。',
  },
  newsletter: {
    eyebrow: '#LaplandVibes 通讯',
    h2: '获取那些总是售罄的预订窗口。',
    lead: '简短邮件,只在有值得标注的事情时发送，极光预报飙升、季节中仍开放的运营商,以及预订网站尚未察觉就开卖的行程。',
    benefits: [
      { title: '极光预警', body: 'Kp突破4级时通知，通常在晴空到来前24–48小时。' },
      { title: '当前可参加什么', body: '哈士奇、雪地摩托与桑拿的真实季节窗口。' },
      { title: '只有本地人知道的建议', body: '六月之前合作站点上还看不到的行程。' },
    ],
    emailPlaceholder: '您的电子邮箱',
    subscribeBtn: '订阅',
    subscribingBtn: '订阅中…',
    successTitle: '订阅成功。',
    successBody: '请查收来自拉普兰的欢迎邮件。',
    alreadyTitle: '您已在名单中!',
    alreadyBody: '看起来您已经订阅了，回头见。',
    footnote: '随时可以退订。',
    errorFallback: '订阅失败,请重试。',
  },
  activityCard: {
    findBook: '查看并预订',
    planVisit: '规划行程',
  },
  home: {
    metaTitle: 'LaplandActivities: 在芬兰拉普兰预订精选北极行程',
    metaDescription: '雪地摩托安全游、哈士奇雪橇、极光追逐、烟桑拿等。在拉普兰8个目的地通过GetYourGuide与可信本地运营商预订精选活动。',
    ogTitle: 'LaplandActivities: 精选北极体验',
    categoriesKicker: '可以做什么',
    categoriesH2: '选择您的冒险',
    categoriesLead: '8种体验北极的方式，选一个分类,我们把您引向精选运营商。',
    activitiesLabel: '项目',
    viewAllCategories: '查看全部分类',
    gygTitle: '本周拉普兰评分最高的行程',
    gygEyebrow: '当前可订',
    featuredKicker: '精选',
    featuredH2: '顶级体验',
    seeAllTours: '查看全部可订行程',
    seasonsKicker: '四季皆可',
    seasonsH2: '四季的冒险',
    seasonsLead: '每个季节都把拉普兰变成另一个国度。',
    seasons: [
      { name: '冬季', months: '11月 – 3月', blurb: '厚雪、极夜、极光高峰。雪地摩托、哈士奇、烟桑拿。', temp: '-15至-5°C' },
      { name: '春季', months: '4月 – 5月', blurb: '雪与白昼并存。季末滑雪、驯鹿产仔,极光持续到4月中旬。', temp: '-5至+5°C' },
      { name: '夏季', months: '6月 – 8月', blurb: '午夜阳光永不落。徒步、皮划艇、鲑鱼钓、山地车。', temp: '+10至+25°C' },
      { name: '秋季', months: '9月 – 10月', blurb: 'ruska染红山地,首场极光回归,蘑菇与浆果旺季。', temp: '+5至-5°C' },
    ],
    destinationsKicker: '该去哪里',
    destinationsH2: '目的地',
    viewAll: '查看全部',
    activitiesShort: '项目',
  },
  relatedSites: {
    kicker: '#LaplandVibes 网络',
    h2: '规划你北极之旅的其余部分',
    lead: '活动只是旅程的一半。我们拉普兰网络中的这些姊妹指南深入介绍其余内容。',
    links: [
      { pre: '想玩狗拉雪橇？我们的', anchor: '哈士奇雪橇专属指南', post: '会比较犬舍、路程和价格。' },
      { pre: '更想自己掌控油门?查看拉普兰各地最佳的', anchor: '雪地摩托路线与价格', post: '。' },
      { pre: '追逐新雪？通过逐个雪场的对比了解', anchor: '在拉普兰哪里滑雪', post: '。' },
      { pre: '想体验北极宁静的一面，请阅读', anchor: '北极光与国家公园', post: '以及最佳的极光天空。' },
      { pre: '在预订行程之前，先确定', anchor: '在拉普兰住哪里', post: ':冰屋、木屋和山地度假村。' },
    ],
  },
  faq: {
    kicker: '出行须知',
    h2: '拉普兰活动常见问题',
    lead: '预订北极体验前,旅客最常问的问题。',
    items: [
      {
        q: '在拉普兰可以做哪些活动?',
        a: '冬季的经典项目有哈士奇和驯鹿雪橇、雪地摩托、追极光、雪鞋徒步、越野与高山滑雪、冰钓和漂浮体验。到了夏季,同一片荒野则变成徒步、皮划艇与独木舟、激流漂流、山地骑行、钓鲑鱼和淘金。一年四季,烟熏桑拿和萨米文化体验都展现着北极更安静的一面。',
      },
      {
        q: '冬季和夏季分别有哪些最佳活动?',
        a: '冬季(11 月至 3 月)是雪与黑暗的季节:雪地摩托、狗拉雪橇和极光团都离不开它。夏季(6 月至 8 月)以午夜阳光取代积雪,光线始终不会完全消退,徒步、划船和垂钓几乎可以全天进行。春季仍有积雪,白昼却长得多;秋季带来 ruska 红叶和入秋后的第一波极光,两者都是更清静的过渡季。',
      },
      {
        q: '拉普兰的活动费用是多少?',
        a: '费用因活动、时长和团队规模差别很大。像驯鹿乘骑或极光巴士团这样的短时拼团项目价格较低;长时间或包团的行程,例如长程哈士奇雪橇或带向导的雪地摩托远征,价格较高,部分原因是其中已含保暖连体服、雪靴、安全装备和向导。如需最新准确价格,可通过我们的预订合作伙伴打开任意行程,确认前会显示实时价格。',
      },
      {
        q: '拉普兰的活动适合幼童吗?',
        a: '选对项目的话,很多都适合。驯鹿雪橇、参观哈士奇农场、轻松的雪鞋漫步、滑雪橇和拜访圣诞老人都很适合小朋友。雪地摩托通常对驾驶者有最低年龄要求(儿童可坐在雪橇或拖车里同行),而深夜追极光对幼童来说可能太久太冷。多数运营商会在活动页面注明年龄限制和家庭选项,预订前请先查看。',
      },
      {
        q: '拉普兰的活动需要提前预订吗?',
        a: '在最繁忙的几周,也就是圣诞与新年,以及 2 至 3 月的极光和滑雪旺季,请尽早预订,因为热门的哈士奇和雪地摩托行程会被订满。淡季时更灵活,但评价最高的运营商和小团出发仍会最先售罄。提前预订还能让你为极光计划留出晴天的余地,而不必去抢最后的名额。',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: '活动分类 · LaplandActivities',
    metaDescription: '按分类浏览北极活动，冒险、与动物互动、北极光、冬季运动、养生、文化、夏季冒险与美食体验。',
    kicker: '可以做什么',
    h1: '活动分类',
    lead: '8种体验北极的方式，选一条路线,我们把您引向精选运营商。',
    activitiesLabel: '项目',
    exploreAdventures: '探索冒险',
    explore: '探索',
    gygTitle: '预订最多的行程',
    gygEyebrow: '覆盖全部分类',
  },
  categoryPage: {
    notFoundH1: '分类未找到',
    backCategories: '← 返回分类',
    allCategoriesNav: '全部分类',
    bookToursPrefix: '预订',
    activitiesCount: (n, name) => `${name}活动共${n}个`,
    comingSoon: '该分类的活动即将上线。',
    gygTitlePrefix: '预订最多',
    gygEyebrow: '精选运营商',
    browseOthers: '查看其他分类',
    allCategoriesLink: '全部分类 →',
  },
  destinationsIndex: {
    metaTitle: '拉普兰目的地 · LaplandActivities',
    metaDescription: '芬兰拉普兰的八个标志性目的地:罗瓦涅米、莱维、于拉斯、萨利色尔卡、伊纳里、鲁卡、波西奥与托尔尼奥。活动、运营商与住宿。',
    kicker: '该去哪里',
    h1: '目的地',
    lead: '拉普兰八个标志性目的地,每个都有自己的气质与运营商网络。',
    activitiesLabel: '项目',
    explore: '探索',
    gygTitle: '拉普兰预订最多的行程',
    gygEyebrow: '覆盖全部目的地',
  },
  destinationPage: {
    notFoundH1: '目的地未找到',
    backDestinations: '← 返回目的地',
    allDestinationsNav: '全部目的地',
    bookActivitiesIn: '预订活动:',
    stayIn: '住在:',
    activitiesShort: '项目',
    mustDoKicker: '必玩',
    mustDoH2: '预订最多的体验',
    localKicker: '本地情报',
    localH2: '本地人的建议',
    operatorsLabel: '可信运营商:',
    gygTitlePrefix: '精选',
    gygTitleSuffix: '行程',
    gygEyebrow: '当前可订',
    allActivitiesKicker: '全部活动',
    thingsToDoIn: '可以做什么:',
    moreSoon: '即将上线更多活动:',
    sleepInPrefix: '住在:',
    sleepInBlurb: '玻璃冰屋、木屋、ski-in酒店，Hotels.com汇总最优价。',
    compareHotels: '比较酒店',
    driveYourself: '自驾',
    driveYourselfBlurb: '拉普兰道路宽敞,租车默认配冬季轮胎。比较600+家供应商。',
    findBestPrice: '查找最优价',
    keepExploringKicker: '继续探索',
    otherDestinationsH2: '其他目的地',
    allDestinations: '全部目的地',
    tipsByDestination: {
      rovaniemi: [
        { tip: '一早就去圣诞老人村，避开邮轮团的人潮。', icon: '🎅' },
        { tip: '在邮局可免费领取北极圈穿越证书。', icon: '📮' },
        { tip: 'Arktikum拥有芬兰最出色的极光主题展。', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro是拉普兰最热闹的雪后酒吧，周五去最对。', icon: '🍺' },
        { tip: '旺季时Bearhill Husky提前数周就订满。', icon: '🐕' },
        { tip: '极光下的夜间滑雪是莱维独有，仅限12至1月。', icon: '⛷️' },
      ],
      yllas: [
        { tip: '于拉斯拥有芬兰数一数二黑暗清澈的极光夜空。', icon: '✨' },
        { tip: 'Äkäslompolo一侧更安静，酒吧都在Ylläsjärvi一侧。', icon: '🏔️' },
        { tip: '330公里的越野滑雪道是芬兰最好的，三月中旬最佳。', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Kiilopää烟桑拿全年开放，建议预订下午场。', icon: '🧖' },
        { tip: 'Tankavaara淘金，淘到的都归你。', icon: '🥇' },
        { tip: 'UKK国家公园的荒野小屋免费，先到先得。', icon: '🏕️' },
      ],
      inari: [
        { tip: '参观Siida博物馆至少留三小时，别错过萨米语展厅。', icon: '🏛️' },
        { tip: '伊纳里湖游船仅在6至9月运营。', icon: '⛵' },
        { tip: '云莓季在7月底于Pielpajärvi步道达到高峰。', icon: '🫐' },
      ],
      ruka: [
        { tip: '观熊隐蔽屋提前数月就订满。', icon: '🐻' },
        { tip: 'Karhunkierros设有12公里的"小熊"环线，适合不做多日徒步的人。', icon: '🥾' },
        { tip: '鲁卡10月便开放滑雪，芬兰最早。', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Riisitunturi的雾凇树景在1至3月最佳。', icon: '🌲' },
        { tip: '前往Korouoma冰瀑需先走3公里林间小路。', icon: '🧊' },
        { tip: 'Pentik工厂直营店全年30–50%折扣。', icon: '🏺' },
      ],
      tornio: [
        { tip: '破冰船Sampo仅在12至4月航行，一开放预订就尽快下单。', icon: '🚢' },
        { tip: 'SnowCastle每年以全新主题重建。', icon: '🏰' },
        { tip: 'Green Zone Golf球场会在一轮中跨越芬兰-瑞典边境。', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: '关于 · LaplandActivities',
    metaDescription: 'LaplandActivities是LaplandVibes生态中的活动分支，覆盖芬兰拉普兰八个目的地的精选北极体验。',
    eyebrow: '关于',
    h1: '一份芬兰拉普兰活动指南',
    para1: 'LaplandActivities是#LaplandVibes生态中的活动分支，一个独立指南网络,涵盖芬兰拉普兰的住宿、美食、自然、交通与行程。',
    para2: '本网站把旅客引向八个目的地的精选本地运营商,从萨利色尔卡的雪地摩托安全游到Tornionjoki的鲑鱼钓鱼。所有预订均通过GetYourGuide完成,可获得即时确认,并在大多数行程上享有24小时之前免费取消。',
    pillars: [
      { title: '真实的运营商', text: '我们展示扎根本地的成熟运营商，所有预订均通过 GetYourGuide 完成。' },
      { title: '真实体验', text: '每个活动都因无法伪装的细节而入选。' },
      { title: '安全可信', text: '芬兰的活动运营商受消费者安全法约束，并由芬兰安全监管机构 Tukes 监督。' },
      { title: '#LaplandVibes网络', text: '芬兰拉普兰23站网络的一部分，完整的行程规划工具箱。' },
    ],
    affiliateH2: '联盟披露',
    affiliateBody1: '当您通过合作伙伴链接预订时(Hotels.com、GetYourGuide、EconomyBookings),LaplandActivities将获得佣金。这不会让您多花钱,并维持本站免费。我们仅推荐持续兑现承诺的运营商与房源。请在我们的',
    affiliateBody2: '查阅完整披露。',
    termsLink: '使用条款',
    contactH2: '联系',
    contactBody1: '请发送邮件至 ',
    contactBody2: '，关于合作,',
    backHome: '← 返回首页',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities',
    h2: '在北极迷路了?',
    body: '此页面不存在。也许是极光把它带走了。',
    backCta: '返回首页',
  },
};

// ---------- KOREAN ----------
const ko: SectionCopy = {
  nav: {
    home: '홈', destinations: '목적지', categories: '카테고리', about: '소개',
    bookCta: '액티비티 예약', allDestinations: '모든 목적지 →', allCategories: '모든 카테고리 →',
  },
  hero: {
    eyebrow: '라플란드 · 오로라부터 백야까지',
    lead: '스노모빌 사파리, 허스키 썰매, 오로라 헌트, 스모크 사우나, 백야 아래의 강 래프팅. 로바니에미, 레비, 윌래스, 사리셀카 등에서 엄선한 운영자에게 직접 예약하세요.',
    primaryCta: '지금 액티비티 예약', secondaryCta: '목적지 둘러보기',
    stayNearby: '인근 숙소', stayNearbyDesc: 'Hotels.com, 최저가',
    rentCar: '렌터카', rentCarDesc: '로바니에미 공항에서',
    auroraTours: '오로라 투어', auroraToursDesc: '엄선한 운영자',
    allCategories: '모든 카테고리', allCategoriesDesc: '북극을 체험하는 8가지 방법',
    scrollAria: '카테고리로 스크롤',
  },
  summerBand: {
    eyebrow: '2026년 여름 · 지금 예약 가능',
    h2: '라플란드의 여름은 가장 잘 알려지지 않은 비밀입니다.',
    lead: '백야는 결코 지지 않습니다. 숲이 열립니다. 연어가 거슬러 오르고, 8월부터 펠 산맥은 루스카로 붉게 물듭니다. 대부분의 운영자는 6월까지 폭넓은 가용성이 있지만, 7월이 되면 가장 좋은 시간은 모두 매진됩니다.',
    bookCta: '여름 액티비티 예약', browseCta: '여름 가이드 둘러보기',
    imageKicker: '여름 카테고리', imageH3: '백야를 느끼는 8가지 방법',
    highlights: [
      { title: '펠 트레킹', body: '팔라스-윌래스툰투리, 카르훈키에로스, 헤타-팔라스, 긴 하루, 인파 없음.' },
      { title: '카약과 SUP', body: '이나리 호수의 섬들, 백야의 호수들, 새벽 1시까지 거울 같은 수면.' },
      { title: '플라이 연어 낚시', body: '토르니오요키와 테노 강의 연어 시즌은 6-7월에 절정.' },
      { title: '백야 투어', body: '사진, 채집, 펠 산악 자전거, 24시간 햇빛.' },
    ],
    gygTitle: '빠르게 팔리고 있는 여름 투어', gygEyebrow: '지금 예약 가능 · 무료 취소',
  },
  hotelsStrip: {
    kicker: '어디에 묵을지', h2: '먼저 방을 잡으세요.',
    lead: '액티비티는 쉽습니다, 대부분의 운영자는 자리를 추가합니다. 정작 원하시는 숙소는 몇 달 전에 매진됩니다. 방을 먼저 잡고 그 다음에 투어를 예약하세요.',
    compareCta: '모든 라플란드 호텔 비교',
    lodging: [
      { name: '글래스 이글루', blurb: '곡면 유리 천장으로 오로라 아래서 잠들기. 라플란드에서 가장 많이 예약되는 숙소.' },
      { name: '호숫가 로그 캐빈', blurb: '스모크 사우나, 장작 핫텁, 전용 부두. 연중 운영.' },
      { name: '펠 리조트', blurb: '레비 · 윌래스 · 사리셀카 · 루카, 스키인/스키아웃과 여름 액티비티.' },
      { name: '부티크 시티', blurb: '로바니에미 · 케미 · 이발로, 주방이 있는 디자인 호텔, 도심 접근성.' },
      { name: '스모크 사우나 캐빈', blurb: '진짜 사부사우나 체험, 작고, 어둡고, 말도 안 되게 뜨거움.' },
    ],
    comparePrices: '가격 비교',
  },
  bookingCta: {
    eyebrow: '전체 여행 계획', heading: '액티비티, 숙소, 렌터카를 한 곳에서 예약',
    blurb: '세 번의 탭이면 라플란드 여행이 정리됩니다, GetYourGuide의 엄선한 투어 운영자, Hotels.com의 최고 숙박 특가, 공항에서 대기 중인 렌터카.',
    activities: '액티비티', activitiesDesc: '허스키 사파리, 스노모빌, 오로라 투어, 빙어 낚시, GetYourGuide 즉시 확정.',
    browseTours: '투어 둘러보기',
    stayNearby: '인근 숙소', stayNearbyDesc: '글래스 이글루, 로그 캐빈, 스키인 호텔, 좋은 곳은 빨리 매진되니 방을 먼저 잡으세요.',
    compareHotels: '호텔 비교',
    rentCar: '렌터카', rentCarDesc: '로바니에미, 키틸레, 이발로, 케미 공항에서 600여 공급업체 비교. 윈터 타이어 포함.',
    findBestPrice: '최저가 찾기',
    disclaimer: 'ⓘ 이 페이지는 제휴 링크를 포함합니다. LaplandVibes는 예약 시 수수료를 받을 수 있으며, 추가 비용은 없습니다.',
  },
  newsletter: {
    eyebrow: '#LaplandVibes 뉴스레터', h2: '항상 매진되는 예약 윈도우를 받아보세요.',
    lead: '알릴 가치가 있을 때만 짧은 메일, 오로라 예보 급등, 진흙철에도 운영 중인 운영자, 예약 사이트가 알아채기 전에 할인되는 투어.',
    benefits: [
      { title: '오로라 알림', body: 'Kp 지수가 4를 넘을 때, 보통 맑은 하늘 24-48시간 전.' },
      { title: '지금 운영 중', body: '허스키, 스노모빌, 사우나의 실제 시즌 윈도우.' },
      { title: '현지인만 아는 팁', body: '6월까지는 파트너 사이트에서 찾을 수 없는 투어.' },
    ],
    emailPlaceholder: '이메일 주소', subscribeBtn: '구독하기', subscribingBtn: '구독 중…',
    successTitle: '구독 완료.', successBody: '라플란드의 환영 메일을 확인해 주세요.',
    alreadyTitle: '이미 구독 중이십니다!', alreadyBody: '이미 구독되어 있는 것 같습니다, 곧 다시 인사드리겠습니다.',
    footnote: '언제든지 구독 해지 가능합니다.', errorFallback: '구독에 실패했습니다. 다시 시도해 주세요.',
  },
  activityCard: { findBook: '찾아서 예약', planVisit: '방문 계획하기' },
  home: {
    metaTitle: 'LaplandActivities: 라플란드의 엄선한 북극 투어 예약',
    metaDescription: '스노모빌 사파리, 허스키 썰매, 오로라 헌트, 스모크 사우나 등. 8개 라플란드 목적지의 엄선한 액티비티를 GetYourGuide와 신뢰할 수 있는 현지 운영자를 통해 예약하세요.',
    ogTitle: 'LaplandActivities: 엄선한 북극 체험',
    categoriesKicker: '무엇을 할까', categoriesH2: '어드벤처를 선택하세요',
    categoriesLead: '북극을 체험하는 8가지 방법, 카테고리를 고르면 엄선한 투어 운영자로 안내해드립니다.',
    activitiesLabel: '액티비티', viewAllCategories: '모든 카테고리 보기',
    gygTitle: '이번 주 최고 평점의 라플란드 투어', gygEyebrow: '지금 예약 가능',
    featuredKicker: '엄선', featuredH2: '최고의 체험', seeAllTours: '예약 가능한 모든 투어 보기',
    seasonsKicker: '연중', seasonsH2: '네 계절의 어드벤처', seasonsLead: '계절마다 라플란드는 전혀 다른 나라가 됩니다.',
    seasons: [
      { name: '겨울', months: '11월 – 3월', blurb: '깊은 눈, 극야, 절정의 오로라. 스노모빌, 허스키, 스모크 사우나.', temp: '-15 ~ -5°C' },
      { name: '봄', months: '4월 – 5월', blurb: '눈과 햇빛. 늦봄 스키, 순록 출산, 4월 중순까지의 오로라.', temp: '-5 ~ +5°C' },
      { name: '여름', months: '6월 – 8월', blurb: '백야는 지지 않습니다. 트레킹, 카약, 연어 낚시, 산악 자전거.', temp: '+10 ~ +25°C' },
      { name: '가을', months: '9월 – 10월', blurb: '루스카가 펠을 물들입니다. 첫 오로라가 돌아옵니다. 버섯과 베리 시즌.', temp: '+5 ~ -5°C' },
    ],
    destinationsKicker: '어디로 갈까', destinationsH2: '목적지', viewAll: '전체 보기', activitiesShort: '액티비티',
  },
  relatedSites: {
    kicker: '#LaplandVibes 네트워크',
    h2: '북극 여행의 나머지도 계획하세요',
    lead: '액티비티는 여행의 절반일 뿐입니다. 라플란드 네트워크의 자매 가이드가 나머지를 자세히 안내합니다.',
    links: [
      { pre: '개썰매를 찾으세요? 저희', anchor: '허스키 사파리 전용 가이드', post: '가 견사, 거리, 가격을 비교합니다.' },
      { pre: '직접 스로틀을 잡고 싶다면 라플란드 전역의 최고의', anchor: '스노모빌 사파리 루트와 가격', post: '을 확인하세요.' },
      { pre: '신설을 찾고 있나요? 리조트별 비교로', anchor: '라플란드에서 스키 타는 곳', post: '을 알아보세요.' },
      { pre: '북극의 고요한 면을 원한다면', anchor: '오로라와 국립공원', post: ' 그리고 최고의 오로라 하늘에 대해 읽어보세요.' },
      { pre: '그리고 투어를 예약하기 전에', anchor: '라플란드에서 묵을 곳', post: '(이글루, 통나무집, 펠 리조트)을 정하세요.' },
    ],
  },
  faq: {
    kicker: '알아두면 좋은 점',
    h2: '라플란드 액티비티 Q&A',
    lead: '북극 체험을 예약하기 전에 여행자들이 가장 많이 묻는 질문.',
    items: [
      {
        q: '라플란드에서는 어떤 액티비티를 할 수 있나요?',
        a: '겨울의 대표 활동은 허스키와 순록 썰매, 스노모빌 사파리, 오로라 헌팅, 스노슈잉, 크로스컨트리와 알파인 스키, 얼음낚시, 아이스 플로팅입니다. 여름이면 같은 황야가 하이킹, 카약과 카누, 래프팅, 산악자전거, 연어낚시, 사금 채취의 무대로 바뀝니다. 사계절 내내 스모크 사우나와 사미 문화 체험은 북극의 조용한 또 다른 면을 보여줍니다.',
      },
      {
        q: '겨울과 여름의 최고 액티비티는 무엇인가요?',
        a: '겨울(11월~3월)은 눈과 어둠의 계절입니다. 스노모빌, 개썰매, 오로라 투어 모두 이 조건이 필요합니다. 여름(6월~8월)은 눈 대신 백야가 찾아와 빛이 완전히 사라지지 않아 하이킹, 패들링, 낚시를 거의 하루 종일 즐길 수 있습니다. 봄은 여전히 눈이 있으면서 햇빛은 훨씬 길고, 가을은 루스카 단풍과 첫 오로라를 가져옵니다, 둘 다 더 한산한 비수기입니다.',
      },
      {
        q: '라플란드 액티비티 비용은 얼마인가요?',
        a: '액티비티, 소요 시간, 그룹 규모에 따라 크게 달라집니다. 순록 타기나 오로라 버스 투어처럼 짧은 공동 세션은 낮은 가격대이고, 긴 허스키 사파리나 가이드 동반 스노모빌 원정처럼 여러 시간 또는 프라이빗 투어는 더 비쌉니다. 방한복, 부츠, 안전 장비, 가이드가 포함되기 때문입니다. 최신 정확한 가격은 예약 파트너를 통해 투어를 열면 확정 전에 실시간 가격이 표시됩니다.',
      },
      {
        q: '라플란드 액티비티는 어린아이에게 적합한가요?',
        a: '잘 고르면 많은 활동이 적합합니다. 순록 썰매, 허스키 농장 방문, 완만한 스노슈 산책, 썰매 타기, 산타클로스 만나기는 어린아이에게 잘 맞습니다. 스노모빌은 대개 운전 최소 연령이 있고(아이들은 썰매나 트레일러에 함께 탑승), 늦은 밤 오로라 헌팅은 어린아이에게 길고 추울 수 있습니다. 대부분의 업체가 액티비티 페이지에 연령 제한과 가족 옵션을 표시하니 예약 전에 확인하세요.',
      },
      {
        q: '라플란드 액티비티는 미리 예약해야 하나요?',
        a: '가장 붐비는 시기, 크리스마스와 새해, 그리고 2~3월 오로라와 스키 성수기, 에는 인기 있는 허스키와 스노모빌 투어가 마감되므로 미리 예약하세요. 한산한 시기에는 더 유연하지만, 평이 좋은 업체와 소규모 출발은 여전히 먼저 매진됩니다. 미리 예약하면 마지막 자리를 두고 경쟁하는 대신 맑은 하늘에 맞춰 오로라 계획에 여유를 둘 수도 있습니다.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: '액티비티 카테고리 · LaplandActivities',
    metaDescription: '카테고리별 북극 액티비티, 어드벤처, 동물 체험, 오로라, 겨울 스포츠, 웰니스, 문화, 여름 액티비티, 음식.',
    kicker: '무엇을 할까', h1: '액티비티 카테고리',
    lead: '북극을 체험하는 8가지 방법, 주제를 고르면 엄선한 운영자로 안내해드립니다.',
    activitiesLabel: '액티비티', exploreAdventures: '어드벤처 탐색', explore: '둘러보기',
    gygTitle: '가장 많이 예약된 투어 둘러보기', gygEyebrow: '모든 카테고리에서',
  },
  categoryPage: {
    notFoundH1: '카테고리를 찾을 수 없음', backCategories: '← 카테고리로 돌아가기',
    allCategoriesNav: '모든 카테고리', bookToursPrefix: '예약:',
    activitiesCount: (n, name) => `${n}개의 ${name} 액티비티`,
    comingSoon: '이 카테고리의 액티비티는 곧 추가됩니다.',
    gygTitlePrefix: '인기', gygEyebrow: '엄선한 운영자',
    browseOthers: '다른 카테고리 둘러보기', allCategoriesLink: '모든 카테고리 →',
  },
  destinationsIndex: {
    metaTitle: '라플란드 목적지 · LaplandActivities',
    metaDescription: '라플란드의 8개 대표 목적지: 로바니에미, 레비, 윌래스, 사리셀카, 이나리, 루카, 포시오, 토르니오. 액티비티, 운영자, 숙박.',
    kicker: '어디로 갈까', h1: '목적지',
    lead: '8개의 대표적인 라플란드 목적지, 각각 고유한 개성과 운영자 네트워크를 갖추고 있습니다.',
    activitiesLabel: '액티비티', explore: '둘러보기',
    gygTitle: '가장 많이 예약된 라플란드 투어', gygEyebrow: '모든 목적지에서',
  },
  destinationPage: {
    notFoundH1: '목적지를 찾을 수 없음', backDestinations: '← 목적지로 돌아가기',
    allDestinationsNav: '모든 목적지', bookActivitiesIn: '액티비티 예약:',
    stayIn: '숙박:', activitiesShort: '액티비티',
    mustDoKicker: '필수 체험', mustDoH2: '가장 많이 예약된 체험',
    localKicker: '현지 정보', localH2: '인사이더 팁',
    operatorsLabel: '신뢰할 수 있는 운영자:',
    gygTitlePrefix: '엄선한', gygTitleSuffix: '투어', gygEyebrow: '지금 예약 가능',
    allActivitiesKicker: '모든 액티비티',
    thingsToDoIn: '에서 할 일 -',
    moreSoon: '추가 액티비티가 곧 -',
    sleepInPrefix: '에서 숙박', sleepInBlurb: '글래스 이글루, 로그 캐빈, 스키인 호텔, Hotels.com이 최저가를 모아드립니다.',
    compareHotels: '호텔 비교',
    driveYourself: '직접 운전', driveYourselfBlurb: '라플란드는 광활하며 렌터카는 이미 윈터 타이어가 장착되어 있습니다. 600여 공급업체 비교.',
    findBestPrice: '최저가 찾기',
    keepExploringKicker: '계속 탐색', otherDestinationsH2: '다른 목적지', allDestinations: '모든 목적지',
    tipsByDestination: {
      rovaniemi: [
        { tip: '크루즈 버스 인파를 피하려면 산타클로스 마을은 이른 아침에 예약하세요.', icon: '🎅' },
        { tip: '북극권 횡단 증명서는 우체국에서 무료입니다.', icon: '📮' },
        { tip: 'Arktikum에는 라플란드 최고의 오로라 전시가 있습니다.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro는 라플란드에서 가장 시끌벅적한 애프터 스키, 금요일에 가세요.', icon: '🍺' },
        { tip: 'Bearhill Husky는 성수기에 몇 주 전에 매진됩니다.', icon: '🐕' },
        { tip: '오로라 아래의 야간 스키는 레비에서만, 12-1월에만.', icon: '⛷️' },
      ],
      yllas: [
        { tip: '윌래스는 라플란드에서 손꼽히게 어둡고 맑은 오로라 하늘을 자랑합니다.', icon: '✨' },
        { tip: '아카슬롬폴로 쪽이 더 조용하고, 윌래스예르비에는 술집이 있습니다.', icon: '🏔️' },
        { tip: '330km의 크로스컨트리 코스망은 라플란드 최고, 3월 중순이 최적기.', icon: '🎿' },
      ],
      saariselka: [
        { tip: '키일로패 스모크 사우나는 연중 운영, 오후 시간대를 예약하세요.', icon: '🧖' },
        { tip: '탕카바라 사금 채취, 찾은 것은 모두 가져갑니다.', icon: '🥇' },
        { tip: 'UKK 국립공원 황야 오두막은 무료, 선착순.', icon: '🏕️' },
      ],
      inari: [
        { tip: '시이다 박물관은 최소 3시간, 사미어 전시관도 꼭 읽어보세요.', icon: '🏛️' },
        { tip: '이나리 호수 보트 투어는 6-9월에만 운영.', icon: '⛵' },
        { tip: '진들딸기 시즌은 7월 말 피엘파예르비 길에서 절정.', icon: '🫐' },
      ],
      ruka: [
        { tip: '곰 관찰 동굴은 몇 달 전에 매진됩니다.', icon: '🐻' },
        { tip: '카르훈키에로스에는 당일 하이커용 12km "리틀 베어" 루프가 있습니다.', icon: '🥾' },
        { tip: '루카는 이미 10월에 스키 시즌을 시작, 라플란드 최초.', icon: '⛷️' },
      ],
      posio: [
        { tip: '리시툰투리의 튀키 눈 나무는 1-3월이 최고.', icon: '🌲' },
        { tip: '코로우오마의 얼어붙은 폭포까지 3km 숲길.', icon: '🧊' },
        { tip: 'Pentik 아울렛은 연중 30-50% 할인.', icon: '🏺' },
      ],
      tornio: [
        { tip: '쇄빙선 Sampo는 12-4월에만 운영, 예약 시작 즉시 예약하세요.', icon: '🚢' },
        { tip: 'SnowCastle은 매년 새 테마로 재건됩니다.', icon: '🏰' },
        { tip: 'Green Zone Golf는 라운드 중 핀란드-스웨덴 국경을 넘습니다.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: '소개 · LaplandActivities',
    metaDescription: 'LaplandActivities는 #LaplandVibes 생태계의 액티비티 거점, 8개 라플란드 목적지의 엄선한 북극 체험.',
    eyebrow: '소개', h1: '라플란드 액티비티 가이드',
    para1: 'LaplandActivities는 #LaplandVibes 생태계의 액티비티 거점, 라플란드의 숙박, 음식, 자연, 교통, 투어를 다루는 독립 가이드 네트워크입니다.',
    para2: '이 사이트는 8개 목적지에서 엄선한 현지 운영자로 여행자를 안내합니다, 사리셀카의 스노모빌 사파리부터 토르니오요키의 연어 낚시까지. 모든 예약은 GetYourGuide를 통해 이루어져 즉시 확정과 대부분 24시간 전 무료 취소가 제공됩니다.',
    pillars: [
      { title: '실제 운영자', text: '현지에서 자리 잡은 운영자를 소개하며, 모든 예약은 GetYourGuide를 통해 진행됩니다.' },
      { title: '진정한 체험', text: '각 액티비티는 위조할 수 없는 세부사항을 기준으로 선정했습니다.' },
      { title: '안전과 신뢰', text: '핀란드의 액티비티 업체는 소비자 안전법의 적용을 받으며, 핀란드 안전 당국 Tukes의 감독을 받습니다.' },
      { title: '#LaplandVibes 네트워크', text: '23개 사이트의 라플란드 네트워크의 일부, 완전한 여행 계획 도구.' },
    ],
    affiliateH2: '제휴 공시',
    affiliateBody1: 'LaplandActivities는 파트너 링크(Hotels.com, GetYourGuide, EconomyBookings)를 통해 예약 시 수수료를 받습니다. 추가 비용은 없으며, 사이트는 무료로 유지됩니다. 추천은 일관된 서비스를 제공하는 운영자와 숙소만 포함합니다. 전체 공시는',
    affiliateBody2: '에서 확인하세요.',
    termsLink: '이용 약관', contactH2: '연락처',
    contactBody1: '이메일: ', contactBody2: ', 제휴 문의:',
    backHome: '← 홈으로 돌아가기',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities', h2: '북극에서 길을 잃으셨나요?',
    body: '이 페이지는 존재하지 않습니다. 아마 오로라가 옮겼나 봅니다.',
    backCta: '홈으로 돌아가기',
  },
};

// ---------- FRENCH ----------
const fr: SectionCopy = {
  nav: {
    home: 'Accueil', destinations: 'Destinations', categories: 'Catégories', about: 'À propos',
    bookCta: 'Réserver des activités', allDestinations: 'Toutes les destinations →', allCategories: 'Toutes les catégories →',
  },
  hero: {
    eyebrow: 'Laponie finlandaise · Des aurores au soleil de minuit',
    lead: "Safaris en motoneige, traîneau de huskies, chasse aux aurores, saunas à fumée, rafting sous le soleil de minuit. Réservez directement auprès d'opérateurs choisis avec soin à Rovaniemi, Levi, Ylläs, Saariselkä et au-delà.",
    primaryCta: 'Réserver maintenant', secondaryCta: 'Parcourir les destinations',
    stayNearby: 'Hébergement à proximité', stayNearbyDesc: 'Hotels.com, meilleurs tarifs',
    rentCar: 'Louer une voiture', rentCarDesc: 'Depuis l\'aéroport de Rovaniemi',
    auroraTours: 'Tours aurores', auroraToursDesc: 'Opérateurs choisis avec soin',
    allCategories: 'Toutes les catégories', allCategoriesDesc: '8 façons de vivre l\'Arctique',
    scrollAria: 'Faire défiler vers les catégories',
  },
  summerBand: {
    eyebrow: 'Été 2026 · réservations ouvertes',
    h2: "L'été en Laponie est le secret le mieux gardé.",
    lead: "Le soleil de minuit ne se couche jamais. Les forêts s'ouvrent. Le saumon remonte les rivières et les fjells virent au rouge avec le ruska dès août. La plupart des opérateurs ont encore beaucoup de disponibilité jusqu'en juin, en juillet, les meilleurs créneaux sont déjà partis.",
    bookCta: "Réserver des activités d'été", browseCta: "Voir le guide d'été",
    imageKicker: "Catégorie été", imageH3: "8 façons de vivre le soleil de minuit",
    highlights: [
      { title: 'Randonnée en fjell', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas, longues journées, pas de foule.' },
      { title: 'Kayak & SUP', body: 'Îles du lac Inari, lacs au soleil de minuit, eau lisse comme un miroir jusqu\'à 1 h du matin.' },
      { title: 'Pêche au saumon à la mouche', body: 'Les montaisons de saumon du Tornionjoki et du Teno culminent en juin-juillet.' },
      { title: 'Tours au soleil de minuit', body: 'Photographie, cueillette, VTT en fjell, lumière 24 h sur 24.' },
    ],
    gygTitle: "Les tours d'été qui partent vite", gygEyebrow: 'Réservable maintenant · Annulation gratuite',
  },
  hotelsStrip: {
    kicker: 'Où séjourner', h2: "Réservez d'abord le lit.",
    lead: "Les activités, c'est facile, la plupart des opérateurs ajoutent des places. L'hébergement que vous voulez vraiment se réserve des mois à l'avance. Verrouillez la chambre, puis réservez les visites.",
    compareCta: 'Comparer tous les hôtels de Laponie',
    lodging: [
      { name: 'Igloos de verre', blurb: 'Dormez sous les aurores à travers un toit de verre bombé. Les nuitées les plus réservées de Laponie.' },
      { name: 'Chalets en rondins au bord du lac', blurb: 'Sauna à fumée, bain chaud au feu de bois, ponton privé. Toute l\'année.' },
      { name: 'Resorts en fjell', blurb: 'Levi · Ylläs · Saariselkä · Ruka, ski au pied et activités d\'été.' },
      { name: 'Boutique en ville', blurb: 'Rovaniemi · Kemi · Ivalo, hôtels design avec cuisine et accès au centre.' },
      { name: 'Cabanes sauna à fumée', blurb: 'La vraie expérience savusauna, petite, sombre, ridiculement chaude.' },
    ],
    comparePrices: 'Comparer les prix',
  },
  bookingCta: {
    eyebrow: 'Organisez tout le voyage', heading: 'Activités, séjours et voitures au même endroit',
    blurb: "Trois clics et votre voyage en Laponie est réglé, opérateurs choisis avec soin via GetYourGuide, les meilleures offres d'hébergement via Hotels.com, et une voiture qui vous attend à l'aéroport.",
    activities: 'Activités', activitiesDesc: 'Safaris husky, motoneiges, tours aurores, pêche sur glace, confirmation immédiate via GetYourGuide.',
    browseTours: 'Voir les tours',
    stayNearby: 'Hébergement à proximité', stayNearbyDesc: 'Igloos de verre, chalets en rondins, hôtels ski-in, réservez le lit d\'abord, les meilleurs partent vite.',
    compareHotels: 'Comparer les hôtels',
    rentCar: 'Louer une voiture', rentCarDesc: 'Comparez plus de 600 loueurs aux aéroports de Rovaniemi, Kittilä, Ivalo et Kemi. Pneus hiver inclus.',
    findBestPrice: 'Meilleur prix',
    disclaimer: 'ⓘ Cette page contient des liens affiliés. LaplandVibes peut percevoir une commission sur les réservations, sans coût supplémentaire pour vous.',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes', h2: 'Recevez les fenêtres de réservation qui partent toujours.',
    lead: "Un e-mail court quand il y a quelque chose à signaler, pics de prévision auroral, opérateurs encore ouverts à la saison des boues, tours en promo avant que les sites de réservation ne le remarquent.",
    benefits: [
      { title: 'Alertes aurores', body: 'Quand le Kp dépasse 4, généralement 24-48 h avant un ciel dégagé.' },
      { title: 'Ce qui est ouvert', body: 'Les vraies fenêtres saisonnières pour huskies, motoneiges et saunas.' },
      { title: 'Conseils d\'initiés', body: 'Le tour introuvable sur les sites partenaires avant juin.' },
    ],
    emailPlaceholder: 'Votre adresse e-mail', subscribeBtn: "S'abonner", subscribingBtn: 'Inscription…',
    successTitle: 'Vous y êtes.', successBody: "Vérifiez votre boîte mail pour un message de bienvenue de Laponie.",
    alreadyTitle: 'Déjà inscrit·e !', alreadyBody: "Il semble que vous soyez déjà abonné·e, à très vite.",
    footnote: 'Désinscription à tout moment.', errorFallback: "L'inscription a échoué. Veuillez réessayer.",
  },
  activityCard: { findBook: 'Trouver et réserver', planVisit: 'Préparez votre visite' },
  home: {
    metaTitle: 'LaplandActivities: tours arctiques en Laponie',
    metaDescription: 'Safaris en motoneige, traîneau de huskies, chasse aux aurores, saunas à fumée, etc. Réservez des activités dans 8 destinations de Laponie via GetYourGuide.',
    ogTitle: 'LaplandActivities: expériences arctiques choisies avec soin',
    categoriesKicker: 'Que faire', categoriesH2: 'Choisissez votre aventure',
    categoriesLead: '8 façons de vivre l\'Arctique, choisissez une catégorie et nous vous orientons vers des opérateurs choisis avec soin.',
    activitiesLabel: 'activités', viewAllCategories: 'Voir toutes les catégories',
    gygTitle: 'Tours de Laponie les mieux notés cette semaine', gygEyebrow: 'Réservable maintenant',
    featuredKicker: 'Sélectionné', featuredH2: 'Expériences phares', seeAllTours: 'Voir tous les tours réservables',
    seasonsKicker: 'Toute l\'année', seasonsH2: 'Quatre saisons d\'aventure', seasonsLead: 'Chaque saison transforme la Laponie en un pays différent.',
    seasons: [
      { name: 'Hiver', months: 'nov. – mars', blurb: 'Neige épaisse, nuits polaires, pic des aurores. Motoneiges, huskies, saunas à fumée.', temp: '-15 à -5 °C' },
      { name: 'Printemps', months: 'avr. – mai', blurb: 'Neige et lumière du jour. Ski tardif, mise bas des rennes, aurores jusqu\'à mi-avril.', temp: '-5 à +5 °C' },
      { name: 'Été', months: 'juin – août', blurb: 'Le soleil de minuit ne se couche pas. Randonnée, kayak, pêche au saumon, VTT.', temp: '+10 à +25 °C' },
      { name: 'Automne', months: 'sept. – oct.', blurb: 'Le ruska colore les fjells. Retour des premières aurores. Saison des champignons et des baies.', temp: '+5 à -5 °C' },
    ],
    destinationsKicker: 'Où aller', destinationsH2: 'Destinations', viewAll: 'Voir tout', activitiesShort: 'activités',
  },
  relatedSites: {
    kicker: 'Plus de #LaplandVibes',
    h2: 'Planifiez le reste de votre voyage arctique',
    lead: 'Les activités ne sont que la moitié du voyage. Ces guides frères de notre réseau lapon approfondissent le reste.',
    links: [
      { pre: 'Envie de traîneau à chiens ? Notre', anchor: 'guide dédié aux safaris en husky', post: 'compare chenils, distances et prix.' },
      { pre: 'Vous préférez votre propre accélérateur, voyez les meilleurs', anchor: 'itinéraires et prix des safaris en motoneige', post: 'à travers la Laponie.' },
      { pre: 'À la recherche de neige fraîche ? Découvrez', anchor: 'où skier en Laponie', post: 'avec des comparatifs station par station.' },
      { pre: 'Pour le côté tranquille de l\'Arctique, lisez sur les', anchor: 'aurores boréales et parcs nationaux', post: 'et les meilleurs ciels pour l\'aurore.' },
      { pre: 'Et avant de réserver les excursions, choisissez', anchor: 'où loger en Laponie', post: ' : igloos, chalets et stations de fjell.' },
    ],
  },
  faq: {
    kicker: 'Bon à savoir',
    h2: 'Activités en Laponie, vos questions',
    lead: 'Les questions que les voyageurs posent le plus avant de réserver une expérience arctique.',
    items: [
      {
        q: 'Quelles activités peut-on faire en Laponie ?',
        a: 'En hiver, les classiques sont les traîneaux à chiens et à rennes, les safaris en motoneige, les chasses aux aurores, les raquettes, le ski de fond et alpin, la pêche blanche et le flottement sur glace. En été, la même nature se prête à la randonnée, au kayak et au canoë, au rafting, au VTT, à la pêche au saumon et à l’orpaillage. Toute l’année, le sauna à fumée et les expériences de culture sami révèlent une facette plus calme de l’Arctique.',
      },
      {
        q: 'Quelles sont les meilleures activités d’hiver et d’été ?',
        a: 'L’hiver (de novembre à mars) est la saison de la neige et de l’obscurité : motoneiges, traîneaux à chiens et tours d’aurores en dépendent. L’été (de juin à août) échange la neige contre le soleil de minuit, lorsque la lumière ne disparaît jamais totalement et que la randonnée, la pagaie et la pêche se pratiquent presque à toute heure. Le printemps garde de la neige avec bien plus de jour, et l’automne apporte les couleurs de la ruska et les premières aurores, deux intersaisons plus tranquilles.',
      },
      {
        q: 'Combien coûtent les activités en Laponie ?',
        a: 'Cela varie beaucoup selon l’activité, la durée et la taille du groupe. Une courte session partagée, comme une balade en renne ou un tour d’aurores en bus, se situe en bas de l’échelle ; les sorties de plusieurs heures ou privées, comme un long safari en husky ou une expédition guidée en motoneige, coûtent davantage, notamment parce qu’elles incluent combinaisons chaudes, bottes, équipement de sécurité et un guide. Pour des prix actuels et exacts, ouvrez n’importe quelle sortie via notre partenaire de réservation, le prix en direct s’affiche avant de confirmer.',
      },
      {
        q: 'Les activités en Laponie conviennent-elles aux jeunes enfants ?',
        a: 'Beaucoup le sont, avec le bon choix. Les balades en traîneau de rennes, les visites de ferme de huskies, les douces sorties en raquettes, la luge et la rencontre avec le Père Noël conviennent bien aux jeunes enfants. La motoneige a généralement un âge minimum pour conduire (les enfants montent dans un traîneau ou une remorque), et les chasses aux aurores tardives peuvent être longues et froides pour les tout-petits. La plupart des prestataires indiquent les limites d’âge et les options familiales sur la page de l’activité, vérifiez donc avant de réserver.',
      },
      {
        q: 'Faut-il réserver les activités en Laponie à l’avance ?',
        a: 'Pour les semaines les plus chargées, Noël et le Nouvel An, ainsi que le pic d’aurores et de ski de février à mars, oui, réservez bien à l’avance, car les tours de huskies et de motoneige populaires se remplissent. En période plus calme, vous avez plus de souplesse, mais les prestataires les mieux notés et les départs en petit groupe se remplissent quand même en premier. Réserver à l’avance permet aussi d’intégrer une marge pour le ciel dégagé dans vos plans d’aurores plutôt que de disputer les dernières places.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Catégories d\'activités · LaplandActivities',
    metaDescription: 'Parcourez les activités arctiques par catégorie, aventure, animaux, aurores, sports d\'hiver, bien-être, culture, été et gastronomie.',
    kicker: 'Que faire', h1: 'Catégories d\'activités',
    lead: '8 façons de vivre l\'Arctique, choisissez un fil et nous vous orientons vers des opérateurs choisis avec soin.',
    activitiesLabel: 'activités', exploreAdventures: 'Découvrir les aventures', explore: 'Découvrir',
    gygTitle: 'Parcourez les tours les plus réservés', gygEyebrow: 'Toutes catégories',
  },
  categoryPage: {
    notFoundH1: 'Catégorie introuvable', backCategories: '← Retour aux catégories',
    allCategoriesNav: 'Toutes les catégories', bookToursPrefix: 'Réserver',
    activitiesCount: (n, name) => `${n} activités ${name.toLowerCase()}`,
    comingSoon: 'Les activités pour cette catégorie arrivent bientôt.',
    gygTitlePrefix: 'Les plus réservées', gygEyebrow: 'Opérateurs choisis avec soin',
    browseOthers: 'Parcourir les autres catégories', allCategoriesLink: 'Toutes les catégories →',
  },
  destinationsIndex: {
    metaTitle: 'Destinations de Laponie · LaplandActivities',
    metaDescription: 'Huit destinations emblématiques de Laponie finlandaise : Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio et Tornio. Activités, opérateurs et hébergement.',
    kicker: 'Où aller', h1: 'Destinations',
    lead: 'Huit destinations emblématiques de Laponie, chacune avec son caractère et son réseau d\'opérateurs.',
    activitiesLabel: 'activités', explore: 'Découvrir',
    gygTitle: 'Tours de Laponie les plus réservés', gygEyebrow: 'Toutes destinations',
  },
  destinationPage: {
    notFoundH1: 'Destination introuvable', backDestinations: '← Retour aux destinations',
    allDestinationsNav: 'Toutes les destinations', bookActivitiesIn: 'Réserver des activités à',
    stayIn: 'Séjourner à', activitiesShort: 'activités',
    mustDoKicker: 'À ne pas manquer', mustDoH2: 'L\'expérience la plus réservée',
    localKicker: 'Info locale', localH2: 'Conseils d\'initiés',
    operatorsLabel: 'Opérateurs de confiance à',
    gygTitlePrefix: 'Tours', gygTitleSuffix: 'sélectionnés', gygEyebrow: 'Réservable maintenant',
    allActivitiesKicker: 'Toutes les activités',
    thingsToDoIn: 'choses à faire à', moreSoon: 'Plus d\'activités bientôt pour',
    sleepInPrefix: 'Dormir à', sleepInBlurb: 'Igloos de verre, chalets en rondins, hôtels ski-in, Hotels.com agrège les meilleurs tarifs.',
    compareHotels: 'Comparer les hôtels',
    driveYourself: 'Conduisez vous-même', driveYourselfBlurb: 'La Laponie est vaste et les locations sont déjà équipées de pneus hiver. Comparez plus de 600 loueurs.',
    findBestPrice: 'Meilleur prix',
    keepExploringKicker: 'Continuer à explorer', otherDestinationsH2: 'Autres destinations', allDestinations: 'Toutes les destinations',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Réservez le village du Père Noël tôt le matin pour éviter la foule des bus de croisière.', icon: '🎅' },
        { tip: 'Le certificat de passage du cercle polaire est gratuit au bureau de poste.', icon: '📮' },
        { tip: 'Arktikum présente l\'exposition d\'aurores la plus complète de Finlande.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro est l\'après-ski le plus animé de Laponie, allez-y un vendredi.', icon: '🍺' },
        { tip: 'Bearhill Husky est complet plusieurs semaines à l\'avance en haute saison.', icon: '🐕' },
        { tip: 'Le ski nocturne sous les aurores est unique à Levi, uniquement en déc./janv.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs offre parmi les ciels d\'aurores les plus sombres et dégagés de Finlande.', icon: '✨' },
        { tip: 'Le côté Äkäslompolo est plus calme ; les bars sont à Ylläsjärvi.', icon: '🏔️' },
        { tip: 'Le réseau de 330 km de pistes de fond est le meilleur de Finlande ; mi-mars idéal.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'Le sauna à fumée de Kiilopää est ouvert toute l\'année, réservez le créneau de l\'après-midi.', icon: '🧖' },
        { tip: 'Orpaillage à Tankavaara, tout ce que vous trouvez vous appartient.', icon: '🥇' },
        { tip: 'Les cabanes sauvages du parc national d\'Urho Kekkonen sont gratuites, premier arrivé premier servi.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Comptez au moins trois heures au musée Siida, lisez aussi l\'aile en langue same.', icon: '🏛️' },
        { tip: 'Les croisières sur le lac Inari ne roulent que de juin à septembre.', icon: '⛵' },
        { tip: 'La saison des plaquebières culmine fin juillet sur le sentier Pielpajärvi.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Les affûts d\'observation d\'ours sont complets des mois à l\'avance.', icon: '🐻' },
        { tip: 'Le Karhunkierros propose une boucle « Petit Ours » de 12 km pour ceux qui ne font pas plusieurs jours.', icon: '🥾' },
        { tip: 'Ruka ouvre les pistes de ski dès octobre, la plus précoce de Finlande.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Les arbres tykky du Riisitunturi sont à leur meilleur de janvier à mars.', icon: '🌲' },
        { tip: 'Les cascades gelées de Korouoma se rejoignent après 3 km de marche en forêt.', icon: '🧊' },
        { tip: 'Le magasin d\'usine Pentik affiche 30-50 % toute l\'année.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'Le brise-glace Sampo ne navigue que de décembre à avril, réservez dès l\'ouverture.', icon: '🚢' },
        { tip: 'Le SnowCastle est reconstruit chaque année avec un nouveau thème.', icon: '🏰' },
        { tip: 'Le Green Zone Golf traverse la frontière Finlande-Suède en plein parcours.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'À propos · LaplandActivities',
    metaDescription: 'LaplandActivities est le pôle activités de l\'écosystème #LaplandVibes, expériences arctiques choisies avec soin dans huit destinations de Laponie finlandaise.',
    eyebrow: 'À propos', h1: 'Un guide d\'activités en Laponie finlandaise',
    para1: 'LaplandActivities est le pôle activités de l\'écosystème #LaplandVibes, un réseau de guides indépendants couvrant hébergement, gastronomie, nature, transport et tours en Laponie finlandaise.',
    para2: 'Le site oriente les voyageurs vers des opérateurs locaux choisis avec soin dans huit destinations, des safaris en motoneige à Saariselkä à la pêche au saumon sur le Tornionjoki. Chaque réservation passe par GetYourGuide, vous obtenez donc une confirmation immédiate et l\'annulation gratuite jusqu\'à 24 h sur la plupart des tours.',
    pillars: [
      { title: 'Opérateurs réels', text: 'Nous présentons des opérateurs locaux établis ; chaque réservation passe par GetYourGuide.' },
      { title: 'Expériences authentiques', text: 'Chaque activité est choisie pour le genre de détail qu\'on ne peut pas inventer.' },
      { title: 'Sûr et de confiance', text: 'Les opérateurs d\'activités en Finlande relèvent de la loi sur la sécurité des consommateurs et sont supervisés par Tukes, l\'autorité finlandaise de sécurité.' },
      { title: 'Réseau #LaplandVibes', text: 'Membre d\'un réseau de 23 sites sur la Laponie finlandaise, votre boîte à outils complète.' },
    ],
    affiliateH2: 'Divulgation d\'affiliation',
    affiliateBody1: 'LaplandActivities perçoit une commission sur les réservations via des liens partenaires, Hotels.com, GetYourGuide, EconomyBookings. Cela ne vous coûte rien de plus et permet de garder le site gratuit. Les recommandations couvrent les opérateurs et hébergements qui tiennent leurs promesses. Lisez la divulgation complète dans nos',
    affiliateBody2: '.',
    termsLink: 'Conditions d\'utilisation', contactH2: 'Contact',
    contactBody1: 'Écrivez à ', contactBody2: ', pour les partenariats :',
    backHome: '← Retour à l\'accueil',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities', h2: 'Perdu·e dans l\'Arctique ?',
    body: 'Cette page n\'existe pas. Peut-être que l\'aurore l\'a déplacée.',
    backCta: 'Retour à l\'accueil',
  },
};

// ---------- ITALIAN ----------
const it: SectionCopy = {
  nav: {
    home: 'Home', destinations: 'Destinazioni', categories: 'Categorie', about: 'Chi siamo',
    bookCta: 'Prenota attività', allDestinations: 'Tutte le destinazioni →', allCategories: 'Tutte le categorie →',
  },
  hero: {
    eyebrow: 'Lapponia finlandese · Dall\'aurora al sole di mezzanotte',
    lead: 'Safari in motoslitta, slitta trainata dai husky, caccia all\'aurora, saune a fumo, rafting fluviale sotto il sole di mezzanotte. Prenoti direttamente da operatori scelti con cura a Rovaniemi, Levi, Ylläs, Saariselkä e oltre.',
    primaryCta: 'Prenoti ora le attività', secondaryCta: 'Sfoglia destinazioni',
    stayNearby: 'Alloggio vicino', stayNearbyDesc: 'Hotels.com, tariffe migliori',
    rentCar: 'Noleggia un\'auto', rentCarDesc: 'Dall\'aeroporto di Rovaniemi',
    auroraTours: 'Tour aurora', auroraToursDesc: 'Operatori scelti con cura',
    allCategories: 'Tutte le categorie', allCategoriesDesc: '8 modi per vivere l\'Artico',
    scrollAria: 'Scorri verso le categorie',
  },
  summerBand: {
    eyebrow: 'Estate 2026 · prenotazioni aperte',
    h2: "L'estate in Lapponia è il segreto meglio custodito.",
    lead: "Il sole di mezzanotte non tramonta mai. Le foreste si aprono. Risalgono i salmoni e i fjell virano al rosso del ruska da agosto. La maggior parte degli operatori ha ampia disponibilità fino a giugno, a luglio i posti migliori sono già andati.",
    bookCta: 'Prenota le attività estive', browseCta: 'Sfoglia la guida estiva',
    imageKicker: 'Categoria estate', imageH3: '8 modi per sentire il sole di mezzanotte',
    highlights: [
      { title: 'Escursioni in fjell', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas, giornate lunghe, nessuna folla.' },
      { title: 'Kayak e SUP', body: 'Isole del lago Inari, laghi del sole di mezzanotte, acque a specchio fino all\'una di notte.' },
      { title: 'Pesca al salmone con la mosca', body: 'Le risalite del Tornionjoki e del Teno raggiungono il picco a giugno-luglio.' },
      { title: 'Tour al sole di mezzanotte', body: 'Fotografia, raccolta, mountain bike in fjell, luce 24 ore su 24.' },
    ],
    gygTitle: 'Tour estivi che vanno a ruba', gygEyebrow: 'Prenotabile ora · Cancellazione gratuita',
  },
  hotelsStrip: {
    kicker: 'Dove soggiornare', h2: 'Prima prenoti il letto.',
    lead: 'Le attività sono facili, la maggior parte degli operatori aggiunge capienza. L\'alloggio che vuole davvero si esaurisce con mesi di anticipo. Si assicuri prima la stanza, poi prenoti i tour.',
    compareCta: 'Confronta tutti gli hotel della Lapponia',
    lodging: [
      { name: 'Iglù di vetro', blurb: 'Dorma sotto l\'aurora attraverso un tetto di vetro curvo. Le notti più prenotate della Lapponia.' },
      { name: 'Baite in legno sul lago', blurb: 'Sauna a fumo, vasca riscaldata a legna, pontile privato. Tutto l\'anno.' },
      { name: 'Resort in fjell', blurb: 'Levi · Ylläs · Saariselkä · Ruka, ski-in/ski-out più attività estive.' },
      { name: 'Boutique in città', blurb: 'Rovaniemi · Kemi · Ivalo, hotel di design con cucina e accesso al centro.' },
      { name: 'Cabine sauna a fumo', blurb: 'La vera esperienza savusauna, piccola, buia, incredibilmente calda.' },
    ],
    comparePrices: 'Confronta i prezzi',
  },
  bookingCta: {
    eyebrow: 'Pianifichi tutto il viaggio', heading: 'Attività, soggiorni e auto in un unico posto',
    blurb: 'Tre tap e il Suo viaggio in Lapponia è organizzato, operatori turistici scelti con cura tramite GetYourGuide, le migliori offerte di alloggio tramite Hotels.com, e un\'auto che La aspetta in aeroporto.',
    activities: 'Attività', activitiesDesc: 'Safari husky, motoslitte, tour aurora, pesca sul ghiaccio, conferma immediata via GetYourGuide.',
    browseTours: 'Sfoglia i tour',
    stayNearby: 'Alloggio vicino', stayNearbyDesc: 'Iglù di vetro, baite, hotel ski-in, prenoti prima il letto, i migliori si esauriscono in fretta.',
    compareHotels: 'Confronta gli hotel',
    rentCar: 'Noleggia un\'auto', rentCarDesc: 'Confronti oltre 600 fornitori negli aeroporti di Rovaniemi, Kittilä, Ivalo e Kemi. Pneumatici invernali inclusi.',
    findBestPrice: 'Trova il miglior prezzo',
    disclaimer: 'ⓘ Questa pagina contiene link di affiliazione. LaplandVibes può ricevere una commissione sulle Sue prenotazioni, senza alcun costo aggiuntivo per Lei.',
  },
  newsletter: {
    eyebrow: 'La newsletter #LaplandVibes', h2: 'Riceva le finestre di prenotazione che si esauriscono sempre.',
    lead: 'Un\'e-mail breve quando c\'è qualcosa che vale la pena segnalare, picchi di previsione dell\'aurora, operatori ancora aperti in stagione fango, tour in offerta prima che i siti di prenotazione se ne accorgano.',
    benefits: [
      { title: 'Avvisi aurora', body: 'Quando il Kp supera 4, di solito 24-48 h prima di cieli sereni.' },
      { title: 'Cosa è aperto ora', body: 'Vere finestre stagionali per husky, motoslitte e saune.' },
      { title: 'Consigli da insider', body: 'Il tour che sui siti partner appare solo a giugno.' },
    ],
    emailPlaceholder: 'Il Suo indirizzo e-mail', subscribeBtn: 'Iscriviti', subscribingBtn: 'Iscrizione…',
    successTitle: 'È dentro.', successBody: 'Controlli la casella per il benvenuto dalla Lapponia.',
    alreadyTitle: 'Già nella lista!', alreadyBody: 'Sembra che Lei sia già iscritto, a presto.',
    footnote: 'Disiscrizione in qualsiasi momento.', errorFallback: 'Iscrizione non riuscita. Per favore riprovi.',
  },
  activityCard: { findBook: 'Trova e prenota', planVisit: 'Pianifica la visita' },
  home: {
    metaTitle: 'LaplandActivities: tour artici in Lapponia',
    metaDescription: 'Safari in motoslitta, slitta dei husky, caccia all\'aurora, saune a fumo e altro. Prenoti attività in 8 destinazioni della Lapponia tramite GetYourGuide.',
    ogTitle: 'LaplandActivities: esperienze artiche scelte con cura',
    categoriesKicker: 'Cosa fare', categoriesH2: 'Scelga la sua avventura',
    categoriesLead: '8 modi per vivere l\'Artico, scelga una categoria e La indirizzeremo verso gli operatori selezionati.',
    activitiesLabel: 'attività', viewAllCategories: 'Vedi tutte le categorie',
    gygTitle: 'I tour della Lapponia più votati della settimana', gygEyebrow: 'Prenotabile ora',
    featuredKicker: 'Selezionati', featuredH2: 'Esperienze top', seeAllTours: 'Vedi tutti i tour prenotabili',
    seasonsKicker: 'Tutto l\'anno', seasonsH2: 'Quattro stagioni di avventura', seasonsLead: 'Ogni stagione trasforma la Lapponia in un paese diverso.',
    seasons: [
      { name: 'Inverno', months: 'nov – mar', blurb: 'Neve profonda, notti polari, picco di aurora. Motoslitte, husky, saune a fumo.', temp: '-15 a -5 °C' },
      { name: 'Primavera', months: 'apr – mag', blurb: 'Neve con luce. Sci di fine stagione, parto delle renne, aurora fino a metà aprile.', temp: '-5 a +5 °C' },
      { name: 'Estate', months: 'giu – ago', blurb: 'Il sole di mezzanotte non tramonta. Trekking, kayak, pesca al salmone, mountain bike.', temp: '+10 a +25 °C' },
      { name: 'Autunno', months: 'set – ott', blurb: 'Il ruska colora i fjell. Tornano le prime aurore. Stagione di funghi e bacche.', temp: '+5 a -5 °C' },
    ],
    destinationsKicker: 'Dove andare', destinationsH2: 'Destinazioni', viewAll: 'Vedi tutto', activitiesShort: 'attività',
  },
  relatedSites: {
    kicker: 'Altro da #LaplandVibes',
    h2: 'Pianifica il resto del tuo viaggio artico',
    lead: 'Le attività sono solo metà del viaggio. Queste guide sorelle della nostra rete lappone approfondiscono il resto.',
    links: [
      { pre: 'Voglia di slitta trainata dai cani? La nostra', anchor: 'guida dedicata ai safari in husky', post: 'confronta canili, distanze e prezzi.' },
      { pre: 'Preferisci il tuo acceleratore, guarda i migliori', anchor: 'itinerari e prezzi dei safari in motoslitta', post: 'in tutta la Lapponia.' },
      { pre: 'In cerca di neve fresca? Scopri', anchor: 'dove sciare in Lapponia', post: 'con confronti località per località.' },
      { pre: 'Per il lato tranquillo dell\'Artico, leggi su', anchor: 'aurora boreale e parchi nazionali', post: 'e i cieli migliori per l\'aurora.' },
      { pre: 'E prima di prenotare i tour, decidi', anchor: 'dove alloggiare in Lapponia', post: ': igloo, baite e resort di montagna.' },
    ],
  },
  faq: {
    kicker: 'Da sapere',
    h2: 'Attività in Lapponia, le risposte',
    lead: 'Le domande che i viaggiatori fanno più spesso prima di prenotare un’esperienza artica.',
    items: [
      {
        q: 'Quali attività si possono fare in Lapponia?',
        a: 'In inverno i classici sono le slitte trainate da husky e renne, i safari in motoslitta, la caccia all’aurora, le ciaspolate, lo sci di fondo e alpino, la pesca sul ghiaccio e l’ice floating. In estate la stessa natura diventa trekking, kayak e canoa, rafting, mountain bike, pesca al salmone e ricerca dell’oro. Tutto l’anno, la sauna a fumo e le esperienze di cultura sami mostrano un lato più tranquillo dell’Artico.',
      },
      {
        q: 'Quali sono le migliori attività invernali ed estive?',
        a: 'L’inverno (da novembre a marzo) è la stagione della neve e del buio: motoslitte, slitte trainate dai cani e tour dell’aurora ne hanno bisogno. L’estate (da giugno ad agosto) scambia la neve con il sole di mezzanotte, quando la luce non svanisce mai del tutto e trekking, pagaiate e pesca sono possibili quasi a ogni ora. La primavera ha ancora neve con molta più luce, e l’autunno porta i colori della ruska e le prime aurore, entrambe stagioni intermedie più tranquille.',
      },
      {
        q: 'Quanto costano le attività in Lapponia?',
        a: 'Dipende molto dall’attività, dalla durata e dalla dimensione del gruppo. Una breve sessione condivisa, come un giro in renna o un tour dell’aurora in bus, è nella fascia più bassa; le uscite di più ore o private, come un lungo safari con gli husky o una spedizione guidata in motoslitta, costano di più, anche perché includono tute termiche, stivali, attrezzatura di sicurezza e una guida. Per prezzi attuali e precisi, apri una qualsiasi escursione tramite il nostro partner di prenotazione, il prezzo in tempo reale appare prima di confermare.',
      },
      {
        q: 'Le attività in Lapponia sono adatte ai bambini piccoli?',
        a: 'Molte lo sono, con la scelta giusta. I giri in slitta trainata dalle renne, le visite alle fattorie degli husky, le tranquille passeggiate con le ciaspole, lo slittino e l’incontro con Babbo Natale funzionano bene per i più piccoli. La motoslitta ha di solito un’età minima per guidare (i bambini viaggiano in una slitta o in un rimorchio), e le cacce all’aurora a tarda notte possono essere lunghe e fredde per i piccolissimi. La maggior parte degli operatori indica i limiti di età e le opzioni per famiglie sulla pagina dell’attività, quindi controlla prima di prenotare.',
      },
      {
        q: 'È necessario prenotare in anticipo le attività in Lapponia?',
        a: 'Per le settimane più affollate, Natale e Capodanno, e il picco di aurore e sci da febbraio a marzo, sì, prenota con largo anticipo, perché i tour più richiesti con husky e motoslitta si riempiono. Nei periodi più tranquilli c’è più flessibilità, ma gli operatori più apprezzati e le partenze in piccoli gruppi si esauriscono comunque per primi. Prenotare in anticipo ti permette anche di inserire un margine per il cielo sereno nei piani per l’aurora invece di contendere gli ultimi posti.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Categorie di attività · LaplandActivities',
    metaDescription: 'Sfogli le attività artiche per categoria, avventura, animali, aurora, sport invernali, benessere, cultura, estate e gastronomia.',
    kicker: 'Cosa fare', h1: 'Categorie di attività',
    lead: '8 modi per vivere l\'Artico, scelga un tema e La indirizzeremo verso gli operatori selezionati.',
    activitiesLabel: 'attività', exploreAdventures: 'Scopri le avventure', explore: 'Scopri',
    gygTitle: 'Sfogli i tour più prenotati', gygEyebrow: 'Tutte le categorie',
  },
  categoryPage: {
    notFoundH1: 'Categoria non trovata', backCategories: '← Torna alle categorie',
    allCategoriesNav: 'Tutte le categorie', bookToursPrefix: 'Prenota',
    activitiesCount: (n, name) => `${n} attività di ${name.toLowerCase()}`,
    comingSoon: 'Le attività di questa categoria arriveranno presto.',
    gygTitlePrefix: 'Più prenotate', gygEyebrow: 'Operatori scelti con cura',
    browseOthers: 'Sfoglia altre categorie', allCategoriesLink: 'Tutte le categorie →',
  },
  destinationsIndex: {
    metaTitle: 'Destinazioni della Lapponia · LaplandActivities',
    metaDescription: 'Otto destinazioni iconiche della Lapponia finlandese: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio e Tornio. Attività, operatori e alloggi.',
    kicker: 'Dove andare', h1: 'Destinazioni',
    lead: 'Otto destinazioni iconiche della Lapponia, ciascuna con il proprio carattere e rete di operatori.',
    activitiesLabel: 'attività', explore: 'Scopri',
    gygTitle: 'Tour della Lapponia più prenotati', gygEyebrow: 'Tutte le destinazioni',
  },
  destinationPage: {
    notFoundH1: 'Destinazione non trovata', backDestinations: '← Torna alle destinazioni',
    allDestinationsNav: 'Tutte le destinazioni', bookActivitiesIn: 'Prenota attività a',
    stayIn: 'Soggiorni a', activitiesShort: 'attività',
    mustDoKicker: 'Da non perdere', mustDoH2: 'L\'esperienza più prenotata',
    localKicker: 'Info locali', localH2: 'Consigli da insider',
    operatorsLabel: 'Operatori di fiducia a',
    gygTitlePrefix: 'Tour', gygTitleSuffix: 'selezionati', gygEyebrow: 'Prenotabile ora',
    allActivitiesKicker: 'Tutte le attività',
    thingsToDoIn: 'cose da fare a', moreSoon: 'Altre attività in arrivo per',
    sleepInPrefix: 'Dormi a', sleepInBlurb: 'Iglù di vetro, baite, hotel ski-in, Hotels.com raccoglie le tariffe migliori.',
    compareHotels: 'Confronta gli hotel',
    driveYourself: 'Guidi Lei', driveYourselfBlurb: 'La Lapponia è vasta e i noleggi sono già con pneumatici invernali. Confronti oltre 600 fornitori.',
    findBestPrice: 'Trova il miglior prezzo',
    keepExploringKicker: 'Continui a esplorare', otherDestinationsH2: 'Altre destinazioni', allDestinations: 'Tutte le destinazioni',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Prenoti il Villaggio di Babbo Natale al mattino presto per evitare la folla dei bus crocieristici.', icon: '🎅' },
        { tip: 'Il certificato di attraversamento del Circolo Polare è gratuito all\'ufficio postale.', icon: '📮' },
        { tip: 'Arktikum ha la mostra sull\'aurora più completa della Finlandia.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro è l\'après-ski più chiassoso della Lapponia, vada di venerdì.', icon: '🍺' },
        { tip: 'Bearhill Husky si esaurisce settimane prima nelle settimane di punta.', icon: '🐕' },
        { tip: 'Lo sci notturno sotto l\'aurora esiste solo a Levi, solo dic./gen.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs ha alcuni dei cieli aurora più bui e limpidi della Finlandia.', icon: '✨' },
        { tip: 'Il lato di Äkäslompolo è più tranquillo; i bar sono a Ylläsjärvi.', icon: '🏔️' },
        { tip: 'La rete di 330 km di sci di fondo è la migliore della Finlandia; metà marzo è ideale.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'La sauna a fumo di Kiilopää è aperta tutto l\'anno, prenoti il pomeriggio.', icon: '🧖' },
        { tip: 'Ricerca dell\'oro a Tankavaara, tutto ciò che trova è Suo.', icon: '🥇' },
        { tip: 'Le baite del parco UKK sono gratuite, chi prima arriva.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Il museo Siida richiede almeno tre ore, legga anche l\'ala in lingua sami.', icon: '🏛️' },
        { tip: 'Le crociere sul lago Inari operano solo giugno-settembre.', icon: '⛵' },
        { tip: 'La stagione delle more artiche culmina a fine luglio lungo il sentiero Pielpajärvi.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'I capanni per l\'osservazione degli orsi si esauriscono con mesi di anticipo.', icon: '🐻' },
        { tip: 'Karhunkierros ha un anello "Piccolo Orso" di 12 km per chi non fa il multi-giorno.', icon: '🥾' },
        { tip: 'Ruka apre per lo sci già a ottobre, la più precoce di Finlandia.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'Gli alberi tykky del Riisitunturi danno il meglio da gennaio a marzo.', icon: '🌲' },
        { tip: 'Alle cascate gelate di Korouoma si arriva dopo 3 km di cammino nel bosco.', icon: '🧊' },
        { tip: 'L\'outlet Pentik fa sconti del 30-50% tutto l\'anno.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'Il rompighiaccio Sampo naviga solo da dicembre ad aprile, prenoti appena aprono le date.', icon: '🚢' },
        { tip: 'Lo SnowCastle viene ricostruito ogni anno con un nuovo tema.', icon: '🏰' },
        { tip: 'Il Green Zone Golf attraversa il confine Finlandia-Svezia durante il giro.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Chi siamo · LaplandActivities',
    metaDescription: 'LaplandActivities è il polo attività dell\'ecosistema #LaplandVibes, esperienze artiche scelte con cura in otto destinazioni della Lapponia finlandese.',
    eyebrow: 'Chi siamo', h1: 'Una guida alle attività in Lapponia finlandese',
    para1: 'LaplandActivities è il polo attività dell\'ecosistema #LaplandVibes, una rete di guide indipendenti su alloggio, gastronomia, natura, trasporti e tour in Lapponia finlandese.',
    para2: 'Il sito indirizza i viaggiatori verso operatori locali scelti con cura in otto destinazioni, dai safari in motoslitta a Saariselkä alla pesca al salmone sul Tornionjoki. Ogni prenotazione passa per GetYourGuide, quindi otterrà conferma immediata e cancellazione gratuita fino a 24 ore sulla maggior parte dei tour.',
    pillars: [
      { title: 'Operatori reali', text: 'Presentiamo operatori locali affermati; ogni prenotazione passa per GetYourGuide.' },
      { title: 'Esperienze autentiche', text: 'Ogni attività è scelta per quel tipo di dettaglio che non si può falsificare.' },
      { title: 'Sicuro e affidabile', text: 'Gli operatori di attività in Finlandia rientrano nella legge sulla sicurezza dei consumatori e sono vigilati da Tukes, ente finlandese per la sicurezza.' },
      { title: 'Rete #LaplandVibes', text: 'Parte di una rete di 23 siti sulla Lapponia finlandese, il Suo kit completo di pianificazione.' },
    ],
    affiliateH2: 'Divulgazione affiliazione',
    affiliateBody1: 'LaplandActivities guadagna una commissione sulle prenotazioni tramite link partner, Hotels.com, GetYourGuide, EconomyBookings. Non Le costa nulla in più e tiene gratuito il sito. Le raccomandazioni riguardano operatori e strutture che mantengono ciò che promettono. Legga la divulgazione completa nei nostri',
    affiliateBody2: '.',
    termsLink: 'Termini di utilizzo', contactH2: 'Contatti',
    contactBody1: 'Scriva a ', contactBody2: ', per partnership:',
    backHome: '← Torna alla home',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities', h2: 'Perso nell\'Artico?',
    body: 'Questa pagina non esiste. Forse l\'aurora l\'ha spostata.',
    backCta: 'Torna alla home',
  },
};

// ---------- DUTCH ----------
const nl: SectionCopy = {
  nav: {
    home: 'Home', destinations: 'Bestemmingen', categories: 'Categorieën', about: 'Over ons',
    bookCta: 'Activiteiten boeken', allDestinations: 'Alle bestemmingen →', allCategories: 'Alle categorieën →',
  },
  hero: {
    eyebrow: 'Fins Lapland · Van noorderlicht tot middernachtszon',
    lead: "Sneeuwscooter-safari's, husky-slederitten, noorderlichtjachten, rooksauna's, rafting onder de middernachtszon. Boek direct bij zorgvuldig gekozen aanbieders in Rovaniemi, Levi, Ylläs, Saariselkä en daarbuiten.",
    primaryCta: 'Nu activiteiten boeken', secondaryCta: 'Bestemmingen bekijken',
    stayNearby: 'Overnachten in de buurt', stayNearbyDesc: 'Hotels.com, beste tarieven',
    rentCar: 'Auto huren', rentCarDesc: 'Vanaf luchthaven Rovaniemi',
    auroraTours: 'Noorderlicht-tours', auroraToursDesc: 'Zorgvuldig gekozen aanbieders',
    allCategories: 'Alle categorieën', allCategoriesDesc: '8 manieren om het Noordpoolgebied te beleven',
    scrollAria: 'Scroll naar categorieën',
  },
  summerBand: {
    eyebrow: 'Zomer 2026 · nu boekbaar',
    h2: 'De zomer in Lapland is het best bewaarde geheim.',
    lead: 'De middernachtszon gaat nooit onder. Bossen openen zich. Zalm zwemt stroomopwaarts en vanaf augustus kleuren de fjells rood door de ruska. De meeste aanbieders hebben tot juni ruime beschikbaarheid, in juli zijn de beste tijdslots al weg.',
    bookCta: 'Boek zomeractiviteiten', browseCta: 'Bekijk zomergids',
    imageKicker: 'Zomercategorie', imageH3: '8 manieren om de middernachtszon te voelen',
    highlights: [
      { title: 'Fjell-wandeling', body: 'Pallas-Yllästunturi, Karhunkierros, Hetta-Pallas, lange dagen, geen drukte.' },
      { title: 'Kajak en SUP', body: 'Eilanden van het Inari-meer, meren onder de middernachtszon, spiegelglad water tot 1 uur \'s nachts.' },
      { title: 'Zalmvliegvissen', body: 'De zalmtrek op de Tornionjoki en de Teno piekt in juni-juli.' },
      { title: 'Middernachtszon-tours', body: 'Fotografie, foerageren, fjell-mountainbiken, 24 uur daglicht.' },
    ],
    gygTitle: 'Zomertours die snel uitverkopen', gygEyebrow: 'Nu boekbaar · Gratis annuleren',
  },
  hotelsStrip: {
    kicker: 'Waar te verblijven', h2: 'Boek eerst het bed.',
    lead: 'Activiteiten zijn eenvoudig, de meeste aanbieders breiden uit. De accommodatie die u écht wilt is maanden van tevoren vol. Leg eerst de kamer vast en boek dan pas de tours.',
    compareCta: 'Vergelijk alle Lapland-hotels',
    lodging: [
      { name: 'Glaziglo\'s', blurb: 'Slaap onder het noorderlicht door een gewelfd glazen dak. De meest geboekte Lapland-nachten.' },
      { name: 'Houten hutten aan het meer', blurb: 'Rooksauna, houtgestookte hot tub, eigen steiger. Het hele jaar door.' },
      { name: 'Fjell-resorts', blurb: 'Levi · Ylläs · Saariselkä · Ruka, ski-in/ski-out plus zomeractiviteiten.' },
      { name: 'Boutique in de stad', blurb: 'Rovaniemi · Kemi · Ivalo, designhotels met keuken en toegang tot het centrum.' },
      { name: 'Rooksauna-hutten', blurb: 'De echte savusauna-ervaring, klein, donker, belachelijk heet.' },
    ],
    comparePrices: 'Prijzen vergelijken',
  },
  bookingCta: {
    eyebrow: 'Plan de hele reis', heading: 'Boek activiteiten, verblijf en auto op één plek',
    blurb: 'Drie taps en uw Lapland-reis staat, zorgvuldig gekozen aanbieders via GetYourGuide, de beste accommodatiedeals via Hotels.com, en een auto die op u wacht op het vliegveld.',
    activities: 'Activiteiten', activitiesDesc: 'Husky-safari\'s, sneeuwscooters, noorderlicht-tours, ijsvissen, directe bevestiging via GetYourGuide.',
    browseTours: 'Bekijk tours',
    stayNearby: 'Overnachten in de buurt', stayNearbyDesc: 'Glaziglo\'s, houten hutten, ski-in-hotels, boek eerst het bed, de beste zijn snel weg.',
    compareHotels: 'Hotels vergelijken',
    rentCar: 'Auto huren', rentCarDesc: 'Vergelijk 600+ aanbieders op de luchthavens Rovaniemi, Kittilä, Ivalo en Kemi. Winterbanden inbegrepen.',
    findBestPrice: 'Beste prijs vinden',
    disclaimer: 'ⓘ Deze pagina bevat affiliate-links. LaplandVibes kan een commissie ontvangen bij uw boeking, zonder extra kosten voor u.',
  },
  newsletter: {
    eyebrow: 'De #LaplandVibes-nieuwsbrief', h2: 'Ontvang de boekingsvensters die altijd uitverkopen.',
    lead: 'Een korte e-mail als er iets te melden valt, pieken in de noorderlichtvoorspelling, aanbieders die nog open zijn in het modderseizoen, tours die in de aanbieding gaan voordat de boekingssites het doorhebben.',
    benefits: [
      { title: 'Noorderlicht-meldingen', body: 'Wanneer de Kp boven 4 uitstijgt, meestal 24-48 u voor een heldere lucht.' },
      { title: 'Wat is nu open', body: 'Echte seizoensvensters voor husky\'s, sneeuwscooters en sauna\'s.' },
      { title: 'Tips van insiders', body: 'De tour die u op de partnersites pas in juni vindt.' },
    ],
    emailPlaceholder: 'Uw e-mailadres', subscribeBtn: 'Abonneren', subscribingBtn: 'Aanmelden…',
    successTitle: 'U bent erbij.', successBody: 'Check uw inbox voor een welkom uit Lapland.',
    alreadyTitle: 'Al op de lijst!', alreadyBody: 'Het lijkt erop dat u al geabonneerd bent, tot snel.',
    footnote: 'Op elk moment opzegbaar.', errorFallback: 'Aanmelden mislukt. Probeer het opnieuw.',
  },
  activityCard: { findBook: 'Zoek en boek', planVisit: 'Plan je bezoek' },
  home: {
    metaTitle: 'LaplandActivities: Arctische tours in Lapland',
    metaDescription: 'Sneeuwscooter-safari\'s, husky-slederitten, noorderlichtjachten, rooksauna\'s en meer. Boek zorgvuldig gekozen activiteiten in 8 Lapland-bestemmingen via GetYourGuide.',
    ogTitle: 'LaplandActivities: zorgvuldig gekozen Arctische ervaringen',
    categoriesKicker: 'Wat te doen', categoriesH2: 'Kies uw avontuur',
    categoriesLead: '8 manieren om het Noordpoolgebied te beleven, kies een categorie en we verwijzen u door naar zorgvuldig gekozen aanbieders.',
    activitiesLabel: 'activiteiten', viewAllCategories: 'Bekijk alle categorieën',
    gygTitle: 'Best beoordeelde Lapland-tours deze week', gygEyebrow: 'Nu boekbaar',
    featuredKicker: 'Met de hand gekozen', featuredH2: 'Top-ervaringen', seeAllTours: 'Bekijk alle boekbare tours',
    seasonsKicker: 'Het hele jaar', seasonsH2: 'Vier seizoenen avontuur', seasonsLead: 'Elk seizoen maakt van Lapland een ander land.',
    seasons: [
      { name: 'Winter', months: 'nov – mrt', blurb: 'Diepe sneeuw, poolnachten, piek van het noorderlicht. Sneeuwscooters, husky\'s, rooksauna\'s.', temp: '-15 tot -5 °C' },
      { name: 'Lente', months: 'apr – mei', blurb: 'Sneeuw met daglicht. Laat-seizoensskiën, kalvende rendieren, noorderlicht tot half april.', temp: '-5 tot +5 °C' },
      { name: 'Zomer', months: 'jun – aug', blurb: 'De middernachtszon gaat niet onder. Wandelen, kajakken, zalmvissen, mountainbiken.', temp: '+10 tot +25 °C' },
      { name: 'Herfst', months: 'sep – okt', blurb: 'De ruska kleurt de fjells. Eerste noorderlicht keert terug. Paddenstoel- en bessenseizoen.', temp: '+5 tot -5 °C' },
    ],
    destinationsKicker: 'Waarheen', destinationsH2: 'Bestemmingen', viewAll: 'Bekijk alle', activitiesShort: 'activiteiten',
  },
  relatedSites: {
    kicker: 'Meer van #LaplandVibes',
    h2: 'Plan de rest van je Arctische reis',
    lead: 'Activiteiten zijn maar de helft van de reis. Deze zustergidsen uit ons Lapland-netwerk gaan dieper op de rest in.',
    links: [
      { pre: 'Zin in een hondenslee? Onze', anchor: 'speciale husky-safarigids', post: 'vergelijkt kennels, afstanden en prijzen.' },
      { pre: 'Liever je eigen gashendel, bekijk de beste', anchor: 'sneeuwscooter-routes & prijzen', post: 'in heel Lapland.' },
      { pre: 'Op zoek naar verse poeder? Ontdek', anchor: 'waar je kunt skiën in Lapland', post: 'met vergelijkingen per skigebied.' },
      { pre: 'Voor de rustige kant van het noordpoolgebied, lees over', anchor: 'noorderlicht & nationale parken', post: 'en de beste aurorahemels.' },
      { pre: 'En voordat je de tours boekt, bepaal', anchor: 'waar je kunt verblijven in Lapland', post: ': iglo\'s, hutten en fjell-resorts.' },
    ],
  },
  faq: {
    kicker: 'Goed om te weten',
    h2: 'Lapland-activiteiten, beantwoord',
    lead: 'De vragen die reizigers het vaakst stellen voordat ze een Arctische ervaring boeken.',
    items: [
      {
        q: 'Welke activiteiten kun je in Lapland doen?',
        a: 'In de winter zijn de klassiekers husky- en rendiersleeën, sneeuwscootersafari’s, noorderlichttochten, sneeuwschoenwandelen, langlaufen en afdalingsskiën, ijsvissen en ijsdrijven. In de zomer verandert dezelfde wildernis in wandelen, kajakken en kanoën, wildwaterraften, mountainbiken, zalmvissen en goudzoeken. Het hele jaar door tonen de rooksauna en de ervaringen rond de Sami-cultuur een rustigere kant van het Noordpoolgebied.',
      },
      {
        q: 'Wat zijn de beste winter- en zomeractiviteiten?',
        a: 'De winter (november tot maart) is het seizoen van sneeuw en duisternis: sneeuwscooters, hondensleeën en aurora-tochten hebben dat nodig. De zomer (juni tot augustus) ruilt de sneeuw in voor de middernachtzon, wanneer het licht nooit helemaal verdwijnt en wandelen, peddelen en vissen bijna de klok rond kunnen. De lente heeft nog sneeuw met veel meer daglicht, en de herfst brengt de ruska-kleuren en de eerste auroras, beide rustigere tussenseizoenen.',
      },
      {
        q: 'Hoeveel kosten activiteiten in Lapland?',
        a: 'Dat verschilt sterk per activiteit, duur en groepsgrootte. Een korte gedeelde sessie zoals een rendierrit of een aurora-bustocht zit aan de lage kant; tochten van meerdere uren of privétochten zoals een lange husky-safari of een begeleide sneeuwscooterexpeditie kosten meer, deels omdat warme overalls, laarzen, veiligheidsuitrusting en een gids inbegrepen zijn. Voor actuele, juiste prijzen open je een tocht via onze boekingspartner, de live prijs verschijnt vóór je bevestigt.',
      },
      {
        q: 'Zijn activiteiten in Lapland geschikt voor jonge kinderen?',
        a: 'Veel wel, met de juiste keuze. Rendiersleeritten, bezoeken aan een huskyboerderij, rustige sneeuwschoenwandelingen, sleeën en een ontmoeting met de Kerstman werken goed voor kleine kinderen. Voor sneeuwscooters geldt meestal een minimumleeftijd om te besturen (kinderen rijden mee in een slee of aanhanger), en late noorderlichttochten kunnen voor de allerkleinsten lang en koud zijn. De meeste aanbieders vermelden leeftijdsgrenzen en gezinsopties op de activiteitenpagina, dus controleer dit vóór het boeken.',
      },
      {
        q: 'Moet je activiteiten in Lapland vooraf boeken?',
        a: 'Voor de drukste weken, Kerst en Nieuwjaar, en de aurora- en skipiek van februari tot maart, ja, boek ruim van tevoren, want populaire husky- en sneeuwscootertochten raken vol. In rustigere periodes heb je meer flexibiliteit, maar de best beoordeelde aanbieders en vertrekken in kleine groepen zijn toch het eerst uitverkocht. Vooraf boeken laat je ook ruimte voor een heldere hemel inbouwen in je aurora-plannen in plaats van te strijden om de laatste plekken.',
      },
    ],
  },
  categoriesIndex: {
    metaTitle: 'Activiteitencategorieën · LaplandActivities',
    metaDescription: 'Blader door Arctische activiteiten per categorie, avontuur, dieren, noorderlicht, wintersport, welness, cultuur, zomer en eten en drinken.',
    kicker: 'Wat te doen', h1: 'Activiteitencategorieën',
    lead: '8 manieren om het Noordpoolgebied te beleven, kies een thema en we verwijzen u door naar zorgvuldig gekozen aanbieders.',
    activitiesLabel: 'activiteiten', exploreAdventures: 'Ontdek avonturen', explore: 'Ontdek',
    gygTitle: 'Bekijk de meest geboekte tours', gygEyebrow: 'Alle categorieën',
  },
  categoryPage: {
    notFoundH1: 'Categorie niet gevonden', backCategories: '← Terug naar categorieën',
    allCategoriesNav: 'Alle categorieën', bookToursPrefix: 'Boek',
    activitiesCount: (n, name) => `${n} ${name.toLowerCase()}-activiteiten`,
    comingSoon: 'Activiteiten voor deze categorie komen binnenkort.',
    gygTitlePrefix: 'Meest geboekt:', gygEyebrow: 'Zorgvuldig gekozen aanbieders',
    browseOthers: 'Bekijk andere categorieën', allCategoriesLink: 'Alle categorieën →',
  },
  destinationsIndex: {
    metaTitle: 'Lapland-bestemmingen · LaplandActivities',
    metaDescription: 'Acht iconische bestemmingen in Fins Lapland: Rovaniemi, Levi, Ylläs, Saariselkä, Inari, Ruka, Posio en Tornio. Activiteiten, aanbieders en accommodatie.',
    kicker: 'Waarheen', h1: 'Bestemmingen',
    lead: 'Acht iconische Lapland-bestemmingen, elk met een eigen karakter en aanbiedersnetwerk.',
    activitiesLabel: 'activiteiten', explore: 'Ontdek',
    gygTitle: 'Meest geboekte Lapland-tours', gygEyebrow: 'Alle bestemmingen',
  },
  destinationPage: {
    notFoundH1: 'Bestemming niet gevonden', backDestinations: '← Terug naar bestemmingen',
    allDestinationsNav: 'Alle bestemmingen', bookActivitiesIn: 'Boek activiteiten in',
    stayIn: 'Verblijf in', activitiesShort: 'activiteiten',
    mustDoKicker: 'Niet missen', mustDoH2: 'Meest geboekte ervaring',
    localKicker: 'Lokale info', localH2: 'Insider-tips',
    operatorsLabel: 'Vertrouwde aanbieders in',
    gygTitlePrefix: 'Zorgvuldig gekozen', gygTitleSuffix: 'tours', gygEyebrow: 'Nu boekbaar',
    allActivitiesKicker: 'Alle activiteiten',
    thingsToDoIn: 'dingen om te doen in', moreSoon: 'Meer activiteiten binnenkort voor',
    sleepInPrefix: 'Slaap in', sleepInBlurb: 'Glaziglo\'s, houten hutten, ski-in-hotels, Hotels.com bundelt de beste tarieven.',
    compareHotels: 'Hotels vergelijken',
    driveYourself: 'Zelf rijden', driveYourselfBlurb: 'Lapland is uitgestrekt en huurauto\'s zijn al voorzien van winterbanden. Vergelijk 600+ aanbieders.',
    findBestPrice: 'Beste prijs vinden',
    keepExploringKicker: 'Blijf verkennen', otherDestinationsH2: 'Andere bestemmingen', allDestinations: 'Alle bestemmingen',
    tipsByDestination: {
      rovaniemi: [
        { tip: 'Boek het Kerstmandorp \'s ochtends vroeg om de bezetting van de cruisebussen te ontlopen.', icon: '🎅' },
        { tip: 'Het certificaat voor het oversteken van de Noordpoolcirkel is gratis bij het postkantoor.', icon: '📮' },
        { tip: 'Arktikum heeft de meest uitgebreide noorderlichttentoonstelling van Finland.', icon: '🏛️' },
      ],
      levi: [
        { tip: 'Hullu Poro is de luidruchtigste après-ski van Lapland, ga op een vrijdag.', icon: '🍺' },
        { tip: 'Bearhill Husky is in piekweken weken van tevoren uitverkocht.', icon: '🐕' },
        { tip: 'Nachtskiën onder het noorderlicht is een Levi-ding, alleen dec./jan.', icon: '⛷️' },
      ],
      yllas: [
        { tip: 'Ylläs heeft een van de donkerste, helderste noorderlichthemels van Finland.', icon: '✨' },
        { tip: 'De kant van Äkäslompolo is rustiger; in Ylläsjärvi vindt u de bars.', icon: '🏔️' },
        { tip: 'Het 330 km lange langlaufnetwerk is het beste van Finland; half maart is ideaal.', icon: '🎿' },
      ],
      saariselka: [
        { tip: 'De Kiilopää-rooksauna draait het hele jaar, boek het middagblok.', icon: '🧖' },
        { tip: 'Goudwassen in Tankavaara, alles wat u vindt, mag u houden.', icon: '🥇' },
        { tip: 'De wildernishutten van het UKK Nationaal Park zijn gratis, volgens wie het eerst komt.', icon: '🏕️' },
      ],
      inari: [
        { tip: 'Reken minstens drie uur voor het Siida-museum, lees ook de Sami-talige vleugel.', icon: '🏛️' },
        { tip: 'Boottochten op het Inari-meer varen alleen juni-september.', icon: '⛵' },
        { tip: 'Het kruipbramen-seizoen piekt eind juli langs het Pielpajärvi-pad.', icon: '🫐' },
      ],
      ruka: [
        { tip: 'Berenobservatie-schuilhutten zijn maanden van tevoren volgeboekt.', icon: '🐻' },
        { tip: 'Karhunkierros heeft een 12 km "Kleine Beer"-lus voor wie geen meerdaagse tocht doet.', icon: '🥾' },
        { tip: 'Ruka opent al in oktober voor skiërs, het vroegste van Finland.', icon: '⛷️' },
      ],
      posio: [
        { tip: 'De tykky-besneeuwde bomen van Riisitunturi zijn het mooist van jan-mrt.', icon: '🌲' },
        { tip: 'De bevroren watervallen van Korouoma bereikt u na een wandeling van 3 km door het bos.', icon: '🧊' },
        { tip: 'De Pentik-outletwinkel heeft het hele jaar 30-50% korting.', icon: '🏺' },
      ],
      tornio: [
        { tip: 'De ijsbreker Sampo vaart alleen van december tot april, boek zodra de data openen.', icon: '🚢' },
        { tip: 'Het SnowCastle wordt jaarlijks met een nieuw thema herbouwd.', icon: '🏰' },
        { tip: 'De Green Zone Golf kruist de Finland-Zweden-grens midden in de ronde.', icon: '⛳' },
      ],
    },
  },
  about: {
    metaTitle: 'Over ons · LaplandActivities',
    metaDescription: 'LaplandActivities is de activiteiten-hub van het #LaplandVibes-ecosysteem, zorgvuldig gekozen Arctische ervaringen in acht Fins Lapland-bestemmingen.',
    eyebrow: 'Over ons', h1: 'Een activiteitengids voor Fins Lapland',
    para1: 'LaplandActivities is de activiteiten-hub van het #LaplandVibes-ecosysteem, een netwerk van onafhankelijke gidsen over accommodatie, eten, natuur, transport en tours in Fins Lapland.',
    para2: 'De site verwijst reizigers naar zorgvuldig gekozen lokale aanbieders in acht bestemmingen, van sneeuwscooter-safari\'s in Saariselkä tot zalmvissen op de Tornionjoki. Elke boeking loopt via GetYourGuide, dus u krijgt directe bevestiging en bij de meeste tours gratis annulering tot 24 uur van tevoren.',
    pillars: [
      { title: 'Echte aanbieders', text: 'We tonen gevestigde lokale aanbieders; elke boeking loopt via GetYourGuide.' },
      { title: 'Authentieke ervaringen', text: 'Elke activiteit is gekozen om het soort detail dat u niet kunt verzinnen.' },
      { title: 'Veilig en betrouwbaar', text: 'Activiteitenaanbieders in Finland vallen onder de consumentenveiligheidswet en staan onder toezicht van Tukes, de Finse veiligheidsautoriteit.' },
      { title: '#LaplandVibes-netwerk', text: 'Onderdeel van een 23-site Fins Lapland-netwerk, uw complete reisplanning-toolkit.' },
    ],
    affiliateH2: 'Affiliate-disclosure',
    affiliateBody1: 'LaplandActivities verdient een commissie wanneer u boekt via partnerlinks, Hotels.com, GetYourGuide, EconomyBookings. Dit kost u niets extra en houdt de site gratis. Aanbevelingen omvatten aanbieders en accommodaties die consistent leveren. Lees de volledige disclosure in onze',
    affiliateBody2: '.',
    termsLink: 'Gebruiksvoorwaarden', contactH2: 'Contact',
    contactBody1: 'Mail naar ', contactBody2: ', voor partnerships:',
    backHome: '← Terug naar home',
  },
  notFound: {
    metaTitle: '404 · LaplandActivities', h2: 'Verdwaald in het Noordpoolgebied?',
    body: 'Deze pagina bestaat niet. Misschien heeft het noorderlicht hem verplaatst.',
    backCta: 'Terug naar home',
  },
};

export const COPY: Record<Lang, SectionCopy> = { en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl };
