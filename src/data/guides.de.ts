// Deutschsprachiger Saison- und Planungsleitfaden für Ziel- und Kategorieseiten.
// Auf Deutsch geschrieben, nicht maschinell übersetzt. Faktenbasis:
// src/data/destinations.ts, categories.ts, activities.ts — keine erfundenen
// Preise, Besucherzahlen oder Temperaturen.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi Saison für Saison',
      seasonWinter: 'Von November bis März friert der Fluss zu, der Schnee bleibt liegen und praktisch das gesamte Programm öffnet gleichzeitig: Schneemobilsafaris, Husky- und Rentierschlitten, Eisangeln und Nordlichtjagden. Um die Wintersonnenwende kommt die Sonne kaum über den Horizont, und genau deshalb ist das Polarlicht hier so gut zu sehen. Weihnachten und Neujahr sind die vollsten zwei Wochen des Jahres.',
      seasonSummer: 'Von Juni bis August tauscht die Stadt Schnee gegen Licht, das nicht mehr aufhört. Die Huskyfarmen bleiben für Besuche und Welpentreffen geöffnet, Arktikum und SantaPark laufen ganzjährig, und das Ufer des Kemijoki wird zum Mittelpunkt. September und Oktober bringen die Ruska-Farben auf den Ounasvaara und die ersten Nordlichter der Saison, bei deutlich leereren Wegen.',
      planTitle: 'Eine Reise nach Rovaniemi planen',
      planGetting: 'Rovaniemi hat die besten Verbindungen Lapplands: Der Direktflug aus Helsinki dauert etwa eine Stunde und zwanzig Minuten, der Nachtzug kommt am Morgen an. Die meisten Husky-, Rentier- und Nordlichtanbieter liegen keine zwanzig Fahrminuten entfernt, und Touren beinhalten in der Regel den Hoteltransfer, ein Mietwagen ist hier also optional.',
      planStay: 'Zwei bis drei Nächte reichen für das Weihnachtsmanndorf, eine große Safari und einen Nordlichtabend ohne Hetze. Buchen Sie Husky- und Schneemobiltouren für Dezember und die Hochsaison im Februar und März früh. Das Polarkreiszertifikat im Postamt des Weihnachtsmanndorfs kostet nichts, und der Ounasvaara liegt nah genug für eine Abfahrt am Abend.',
    },
    levi: {
      seasonsTitle: 'Levi Saison für Saison',
      seasonWinter: 'Die Skisaison ist der Hauptgrund: 44 Pisten und 26 Lifte, darunter zwei Gondelbahnen, von der Dunkelheit im November bis in die langen hellen Apriltage. Der alpine Weltcup eröffnet hier jedes Jahr im November seine Slalomsaison. Nordlichtfotokurse, Huskysafaris und Schneemobiltouren zu einer Rentierfarm füllen die Stunden, in denen die Lifte stehen.',
      seasonSummer: 'Im Sommer bringt die Gondel statt Skifahrern den Levi Bike Park nach oben, und der Fjäll wird zum Wandergebiet. Golf unter der Mitternachtssonne ist die örtliche Kuriosität: Abschlag kurz vor Mitternacht, Runde bei vollem Tageslicht. Die 230 Loipenkilometer des Winters dienen schneefrei als Wander- und Laufwege.',
      planTitle: 'Eine Reise nach Levi planen',
      planGetting: 'Vom Flughafen Kittilä sind es rund fünfzehn Minuten, der kürzeste Flughafentransfer aller lappländischen Skiziele. Das Dorf liegt am Fuß des Levitunturi und ist zu Fuß zu durchqueren, deshalb verzichten die meisten auf den Mietwagen, sofern keine Tagesausflüge nach Ylläs oder Richtung Kittilä geplant sind.',
      planStay: 'Levi lohnt sich länger als ein Städtetrip: Drei bis fünf Nächte reichen für Skitage, eine Safari und trotzdem einen Abend im Hullu Poro. Betten direkt an der Piste und die bestbewerteten Huskytouren sind in der Weihnachtswoche und in den finnischen Skiferien im März zuerst weg. Skipässe und Ausrüstung lassen sich dagegen vor Ort leichter regeln als Touren.',
    },
    yllas: {
      seasonsTitle: 'Ylläs Saison für Saison',
      seasonWinter: 'Zwei Dörfer teilen sich einen Fjäll und zusammen 62 Pisten, darunter Abfahrten von über drei Kilometern, die längsten Finnlands. Ringsum liegen etwa 300 Kilometer gespurte Loipen, die bis in den Nationalpark Pallas-Yllästunturi reichen. Der Himmel ist hier dunkel und offen, weshalb Nordlichttouren vom Fjäll selbst starten und nicht aus einem beleuchteten Dorf.',
      seasonSummer: 'Sobald die Loipe schmilzt, wird derselbe Nationalpark zum Wandergebiet: markierte Routen über offenes Fjäll, durch alten Fichtenwald und auf Bohlenwegen durchs Moor. Der Spätsommer gehört Beeren und Pilzen, im Herbst färbt die Ruska die Hänge vor dem ersten Schnee. Der Sommer am Ylläs ist still, wie es die Skiwochen nie sind.',
      planTitle: 'Eine Reise nach Ylläs planen',
      planGetting: 'Vom Flughafen Kittilä fährt man etwa 35 Minuten. Die beiden Dörfer liegen auf gegenüberliegenden Seiten des Fjälls und die Straße dazwischen ist lang: Entscheiden Sie vor der Buchung, welche Seite es sein soll. Äkäslompolo ist die ruhigere, in Ylläsjärvi sind die Bars. Ein Auto erleichtert den Wechsel erheblich.',
      planStay: 'Wählen Sie Ylläs statt Levi, wenn Sie dunklen Himmel, Nationalparkstille und lange Skitage statt Nachtleben suchen. Planen Sie mindestens drei Nächte ein; allein das Loipennetz rechtfertigt mehr. Der März bringt Schnee und echtes Tageslicht zugleich, das ist die beste Zeit für lange Tage auf der Loipe.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä Saison für Saison',
      seasonWinter: 'Dies ist das nördlichste Skigebiet Finnlands, und der Breitengrad macht sich bemerkbar: Nordlichtchancen bestehen von September bis April, die Tage im Hochwinter sind kurz und blau. Schneemobilsafaris fahren direkt in die Wildnis, und die Rauchsauna von Kiilopää mit anschließendem Eisloch ist hier ein örtlicher Brauch und keine Touristenbeigabe.',
      seasonSummer: 'Der Nationalpark Urho Kekkonen beginnt am Dorfrand, seine markierten Wege und offenen Wildnishütten sind kostenlos nutzbar. Sommer heißt lange Touren unter einer Sonne, die nicht untergeht, Goldwaschen in Tankavaara, wo jedes gefundene Körnchen Ihnen gehört, und Königskrabbensafaris über die Grenze nach Kirkenes.',
      planTitle: 'Eine Reise nach Saariselkä planen',
      planGetting: 'Fliegen Sie nach Ivalo und fahren Sie etwa dreißig Minuten. Saariselkä selbst ist kompakt genug zum Gehen, aber die Einstiege in den Nationalpark, Tankavaara und Kiilopää liegen verstreut: Entweder Mietwagen oder Touren mit Transfer. Inari ist nah genug für einen Tagesausflug.',
      planStay: 'Kommen Sie hierher, wenn Wildnis zuerst und Service zweitens zählt. Drei Nächte reichen für eine lange Tour oder Safari, einen Nordlichtabend und die Rauchsauna. Die Tagesausflüge nach Norwegen sind lang, planen Sie für die Königskrabbensafari einen ganzen Tag. Wildnishütten funktionieren nach Ankunft und lassen sich nicht reservieren.',
    },
    inari: {
      seasonsTitle: 'Inari Saison für Saison',
      seasonWinter: 'Der Winter ist hier still und dunkel, was sowohl den Nordlichtern entgegenkommt als auch dem Grund, aus dem die meisten kommen: der samischen Kultur. Siida, Samimuseum und Naturzentrum, füllt einen Tag im Innenraum, und Besuche bei Rentierhaltern zeigen echte Arbeit statt einer Inszenierung. Der See friert durch, und die Wildnis um das Dorf leert sich.',
      seasonSummer: 'Ab Juni öffnet sich der See wieder: Bootsfahrten führen an Ukonsaari vorbei, der heiligen Insel, und Kajakfahren unter der Mitternachtssonne dehnt einen normalen Abend auf die ganze Nacht. Die Wildniskirche von Pielpajärvi erreicht man zu Fuß durch alten Kiefernwald, und Ende Juli reifen in den Mooren am Weg die Moltebeeren.',
      planTitle: 'Eine Reise nach Inari planen',
      planGetting: 'Vom Flughafen Ivalo sind es etwa vierzig Fahrminuten. Das Dorf selbst ist klein und zu Fuß zu erschließen, alles andere verteilt sich am See und entlang der Hauptstraße nach Norden, ein Auto hilft also. Viele kombinieren Inari mit Saariselkä, statt es als alleinige Basis zu nehmen.',
      planStay: 'Planen Sie für Siida mindestens einen halben Tag ein, inklusive des samischsprachigen Flügels. Bootsfahrten auf dem Inarisee verkehren nur von Juni bis September, Sommer und Winter sind hier also wirklich zwei verschiedene Reisen. Das ist ein Ziel für Kultur, Fotografie und Ruhe, nicht für Skigebietsservice.',
    },
    ruka: {
      seasonsTitle: 'Ruka Saison für Saison',
      seasonWinter: 'Eingelagerter Schnee lässt Ruka schon im Oktober öffnen und bis in den Mai fahren, die längste Skisaison Finnlands, auf 41 Pisten mit 22 Liften. Das Dorf liegt direkt über den Hängen, der Weg vom Bett zum Lift ist kurz. Abseits der Pisten gibt es Schneemobilsafaris, Huskytouren und Eisklettern an den gefrorenen Wasserfällen der Korouoma-Schlucht.',
      seasonSummer: 'Der Sommer dreht das Ziel komplett um. Braunbärenbeobachtung aus Verstecken läuft durch die hellen Monate, der Fluss Kitka trägt Raftingtouren vom Frühjahr bis in den Herbst, und der 82 Kilometer lange Karhunkierros durch den Nationalpark Oulanka ist eine der bekanntesten Wanderungen des Landes. Der Bikepark bedient alle, die die Abfahrt ohne Schnee wollen.',
      planTitle: 'Eine Reise nach Ruka planen',
      planGetting: 'Der Flughafen Kuusamo liegt rund fünfundzwanzig Minuten entfernt. Ruka gehört zu Kuusamo, knapp südlich der offiziellen Grenze Lapplands, mit demselben Schnee und demselben nördlichen Winter. Für Oulanka, Korouoma und die Bärenverstecke lohnt sich ein Auto, denn sie liegen alle außerhalb des Dorfes.',
      planStay: 'Skifahrer wohnen direkt an der Piste und starten den Motor nie; Wanderer und Tierbeobachter sollten mit Fahrzeiten rechnen. Bärenverstecke sind Monate im Voraus ausgebucht, machen Sie sie zum Fixpunkt einer Sommerreise. Vom Karhunkierros gibt es eine 12-Kilometer-Runde für alle, die die Landschaft ohne Mehrtagesvariante wollen.',
    },
    posio: {
      seasonsTitle: 'Posio Saison für Saison',
      seasonWinter: 'Für den Hochwinter ist Posio bekannt. Frost biegt die Fichten im Nationalpark Riisitunturi zu schweren weißen Skulpturen, am schönsten von Januar bis März, und die Korouoma-Schlucht füllt sich mit gefrorenen Wasserfällen, die bis zu vierzig Meter an der Felswand hängen. Beides sind Tagestouren zu Fuß, und beides belohnt einen frühen Start, solange es hell ist.',
      seasonSummer: 'Ohne Schnee wird dieselbe Schlucht zur Wanderroute durch ein steiles, bewaldetes Bruchtal, und der Riisitunturi öffnet sich als leichtere Fjällwanderung mit weitem Blick über die Seen. Pentik, die nördlichste Keramikmanufaktur der Welt, hält Galerien und Fabrikverkauf ganzjährig offen und füllt die Stunden, wenn das Wetter umschlägt.',
      planTitle: 'Eine Reise nach Posio planen',
      planGetting: 'Sie brauchen ein Auto. Von Rovaniemi sind es etwa zwei Stunden, von Ruka eine, und Posio passt natürlich als Tagesausflug von beiden aus, weniger als eigene Basis. Ein Transfernetz wie in den Skiorten gibt es hier nicht.',
      planStay: 'Nehmen Sie Posio als den ruhigen Tag innerhalb einer größeren Lapplandreise: ein Nationalpark, eine Schlucht und die Keramikmanufaktur füllen ihn bequem. Fotografen sollten zwischen Januar und März für die schneebeladenen Bäume kommen. Die Wege sind markiert, die Versorgung ist dünn, nehmen Sie Verpflegung und Wasser mit.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda und Kemi Saison für Saison',
      seasonWinter: 'Hier baut der Winter, statt nur zu bedecken. Der Schneepark des SnowCastle-Areals in Kemi wird jeden Winter neu errichtet, und der Eisbrecher Sampo fährt hinaus in den zugefrorenen Bottnischen Meerbusen und lässt seine Gäste im Überlebensanzug zwischen den Eisschollen treiben. Beides existiert im Sommer nicht, damit ist dies das einzige Ziel Lapplands, dessen Hauptattraktionen streng saisonal sind.',
      seasonSummer: 'Der Sommer gehört dem Fluss. Der Tornionjoki ist der größte frei fließende Lachsfluss Europas, und an den Stromschnellen von Kukkolankoski wird jeden Sommer noch traditionell mit dem Kescher gefischt. Green Zone Golf schickt Sie über die Grenze hin und her, viermal Land- und Zeitzonenwechsel pro Runde, was nur bei schneefreiem Boden funktioniert.',
      planTitle: 'Eine Reise nach Tornio planen',
      planGetting: 'Vom Flughafen Kemi sind es etwa fünfzehn Minuten nach Tornio, und Kemi selbst liegt rund fünfundzwanzig Minuten entfernt, beide Städte lassen sich also als eine Reise behandeln. Tornio und Haparanda sind eine Stadt in zwei Ländern: Die Grenze verläuft mitten durch die Einkaufsstraße und wird zu Fuß überquert.',
      planStay: 'Dies ist das lappländische Ziel, das sich am leichtesten mit einem Einkaufstag verbinden lässt, mit IKEA Haparanda direkt am Übergang und Preisen, die sich beidseitig zu vergleichen lohnen. Ein bis zwei Nächte genügen im Winter für Eisbrecher und SnowCastle, im Sommer für Fluss und Golfplatz.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto Saison für Saison',
      seasonWinter: 'Zwei Fjälldörfer liegen an den Enden einer alten Fjällkette, dazwischen der Nationalpark. Pyhä hat das steilere Skifahren, darunter Huttu-Ukko, eine Buckelpiste mit Weltcupvergangenheit, dazu sanftes Gelände und kurze Liftschlangen für Familien. In Luosto zieht ein beheizter Schneezug die Besucher durch die dunklen Monate zur Amethystmine auf dem Lampivaara.',
      seasonSummer: 'Schneefrei ist der Park ein Wanderziel: Bohlenwege durch alten Wald und Isokuru, mit rund 220 Metern die tiefste Schlucht Finnlands, dazu freie Sicht über die älteste Fjällkette Lapplands. Die Amethystmine bleibt geöffnet: Europas einzige aktive Amethystmine, in der Besucher graben und einen Stein behalten dürfen.',
      planTitle: 'Eine Reise nach Pyhä-Luosto planen',
      planGetting: 'Der nächste Flughafen ist Rovaniemi, von dort etwa anderthalb Stunden über Land. Pyhä und Luosto sind eigenständige Dörfer, rund eine halbe Stunde voneinander entfernt, verbunden durch den Park und nicht durch eine Dorfstraße: Entscheiden Sie vor der Buchung, wo Sie wohnen.',
      planStay: 'Familien wählen meist Pyhä wegen des Liftgeländes und der kurzen Schlangen; Wanderer und Amethystgräber quartieren sich in Luosto ein. Zwei bis drei Nächte decken einen Pistentag, die Mine und eine längere Wanderung in den Park ab. Metsähallitus pflegt die Wege, und die markierten Routen starten direkt in beiden Dörfern.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi Saison für Saison',
      seasonWinter: 'Die Stadt liegt an ihrem eigenen See, der in Gehweite vom Zentrum zum Eisangelrevier gefriert. Zum Skifjäll Suomu sind es etwa vierzig Minuten, die Huskyanbieter fahren Selbstfahrersafaris statt Mitfahrten, und am Ufer von Uitonniemi verbindet das Weihnachtsmanndörfchen ein kleines Blockhaushotel mit Besuchen beim Weihnachtsmann und Nordlichtausfahrten.',
      seasonSummer: 'In den hellen Monaten sind die Skulpturen der Grund zum Langsamwerden: Kemijärvi richtet seit 1985 eine internationale Holzbildhauerwoche aus, und die großen Holzarbeiten stehen ganzjährig in den Straßen. Der See öffnet sich für Boote und Angeln, und die stille Ostroute nach Norden macht die Stadt zum natürlichen ersten Halt.',
      planTitle: 'Eine Reise nach Kemijärvi planen',
      planGetting: 'Hier endet der Santa Claus Express: Eine Abfahrt am Tag fährt über Rovaniemi hinaus, Sie können also im Zug ab Helsinki schlafen und am See aussteigen. Mit dem Auto ist es rund eine Stunde von Rovaniemi. Nach Pyhä sind es 50 Kilometer.',
      planStay: 'Kemijärvi passt zu Bahnreisenden und allen, die Lappland ohne Skiortbetrieb wollen. Es funktioniert als ruhige Basis für Ostlappland, Pyhä und Suomu liegen beide in bequemer Fahrweite. Ein bis zwei Nächte genügen meist, sofern Sie es nicht als Tor zur stilleren Ostroute nutzen.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Was arktisches Abenteuer hier bedeutet',
      covers: 'Abenteuer heißt in Lappland meist Motor oder Eis: geführte Schneemobilsafaris von zwei Stunden bis zum ganzen Wildnistag, Eiskarting auf einem zugefrorenen See, Eisklettern an den gefrorenen Fällen der Korouoma-Schlucht, Wildwasserrafting auf dem Kitka und eine Nacht im Schneehotel. Die Eisbrecherfahrt ab Kemi gehört ebenfalls hierher.',
      whenToGo: 'Der Großteil läuft von November bis März, wenn die Seen tragen und die Schneedecke tief genug ist, damit eine Safari das Straßennetz verlassen kann. Rafting ist die Ausnahme und läuft vom Frühjahr bis in den Herbst. Schneehotels und alles aus Eis Gebaute schmilzt, es existiert also nur im Winterhalbjahr.',
      chooseTitle: 'Die passende Abenteuertour wählen',
      choosing: 'Die wichtigste Entscheidung ist die Dauer. Kurze Gruppentouren passen zum halben Tag und zu gemischten Gruppen; Ganztagesexpeditionen decken viel mehr Strecke ab und verlangen für das Schneemobil meist einen Führerschein. Eiskarting und Familienkombis nehmen auch Mitfahrer auf, die zum Fahren zu jung sind. Eisklettern ist geführt und die Ausrüstung wird gestellt, fordert Sie aber mehr als eine Safari.',
      bring: 'Für Schneemobil- und Eisprogramme stellen die Anbieter Thermooverall, Stiefel, Handschuhe und Helm, packen Sie also Schichten statt Volumen: Unterwäsche aus Wolle oder Kunstfaser, eine warme Zwischenschicht und eine Mütze, die unter den Helm passt. Führerschein mitnehmen, wenn Sie selbst fahren wollen, und das Telefon in einer warmen Tasche tragen.',
    },
    animals: {
      coversTitle: 'Den Tieren der Arktis begegnen',
      covers: 'Dazu gehören Huskyschlitten und Zwingerbesuche, Rentierfarmen und Schlittenfahrten, die Beobachtung wilder Braunbären aus Verstecken in den Wäldern östlich von Kuusamo und der Tierpark Ranua, in dem Eisbären im nördlichsten Zoo der Welt leben. Die samischen Rentierhalterbesuche in Inari und Samiland in Levi liegen an der Grenze zur Kulturkategorie.',
      whenToGo: 'Schlittenfahrten brauchen Schnee, Husky- und Rentiertouren laufen also etwa von November bis April. Die Zwinger bleiben im Sommer für Besuche und Welpentreffen geöffnet, nur ohne Schlitten. Bei den Bären ist es umgekehrt: Die Verstecke arbeiten in den hellen Monaten, vom Frühjahr bis in den Frühherbst, wenn die Bären aktiv und die Nächte hell genug sind.',
      chooseTitle: 'Die passende Tierbegegnung wählen',
      choosing: 'Entscheiden Sie zuerst, ob Sie fahren oder mitfahren wollen. Bei Selbstfahrersafaris stehen Sie mit eigenem Gespann auf den Kufen, meist zu zweit im Wechsel; Mitfahrten und Farmbesuche passen für kleine Kinder und alle, denen Zeit mit den Hunden wichtiger ist als die Strecke. Rentierschlitten sind von Natur aus langsam, und genau das ist der Punkt.',
      bring: 'Farmen und Zwinger stellen für Schlittenfahrten Overalls. Bringen Sie Handschuhe mit, in denen Sie arbeiten können, denn Sie hantieren bei Kälte mit Leinen und Kamera. Ein Bärenversteck ist Warten in einer festen Hütte, packen Sie also mehr Isolierung ein, als der Hinweg vermuten lässt, dazu etwas Leises zum Zeitvertreib. Blitzlicht ist in jedem Versteck tabu.',
    },
    'northern-lights': {
      coversTitle: 'Wie die Nordlichtjagd in Lappland abläuft',
      covers: 'Nordlichttouren sind hier Jagden, keine Aussichtsplätze: Der Guide verfolgt Wolkenprognose und Aktivitätsindex und fährt zu der Lücke am Himmel, die an diesem Abend am besten aussieht. Die Formate unterscheiden sich stärker als die Orte, von Bustouren und Fotoabenden bis zu Schneeschuhwanderungen und Schneemobilfahrten hinaus auf einen zugefrorenen See, weit weg von jedem Licht.',
      whenToGo: 'Die Saison reicht etwa von September bis April und braucht drei Dinge gleichzeitig: Dunkelheit, klaren Himmel und Sonnenaktivität. Der Herbst bietet offenes Wasser für Spiegelungen, bevor die Seen zufrieren, der Hochwinter die längsten dunklen Stunden. Eine einzelne Nacht garantiert nichts, was das beste Argument dafür ist, zwei oder drei Versuche einzuplanen.',
      chooseTitle: 'Die passende Nordlichttour wählen',
      choosing: 'Fototouren lohnen sich, wenn Sie Bilder wollen: Der Guide stellt Ihre Kamera ein und kennt die Belichtungszeiten. Bustouren decken die meiste Strecke ab und bieten bei wechselhaftem Wetter die beste Chance pro Euro. Schneeschuh- und Schneemobiltouren tauschen Beweglichkeit gegen einen besseren und stilleren Standort. Nördliche Ziele wie Saariselkä und Inari haben dunkleren Himmel als die Skiorte.',
      bring: 'Sie stehen stundenlang still im Freien, kleiden Sie sich also deutlich wärmer als für einen aktiven Tag: Overall, wenn der Anbieter einen stellt, Wollunterwäsche, zwei Paar Socken und Wärmekissen. Stativ und Ersatzakkus zählen mehr als eine teure Kamera, denn Kälte leert Akkus schnell. Weißes Taschenlampenlicht ausgeschaltet lassen, es zerstört allen die Nachtsicht.',
    },
    'winter-sports': {
      coversTitle: 'Ski und Schneesport in Lappland',
      covers: 'Sechs Fjälls in diesem Reiseführer haben Lifte: Ounasvaara über Rovaniemi, Levi, Ylläs, Ruka, Pyhä und Suomu. Zusammen decken sie alles ab, vom Anfängerhang in der Stadt bis zu den längsten Abfahrten Finnlands am Ylläs. Abseits der Lifte gehören Langlauf, Schneeschuhwandern im alten Wald, Fatbiken und Schlittschuhlaufen dazu.',
      whenToGo: 'Eingelagerter Schnee lässt Ruka im Oktober öffnen und bis in den Mai fahren, die längste Saison des Landes. Die meisten Gebiete laufen von November oder Dezember bis April. Der Hochwinter hat die Stimmung, aber sehr kurze Tage; März und April verbinden volle Schneedecke mit echtem Tageslicht, weshalb das Loipennetz dann am besten ist.',
      chooseTitle: 'Das passende Skigebiet wählen',
      choosing: 'Levi ist das größte Skigebiet, hat den kürzesten Flughafentransfer und das meiste Après-Ski. Ylläs hat die längsten Abfahrten und das größte Loipennetz bei deutlich weniger Betrieb. Ruka hat die längste Saison und Unterkünfte direkt an der Piste. Pyhä passt Familien und Buckelfahrern gleichermaßen, Ounasvaara eignet sich für den Abend nach einem Tag in Rovaniemi, Suomu ist die stille Variante.',
      bring: 'Verleih gibt es in jedem Gebiet und er lässt sich vor Ort leichter regeln als Touren. Nehmen Sie Skibrille und Gesichtsschutz mit: Wind auf offenem Fjäll richtet mehr aus, als die Temperaturanzeige vermuten lässt. Langläufer sollten vor der Wahl der Fjällseite den Spurbericht prüfen, denn die Pflege unterscheidet sich zwischen den Dörfern.',
    },
    wellness: {
      coversTitle: 'Sauna und arktisches Wohlbefinden',
      covers: 'Wohlbefinden heißt in Lappland Hitze und Kälte im Wechsel, nicht Behandlungsräume. Die traditionelle Rauchsauna in Kiilopää wird stundenlang geheizt und vor der Nutzung ausgelüftet, was einen weichen Aufguss ergibt, den ein Elektroofen nicht liefert, und danach geht es ins Eisloch. Beim arktischen Treiben stecken Sie in einem Überlebensanzug und lassen sich einfach treiben.',
      whenToGo: 'Beides läuft ganzjährig, ist dem Charakter nach aber Winter: Eisbaden braucht ein geschnittenes Loch im gefrorenen See, und Treiben funktioniert am besten, wenn Eis ringsum liegt. Rauchsaunen brauchen Stunden zum Heizen, sie laufen deshalb zu festen Zeiten und nicht auf Zuruf, und der Nachmittagstermin ist der, den man buchen sollte.',
      chooseTitle: 'Das passende Saunaerlebnis wählen',
      choosing: 'Die Rauchsauna ist die traditionelle Variante und die, um die sich ein Tag planen lässt. Eisbaden ist überall freiwillig, wo es angeboten wird, niemand schubst Sie hinein. Das Treiben passt zu allen, die kaltes Wasser ohne Schwimmen wollen, denn der Anzug hält trocken und warm genug für eine Weile.',
      bring: 'Badebekleidung und Handtuch mitbringen, die meisten Häuser verleihen beides, falls Sie es vergessen. In Finnland wird bei nach Geschlechtern getrennten Zeiten in der Regel ohne Badebekleidung sauniert und bei gemischten öffentlichen Zeiten mit, fragen Sie also vor Ort nach. Planen Sie danach Zeit zum richtigen Abkühlen ein, statt sofort ins nächste Programm zu hetzen.',
    },
    culture: {
      coversTitle: 'Samisches Erbe, Weihnachtsmann und die arktische Erzählung',
      covers: 'Durch diese Kategorie laufen zwei Stränge. Der eine ist die samische Kultur, am besten zu erleben in Siida in Inari, dem Samimuseum und Naturzentrum am Sitz des finnischen Sameparlaments, und in Samiland in Levi. Der andere ist die arktische Erzählung, die die Region über sich selbst pflegt: Weihnachtsmanndorf und SantaPark in Rovaniemi, Arktikum am Flussufer und die aus Eis gebauten Orte.',
      whenToGo: 'Die Museen sind ganzjährig geöffnet und nutzen einen schlechten Wettertag oder einen kurzen Winternachmittag am besten. Eishotels und Schneedörfer existieren nur bei Kälte, etwa von Dezember bis April. Goldwaschen in Tankavaara und die Amethystmine am Lampivaara laufen in beiden Saisons, im Winter fährt ein beheizter Schneezug zur Mine.',
      chooseTitle: 'Den passenden Kulturbesuch wählen',
      choosing: 'Wenn Sie gelebte Kultur statt einer Vorführung wollen, beginnen Sie mit Siida und einem Besuch bei arbeitenden Rentierhaltern in Inari, nicht mit einer Show. Mit Kindern sind Weihnachtsmanndorf und SantaPark genau dafür gebaut. Arktikum hat die stärkste Nordlichtausstellung des Landes und trägt einen halben Tag im Innenraum.',
      bring: 'Museen brauchen nur Zeit, und Siida verdient mindestens drei Stunden. In Eishotels und Schneedörfern liegt auch drinnen Frost, behalten Sie Ihre Außenschichten während des Besuchs an. In Tankavaara gehört alles Gewaschene Ihnen, und am Lampivaara dürfen Sie graben und einen Amethysten behalten.',
    },
    summer: {
      coversTitle: 'Lappland in den hellen Monaten',
      covers: 'Der Sommer macht aus derselben Landschaft Wander-, Paddel- und Radgebiet. Nationalparkrouten gibt es in Pallas-Yllästunturi, Urho Kekkonen, Oulanka und Pyhä-Luosto, von kurzen markierten Runden bis zum 82 Kilometer langen Karhunkierros. Auf dem Wasser warten Seefahrten und Kajaktouren unter der Mitternachtssonne in Inari, auf Rädern der Levi Bike Park. Golf unter einer Sonne, die nicht untergeht, ist die örtliche Kuriosität.',
      whenToGo: 'Juni bis August ist der Kern, zur Mittsommerzeit steht die Sonne so weit im Norden rund um die Uhr über dem Horizont. Ende Juli kommen Moltebeeren und die ersten Pilze. September und Oktober sind die Ruska-Wochen, wenn die Fjälls sich färben und die ersten Nordlichter zurückkehren, und die Wege sind fast leer.',
      chooseTitle: 'Die passende Sommerreise wählen',
      choosing: 'Entscheiden Sie, ob Sie eine Basis oder eine Route wollen. Tageswanderungen ab einem Dorf passen den meisten und brauchen keine Genehmigung; die langen Wege brauchen Planung, und die Wildnishütten daran sind kostenlos und werden nach Ankunft belegt. Paddeln und Rafting sind geführt, was die vernünftige Art ist, einen nördlichen Fluss zum ersten Mal kennenzulernen.',
      bring: 'Mücken sind zur Mittsommerzeit am dichtesten, Schutzmittel und Kopfnetz sind im Moor also keine Option, sondern Pflicht. Nehmen Sie eine ordentliche Schlafmaske mit, falls Dauerlicht Sie stört. Schuhe, die nasse Bohlenwege verzeihen, zählen mehr als schwere Bergsohlen, und jede markierte Route wird unter dem Jedermannsrecht begangen, eine Genehmigung braucht es nicht.',
    },
    food: {
      coversTitle: 'Essen im Norden',
      covers: 'Essen ist hier an Feuer und Jahreszeit gebunden. Eine Kota oder Kammi ist eine kegelförmige Hütte mit offener Feuerstelle in der Mitte, und das Essen entsteht vor Ihren Augen: Rentier, Fisch, Fladenbrot, Moltebeeren. Abseits des Tisches gibt es das Sammeln von Wildbeeren und Pilzen, und in Kukkolankoski wird das Felchen noch mit dem traditionellen Kescher gefangen.',
      whenToGo: 'Lagerfeueressen laufen ganzjährig und sind in der dunklen Jahreshälfte am stärksten, wenn das Feuer das einzige Licht im Raum ist. Sammeln ist eine Sache des Spätsommers und Herbstes: Beeren ab Juli, Pilze ab August. Die Felchensaison in Kukkolankoski gehört dem Sommer und folgt dem Aufstieg im Fluss.',
      chooseTitle: 'Das passende Kulinarikerlebnis wählen',
      choosing: 'Ein Kota-Essen ist meist ein festes Menü mit einem Guide, der erklärt, was Sie essen und woher es kommt, es funktioniert also als Abend und nicht als Mahlzeit. Sammeltouren führt jemand, der sagen kann, was sicher ist, und genau darum geht es. Beides passt zu gemischten Gruppen und verlangt keine Kondition.',
      bring: 'Sagen Sie Allergien und Ernährungsweisen bei der Buchung an, denn dies sind über dem Feuer gekochte feste Menüs und keine Karte. Kleiden Sie sich fürs Stillsitzen im Freien: In einer Kota ist es am Feuer warm und an der Wand kalt. Das Jedermannsrecht erlaubt das Sammeln von Wildbeeren und Pilzen überall dort, wo Sie sich rechtmäßig aufhalten dürfen.',
    },
    fishing: {
      coversTitle: 'Angeln in drei Arten von Wasser',
      covers: 'In dieser Ecke der Arktis treffen drei verschiedene Fischereien aufeinander: Eisangeln auf gefrorenen Seen, lizenzpflichtige Sommerlachsflüsse wie der Tornionjoki und Königskrabbensafaris über die norwegische Grenze ab Kirkenes. Sie haben unterschiedliche Saisons, Regeln und Genehmigungen, und die Seite führt eine eigene Angelseite mit den aktuellen Regeln und offiziellen Lizenzlinks.',
      whenToGo: 'Eisangeln läuft durch die gefrorenen Monate, etwa Dezember bis April, und ist am kurzfristigsten zu organisieren. Die Lachssaison gehört dem Sommer und ist streng reguliert, die Termine werden jährlich festgelegt. Königskrabbensafaris laufen in beiden Saisons: im Winter mit Schneemobil oder Bus über das Eis, im Sommer mit dem RIB-Boot.',
      chooseTitle: 'Die passende Angeltour wählen',
      choosing: 'Geführtes Eisangeln ist die bequeme Variante: Der Guide bohrt die Löcher, bringt die Ausrüstung und verpflegt Sie meist am Feuer. Lachsfischen am Tornionjoki ist eine ernste Sache und braucht vor dem ersten Wurf die richtige Lizenz. Königskrabbentouren sind ebenso Boots- oder Schneemobilausflug wie Fischerei und enden mit dem Fang auf dem Teller.',
      bring: 'Die Regeln ändern sich von Jahr zu Jahr und je nach Gewässer, prüfen Sie die offiziellen Lizenzbedingungen vor dem Angeln und nicht danach. Geführte Touren enthalten die Ausrüstung; eigenständiges Eisangeln braucht eigene Rute, Eisbohrer und ein Gefühl für die Eisdicke. Fangen und Zurücksetzen ist an vielen Flüssen hier Standard und hält die Bestände am Leben.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'Worin sich die zehn Ziele unterscheiden',
      lead: 'Lappland ist nicht ein Ort mit einer Jahreszeit. Rovaniemi hat den Flughafen, den Nachtzug und die größte Tourauswahl. Levi und Ruka sind Skidörfer, die man zu Fuß durchquert. Ylläs und Saariselkä tauschen Nachtleben gegen dunklen Himmel und Nationalparkstille. In Inari begegnet man samischer Kultur, statt sie vorgeführt zu bekommen, und Posio, Tornio und Kemijärvi sind die ruhigen Ziele.',
      note: 'Entfernungen sind hier oben real: Zwei Orte, die auf der Karte nah beieinander liegen, können zwei Fahrstunden auseinander sein. Wählen Sie für eine kurze Reise eine Basis und nehmen Sie eine zweite nur bei einer ganzen Woche dazu. Jede Seite unten nennt die Anbieter vor Ort, was in welcher Saison läuft und wie Sie hinkommen.',
    },
    catList: {
      leadTitle: 'Nach Aktivität statt nach Ort wählen',
      lead: 'Wenn Sie schon wissen, was Sie tun wollen, beginnen Sie hier und nicht mit der Karte. Jede Kategorieseite erklärt, was die Aktivität in Lappland konkret bedeutet, in welchen Monaten sie läuft, wie sich die Formate unterscheiden und was Sie anziehen oder mitbringen sollten. Die meisten Kategorien gibt es an mehreren Zielen, deshalb steht die Wahl der Aktivität meist vor der Wahl des Ortes.',
      note: 'Die Saison ist die harte Grenze. Alles auf Schnee und Eis braucht die kalte Jahreshälfte, ungefähr November bis April. Wandern, Paddeln und die Mitternachtssonne gehören zu Juni bis August. Nordlichter brauchen Dunkelheit, ihre Saison läuft etwa von September bis April. Bärenbeobachtung ist das Gegenstück zum Schlittenfahren, und um beides lohnt es sich, eine Reise herum zu planen.',
    },
  },
};

export default guides;
