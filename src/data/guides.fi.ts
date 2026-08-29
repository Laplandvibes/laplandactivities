// Suomenkielinen kausi- ja suunnitteluopas kohde- ja kategoriasivuille.
// Kirjoitettu suomeksi, ei käännetty konekielisesti englannista: samat faktat,
// suomalaisen lukijan sanajärjestys ja mittayksiköt. Faktapohja on
// src/data/destinations.ts, categories.ts ja activities.ts — ei keksittyjä
// hintoja, kävijämääriä eikä lämpötiloja.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi kausi kerrallaan',
      seasonWinter: 'Marraskuusta maaliskuuhun joki jäätyy, lumi asettuu ja koko ohjelmisto aukeaa kerralla: kelkkasafarit, husky- ja poroajelut, pilkkiminen ja revontuliretket. Keskitalvella aurinko käy tuskin horisontin yläpuolella, ja juuri siksi valot näkyvät täällä hyvin. Joulu ja uudenvuoden viikko ovat kaupungin vuoden ruuhkaisin jakso.',
      seasonSummer: 'Kesäkuusta elokuuhun lumi vaihtuu valoon, joka ei oikeastaan lopu. Huskytarhat ovat auki kesävierailuille ja pentutapaamisille, Arktikum ja SantaPark pyörivät ympäri vuoden, ja Kemijoen ranta on kaupungin keskus. Syys-lokakuussa ruska värittää Ounasvaaran ja kauden ensimmäiset revontulet palaavat, poluilla huomattavasti vähemmän väkeä.',
      planTitle: 'Rovaniemen matkan suunnittelu',
      planGetting: 'Rovaniemellä on Lapin parhaat yhteydet: suora lento Helsingistä kestää noin tunnin ja kaksikymmentä minuuttia, ja yöjuna saapuu aamulla. Suurin osa husky-, poro- ja revontulioperaattoreista on kahdenkymmenen minuutin ajomatkan päässä, ja retkiin kuuluu yleensä hotellikuljetus, joten auto ei ole täällä välttämätön.',
      planStay: 'Kaksi tai kolme yötä riittää Joulupukin Pajakylään, yhteen isoon safariin ja revontuli-iltaan ilman kiirettä. Varaa talven husky- ja kelkkalähdöt hyvissä ajoin joulukuulle ja helmi-maaliskuun huipulle. Napapiirin ylitystodistus Pajakylän postista ei maksa mitään, ja Ounasvaara on tarpeeksi lähellä iltalaskettelua varten.',
    },
    levi: {
      seasonsTitle: 'Levi kausi kerrallaan',
      seasonWinter: 'Hiihtokausi on pääasia: 44 rinnettä ja 26 hissiä, mukana kaksi gondolia, marraskuun pimeydestä huhtikuun pitkiin valoisiin päiviin. Alppihiihdon maailmancup avaa pujottelukautensa täällä joka marraskuu. Revontulikuvausretket, huskysafarit ja kelkkaretket porotilalle täyttävät tunnit, jolloin hissit ovat kiinni.',
      seasonSummer: 'Kesällä gondoli palvelee Levi Bike Parkia laskettelijoiden sijaan, ja tunturi aukeaa vaeltajille. Keskiyön auringon golf on paikallinen erikoisuus: avaus lähellä keskiyötä ja kierros täydessä päivänvalossa. Talven 230 kilometrin latuverkosto toimii lumettomana kävely- ja juoksureitistönä.',
      planTitle: 'Levin matkan suunnittelu',
      planGetting: 'Kittilän kentältä olet perillä noin viidessätoista minuutissa, lyhyin lentokenttäsiirtymä Lapin hiihtokohteista. Kylä on Levitunturin juurella ja kävellen läpi mentävä, joten useimmat jättävät vuokra-auton väliin, ellei ohjelmassa ole päiväretkiä Ylläkselle tai Kittilän suuntaan.',
      planStay: 'Levi palkitsee pidemmän oleskelun kuin kaupunkiloman: kolme–viisi yötä riittää laskettelupäiviin, safariin ja vielä iltaan Hullussa Porossa. Rinteen vieressä olevat vuoteet ja parhaiten arvioidut huskylähdöt loppuvat ensin jouluviikolta ja maaliskuun hiihtolomilta. Hissiliput ja välinevuokraus järjestyvät helpommin paikan päällä kuin retket.',
    },
    yllas: {
      seasonsTitle: 'Ylläs kausi kerrallaan',
      seasonWinter: 'Kaksi kylää jakaa yhden tunturin ja yhteensä 62 rinnettä, mukana yli kolmen kilometrin laskut, Suomen pisimmät. Ympärillä on noin 300 kilometriä hoidettua latua, joka ulottuu Pallas-Yllästunturin kansallispuistoon. Taivas on täällä pimeä ja avoin, minkä vuoksi revontuliretket lähtevät itse tunturilta eivätkä valaistusta kylästä.',
      seasonSummer: 'Kun latu sulaa, sama kansallispuisto muuttuu vaellusmaastoksi: merkittyjä reittejä avotunturissa, vanhassa kuusikossa ja pitkospuilla suon yli. Loppukesä on marja- ja sieniaikaa, ja syksyllä ruska värittää rinteet ennen ensilunta. Ylläksen kesä on hiljainen tavalla, jollaista hiihtoviikot eivät koskaan ole.',
      planTitle: 'Ylläksen matkan suunnittelu',
      planGetting: 'Kittilän lentoasemalta ajaa noin 35 minuuttia. Kylät ovat tunturin vastakkaisilla puolilla ja väliä on paljon, joten valitse puoli ennen varausta: Äkäslompolo on rauhallisempi, Ylläsjärvellä ovat baarit. Auto helpottaa liikkumista niiden välillä huomattavasti.',
      planStay: 'Valitse Ylläs Levin sijaan, jos haluat pimeän taivaan, kansallispuiston hiljaisuuden ja pitkät hiihtopäivät etkä yöelämää. Varaa vähintään kolme yötä; pelkkä latuverkosto perustelee useammankin. Maaliskuussa on lunta ja oikeaa päivänvaloa samaan aikaan, mikä on ladun paras hetki.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä kausi kerrallaan',
      seasonWinter: 'Tämä on Suomen pohjoisin hiihtokeskus, ja leveysaste näkyy: revontulten todennäköisyys kantaa syyskuusta huhtikuuhun, ja keskitalven päivät ovat lyhyitä ja sinisiä. Kelkkasafarit suuntaavat suoraan erämaahan, ja Kiilopään savusauna avannon kanssa on paikallinen tapa eikä turistilisä.',
      seasonSummer: 'Urho Kekkosen kansallispuisto alkaa kylän reunalta, ja sen merkityt reitit ja avoimet autiotuvat ovat maksutta käytössä. Kesä tarkoittaa pitkiä vaelluksia auringossa, joka ei laske, kullanhuuhdontaa Tankavaarassa, jossa jokainen löytämäsi hippu jää sinulle, ja kuningasrapusafareita rajan yli Kirkkoniemeen.',
      planTitle: 'Saariselän matkan suunnittelu',
      planGetting: 'Lennä Ivaloon ja aja noin puoli tuntia. Saariselkä on kävelyetäisyyksien kokoinen, mutta kansallispuiston lähtöpaikat, Tankavaara ja Kiilopää ovat hajallaan, joten vuokraa auto tai valitse retket, joihin kuuluu kuljetus. Inari on riittävän lähellä päiväretkeksi.',
      planStay: 'Tule tänne, jos haluat erämaan ensin ja palvelut vasta sitten. Kolme yötä antaa yhden pitkän vaelluksen tai safarin, revontuli-illan ja savusaunan. Norjan päiväretket ovat pitkiä, joten varaa kuningasrapusafarille kokonainen päivä. Autiotuvat toimivat saapumisjärjestyksessä eikä niitä voi varata.',
    },
    inari: {
      seasonsTitle: 'Inari kausi kerrallaan',
      seasonWinter: 'Talvi on täällä hiljainen ja pimeä, mikä sopii sekä revontulille että syylle, jonka takia useimmat tulevat: saamelaiskulttuurille. Siida, saamelaismuseo ja luontokeskus, on oma sisäpäivänsä, ja poronhoitovierailut näyttävät työtä eivätkä lavastettua esitystä. Järvi jäätyy umpeen ja kylän ympärillä oleva erämaa tyhjenee.',
      seasonSummer: 'Kesäkuusta järvi aukeaa uudelleen: veneretket kulkevat pyhän Ukonsaaren ohi, ja melonta keskiyön auringossa venyttää tavallisen illan koko yöksi. Pielpajärven erämaakirkolle pääsee jalan vanhan männikön läpi, ja heinäkuun lopussa polun varren soilla kypsyvät hillat.',
      planTitle: 'Inarin matkan suunnittelu',
      planGetting: 'Ivalon lentoasemalta on maanteitse noin neljäkymmentä minuuttia. Kylä itsessään on pieni ja kävellen kuljettava, mutta muu on levittäytynyt järven rannalle ja pohjoiseen vievän päätien varteen, joten autosta on apua. Moni yhdistää Inarin Saariselkään sen sijaan, että pitäisi sitä ainoana tukikohtana.',
      planStay: 'Varaa Siidalle vähintään puoli päivää, saamenkielinen osasto mukaan lukien. Inarijärven veneretket kulkevat vain kesäkuusta syyskuuhun, joten kesä ja talvi ovat täällä aidosti eri matkoja eivätkä saman matkan muunnelmia. Tämä on kohde kulttuurille, valokuvaukselle ja hiljaisuudelle, ei hiihtokeskuspalveluille.',
    },
    ruka: {
      seasonsTitle: 'Ruka kausi kerrallaan',
      seasonWinter: 'Säilölumen ansiosta Ruka avaa lokakuussa ja pysyy auki toukokuulle, Suomen pisin hiihtokausi, 41 rinteellä ja 22 hissillä. Kylä on suoraan rinteiden päällä, joten matka sängystä hissille on lyhyt. Rinteiden ulkopuolella on kelkkasafareita, huskyretkiä ja jääkiipeilyä Korouoman jäätyneillä putouksilla.',
      seasonSummer: 'Kesä kääntää kohteen täysin. Karhunkatselu kojuista pyörii valoisat kuukaudet, Kitkajoki kantaa koskenlaskuretkiä keväästä syksyyn, ja 82 kilometrin Karhunkierros Oulangan kansallispuistossa on maan tunnetuimpia vaelluksia. Bike park palvelee niitä, jotka haluavat laskun ilman lunta.',
      planTitle: 'Rukan matkan suunnittelu',
      planGetting: 'Kuusamon lentoasemalta on noin 25 minuuttia. Ruka sijaitsee Kuusamossa aivan virallisen Lapin rajan eteläpuolella, samassa lumessa ja samassa pohjoisessa talvessa. Auto kannattaa olla Oulankaa, Korouomaa ja karhukojuja varten, sillä ne kaikki ovat kylän ulkopuolella.',
      planStay: 'Laskettelija voi majoittua rinteen viereen eikä käynnistä autoa kertaakaan; vaeltajan ja luontokuvaajan kannattaa varautua ajamaan. Karhukojut varataan kuukausia etukäteen, joten tee niistä kesämatkan kiintopiste. Karhunkierroksesta on 12 kilometrin lenkki niille, jotka haluavat maisemat ilman monen päivän versiota.',
    },
    posio: {
      seasonsTitle: 'Posio kausi kerrallaan',
      seasonWinter: 'Keskitalvi on se, mistä Posio tunnetaan. Pakkanen taivuttaa Riisitunturin kansallispuiston kuuset raskaiksi valkoisiksi veistoksiksi, parhaimmillaan tammi–maaliskuussa, ja Korouoman kanjoni täyttyy jäätyneistä putouksista, jotka roikkuvat jopa neljänkymmenen metrin matkan kalliota alas. Molemmat ovat jalan tehtäviä päiväretkiä, ja molemmat palkitsevat aikaisin lähdön valon takia.',
      seasonSummer: 'Lumettomana sama kanjoni on vaellusreitti jyrkässä, metsäisessä murroslaaksossa, ja Riisitunturi aukeaa helpompana tunturikävelynä pitkine järvinäkymineen. Pentik, maailman pohjoisin keramiikkatehdas, pitää galleriansa ja tehtaanmyymälänsä auki ympäri vuoden ja täyttää tunnit, jos sää kääntyy.',
      planTitle: 'Posion matkan suunnittelu',
      planGetting: 'Tarvitset auton. Posiolle on Rovaniemeltä noin kaksi tuntia ja Rukalta tunti, ja se sopii luontevasti päiväretkeksi kummastakin eikä niinkään omaksi tukikohdaksi. Täällä ei ole hiihtokeskusten kaltaista kuljetusverkostoa.',
      planStay: 'Ota Posio isomman Lapin-matkan hiljaiseksi päiväksi: yksi kansallispuisto, yksi kanjoni ja keramiikkatehdas täyttävät sen mukavasti. Valokuvaajan kannattaa tulla tammi–maaliskuussa tykkypuiden takia. Reitit on merkitty mutta palvelut ovat harvassa, joten ota omat eväät ja juomat mukaan.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haaparanta ja Kemi kausi kerrallaan',
      seasonWinter: 'Täällä talvi rakentaa eikä vain peitä. Kemin LumiLinnan alueen lumipuisto rakennetaan alusta joka talvi, ja jäänmurtaja Sampo ajaa jäätyneelle Perämerelle ja päästää matkustajat kelluntapukuihin jäälauttojen väliin. Kumpaakaan ei ole kesällä, mikä tekee tästä ainoan Lapin kohteen, jonka päänähtävyydet ovat tiukasti kausiluonteisia.',
      seasonSummer: 'Kesä kuuluu joelle. Tornionjoki on Euroopan suurin vapaana virtaava lohijoki, ja Kukkolankoskella perinteinen lippoaminen jatkuu joka kesä. Green Zone Golf heittelee pelaajaa rajan yli niin, että maa ja aikavyöhyke vaihtuvat kierroksen aikana neljästi, se onnistuu vain sulan maan aikaan.',
      planTitle: 'Tornion matkan suunnittelu',
      planGetting: 'Kemin lentoasemalta on Tornioon noin viisitoista minuuttia, ja Kemiin itseensä noin kaksikymmentäviisi, joten kaupungit toimivat yhtenä matkana. Tornio ja Haaparanta ovat yksi kaupunki kahdessa maassa: raja kulkee keskellä kauppakatua ja sen ylittää jalan.',
      planStay: 'Tämä on helpoin Lapin kohde yhdistää ostospäivään: IKEA Haaparanta on aivan rajanylityksen vieressä ja hinnat kannattaa vertailla molemmin puolin. Yksi tai kaksi yötä riittää talvella jäänmurtajaan ja LumiLinnaan, kesällä jokeen ja golfkierrokseen.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto kausi kerrallaan',
      seasonWinter: 'Kaksi tunturikylää on vanhan tunturijonon kummassakin päässä ja kansallispuisto niiden välissä. Pyhällä on jyrkempi laskettelu, mukana Huttu-Ukko, maailmancup-taustainen kumpparinne, sekä loivia rinteitä ja lyhyet hissijonot perheille. Luostolla lämmitetty lumijuna vetää kävijät Lampivaaran ametistikaivokselle pimeinä kuukausina.',
      seasonSummer: 'Lumettomana puisto on kävelykohde: pitkospuita vanhassa metsässä ja Isokuru, Suomen syvin rotko noin 220 metriä, sekä avoimet näkymät Lapin vanhimmalta tunturijonolta. Ametistikaivos on auki myös kesällä, ja se on Euroopan ainoa toiminnassa oleva kaivos, jossa kävijä saa kaivaa ja pitää yhden kiven.',
      planTitle: 'Pyhä-Luoston matkan suunnittelu',
      planGetting: 'Lähin lentoasema on Rovaniemi, sieltä maanteitse noin puolitoista tuntia. Pyhä ja Luosto ovat erilliset kylät noin puolen tunnin päässä toisistaan, ja niitä yhdistää kansallispuisto eikä kyläraitti, joten päätä tukikohta ennen varaamista.',
      planStay: 'Perheet valitsevat yleensä Pyhän hissirinteiden ja lyhyiden jonojen takia; kävelijät ja ametistinkaivajat asettuvat Luostolle. Kaksi tai kolme yötä kattaa rinnepäivän, kaivoksen ja yhden pidemmän kävelyn puistoon. Metsähallitus hoitaa reitit, ja merkityt polut lähtevät suoraan kummastakin kylästä.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi kausi kerrallaan',
      seasonWinter: 'Kaupunki on oman järvensä rannalla, ja järvi jäätyy pilkkivedeksi kävelymatkan päähän keskustasta. Suomutunturille on noin neljäkymmentä minuuttia, huskyoperaattorit ajattavat itseohjattavia safareita matkustajakyytien sijaan, ja Uitonniemen rannalla Joulupukin Pikkukylä yhdistää pienen hirsihotellin, joulupukkitapaamiset ja revontuliretket.',
      seasonSummer: 'Valoisina kuukausina veistokset ovat syy hidastaa: Kemijärvellä on järjestetty kansainvälistä puunveistoviikkoa vuodesta 1985, ja isot puuveistokset seisovat katujen varsilla ympäri vuoden. Järvi aukeaa veneille ja kalastukselle, ja hiljainen itäinen tie pohjoiseen tekee tästä luontevan ensimmäisen pysähdyksen.',
      planTitle: 'Kemijärven matkan suunnittelu',
      planGetting: 'Tänne Santa Claus Express päättyy: yksi vuoro päivässä jatkaa Rovaniemen ohi, joten voit nukkua junassa Helsingistä ja astua ulos järven rannalla. Autolla Rovaniemeltä on noin tunti. Pyhälle on 50 kilometriä tietä.',
      planStay: 'Kemijärvi sopii junamatkaajalle ja kaikille, jotka haluavat Lapin ilman hiihtokeskusruuhkaa. Se toimii rauhallisena tukikohtana Itä-Lapissa, Pyhä ja Suomu helpon ajomatkan päässä. Yksi tai kaksi yötä riittää yleensä, ellet käytä sitä porttina hiljaisemmalle itäiselle reitille.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Mitä arktinen seikkailu tässä tarkoittaa',
      covers: 'Seikkailu on Lapissa enimmäkseen moottorikäyttöistä tai jäähän sidottua: opastettuja kelkkasafareita parista tunnista koko erämaapäivään, jääkartingia jäätyneellä järvellä, jääkiipeilyä Korouoman jäätyneillä putouksilla, koskenlaskua Kitkajoella ja yö lumihotellissa. Kemistä lähtevä jäänmurtajaristeily kuuluu myös tähän.',
      whenToGo: 'Valtaosa pyörii marraskuusta maaliskuuhun, kun jää kantaa ja lunta on tarpeeksi, jotta safari pääsee irti tieverkosta. Koskenlasku on poikkeus ja kulkee keväästä syksyyn. Lumihotellit ja jäästä rakennetut kohteet sulavat, joten ne ovat olemassa vain vuoden talvipuoliskon.',
      chooseTitle: 'Seikkailuretken valinta',
      choosing: 'Tärkein valinta on kesto. Lyhyet yhteislähdöt sopivat puolikkaaseen päivään ja sekaryhmiin; koko päivän retket kattavat paljon enemmän maastoa ja vaativat yleensä ajokortin kelkan kuljettajalta. Jääkartingissa ja perhepaketeissa on paikkoja myös liian nuorille kuljettajiksi. Jääkiipeily on opastettua ja varusteet tulevat mukana, mutta se vaatii sinulta enemmän kuin safari.',
      bring: 'Operaattorit antavat toppahaalarit, saappaat, hanskat ja kypärän kelkka- ja jääohjelmiin, joten ota mukaan kerroksia äläkä paksuutta: villa- tai tekokuitualuskerrasto, lämmin välikerros ja pipo, joka mahtuu kypärän alle. Ota ajokortti mukaan, jos aiot ajaa itse, ja varaudu pitämään puhelinta lämpimässä taskussa.',
    },
    animals: {
      coversTitle: 'Arktisten eläinten kohtaaminen',
      covers: 'Tähän kuuluvat huskyajelut ja tarhavierailut, porotilat ja rekiajelut, villien ruskeakarhujen katselu kojuista Kuusamon itäpuolisissa metsissä sekä Ranuan eläinpuisto, jossa asuu jääkarhuja maailman pohjoisimmassa eläintarhassa. Inarin saamelaiset poronhoitovierailut ja Levin Samiland ovat tämän ja kulttuurikategorian rajalla.',
      whenToGo: 'Rekiajelu vaatii lunta, joten husky- ja pororetket kulkevat suunnilleen marraskuusta huhtikuuhun. Tarhat ovat auki kesälläkin vierailuille ja pentutapaamisille, ilman rekeä. Karhunkatselu on päinvastainen: kojut toimivat valoisat kuukaudet keväästä alkusyksyyn, kun karhut liikkuvat ja yöt ovat riittävän vaaleita.',
      chooseTitle: 'Eläinelämyksen valinta',
      choosing: 'Päätä ensin, haluatko ajaa vai olla kyydissä. Itseohjattavassa huskysafarissa seisot jalaksilla oman valjakon kanssa, yleensä kaksi vuorotellen; kyytiajelut ja tilavierailut sopivat pienille lapsille ja kaikille, jotka haluavat aikaa koirien kanssa reitin sijaan. Porokyyti on hidas luonteeltaan, ja juuri se on pointti.',
      bring: 'Tilat ja tarhat antavat haalarit rekiajeluun. Ota hanskat, joilla pystyt työskentelemään, sillä käsittelet valjaita ja kameraa pakkasessa. Karhukoju on odottamista kiinteässä suojassa, joten pakkaa enemmän lämmintä kuin kävelymatka antaa ymmärtää, ja jotain hiljaista tekemistä. Salamavalo on kielletty joka kojulla.',
    },
    'northern-lights': {
      coversTitle: 'Näin revontuliretki toimii Lapissa',
      covers: 'Revontuliretket ovat täällä jahteja eivätkä katselupaikkoja: opas seuraa pilviennustetta ja aktiivisuusindeksiä ja ajaa siihen aukkoon taivaalla, joka näyttää sinä iltana parhaalta. Muodot eroavat enemmän kuin kohteet: bussiretkiä, kuvausiltoja, lumikenkäkävelyjä ja kelkka-ajoja, jotka vievät jäätyneelle järvelle kauas valoista.',
      whenToGo: 'Kausi kulkee suunnilleen syyskuusta huhtikuuhun ja vaatii kolme asiaa yhtä aikaa: pimeyden, selkeän taivaan ja auringon aktiivisuutta. Syksy antaa avointa vettä heijastuksiin ennen järvien jäätymistä, keskitalvi pisimmät pimeät tunnit. Yksi ilta ei takaa mitään, mikä on vahvin peruste varata matkalle kaksi tai kolme yritystä.',
      chooseTitle: 'Revontuliretken valinta',
      choosing: 'Kuvausretki kannattaa, jos haluat kuvat: opas säätää kamerasi ja tietää valotusajat. Bussiretket kattavat eniten maastoa ja antavat parhaat mahdollisuudet hintaan nähden, kun sää on epävakaa. Lumikenkä- ja kelkkaretket vaihtavat osan liikkuvuudesta parempaan ja hiljaisempaan paikkaan. Pohjoisilla kohteilla, kuten Saariselällä ja Inarissa, taivas on pimeämpi kuin hiihtokeskuksissa.',
      bring: 'Seisot paikallasi ulkona tuntikausia, joten pukeudu paljon lämpimämmin kuin aktiiviseen päivään: haalarit, jos operaattori antaa, villa-alusvaatteet, kahdet sukat ja lämpötyynyt. Jalusta ja varaparistot merkitsevät enemmän kuin kallis kamera; pakkanen tyhjentää akut nopeasti. Pidä valkoinen taskulamppu sammuksissa, se pilaa hämäränäön kaikilta.',
    },
    'winter-sports': {
      coversTitle: 'Laskettelu ja lumilajit Lapissa',
      covers: 'Tässä oppaassa kuusi tunturia pyörittää hissejä: Ounasvaara Rovaniemen yllä, Levi, Ylläs, Ruka, Pyhä ja Suomu. Yhdessä ne kattavat kaiken kaupungin alkeisrinteestä Suomen pisimpiin laskuihin Ylläksellä. Hissien ulkopuolella kategoriaan kuuluvat hiihto, lumikenkäily vanhassa metsässä, läskipyöräily ja luistelu.',
      whenToGo: 'Säilölumi antaa Rukan avata lokakuussa ja hiihtää toukokuulle, maan pisin kausi. Useimmat keskukset pyörivät marras- tai joulukuusta huhtikuuhun. Keskitalvessa on tunnelma mutta hyvin lyhyet päivät; maaliskuussa ja huhtikuussa on täysi lumipeite ja oikea päivänvalo, minkä takia latuverkosto on silloin parhaimmillaan.',
      chooseTitle: 'Hiihtokeskuksen valinta',
      choosing: 'Levi on suurin, sillä on lyhyin lentokenttäsiirtymä ja eniten after skitä. Ylläksellä on pisimmät laskut ja laajin latuverkosto huomattavasti vähemmällä melulla. Rukalla on pisin kausi ja majoitus rinteen vieressä. Pyhä sopii sekä perheille että kumpparilaskijoille, Ounasvaara illaksi Rovaniemen päivän jälkeen ja Suomu on hiljainen vaihtoehto.',
      bring: 'Välinevuokraus löytyy jokaisesta keskuksesta ja järjestyy helpommin paikan päällä kuin retket. Ota lasit ja kasvosuoja: avotunturin tuuli tekee enemmän vahinkoa kuin lämpömittarin lukema antaa ymmärtää. Hiihtäjän kannattaa katsoa latutilanne ennen tunturin puolen valintaa, sillä kunnossapito vaihtelee kylien välillä.',
    },
    wellness: {
      coversTitle: 'Sauna ja arktinen hyvinvointi',
      covers: 'Hyvinvointi tarkoittaa Lapissa kuumaa ja kylmää peräkkäin eikä hoitohuoneita. Kiilopään perinteistä savusaunaa lämmitetään tuntikausia ja se tuuletetaan ennen käyttöä, mistä syntyy pehmeä löyly, jota sähkökiuas ei anna, ja perään mennään avantoon. Arktisessa kellunnassa pukeudutaan pelastuspukuun ja annetaan veden kannatella.',
      whenToGo: 'Molemmat pyörivät ympäri vuoden, mutta luonteeltaan ne ovat talvikokemuksia: avantouinti vaatii jäähän sahatun aukon, ja kelluminen toimii parhaiten, kun ympärillä on jäätä. Savusaunan lämmitys kestää tunteja, joten se toimii kiinteillä vuoroilla eikä pyynnöstä, ja iltapäivävuoro on se, joka kannattaa varata.',
      chooseTitle: 'Saunaelämyksen valinta',
      choosing: 'Savusauna on perinteinen versio ja se, jonka ympärille kannattaa suunnitella päivä. Avantouinti on vapaaehtoista joka paikassa, jossa se on tarjolla, eikä kukaan työnnä sinua sisään. Kelluminen sopii niille, jotka haluavat kylmän veden ilman uintia, sillä puku pitää kuivana ja riittävän lämpimänä hetkeksi.',
      bring: 'Ota uima-asu ja pyyhe; useimmat paikat vuokraavat molempia, jos unohdat. Suomessa saunotaan yleensä ilman uima-asua erillisvuoroilla ja asun kanssa sekavuoroilla, joten kysy paikan päällä. Jätä aikaa kunnolliseen jäähtymiseen sen sijaan, että syöksyt suoraan seuraavaan ohjelmaan.',
    },
    culture: {
      coversTitle: 'Saamelaisperintö, joulupukki ja arktinen tarina',
      covers: 'Kategoriassa kulkee kaksi juonnetta. Toinen on saamelaiskulttuuri, jonka kohtaa parhaiten Inarin Siidassa, saamelaismuseossa ja luontokeskuksessa Suomen saamelaiskäräjien kotipaikassa, sekä Levin Samilandissa. Toinen on arktinen tarina, jota alue kertoo itsestään: Joulupukin Pajakylä ja SantaPark Rovaniemellä, Arktikum joen rannalla ja jäästä rakennetut kohteet.',
      whenToGo: 'Museot ovat auki ympäri vuoden ja sopivat parhaiten huonon sään päivään tai lyhyeen keskitalven iltapäivään. Lumihotellit ja lumikylät ovat olemassa vain kylmällä, suunnilleen joulukuusta huhtikuuhun. Tankavaaran kullanhuuhdonta ja Lampivaaran ametistikaivos toimivat molempina kausina, talvella kaivokselle vie lämmitetty lumijuna.',
      chooseTitle: 'Kulttuurikohteen valinta',
      choosing: 'Jos haluat elävää kulttuuria etkä esitystä, aloita Siidasta ja Inarin oikeasta poronhoitovierailusta äläkä ohjelmanumerosta. Lasten kanssa liikkuvalle Joulupukin Pajakylä ja SantaPark on rakennettu juuri heitä varten. Arktikumissa on maan vahvin revontulinäyttely, ja se toimii sisäpäivän puolikkaana.',
      bring: 'Museot vaativat vain aikaa, ja Siida ansaitsee vähintään kolme tuntia. Lumihotelleissa ja lumikylissä on sisälläkin pakkasta, joten pidä ulkovaatteet päällä vierailun ajan. Tankavaarassa kaikki huuhtomasi jää sinulle, ja Lampivaarassa saat kaivaa ja pitää yhden ametistin.',
    },
    summer: {
      coversTitle: 'Lappi valoisina kuukausina',
      covers: 'Kesä muuttaa saman maiseman vaellus-, melonta- ja pyöräilymaastoksi. Kansallispuistojen reitit kulkevat Pallas-Yllästunturilla, Urho Kekkosen puistossa, Oulangalla ja Pyhä-Luostolla, lyhyistä merkityistä lenkeistä 82 kilometrin Karhunkierrokseen. Vedellä on järviristeilyjä ja melontaa keskiyön auringossa Inarissa, pyörillä Levi Bike Park. Golf laskemattomassa auringossa on paikallinen kummallisuus.',
      whenToGo: 'Kesäkuusta elokuuhun on ydinkausi, ja juhannuksen aikaan näin pohjoisessa aurinko pysyy horisontin yläpuolella vuorokauden ympäri. Heinäkuun lopussa tulevat hillat ja ensimmäiset sienet. Syys-lokakuu on ruska-aikaa, jolloin tunturit värjäytyvät ja ensimmäiset revontulet palaavat, ja polut ovat lähes tyhjät.',
      chooseTitle: 'Kesämatkan valinta',
      choosing: 'Päätä, haluatko tukikohdan vai reitin. Päiväkävelyt kylästä sopivat useimmille eivätkä vaadi lupia; pitkät vaellukset vaativat suunnittelua, ja niiden varren autiotuvat ovat ilmaisia ja saapumisjärjestyksessä. Melonta ja koskenlasku ovat opastettuja, mikä on järkevä tapa tutustua pohjoiseen jokeen ensimmäistä kertaa.',
      bring: 'Hyttyset ovat pahimmillaan keskikesällä, joten karkote ja hyttyshattu eivät ole soilla valinnaisia. Ota kunnon unimaski, jos jatkuva valo häiritsee. Kengät, jotka kestävät märät pitkospuut, merkitsevät enemmän kuin raskaat vaelluspohjat, ja jokaista merkittyä reittiä kuljetaan jokamiehenoikeudella, joten lupaa ei tarvita.',
    },
    food: {
      coversTitle: 'Syöminen pohjoisessa',
      covers: 'Ruoka on täällä sidottu tuleen ja kauteen. Kota tai kammi on kartiomainen rakennus, jonka keskellä on avotuli, ja ruoka valmistetaan silmien edessä: poroa, kalaa, rieskaa, hilloja. Pöydän ulkopuolella on villien marjojen ja sienten keräämistä, ja Kukkolankoskella siika nostetaan yhä perinteisellä lipolla.',
      whenToGo: 'Nuotioillalliset pyörivät ympäri vuoden ja ovat parhaimmillaan vuoden pimeällä puoliskolla, kun tuli on huoneen ainoa valo. Keräily on loppukesän ja syksyn puuhaa: marjat heinäkuusta, sienet elokuusta. Kukkolankosken siikakausi kuuluu kesään ja on sidottu joen nousuun.',
      chooseTitle: 'Ruokaelämyksen valinta',
      choosing: 'Kotaillallinen on yleensä kiinteä menu ja opas, joka kertoo mitä syöt ja mistä se tuli, joten se toimii iltana eikä ateriana. Keräilyretkillä on mukana joku, joka osaa sanoa mikä on turvallista, ja juuri se on koko idea. Molemmat sopivat sekaryhmille eivätkä vaadi kuntoa.',
      bring: 'Kerro allergiat ja ruokavaliot varatessasi, sillä nämä ovat tulella tehtyjä kiinteitä menuja eivätkä à la carte -listoja. Pukeudu paikallaan istumiseen ulkona: kodassa on lämmin nuotion äärellä ja kylmä seinän vieressä. Jokamiehenoikeus antaa poimia villejä marjoja ja sieniä kaikkialla, missä saa laillisesti kulkea.',
    },
    fishing: {
      coversTitle: 'Kalastusta kolmenlaisessa vedessä',
      covers: 'Tässä arktisen kolkassa kohtaa kolme eri kalastusta: pilkkiminen jäätyneillä järvillä, luvanvaraiset kesän lohijoet kuten Tornionjoki, ja kuningasrapusafarit Norjan rajan yli Kirkkoniemestä. Niillä on eri kaudet, eri säännöt ja eri luvat, ja sivustolla on oma kalastussivunsa, jossa ovat voimassa olevat säännöt ja viralliset lupalinkit.',
      whenToGo: 'Pilkkiminen kulkee jäiden aikaan, suunnilleen joulukuusta huhtikuuhun, ja se on helpoin järjestää lyhyellä varoitusajalla. Lohikausi on kesäinen ja tiukasti säädelty, päivämäärät asetetaan vuosittain. Kuningasrapusafarit kulkevat molempina kausina: talvella kelkalla tai bussilla jään yli, kesällä RIB-veneellä.',
      chooseTitle: 'Kalastusretken valinta',
      choosing: 'Opastettu pilkkiretki on vähällä vaivalla: opas kairaa reiät, tuo välineet ja yleensä ruokkii nuotiolla. Lohenkalastus Tornionjoella on vakava urakka ja vaatii oikean luvan ennen ensimmäistä heittoa. Kuningasrapuretket ovat yhtä paljon vene- tai kelkkaretkiä kuin kalastusta, ja ne päättyvät saaliiseen lautasella.',
      bring: 'Säännöt muuttuvat vuosittain ja vaihtelevat vesialueittain, joten tarkista virallisen luvan ehdot ennen kalastusta äläkä jälkeen. Opastettuihin retkiin kuuluvat välineet; omatoiminen pilkkiminen vaatii oman vavan, kairan ja jäätajun. Pyydä ja päästä on monella joella normi, ja se on siellä pitämässä kannat elossa.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'Miten kymmenen kohdetta eroavat toisistaan',
      lead: 'Lappi ei ole yksi paikka eikä yksi kausi. Rovaniemellä on lentokenttä, yöjuna ja laajin retkivalikoima. Levi ja Ruka ovat hiihtokyliä, jotka kävelee läpi. Ylläs ja Saariselkä vaihtavat yöelämän pimeään taivaaseen ja kansallispuiston hiljaisuuteen. Inarissa saamelaiskulttuuri kohdataan eikä esitetä, ja Posio, Tornio ja Kemijärvi ovat hiljaiset vaihtoehdot.',
      note: 'Välimatkat ovat täällä todellisia: kartalla lähekkäin näyttävien kohteiden välissä voi olla kaksi tuntia ajoa. Lyhyellä matkalla valitse yksi tukikohta ja lisää toinen vasta viikon reissulle. Jokainen alla oleva sivu kertoo kohteen operaattorit, mitä minäkin kautena on auki ja miten perille pääsee.',
    },
    catList: {
      leadTitle: 'Valinta tekemisen eikä paikan mukaan',
      lead: 'Jos tiedät jo mitä haluat tehdä, aloita täältä äläkä kartalta. Jokainen kategoriasivu kertoo, mitä kyseinen tekeminen Lapissa käytännössä tarkoittaa, minä kuukausina se on mahdollista, miten muodot eroavat toisistaan ja mitä kannattaa pukea tai ottaa mukaan. Useimpia kategorioita on monessa kohteessa, joten tekemisen valinta tulee yleensä ennen kaupungin valintaa.',
      note: 'Kausi on kova reunaehto. Kaikki lumella ja jäällä tapahtuva vaatii vuoden kylmän puoliskon, suunnilleen marraskuusta huhtikuuhun. Vaellus, melonta ja keskiyön aurinko kuuluvat kesä–elokuulle. Revontulet tarvitsevat pimeyttä, joten kausi kulkee noin syyskuusta huhtikuuhun. Karhunkatselu on rekiajelun peilikuva, ja molemmat kannattaa ottaa matkan kiintopisteeksi.',
    },
  },
};

export default guides;
