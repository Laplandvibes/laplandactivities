// English base for the destination + category guides. See guideI18n.ts for why
// this exists and how the per-language overlays hook in.
//
// Facts here come from src/data/destinations.ts, src/data/categories.ts and
// src/data/activities.ts. Nothing is invented: no prices, no visitor numbers,
// no temperatures beyond the season bands the home page already publishes
// (winter Nov-Mar, spring Apr-May, summer Jun-Aug, autumn Sep-Oct).

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi season by season',
      seasonWinter: 'From November to March the river freezes, the snow settles and almost the whole activity catalogue opens at once: snowmobile safaris, husky and reindeer sledding, ice fishing and aurora hunts. Around midwinter the sun barely clears the horizon, which is exactly why the light shows well here. Christmas and New Year are the busiest two weeks of the year in the city.',
      seasonSummer: 'June to August swaps the snow for daylight that never really ends. The husky kennels stay open for summer visits and puppy meets, the Arktikum and SantaPark run year-round, and the Kemijoki riverbank becomes the centre of town. September and October bring ruska colours to Ounasvaara and the first auroras of the season, with far fewer people on the trails.',
      planTitle: 'Planning a Rovaniemi trip',
      planGetting: 'Rovaniemi has the best connections in Lapland: direct flights from Helsinki take about an hour and twenty minutes, and the night train arrives in the morning. Most husky, reindeer and aurora operators are within a twenty-minute drive, and tours normally include hotel pickup, so a car is optional here.',
      planStay: 'Two or three nights covers Santa Claus Village, one big safari and an aurora evening without rushing. Book the winter husky and snowmobile departures well ahead for December and the February-March peak. The Arctic Circle crossing certificate at the Santa Claus Village post office costs nothing, and Ounasvaara is close enough for an evening ski.',
    },
    levi: {
      seasonsTitle: 'Levi season by season',
      seasonWinter: 'The ski season is the main event: 44 slopes and 26 lifts, including two gondolas, run from the dark of November through the long bright days of April. The Alpine World Cup opens its slalom season here each November. Aurora photography tours, husky safaris and snowmobile trips to a reindeer farm fill the hours when the lifts are shut.',
      seasonSummer: 'In summer the gondola serves Levi Bike Park instead of skiers, and the fell opens up for hiking. Midnight sun golf is the local oddity: tee off close to midnight and play in full daylight. The 230 km of cross-country trails that carry skiers in winter double as walking and running routes once the snow goes.',
      planTitle: 'Planning a Levi trip',
      planGetting: 'Fly to Kittilä and you are at the resort in about fifteen minutes, the shortest airport transfer of any Lapland ski destination. The village sits at the foot of Levitunturi and is walkable end to end, so most visitors skip the rental car unless they plan day trips to Ylläs or the Kittilä side.',
      planStay: 'Levi rewards a longer stay than a city break: three to five nights lets you ski, take a safari and still have an evening for Hullu Poro. Slope-side beds and the best-rated husky departures sell out first for Christmas week and the March school holidays. Lift passes and equipment hire are easier to arrange on arrival than tours are.',
    },
    yllas: {
      seasonsTitle: 'Ylläs season by season',
      seasonWinter: 'Two villages share one fell and 62 slopes between them, including downhill runs of over three kilometres, the longest in Finland. Around them lies roughly 300 km of maintained cross-country track reaching into Pallas-Yllästunturi National Park. Skies here are dark and open, which is why aurora hunts leave from the fell itself rather than from a lit village.',
      seasonSummer: 'Once the track melts, the same national park turns into hiking country: marked routes across open fell, old spruce forest and duckboard through mire. Late summer is berry and mushroom season, and autumn ruska colours the slopes before the first snow. Summer at Ylläs is quiet in a way the ski weeks never are.',
      planTitle: 'Planning an Ylläs trip',
      planGetting: 'Kittilä airport is about a 35-minute drive. The two villages sit on opposite sides of the fell and the road between them is long, so decide which side you want before booking: Äkäslompolo is the calmer one, Ylläsjärvi has the bars. A car makes moving between them far easier.',
      planStay: 'Choose Ylläs over Levi if you want dark skies, national-park silence and long ski days rather than nightlife. Give it three nights minimum; the cross-country network alone justifies more. March gives you snow and real daylight at the same time, which is the sweet spot for long days on the track.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä season by season',
      seasonWinter: 'This is the northernmost ski resort in Finland, and the latitude shows: aurora odds run from September through April, and midwinter days are short and blue. Snowmobile safaris head straight into the wilderness, and the Kiilopää smoke sauna followed by a hole in the ice is the local rite rather than a tourist add-on.',
      seasonSummer: 'Urho Kekkonen National Park starts at the edge of the village, and its marked trails and open wilderness huts are free to use. Summer means long treks under a sun that does not set, gold panning at Tankavaara where every flake you find is yours to keep, and king crab safaris across the border to Kirkenes.',
      planTitle: 'Planning a Saariselkä trip',
      planGetting: 'Fly to Ivalo and drive about thirty minutes. Saariselkä is compact enough to walk, but the national park trailheads, Tankavaara and Kiilopää are spread out, so either rent a car or pick tours that include transfers. Inari is close enough to add as a day trip.',
      planStay: 'Come here if you want wilderness first and services second. Three nights gives you one long trek or safari, an aurora evening and the smoke sauna. The Norway day trips are long, so plan a full day for the king crab safari. Wilderness huts are first come, first served and cannot be reserved.',
    },
    inari: {
      seasonsTitle: 'Inari season by season',
      seasonWinter: 'Winter here is quiet and dark, which suits both aurora watching and the reason most people come: Sámi culture. Siida, the Sámi museum and nature centre, is an indoor day in its own right, and reindeer herding visits show working practice rather than a staged show. The lake freezes solid and the wilderness around the village empties out.',
      seasonSummer: 'From June the lake reopens: boat trips run out past Ukonsaari, the sacred island, and kayaking under the midnight sun turns a normal evening into an all-night one. The Pielpajärvi wilderness church is reachable on foot through old pine forest, and late July brings cloudberries to the mires along the trail.',
      planTitle: 'Planning an Inari trip',
      planGetting: 'Ivalo airport is about forty minutes away by road. The village itself is small and walkable, but everything else is spread along the lake and the main road north, so a car helps. Many visitors pair Inari with Saariselkä rather than treating it as a single base.',
      planStay: 'Give Siida at least half a day, including the Sámi-language wing. Lake Inari boat trips run only from June to September, so summer and winter here are genuinely different trips rather than variations on one. This is a destination for culture, photography and quiet, not for resort services.',
    },
    ruka: {
      seasonsTitle: 'Ruka season by season',
      seasonWinter: 'Stored snow lets Ruka open in October and stay open into May, the longest ski season in Finland, on 41 slopes served by 22 lifts. The village sits right on top of the slopes, so the walk from bed to lift is short. Away from the runs there are snowmobile safaris, husky trips and ice climbing on the frozen falls of Korouoma.',
      seasonSummer: 'Summer flips the destination completely. Brown-bear watching from hides runs through the light months, the Kitka river carries rafting trips from spring into autumn, and the 82 km Karhunkierros trail through Oulanka National Park is one of the best-known hikes in the country. The bike park handles those who want the descent without the snow.',
      planTitle: 'Planning a Ruka trip',
      planGetting: 'Kuusamo airport is about twenty-five minutes away. Ruka sits in Kuusamo just south of the official Lapland border, with the same snow and the same northern winter. A car is worth having for Oulanka, Korouoma and the bear hides, all of which are outside the village.',
      planStay: 'Skiers can stay slope-side and never start the engine; hikers and wildlife watchers should plan for driving. Bear-watching hides book out months ahead, so treat them as the fixed point of a summer trip. Karhunkierros has a 12 km loop for anyone who wants the scenery without the multi-day version.',
    },
    posio: {
      seasonsTitle: 'Posio season by season',
      seasonWinter: 'Midwinter is what Posio is known for. Frost bends the spruces of Riisitunturi National Park into heavy white sculptures, at their best from January to March, and Korouoma canyon fills with frozen waterfalls that hang up to forty metres down the rock. Both are day trips on foot, and both reward an early start while the light lasts.',
      seasonSummer: 'Without the snow the same canyon becomes a hiking route through a steep, wooded fault valley, and Riisitunturi opens up as an easier fell walk with long views over the lakes. Pentik, the northernmost ceramics factory in the world, keeps its galleries and outlet shop open year-round and fills the hours when the weather turns.',
      planTitle: 'Planning a Posio trip',
      planGetting: 'You need a car. Posio is about two hours from Rovaniemi and an hour from Ruka, and it pairs naturally with either as a day trip rather than a base of its own. There is no airport transfer network here the way there is at the resorts.',
      planStay: 'Treat Posio as the quiet day inside a bigger Lapland trip: one national park, one canyon and the ceramics factory fill it comfortably. Photographers should come between January and March for the crown-snow trees. Trails are marked but services are thin, so carry your own food and water.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda and Kemi season by season',
      seasonWinter: 'Winter here builds things rather than just covers them. The snow park at the Kemi SnowCastle Area is built from scratch every winter, and the Icebreaker Sampo cruises out into the frozen Gulf of Bothnia and lets passengers float in survival suits between the ice floes. Neither exists in summer, which makes this the one Lapland destination whose headline attractions are strictly seasonal.',
      seasonSummer: 'Summer belongs to the river. The Tornionjoki is the largest free-flowing salmon river in Europe, and at the Kukkolankoski rapids traditional net fishing still runs each summer. Green Zone Golf sends you back and forth across the border, changing country and time zone four times in a round, which only works while the ground is clear.',
      planTitle: 'Planning a Tornio trip',
      planGetting: 'Kemi airport is about fifteen minutes from Tornio, and Kemi itself is roughly twenty-five minutes away, so the two towns work as one trip. Tornio and Haparanda are a single town in two countries: the border runs through the middle of the shopping street and you cross it on foot.',
      planStay: 'This is the easiest Lapland destination to combine with a shopping day, with IKEA Haparanda right by the crossing and prices worth comparing on both sides. One or two nights is enough for the icebreaker and the SnowCastle in winter, or the river and the golf course in summer.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto season by season',
      seasonWinter: 'Two fell villages sit at either end of an old fell chain with the national park between them. Pyhä has the steeper skiing, including Huttu-Ukko, a mogul run with World Cup pedigree, alongside gentle terrain and short lift queues for families. In Luosto a heated snow train hauls visitors up Lampivaara to the amethyst mine through the dark months.',
      seasonSummer: 'Snow-free, the park is a walking destination: boardwalks through old-growth forest and Isokuru, the deepest gorge in Finland at about 220 metres, with open views along the oldest fell chain in Lapland. The amethyst mine stays open, and it is the only active mine in Europe where visitors can dig and keep a stone.',
      planTitle: 'Planning a Pyhä-Luosto trip',
      planGetting: 'The nearest airport is Rovaniemi, about an hour and a half by road. Pyhä and Luosto are separate villages roughly half an hour apart, connected by the park rather than by a village street, so decide which one you are basing yourself in before you book.',
      planStay: 'Families tend to pick Pyhä for the lift-served terrain and short queues; walkers and amethyst diggers base themselves in Luosto. Two or three nights covers a day on the slopes, the mine and one longer walk into the park. Metsähallitus maintains the trails, and the marked routes start straight from both villages.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi season by season',
      seasonWinter: 'The town sits on its own lake, which freezes into an ice-fishing ground within walking distance of the centre. Suomu ski fell is about forty minutes away, husky operators run self-drive safaris rather than passenger rides, and on the Uitonniemi shore Santa\'s Little Village pairs a small log hotel with Santa visits and aurora outings.',
      seasonSummer: 'In the light months the sculptures are the reason to slow down: Kemijärvi has hosted an international wood-sculpting week since 1985, and the large wooden works stand around the streets all year. The lake opens for boats and fishing, and the quiet eastern road north makes this a natural first stop rather than a destination to rush through.',
      planTitle: 'Planning a Kemijärvi trip',
      planGetting: 'This is where the Santa Claus Express finishes: one departure a day continues past Rovaniemi, so you can sleep on the train from Helsinki and step off beside the lake. By car it is about an hour from Rovaniemi. Pyhä is 50 km up the road.',
      planStay: 'Kemijärvi suits rail travellers and anyone who wants Lapland without resort crowds. It works as a calm base for eastern Lapland, with Pyhä and Suomu both within an easy drive. One or two nights is usually enough unless you are using it as a gateway to the quieter eastern route.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'What Arctic adventure means here',
      covers: 'Adventure in Lapland is mostly engine-powered or ice-bound: guided snowmobile safaris from a couple of hours to a full wilderness day, ice karting on a frozen lake, ice climbing on the frozen falls of Korouoma canyon, white-water rafting on the Kitka river and a night in a snow hotel. The icebreaker cruise out of Kemi belongs here too.',
      whenToGo: 'The bulk of it runs from November to March, when the lakes carry weight and the snow cover is deep enough for a safari to leave the road network. Rafting is the exception and runs from spring into autumn. Snow hotels and ice-built venues melt, so they exist only for the winter half of the year.',
      chooseTitle: 'Choosing an adventure tour',
      choosing: 'The main choice is length. Short shared departures suit a half day and mixed groups; full-day expeditions cover far more ground and usually require a driving licence for the snowmobile. Ice karting and family combos take passengers who are too young to drive. Ice climbing is guided and gear is provided, but it demands more from you than a safari does.',
      bring: 'Operators supply thermal overalls, boots, gloves and a helmet for snowmobile and ice activities, so bring layers rather than bulk: wool or synthetic base layers, a warm mid-layer and a hat that fits under a helmet. Bring your own driving licence if you plan to steer your own machine, and expect to leave phones in a pocket that stays warm.',
    },
    animals: {
      coversTitle: 'Meeting the animals of the Arctic',
      covers: 'This covers husky sledding and kennel visits, reindeer farms and sleigh rides, wild brown-bear watching from hides in the forests east of Kuusamo, and Ranua Wildlife Park, where polar bears live in the northernmost zoo in the world. Sámi reindeer herding visits at Inari and Samiland at Levi sit at the edge of this category and the culture one.',
      whenToGo: 'Sledding needs snow, so husky and reindeer rides run from roughly November to April. Kennels stay open in summer for visits and puppy meets, without the sled. Bear watching is the opposite: hides operate through the light months, from spring to early autumn, when the bears are active and the nights are bright enough to see them.',
      chooseTitle: 'Choosing an animal experience',
      choosing: 'Decide first whether you want to drive or ride. Self-drive husky safaris put you on the runners with a team of your own, usually two people alternating; passenger rides and farm visits suit small children and anyone who wants time with the dogs rather than the trail. Reindeer sleigh rides are slow by nature, which is the point.',
      bring: 'Farms and kennels supply overalls for sledding. Bring gloves you can work in, because you will be handling harness lines and cameras in the cold. Bear hides are a waiting game in a fixed shelter, so pack more insulation than the walk in seems to need, plus something quiet to do. Flash photography is out at every hide.',
    },
    'northern-lights': {
      coversTitle: 'How aurora hunting works in Lapland',
      covers: 'Aurora tours here are hunts, not viewings: a guide watches the cloud forecast and the activity index and drives to whichever gap in the sky looks best that night. The formats differ more than the destinations do, from bus tours and photography evenings to snowshoe walks and snowmobile chases that put you out on a frozen lake away from any light.',
      whenToGo: 'The season runs from around September to April, and needs three things at once: darkness, a clear sky and solar activity. Autumn gives you open water for reflections before the lakes freeze; midwinter gives the longest dark hours. Nothing is guaranteed on a single night, which is the strongest argument for building two or three attempts into a trip.',
      chooseTitle: 'Choosing an aurora tour',
      choosing: 'Photography tours are worth it if you want images: the guide sets up your camera and knows the exposures. Bus tours cover the most ground and are the best odds-per-euro when the weather is patchy. Snowshoe and snowmobile trips trade some mobility for a better location and a quieter one. Northern destinations such as Saariselkä and Inari have darker skies than the resorts.',
      bring: 'You will be standing still outdoors for hours, so dress far warmer than for an active day: overalls if the operator provides them, wool base layers, two pairs of socks and chemical warmers. A tripod and spare batteries matter more than an expensive camera; cold flattens batteries fast. Keep white torchlight off, as it ruins night vision for everyone.',
    },
    'winter-sports': {
      coversTitle: 'Skiing and snow sports in Lapland',
      covers: 'Six fells in this guide run lifts: Ounasvaara above Rovaniemi, Levi, Ylläs, Ruka, Pyhä and Suomu. Between them they cover everything from a beginner slope in the city to the longest runs in Finland at Ylläs. Off the lifts the category takes in cross-country skiing, snowshoeing through old forest, fat biking and skating.',
      whenToGo: 'Stored snow lets Ruka open in October and ski into May, the longest season in the country. Most resorts run from November or December to April. Midwinter has the atmosphere but very short days; March and April combine full snow cover with real daylight, which is why the cross-country network is at its best then.',
      chooseTitle: 'Choosing a resort',
      choosing: 'Levi is the largest, has the shortest airport transfer and the most après-ski. Ylläs has the longest runs and the biggest cross-country network with far less noise. Ruka has the longest season and slope-side lodging. Pyhä suits families and mogul skiers alike, Ounasvaara suits an evening after a day in Rovaniemi, and Suomu is the quiet option.',
      bring: 'Rental gear is available at every resort and is easier to arrange on arrival than tours are. Bring goggles and a face covering: wind on an open fell does more damage than the temperature reading suggests. Cross-country skiers should check the track report before choosing a side of the fell, as grooming varies between villages.',
    },
    wellness: {
      coversTitle: 'Sauna and Arctic wellness',
      covers: 'Wellness in Lapland means heat and cold in sequence rather than treatment rooms. The traditional smoke sauna at Kiilopää is heated for hours and then aired before use, giving a soft heat you do not get from an electric stove, and it is followed by a hole in the ice. Arctic ice floating puts you in a survival suit and lets you drift.',
      whenToGo: 'Both run year-round, but they are winter experiences in character: an ice swim needs a hole cut in a frozen lake, and floating works best when there is ice to float between. Smoke saunas take hours to heat, so they run on fixed slots rather than on demand, and the afternoon slot is the one to book.',
      chooseTitle: 'Choosing a sauna experience',
      choosing: 'A smoke sauna is the traditional version and the one worth planning a day around. Ice swimming is optional at every venue that offers it, and nobody will push you in. Ice floating suits people who want the cold-water experience without the swim, because the suit keeps you dry and warm enough to stay out for a while.',
      bring: 'Bring a swimsuit and a towel; most venues rent both if you forget. Sauna in Finland is generally done without swimwear in single-sex sessions and with it in mixed public ones, so ask when you arrive. Leave time to cool down properly afterwards rather than heading straight into the next activity.',
    },
    culture: {
      coversTitle: 'Sámi heritage, Santa and the Arctic story',
      covers: 'Two strands run through this category. One is Sámi culture, best met at Siida in Inari, the Sámi museum and nature centre in the seat of the Finnish Sámi Parliament, and at Samiland in Levi. The other is the Arctic story the region tells about itself: Santa Claus Village and SantaPark in Rovaniemi, Arktikum on the riverbank, and the ice-built venues.',
      whenToGo: 'The museums are open year-round and make the best use of a bad-weather day or a short midwinter afternoon. The ice hotels and snow villages exist only while it is cold, roughly December to April. Gold panning at Tankavaara and the amethyst mine at Lampivaara run in both seasons, with a heated snow train serving the mine in winter.',
      chooseTitle: 'Choosing a cultural visit',
      choosing: 'If you want living culture rather than a performance, start with Siida and a working reindeer-herding visit at Inari rather than with a show. If you are travelling with children, Santa Claus Village and SantaPark are built for them. Arktikum has the strongest aurora exhibition in the country and works as an indoor half day.',
      bring: 'Museums need nothing but time, and Siida deserves at least three hours. Ice hotels and snow villages sit below freezing indoors, so keep your outdoor layers on for the visit. At Tankavaara anything you pan is yours to keep, and at Lampivaara you may dig and keep one amethyst.',
    },
    summer: {
      coversTitle: 'Lapland in the light months',
      covers: 'Summer turns the same landscape into hiking, paddling and cycling country. National-park routes run at Pallas-Yllästunturi, Urho Kekkonen, Oulanka and Pyhä-Luosto, from short marked loops to the 82 km Karhunkierros. On the water there are lake cruises and midnight sun kayaking at Inari; on wheels, the Levi Bike Park. Golf under a sun that does not set is the local curiosity.',
      whenToGo: 'June to August is the core, with the sun above the horizon around the clock at midsummer this far north. Late July brings cloudberries and the first mushrooms. September and October are the ruska weeks, when the fells turn colour and the first auroras return, and the trails are close to empty.',
      chooseTitle: 'Choosing a summer trip',
      choosing: 'Decide whether you want a base or a route. Day walks from a village suit most visitors and need no permits; the long trails need planning, and the wilderness huts along them are free and first come, first served. Paddling and rafting are guided, which is the sensible way to meet a northern river for the first time.',
      bring: 'Mosquitoes peak in midsummer, so repellent and a head net are not optional on the mires. Bring a proper sleep mask if constant daylight bothers you. Boots that handle wet duckboard matter more than heavy hiking soles, and every marked route in Finland is walked under the right of public access, so no permit is needed.',
    },
    food: {
      coversTitle: 'Eating in the north',
      covers: 'Food here is tied to fire and to the season. A kota or kammi is a cone-shaped hut with an open hearth in the middle, and dinner is cooked in front of you: reindeer, fish, flatbread, cloudberries. Away from the table there is foraging for wild berries and mushrooms, and at Kukkolankoski the whitefish is still caught with a traditional net.',
      whenToGo: 'Campfire dinners run year-round and are at their best in the dark half of the year, when the fire is the only light in the room. Foraging is a late-summer and autumn activity: berries from July, mushrooms from August. The Kukkolankoski whitefish season belongs to summer, tied to the run in the river.',
      chooseTitle: 'Choosing a food experience',
      choosing: 'A kota dinner is usually a set menu with a guide who explains what you are eating and where it came from, so it works as an evening rather than a meal. Foraging trips are led by someone who can tell you what is safe, which is the whole point. Both suit mixed groups and neither demands any fitness.',
      bring: 'Tell the operator about allergies and diets when you book, because these are set menus cooked over a fire rather than à la carte. Dress for sitting still outdoors: a kota is warm by the hearth and cold at the wall. Under the right of public access you may pick wild berries and mushrooms anywhere you are lawfully allowed to walk.',
    },
    fishing: {
      coversTitle: 'Fishing across three kinds of water',
      covers: 'Three different fisheries meet in this corner of the Arctic: ice fishing on frozen lakes, licensed summer salmon rivers such as the Tornionjoki, and king crab safaris across the Norwegian border out of Kirkenes. They have different seasons, different rules and different permits, and the site keeps a dedicated fishing page with the current rules and official permit links.',
      whenToGo: 'Ice fishing runs through the frozen months, roughly December to April, and is the easiest to arrange at short notice. The salmon season is a summer one and is tightly regulated, with dates set year by year. King crab safaris run in both seasons: by snowmobile or bus over the ice in winter, by RIB boat in summer.',
      chooseTitle: 'Choosing a fishing trip',
      choosing: 'Guided ice fishing is the low-effort option: the guide augers the holes, brings the gear and usually feeds you by a fire. Salmon fishing on the Tornionjoki is a serious undertaking and needs the correct permit before you cast. King crab trips are as much boat or snowmobile excursion as fishing, and end with the catch on a plate.',
      bring: 'Rules change from year to year and vary by water, so check the official permit terms before you fish rather than after. Guided trips include gear; independent ice fishing needs your own rod, auger and a sense for ice thickness. Catch and release is standard on many rivers here, and it is there to keep the stocks coming back.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'How the ten destinations differ',
      lead: 'Lapland is not one place with one season. Rovaniemi has the airport, the night train and the widest choice of tours; Levi and Ruka are ski villages you can walk end to end; Ylläs and Saariselkä trade nightlife for dark skies and national-park silence. Inari is where Sámi culture is met rather than performed, and Posio, Tornio and Kemijärvi are the quiet ones.',
      note: 'Distances up here are real: two destinations that look close on a map can be a two-hour drive apart. Pick one base for a short trip and add a second only if you have a week. Every page below lists the operators working that destination, what runs in which season, and how to get there.',
    },
    catList: {
      leadTitle: 'Choosing by activity instead of by place',
      lead: 'If you already know what you want to do, start here rather than with a map. Each category page explains what that activity actually involves in Lapland, which months it runs, how the formats differ from one another, and what to wear or bring. Most categories appear in several destinations, so the choice of activity usually comes before the choice of town.',
      note: 'Season is the hard constraint. Anything on snow or ice needs the cold half of the year, roughly November to April; hiking, paddling and the midnight sun belong to June through August; aurora needs darkness, so it runs from about September to April. Bear watching is the reverse of sledding, and both are worth planning a trip around.',
    },
  },
};

export default guides;
