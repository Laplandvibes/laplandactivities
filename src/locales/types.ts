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
    fishing: string;
    bookCta: string;
    /** Short nav CTA shown at md (768-1023px) where the desktop nav is crowded. */
    bookCtaShort: string;
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
  fishing: {
    metaTitle: string;
    metaDescription: string;
    /** Visible "regulations change yearly — verify before fishing" banner line. */
    verifyBanner: string;
    hero: { eyebrow: string; title: string; sub: string; ctaBook: string; ctaRules: string; trustLine: string };
    /** Section eyebrows (uppercase kicker labels) used across the page's sections. */
    eyebrows: { eco: string; freshwater: string; legal: string; liability: string; explore: string };
    /** Alt text for the three section photos (screen-reader visible). */
    imageAlts: { river: string; ice: string; kingCrab: string };
    /** Eco red-thread: 4 stories — Teno collapse, pink salmon, king crab, Tornio recovery. */
    eco: { title: string; lead: string; stories: { title: string; body: string }[] };
    firstThings: { title: string; body1: string; body2: string; feeLink: string; mapLink: string };
    /** River cards: Tornio, Teno, Ounasjoki, Ivalojoki, Simojoki, wilderness. */
    rivers: { title: string; lead: string; cards: { name: string; badge: string; body: string; crNote: string; officialLabel: string }[] };
    lakes: { title: string; body: string };
    tornioBox: { title: string; rules: string[]; verifyLine: string; ctaStay: string };
    iceFishing: { title: string; body: string; safetyTitle: string; safetyBody: string; cta: string };
    licenses: { title: string; fee: string; freeRights: string; waterPermits: string; sizesTitle: string; sizes: string[]; alwaysCheck: string };
    teno: { title: string; body: string; whatYouCan: string; warnThirdParty: string };
    norway: { title: string; seaBody: string; exportTitle: string; exportBody: string; crabTitle: string; crabBody: string; cta: string; ribLabel: string; carNote: string };
    gettingThere: { title: string; body: string; cta: string };
    gear: { title: string; body: string };
    season: { title: string; rows: { period: string; what: string }[] };
    faq: { title: string; items: { q: string; a: string }[] };
    /** "Keep exploring" cross-link cards at the page end — 3 items: all fishing tours, LaplandNature freshwater, LaplandVisit arctic Norway. */
    crossLinks: { title: string; blurb: string }[];
  };
  /** /privacy — localized <title> + <meta description> (all 12 locales). */
  privacy: { metaTitle: string; metaDescription: string };
  /** /terms — localized <title> + <meta description> (all 12 locales). */
  terms: { metaTitle: string; metaDescription: string };
  /** /cookie-policy — localized <title> + <meta description> (all 12 locales). */
  cookie: { metaTitle: string; metaDescription: string };
  notFound: {
    metaTitle: string;
    h2: string;
    body: string;
    backCta: string;
  };
};

// ---------- ENGLISH ----------
