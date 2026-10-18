import type { GygPick } from '../shared/gyg/picks';

/**
 * Kohdekohtaiset GetYourGuide-poiminnat — "meidän poimintamme" per paikkakunta
 * (Vesa 2026-09-20: *"miksi meillä ei ole täällä samantyylisiä karuselleja valittuna
 * valmiiksi ja deeplinkit niihin, esim 4 kohdetta joka paikkakuntasivulla mitä siellä
 * voi tehdä, meidän poiminnat niin sanotusti? saadaan eloa?"*).
 *
 * ── Mistä rivit tulevat ────────────────────────────────────────────────────
 * Valittu `_gyg-catalog/catalog.md`-luettelosta (839 tuotetta, crawl 2026-07-30) ja
 * **jokainen avattu selaimessa 2026-09-20**: HTTP 200, ei uudelleenohjausta toiseen
 * tuotteeseen, ja sivun otsikko vastaa alla olevaa nimeä.
 *
 * 🔴🔴 ÄLÄ koskaan lisää riviä arvaamalla tai käsin polkua muokkaamalla. Väärä id ei
 * anna 404:ää vaan tarjoilee jonkin aivan muun tuotteen jossain päin maailmaa
 * (picks.ts:n oma varoitus, mitattu 2026-07-29).
 *
 * 🔴 **Luettelo vanhenee nopeasti.** Kun nämä tarkistettiin 20.9.2026, heinäkuun
 * crawlin tuotteista **8 oli jo poistunut** (Rovaniemi ×2, Saariselkä, Inari ×2,
 * Ruka, Kemi, Luosto ×2). Poistunut tuote ei näytä rikkinäiseltä: GetYourGuide
 * palauttaa 200 ja oman etusivunsa tai kaupunkisivunsa. Ainoa tapa nähdä se on
 * verrata sivun otsikkoa odotettuun. Tarkista rivit uudelleen ennen jokaista
 * isompaa julkaisua.
 *
 * 🔴🔴 **Toinen kuoleman muoto (mitattu 18.10.2026): tyhjä tuotesivu.** Viisi 31:stä ei
 * ollut enää varattavissa. Kaksi ohjautui sijaintisivulle ja pudotti `partner_id`:n
 * (CLAUDE.md:n tuntema muoto), mutta kolme pysyi OMASSA osoitteessaan `partner_id`
 * tallessa ja näytti silti pelkän ylä- ja alapalkin: ei h1:tä, ei varausnappia,
 * otsikkona GetYourGuiden yleinen "Book Things To Do, Attractions, and Tours".
 * Osoitteen ja `partner_id`:n tarkistus päästää tämän läpi. Tarkista siis AINA
 * renderöidyn sivun h1 (`document.querySelector('h1')`), ei vain osoitetta.
 *
 * ── Kortin nimi (Vesa 18.10.2026) ───────────────────────────────────────────
 * `title` on tuotteen oma nimi GetYourGuidella sanasta sanaan, vain alun
 * "Paikka: " -etuliite pois, koska paikka näkyy kortilla omalla rivillään. Ei
 * lyhennetä eikä kaunisteta: lukijan pitää tunnistaa sama tuote klikin jälkeen.
 *
 * `titles` = GYG:n OMA nimi sen kieliversiosta, jonka kortin linkki avaa
 * (`/<kieli-maa>/-tNNN/`, h1), luettu selaimessa 18.10.2026 (Vesa: "hae jokaisen
 * poimintakortin nimi GetYourGuidelta sillä kielellä, jolla lukija sivua katsoo").
 * Ei meidän käännöksiämme: kortti ja klikin jälkeinen sivu sanovat saman, myös
 * silloin kun GYG ei ole kääntänyt nimeä (karting fi/de = englanti).
 * Käsittely: sama etuliitesääntö kuin englannissa, iso alkukirjain etuliitteen
 * jälkeen (nl "IJ"), loppupiste pois. Kolme poikkeusta, koska GYG:n käännös oli
 * asiavirhe tai rikki: t1167711 sv "snöskoter" (= moottorikelkka, tuote on
 * lumikenkäretki) ja fi "kansallispuisto" (Muotkatunturi ei ole kansallispuisto),
 * t830206 fi rikkinäistä englantia ⇒ GYG:n englanninkielinen nimi.
 * 🔴 Hae nimet hitaasti, yksi sivu kerrallaan: kolme rinnakkaista hakua antoi
 * 18.10. ensin 429:n ja sitten Cloudflaren tarkistussivun (ei ohiteta).
 *
 * 🔴 Kemijärvelle ja Pyhä-Luostolle EI ole karusellia: Kemijärven kaksi tuotetta
 * ovat molemmat Rovaniemeltä lähteviä retkiä, ja Luoston kolmesta jäi tarkistuksen
 * jälkeen yksi. Tyhjää ei täytetä naapurikaupungin tuotteilla, koska kortti lupaisi
 * silloin jotain mitä paikkakunnalla ei ole.
 *
 * ── Poistuneet 18.10.2026 ──────────────────────────────────────────────────
 * Ohjautui sijaintisivulle: saariselka t1002928 (forest treasures), inari t993452
 * (Lake Inari fishing + boating). Tyhjä tuotesivu: yllas t1009688 (ice fishing by
 * foot), saariselka t810536 (horse riding), kemi t504004 (Sampo afternoon cruise),
 * korvaajaehdokkaista yllas t672280 (aurora photo tour) ja kemi t727384 (Arktis-
 * risteily). Sampo-, Arktis- ja jäätuotteet voivat
 * palata talvikaudeksi: avaa ennen palautusta.
 * Korvaajat avattu samana päivänä: yllas t1289642, saariselka t800450 + t805244,
 * inari t1303463, tornio t727868 (Sampo Haaparannan/Tornion lähdöllä) + t908250.
 *
 * ── Poistuneet 20.9.2026 (älä palauta ilman uutta mittausta) ───────────────
 * rovaniemi t407463 (aurora ice floating), t301248 (aurora snowmobile safari),
 * saariselka t853272 (husky + kennel), inari t1005215 (cultural day), t1003775
 * (e-fatbike), ruka t1123076 (reindeer + husky), t1098667 (Juuma canoe),
 * kemi t1131494 (SnowExperience ticket), t1033297 (Old Kemi cruise),
 * luosto t1072856 (husky 10 km), t1247324 (berry picking).
 *
 * ── Kuvat ──────────────────────────────────────────────────────────────────
 * Näissä korteissa EI ole valokuvaa. Tuotekortti on lupaus yhdestä nimetystä
 * tuotteesta, joten sen kuvaksi ei kelpaa yleiskuva samasta lajista (§24), eikä
 * GetYourGuiden oma kuva ole meidän käytettävissämme (se kuuluu järjestäjälle).
 * Kortin ilme tehdään typografialla ja ikonilla — ei tekoälykuvalla.
 *
 * `place` kertoo lähtöpaikan sellaisena kuin se GetYourGuidella on. Se voi poiketa
 * sivun paikkakunnasta (Posion Korouoma-retket lähtevät Rovaniemeltä, Inarin
 * Siida-päivä Saariselältä) — juuri siksi se näytetään.
 */
