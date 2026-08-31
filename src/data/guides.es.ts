// Guía de temporada y planificación en español para las páginas de destino y categoría.
// Redactada en español, no traducida automáticamente. Base factual:
// src/data/destinations.ts, categories.ts y activities.ts — sin precios,
// cifras de visitantes ni temperaturas inventadas. Tratamiento: usted, como en copy.es.ts.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi temporada a temporada',
      seasonWinter: 'De noviembre a marzo el río se hiela, la nieve cuaja y casi todo el catálogo abre a la vez: safaris en motonieve, trineos de huskies y de renos, pesca en hielo y salidas a cazar auroras. En pleno invierno el sol apenas asoma sobre el horizonte, y precisamente por eso las luces se ven tan bien aquí. Navidad y Año Nuevo son las dos semanas más llenas del año en la ciudad.',
      seasonSummer: 'De junio a agosto la nieve deja paso a una luz que en realidad nunca termina. Los criaderos de huskies siguen abiertos para visitas de verano y encuentros con cachorros, el Arktikum y el SantaPark funcionan todo el año, y la orilla del Kemijoki se convierte en el centro de la ciudad. Septiembre y octubre traen los colores del ruska a Ounasvaara y las primeras auroras de la temporada, con mucha menos gente en los senderos.',
      planTitle: 'Planificar un viaje a Rovaniemi',
      planGetting: 'Rovaniemi tiene las mejores conexiones de Laponia: el vuelo directo desde Helsinki dura alrededor de una hora y veinte minutos, y el tren nocturno llega por la mañana. La mayoría de los operadores de huskies, renos y auroras están a menos de veinte minutos en coche, y las excursiones suelen incluir recogida en el hotel, así que aquí el coche es opcional.',
      planStay: 'Dos o tres noches bastan para la Aldea de Papá Noel, un safari grande y una noche de auroras sin agobios. Reserve con antelación las salidas de huskies y motonieve de diciembre y del pico de febrero y marzo. Cruzar la línea del Círculo Polar no cuesta nada, pero el certificado sí: es un recuerdo de unos pocos euros que se vende en la oficina de turismo del Círculo Polar, en la torre del Círculo Polar o en la tienda de la Casa de la Navidad, no en la oficina de correos. Ounasvaara queda lo bastante cerca para esquiar por la tarde.',
    },
    levi: {
      seasonsTitle: 'Levi temporada a temporada',
      seasonWinter: 'La temporada de esquí es lo principal: 44 pistas y 26 remontes, dos de ellos telecabinas, desde la oscuridad de noviembre hasta los largos días claros de abril. La Copa del Mundo alpina abre aquí su temporada de eslalon cada noviembre. Las salidas de fotografía de auroras, los safaris de huskies y las rutas en motonieve hasta una granja de renos llenan las horas en que los remontes están cerrados.',
      seasonSummer: 'En verano la telecabina sube al Levi Bike Park en lugar de a los esquiadores, y la fjeld se abre al senderismo. El golf bajo el sol de medianoche es la rareza local: salida cerca de la medianoche y vuelta entera a plena luz. Los 230 kilómetros de pistas de esquí de fondo del invierno sirven, sin nieve, como rutas de marcha y carrera.',
      planTitle: 'Planificar un viaje a Levi',
      planGetting: 'Desde el aeropuerto de Kittilä llegará en unos quince minutos, el traslado más corto de todos los destinos de esquí lapones. El pueblo está al pie del Levitunturi y se recorre a pie de punta a punta, así que la mayoría prescinde del coche de alquiler salvo que planee excursiones a Ylläs o hacia Kittilä.',
      planStay: 'Levi merece más que un fin de semana: de tres a cinco noches dan para esquiar, hacer un safari y aún reservar una velada en el Hullu Poro. Las camas a pie de pista y las salidas de huskies mejor valoradas se agotan primero en la semana de Navidad y en las vacaciones escolares finlandesas de marzo. Los forfaits y el alquiler de material, en cambio, se resuelven más fácilmente al llegar que las excursiones.',
    },
    yllas: {
      seasonsTitle: 'Ylläs temporada a temporada',
      seasonWinter: 'Dos pueblos comparten una fjeld y 62 pistas entre ambos, con descensos de más de tres kilómetros, los más largos de Finlandia. Alrededor se extienden unos 300 kilómetros de pista de fondo mantenida que llegan hasta el parque nacional de Pallas-Yllästunturi. El cielo aquí es oscuro y despejado, y por eso las salidas de auroras parten de la propia fjeld y no de un pueblo iluminado.',
      seasonSummer: 'Cuando la pista se derrite, el mismo parque nacional se convierte en terreno de senderismo: rutas señalizadas por fjeld abierta, viejo bosque de abetos y pasarelas de madera sobre la turbera. El final del verano es temporada de bayas y setas, y en otoño el ruska tiñe las laderas antes de la primera nieve. El verano en Ylläs es silencioso como nunca lo son las semanas de esquí.',
      planTitle: 'Planificar un viaje a Ylläs',
      planGetting: 'El aeropuerto de Kittilä queda a unos 35 minutos en coche. Los dos pueblos están en lados opuestos de la fjeld y la carretera entre ellos es larga, así que decida el lado antes de reservar: Äkäslompolo es el más tranquilo, en Ylläsjärvi están los bares. Un coche facilita mucho ir y venir.',
      planStay: 'Elija Ylläs en lugar de Levi si busca cielo oscuro, silencio de parque nacional y jornadas largas de esquí en vez de vida nocturna. Cuente con tres noches como mínimo; solo la red de pistas de fondo justifica más. En marzo hay nieve y luz de día de verdad al mismo tiempo, y ese es el mejor momento para las jornadas largas.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä temporada a temporada',
      seasonWinter: 'Esta es la estación de esquí más septentrional de Finlandia, y la latitud se nota: las opciones de aurora van de septiembre a abril, y los días de pleno invierno son cortos y azules. Los safaris en motonieve salen directos a la naturaleza, y la sauna de humo de Kiilopää seguida de un agujero en el hielo es aquí una costumbre local, no un añadido turístico.',
      seasonSummer: 'El parque nacional Urho Kekkonen empieza en el borde del pueblo, y sus senderos señalizados y sus refugios abiertos son de uso gratuito. Verano significa marchas largas bajo un sol que no se pone, lavar oro en Tankavaara, donde cada pepita que encuentre es suya, y safaris de cangrejo real cruzando la frontera hasta Kirkenes.',
      planTitle: 'Planificar un viaje a Saariselkä',
      planGetting: 'Vuele a Ivalo y conduzca unos treinta minutos. Saariselkä es lo bastante compacto para recorrerlo a pie, pero los accesos al parque, Tankavaara y Kiilopää están dispersos: alquile coche o elija excursiones con traslado incluido. Inari queda lo bastante cerca para una jornada.',
      planStay: 'Venga aquí si quiere naturaleza primero y servicios después. Tres noches dan para una marcha larga o un safari, una noche de auroras y la sauna de humo. Las jornadas a Noruega son largas, así que reserve un día entero para el safari de cangrejo real. Los refugios abiertos funcionan por orden de llegada y no se pueden reservar.',
    },
    inari: {
      seasonsTitle: 'Inari temporada a temporada',
      seasonWinter: 'El invierno aquí es silencioso y oscuro, lo que conviene tanto a las auroras como al motivo por el que casi todos vienen: la cultura sami. Siida, museo sami y centro de naturaleza, llena un día entero bajo techo, y las visitas a criadores de renos muestran trabajo real y no una función montada. El lago se hiela por completo y la naturaleza alrededor del pueblo se vacía.',
      seasonSummer: 'A partir de junio el lago vuelve a abrirse: los barcos pasan junto a Ukonsaari, la isla sagrada, y el kayak bajo el sol de medianoche estira una tarde normal hasta convertirla en noche entera. A la iglesia de Pielpajärvi se llega a pie por un viejo pinar, y a finales de julio maduran los camemoros en las turberas del sendero.',
      planTitle: 'Planificar un viaje a Inari',
      planGetting: 'El aeropuerto de Ivalo está a unos cuarenta minutos por carretera. El pueblo en sí es pequeño y se recorre a pie, pero todo lo demás se reparte a lo largo del lago y de la carretera principal hacia el norte, así que el coche ayuda. Muchos combinan Inari con Saariselkä en lugar de tomarlo como única base.',
      planStay: 'Dedique al menos media jornada a Siida, incluida el ala en lengua sami. Los paseos en barco por el lago Inari solo funcionan de junio a septiembre, así que aquí verano e invierno son dos viajes distintos y no dos variantes del mismo. Es un destino para la cultura, la fotografía y el silencio, no para los servicios de una estación.',
    },
    ruka: {
      seasonsTitle: 'Ruka temporada a temporada',
      seasonWinter: 'La nieve almacenada permite a Ruka abrir ya en octubre y esquiar hasta mayo, la temporada más larga de Finlandia, en 41 pistas con 22 remontes. El pueblo está justo encima de las laderas, así que el trayecto de la cama al remonte es corto. Fuera de pista hay safaris en motonieve, salidas con huskies y escalada en hielo en las cascadas heladas del cañón de Korouoma.',
      seasonSummer: 'El verano da la vuelta al destino por completo. La observación de osos pardos desde puestos funciona durante los meses de luz, el río Kitka acoge descensos en balsa desde la primavera hasta el otoño, y el Karhunkierros, 82 kilómetros por el parque nacional de Oulanka, es una de las rutas más conocidas del país. El bike park atiende a quien quiere el descenso sin nieve.',
      planTitle: 'Planificar un viaje a Ruka',
      planGetting: 'El aeropuerto de Kuusamo queda a unos veinticinco minutos. Ruka está en Kuusamo, justo al sur de la frontera oficial de Laponia, con la misma nieve y el mismo invierno del norte. Conviene tener coche para Oulanka, Korouoma y los puestos de osos, todos fuera del pueblo.',
      planStay: 'Los esquiadores pueden alojarse a pie de pista y no arrancar el motor ni una vez; quienes van a caminar o a ver fauna deben contar con carretera. Los puestos de osos se llenan con meses de antelación, así que conviértalos en el punto fijo de un viaje de verano. El Karhunkierros tiene un circuito de 12 kilómetros para quien quiere el paisaje sin la versión de varios días.',
    },
    posio: {
      seasonsTitle: 'Posio temporada a temporada',
      seasonWinter: 'Posio es conocido por el pleno invierno. La helada dobla los abetos del parque nacional de Riisitunturi hasta convertirlos en esculturas blancas y pesadas, en su mejor momento de enero a marzo, y el cañón de Korouoma se llena de cascadas heladas que cuelgan hasta cuarenta metros por la pared de roca. Ambos son jornadas a pie, y ambos premian salir temprano mientras hay luz.',
      seasonSummer: 'Sin nieve, ese mismo cañón se convierte en una ruta de senderismo por un valle de falla empinado y boscoso, y Riisitunturi se abre como una caminata de fjeld más sencilla, con vistas largas sobre los lagos. Pentik, la fábrica de cerámica más septentrional del mundo, mantiene sus galerías y su tienda de fábrica abiertas todo el año y llena las horas cuando el tiempo cambia.',
      planTitle: 'Planificar un viaje a Posio',
      planGetting: 'Necesita coche. Posio está a unas dos horas de Rovaniemi y a una de Ruka, y encaja de forma natural como excursión de un día desde cualquiera de los dos más que como base propia. Aquí no hay una red de traslados como la de las estaciones.',
      planStay: 'Tome Posio como el día tranquilo dentro de un viaje lapón más amplio: un parque nacional, un cañón y la fábrica de cerámica lo llenan con holgura. Los fotógrafos deberían venir entre enero y marzo por los árboles cargados de nieve. Los senderos están señalizados pero los servicios escasean, así que lleve comida y bebida.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda y Kemi temporada a temporada',
      seasonWinter: 'Aquí el invierno construye en vez de limitarse a cubrir. El parque de nieve del recinto SnowCastle de Kemi se levanta desde cero cada invierno, y el rompehielos Sampo sale al golfo de Botnia helado y deja a sus pasajeros flotar con traje de supervivencia entre las placas de hielo. Ninguno de los dos existe en verano, lo que convierte a este destino en el único de Laponia cuyas atracciones principales son estrictamente estacionales.',
      seasonSummer: 'El verano es del río. El Tornionjoki es el mayor río salmonero de curso libre de Europa, y en los rápidos de Kukkolankoski la pesca tradicional con salabre sigue practicándose cada verano. El Green Zone Golf le hace cruzar la frontera de un lado a otro: cuatro cambios de país y de huso horario en una vuelta, algo que solo funciona con el suelo despejado.',
      planTitle: 'Planificar un viaje a Tornio',
      planGetting: 'El aeropuerto de Kemi está a unos diez minutos de la propia Kemi, y Tornio a unos veinticinco minutos, así que las dos ciudades funcionan como un solo viaje. Tornio y Haparanda son una ciudad en dos países: la frontera pasa por el medio de la calle comercial y se cruza a pie.',
      planStay: 'Es el destino lapón más fácil de combinar con un día de compras, con IKEA Haparanda justo al lado del paso fronterizo y precios que merece la pena comparar en ambos lados. Una o dos noches bastan para el rompehielos y el SnowCastle en invierno, o para el río y el campo de golf en verano.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto temporada a temporada',
      seasonWinter: 'Dos pueblos de fjeld ocupan los extremos de una vieja cadena, con el parque nacional en medio. Pyhä tiene el esquí más exigente, incluida Huttu-Ukko, una pista de baches con pasado de Copa del Mundo, además de terreno suave y colas cortas para las familias. En Luosto, un tren de nieve con calefacción sube a los visitantes al Lampivaara y a su mina de amatista durante los meses oscuros.',
      seasonSummer: 'Sin nieve, el parque es un destino para caminar: pasarelas por el bosque viejo e Isokuru, la garganta más profunda de Finlandia con unos 220 metros, además de vistas abiertas a lo largo de la cadena de fjelds más antigua de Laponia. La mina de amatista sigue abierta y es la única mina activa de Europa donde los visitantes pueden excavar y quedarse con una piedra.',
      planTitle: 'Planificar un viaje a Pyhä-Luosto',
      planGetting: 'El aeropuerto más cercano es Rovaniemi, a hora y media por carretera. Pyhä y Luosto son pueblos independientes separados por una media hora, unidos por el parque y no por una calle: decida dónde se aloja antes de reservar.',
      planStay: 'Las familias suelen elegir Pyhä por el terreno de remontes y las colas cortas; quienes caminan y quienes excavan amatistas se instalan en Luosto. Dos o tres noches cubren un día de pistas, la mina y una caminata más larga hacia el parque. Metsähallitus mantiene los senderos, y las rutas señalizadas arrancan directamente en ambos pueblos.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi temporada a temporada',
      seasonWinter: 'La ciudad se asienta sobre su propio lago, que se hiela y se convierte en zona de pesca a poca distancia a pie del centro. La fjeld de esquí Suomu queda a unos cuarenta minutos, los operadores de huskies ofrecen safaris que conduce usted mismo en lugar de trayectos como pasajero, y en la orilla de Uitonniemi la pequeña aldea de Papá Noel combina un pequeño hotel de troncos con visitas a Papá Noel y salidas de auroras.',
      seasonSummer: 'En los meses de luz son las esculturas las que invitan a bajar el ritmo: Kemijärvi celebra desde 1985 una semana internacional de talla en madera, y las grandes piezas permanecen en las calles todo el año. El lago se abre a los barcos y a la pesca, y la tranquila carretera del este hacia el norte convierte a la ciudad en una primera parada natural.',
      planTitle: 'Planificar un viaje a Kemijärvi',
      planGetting: 'Aquí termina el Santa Claus Express: una salida al día continúa más allá de Rovaniemi, de modo que puede dormir en el tren desde Helsinki y bajarse junto al lago. En coche son unos sesenta minutos desde Rovaniemi. Hasta Pyhä hay 50 kilómetros.',
      planStay: 'Kemijärvi encaja con quien viaja en tren y con quien quiere Laponia sin la aglomeración de las estaciones. Funciona como base tranquila para la Laponia oriental, con Pyhä y Suomu a poca distancia en coche. Una o dos noches suelen bastar, salvo que la use como puerta de entrada a la ruta oriental, más tranquila.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Qué significa aquí la aventura ártica',
      covers: 'En Laponia la aventura es sobre todo motorizada o ligada al hielo: safaris guiados en motonieve, de un par de horas a un día entero de naturaleza, karting sobre un lago helado, escalada en las cascadas heladas del cañón de Korouoma, descenso de aguas bravas por el río Kitka y una noche en un hotel de nieve. El crucero en rompehielos desde Kemi también entra aquí.',
      whenToGo: 'La mayor parte funciona de noviembre a marzo, cuando los lagos aguantan el peso y la capa de nieve es lo bastante profunda para que un safari salga de la red de carreteras. El rafting es la excepción y va de la primavera al otoño. Los hoteles de nieve y todo lo construido en hielo se derriten, así que solo existen durante la mitad invernal del año.',
      chooseTitle: 'Elegir una excursión de aventura',
      choosing: 'La decisión principal es la duración. Las salidas cortas en grupo encajan en media jornada y con grupos mixtos; las expediciones de un día cubren mucho más terreno y suelen exigir carnet de conducir para la motonieve. El karting sobre hielo y las combinaciones familiares admiten acompañantes demasiado jóvenes para conducir. La escalada en hielo es guiada y el material está incluido, pero le exige más que un safari.',
      bring: 'Para las actividades en motonieve y sobre hielo los operadores facilitan mono térmico, botas, guantes y casco, así que lleve capas y no volumen: ropa interior de lana o sintética, una capa intermedia caliente y un gorro que quepa bajo el casco. Lleve su carnet si piensa conducir, y guarde el teléfono en un bolsillo que se mantenga caliente.',
    },
    animals: {
      coversTitle: 'Encontrarse con los animales del Ártico',
      covers: 'Aquí entran los trineos de huskies y las visitas a criaderos, las granjas de renos y los paseos en trineo, la observación de osos pardos salvajes desde puestos en los bosques al este de Kuusamo, y el parque de fauna de Ranua, donde viven osos polares en el zoo más septentrional del mundo. Las visitas a pastores de renos samis en Inari y Samiland en Levi quedan en la frontera con la categoría de cultura.',
      whenToGo: 'El trineo necesita nieve, así que las salidas con huskies y renos van más o menos de noviembre a abril. Los criaderos siguen abiertos en verano para visitas y encuentros con cachorros, solo que sin trineo. Con los osos ocurre lo contrario: los puestos funcionan durante los meses de luz, de la primavera al principio del otoño, cuando los osos están activos y las noches son lo bastante claras.',
      chooseTitle: 'Elegir una experiencia con animales',
      choosing: 'Decida primero si quiere conducir o ir de pasajero. En los safaris que conduce usted va de pie sobre los patines con su propio tiro, normalmente dos personas alternándose; los paseos como pasajero y las visitas a granjas encajan con niños pequeños y con quien prefiere tiempo con los perros antes que kilómetros. El trineo de renos es lento por naturaleza, y esa es justamente la gracia.',
      bring: 'Las granjas y los criaderos facilitan los monos para el trineo. Lleve guantes con los que pueda trabajar, porque manejará tiros y cámara con frío. Un puesto de osos es esperar dentro de un refugio fijo, así que lleve más abrigo del que la caminata de acceso sugiere, y algo silencioso con lo que entretenerse. El flash está prohibido en todos los puestos.',
    },
    'northern-lights': {
      coversTitle: 'Cómo funciona la caza de auroras en Laponia',
      covers: 'Aquí las salidas de auroras son cacerías, no miradores: el guía sigue la previsión de nubes y el índice de actividad y conduce hacia el claro del cielo que mejor pinta esa noche. Los formatos varían más que los lugares: rutas en autobús, veladas de fotografía, marchas con raquetas y salidas en motonieve que le llevan a un lago helado, lejos de cualquier luz.',
      whenToGo: 'La temporada va aproximadamente de septiembre a abril y exige tres cosas a la vez: oscuridad, cielo despejado y actividad solar. El otoño ofrece agua abierta para los reflejos antes de que los lagos se hielen; el pleno invierno da las horas oscuras más largas. Una sola noche no garantiza nada, y ese es el mejor argumento para reservar dos o tres intentos.',
      chooseTitle: 'Elegir una salida de auroras',
      choosing: 'Las salidas de fotografía compensan si quiere imágenes: el guía configura su cámara y conoce los tiempos de exposición. Las rutas en autobús cubren más terreno y dan la mejor probabilidad por euro cuando el tiempo es irregular. Las raquetas y la motonieve cambian algo de movilidad por un emplazamiento mejor y más silencioso. Destinos del norte como Saariselkä e Inari tienen un cielo más oscuro que las estaciones.',
      bring: 'Estará de pie al aire libre durante horas, así que abríguese mucho más que para un día activo: mono si el operador lo facilita, ropa interior de lana, dos pares de calcetines y calentadores químicos. El trípode y las baterías de repuesto importan más que una cámara cara; el frío vacía las baterías rápido. Mantenga apagada la linterna blanca, arruina la visión nocturna de todos.',
    },
    'winter-sports': {
      coversTitle: 'Esquí y deportes de nieve en Laponia',
      covers: 'Seis fjelds de esta guía tienen remontes: Ounasvaara sobre Rovaniemi, Levi, Ylläs, Ruka, Pyhä y Suomu. Entre todos cubren desde una pista de iniciación en la ciudad hasta los descensos más largos de Finlandia en Ylläs. Fuera de los remontes, la categoría incluye esquí de fondo, raquetas por bosque viejo, fatbike y patinaje.',
      whenToGo: 'La nieve almacenada permite a Ruka abrir en octubre y esquiar hasta mayo, la temporada más larga del país. La mayoría de las estaciones funcionan de noviembre o diciembre a abril. El pleno invierno tiene el ambiente pero días muy cortos; marzo y abril combinan capa completa de nieve con luz de día de verdad, y por eso la red de fondo está entonces en su mejor momento.',
      chooseTitle: 'Elegir estación',
      choosing: 'Levi es la mayor, tiene el traslado más corto desde el aeropuerto y el ambiente de après-ski más animado. Ylläs tiene los descensos más largos y la mayor red de fondo con mucho menos bullicio. Ruka tiene la temporada más larga y alojamiento a pie de pista. Pyhä sirve tanto a familias como a esquiadores de baches, Ounasvaara para una tarde tras un día en Rovaniemi, y Suomu es la opción tranquila.',
      bring: 'Hay alquiler en todas las estaciones y se resuelve más fácilmente al llegar que las excursiones. Lleve gafas de ventisca y algo que le cubra la cara: el viento en fjeld abierta hace más daño de lo que sugiere el termómetro. Quien vaya a esquiar de fondo debería consultar el parte de pistas antes de elegir un lado de la fjeld, porque el pisado varía entre pueblos.',
    },
    wellness: {
      coversTitle: 'Sauna y bienestar ártico',
      covers: 'Aquí el bienestar significa calor y frío en secuencia, no salas de tratamiento. La sauna de humo tradicional de Kiilopää se calienta durante horas y se ventila antes de usarse, lo que da un calor suave que una estufa eléctrica no ofrece, y termina con un agujero en el hielo. La flotación ártica le mete en un traje de supervivencia y le deja a la deriva.',
      whenToGo: 'Ambas funcionan todo el año, pero por carácter son experiencias de invierno: el baño helado necesita un agujero abierto en un lago congelado, y la flotación funciona mejor cuando hay hielo alrededor. Una sauna de humo tarda horas en calentarse, así que va por turnos fijos y no bajo demanda, y el turno de la tarde es el que conviene reservar.',
      chooseTitle: 'Elegir una experiencia de sauna',
      choosing: 'La sauna de humo es la versión tradicional y aquella en torno a la que merece la pena organizar un día. El baño helado es voluntario en todos los sitios que lo ofrecen, y nadie le empujará. La flotación encaja con quien quiere el agua fría sin nadar, porque el traje le mantiene seco y lo bastante caliente para quedarse un rato.',
      bring: 'Lleve bañador y toalla; la mayoría de los sitios alquilan ambos si se le olvidan. En Finlandia se suele entrar sin bañador en los turnos separados por sexo y con él en los turnos públicos mixtos, así que pregunte al llegar. Reserve tiempo para enfriarse bien en lugar de encadenar directamente con la siguiente actividad.',
    },
    culture: {
      coversTitle: 'Herencia sami, Papá Noel y el relato ártico',
      covers: 'Por esta categoría corren dos hilos. Uno es la cultura sami, que se conoce mejor en Siida, en Inari, museo sami y centro de naturaleza en la sede del Parlamento Sami de Finlandia, y en Samiland, en Levi. El otro es el relato ártico que la región cuenta sobre sí misma: la Aldea de Papá Noel y el SantaPark en Rovaniemi, el Arktikum junto al río y los recintos construidos en hielo.',
      whenToGo: 'Los museos abren todo el año y aprovechan mejor que nada un día de mal tiempo o una tarde corta de invierno. Los hoteles de hielo y las aldeas de nieve solo existen con frío, aproximadamente de diciembre a abril. El lavado de oro en Tankavaara y la mina de amatista del Lampivaara funcionan en ambas temporadas, con un tren de nieve con calefacción hasta la mina en invierno.',
      chooseTitle: 'Elegir una visita cultural',
      choosing: 'Si quiere cultura viva y no una función, empiece por Siida y por una visita a pastores de renos en activo en Inari, no por un espectáculo. Si viaja con niños, la Aldea de Papá Noel y el SantaPark están hechos justamente para ellos. El Arktikum tiene la exposición sobre auroras más sólida del país y aguanta media jornada bajo techo.',
      bring: 'Los museos solo piden tiempo, y Siida merece al menos tres horas. En los hoteles de hielo y las aldeas de nieve también hay temperaturas bajo cero dentro, así que mantenga las capas de abrigo durante la visita. En Tankavaara todo lo que lave es suyo, y en el Lampivaara puede excavar y quedarse con una amatista.',
    },
    summer: {
      coversTitle: 'Laponia en los meses de luz',
      covers: 'El verano convierte el mismo paisaje en terreno de senderismo, remo y bicicleta. Hay rutas de parque nacional en Pallas-Yllästunturi, Urho Kekkonen, Oulanka y Pyhä-Luosto, desde circuitos cortos señalizados hasta los 82 kilómetros del Karhunkierros. En el agua, cruceros por el lago y kayak bajo el sol de medianoche en Inari; sobre ruedas, el Levi Bike Park. El golf bajo un sol que no se pone es la rareza local.',
      whenToGo: 'De junio a agosto es el núcleo, y en el solsticio el sol se mantiene sobre el horizonte las veinticuatro horas a esta latitud. A finales de julio llegan los camemoros y las primeras setas. Septiembre y octubre son las semanas del ruska, cuando las fjelds cambian de color y vuelven las primeras auroras, con los senderos casi vacíos.',
      chooseTitle: 'Elegir un viaje de verano',
      choosing: 'Decida si quiere una base o una ruta. Las caminatas de un día desde un pueblo encajan con la mayoría y no requieren permiso; las rutas largas exigen planificación, y los refugios que las jalonan son gratuitos y por orden de llegada. El kayak y el rafting son guiados, que es la forma sensata de conocer un río del norte por primera vez.',
      bring: 'Los mosquitos alcanzan su punto máximo a mediados de verano, así que el repelente y la mosquitera de cabeza no son opcionales en la turbera. Lleve un buen antifaz si la luz continua le molesta. Un calzado que aguante pasarelas mojadas importa más que unas suelas pesadas de montaña, y toda ruta señalizada se recorre bajo el derecho de acceso a la naturaleza, así que no hace falta permiso.',
    },
    food: {
      coversTitle: 'Comer en el norte',
      covers: 'Aquí la comida está ligada al fuego y a la estación. Una kota o kammi es una cabaña cónica con un hogar abierto en el centro, y la comida se prepara delante de usted: reno, pescado, pan plano, camemoros. Fuera de la mesa está la recolección de bayas y setas silvestres, y en Kukkolankoski el coregono se sigue pescando con salabre tradicional.',
      whenToGo: 'Las cenas al fuego funcionan todo el año y dan lo mejor de sí en la mitad oscura del año, cuando el fuego es la única luz de la sala. La recolección pertenece al final del verano y al otoño: bayas desde julio, setas desde agosto. La temporada del coregono en Kukkolankoski es de verano y sigue la subida del pez por el río.',
      chooseTitle: 'Elegir una experiencia gastronómica',
      choosing: 'Una cena en kota suele ser un menú fijo con un guía que explica qué está comiendo y de dónde viene, así que funciona como una velada más que como una comida. Las salidas de recolección las dirige alguien capaz de decir qué es seguro, y ese es todo el sentido. Ambas encajan con grupos mixtos y no exigen forma física.',
      bring: 'Indique alergias y dietas al reservar, porque son menús fijos cocinados al fuego y no una carta. Vístase para estar sentado al aire libre: en una kota hace calor junto al hogar y frío contra la pared. El derecho de acceso a la naturaleza permite recoger bayas y setas silvestres allí donde pueda transitar legalmente.',
    },
    fishing: {
      coversTitle: 'Pescar en tres clases de agua',
      covers: 'En este rincón del Ártico se cruzan tres pesquerías distintas: la pesca en hielo sobre lagos helados, los ríos salmoneros de verano con licencia como el Tornionjoki, y los safaris de cangrejo real al otro lado de la frontera noruega, desde Kirkenes. Tienen temporadas, normas y permisos diferentes, y el sitio mantiene una página de pesca propia con las normas vigentes y los enlaces oficiales de permisos.',
      whenToGo: 'La pesca en hielo abarca los meses helados, aproximadamente de diciembre a abril, y es la más fácil de organizar con poca antelación. La temporada del salmón es de verano y está estrictamente regulada, con fechas fijadas año a año. Los safaris de cangrejo real funcionan en ambas temporadas: en motonieve o autobús sobre el hielo en invierno, en lancha neumática en verano.',
      chooseTitle: 'Elegir una salida de pesca',
      choosing: 'La pesca en hielo guiada es la opción cómoda: el guía perfora los agujeros, lleva el material y normalmente da de comer junto al fuego. Pescar salmón en el Tornionjoki es un asunto serio y exige el permiso correcto antes del primer lance. Las salidas de cangrejo real son tanto excursión en barco o motonieve como pesca, y acaban con la captura en el plato.',
      bring: 'Las normas cambian de un año a otro y varían según el agua, así que compruebe las condiciones oficiales del permiso antes de pescar, no después. Las salidas guiadas incluyen el material; pescar en hielo por su cuenta exige caña propia, barrena y criterio sobre el grosor del hielo. La captura y suelta es lo habitual en muchos ríos de aquí, y está para mantener vivas las poblaciones.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'En qué se diferencian los diez destinos',
      lead: 'Laponia no es un solo lugar con una sola estación. Rovaniemi tiene el aeropuerto, el tren nocturno y la oferta de excursiones más amplia. Levi y Ruka son pueblos de esquí que se recorren a pie de punta a punta. Ylläs y Saariselkä cambian la vida nocturna por cielo oscuro y silencio de parque nacional. En Inari la cultura sami se encuentra en lugar de representarse, y Posio, Tornio y Kemijärvi son los destinos tranquilos.',
      note: 'Aquí arriba las distancias son reales: dos destinos que parecen cercanos en el mapa pueden estar a dos horas en coche. Para un viaje corto elija una sola base y añada una segunda solo si dispone de una semana. Cada página de abajo enumera los operadores que trabajan en ese destino, qué funciona en cada temporada y cómo llegar.',
    },
    catList: {
      leadTitle: 'Elegir por actividad en lugar de por lugar',
      lead: 'Si ya sabe qué quiere hacer, empiece aquí en vez de por el mapa. Cada página de categoría explica qué implica realmente esa actividad en Laponia, en qué meses funciona, en qué se diferencian los formatos entre sí y qué ponerse o llevar. La mayoría de las categorías aparecen en varios destinos, así que la elección de la actividad suele preceder a la del pueblo.',
      note: 'La temporada es la restricción dura. Todo lo que ocurre sobre nieve o hielo necesita la mitad fría del año, aproximadamente de noviembre a abril. El senderismo, el remo y el sol de medianoche pertenecen a junio-agosto. Las auroras necesitan oscuridad y van de septiembre a abril más o menos. La observación de osos es lo contrario del trineo, y merece la pena planificar un viaje en torno a cualquiera de las dos.',
    },
  },
};

export default guides;
