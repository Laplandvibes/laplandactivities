// Guide saisonnier et pratique en français pour les pages destination et catégorie.
// Rédigé en français, pas traduit automatiquement. Base factuelle :
// src/data/destinations.ts, categories.ts, activities.ts — aucun prix,
// aucune fréquentation ni température inventés.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi saison par saison',
      seasonWinter: 'De novembre à mars, le fleuve gèle, la neige tient et presque tout le catalogue ouvre en même temps : safaris en motoneige, traîneaux à chiens et à rennes, pêche blanche et chasses aux aurores. Au cœur de l\'hiver, le soleil dépasse à peine l\'horizon, et c\'est précisément pour cela que les aurores se voient si bien ici. Noël et le Nouvel An sont les deux semaines les plus chargées de l\'année.',
      seasonSummer: 'De juin à août, la neige cède la place à une lumière qui ne s\'arrête jamais vraiment. Les chenils restent ouverts pour les visites d\'été et les rencontres avec les chiots, l\'Arktikum et le SantaPark fonctionnent toute l\'année, et la rive du Kemijoki devient le centre de la ville. Septembre et octobre apportent les couleurs du ruska sur l\'Ounasvaara et les premières aurores de la saison, avec beaucoup moins de monde sur les sentiers.',
      planTitle: 'Préparer un séjour à Rovaniemi',
      planGetting: 'Rovaniemi possède les meilleures liaisons de Laponie : le vol direct depuis Helsinki dure environ une heure vingt et le train de nuit arrive au matin. La plupart des prestataires de traîneaux, de rennes et d\'aurores se trouvent à moins de vingt minutes de route, et les excursions incluent en général le transfert depuis l\'hôtel : la voiture reste facultative.',
      planStay: 'Deux ou trois nuits suffisent pour le village du Père Noël, un grand safari et une soirée aurores sans courir. Réservez tôt les départs traîneau et motoneige de décembre et du pic de février-mars. Franchir la ligne du cercle polaire ne coûte rien, mais le certificat, lui, est un souvenir payant de quelques euros : il se vend à l\'office de tourisme du cercle polaire, à la tour du cercle polaire ou à la boutique de la Maison de Noël, et non à la poste. L\'Ounasvaara est assez proche pour une session de ski en soirée.',
    },
    levi: {
      seasonsTitle: 'Levi saison par saison',
      seasonWinter: 'La saison de ski est l\'essentiel : 44 pistes et 26 remontées, dont deux télécabines, de l\'obscurité de novembre aux longues journées claires d\'avril. La Coupe du monde alpine y ouvre sa saison de slalom chaque mois de novembre. Sorties photo aurores, safaris en traîneau et virées en motoneige jusqu\'à une ferme de rennes remplissent les heures où les remontées sont fermées.',
      seasonSummer: 'L\'été, la télécabine dessert le Levi Bike Park au lieu des skieurs, et le fjäll s\'ouvre à la randonnée. Le golf sous le soleil de minuit est la curiosité locale : départ vers minuit et parcours en plein jour. Les 230 kilomètres de pistes de ski de fond de l\'hiver servent, une fois la neige partie, de sentiers de marche et de course.',
      planTitle: 'Préparer un séjour à Levi',
      planGetting: 'Depuis l\'aéroport de Kittilä, comptez une quinzaine de minutes : c\'est le transfert le plus court de toutes les stations lapones. Le village se trouve au pied du Levitunturi et se traverse à pied, si bien que la plupart des visiteurs se passent de voiture, sauf s\'ils prévoient des excursions vers Ylläs ou du côté de Kittilä.',
      planStay: 'Levi mérite plus qu\'un week-end : trois à cinq nuits permettent de skier, de faire un safari et de garder une soirée pour le Hullu Poro. Les lits au pied des pistes et les meilleurs départs traîneau partent en premier pour la semaine de Noël et les vacances scolaires de mars. Forfaits et location de matériel se règlent en revanche plus facilement sur place que les excursions.',
    },
    yllas: {
      seasonsTitle: 'Ylläs saison par saison',
      seasonWinter: 'Deux villages se partagent un fjäll et 62 pistes au total, dont des descentes de plus de trois kilomètres, les plus longues de Finlande. Autour s\'étendent environ 300 kilomètres de pistes de fond damées qui rejoignent le parc national de Pallas-Yllästunturi. Le ciel y est sombre et dégagé : les sorties aurores partent du fjäll lui-même plutôt que d\'un village éclairé.',
      seasonSummer: 'Une fois la trace fondue, le même parc national devient un terrain de randonnée : itinéraires balisés sur le fjäll ouvert, vieille pessière et caillebotis à travers la tourbière. La fin de l\'été appartient aux baies et aux champignons, et à l\'automne le ruska colore les pentes avant la première neige. L\'été à Ylläs est calme comme les semaines de ski ne le sont jamais.',
      planTitle: 'Préparer un séjour à Ylläs',
      planGetting: 'L\'aéroport de Kittilä est à environ 35 minutes de route. Les deux villages se font face de part et d\'autre du fjäll et la route qui les relie est longue : choisissez votre côté avant de réserver. Äkäslompolo est le plus calme, Ylläsjärvi concentre les bars. Une voiture facilite nettement les allers-retours.',
      planStay: 'Choisissez Ylläs plutôt que Levi si vous voulez un ciel noir, le silence du parc national et de longues journées de ski plutôt que la vie nocturne. Comptez trois nuits au minimum ; le seul réseau de pistes de fond en justifie davantage. En mars, la neige et la vraie lumière du jour coexistent, c\'est le moment idéal pour de longues sorties.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä saison par saison',
      seasonWinter: 'C\'est la station de ski la plus septentrionale de Finlande, et la latitude se sent : les chances d\'aurores courent de septembre à avril, et les journées du cœur de l\'hiver sont courtes et bleues. Les safaris en motoneige partent droit vers la nature, et le sauna à fumée de Kiilopää suivi d\'un trou dans la glace est ici un rite local, pas un supplément touristique.',
      seasonSummer: 'Le parc national d\'Urho Kekkonen commence en bordure du village, et ses sentiers balisés comme ses cabanes ouvertes sont gratuits. L\'été, cela signifie de longues marches sous un soleil qui ne se couche pas, l\'orpaillage à Tankavaara où chaque paillette trouvée vous appartient, et des safaris au crabe royal de l\'autre côté de la frontière, à Kirkenes.',
      planTitle: 'Préparer un séjour à Saariselkä',
      planGetting: 'Prenez l\'avion jusqu\'à Ivalo puis roulez une trentaine de minutes. Saariselkä se parcourt à pied, mais les départs de sentiers du parc, Tankavaara et Kiilopää sont dispersés : louez une voiture ou choisissez des excursions avec transfert. Inari est assez proche pour une journée.',
      planStay: 'Venez ici si vous voulez la nature d\'abord et les services ensuite. Trois nuits laissent la place à une longue marche ou un safari, une soirée aurores et le sauna à fumée. Les journées en Norvège sont longues : prévoyez une journée entière pour le safari au crabe royal. Les cabanes ouvertes fonctionnent par ordre d\'arrivée et ne se réservent pas.',
    },
    inari: {
      seasonsTitle: 'Inari saison par saison',
      seasonWinter: 'L\'hiver est ici silencieux et sombre, ce qui sert autant les aurores que la raison pour laquelle on vient : la culture sâme. Siida, musée sâme et centre nature, remplit une journée à l\'intérieur, et les visites d\'élevage de rennes montrent un travail réel plutôt qu\'un spectacle. Le lac gèle entièrement et l\'immensité autour du village se vide.',
      seasonSummer: 'À partir de juin, le lac rouvre : les bateaux passent devant Ukonsaari, l\'île sacrée, et le kayak sous le soleil de minuit étire une soirée ordinaire sur toute la nuit. On rejoint à pied l\'église de nature sauvage de Pielpajärvi à travers une vieille pinède, et fin juillet les plaquebières mûrissent dans les tourbières le long du sentier.',
      planTitle: 'Préparer un séjour à Inari',
      planGetting: 'L\'aéroport d\'Ivalo est à une quarantaine de minutes par la route. Le village lui-même est petit et se fait à pied, mais tout le reste s\'étale le long du lac et de la route qui monte vers le nord : une voiture aide. Beaucoup associent Inari à Saariselkä plutôt que d\'en faire une base unique.',
      planStay: 'Accordez au moins une demi-journée à Siida, aile en langue sâme comprise. Les sorties en bateau sur le lac Inari ne circulent que de juin à septembre : ici, l\'été et l\'hiver sont deux voyages différents et non deux variantes du même. C\'est une destination pour la culture, la photographie et le calme, pas pour les services de station.',
    },
    ruka: {
      seasonsTitle: 'Ruka saison par saison',
      seasonWinter: 'La neige stockée permet à Ruka d\'ouvrir dès octobre et de skier jusqu\'en mai, la plus longue saison de Finlande, sur 41 pistes desservies par 22 remontées. Le village est posé juste au-dessus des pentes : le trajet du lit au télésiège est court. Hors des pistes, il y a des safaris en motoneige, des sorties en traîneau et de l\'escalade sur les cascades gelées du canyon de Korouoma.',
      seasonSummer: 'L\'été retourne complètement la destination. L\'observation des ours bruns depuis des affûts fonctionne pendant les mois clairs, la rivière Kitka porte des descentes en raft du printemps à l\'automne, et le Karhunkierros, 82 kilomètres à travers le parc national d\'Oulanka, est l\'une des randonnées les plus connues du pays. Le bike park accueille ceux qui veulent la descente sans la neige.',
      planTitle: 'Préparer un séjour à Ruka',
      planGetting: 'L\'aéroport de Kuusamo est à environ vingt-cinq minutes. Ruka se trouve à Kuusamo, juste au sud de la frontière officielle de la Laponie, avec la même neige et le même hiver nordique. Une voiture est utile pour Oulanka, Korouoma et les affûts à ours, tous situés hors du village.',
      planStay: 'Les skieurs peuvent loger au pied des pistes sans jamais démarrer le moteur ; les randonneurs et les observateurs d\'animaux doivent prévoir de la route. Les affûts à ours se réservent des mois à l\'avance : faites-en le point fixe d\'un séjour d\'été. Le Karhunkierros propose une boucle de 12 kilomètres pour qui veut les paysages sans la version de plusieurs jours.',
    },
    posio: {
      seasonsTitle: 'Posio saison par saison',
      seasonWinter: 'C\'est le cœur de l\'hiver qui fait la réputation de Posio. Le gel plie les épicéas du parc national de Riisitunturi en lourdes sculptures blanches, au mieux de janvier à mars, et le canyon de Korouoma se remplit de cascades gelées suspendues jusqu\'à quarante mètres le long de la paroi. Les deux se font à pied sur la journée, et les deux récompensent un départ matinal tant qu\'il fait clair.',
      seasonSummer: 'Sans neige, le même canyon devient un itinéraire de randonnée dans une vallée de faille escarpée et boisée, et Riisitunturi s\'ouvre en marche plus facile sur le fjäll, avec de longues vues sur les lacs. Pentik, la fabrique de céramique la plus septentrionale du monde, garde ses galeries et son magasin d\'usine ouverts toute l\'année et occupe les heures de mauvais temps.',
      planTitle: 'Préparer un séjour à Posio',
      planGetting: 'Il vous faut une voiture. Posio est à environ deux heures de Rovaniemi et une heure de Ruka, et se prête naturellement à une excursion depuis l\'une ou l\'autre plutôt qu\'à un séjour complet. Il n\'y a pas ici de réseau de transferts comme dans les stations.',
      planStay: 'Traitez Posio comme la journée calme d\'un voyage lapon plus large : un parc national, un canyon et la fabrique de céramique la remplissent confortablement. Les photographes viendront entre janvier et mars pour les arbres chargés de givre. Les sentiers sont balisés mais les services sont rares : emportez de quoi manger et boire.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda et Kemi saison par saison',
      seasonWinter: 'Ici, l\'hiver construit au lieu de simplement recouvrir. Le parc de neige du domaine SnowCastle de Kemi est rebâti de zéro chaque hiver, et le brise-glace Sampo sort dans le golfe de Botnie gelé et laisse ses passagers flotter en combinaison de survie entre les plaques de glace. Ni l\'un ni l\'autre n\'existe l\'été, ce qui fait de cette destination la seule de Laponie dont les attractions phares soient strictement saisonnières.',
      seasonSummer: 'L\'été appartient au fleuve. Le Tornionjoki est le plus grand fleuve à saumons à cours libre d\'Europe, et aux rapides de Kukkolankoski la pêche traditionnelle à l\'épuisette a toujours lieu chaque été. Le Green Zone Golf vous fait franchir la frontière plusieurs fois : quatre changements de pays et de fuseau horaire dans un parcours, ce qui ne marche que sur un sol dégagé.',
      planTitle: 'Préparer un séjour à Tornio',
      planGetting: 'L\'aéroport de Kemi est à un quart d\'heure de Tornio, et Kemi elle-même à environ vingt-cinq minutes : les deux villes se visitent comme un seul séjour. Tornio et Haparanda forment une ville en deux pays : la frontière passe au milieu de la rue commerçante et se franchit à pied.',
      planStay: 'C\'est la destination lapone la plus facile à combiner avec une journée shopping, avec IKEA Haparanda juste au passage de la frontière et des prix à comparer des deux côtés. Une ou deux nuits suffisent pour le brise-glace et le SnowCastle en hiver, ou pour le fleuve et le golf en été.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto saison par saison',
      seasonWinter: 'Deux villages de fjäll occupent les extrémités d\'une vieille chaîne, avec le parc national entre eux. Pyhä a le ski le plus raide, dont Huttu-Ukko, une piste à bosses au passé de Coupe du monde, mais aussi du terrain doux et des files courtes pour les familles. À Luosto, un train des neiges chauffé monte les visiteurs au Lampivaara et à sa mine d\'améthyste pendant les mois sombres.',
      seasonSummer: 'Sans neige, le parc devient un terrain de marche : caillebotis à travers la forêt ancienne et Isokuru, la gorge la plus profonde de Finlande avec environ 220 mètres, et des vues dégagées le long de la plus vieille chaîne de fjälls de Laponie. La mine d\'améthyste reste ouverte : c\'est la seule mine active d\'Europe où les visiteurs peuvent creuser et garder une pierre.',
      planTitle: 'Préparer un séjour à Pyhä-Luosto',
      planGetting: 'L\'aéroport le plus proche est Rovaniemi, à environ une heure et demie de route. Pyhä et Luosto sont deux villages distincts, à une demi-heure l\'un de l\'autre, reliés par le parc et non par une rue : décidez où vous logez avant de réserver.',
      planStay: 'Les familles choisissent en général Pyhä pour le domaine skiable et les files courtes ; les marcheurs et les chercheurs d\'améthyste s\'installent à Luosto. Deux ou trois nuits couvrent une journée de pistes, la mine et une plus longue marche dans le parc. Metsähallitus entretient les sentiers, et les itinéraires balisés partent directement des deux villages.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi saison par saison',
      seasonWinter: 'La ville est posée sur son propre lac, qui gèle en terrain de pêche blanche à distance de marche du centre. Le fjäll de ski Suomu est à une quarantaine de minutes, les prestataires de traîneaux proposent des safaris que vous conduisez vous-même plutôt que des places de passager, et sur la rive d\'Uitonniemi le petit village du Père Noël associe un hôtel en rondins, des rencontres avec le Père Noël et des sorties aurores.',
      seasonSummer: 'Pendant les mois clairs, ce sont les sculptures qui invitent à ralentir : Kemijärvi accueille depuis 1985 une semaine internationale de sculpture sur bois, et les grandes pièces restent dans les rues toute l\'année. Le lac s\'ouvre aux bateaux et à la pêche, et la route calme de l\'est vers le nord fait de la ville une première étape naturelle.',
      planTitle: 'Préparer un séjour à Kemijärvi',
      planGetting: 'C\'est ici que le Santa Claus Express termine sa course : un départ par jour continue au-delà de Rovaniemi, vous pouvez donc dormir dans le train depuis Helsinki et descendre au bord du lac. En voiture, comptez une heure depuis Rovaniemi. Pyhä est à 50 kilomètres.',
      planStay: 'Kemijärvi convient aux voyageurs en train et à tous ceux qui veulent la Laponie sans la foule des stations. La ville fait une base tranquille pour la Laponie orientale, Pyhä et Suomu étant tous deux à courte distance. Une ou deux nuits suffisent en général, sauf si vous en faites la porte d\'entrée de la route est, plus calme.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'Ce que veut dire aventure arctique ici',
      covers: 'En Laponie, l\'aventure est surtout motorisée ou prise dans la glace : safaris guidés en motoneige, de deux heures à une journée entière dans la nature, karting sur lac gelé, escalade des cascades gelées du canyon de Korouoma, descente en raft de la rivière Kitka et une nuit dans un hôtel de neige. La croisière en brise-glace au départ de Kemi entre aussi dans cette catégorie.',
      whenToGo: 'L\'essentiel se déroule de novembre à mars, quand les lacs portent et que la couche de neige est assez épaisse pour qu\'un safari quitte le réseau routier. Le raft fait exception et fonctionne du printemps à l\'automne. Les hôtels de neige et tout ce qui est bâti en glace fondent : ils n\'existent que pendant la moitié hivernale de l\'année.',
      chooseTitle: 'Choisir sa sortie aventure',
      choosing: 'Le choix principal porte sur la durée. Les départs courts en groupe conviennent à une demi-journée et à des groupes mixtes ; les expéditions d\'une journée couvrent bien plus de terrain et exigent en général un permis de conduire pour la motoneige. Le karting sur glace et les formules famille acceptent des passagers trop jeunes pour conduire. L\'escalade sur glace est guidée et le matériel fourni, mais elle demande plus qu\'un safari.',
      bring: 'Pour la motoneige et les activités sur glace, les prestataires fournissent combinaison thermique, bottes, gants et casque : prévoyez des couches plutôt que du volume. Sous-vêtements en laine ou en synthétique, une couche intermédiaire chaude et un bonnet qui passe sous le casque. Emportez votre permis si vous comptez conduire, et gardez le téléphone dans une poche qui reste chaude.',
    },
    animals: {
      coversTitle: 'Rencontrer les animaux de l\'Arctique',
      covers: 'Cela couvre les traîneaux à chiens et les visites de chenils, les fermes de rennes et les sorties en traîneau, l\'observation des ours bruns sauvages depuis des affûts dans les forêts à l\'est de Kuusamo, et le parc animalier de Ranua, où vivent des ours polaires dans le zoo le plus septentrional du monde. Les visites chez les éleveurs sâmes à Inari et Samiland à Levi se situent à la frontière avec la catégorie culture.',
      whenToGo: 'Le traîneau demande de la neige : les sorties chiens et rennes ont lieu environ de novembre à avril. Les chenils restent ouverts l\'été pour les visites et les rencontres avec les chiots, sans traîneau. Pour les ours, c\'est l\'inverse : les affûts fonctionnent pendant les mois clairs, du printemps au début de l\'automne, quand les ours sont actifs et les nuits assez claires.',
      chooseTitle: 'Choisir sa rencontre animalière',
      choosing: 'Décidez d\'abord si vous voulez conduire ou être conduit. Les safaris que vous menez vous-même vous mettent debout sur les patins avec votre propre attelage, en général à deux qui alternent ; les sorties passager et les visites de ferme conviennent aux jeunes enfants et à tous ceux qui préfèrent du temps avec les chiens à des kilomètres parcourus. Le traîneau à rennes est lent par nature, et c\'est le but.',
      bring: 'Les fermes et les chenils fournissent les combinaisons pour le traîneau. Prenez des gants qui permettent de travailler : vous manipulerez des lignes de harnais et un appareil photo dans le froid. Un affût à ours est une longue attente dans un abri fixe : emportez plus d\'isolation que la marche d\'approche ne le laisse penser, plus de quoi vous occuper en silence. Le flash est interdit dans tous les affûts.',
    },
    'northern-lights': {
      coversTitle: 'Comment fonctionne la chasse aux aurores en Laponie',
      covers: 'Ici, les sorties aurores sont des chasses, pas des points de vue : le guide suit la prévision de nuages et l\'indice d\'activité, puis roule vers la trouée du ciel qui paraît la meilleure ce soir-là. Les formats varient plus que les lieux : bus, soirées photo, sorties en raquettes et virées en motoneige qui vous emmènent sur un lac gelé, loin de toute lumière.',
      whenToGo: 'La saison va grosso modo de septembre à avril et réclame trois choses à la fois : l\'obscurité, un ciel dégagé et de l\'activité solaire. L\'automne offre de l\'eau libre pour les reflets avant que les lacs ne gèlent ; le cœur de l\'hiver donne les plus longues heures sombres. Une seule nuit ne garantit rien, ce qui est le meilleur argument pour prévoir deux ou trois tentatives.',
      chooseTitle: 'Choisir sa sortie aurores',
      choosing: 'Les sorties photo valent le coup si vous voulez des images : le guide règle votre appareil et connaît les temps de pose. Les circuits en bus couvrent le plus de terrain et offrent le meilleur rapport chances-prix quand le temps est changeant. Raquettes et motoneige échangent un peu de mobilité contre un lieu meilleur et plus calme. Les destinations du nord comme Saariselkä et Inari ont un ciel plus sombre que les stations.',
      bring: 'Vous resterez immobile dehors pendant des heures : habillez-vous bien plus chaudement que pour une journée active. Combinaison si le prestataire en fournit, sous-vêtements en laine, deux paires de chaussettes et des chaufferettes. Un trépied et des batteries de rechange comptent plus qu\'un appareil coûteux ; le froid vide les batteries vite. Gardez la lampe blanche éteinte, elle ruine la vision nocturne de tout le monde.',
    },
    'winter-sports': {
      coversTitle: 'Ski et sports de neige en Laponie',
      covers: 'Six fjälls de ce guide ont des remontées : Ounasvaara au-dessus de Rovaniemi, Levi, Ylläs, Ruka, Pyhä et Suomu. Ensemble, ils couvrent tout, de la pente débutante en ville aux plus longues descentes de Finlande à Ylläs. Hors des remontées, la catégorie comprend le ski de fond, la raquette en vieille forêt, le fatbike et le patin.',
      whenToGo: 'La neige stockée permet à Ruka d\'ouvrir en octobre et de skier jusqu\'en mai, la plus longue saison du pays. La plupart des stations tournent de novembre ou décembre à avril. Le cœur de l\'hiver a l\'ambiance mais des journées très courtes ; mars et avril réunissent enneigement complet et vraie lumière, et c\'est alors que le réseau de fond est à son meilleur.',
      chooseTitle: 'Choisir sa station',
      choosing: 'Levi est la plus grande, avec le transfert le plus court depuis l\'aéroport et le plus d\'après-ski. Ylläs a les plus longues descentes et le plus grand réseau de fond, avec beaucoup moins de bruit. Ruka a la plus longue saison et des hébergements au pied des pistes. Pyhä convient aux familles comme aux skieurs de bosses, Ounasvaara à une soirée après une journée à Rovaniemi, et Suomu est l\'option tranquille.',
      bring: 'La location existe dans chaque station et se règle plus facilement sur place que les excursions. Prenez masque et cache-cou : le vent sur un fjäll ouvert fait plus de dégâts que ne le suggère le thermomètre. Les fondeurs consulteront le bulletin des pistes avant de choisir un versant, car le damage varie d\'un village à l\'autre.',
    },
    wellness: {
      coversTitle: 'Sauna et bien-être arctique',
      covers: 'Ici, le bien-être signifie chaud et froid en alternance plutôt que cabines de soins. Le sauna à fumée traditionnel de Kiilopää chauffe pendant des heures puis est aéré avant usage, ce qui donne une chaleur douce qu\'un poêle électrique ne produit pas, et il se termine par un trou dans la glace. La flottaison arctique vous place en combinaison de survie et vous laisse dériver.',
      whenToGo: 'Les deux fonctionnent toute l\'année, mais restent par nature des expériences d\'hiver : la baignade glacée demande un trou découpé dans un lac gelé, et la flottaison marche mieux quand il y a de la glace autour. Un sauna à fumée met des heures à chauffer : il tourne à horaires fixes et non à la demande, et c\'est le créneau de l\'après-midi qu\'il faut réserver.',
      chooseTitle: 'Choisir son expérience de sauna',
      choosing: 'Le sauna à fumée est la version traditionnelle, celle autour de laquelle organiser une journée. La baignade glacée est facultative partout où elle est proposée, et personne ne vous poussera. La flottaison convient à qui veut l\'eau froide sans la nage, la combinaison gardant au sec et assez au chaud pour rester un moment.',
      bring: 'Apportez maillot et serviette ; la plupart des lieux louent les deux en cas d\'oubli. En Finlande, on va au sauna généralement sans maillot lors des séances séparées par sexe, et avec lors des séances mixtes publiques : demandez sur place. Prévoyez du temps pour refroidir correctement au lieu d\'enchaîner sur l\'activité suivante.',
    },
    culture: {
      coversTitle: 'Héritage sâme, Père Noël et récit arctique',
      covers: 'Deux fils traversent cette catégorie. Le premier est la culture sâme, que l\'on rencontre au mieux à Siida, à Inari, musée sâme et centre nature au siège du Parlement sâme de Finlande, et à Samiland, à Levi. Le second est le récit arctique que la région fait d\'elle-même : le village du Père Noël et le SantaPark à Rovaniemi, l\'Arktikum au bord du fleuve, et les lieux bâtis en glace.',
      whenToGo: 'Les musées sont ouverts toute l\'année et tirent le meilleur parti d\'une journée de mauvais temps ou d\'un court après-midi d\'hiver. Les hôtels de glace et les villages de neige n\'existent que par temps froid, environ de décembre à avril. L\'orpaillage à Tankavaara et la mine d\'améthyste du Lampivaara fonctionnent aux deux saisons, avec un train des neiges chauffé vers la mine en hiver.',
      chooseTitle: 'Choisir sa visite culturelle',
      choosing: 'Si vous voulez une culture vivante plutôt qu\'un spectacle, commencez par Siida et une visite chez des éleveurs de rennes en activité à Inari, pas par une représentation. Avec des enfants, le village du Père Noël et le SantaPark sont faits pour eux. L\'Arktikum possède la plus solide exposition sur les aurores du pays et remplit une demi-journée à l\'abri.',
      bring: 'Les musées ne demandent que du temps, et Siida mérite au moins trois heures. Dans les hôtels de glace et les villages de neige, il gèle aussi à l\'intérieur : gardez vos couches d\'extérieur pendant la visite. À Tankavaara, chaque paillette trouvée vous appartient, et au Lampivaara vous pouvez creuser et garder une améthyste.',
    },
    summer: {
      coversTitle: 'La Laponie pendant les mois clairs',
      covers: 'L\'été transforme le même paysage en terrain de randonnée, de pagaie et de vélo. Les itinéraires de parcs nationaux courent à Pallas-Yllästunturi, Urho Kekkonen, Oulanka et Pyhä-Luosto, des courtes boucles balisées aux 82 kilomètres du Karhunkierros. Sur l\'eau, croisières et kayak sous le soleil de minuit à Inari ; sur roues, le Levi Bike Park. Le golf sous un soleil qui ne se couche pas est la curiosité locale.',
      whenToGo: 'Juin à août forme le cœur de la saison, et au solstice le soleil reste au-dessus de l\'horizon jour et nuit à cette latitude. Fin juillet arrivent les plaquebières et les premiers champignons. Septembre et octobre sont les semaines du ruska, quand les fjälls changent de couleur et que les premières aurores reviennent, avec des sentiers presque vides.',
      chooseTitle: 'Choisir son séjour d\'été',
      choosing: 'Décidez si vous voulez une base ou un itinéraire. Les marches à la journée depuis un village conviennent à la plupart et ne demandent aucun permis ; les longs sentiers demandent de la préparation, et les cabanes ouvertes qui les jalonnent sont gratuites et occupées par ordre d\'arrivée. Le kayak et le raft sont guidés, ce qui est la manière raisonnable de découvrir une rivière du nord.',
      bring: 'Les moustiques culminent à la mi-été : répulsif et moustiquaire de tête ne sont pas optionnels dans les tourbières. Emportez un vrai masque de nuit si la lumière permanente vous gêne. Des chaussures qui tiennent sur des caillebotis mouillés comptent plus que des semelles de montagne lourdes, et tout itinéraire balisé se parcourt au titre du droit d\'accès à la nature : aucun permis n\'est requis.',
    },
    food: {
      coversTitle: 'Manger dans le Nord',
      covers: 'Ici, la cuisine est liée au feu et à la saison. Une kota ou kammi est une hutte conique avec un foyer ouvert au centre, et le repas se prépare devant vous : renne, poisson, galette, plaquebières. Hors de la table, il y a la cueillette de baies et de champignons sauvages, et à Kukkolankoski le corégone se pêche encore à l\'épuisette traditionnelle.',
      whenToGo: 'Les dîners au feu de bois fonctionnent toute l\'année et donnent le meilleur dans la moitié sombre de l\'année, quand le feu est la seule lumière de la pièce. La cueillette appartient à la fin de l\'été et à l\'automne : baies dès juillet, champignons dès août. La saison du corégone à Kukkolankoski est estivale et suit la montée du poisson dans le fleuve.',
      chooseTitle: 'Choisir son expérience culinaire',
      choosing: 'Un dîner en kota est généralement un menu fixe avec un guide qui explique ce que vous mangez et d\'où cela vient : cela fonctionne comme une soirée plutôt que comme un repas. Les sorties de cueillette sont menées par quelqu\'un capable de dire ce qui est sûr, et c\'est tout l\'intérêt. Les deux conviennent aux groupes mixtes et ne demandent aucune condition physique.',
      bring: 'Signalez allergies et régimes à la réservation, car ce sont des menus fixes cuits au feu et non une carte. Habillez-vous pour rester assis dehors : dans une kota, il fait chaud près du foyer et froid contre la paroi. Le droit d\'accès à la nature autorise la cueillette de baies et de champignons partout où vous pouvez légalement circuler.',
    },
    fishing: {
      coversTitle: 'Pêcher dans trois types d\'eau',
      covers: 'Trois pêches différentes se croisent dans ce coin de l\'Arctique : la pêche blanche sur les lacs gelés, les rivières à saumon estivales sous licence comme le Tornionjoki, et les safaris au crabe royal de l\'autre côté de la frontière norvégienne, au départ de Kirkenes. Elles ont des saisons, des règles et des permis distincts, et le site tient une page pêche dédiée avec les règles en vigueur et les liens officiels de permis.',
      whenToGo: 'La pêche blanche couvre les mois gelés, environ de décembre à avril, et c\'est la plus simple à organiser au dernier moment. La saison du saumon est estivale et strictement réglementée, les dates étant fixées chaque année. Les safaris au crabe royal fonctionnent aux deux saisons : en motoneige ou en bus sur la glace l\'hiver, en bateau semi-rigide l\'été.',
      chooseTitle: 'Choisir sa sortie pêche',
      choosing: 'La pêche blanche guidée demande peu d\'efforts : le guide perce les trous, apporte le matériel et vous nourrit en général au coin du feu. La pêche au saumon sur le Tornionjoki est une affaire sérieuse et exige le bon permis avant le premier lancer. Les sorties au crabe royal tiennent autant de l\'excursion en bateau ou en motoneige que de la pêche, et se terminent par la prise dans l\'assiette.',
      bring: 'Les règles changent d\'une année à l\'autre et varient selon les eaux : vérifiez les conditions officielles du permis avant de pêcher, pas après. Les sorties guidées incluent le matériel ; la pêche blanche en autonomie demande votre canne, une tarière et du jugement sur l\'épaisseur de la glace. Le no-kill est courant sur beaucoup de rivières ici, et il sert à maintenir les stocks.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'Ce qui distingue les dix destinations',
      lead: 'La Laponie n\'est pas un seul lieu avec une seule saison. Rovaniemi a l\'aéroport, le train de nuit et le plus large choix d\'excursions. Levi et Ruka sont des villages de ski que l\'on traverse à pied. Ylläs et Saariselkä échangent la vie nocturne contre un ciel noir et le silence du parc national. À Inari, la culture sâme se rencontre au lieu de se jouer, et Posio, Tornio et Kemijärvi sont les destinations calmes.',
      note: 'Les distances sont réelles ici : deux destinations proches sur la carte peuvent être séparées par deux heures de route. Pour un court séjour, choisissez une seule base et n\'en ajoutez une seconde que si vous avez une semaine. Chaque page ci-dessous indique les prestataires locaux, ce qui fonctionne à quelle saison et comment s\'y rendre.',
    },
    catList: {
      leadTitle: 'Choisir par activité plutôt que par lieu',
      lead: 'Si vous savez déjà ce que vous voulez faire, commencez ici plutôt que par une carte. Chaque page de catégorie explique ce que l\'activité implique réellement en Laponie, les mois où elle a lieu, en quoi les formats diffèrent et ce qu\'il faut porter ou emporter. La plupart des catégories existent dans plusieurs destinations : le choix de l\'activité précède donc souvent celui de la ville.',
      note: 'La saison est la contrainte forte. Tout ce qui se passe sur la neige ou la glace demande la moitié froide de l\'année, de novembre à avril environ. La randonnée, la pagaie et le soleil de minuit appartiennent à juin-août. Les aurores exigent l\'obscurité et courent de septembre à avril environ. L\'observation des ours est l\'inverse du traîneau, et les deux méritent qu\'on organise un voyage autour.',
    },
  },
};

export default guides;
