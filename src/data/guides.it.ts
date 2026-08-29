// Guida stagionale e pratica in italiano per le pagine destinazione e categoria.
// Scritta in italiano, non tradotta automaticamente. Base fattuale:
// src/data/destinations.ts, categories.ts e activities.ts — nessun prezzo,
// numero di visitatori o temperatura inventati. Forma di cortesia: Lei, come in copy.it.ts.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi stagione per stagione',
      seasonWinter: 'Da novembre a marzo il fiume gela, la neve tiene e quasi tutto il programma apre nello stesso momento: safari in motoslitta, slitte trainate da husky e da renne, pesca sul ghiaccio e cacce all\'aurora. Nel cuore dell\'inverno il sole supera appena l\'orizzonte, ed è proprio per questo che qui le luci si vedono così bene. Natale e Capodanno sono le due settimane più piene dell\'anno in città.',
      seasonSummer: 'Da giugno ad agosto la neve lascia il posto a una luce che in pratica non finisce mai. I canili restano aperti per le visite estive e gli incontri con i cuccioli, l\'Arktikum e il SantaPark funzionano tutto l\'anno, e la riva del Kemijoki diventa il centro della città. Settembre e ottobre portano i colori del ruska sull\'Ounasvaara e le prime aurore della stagione, con molta meno gente sui sentieri.',
      planTitle: 'Organizzare un viaggio a Rovaniemi',
      planGetting: 'Rovaniemi ha i collegamenti migliori della Lapponia: il volo diretto da Helsinki dura circa un\'ora e venti minuti e il treno notturno arriva al mattino. La maggior parte degli operatori di husky, renne e aurore si trova entro venti minuti di auto, e le escursioni includono di norma il transfer dall\'hotel, quindi qui l\'auto è facoltativa.',
      planStay: 'Due o tre notti bastano per il Villaggio di Babbo Natale, un safari importante e una serata di aurore senza correre. Prenoti con anticipo le partenze in slitta e in motoslitta di dicembre e del picco di febbraio e marzo. Il certificato di attraversamento del Circolo Polare, all\'ufficio postale del Villaggio, non costa nulla, e l\'Ounasvaara è abbastanza vicino per una sciata serale.',
    },
    levi: {
      seasonsTitle: 'Levi stagione per stagione',
      seasonWinter: 'La stagione sciistica è il motivo principale: 44 piste e 26 impianti, tra cui due cabinovie, dal buio di novembre alle lunghe giornate chiare di aprile. La Coppa del Mondo di sci alpino apre qui la stagione di slalom ogni novembre. Uscite fotografiche per le aurore, safari con gli husky e gite in motoslitta fino a un allevamento di renne riempiono le ore in cui gli impianti sono fermi.',
      seasonSummer: 'D\'estate la cabinovia porta in quota il Levi Bike Park invece degli sciatori, e la fjeld si apre alle escursioni. Il golf sotto il sole di mezzanotte è la stranezza locale: primo colpo verso mezzanotte e giro in piena luce. I 230 chilometri di piste da fondo dell\'inverno, senza neve, servono da percorsi per camminare e correre.',
      planTitle: 'Organizzare un viaggio a Levi',
      planGetting: 'Dall\'aeroporto di Kittilä arriverà in circa un quarto d\'ora, il transfert più breve tra tutte le destinazioni sciistiche lapponi. Il paese sorge ai piedi del Levitunturi e si attraversa a piedi, perciò la maggior parte dei visitatori rinuncia all\'auto a noleggio, a meno di gite giornaliere verso Ylläs o verso Kittilä.',
      planStay: 'Levi merita più di un fine settimana: da tre a cinque notti bastano per sciare, fare un safari e tenersi comunque una serata all\'Hullu Poro. I letti ai piedi delle piste e le partenze con gli husky meglio recensite si esauriscono per primi nella settimana di Natale e durante le vacanze scolastiche finlandesi di marzo. Skipass e noleggio attrezzatura, invece, si sistemano più facilmente sul posto delle escursioni.',
    },
    yllas: {
      seasonsTitle: 'Ylläs stagione per stagione',
      seasonWinter: 'Due paesi si dividono una fjeld e in tutto 62 piste, comprese discese di oltre tre chilometri, le più lunghe della Finlandia. Attorno si stendono circa 300 chilometri di pista da fondo battuta che arrivano dentro il parco nazionale di Pallas-Yllästunturi. Qui il cielo è buio e aperto, ed è per questo che le uscite per le aurore partono dalla fjeld stessa e non da un paese illuminato.',
      seasonSummer: 'Quando la pista si scioglie, lo stesso parco nazionale diventa terreno da trekking: percorsi segnati sulla fjeld aperta, vecchia pecceta e passerelle di legno sulla torbiera. La fine dell\'estate è tempo di bacche e funghi, e in autunno il ruska colora i pendii prima della prima neve. L\'estate a Ylläs è silenziosa come le settimane di sci non lo sono mai.',
      planTitle: 'Organizzare un viaggio a Ylläs',
      planGetting: 'L\'aeroporto di Kittilä dista circa 35 minuti di auto. I due paesi si trovano su versanti opposti della fjeld e la strada che li unisce è lunga, quindi scelga il lato prima di prenotare: Äkäslompolo è il più tranquillo, a Ylläsjärvi ci sono i bar. Un\'auto rende molto più semplice spostarsi tra i due.',
      planStay: 'Scelga Ylläs invece di Levi se cerca cielo buio, silenzio da parco nazionale e lunghe giornate sugli sci più che vita notturna. Consideri almeno tre notti; la sola rete di piste da fondo ne giustifica di più. A marzo ci sono neve e vera luce del giorno insieme, ed è il momento migliore per le giornate lunghe.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä stagione per stagione',
      seasonWinter: 'Questa è la stazione sciistica più settentrionale della Finlandia, e la latitudine si sente: le probabilità di aurora vanno da settembre ad aprile, e le giornate del pieno inverno sono corte e azzurre. I safari in motoslitta puntano dritti verso la natura, e la sauna a fumo di Kiilopää seguita da un buco nel ghiaccio è qui un uso locale, non un supplemento per turisti.',
      seasonSummer: 'Il parco nazionale di Urho Kekkonen comincia ai margini del paese, e i suoi sentieri segnati e i rifugi aperti si usano gratuitamente. Estate significa lunghe camminate sotto un sole che non tramonta, la ricerca dell\'oro a Tankavaara, dove ogni pagliuzza trovata è sua, e i safari al granchio reale oltre confine, a Kirkenes.',
      planTitle: 'Organizzare un viaggio a Saariselkä',
      planGetting: 'Voli fino a Ivalo e guidi circa trenta minuti. Saariselkä è abbastanza raccolto da girare a piedi, ma gli imbocchi dei sentieri del parco, Tankavaara e Kiilopää sono sparsi: noleggi un\'auto o scelga escursioni con transfer incluso. Inari è abbastanza vicino per una giornata.',
      planStay: 'Venga qui se vuole prima la natura e poi i servizi. Tre notti bastano per una lunga camminata o un safari, una serata di aurore e la sauna a fumo. Le gite in Norvegia sono lunghe, quindi metta in conto un giorno intero per il safari al granchio reale. I rifugi aperti funzionano per ordine di arrivo e non si prenotano.',
    },
    inari: {
      seasonsTitle: 'Inari stagione per stagione',
      seasonWinter: 'Qui l\'inverno è silenzioso e buio, il che serve tanto alle aurore quanto al motivo per cui quasi tutti arrivano: la cultura sami. Siida, museo sami e centro naturalistico, riempie una giornata al coperto, e le visite agli allevatori di renne mostrano lavoro vero e non uno spettacolo allestito. Il lago gela del tutto e la natura attorno al paese si svuota.',
      seasonSummer: 'Da giugno il lago riapre: le barche passano davanti a Ukonsaari, l\'isola sacra, e il kayak sotto il sole di mezzanotte allunga una sera qualsiasi fino a farla durare tutta la notte. Alla chiesa nella natura di Pielpajärvi si arriva a piedi attraverso una vecchia pineta, e a fine luglio maturano i lamponi artici nelle torbiere lungo il sentiero.',
      planTitle: 'Organizzare un viaggio a Inari',
      planGetting: 'L\'aeroporto di Ivalo dista circa quaranta minuti di strada. Il paese è piccolo e si gira a piedi, ma tutto il resto è distribuito lungo il lago e la strada principale verso nord, quindi l\'auto aiuta. Molti abbinano Inari a Saariselkä invece di farne l\'unica base.',
      planStay: 'Dedichi a Siida almeno mezza giornata, ala in lingua sami compresa. Le gite in barca sul lago Inari operano solo da giugno a settembre, perciò qui estate e inverno sono due viaggi diversi e non due varianti dello stesso. È una destinazione per la cultura, la fotografia e il silenzio, non per i servizi di una stazione sciistica.',
    },
    ruka: {
      seasonsTitle: 'Ruka stagione per stagione',
      seasonWinter: 'La neve stoccata permette a Ruka di aprire già in ottobre e di sciare fino a maggio, la stagione più lunga della Finlandia, su 41 piste servite da 22 impianti. Il paese sorge proprio sopra i pendii, quindi la strada dal letto agli impianti è breve. Fuori pista ci sono safari in motoslitta, uscite con gli husky e arrampicata sulle cascate ghiacciate del canyon di Korouoma.',
      seasonSummer: 'L\'estate ribalta completamente la destinazione. L\'osservazione degli orsi bruni dai capanni lavora nei mesi di luce, il fiume Kitka porta discese in gommone dalla primavera all\'autunno, e il Karhunkierros, 82 chilometri nel parco nazionale di Oulanka, è uno dei trekking più noti del Paese. Il bike park accoglie chi vuole la discesa senza la neve.',
      planTitle: 'Organizzare un viaggio a Ruka',
      planGetting: 'L\'aeroporto di Kuusamo dista circa venticinque minuti. Ruka si trova a Kuusamo, appena a sud del confine ufficiale della Lapponia, con la stessa neve e lo stesso inverno nordico. L\'auto conviene per Oulanka, Korouoma e i capanni degli orsi, tutti fuori dal paese.',
      planStay: 'Gli sciatori possono alloggiare ai piedi delle piste e non accendere mai il motore; chi cammina e chi osserva la fauna deve mettere in conto la strada. I capanni degli orsi si esauriscono con mesi di anticipo, quindi ne faccia il punto fisso di un viaggio estivo. Il Karhunkierros ha un anello di 12 chilometri per chi vuole i paesaggi senza la versione di più giorni.',
    },
    posio: {
      seasonsTitle: 'Posio stagione per stagione',
      seasonWinter: 'Posio è nota per il pieno inverno. Il gelo piega gli abeti del parco nazionale di Riisitunturi in pesanti sculture bianche, al meglio da gennaio a marzo, e il canyon di Korouoma si riempie di cascate ghiacciate che pendono fino a quaranta metri lungo la parete di roccia. Entrambi sono gite giornaliere a piedi, ed entrambi premiano una partenza presto finché c\'è luce.',
      seasonSummer: 'Senza neve lo stesso canyon diventa un itinerario di trekking in una valle di faglia ripida e boscosa, e Riisitunturi si apre come camminata di fjeld più facile, con lunghe vedute sui laghi. Pentik, la fabbrica di ceramica più settentrionale del mondo, tiene gallerie e spaccio aperti tutto l\'anno e riempie le ore quando il tempo cambia.',
      planTitle: 'Organizzare un viaggio a Posio',
      planGetting: 'Le serve un\'auto. Posio dista circa due ore da Rovaniemi e un\'ora da Ruka, e si presta naturalmente a una gita in giornata da una delle due più che a fare da base. Qui non esiste una rete di transfer come nelle stazioni sciistiche.',
      planStay: 'Prenda Posio come la giornata tranquilla dentro un viaggio lappone più ampio: un parco nazionale, un canyon e la fabbrica di ceramica la riempiono comodamente. I fotografi vengano tra gennaio e marzo per gli alberi carichi di neve. I sentieri sono segnati ma i servizi sono radi, quindi porti cibo e acqua.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda e Kemi stagione per stagione',
      seasonWinter: 'Qui l\'inverno costruisce invece di limitarsi a coprire. Il parco di neve dell\'area SnowCastle di Kemi viene rifatto da zero ogni inverno, e il rompighiaccio Sampo esce nel golfo di Botnia ghiacciato e lascia i passeggeri galleggiare in tuta di sopravvivenza fra le lastre. Nessuno dei due esiste d\'estate, il che fa di questa la sola destinazione lappone le cui attrazioni principali siano rigorosamente stagionali.',
      seasonSummer: 'L\'estate appartiene al fiume. Il Tornionjoki è il più grande fiume da salmone a corso libero d\'Europa, e alle rapide di Kukkolankoski la pesca tradizionale con il guadino si pratica ancora ogni estate. Il Green Zone Golf le fa attraversare il confine avanti e indietro: quattro cambi di Paese e di fuso in un giro, cosa che funziona solo con il terreno libero dalla neve.',
      planTitle: 'Organizzare un viaggio a Tornio',
      planGetting: 'L\'aeroporto di Kemi dista un quarto d\'ora da Tornio, e Kemi stessa circa venticinque minuti, quindi le due città funzionano come un viaggio solo. Tornio e Haparanda sono una città in due Paesi: il confine passa in mezzo alla via dello shopping e si attraversa a piedi.',
      planStay: 'È la destinazione lappone più facile da unire a una giornata di acquisti, con IKEA Haparanda proprio accanto al valico e prezzi che vale la pena confrontare su entrambi i lati. Una o due notti bastano d\'inverno per il rompighiaccio e lo SnowCastle, d\'estate per il fiume e il campo da golf.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto stagione per stagione',
      seasonWinter: 'Due paesi di fjeld occupano i due capi di una vecchia catena, con il parco nazionale in mezzo. Pyhä ha lo sci più ripido, compresa Huttu-Ukko, una pista di gobbe con un passato di Coppa del Mondo, oltre a terreno dolce e code brevi per le famiglie. A Luosto un trenino della neve riscaldato porta i visitatori sul Lampivaara, alla miniera di ametista, durante i mesi bui.',
      seasonSummer: 'Senza neve il parco è una meta per camminare: passerelle nella foresta vetusta e Isokuru, la gola più profonda della Finlandia con circa 220 metri, oltre a vedute aperte lungo la più antica catena di fjeld della Lapponia. La miniera di ametista resta aperta ed è l\'unica miniera attiva d\'Europa in cui i visitatori possono scavare e tenere una pietra.',
      planTitle: 'Organizzare un viaggio a Pyhä-Luosto',
      planGetting: 'L\'aeroporto più vicino è Rovaniemi, da lì circa un\'ora e mezza di strada. Pyhä e Luosto sono paesi distinti, a mezz\'ora l\'uno dall\'altro, uniti dal parco e non da una via: decida dove alloggerà prima di prenotare.',
      planStay: 'Le famiglie di solito scelgono Pyhä per il terreno servito dagli impianti e le code brevi; chi cammina e chi scava ametiste si sistema a Luosto. Due o tre notti coprono una giornata sulle piste, la miniera e una camminata più lunga dentro il parco. Metsähallitus cura i sentieri, e i percorsi segnati partono direttamente da entrambi i paesi.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi stagione per stagione',
      seasonWinter: 'La città sorge sul proprio lago, che gela diventando zona di pesca a pochi passi dal centro. La fjeld sciistica di Suomu dista una quarantina di minuti, gli operatori di husky propongono safari che si guidano da soli invece di corse da passeggero, e sulla riva di Uitonniemi il piccolo villaggio di Babbo Natale unisce un piccolo hotel in tronchi a incontri con Babbo Natale e uscite per le aurore.',
      seasonSummer: 'Nei mesi di luce sono le sculture il motivo per rallentare: Kemijärvi ospita dal 1985 una settimana internazionale di scultura del legno, e le grandi opere in legno restano per le strade tutto l\'anno. Il lago si apre alle barche e alla pesca, e la strada tranquilla dell\'est verso nord fa della città una prima tappa naturale.',
      planTitle: 'Organizzare un viaggio a Kemijärvi',
      planGetting: 'Qui il Santa Claus Express finisce la corsa: una partenza al giorno prosegue oltre Rovaniemi, quindi può dormire sul treno da Helsinki e scendere in riva al lago. In auto ci vuole circa un\'ora da Rovaniemi. Fino a Pyhä ci sono 50 chilometri.',
      planStay: 'Kemijärvi si adatta a chi viaggia in treno e a chi vuole la Lapponia senza la folla delle stazioni. Funziona come base tranquilla per la Lapponia orientale, con Pyhä e Suomu entrambi a breve distanza in auto. Una o due notti di solito bastano, a meno che non la usi come porta d\'ingresso alla più quieta strada dell\'est.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Che cosa significa qui avventura artica',
      covers: 'In Lapponia l\'avventura è per lo più a motore o legata al ghiaccio: safari guidati in motoslitta, da un paio d\'ore a un\'intera giornata nella natura, karting su un lago ghiacciato, arrampicata sulle cascate ghiacciate del canyon di Korouoma, rafting sul fiume Kitka e una notte in un hotel di neve. Anche la crociera con il rompighiaccio da Kemi rientra qui.',
      whenToGo: 'La maggior parte si svolge da novembre a marzo, quando i laghi reggono e il manto nevoso è abbastanza profondo perché un safari lasci la rete stradale. Il rafting è l\'eccezione e va dalla primavera all\'autunno. Gli hotel di neve e tutto ciò che è costruito in ghiaccio si sciolgono, quindi esistono solo nella metà invernale dell\'anno.',
      chooseTitle: 'Scegliere l\'escursione di avventura',
      choosing: 'La scelta principale riguarda la durata. Le partenze brevi in gruppo si adattano a mezza giornata e a gruppi misti; le spedizioni di un giorno coprono molto più terreno e di norma richiedono la patente per la motoslitta. Il karting sul ghiaccio e le formule famiglia accettano anche passeggeri troppo giovani per guidare. L\'arrampicata su ghiaccio è guidata e l\'attrezzatura è inclusa, ma chiede più di un safari.',
      bring: 'Per motoslitta e attività sul ghiaccio gli operatori forniscono tuta termica, stivali, guanti e casco, quindi porti strati e non volume: intimo di lana o sintetico, uno strato intermedio caldo e un berretto che stia sotto il casco. Porti la patente se intende guidare, e tenga il telefono in una tasca che resti calda.',
    },
    animals: {
      coversTitle: 'Incontrare gli animali dell\'Artico',
      covers: 'Qui rientrano le slitte con gli husky e le visite ai canili, gli allevamenti di renne e i giri in slitta, l\'osservazione degli orsi bruni selvatici dai capanni nei boschi a est di Kuusamo, e il parco faunistico di Ranua, dove vivono orsi polari nello zoo più settentrionale del mondo. Le visite agli allevatori sami a Inari e Samiland a Levi stanno al confine con la categoria cultura.',
      whenToGo: 'La slitta richiede neve, quindi le uscite con husky e renne vanno grosso modo da novembre ad aprile. I canili restano aperti d\'estate per visite e incontri con i cuccioli, solo senza slitta. Con gli orsi vale il contrario: i capanni lavorano nei mesi di luce, dalla primavera all\'inizio dell\'autunno, quando gli orsi si muovono e le notti sono abbastanza chiare.',
      chooseTitle: 'Scegliere l\'esperienza con gli animali',
      choosing: 'Decida prima se vuole guidare o essere trasportato. Nei safari che guida lei sta in piedi sui pattini con un proprio tiro, di solito in due che si alternano; i giri da passeggero e le visite agli allevamenti si adattano ai bambini piccoli e a chi preferisce il tempo con i cani ai chilometri. La slitta a renne è lenta per natura, ed è proprio quello il punto.',
      bring: 'Allevamenti e canili forniscono le tute per la slitta. Porti guanti con cui poter lavorare, perché maneggerà finimenti e macchina fotografica al freddo. Un capanno per gli orsi è attesa dentro un riparo fisso, quindi metta in valigia più isolamento di quanto suggerisca il cammino di avvicinamento, più qualcosa di silenzioso per passare il tempo. Il flash è vietato in ogni capanno.',
    },
    'northern-lights': {
      coversTitle: 'Come funziona la caccia all\'aurora in Lapponia',
      covers: 'Qui le uscite per l\'aurora sono cacce, non punti panoramici: la guida segue le previsioni delle nuvole e l\'indice di attività e guida verso lo squarcio di cielo che quella sera promette meglio. I formati cambiano più dei luoghi: giri in autobus, serate fotografiche, camminate con le ciaspole e uscite in motoslitta che la portano su un lago ghiacciato, lontano da ogni luce.',
      whenToGo: 'La stagione va all\'incirca da settembre ad aprile e richiede tre cose insieme: buio, cielo sereno e attività solare. L\'autunno offre acqua libera per i riflessi prima che i laghi gelino; il pieno inverno dà le ore di buio più lunghe. Una sola notte non garantisce nulla, ed è l\'argomento più forte per mettere in programma due o tre tentativi.',
      chooseTitle: 'Scegliere l\'uscita per l\'aurora',
      choosing: 'Le uscite fotografiche valgono la spesa se vuole immagini: la guida imposta la sua macchina e conosce i tempi di esposizione. I giri in autobus coprono più terreno e danno la probabilità migliore per euro quando il tempo è incerto. Ciaspole e motoslitta scambiano un po\' di mobilità con un posto migliore e più silenzioso. Le destinazioni del nord come Saariselkä e Inari hanno cieli più bui delle stazioni sciistiche.',
      bring: 'Resterà fermo all\'aperto per ore, quindi si vesta molto più caldo che per una giornata attiva: tuta se l\'operatore la fornisce, intimo di lana, due paia di calze e scaldini. Treppiede e batterie di scorta contano più di una macchina costosa; il freddo scarica le batterie in fretta. Tenga spenta la torcia bianca, rovina la visione notturna a tutti.',
    },
    'winter-sports': {
      coversTitle: 'Sci e sport sulla neve in Lapponia',
      covers: 'Sei fjeld di questa guida hanno impianti: Ounasvaara sopra Rovaniemi, Levi, Ylläs, Ruka, Pyhä e Suomu. Insieme coprono tutto, dalla pista per principianti in città alle discese più lunghe della Finlandia a Ylläs. Fuori dagli impianti la categoria comprende sci di fondo, ciaspole nella foresta vetusta, fatbike e pattinaggio.',
      whenToGo: 'La neve stoccata permette a Ruka di aprire in ottobre e di sciare fino a maggio, la stagione più lunga del Paese. La maggior parte delle stazioni lavora da novembre o dicembre ad aprile. Il pieno inverno ha l\'atmosfera ma giornate cortissime; marzo e aprile uniscono manto completo e vera luce del giorno, ed è allora che la rete da fondo dà il meglio.',
      chooseTitle: 'Scegliere la stazione',
      choosing: 'Levi è la più grande, ha il transfert più breve dall\'aeroporto e il maggiore après-ski. Ylläs ha le discese più lunghe e la rete da fondo più estesa con molto meno rumore. Ruka ha la stagione più lunga e alloggi ai piedi delle piste. Pyhä va bene sia per le famiglie sia per gli specialisti delle gobbe, Ounasvaara per una serata dopo una giornata a Rovaniemi, e Suomu è l\'opzione tranquilla.',
      bring: 'Il noleggio c\'è in ogni stazione e si sistema più facilmente sul posto delle escursioni. Porti maschera e protezione per il viso: il vento sulla fjeld aperta fa più danni di quanto suggerisca il termometro. Chi scia di fondo controlli il bollettino delle piste prima di scegliere il versante, perché la battitura cambia da paese a paese.',
    },
    wellness: {
      coversTitle: 'Sauna e benessere artico',
      covers: 'Qui benessere significa caldo e freddo in sequenza, non cabine per trattamenti. La sauna a fumo tradizionale di Kiilopää viene scaldata per ore e areata prima dell\'uso, il che dà un calore morbido che una stufa elettrica non produce, e si conclude con un buco nel ghiaccio. Il galleggiamento artico la mette in una tuta di sopravvivenza e la lascia andare alla deriva.',
      whenToGo: 'Entrambi funzionano tutto l\'anno, ma per carattere sono esperienze invernali: il bagno nel ghiaccio richiede un foro aperto in un lago gelato, e il galleggiamento rende meglio quando c\'è ghiaccio attorno. Una sauna a fumo impiega ore a scaldarsi, quindi va a turni fissi e non a richiesta, ed è il turno del pomeriggio quello da prenotare.',
      chooseTitle: 'Scegliere l\'esperienza di sauna',
      choosing: 'La sauna a fumo è la versione tradizionale e quella attorno a cui vale la pena costruire una giornata. Il bagno nel ghiaccio è facoltativo ovunque venga offerto, e nessuno la spingerà dentro. Il galleggiamento è adatto a chi vuole l\'acqua fredda senza nuotare, perché la tuta la tiene asciutta e abbastanza calda per restarci un po\'.',
      bring: 'Porti costume e asciugamano; quasi tutte le strutture li noleggiano se se ne dimentica. In Finlandia in sauna di solito si sta senza costume nei turni divisi per sesso e con il costume in quelli pubblici misti, quindi chieda all\'arrivo. Si riservi il tempo per raffreddarsi bene invece di correre subito all\'attività successiva.',
    },
    culture: {
      coversTitle: 'Eredità sami, Babbo Natale e il racconto artico',
      covers: 'Due fili attraversano questa categoria. Il primo è la cultura sami, che si incontra al meglio a Siida, a Inari, museo sami e centro naturalistico nella sede del Parlamento sami finlandese, e a Samiland, a Levi. Il secondo è il racconto artico che la regione fa di sé: il Villaggio di Babbo Natale e il SantaPark a Rovaniemi, l\'Arktikum sulla riva del fiume e i luoghi costruiti nel ghiaccio.',
      whenToGo: 'I musei sono aperti tutto l\'anno e sfruttano meglio di qualsiasi altra cosa una giornata di brutto tempo o un breve pomeriggio invernale. Gli hotel di ghiaccio e i villaggi di neve esistono solo con il freddo, all\'incirca da dicembre ad aprile. La ricerca dell\'oro a Tankavaara e la miniera di ametista sul Lampivaara lavorano in entrambe le stagioni, con un trenino della neve riscaldato verso la miniera d\'inverno.',
      chooseTitle: 'Scegliere la visita culturale',
      choosing: 'Se vuole cultura viva e non uno spettacolo, cominci da Siida e da una visita ad allevatori di renne al lavoro a Inari, non da una rappresentazione. Se viaggia con bambini, il Villaggio di Babbo Natale e il SantaPark sono costruiti proprio per loro. L\'Arktikum ha la più solida mostra sull\'aurora del Paese e regge mezza giornata al coperto.',
      bring: 'I musei chiedono solo tempo, e Siida merita almeno tre ore. Negli hotel di ghiaccio e nei villaggi di neve si sta sotto zero anche dentro, quindi tenga addosso gli strati esterni durante la visita. A Tankavaara tutto quello che setaccia è suo, e sul Lampivaara può scavare e tenere un\'ametista.',
    },
    summer: {
      coversTitle: 'La Lapponia nei mesi di luce',
      covers: 'L\'estate trasforma lo stesso paesaggio in terreno da trekking, pagaia e bicicletta. Gli itinerari dei parchi nazionali corrono a Pallas-Yllästunturi, Urho Kekkonen, Oulanka e Pyhä-Luosto, dai brevi anelli segnati agli 82 chilometri del Karhunkierros. Sull\'acqua ci sono crociere sul lago e kayak sotto il sole di mezzanotte a Inari; su ruote, il Levi Bike Park. Il golf sotto un sole che non tramonta è la stranezza locale.',
      whenToGo: 'Da giugno ad agosto è il cuore della stagione, e al solstizio a queste latitudini il sole resta sopra l\'orizzonte ventiquattro ore su ventiquattro. A fine luglio arrivano i lamponi artici e i primi funghi. Settembre e ottobre sono le settimane del ruska, quando le fjeld cambiano colore e tornano le prime aurore, con i sentieri quasi vuoti.',
      chooseTitle: 'Scegliere il viaggio estivo',
      choosing: 'Decida se vuole una base o un itinerario. Le camminate in giornata da un paese vanno bene per la maggior parte e non richiedono permessi; i percorsi lunghi richiedono pianificazione, e i rifugi lungo di essi sono gratuiti e per ordine di arrivo. Kayak e rafting sono guidati, che è il modo sensato di conoscere un fiume del nord per la prima volta.',
      bring: 'Le zanzare toccano il massimo a metà estate, quindi repellente e retina per la testa non sono facoltativi sulla torbiera. Porti una buona mascherina per dormire se la luce continua la disturba. Scarpe che tengano su passerelle bagnate contano più di suole pesanti da montagna, e ogni percorso segnato si cammina in base al diritto di accesso alla natura, quindi non serve alcun permesso.',
    },
    food: {
      coversTitle: 'Mangiare nel nord',
      covers: 'Qui il cibo è legato al fuoco e alla stagione. Una kota o kammi è una capanna conica con un focolare aperto al centro, e il pasto si prepara davanti a lei: renna, pesce, pane piatto, lamponi artici. Fuori dalla tavola ci sono la raccolta di bacche e funghi selvatici, e a Kukkolankoski il coregone si pesca ancora con il guadino tradizionale.',
      whenToGo: 'Le cene attorno al fuoco funzionano tutto l\'anno e danno il meglio nella metà buia dell\'anno, quando il fuoco è l\'unica luce della stanza. La raccolta appartiene a fine estate e autunno: bacche da luglio, funghi da agosto. La stagione del coregone a Kukkolankoski è estiva e segue la risalita nel fiume.',
      chooseTitle: 'Scegliere l\'esperienza gastronomica',
      choosing: 'Una cena in kota è di solito un menu fisso con una guida che spiega che cosa sta mangiando e da dove viene, quindi funziona come serata più che come pasto. Le uscite di raccolta sono guidate da qualcuno in grado di dire che cosa è sicuro, ed è tutto il senso della cosa. Entrambe si adattano a gruppi misti e non richiedono allenamento.',
      bring: 'Segnali allergie e diete al momento della prenotazione, perché sono menu fissi cucinati sul fuoco e non una carta. Si vesta per stare seduto all\'aperto: in una kota fa caldo vicino al focolare e freddo contro la parete. Il diritto di accesso alla natura permette di raccogliere bacche e funghi selvatici ovunque lei possa transitare legalmente.',
    },
    fishing: {
      coversTitle: 'Pescare in tre tipi di acqua',
      covers: 'In questo angolo di Artico si incontrano tre pesche diverse: la pesca sul ghiaccio nei laghi gelati, i fiumi da salmone estivi con licenza come il Tornionjoki, e i safari al granchio reale oltre il confine norvegese, da Kirkenes. Hanno stagioni, regole e permessi diversi, e il sito tiene una pagina dedicata alla pesca con le regole in vigore e i link ufficiali dei permessi.',
      whenToGo: 'La pesca sul ghiaccio copre i mesi gelati, all\'incirca da dicembre ad aprile, ed è la più semplice da organizzare con poco preavviso. La stagione del salmone è estiva ed è regolata in modo severo, con date fissate anno per anno. I safari al granchio reale lavorano in entrambe le stagioni: in motoslitta o in autobus sul ghiaccio d\'inverno, in gommone d\'estate.',
      chooseTitle: 'Scegliere l\'uscita di pesca',
      choosing: 'La pesca sul ghiaccio guidata è l\'opzione comoda: la guida trapana i fori, porta l\'attrezzatura e di solito prepara da mangiare accanto al fuoco. Pescare il salmone nel Tornionjoki è una faccenda seria e richiede il permesso giusto prima del primo lancio. Le uscite al granchio reale sono tanto gita in barca o in motoslitta quanto pesca, e finiscono con il pescato nel piatto.',
      bring: 'Le regole cambiano di anno in anno e variano da acqua ad acqua, quindi verifichi le condizioni ufficiali del permesso prima di pescare, non dopo. Le uscite guidate includono l\'attrezzatura; la pesca sul ghiaccio in autonomia richiede canna propria, trivella e senso dello spessore del ghiaccio. Il catch and release è la norma in molti fiumi qui, e serve a tenere in vita le popolazioni.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'In che cosa differiscono le dieci destinazioni',
      lead: 'La Lapponia non è un unico luogo con un\'unica stagione. Rovaniemi ha l\'aeroporto, il treno notturno e la scelta di escursioni più ampia. Levi e Ruka sono paesi sciistici che si attraversano a piedi. Ylläs e Saariselkä scambiano la vita notturna con il cielo buio e il silenzio del parco nazionale. A Inari la cultura sami si incontra invece di essere messa in scena, e Posio, Tornio e Kemijärvi sono le destinazioni tranquille.',
      note: 'Quassù le distanze sono reali: due destinazioni vicine sulla carta possono essere separate da due ore di auto. Per un viaggio breve scelga una sola base e ne aggiunga una seconda solo se ha una settimana. Ogni pagina qui sotto elenca gli operatori che lavorano in quella destinazione, che cosa funziona in quale stagione e come arrivarci.',
    },
    catList: {
      leadTitle: 'Scegliere per attività invece che per luogo',
      lead: 'Se sa già che cosa vuole fare, cominci da qui invece che dalla mappa. Ogni pagina di categoria spiega che cosa comporta davvero quell\'attività in Lapponia, in quali mesi si svolge, in che cosa differiscono i formati e che cosa indossare o portare. La maggior parte delle categorie è presente in più destinazioni, quindi la scelta dell\'attività di solito precede quella del paese.',
      note: 'La stagione è il vincolo forte. Tutto ciò che avviene su neve o ghiaccio richiede la metà fredda dell\'anno, all\'incirca da novembre ad aprile. Trekking, pagaia e sole di mezzanotte appartengono a giugno-agosto. L\'aurora ha bisogno di buio e va all\'incirca da settembre ad aprile. L\'osservazione degli orsi è il rovescio della slitta, e su entrambe vale la pena costruire un viaggio.',
    },
  },
};

export default guides;