/** Päivä, jona jokainen alla oleva rivi avattiin selaimessa (näytetään lukijalle). */
export const PICKS_CHECKED = '2026-10-18';

export const DESTINATION_PICKS: Record<string, GygPick[]> = {
  rovaniemi: [
    {
      path: 'rovaniemi-l2653/rovaniemi-arctic-snowhotel-tour-and-snow-sauna-experience-t454802', title: 'Arctic SnowHotel and Snow Sauna Experience', place: 'Rovaniemi', duration: '5–6 h', sid: 'dest_rovaniemi_snowhotel',
      titles: {
        fi: "Arctic Snow Hotel - ja lumisaunaelämykset",
        sv: "Upplevelse med det arktiska snöhotellet och snöbastu",
        de: "Arctic Snow Hotel und Schneesauna-Erlebnis",
        es: "Arctic SnowHotel y experiencia en una sauna de nieve",
        fr: "Arctic SnowHotel et sauna de neige",
        it: "Arctic SnowHotel e sauna finlandese nella neve",
        nl: "Arctic SnowHotel en sneeuwsauna",
        "pt-BR": "Arctic SnowHotel e Sauna de Neve",
        ja: "アークティック スノー ホテルとスノー サウナ体験",
        ko: "북극 스노우호텔 & 스노우 사우나 체험",
        "zh-CN": "北极雪地酒店和雪地桑拿体验",
      },
    },
    {
      path: 'rovaniemi-l2653/rovaniemi-ice-karting-open-race-t311913', title: 'Arctic Ice Karting Tour', place: 'Rovaniemi', duration: '1,5 h', sid: 'dest_rovaniemi_ice_karting',
      titles: {
        fi: "Arctic Ice Karting Tour",
        sv: "Karting-tur på den arktiska isen",
        de: "Arctic Ice Karting Tour",
        es: "Tour de karts sobre hielo en el Ártico",
        fr: "Circuit de karting sur glace arctique",
        it: "Tour di karting sul ghiaccio artico",
        nl: "Arctische ijskarttour",
        "pt-BR": "Passeio de Kart no Gelo do Ártico",
        ja: "北極アイスカートツアー",
        ko: "북극 아이스 카팅 투어",
        "zh-CN": "北极冰上卡丁车之旅",
      },
    },
    {
      path: 'rovaniemi-l2653/arctic-wilderness-hike-from-rovaniemi-day-evening-t751631', title: 'Arctic Wilderness Hike from Rovaniemi (Day & Evening)', place: 'Rovaniemi', duration: '3,5–7 h', sid: 'dest_rovaniemi_wilderness_hike',
      titles: {
        fi: "Arktinen erämaaretki Rovaniemeltä (päivä ja ilta)",
        sv: "Arktisk vildmarksvandring från Rovaniemi (dag och kväll)",
        de: "Arktische Wildniswanderung ab Rovaniemi (Tag & Abend)",
        es: "Ruta de senderismo por la naturaleza ártica desde Rovaniemi (de día y de noche)",
        fr: "Randonnée dans la nature sauvage arctique au départ de Rovaniemi (journée et soirée)",
        it: "Escursione nella natura selvaggia artica da Rovaniemi (giorno e sera)",
        nl: "Wandeltocht door de Arctische wildernis vanuit Rovaniemi (overdag en 's avonds)",
        "pt-BR": "Caminhada pela natureza selvagem do Ártico saindo de Rovaniemi (dia e noite)",
        ja: "ロヴァニエミ発：北極圏の自然の中をハイキング（日中＆夜）",
        ko: "로바니에미 출발 북극 자연 하이킹(낮 & 저녁)",
        "zh-CN": "罗瓦涅米极地荒野徒步之旅（白天与夜晚）",
      },
    },
    {
      path: 'rovaniemi-l2653/rovaniemi-all-day-canoe-adventure-t388479', title: 'All-Day Canoe Adventure', place: 'Rovaniemi', duration: '6 h', sid: 'dest_rovaniemi_canoe',
      titles: {
        fi: "Koko päivän melontaseikkailu",
        sv: "Kanotäventyr under hela dagen",
        de: "Ganztägiges Kanu-Abenteuer",
        es: "Aventura de un día completo en canoa",
        fr: "Aventure en canoë d'une journée entière",
        it: "Avventura in canoa tutto il giorno",
        nl: "Kano-avontuur voor de hele dag",
        "pt-BR": "Aventura de Canoa de 1 Dia",
        ja: "1日カヌー アドベンチャー",
        ko: "종일 카누 어드벤처",
        "zh-CN": "全天独木舟探险",
      },
    },
  ],
  levi: [
    {
      path: 'sirkka-l139331/levi-arctic-combo-husky-reindeer-ride-t503967', title: 'Arctic Combo – Husky & Reindeer Ride', place: 'Levi', duration: '2 h', sid: 'dest_levi_husky_reindeer',
      titles: {
        fi: "Arctic Combo – husky- ja porokelkkaretki",
        sv: "Arktisk kombo – husky- och renridning",
        de: "Arktische Kombination – Husky- und Rentierfahrt",
        es: "Experiencia ártica combinada – paseo en trineo de huskies y renos",
        fr: "Combo Arctique – Traîneau à chiens et rennes",
        it: "Combo artico – Giro in husky e renne",
        nl: "Arctische combi – Husky- en rendiertocht",
        "pt-BR": "Combo Ártico – Passeio com Huskies e Renas",
        ja: "北極圏コンボ – ハスキー犬ぞりとトナカイそり体験",
        ko: "북극 패키지 – 허스키 & 순록 타기",
        "zh-CN": "北极组合体验：骑乘哈士奇和驯鹿",
      },
    },
    {
      path: 'sirkka-l139331/levi-6-hour-authentic-snowmobile-safari-to-lappish-villages-t997691', title: 'Authentic Snowmobile Safari to Lappish Villages', place: 'Levi', duration: '6 h', sid: 'dest_levi_snowmobile_villages',
      titles: {
        fi: "Aito moottorikelkkasafari lappalaisiin kyliin",
        sv: "Autentisk snöskotersafari till lappländska byar",
        de: "Authentische Schneemobil-Safari zu den lappländischen Dörfern",
        es: "Auténtico safari en moto de nieve a pueblos lapones",
        fr: "Safari authentique en motoneige vers les villages lapons",
        it: "Autentico safari in motoslitta nei villaggi lapponi",
        nl: "Authentieke sneeuwscootersafari naar Lapse dorpen",
        "pt-BR": "Safári autêntico de moto de neve até vilarejos da Lapônia",
        ja: "ラップランドの村へ行く本格的なスノーモービルサファリ",
        ko: "라플란드 마을로 떠나는 정통 스노모바일 사파리",
        "zh-CN": "前往拉普兰村庄的正宗雪地摩托之旅",
      },
    },
    {
      path: 'kittila-l165074/levi-cross-country-skiing-tour-for-beginners-t521039', title: 'Cross-Country Skiing Tour for Beginners', place: 'Levi', duration: '2 h', sid: 'dest_levi_cross_country',
      titles: {
        fi: "Maastohiihtoretki aloittelijoille",
        sv: "Längdskidåkningstur för nybörjare",
        de: "Langlauf-Tour für Anfänger",
        es: "Tour de esquí de fondo para principiantes",
        fr: "Excursion de ski de fond pour débutants",
        it: "Tour di sci di fondo per principianti",
        nl: "Langlauftour voor beginners",
        "pt-BR": "Excursão de Esqui Cross-Country para Iniciantes",
        ja: "初心者向けクロスカントリースキー ツアー",
        ko: "초보자를 위한 크로스컨트리 스키 투어",
        "zh-CN": "初学者越野滑雪之旅",
      },
    },
    {
      path: 'sirkka-l139331/levi-northern-lights-canoe-tour-t985209', title: 'Canoeing Under the Arctic Night Sky', place: 'Levi', duration: '3 h', sid: 'dest_levi_night_canoe',
      titles: {
        fi: "Melontaa arktisen yötaivaan alla",
        sv: "Kanotpaddling under den arktiska natthimlen",
        de: "Kanufahrt unter dem arktischen Nachthimmel",
        es: "Piragüismo bajo el cielo nocturno del Ártico",
        fr: "Canoë sous le ciel nocturne de l'Arctique",
        it: "In canoa sotto il cielo artico notturno",
        nl: "Kanoën onder de Arctische nachthemel",
        "pt-BR": "Canoagem sob o céu noturno do Ártico",
        ja: "北極圏の夜空の下でのカヌー体験",
        ko: "북극의 밤하늘 아래에서 카누 타기",
        "zh-CN": "在北极夜空下划独木舟",
      },
    },
  ],
  yllas: [
    {
      path: 'akaslompolo-l2931/yllas-wilderness-snowmobile-tour-t96006', title: 'Full Day Snowmobile Tour to Wilderness', place: 'Ylläs', duration: '6 h', sid: 'dest_yllas_snowmobile_day',
      titles: {
        fi: "Koko päivän lumikelkkaretki erämaahan",
        sv: "Heldagstur med snöskoter i vildmarken",
        de: "Ganztägige Schneemobil-Tour in die Wildnis",
        es: "Tour de día completo en moto de nieve por la naturaleza",
        fr: "Excursion d'une journée en motoneige dans la nature sauvage",
        it: "Tour di 1 giorno in motoslitta nella natura selvaggia",
        nl: "Dagtour met een sneeuwscooter naar de wildernis",
        "pt-BR": "Excursão de 1 Dia de Snowmobile pela Natureza Selvagem",
        ja: "大自然へ行くスノーモービル1日ツアー",
        ko: "황야로 떠나는 스노모바일 종일 투어",
        "zh-CN": "荒野摩托雪橇全日游",
      },
    },
    {
      path: 'akaslompolo-l2931/snowshoe-to-kellostapuli-smoked-fish-lunch-local-museum-t1100044', title: 'Snowshoe Hike to Kellostapuli and Gourmet Experience', place: 'Ylläs', duration: '5 h', sid: 'dest_yllas_snowshoe_kellostapuli',
      titles: {
        fi: "Kellostapulille suuntautuva lumikenkävaellus ja gourmet-elämys",
        sv: "Vandring med snöskor till Kellostapuli och gourmetupplevelse",
        de: "Schneeschuh-Wanderung zum Kellostapuli und Gourmet-Erlebnis",
        es: "Ruta de senderismo con raquetas de nieve hasta Kellostapuli y experiencia gourmet",
        fr: "Randonnée en raquettes à neige jusqu'au Kellostapuli et expérience gastronomique",
        it: "Escursione con le ciaspole a Kellostapuli ed esperienza gourmet",
        nl: "Sneeuwschoenwandeltocht naar Kellostapuli en culinaire ervaring",
        "pt-BR": "Caminhada com raquetes de neve até Kellostapuli e experiência gourmet",
        ja: "ケッロスタプリへのスノーシューハイキング＆グルメ体験",
        ko: "켈로스타풀리까지 스노우슈 하이킹하고 미식 체험하기",
        "zh-CN": "穿雪鞋徒步前往凯洛斯塔普利并享受美食体验",
      },
    },
    {
      path: 'akaslompolo-l2931/day-in-the-wilderness-by-traditional-forest-skis-yllas-t97059', title: 'Guided Wilderness Ski Tour with Outdoor Lunch', place: 'Ylläs', duration: '6 h', sid: 'dest_yllas_forest_skis',
      titles: {
        fi: "Opastettu erämaahiihtoretki ulkoilmalounaalla",
        sv: "Guidad tur med vildmarksskidor och utomhuslunch",
        de: "Geführte Wildnis Skitour mit Mittagessen im Freien",
        es: "Tour guiado de esquí por la naturaleza con almuerzo al aire libre",
        fr: "Visite guidée à ski dans la nature avec déjeuner en plein air",
        it: "Tour guidato di sci nella natura selvaggia con pranzo all'aperto",
        nl: "Begeleide skitour door de wildernis met lunch in de buitenlucht",
        "pt-BR": "Excursão Guiada de Esqui na Natureza com Almoço ao Ar Livre",
        ja: "ガイド付きの原生林スキー ツアー（屋外での昼食付き）",
        ko: "야외 점심 식사가 포함된 황야 스키 가이드 투어",
        "zh-CN": "带户外午餐的荒野滑雪导览游",
      },
    },
    {
      path: 'yllas-l87669/yllas-family-snowmobile-safari-and-ice-fishing-adventure-t1289642', title: 'Family Snowmobile Safari and Ice Fishing Adventure', place: 'Ylläs', duration: '3 h', sid: 'dest_yllas_family_ice_fishing',
      titles: {
        fi: "Perheiden moottorikelkkasafari ja pilkkiseikkailu",
        sv: "Snöskotersafari och isfiskeäventyr för familjer",
        de: "Schneemobil-Safari und Eisfischen für die ganze Familie – Abenteuertour",
        es: "Safari familiar en moto de nieve y aventura de pesca en hielo",
        fr: "Randonnée en motoneige en famille et pêche sur glace",
        it: "Safari in motoslitta per famiglie e avventura di pesca sul ghiaccio",
        nl: "Sneeuwscootersafari voor gezinnen en ijsvissen-avontuur",
        "pt-BR": "Safári de Moto de Neve em Família e Aventura de Pesca no Gelo",
        ja: "ファミリー向けスノーモービル サファリ＆氷上釣りアドベンチャー",
        ko: "가족과 함께하는 스노모바일 사파리 및 얼음 낚시 모험",
        "zh-CN": "家庭雪地摩托之旅和冰上钓鱼探险",
      },
    },
  ],
  saariselka: [
    {
      path: 'saariselka-l181615/saariselka-aurora-hunting-tour-with-northern-lights-experts-t826892', title: 'Aurora Hunting Photography Tour', place: 'Saariselkä', duration: '3 h', sid: 'dest_saariselka_aurora_photo',
      titles: {
        fi: "Revontulien valokuvausretki",
        sv: "Fototur för att jaga norrsken",
        de: "Fototour auf der Jagd nach den Nordlichtern",
        es: "Tour fotográfico de búsqueda de auroras boreales",
        fr: "Excursion photographique à la recherche des aurores boréales",
        it: "Tour fotografico a caccia dell'aurora boreale",
        nl: "Fototour op jacht naar het noorderlicht",
        "pt-BR": "Excursão Fotográfica de Caça à Aurora Boreal",
        ja: "オーロラ観賞＆写真撮影ツアー",
        ko: "오로라 사냥 사진 촬영 투어",
        "zh-CN": "极光狩猎摄影之旅",
      },
    },
    {
      path: 'saariselka-l181615/saariselka-evening-snowmobile-tour-with-fire-picnic-t516799', title: 'Evening Snowmobile Tour with Fire & picnic', place: 'Saariselkä', duration: '3 h', sid: 'dest_saariselka_snowmobile_evening',
      titles: {
        fi: "Nuotio & piknik - Iltainen moottorikelkkaretki",
        sv: "Kvällstur med snöskoter med eld och picknick",
        de: "Abendliche Snowmobile Tour mit Feuer & Picknick",
        es: "Tour en motonieve por la tarde con hoguera y pícnic",
        fr: "Excursion nocturne en motoneige avec feu et pique-nique",
        it: "Tour serale in motoslitta con fuoco e picnic",
        nl: "Avondsneeuwscootertour met kampvuur en picknick",
        "pt-BR": "Passeio Noturno de Moto de Neve com Fogueira e Piquenique",
        ja: "焚き火＆ピクニック付き夜のスノーモービルツアー",
        ko: "저녁 스노모바일 투어(모닥불 & 피크닉 포함)",
        "zh-CN": "萨里塞尔卡篝火与野餐雪地摩托傍晚之旅",
      },
    },
    {
      path: 'saariselka-l181615/saariselka-snowshoeing-tour-in-urho-kekkonen-national-park-t800450', title: 'Snowshoeing Tour in Urho Kekkonen National Park', place: 'Saariselkä', duration: '2–4 h', sid: 'dest_saariselka_snowshoe_ukk',
      titles: {
        fi: "Kekkosen kansallispuiston lumikenkäilyretki Urho Kekkosen kansallispuistossa",
        sv: "Snöskovandring i Urho Kekkonens nationalpark",
        de: "Schneeschuhwandern Tour im Urho Kekkonen National Park",
        es: "Tour con raquetas de nieve por el Parque Nacional Urho Kekkonen",
        fr: "Randonnée en raquettes dans le parc national d'Urho Kekkonen",
        it: "Escursione con le racchette da neve nel Parco Nazionale Urho Kekkonen",
        nl: "Sneeuwschoenwandeling in Nationaal Park Urho Kekkonen",
        "pt-BR": "Passeio com raquetes de neve no Parque Nacional Urho Kekkonen",
        ja: "ウルホ・ケッコネン国立公園のスノーシューツアー",
        ko: "우르호 케코넨 국립공원 스노슈 투어",
        "zh-CN": "乌尔霍凯科宁国家公园的雪鞋徒步之旅",
      },
    },
    {
      path: 'saariselka-l181615/saariselka-northern-lights-reindeer-sledding-tour-t805244', title: 'Northern Lights & Reindeer Sledding Tour', place: 'Saariselkä', duration: '2,5 h', sid: 'dest_saariselka_reindeer_aurora',
      titles: {
        fi: "Revontulet ja porokelkkaretki",
        sv: "Norrsken och renskötartur med släde",
        de: "Nordlicht & Rentierschlitten Tour",
        es: "Tour de la aurora boreal y paseo en trineo de renos",
        fr: "Observation des aurores boréales et randonnée en traîneau à rennes",
        it: "Tour dell'aurora boreale e delle slitte trainate da renne",
        nl: "Noorderlicht- en rendiersleetour",
        "pt-BR": "Excursão Aurora Boreal e Passeio de Trenó com Renas",
        ja: "オーロラ鑑賞＆トナカイのソリツアー",
        ko: "북극광 & 순록 썰매 투어",
        "zh-CN": "萨里塞尔卡北极光与驯鹿雪橇之旅",
      },
    },
  ],
  inari: [
    {
      path: 'inari-l245909/saariselka-visit-to-sami-museum-siida-inari-village-t1391922', title: 'Visit to Sámi Museum Siida & Inari Village', place: 'Saariselkä', duration: '6 h', sid: 'dest_inari_siida_village',
      titles: {
        fi: "Vierailu Saamelaismuseo Siidassa ja Inarin kylässä",
        sv: "Besök på samemuseet Siida och i Inaribyn",
        de: "Besuch im Sámi-Museum Siida und im Dorf Inari",
        es: "Visita al Museo Sámi Siida y al pueblo de Inari",
        fr: "Visite du musée Sámi Siida et du village d'Inari",
        it: "Visita al Museo sami Siida e al villaggio di Inari",
        nl: "Bezoek aan Samimuseum Siida en dorp Inari",
        "pt-BR": "Visita ao Museu Sámi Siida e à Vila de Inari",
        ja: "サーミ博物館「シーダ」とイナリ村訪問",
        ko: "사미 박물관 '시이다' 및 이나리 마을 방문",
        "zh-CN": "参观萨米博物馆Siida和伊纳里村",
      },
    },
    {
      path: 'inari-l245909/inari-sami-reindeer-herding-family-workshop-visitlunch-t1303463', title: 'Sámi Reindeer Herding Family Workshop & Visit+Lunch', place: 'Inari', duration: '4 h', sid: 'dest_inari_sami_reindeer',
      titles: {
        fi: "Saamelaisperheen porotalouden työpaja ja vierailu + lounas",
        sv: "Workshop och besök hos en samisk renskötselfamilj + lunch",
        de: "Workshop und Besuch bei einer samischen Rentierhirtenfamilie + Mittagessen",
        es: "Taller familiar de pastoreo de renos sami, visita y almuerzo",
        fr: "Atelier et visite chez une famille d'éleveurs de rennes samis + déjeuner",
        it: "Laboratorio e visita a una famiglia di allevatori di renne Sámi + pranzo",
        nl: "Samische rendierhoeder-workshop voor gezinnen & bezoek + lunch",
        "pt-BR": "Oficina em Família sobre Criação de Renas Sámi e Visita + Almoço",
        ja: "サーミのトナカイ飼育家族によるワークショップ＆訪問＋ランチ",
        ko: "사미족 가족의 순록 목축 워크숍 및 방문+점심 식사",
        "zh-CN": "萨米驯鹿牧民家庭工作坊与参观 + 午餐",
      },
    },
    {
      path: 'inari-l245909/inari-ice-fishing-safari-with-sleigh-ride-and-snacks-t1139451', title: 'Ice Fishing Safari on Lake Inari by Snowmobile Sleigh', place: 'Ivalo', duration: '4 h', sid: 'dest_inari_ice_fishing_sleigh',
      titles: {
        fi: "Moottorikelkalla Inarijärvelle pilkille",
        sv: "Isfiskesafari på Inarisjön med snöskoter",
        de: "Eisfisch-Safari auf dem Inari-See mit dem Schneemobil-Schlitten",
        es: "Safari de pesca en hielo en el lago Inari en trineo tirado por moto de nieve",
        fr: "Safari de pêche sur glace sur le lac Inari en motoneige",
        it: "Pesca sul ghiaccio sul lago Inari in motoslitta",
        nl: "IJsvissafari op het Inari-meer met slee getrokken door sneeuwscooter",
        "pt-BR": "Safári de Pesca no Gelo no Lago Inari de Trenó Puxado por Snowmobile",
        ja: "スノーモービルそりでイナリ湖のアイスフィッシングサファリ",
        ko: "스노모빌 썰매를 타고 이나리 호수에서 즐기는 얼음 낚시 사파리",
        "zh-CN": "乘坐雪地摩托雪橇在伊纳里湖冰钓",
      },
    },
    {
      path: 'inari-l245909/muotkantunturi-park-inari-mini-snowshoe-expedition-t1167711', title: 'Muotkantunturi Park, Inari – Mini snowshoe expedition', place: 'Inari', duration: '3 h', sid: 'dest_inari_snowshoe',
      titles: {
        fi: "Muotkantunturi, Inari – Mini-retki lumikenkiä käyttäen",
        sv: "Muotkantunturi Park, Inari – Mini-snöskoexpedition",
        de: "Park Muotkantunturi, Inari – Mini-Schneeschuh-Expedition",
        es: "Parque Muotkantunturi, Inari - Mini expedición con raquetas de nieve",
        fr: "Parc Muotkantunturi, Inari - Mini expedition en raquettes de neige",
        it: "Parco Muotkantunturi, Inari - Mini spedizione con le ciaspole",
        nl: "Muotkantunturi Park, Inari - Mini-sneeuwschoenexpeditie",
        "pt-BR": "Parque Muotkantunturi, Inari - Mini expedição com raquetes de neve",
        ja: "ムトカンツンツリ公園、イナリ - ミニスノーシューズの遠征",
        ko: "무오트칸툰투리 공원, 이나리 - 미니 스노우슈 미니 원정",
        "zh-CN": "伊纳里 Muotkantunturi 公园 - 雪鞋迷你探险",
      },
    },
  ],
  posio: [
    {
      path: 'posio-l253041/korouoma-canyon-frozen-waterfalls-hike-bbq-experience-t830206', title: 'Korouoma Canyon: Frozen Waterfalls Hike & BBQ Experience', place: 'Posio', duration: '6 h', sid: 'dest_posio_korouoma_bbq',
      titles: {
        fi: "Korouoma Canyon: Frozen Waterfalls Hike & BBQ Experience",
        sv: "Korouoma Canyon: Vandring vid frusna vattenfall och BBQ-upplevelse",
        de: "Korouoma-Schlucht: Gefrorene Wasserfälle Wanderung & BBQ Erlebnis",
        es: "Cañón de Korouoma: ruta de senderismo por cascadas congeladas y experiencia con barbacoa",
        fr: "Canyon de Korouoma : Randonnée et barbecue dans les cascades gelées",
        it: "Korouoma Canyon: Escursione alle cascate ghiacciate ed esperienza barbecue",
        nl: "Korouoma Canyon: wandeltocht langs bevroren watervallen en barbecue-ervaring",
        "pt-BR": "Cânion de Korouoma: Trilha pelas Cachoeiras Congeladas e Churrasco",
        ja: "コロウオマ渓谷：氷瀑ハイキング＆BBQ体験",
        ko: "코로우마 캐니언: 얼어붙은 폭포 하이킹 & 바비큐 체험",
        "zh-CN": "科鲁奥玛峡谷：冰冻瀑布徒步旅行和烧烤体验",
      },
    },
    {
      path: 'posio-l253041/riisitunturi-national-park-10km-husky-ride-and-lunch-t1272707', title: 'Riisitunturi National Park: 10km Husky Ride and Lunch', place: 'Posio', duration: '9 h', sid: 'dest_posio_riisitunturi_husky',
      titles: {
        fi: "Riisitunturin kansallispuisto: 10 km:n huskykyydit ja lounas",
        sv: "Riisitunturi nationalpark: 10 km huskytur och lunch",
        de: "Riisitunturi-Nationalpark: 10 km lange Husky-Schlittenfahrt und Mittagessen",
        es: "Parque Nacional de Riisitunturi: paseo en trineo de huskies de 10 km y almuerzo",
        fr: "Parc national de Riisitunturi : balade de 10 km en traîneau à huskies et déjeuner",
        it: "Parco nazionale di Riisitunturi: giro in slitta di 10 km e pranzo",
        nl: "Nationaal Park Riisitunturi: huskyrit van 10 km en lunch",
        "pt-BR": "Parque Nacional Riisitunturi: Passeio de trenó puxado por huskies de 10 km e almoço",
        ja: "リーシトゥントゥリ国立公園：ハスキー犬のソリでの10kmの走行体験＆ランチ",
        ko: "리시툰투리 국립공원: 10km 허스키 타기 및 점심 식사",
        "zh-CN": "里西通图里国家公园：10 公里哈士奇雪橇之旅和午餐",
      },
    },
    {
      path: 'posio-l253041/rovaniemi-korouoma-auttikongas-treasures-hiking-adventure-t1231030', title: 'Korouoma & Auttiköngäs Treasures Hiking Adventure', place: 'Rovaniemi', duration: '7 h', sid: 'dest_posio_korouoma_auttikongas',
      titles: {
        fi: "Korouoma & Auttiköngäs – aarteiden vaellusseikkailu",
        sv: "Korouoma & Auttiköngäs – vandringsäventyr med skatter",
        de: "Wanderabenteuer zu den Schätzen von Korouoma & Auttiköngäs",
        es: "Aventura de senderismo por los tesoros de Korouoma y Auttiköngäs",
        fr: "Aventure randonnée à Korouoma et Auttiköngäs",
        it: "Avventura escursionistica tra i tesori di Korouoma e Auttiköngäs",
        nl: "Avontuurlijke wandeltocht naar de schatten van Korouoma en Auttiköngäs",
        "pt-BR": "Trilha pelos Tesouros de Korouoma e Auttiköngäs",
        ja: "コロウオマ渓谷＆アウッティケンゲス滝の秘宝ハイキング アドベンチャー",
        ko: "코로우오마 & 아우티쾨니아스 트레져 하이킹 어드벤처",
        "zh-CN": "Korouoma 和 Auttiköngäs 珍宝徒步探险",
      },
    },
    {
      path: 'posio-l253041/rovaniemi-water-adventure-day-kayaking-waterfalls-hike-t1391700', title: 'Water Adventure — Kayaking, Auttiköngäs, Korouoma', place: 'Rovaniemi', duration: '10 h', sid: 'dest_posio_water_adventure',
      titles: {
        fi: "Vesiurheilu – kajakointi, Auttiköngäs, Korouoma",
        sv: "Vattenäventyr – kajakpaddling, Auttiköngäs, Korouoma",
        de: "Wasserabenteuer – Kajakfahren, Auttiköngäs, Korouoma",
        es: "Aventura acuática — kayak, Auttiköngäs, Korouoma",
        fr: "Aventure aquatique — kayak, Auttiköngäs, Korouoma",
        it: "Avventura acquatica — kayak, Auttiköngäs, Korouoma",
        nl: "Wateravontuur — kajakken, Auttiköngäs, Korouoma",
        "pt-BR": "Aventura Aquática — Caiaque, Auttiköngäs, Korouoma",
        ja: "水上アドベンチャー（カヤック、アウッティケンギャス滝、コロウオマ渓谷）",
        ko: "수상 어드벤처 — 카약, 아우티쾨인가스, 코로우오마",
        "zh-CN": "水上探险——皮划艇、Auttiköngäs、Korouoma",
      },
    },
  ],
  tornio: [
    {
      path: 'haparanda-l157602/haparandatornio-icebreaker-sampo-cruise-with-ice-floating-t727868', title: 'Icebreaker Sampo Cruise with Ice Floating', place: 'Haparanda/Tornio', duration: '8–8,5 h', sid: 'dest_tornio_sampo_haparanda',
      titles: {
        fi: "Jäänmurtaja Sampo risteily ja jäällä kelluminen",
        sv: "Kryssning med isbrytaren Sampo och isflottning",
        de: "Eisbrecher Sampo Kreuzfahrt mit Eisschwimmen",
        es: "Paseo en barco rompehielos Sampo con flotación en el hielo",
        fr: "Croisière sur le brise-glace Sampo avec flottaison sur glace",
        it: "Crociera sul rompighiaccio Sampo con galleggiamento sul ghiaccio",
        nl: "IJsbreker-boottocht met Sampo en drijven op het ijs",
        "pt-BR": "Cruzeiro Icebreaker Sampo com Flutuação no Gelo",
        ja: "砕氷船サンポ号クルーズ（アイスフローティング体験付き）",
        ko: "쇄빙선 삼포 크루즈 & 얼음 위에 떠 있기",
        "zh-CN": "破冰船桑波号游轮及冰上漂浮",
      },
    },
    {
      path: 'kemi-l98127/kemi-tornio-husky-sled-ride-with-hot-drink-t901372', title: 'Husky Sled Ride with Hot Drink', place: 'Kemi-Tornio', duration: '2,5 h', sid: 'dest_tornio_husky',
      titles: {
        fi: "Husky-kelkkailu ja kuuma juoma",
        sv: "Husky-slädåkning med varm dryck",
        de: "Husky-Schlittenfahrt mit Heißgetränk",
        es: "Paseo en trineo tirado por huskies con bebida caliente",
        fr: "Balade en traîneau Husky avec boisson chaude",
        it: "Giro in slitta trainata da husky con bevanda calda",
        nl: "Husky sleerit met warm drankje",
        "pt-BR": "Passeio de Trenó de Huskies com Bebida Quente",
        ja: "ハスキー犬ソリ ライド（ホットドリンク付き）",
        ko: "허스키 썰매 타기 & 따뜻한 음료",
        "zh-CN": "乘坐哈士奇雪橇，品尝热饮",
      },
    },
    {
      path: 'kemi-l98127/kemi-tornio-ice-fishing-safari-with-snowmobiles-t896901', title: 'Ice Fishing Safari with Snowmobiles', place: 'Kemi-Tornio', duration: '2 h', sid: 'dest_tornio_ice_fishing',
      titles: {
        fi: "Jääkalastussafari moottorikelkoilla",
        sv: "Isfiskesafari med snöskoter",
        de: "Eisangelsafari mit Schneemobilen",
        es: "Safari de pesca en hielo con motos de nieve",
        fr: "Safari de pêche sur glace en motoneige",
        it: "Safari di pesca sul ghiaccio con le motoslitte",
        nl: "IJsvissafari met sneeuwscooters",
        "pt-BR": "Safári de Pesca no Gelo com Motos de Neve",
        ja: "スノーモービルで行くアイスフィッシング・サファリ",
        ko: "스노모빌을 이용한 얼음 낚시 사파리",
        "zh-CN": "乘雪地摩托冰钓之旅",
      },
    },
    {
      path: 'kemi-l98127/kemi-tornio-reindeer-farm-experience-t908250', title: 'Reindeer farm experience', place: 'Kemi-Tornio', duration: '2 h', sid: 'dest_tornio_reindeer',
      titles: {
        fi: "Porotilakokemus",
        sv: "Upplevelse av renfarm",
        de: "Erlebnis Rentierfarm",
        es: "Experiencia en una granja de renos",
        fr: "Expérience dans une ferme d'élevage de rennes",
        it: "Esperienza di allevamento di renne",
        nl: "Rendierboerderij-ervaring",
        "pt-BR": "Experiência em uma fazenda de renas",
        ja: "トナカイ牧場体験",
        ko: "순록 농장 체험",
        "zh-CN": "驯鹿农场体验",
      },
    },
  ],
  ruka: [
    {
      path: 'ruka-l192178/ruka-10km-husky-sled-ride-with-snacks-and-campfire-t1107156', title: '10km Husky Sled Ride with Snacks and Campfire', place: 'Ruka', duration: '2 h', sid: 'dest_ruka_husky',
      titles: {
        fi: "10 km huskyrekkiajelu, jossa on välipaloja ja nuotio",
        sv: "10 km huskyslädåkning med snacks och lägereld",
        de: "10 km Husky-Schlittenfahrt mit Snacks und Lagerfeuer",
        es: "Paseo de 10 km en trineo tirado por huskies con refrigerios y fogata",
        fr: "Promenade en traîneau de 10 km avec des collations et un feu de camp",
        it: "10 km in slitta trainata da husky con snack e falò",
        nl: "Huskysledetocht van 10 km met snacks en kampvuur",
        "pt-BR": "Passeio de Trenó de Huskies de 10 km com Lanche e Fogueira",
        ja: "軽食とキャンプファイヤー付きのハスキー犬ソリ ライド（10km）",
        ko: "10km 허스키 썰매 타기, 간식 및 캠프파이어",
        "zh-CN": "10 公里哈士奇雪橇之旅（含小吃和篝火）",
      },
    },
    {
      path: 'ruka-l192178/ruka-4h-snowmobile-safari-with-snack-and-campfire-t1107299', title: '4h Snowmobile Safari with Snack and Campfire', place: 'Ruka', duration: '4 h', sid: 'dest_ruka_snowmobile',
      titles: {
        fi: "4 tunnin moottorikelkkasafari, välipala ja nuotiolla",
        sv: "4 timmars snöskotersafari med tilltugg och lägereld",
        de: "4-stündige Schneemobil-Safari mit Snack und Lagerfeuer",
        es: "Safari de 4 horas en moto de nieve con refrigerio y hoguera",
        fr: "Safari en motoneige de 4 heures avec collation et feu de camp",
        it: "4 ore di safari in motoslitta con spuntino e falò",
        nl: "Sneeuwscootersafari van 4 uur met snack en kampvuur",
        "pt-BR": "Safári de moto de neve de 4 horas com lanche e fogueira",
        ja: "4時間のスノーモービルサファリ（軽食とキャンプファイヤー付き）",
        ko: "4시간 스노모바일 사파리(간식 및 캠프파이어 포함)",
        "zh-CN": "4 小时雪地摩托之旅（含小吃和篝火）",
      },
    },
    {
      path: 'ruka-l192178/ruka-ice-fishing-experience-t1187391', title: 'Ice Fishing Experience', place: 'Ruka', duration: '2,5 h', sid: 'dest_ruka_ice_fishing',
      titles: {
        fi: "Pilkkimiskokemus",
        sv: "Isfiskeupplevelse",
        de: "Eisangeln",
        es: "Experiencia de pesca en hielo",
        fr: "Expérience de pêche sur glace",
        it: "Pesca sul ghiaccio",
        nl: "IJsvisserij-ervaring",
        "pt-BR": "Experiência de pesca no gelo",
        ja: "アイスフィッシング体験",
        ko: "얼음 낚시 체험",
        "zh-CN": "冰钓体验",
      },
    },
    {
      path: 'ruka-l192178/ruka-pyhapiilo-sauna-duo-smoke-ice-sauna-experience-t1167518', title: 'Pyhäpiilo sauna duo: smoke & ice sauna experience', place: 'Ruka', duration: '2 h', sid: 'dest_ruka_sauna_duo',
      titles: {
        fi: "Pyhäpiilon saunaduo: savu- ja jääsaunaelämykset",
        sv: "Pyhäpiilo bastuduon: rök- och isbastuupplevelse",
        de: "Pyhäpiilo Sauna-Duo: Rauch- & Eissauna-Erlebnis",
        es: "Dúo de saunas Pyhäpiilo: experiencia en sauna de humo y de hielo",
        fr: "Duo de saunas Pyhäpiilo : expérience sauna fumée et glace",
        it: "Pyhäpiilo sauna duo: esperienza sauna con fumo e ghiaccio",
        nl: "Pyhäpiilo-saunaduo: rook- en ijssauna-ervaring",
        "pt-BR": "Dupla de saunas Pyhäpiilo: experiência de sauna de fumaça e de gelo",
        ja: "Pyhäpiiloサウナデュオ：スモークサウナ＆アイスサウナ体験",
        ko: "Pyhäpiilo 사우나 듀오: 스모크 & 아이스 사우나 체험",
        "zh-CN": "Pyhäpiilo 桑拿二重奏：烟雾和冰桑拿体验",
      },
    },
  ],
};

/** Kohteen poiminnat, tai null jos niitä on alle kolme (ei täytetä tyhjää). */
export function picksForDestination(slug: string): GygPick[] | null {
  const rows = DESTINATION_PICKS[slug];
  return rows && rows.length >= 3 ? rows : null;
}
