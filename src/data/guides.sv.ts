// Säsongs- och planeringsguide på svenska för resmåls- och kategorisidor.
// Skriven på svenska, inte maskinöversatt. Faktaunderlag: src/data/destinations.ts,
// categories.ts och activities.ts — inga påhittade priser, besökssiffror eller
// temperaturer. Tilltal: du, som i copy.sv.ts.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi säsong för säsong',
      seasonWinter: 'Från november till mars fryser älven, snön lägger sig och nästan hela utbudet öppnar samtidigt: skotersafarier, hund- och renspann, pimpelfiske och norrskensjakter. Kring midvintern orkar solen knappt över horisonten, och just därför syns ljuset så bra här. Jul och nyår är årets två mest fullbokade veckor i staden.',
      seasonSummer: 'Juni till augusti byter snön mot ett ljus som egentligen aldrig tar slut. Hundgårdarna håller öppet för sommarbesök och valpmöten, Arktikum och SantaPark går året runt, och stranden längs Kemijoki blir stadens mittpunkt. September och oktober ger ruskafärger på Ounasvaara och säsongens första norrsken, med betydligt färre människor på lederna.',
      planTitle: 'Planera en resa till Rovaniemi',
      planGetting: 'Rovaniemi har Lapplands bästa förbindelser: direktflyget från Helsingfors tar drygt en timme och tjugo minuter, och nattåget kommer på morgonen. De flesta hund-, ren- och norrskensarrangörer ligger inom tjugo minuters bilväg, och turerna inkluderar oftast hämtning vid hotellet, så bil är valfritt här.',
      planStay: 'Två eller tre nätter räcker för Tomtens by, en stor safari och en norrskenskväll utan stress. Boka vinterns hund- och skoterturer i god tid för december och toppen i februari och mars. Polcirkelbeviset på postkontoret i Tomtens by kostar ingenting, och Ounasvaara ligger nära nog för en kvällsåkning.',
    },
    levi: {
      seasonsTitle: 'Levi säsong för säsong',
      seasonWinter: 'Skidsäsongen är huvudnumret: 44 nedfarter och 26 liftar, varav två gondoler, från novembermörkret till aprils långa ljusa dagar. Alpina världscupen inleder sin slalomsäsong här varje november. Norrskensfototurer, hundspannssafarier och skoterturer till en rengård fyller timmarna när liftarna står stilla.',
      seasonSummer: 'På sommaren kör gondolen upp Levi Bike Park i stället för skidåkare, och fjället öppnar sig för vandring. Golf under midnattssol är den lokala kuriositeten: utslag kring midnatt och rundan i fullt dagsljus. Vinterns 230 kilometer skidspår fungerar snöfria som vandrings- och löpleder.',
      planTitle: 'Planera en resa till Levi',
      planGetting: 'Från Kittilä flygplats är du framme på ungefär en kvart, den kortaste flygplatstransfern av alla lapska skidorter. Byn ligger vid foten av Levitunturi och går att gå igenom, så de flesta struntar i hyrbilen om de inte planerar dagsturer till Ylläs eller åt Kittilähållet.',
      planStay: 'Levi förtjänar mer än en helg: tre till fem nätter räcker för skidåkning, en safari och ändå en kväll på Hullu Poro. Bäddar vid backen och de högst betygsatta hundspannsturerna tar slut först under julveckan och sportlovet i mars. Liftkort och utrustningshyra ordnar du däremot lättare på plats än turerna.',
    },
    yllas: {
      seasonsTitle: 'Ylläs säsong för säsong',
      seasonWinter: 'Två byar delar ett fjäll och tillsammans 62 nedfarter, bland dem åk på över tre kilometer, de längsta i Finland. Runt omkring ligger ungefär 300 kilometer preparerat skidspår som når in i Pallas-Yllästunturi nationalpark. Himlen är mörk och öppen här, och därför startar norrskensturerna från själva fjället i stället för från en upplyst by.',
      seasonSummer: 'När spåret smälter blir samma nationalpark vandringsmark: markerade leder över kalfjäll, gammal granskog och spänger genom myren. Sensommaren tillhör bär och svamp, och på hösten färgar ruskan sluttningarna före första snön. Sommaren på Ylläs är tyst på ett sätt som skidveckorna aldrig är.',
      planTitle: 'Planera en resa till Ylläs',
      planGetting: 'Kittilä flygplats ligger ungefär 35 minuters bilväg bort. De två byarna ligger på var sin sida om fjället och vägen emellan är lång, så välj sida innan du bokar: Äkäslompolo är den lugnare, i Ylläsjärvi finns barerna. Bil gör det betydligt enklare att röra sig mellan dem.',
      planStay: 'Välj Ylläs framför Levi om du vill ha mörk himmel, nationalparkstystnad och långa skiddagar snarare än nattliv. Räkna med minst tre nätter; enbart spårnätet motiverar fler. I mars finns snö och riktigt dagsljus samtidigt, och det är spårets bästa läge.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä säsong för säsong',
      seasonWinter: 'Det här är Finlands nordligaste skidort, och latituden märks: chansen till norrsken sträcker sig från september till april, och midvinterdagarna är korta och blå. Skotersafarierna går rakt ut i vildmarken, och rökbastun på Kiilopää följd av en vak är en lokal vana här, inte ett turisttillägg.',
      seasonSummer: 'Urho Kekkonens nationalpark börjar i byns utkant, och dess markerade leder och öppna ödestugor är gratis att använda. Sommar betyder långa vandringar under en sol som inte går ner, guldvaskning i Tankavaara där varje korn du hittar är ditt, och kungskrabbssafarier över gränsen till Kirkenes.',
      planTitle: 'Planera en resa till Saariselkä',
      planGetting: 'Flyg till Ivalo och kör ungefär en halvtimme. Saariselkä går att gå runt i, men parkens ledstarter, Tankavaara och Kiilopää ligger utspridda: hyr bil eller välj turer med transfer. Enare ligger nära nog för en dagstur.',
      planStay: 'Kom hit om du vill ha vildmarken först och servicen sedan. Tre nätter ger utrymme för en lång vandring eller safari, en norrskenskväll och rökbastun. Dagsturerna till Norge är långa, så räkna en hel dag för kungskrabbssafarin. Ödestugorna fungerar i ankomstordning och går inte att boka.',
    },
    inari: {
      seasonsTitle: 'Enare säsong för säsong',
      seasonWinter: 'Vintern är tyst och mörk här, vilket passar både norrskenet och skälet till att de flesta kommer: den samiska kulturen. Siida, samiskt museum och naturum, fyller en hel dag inomhus, och besöken hos renskötare visar riktigt arbete i stället för en uppspelad show. Sjön fryser till och vildmarken runt byn tömms.',
      seasonSummer: 'Från juni öppnar sjön igen: båtturerna går förbi Ukonsaari, den heliga ön, och paddling under midnattssol drar ut en vanlig kväll till en hel natt. Ödemarkskyrkan i Pielpajärvi når du till fots genom gammal tallskog, och i slutet av juli mognar hjortronen på myrarna längs leden.',
      planTitle: 'Planera en resa till Enare',
      planGetting: 'Ivalo flygplats ligger ungefär fyrtio minuters bilväg bort. Byn i sig är liten och går att gå runt i, men allt annat är utspritt längs sjön och huvudvägen norrut, så bil hjälper. Många kombinerar Enare med Saariselkä i stället för att göra det till sin enda bas.',
      planStay: 'Avsätt minst en halvdag för Siida, inklusive den samiskspråkiga delen. Båtturerna på Enare träsk går bara från juni till september, så sommar och vinter är två olika resor här, inte varianter av samma. Det här är ett resmål för kultur, fotografering och tystnad, inte för skidortsservice.',
    },
    ruka: {
      seasonsTitle: 'Ruka säsong för säsong',
      seasonWinter: 'Lagrad snö låter Ruka öppna redan i oktober och åka in i maj, Finlands längsta skidsäsong, på 41 nedfarter med 22 liftar. Byn ligger rakt ovanför backarna, så vägen från säng till lift är kort. Vid sidan av pisterna finns skotersafarier, hundspannsturer och isklättring på de frusna fallen i Korouoma.',
      seasonSummer: 'Sommaren vänder på hela resmålet. Björnskådning från gömslen pågår under de ljusa månaderna, Kitkajoki bär forsränningsturer från våren in på hösten, och 82 kilometer långa Karhunkierros genom Oulanka nationalpark är en av landets mest kända vandringar. Cykelparken tar hand om dem som vill ha utförsåkningen utan snö.',
      planTitle: 'Planera en resa till Ruka',
      planGetting: 'Kuusamo flygplats ligger ungefär tjugofem minuter bort. Ruka ligger i Kuusamo, strax söder om Lapplands officiella gräns, med samma snö och samma nordliga vinter. Bil är värd besväret för Oulanka, Korouoma och björngömslena, som alla ligger utanför byn.',
      planStay: 'Skidåkare kan bo vid backen och aldrig starta motorn; vandrare och naturskådare bör räkna med körsträckor. Björngömslena är fullbokade månader i förväg, så gör dem till sommarresans fasta punkt. Karhunkierros har en slinga på 12 kilometer för den som vill ha landskapet utan flerdagsversionen.',
    },
    posio: {
      seasonsTitle: 'Posio säsong för säsong',
      seasonWinter: 'Det är midvintern Posio är känt för. Kylan böjer granarna i Riisitunturi nationalpark till tunga vita skulpturer, som bäst från januari till mars, och Korouoma kanjon fylls av frusna vattenfall som hänger upp till fyrtio meter längs bergväggen. Båda är dagsturer till fots, och båda belönar en tidig start medan ljuset räcker.',
      seasonSummer: 'Snöfri blir samma kanjon en vandringsled genom en brant, skogklädd sprickdal, och Riisitunturi öppnar sig som en enklare fjällvandring med långa vyer över sjöarna. Pentik, världens nordligaste keramikfabrik, håller gallerier och fabriksbutik öppna året runt och fyller timmarna när vädret slår om.',
      planTitle: 'Planera en resa till Posio',
      planGetting: 'Du behöver bil. Posio ligger ungefär två timmar från Rovaniemi och en timme från Ruka, och passar naturligt som dagstur från endera hållet snarare än som egen bas. Något transfernät som i skidorterna finns inte här.',
      planStay: 'Ta Posio som den lugna dagen inuti en större Lapplandsresa: en nationalpark, en kanjon och keramikfabriken fyller den bekvämt. Fotografer bör komma mellan januari och mars för de snötyngda träden. Lederna är markerade men servicen är gles, så ta med egen mat och dryck.',
    },
    tornio: {
      seasonsTitle: 'Torneå, Haparanda och Kemi säsong för säsong',
      seasonWinter: 'Här bygger vintern i stället för att bara täcka. Snöparken vid SnowCastle-området i Kemi byggs upp från grunden varje vinter, och isbrytaren Sampo går ut i den frusna Bottenviken och låter passagerarna flyta i räddningsdräkt mellan isflaken. Inget av dem finns på sommaren, vilket gör det här till det enda resmålet i Lappland vars huvudattraktioner är strikt säsongsbundna.',
      seasonSummer: 'Sommaren tillhör älven. Torne älv är Europas största fritt strömmande laxälv, och vid Kukkolaforsen pågår det traditionella håvfisket fortfarande varje sommar. Green Zone Golf skickar dig fram och tillbaka över gränsen: fyra byten av land och tidszon på en runda, vilket bara fungerar på snöfri mark.',
      planTitle: 'Planera en resa till Torneå',
      planGetting: 'Kemi flygplats ligger en kvart från Torneå, och Kemi självt ungefär tjugofem minuter bort, så de två städerna fungerar som en enda resa. Torneå och Haparanda är en stad i två länder: gränsen går mitt genom affärsgatan och passeras till fots.',
      planStay: 'Det här är det lapska resmål som lättast kombineras med en shoppingdag, med IKEA Haparanda alldeles vid gränsövergången och priser värda att jämföra på båda sidor. En eller två nätter räcker för isbrytaren och SnowCastle på vintern, eller för älven och golfbanan på sommaren.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto säsong för säsong',
      seasonWinter: 'Två fjällbyar ligger i var sin ände av en gammal fjällkedja med nationalparken emellan. Pyhä har den brantare åkningen, bland annat Huttu-Ukko, en puckelpist med världscupsförflutet, plus mjukare terräng och korta liftköer för familjer. I Luosto drar ett uppvärmt snötåg besökarna upp till ametistgruvan på Lampivaara under de mörka månaderna.',
      seasonSummer: 'Snöfri är parken ett vandringsmål: spänger genom gammelskog och Isokuru, Finlands djupaste ravin på omkring 220 meter, och fri sikt längs Lapplands äldsta fjällkedja. Ametistgruvan håller öppet även på sommaren och är Europas enda aktiva gruva där besökare får gräva och behålla en sten.',
      planTitle: 'Planera en resa till Pyhä-Luosto',
      planGetting: 'Närmaste flygplats är Rovaniemi, därifrån ungefär en och en halv timme på väg. Pyhä och Luosto är separata byar med en halvtimme emellan, förbundna av parken och inte av en bygata: bestäm var du bor innan du bokar.',
      planStay: 'Familjer väljer oftast Pyhä för liftterrängen och de korta köerna; vandrare och ametistgrävare slår sig ner i Luosto. Två eller tre nätter täcker en dag i backen, gruvan och en längre vandring in i parken. Metsähallitus sköter lederna, och de markerade rutterna startar direkt i båda byarna.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi säsong för säsong',
      seasonWinter: 'Staden ligger vid sin egen sjö, som fryser till pimpelvatten inom gångavstånd från centrum. Skidfjället Suomu ligger ungefär fyrtio minuter bort, hundspannsarrangörerna kör safarier där du kör själv i stället för passagerarturer, och på Uitonniemis strand kombinerar Tomtens lilla by ett litet timmerhotell med tomtebesök och norrskensturer.',
      seasonSummer: 'Under de ljusa månaderna är skulpturerna skälet att sakta ner: Kemijärvi har arrangerat en internationell träskulpturvecka sedan 1985, och de stora träverken står kvar på gatorna året runt. Sjön öppnar för båtar och fiske, och den tysta östliga vägen norrut gör staden till ett naturligt första stopp.',
      planTitle: 'Planera en resa till Kemijärvi',
      planGetting: 'Det är här Santa Claus Express slutar sin färd: en avgång per dag fortsätter förbi Rovaniemi, så du kan sova på tåget från Helsingfors och kliva av vid sjön. Med bil tar det ungefär en timme från Rovaniemi. Till Pyhä är det 50 kilometer.',
      planStay: 'Kemijärvi passar tågresenärer och alla som vill ha Lappland utan skidortsträngsel. Staden fungerar som en lugn bas för östra Lappland, med både Pyhä och Suomu på bekvämt köravstånd. En eller två nätter räcker oftast, om du inte använder den som port till den tystare östliga vägen.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Vad arktiskt äventyr betyder här',
      covers: 'Äventyr i Lappland är mest motordrivet eller bundet till is: guidade skotersafarier från ett par timmar till en hel vildmarksdag, iskarting på en frusen sjö, isklättring på de frusna fallen i Korouoma, forsränning i Kitkajoki och en natt i ett snöhotell. Isbrytarkryssningen från Kemi hör också hit.',
      whenToGo: 'Merparten går från november till mars, när isarna bär och snötäcket är djupt nog för att en safari ska kunna lämna vägnätet. Forsränning är undantaget och går från våren in på hösten. Snöhotell och allt som byggs av is smälter, så de finns bara under årets vinterhalva.',
      chooseTitle: 'Att välja äventyrstur',
      choosing: 'Det viktigaste valet är längden. Korta gruppavgångar passar en halvdag och blandade sällskap; heldagsexpeditioner täcker mycket mer mark och kräver oftast körkort för skotern. Iskarting och familjekombinationer tar även med passagerare som är för unga för att köra. Isklättring är guidad och utrustningen ingår, men den kräver mer av dig än en safari.',
      bring: 'Till skoter- och isaktiviteter står arrangörerna för termooverall, kängor, handskar och hjälm, så packa lager i stället för volym: underställ i ull eller syntet, ett varmt mellanlager och en mössa som får plats under hjälmen. Ta med körkortet om du tänker köra själv, och håll telefonen i en ficka som håller sig varm.',
    },
    animals: {
      coversTitle: 'Att möta Arktis djur',
      covers: 'Hit hör hundspann och gårdsbesök, rengårdar och släpturer, skådning av vilda brunbjörnar från gömslen i skogarna öster om Kuusamo, och djurparken i Ranua, där isbjörnar bor i världens nordligaste djurpark. Besöken hos samiska renskötare i Enare och Samiland i Levi ligger på gränsen till kulturkategorin.',
      whenToGo: 'Släpturer kräver snö, så hund- och renturer går ungefär från november till april. Hundgårdarna håller öppet på sommaren för besök och valpmöten, fast utan släde. För björnarna är det tvärtom: gömslena är i drift under de ljusa månaderna, från våren till tidig höst, när björnarna rör sig och nätterna är ljusa nog.',
      chooseTitle: 'Att välja djurupplevelse',
      choosing: 'Bestäm först om du vill köra själv eller åka med. På safarier där du kör själv står du på medarna med ett eget spann, oftast två som byter av varandra; passagerarturer och gårdsbesök passar små barn och alla som hellre vill ha tid med hundarna än mil i benen. Renslädar är långsamma till sin natur, och det är hela poängen.',
      bring: 'Gårdar och hundgårdar står för overaller till släpturerna. Ta med handskar du kan arbeta i, för du hanterar seldon och kamera i kylan. Ett björngömsle är väntan i ett fast skjul, så packa mer isolering än vägen dit antyder, plus något tyst att fördriva tiden med. Blixt är förbjuden vid varje gömsle.',
    },
    'northern-lights': {
      coversTitle: 'Så fungerar norrskensjakt i Lappland',
      covers: 'Här är norrskensturerna jakter, inte utsiktsplatser: guiden följer molnprognosen och aktivitetsindexet och kör mot den lucka i himlen som ser bäst ut den kvällen. Formaten skiljer sig mer än platserna: bussturer, fotokvällar, snöskovandringar och skoterturer som tar dig ut på en frusen sjö, långt från allt ljus.',
      whenToGo: 'Säsongen går ungefär från september till april och kräver tre saker samtidigt: mörker, klar himmel och solaktivitet. Hösten ger öppet vatten för speglingar innan sjöarna fryser; midvintern ger de längsta mörka timmarna. En enda kväll garanterar ingenting, vilket är det starkaste skälet att lägga in två eller tre försök i resan.',
      chooseTitle: 'Att välja norrskenstur',
      choosing: 'Fototurer är värda pengarna om du vill ha bilder: guiden ställer in din kamera och kan exponeringstiderna. Bussturer täcker mest mark och ger bäst chans per krona när vädret är ostadigt. Snösko- och skoterturer byter en del rörlighet mot en bättre och tystare plats. Nordliga resmål som Saariselkä och Enare har mörkare himmel än skidorterna.',
      bring: 'Du står stilla utomhus i timmar, så klä dig betydligt varmare än för en aktiv dag: overall om arrangören står för den, ullunderställ, två par strumpor och värmepåsar. Stativ och reservbatterier betyder mer än en dyr kamera; kylan tömmer batterier snabbt. Håll den vita ficklampan släckt, den förstör mörkerseendet för alla.',
    },
    'winter-sports': {
      coversTitle: 'Skidåkning och snösport i Lappland',
      covers: 'Sex fjäll i den här guiden har liftar: Ounasvaara ovanför Rovaniemi, Levi, Ylläs, Ruka, Pyhä och Suomu. Tillsammans täcker de allt från en nybörjarbacke i staden till Finlands längsta nedfarter på Ylläs. Vid sidan av liftarna rymmer kategorin längdskidor, snöskovandring i gammelskog, fatbike och skridskor.',
      whenToGo: 'Lagrad snö låter Ruka öppna i oktober och åka in i maj, landets längsta säsong. De flesta orter går från november eller december till april. Midvintern har stämningen men mycket korta dagar; mars och april kombinerar fullt snötäcke med riktigt dagsljus, och då är spårnätet som bäst.',
      chooseTitle: 'Att välja skidort',
      choosing: 'Levi är störst, har kortast flygplatstransfer och mest afterski. Ylläs har de längsta nedfarterna och det största spårnätet med betydligt mindre liv och rörelse. Ruka har längst säsong och boende vid backen. Pyhä passar både familjer och puckelåkare, Ounasvaara en kväll efter en dag i Rovaniemi, och Suomu är det tysta alternativet.',
      bring: 'Uthyrning finns på varje ort och ordnas lättare på plats än turerna. Ta med goggles och ansiktsskydd: vinden på kalfjäll gör mer skada än termometern antyder. Längdåkare bör kolla spårrapporten innan de väljer sida av fjället, eftersom preparingen skiljer sig mellan byarna.',
    },
    wellness: {
      coversTitle: 'Bastu och arktiskt välbefinnande',
      covers: 'Välbefinnande i Lappland betyder hetta och kyla i följd snarare än behandlingsrum. Den traditionella rökbastun på Kiilopää eldas i timmar och vädras ur före användning, vilket ger en mjuk värme som ett elaggregat inte ger, och efteråt går du i vaken. Arktisk flytning sätter dig i en räddningsdräkt och låter dig driva.',
      whenToGo: 'Båda går året runt, men är till sin karaktär vinterupplevelser: vinterbad kräver en upptagen vak i en frusen sjö, och flytningen fungerar bäst när det finns is runt omkring. En rökbastu tar timmar att värma, så den går på fasta tider och inte på beställning, och det är eftermiddagspasset du vill boka.',
      chooseTitle: 'Att välja bastuupplevelse',
      choosing: 'Rökbastun är den traditionella versionen och den att planera en dag kring. Vinterbad är frivilligt överallt där det erbjuds, och ingen knuffar i dig. Flytningen passar den som vill ha kallt vatten utan att simma, eftersom dräkten håller dig torr och varm nog för en stund.',
      bring: 'Ta med badkläder och handduk; de flesta ställen hyr ut båda om du glömmer. I Finland bastar man vanligen utan badkläder på könsuppdelade pass och med på blandade allmänna pass, så fråga på plats. Avsätt tid att svalna ordentligt i stället för att rusa vidare till nästa programpunkt.',
    },
    culture: {
      coversTitle: 'Samiskt arv, tomten och den arktiska berättelsen',
      covers: 'Två trådar löper genom den här kategorin. Den ena är samisk kultur, som du möter bäst på Siida i Enare, samiskt museum och naturum i sätet för Finlands sameting, och på Samiland i Levi. Den andra är den arktiska berättelse regionen berättar om sig själv: Tomtens by och SantaPark i Rovaniemi, Arktikum vid älven, och de isbyggda platserna.',
      whenToGo: 'Museerna är öppna året runt och tar bäst hand om en dag med dåligt väder eller en kort vintereftermiddag. Ishotell och snöbyar finns bara när det är kallt, ungefär december till april. Guldvaskningen i Tankavaara och ametistgruvan på Lampivaara går båda säsongerna, med ett uppvärmt snötåg till gruvan på vintern.',
      chooseTitle: 'Att välja kulturbesök',
      choosing: 'Vill du ha levande kultur snarare än en föreställning, börja med Siida och ett besök hos renskötare i arbete i Enare, inte med en show. Reser du med barn är Tomtens by och SantaPark byggda just för dem. Arktikum har landets starkaste norrskensutställning och bär en halvdag inomhus.',
      bring: 'Museer kräver bara tid, och Siida förtjänar minst tre timmar. På ishotell och i snöbyar är det minusgrader även inomhus, så behåll ytterlagren under besöket. I Tankavaara är allt du vaskar ditt, och på Lampivaara får du gräva och behålla en ametist.',
    },
    summer: {
      coversTitle: 'Lappland under de ljusa månaderna',
      covers: 'Sommaren gör samma landskap till vandrings-, paddel- och cykelmark. Nationalparksleder finns i Pallas-Yllästunturi, Urho Kekkonen, Oulanka och Pyhä-Luosto, från korta markerade slingor till 82 kilometer långa Karhunkierros. På vattnet finns sjökryssningar och paddling under midnattssol i Enare; på hjul Levi Bike Park. Golf under en sol som inte går ner är den lokala kuriositeten.',
      whenToGo: 'Juni till augusti är kärnan, och kring midsommar står solen över horisonten dygnet runt så här långt norrut. I slutet av juli kommer hjortronen och de första svamparna. September och oktober är ruskaveckorna, när fjällen skiftar färg och de första norrskenen kommer tillbaka, med nästan tomma leder.',
      chooseTitle: 'Att välja sommarresa',
      choosing: 'Bestäm om du vill ha en bas eller en led. Dagsvandringar från en by passar de flesta och kräver inga tillstånd; de långa lederna kräver planering, och ödestugorna längs dem är gratis och går i ankomstordning. Paddling och forsränning är guidade, vilket är det förnuftiga sättet att möta en nordlig älv för första gången.',
      bring: 'Myggen är som värst kring midsommar, så myggmedel och myggnät till huvudet är inte valfria på myren. Ta med en riktig sovmask om ständigt ljus stör dig. Skor som klarar blöta spänger betyder mer än tunga fjällsulor, och varje markerad led vandras med stöd av allemansrätten, så något tillstånd behövs inte.',
    },
    food: {
      coversTitle: 'Att äta i norr',
      covers: 'Maten här hänger ihop med eld och årstid. En kota eller kammi är en kupolformad koja med öppen eldstad i mitten, och maten lagas framför dig: ren, fisk, tunnbröd, hjortron. Utanför bordet finns plockning av vilda bär och svamp, och vid Kukkolaforsen fångas siken fortfarande med traditionell håv.',
      whenToGo: 'Lägereldsmiddagar går året runt och kommer bäst till sin rätt under årets mörka halva, när elden är rummets enda ljus. Plockning hör till sensommaren och hösten: bär från juli, svamp från augusti. Siksäsongen vid Kukkolaforsen tillhör sommaren och följer vandringen i älven.',
      chooseTitle: 'Att välja matupplevelse',
      choosing: 'En kotamiddag är oftast en fast meny med en guide som berättar vad du äter och varifrån det kommer, så den fungerar som en kväll snarare än som en måltid. Plockturer leds av någon som kan säga vad som är säkert, och det är hela poängen. Båda passar blandade sällskap och kräver ingen kondition.',
      bring: 'Uppge allergier och specialkost vid bokningen, för det här är fasta menyer lagade över eld och ingen à la carte. Klä dig för att sitta stilla utomhus: i en kota är det varmt vid elden och kallt mot väggen. Allemansrätten låter dig plocka vilda bär och svamp överallt där du lagligen får vistas.',
    },
    fishing: {
      coversTitle: 'Fiske i tre sorters vatten',
      covers: 'I det här hörnet av Arktis möts tre olika fisken: pimpelfiske på frusna sjöar, licenspliktiga sommarlaxälvar som Torne älv, och kungskrabbssafarier över den norska gränsen från Kirkenes. De har olika säsonger, olika regler och olika tillstånd, och sajten håller en egen fiskesida med gällande regler och officiella tillståndslänkar.',
      whenToGo: 'Pimpelfisket går under de frusna månaderna, ungefär december till april, och är lättast att ordna med kort varsel. Laxsäsongen är en sommarsäsong och hårt reglerad, med datum som sätts år för år. Kungskrabbssafarier går båda säsongerna: med skoter eller buss över isen på vintern, med RIB-båt på sommaren.',
      chooseTitle: 'Att välja fisketur',
      choosing: 'Guidat pimpelfiske är det bekväma alternativet: guiden borrar hålen, tar med utrustningen och bjuder oftast på mat vid elden. Laxfiske i Torne älv är ett allvarligt företag och kräver rätt tillstånd före första kastet. Kungskrabbsturerna är lika mycket båt- eller skoterutflykt som fiske, och slutar med fångsten på tallriken.',
      bring: 'Reglerna ändras från år till år och skiljer sig mellan vatten, så kontrollera de officiella tillståndsvillkoren före fisket, inte efter. Guidade turer inkluderar utrustningen; eget pimpelfiske kräver egen pimpel, isborr och känsla för istjocklek. Fånga och släpp är norm i många älvar här, och det finns för att hålla bestånden vid liv.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'Så skiljer sig de tio resmålen',
      lead: 'Lappland är inte en plats med en årstid. Rovaniemi har flygplatsen, nattåget och det bredaste utbudet av turer. Levi och Ruka är skidbyar som går att gå igenom. Ylläs och Saariselkä byter nattliv mot mörk himmel och nationalparkstystnad. I Enare möter du samisk kultur i stället för en uppvisning, och Posio, Torneå och Kemijärvi är de tysta alternativen.',
      note: 'Avstånden är verkliga här uppe: två resmål som ser nära ut på kartan kan ligga två timmars bilväg isär. Välj en bas för en kort resa och lägg till en andra bara om du har en vecka. Varje sida nedan listar arrangörerna på plats, vad som går under vilken säsong och hur du tar dig dit.',
    },
    catList: {
      leadTitle: 'Välja efter aktivitet i stället för efter plats',
      lead: 'Vet du redan vad du vill göra, börja här i stället för med kartan. Varje kategorisida förklarar vad aktiviteten faktiskt innebär i Lappland, vilka månader den går, hur formaten skiljer sig åt och vad du bör ha på dig eller ta med. De flesta kategorier finns på flera resmål, så valet av aktivitet kommer oftast före valet av ort.',
      note: 'Säsongen är den hårda gränsen. Allt på snö och is kräver årets kalla halva, ungefär november till april. Vandring, paddling och midnattssol hör till juni till augusti. Norrsken kräver mörker och går från omkring september till april. Björnskådning är spegelbilden av hundspann, och båda är värda att planera en resa kring.',
    },
  },
};

export default guides;
