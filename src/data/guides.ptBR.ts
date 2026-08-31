// Guia de temporada e planejamento em português do Brasil para as páginas de
// destino e categoria. Escrito em português, não traduzido por máquina. Base
// factual: src/data/destinations.ts, categories.ts e activities.ts — sem preços,
// número de visitantes ou temperaturas inventados.

import type { Guides } from './guideI18n';

const guides: Guides = {
  destinations: {
    rovaniemi: {
      seasonsTitle: 'Rovaniemi estação por estação',
      seasonWinter: 'De novembro a março o rio congela, a neve firma e quase todo o catálogo abre de uma vez: safáris de snowmobile, trenós de huskies e de renas, pesca no gelo e caçadas de aurora. No auge do inverno o sol mal aparece acima do horizonte, e é justamente por isso que as luzes se veem tão bem aqui. Natal e Ano-Novo são as duas semanas mais cheias do ano na cidade.',
      seasonSummer: 'De junho a agosto a neve dá lugar a uma luz que praticamente não acaba. Os canis seguem abertos para visitas de verão e encontros com filhotes, o Arktikum e o SantaPark funcionam o ano inteiro, e a margem do Kemijoki vira o centro da cidade. Setembro e outubro trazem as cores do ruska ao Ounasvaara e as primeiras auroras da temporada, com muito menos gente nas trilhas.',
      planTitle: 'Planejando uma viagem a Rovaniemi',
      planGetting: 'Rovaniemi tem as melhores conexões da Lapônia: o voo direto de Helsinque leva cerca de uma hora e vinte minutos, e o trem noturno chega pela manhã. A maioria das operadoras de husky, rena e aurora fica a menos de vinte minutos de carro, e os passeios costumam incluir transfer do hotel, então o carro aqui é opcional.',
      planStay: 'Duas ou três noites dão conta da Vila do Papai Noel, de um safári grande e de uma noite de auroras sem correria. Reserve com antecedência as saídas de husky e snowmobile de dezembro e do pico de fevereiro e março. Cruzar a linha do Círculo Polar não custa nada, mas o certificado é uma lembrança paga de poucos euros: ela é vendida no posto de informações turísticas do Círculo Polar, na torre do Círculo Polar ou na loja da Casa do Natal, e não no correio. O Ounasvaara fica perto o bastante para esquiar no fim da tarde.',
    },
    levi: {
      seasonsTitle: 'Levi estação por estação',
      seasonWinter: 'A temporada de esqui é o principal: 44 pistas e 26 teleféricos, incluindo duas gôndolas, do escuro de novembro aos longos dias claros de abril. A Copa do Mundo de esqui alpino abre aqui sua temporada de slalom todo mês de novembro. Saídas de fotografia de aurora, safáris de husky e passeios de snowmobile até uma fazenda de renas preenchem as horas em que os teleféricos param.',
      seasonSummer: 'No verão a gôndola sobe o Levi Bike Park em vez dos esquiadores, e o monte se abre para caminhadas. O golfe sob o sol da meia-noite é a esquisitice local: tacada perto da meia-noite e volta inteira em plena luz do dia. Os 230 quilômetros de pistas de esqui cross-country do inverno servem, sem neve, como trilhas de caminhada e corrida.',
      planTitle: 'Planejando uma viagem a Levi',
      planGetting: 'Do aeroporto de Kittilä você chega em cerca de quinze minutos, o transfer mais curto de todos os destinos de esqui da Lapônia. A vila fica ao pé do Levitunturi e se atravessa a pé, então a maioria dispensa o carro alugado, a não ser que planeje bate-voltas até Ylläs ou para o lado de Kittilä.',
      planStay: 'Levi merece mais do que um fim de semana: de três a cinco noites dão para esquiar, fazer um safári e ainda guardar uma noite para o Hullu Poro. As camas ao pé da pista e as saídas de husky mais bem avaliadas somem primeiro na semana do Natal e nas férias escolares finlandesas de março. Passes de teleférico e aluguel de equipamento, ao contrário, se resolvem mais fácil na chegada do que os passeios.',
    },
    yllas: {
      seasonsTitle: 'Ylläs estação por estação',
      seasonWinter: 'Duas vilas dividem um monte e 62 pistas no total, com descidas de mais de três quilômetros, as mais longas da Finlândia. Ao redor se estendem cerca de 300 quilômetros de pista de cross-country preparada que chegam ao parque nacional Pallas-Yllästunturi. O céu aqui é escuro e aberto, e por isso as saídas de aurora partem do próprio monte em vez de uma vila iluminada.',
      seasonSummer: 'Quando a pista derrete, o mesmo parque nacional vira terreno de caminhada: rotas sinalizadas pelo monte aberto, floresta velha de abetos e passarelas de madeira sobre a turfeira. O fim do verão é época de frutas silvestres e cogumelos, e no outono o ruska tinge as encostas antes da primeira neve. O verão em Ylläs é silencioso de um jeito que as semanas de esqui nunca são.',
      planTitle: 'Planejando uma viagem a Ylläs',
      planGetting: 'O aeroporto de Kittilä fica a uns 35 minutos de carro. As duas vilas ficam em lados opostos do monte e a estrada entre elas é longa, então decida o lado antes de reservar: Äkäslompolo é a mais calma, em Ylläsjärvi estão os bares. Um carro facilita muito o vaivém.',
      planStay: 'Escolha Ylläs em vez de Levi se quiser céu escuro, o silêncio do parque nacional e dias longos de esqui em vez de vida noturna. Conte com no mínimo três noites; só a rede de cross-country já justifica mais. Em março há neve e luz do dia de verdade ao mesmo tempo, e esse é o melhor momento para dias longos na pista.',
    },
    saariselka: {
      seasonsTitle: 'Saariselkä estação por estação',
      seasonWinter: 'Esta é a estação de esqui mais ao norte da Finlândia, e a latitude aparece: a chance de aurora vai de setembro a abril, e os dias do auge do inverno são curtos e azuis. Os safáris de snowmobile seguem direto para a natureza, e a sauna de fumaça de Kiilopää seguida de um buraco no gelo é um costume local aqui, não um acréscimo turístico.',
      seasonSummer: 'O parque nacional Urho Kekkonen começa na borda da vila, e suas trilhas sinalizadas e cabanas abertas são de uso gratuito. Verão significa caminhadas longas sob um sol que não se põe, garimpo de ouro em Tankavaara, onde cada lasca que você achar é sua, e safáris de caranguejo-real cruzando a fronteira até Kirkenes.',
      planTitle: 'Planejando uma viagem a Saariselkä',
      planGetting: 'Voe até Ivalo e dirija cerca de trinta minutos. Saariselkä é compacta o bastante para andar a pé, mas as entradas de trilha do parque, Tankavaara e Kiilopää ficam espalhadas: alugue um carro ou escolha passeios com transfer incluído. Inari fica perto o suficiente para um bate-volta.',
      planStay: 'Venha para cá se quiser natureza primeiro e serviços depois. Três noites dão para uma caminhada longa ou um safári, uma noite de auroras e a sauna de fumaça. Os bate-voltas até a Noruega são longos, então reserve um dia inteiro para o safári de caranguejo-real. As cabanas abertas funcionam por ordem de chegada e não podem ser reservadas.',
    },
    inari: {
      seasonsTitle: 'Inari estação por estação',
      seasonWinter: 'O inverno aqui é silencioso e escuro, o que serve tanto às auroras quanto ao motivo pelo qual a maioria vem: a cultura sámi. O Siida, museu sámi e centro de natureza, preenche um dia inteiro sob teto, e as visitas a criadores de renas mostram trabalho de verdade, não um espetáculo montado. O lago congela por completo e a natureza em volta da vila se esvazia.',
      seasonSummer: 'A partir de junho o lago reabre: os barcos passam por Ukonsaari, a ilha sagrada, e a canoagem sob o sol da meia-noite estica uma noite comum até virar madrugada. À igreja de Pielpajärvi se chega a pé por um velho pinheiral, e no fim de julho amadurecem as amoras-árticas nas turfeiras ao longo da trilha.',
      planTitle: 'Planejando uma viagem a Inari',
      planGetting: 'O aeroporto de Ivalo fica a uns quarenta minutos de estrada. A vila em si é pequena e se percorre a pé, mas todo o resto se espalha pela margem do lago e pela estrada principal rumo ao norte, então o carro ajuda. Muita gente combina Inari com Saariselkä em vez de tratá-la como base única.',
      planStay: 'Reserve pelo menos meio dia para o Siida, incluindo a ala em língua sámi. Os passeios de barco no lago Inari só funcionam de junho a setembro, então verão e inverno aqui são duas viagens diferentes, e não duas versões da mesma. É um destino para cultura, fotografia e silêncio, não para a estrutura de uma estação de esqui.',
    },
    ruka: {
      seasonsTitle: 'Ruka estação por estação',
      seasonWinter: 'A neve estocada permite que Ruka abra já em outubro e esquie até maio, a temporada mais longa da Finlândia, em 41 pistas servidas por 22 teleféricos. A vila fica bem em cima das encostas, então o caminho da cama ao teleférico é curto. Fora das pistas há safáris de snowmobile, passeios de husky e escalada no gelo nas cachoeiras congeladas do cânion de Korouoma.',
      seasonSummer: 'O verão vira o destino do avesso. A observação de ursos-pardos a partir de esconderijos funciona nos meses de luz, o rio Kitka recebe descidas de bote da primavera até o outono, e o Karhunkierros, 82 quilômetros pelo parque nacional de Oulanka, é uma das caminhadas mais conhecidas do país. O bike park atende quem quer a descida sem a neve.',
      planTitle: 'Planejando uma viagem a Ruka',
      planGetting: 'O aeroporto de Kuusamo fica a uns vinte e cinco minutos. Ruka fica em Kuusamo, logo ao sul da fronteira oficial da Lapônia, com a mesma neve e o mesmo inverno nórdico. Vale ter carro para Oulanka, Korouoma e os esconderijos de urso, todos fora da vila.',
      planStay: 'Quem esquia pode ficar ao pé da pista e nunca ligar o motor; quem caminha ou observa fauna precisa contar com estrada. Os esconderijos de urso lotam com meses de antecedência, então faça deles o ponto fixo de uma viagem de verão. O Karhunkierros tem um circuito de 12 quilômetros para quem quer a paisagem sem a versão de vários dias.',
    },
    posio: {
      seasonsTitle: 'Posio estação por estação',
      seasonWinter: 'Posio é conhecida pelo auge do inverno. A geada dobra os abetos do parque nacional Riisitunturi em esculturas brancas e pesadas, no melhor momento de janeiro a março, e o cânion de Korouoma se enche de cachoeiras congeladas que descem até quarenta metros pela parede de rocha. Os dois são bate-voltas a pé, e os dois recompensam quem sai cedo enquanto há luz.',
      seasonSummer: 'Sem neve, o mesmo cânion vira uma trilha por um vale de falha íngreme e arborizado, e o Riisitunturi se abre como uma caminhada de monte mais fácil, com vistas longas sobre os lagos. A Pentik, fábrica de cerâmica mais ao norte do mundo, mantém galerias e loja de fábrica abertas o ano inteiro e preenche as horas quando o tempo vira.',
      planTitle: 'Planejando uma viagem a Posio',
      planGetting: 'Você precisa de carro. Posio fica a cerca de duas horas de Rovaniemi e uma de Ruka, e encaixa naturalmente como bate-volta a partir de qualquer uma das duas, mais do que como base própria. Aqui não existe a rede de transfers que há nas estações de esqui.',
      planStay: 'Trate Posio como o dia calmo dentro de uma viagem maior pela Lapônia: um parque nacional, um cânion e a fábrica de cerâmica preenchem o dia com folga. Fotógrafos devem vir entre janeiro e março pelas árvores carregadas de neve. As trilhas são sinalizadas, mas os serviços são escassos, então leve comida e água.',
    },
    tornio: {
      seasonsTitle: 'Tornio, Haparanda e Kemi estação por estação',
      seasonWinter: 'Aqui o inverno constrói em vez de apenas cobrir. O parque de neve da área do SnowCastle de Kemi é erguido do zero todo inverno, e o quebra-gelo Sampo sai pelo golfo de Bótnia congelado e deixa os passageiros boiarem de macacão de sobrevivência entre as placas de gelo. Nenhum dos dois existe no verão, o que faz deste o único destino da Lapônia cujas atrações principais são estritamente sazonais.',
      seasonSummer: 'O verão é do rio. O Tornionjoki é o maior rio de salmão de curso livre da Europa, e nas corredeiras de Kukkolankoski a pesca tradicional com puçá continua acontecendo todo verão. O Green Zone Golf manda você de um lado a outro da fronteira: quatro trocas de país e de fuso horário em uma volta, o que só funciona com o chão livre de neve.',
      planTitle: 'Planejando uma viagem a Tornio',
      planGetting: 'O aeroporto de Kemi fica a um quarto de hora de Tornio, e Kemi em si a uns vinte e cinco minutos, então as duas cidades funcionam como uma viagem só. Tornio e Haparanda são uma cidade em dois países: a fronteira passa no meio da rua de comércio e se atravessa a pé.',
      planStay: 'É o destino da Lapônia mais fácil de combinar com um dia de compras, com a IKEA Haparanda logo ao lado da travessia e preços que vale a pena comparar dos dois lados. Uma ou duas noites bastam no inverno para o quebra-gelo e o SnowCastle, ou no verão para o rio e o campo de golfe.',
    },
    'pyha-luosto': {
      seasonsTitle: 'Pyhä-Luosto estação por estação',
      seasonWinter: 'Duas vilas de monte ocupam as pontas de uma cadeia antiga, com o parque nacional no meio. Pyhä tem o esqui mais íngreme, incluindo a Huttu-Ukko, pista de bumps com passado de Copa do Mundo, além de terreno suave e filas curtas para famílias. Em Luosto, um trem da neve aquecido leva os visitantes ao Lampivaara e à mina de ametista durante os meses escuros.',
      seasonSummer: 'Sem neve, o parque é destino de caminhada: passarelas pela floresta antiga e o Isokuru, a garganta mais profunda da Finlândia com cerca de 220 metros, além de vistas abertas ao longo da cadeia de montes mais antiga da Lapônia. A mina de ametista segue aberta e é a única mina ativa da Europa onde o visitante pode cavar e ficar com uma pedra.',
      planTitle: 'Planejando uma viagem a Pyhä-Luosto',
      planGetting: 'O aeroporto mais próximo é Rovaniemi, a cerca de uma hora e meia de estrada. Pyhä e Luosto são vilas separadas, a meia hora uma da outra, ligadas pelo parque e não por uma rua: decida onde vai ficar antes de reservar.',
      planStay: 'Famílias costumam escolher Pyhä pelo terreno servido por teleférico e pelas filas curtas; quem caminha e quem cava ametista se instala em Luosto. Duas ou três noites cobrem um dia de pista, a mina e uma caminhada mais longa parque adentro. A Metsähallitus cuida das trilhas, e as rotas sinalizadas começam direto nas duas vilas.',
    },
    kemijarvi: {
      seasonsTitle: 'Kemijärvi estação por estação',
      seasonWinter: 'A cidade fica sobre o próprio lago, que congela e vira área de pesca no gelo a poucos passos do centro. O monte de esqui Suomu fica a uns quarenta minutos, as operadoras de husky oferecem safáris que você mesmo conduz em vez de passeios como passageiro, e na margem de Uitonniemi a pequena vila do Papai Noel junta um pequeno hotel de troncos a encontros com o Papai Noel e saídas de aurora.',
      seasonSummer: 'Nos meses de luz são as esculturas o motivo para desacelerar: Kemijärvi sedia desde 1985 uma semana internacional de escultura em madeira, e as peças grandes ficam nas ruas o ano inteiro. O lago abre para barcos e pesca, e a estrada calma do leste rumo ao norte faz da cidade uma primeira parada natural.',
      planTitle: 'Planejando uma viagem a Kemijärvi',
      planGetting: 'É aqui que o Santa Claus Express termina o trajeto: uma partida por dia segue além de Rovaniemi, então dá para dormir no trem desde Helsinque e descer à beira do lago. De carro, é cerca de uma hora a partir de Rovaniemi. Até Pyhä são 50 quilômetros.',
      planStay: 'Kemijärvi combina com quem viaja de trem e com quem quer a Lapônia sem a lotação das estações. Funciona como base tranquila para a Lapônia oriental, com Pyhä e Suomu a curta distância de carro. Uma ou duas noites costumam bastar, a menos que você a use como porta de entrada para a rota leste, mais silenciosa.',
    },
  },

  categories: {
    adventure: {
      coversTitle: 'O que aventura ártica significa aqui',
      covers: 'Na Lapônia a aventura é quase sempre motorizada ou presa ao gelo: safáris guiados de snowmobile, de duas horas a um dia inteiro de natureza, kart no gelo de um lago congelado, escalada nas cachoeiras congeladas do cânion de Korouoma, rafting no rio Kitka e uma noite em hotel de neve. O cruzeiro de quebra-gelo saindo de Kemi também entra aqui.',
      whenToGo: 'A maior parte funciona de novembro a março, quando os lagos aguentam peso e a camada de neve é funda o bastante para um safári sair da malha viária. O rafting é a exceção e vai da primavera ao outono. Hotéis de neve e tudo que é construído em gelo derretem, então só existem na metade do ano correspondente ao inverno.',
      chooseTitle: 'Escolhendo um passeio de aventura',
      choosing: 'A decisão principal é a duração. Saídas curtas em grupo cabem em meio dia e em grupos mistos; expedições de um dia cobrem muito mais terreno e em geral exigem carteira de motorista para o snowmobile. O kart no gelo e os combos para famílias aceitam passageiros jovens demais para dirigir. A escalada no gelo é guiada e o equipamento está incluso, mas exige mais de você do que um safári.',
      bring: 'Para snowmobile e atividades no gelo as operadoras fornecem macacão térmico, botas, luvas e capacete, então leve camadas em vez de volume: roupa de baixo de lã ou sintética, uma camada intermediária quente e um gorro que caiba sob o capacete. Leve sua carteira se pretende dirigir, e mantenha o celular num bolso que fique aquecido.',
    },
    animals: {
      coversTitle: 'Encontrar os animais do Ártico',
      covers: 'Entram aqui os trenós de huskies e as visitas a canis, as fazendas de renas e os passeios de trenó, a observação de ursos-pardos selvagens a partir de esconderijos nas florestas a leste de Kuusamo, e o parque de fauna de Ranua, onde ursos-polares vivem no zoológico mais ao norte do mundo. As visitas a criadores de renas sámi em Inari e o Samiland em Levi ficam na fronteira com a categoria de cultura.',
      whenToGo: 'Trenó precisa de neve, então as saídas com huskies e renas vão mais ou menos de novembro a abril. Os canis seguem abertos no verão para visitas e encontros com filhotes, só que sem trenó. Com os ursos é o contrário: os esconderijos funcionam nos meses de luz, da primavera ao começo do outono, quando os ursos estão ativos e as noites são claras o bastante.',
      chooseTitle: 'Escolhendo uma experiência com animais',
      choosing: 'Decida primeiro se quer conduzir ou ir de passageiro. Nos safáris que você mesmo conduz, fica em pé nos patins com a sua própria matilha, normalmente em dupla revezando; os passeios como passageiro e as visitas a fazendas combinam com crianças pequenas e com quem prefere tempo com os cães a quilômetros rodados. O trenó de renas é lento por natureza, e é exatamente esse o ponto.',
      bring: 'Fazendas e canis fornecem os macacões para o trenó. Leve luvas com as quais consiga trabalhar, porque vai manusear rédeas e câmera no frio. Um esconderijo de urso é espera dentro de um abrigo fixo, então leve mais isolamento do que a caminhada até lá sugere, além de algo silencioso para passar o tempo. Flash é proibido em todos os esconderijos.',
    },
    'northern-lights': {
      coversTitle: 'Como funciona a caçada de auroras na Lapônia',
      covers: 'Aqui os passeios de aurora são caçadas, não mirantes: o guia acompanha a previsão de nuvens e o índice de atividade e dirige até a brecha no céu que parecer melhor naquela noite. Os formatos variam mais do que os lugares: excursões de ônibus, noites de fotografia, caminhadas de raquete de neve e saídas de snowmobile que levam você a um lago congelado, longe de qualquer luz.',
      whenToGo: 'A temporada vai mais ou menos de setembro a abril e exige três coisas ao mesmo tempo: escuridão, céu limpo e atividade solar. O outono oferece água aberta para reflexos antes de os lagos congelarem; o auge do inverno dá as horas escuras mais longas. Uma única noite não garante nada, e esse é o argumento mais forte para reservar duas ou três tentativas.',
      chooseTitle: 'Escolhendo um passeio de aurora',
      choosing: 'Passeios de fotografia valem a pena se você quer imagens: o guia configura sua câmera e conhece os tempos de exposição. As excursões de ônibus cobrem mais terreno e dão a melhor chance por euro quando o tempo está instável. Raquete de neve e snowmobile trocam parte da mobilidade por um lugar melhor e mais silencioso. Destinos ao norte como Saariselkä e Inari têm céu mais escuro que as estações de esqui.',
      bring: 'Você vai ficar parado ao ar livre por horas, então se agasalhe muito mais do que para um dia ativo: macacão se a operadora fornecer, roupa de baixo de lã, dois pares de meias e aquecedores químicos. Tripé e baterias reservas importam mais do que uma câmera cara; o frio esvazia bateria rápido. Mantenha a lanterna branca apagada, ela arruína a visão noturna de todo mundo.',
    },
    'winter-sports': {
      coversTitle: 'Esqui e esportes de neve na Lapônia',
      covers: 'Seis montes neste guia têm teleféricos: Ounasvaara acima de Rovaniemi, Levi, Ylläs, Ruka, Pyhä e Suomu. Juntos cobrem tudo, da pista de iniciantes na cidade às descidas mais longas da Finlândia em Ylläs. Fora dos teleféricos, a categoria inclui esqui cross-country, raquete de neve em floresta antiga, fatbike e patinação.',
      whenToGo: 'A neve estocada permite que Ruka abra em outubro e esquie até maio, a temporada mais longa do país. A maioria das estações funciona de novembro ou dezembro a abril. O auge do inverno tem o clima, mas dias muito curtos; março e abril combinam cobertura completa de neve com luz do dia de verdade, e é então que a rede de cross-country fica no seu melhor.',
      chooseTitle: 'Escolhendo uma estação',
      choosing: 'Levi é a maior, tem o transfer mais curto do aeroporto e o après-ski mais movimentado. Ylläs tem as descidas mais longas e a maior rede de cross-country, com muito menos barulho. Ruka tem a temporada mais longa e hospedagem ao pé da pista. Pyhä serve tanto a famílias quanto a esquiadores de bumps, Ounasvaara serve para uma noite após um dia em Rovaniemi, e Suomu é a opção silenciosa.',
      bring: 'Há aluguel em todas as estações e ele se resolve mais fácil na chegada do que os passeios. Leve óculos de proteção e algo para cobrir o rosto: o vento no monte aberto faz mais estrago do que o termômetro sugere. Quem for de cross-country deve checar o boletim das pistas antes de escolher um lado do monte, porque a preparação varia entre as vilas.',
    },
    wellness: {
      coversTitle: 'Sauna e bem-estar ártico',
      covers: 'Bem-estar na Lapônia significa calor e frio em sequência, não salas de tratamento. A sauna de fumaça tradicional de Kiilopää é aquecida por horas e arejada antes do uso, o que dá um calor macio que um forno elétrico não produz, e termina com um buraco no gelo. A flutuação ártica coloca você num macacão de sobrevivência e deixa você boiar.',
      whenToGo: 'As duas funcionam o ano inteiro, mas são experiências de inverno por natureza: o banho no gelo precisa de um buraco aberto num lago congelado, e a flutuação funciona melhor quando há gelo em volta. Uma sauna de fumaça leva horas para aquecer, então funciona em horários fixos e não sob demanda, e é o horário da tarde que vale reservar.',
      chooseTitle: 'Escolhendo uma experiência de sauna',
      choosing: 'A sauna de fumaça é a versão tradicional e aquela em torno da qual vale planejar um dia. O banho no gelo é opcional em todo lugar que o oferece, e ninguém vai te empurrar. A flutuação combina com quem quer a água fria sem nadar, porque o macacão mantém você seco e quente o suficiente para ficar um tempo.',
      bring: 'Leve traje de banho e toalha; a maioria dos lugares aluga os dois se você esquecer. Na Finlândia costuma-se entrar sem traje de banho nos horários separados por sexo e com traje nos horários públicos mistos, então pergunte ao chegar. Reserve tempo para esfriar direito em vez de emendar na próxima atividade.',
    },
    culture: {
      coversTitle: 'Herança sámi, Papai Noel e a narrativa ártica',
      covers: 'Dois fios atravessam esta categoria. Um é a cultura sámi, mais bem conhecida no Siida, em Inari, museu sámi e centro de natureza na sede do Parlamento Sámi da Finlândia, e no Samiland, em Levi. O outro é a narrativa ártica que a região conta sobre si mesma: a Vila do Papai Noel e o SantaPark em Rovaniemi, o Arktikum à beira do rio e os espaços construídos em gelo.',
      whenToGo: 'Os museus abrem o ano inteiro e aproveitam melhor que qualquer coisa um dia de tempo ruim ou uma tarde curta de inverno. Hotéis de gelo e vilas de neve só existem no frio, mais ou menos de dezembro a abril. O garimpo em Tankavaara e a mina de ametista do Lampivaara funcionam nas duas estações, com um trem da neve aquecido até a mina no inverno.',
      chooseTitle: 'Escolhendo uma visita cultural',
      choosing: 'Se quer cultura viva e não um espetáculo, comece pelo Siida e por uma visita a criadores de renas em atividade em Inari, não por um show. Se viaja com crianças, a Vila do Papai Noel e o SantaPark foram feitos exatamente para elas. O Arktikum tem a exposição sobre auroras mais sólida do país e sustenta meio dia sob teto.',
      bring: 'Museus pedem apenas tempo, e o Siida merece pelo menos três horas. Em hotéis de gelo e vilas de neve faz frio abaixo de zero também por dentro, então mantenha as camadas externas durante a visita. Em Tankavaara tudo o que você bateia é seu, e no Lampivaara pode cavar e ficar com uma ametista.',
    },
    summer: {
      coversTitle: 'A Lapônia nos meses de luz',
      covers: 'O verão transforma a mesma paisagem em terreno de caminhada, remo e bicicleta. Há rotas de parque nacional em Pallas-Yllästunturi, Urho Kekkonen, Oulanka e Pyhä-Luosto, de circuitos curtos sinalizados aos 82 quilômetros do Karhunkierros. Na água há cruzeiros de lago e caiaque sob o sol da meia-noite em Inari; sobre rodas, o Levi Bike Park. Golfe sob um sol que não se põe é a esquisitice local.',
      whenToGo: 'Junho a agosto é o núcleo, e no solstício o sol fica acima do horizonte 24 horas nesta latitude. No fim de julho chegam as amoras-árticas e os primeiros cogumelos. Setembro e outubro são as semanas do ruska, quando os montes mudam de cor e as primeiras auroras voltam, com as trilhas quase vazias.',
      chooseTitle: 'Escolhendo uma viagem de verão',
      choosing: 'Decida se quer uma base ou uma rota. Caminhadas de um dia a partir de uma vila servem à maioria e não exigem permissão; as trilhas longas exigem planejamento, e as cabanas ao longo delas são gratuitas e por ordem de chegada. Caiaque e rafting são guiados, o que é a forma sensata de conhecer um rio do norte pela primeira vez.',
      bring: 'Os mosquitos atingem o pico no meio do verão, então repelente e véu de cabeça não são opcionais na turfeira. Leve uma boa máscara de dormir se a luz constante te incomoda. Calçado que aguente passarela molhada importa mais do que solado pesado de montanha, e toda rota sinalizada é percorrida sob o direito de acesso à natureza, então não é preciso permissão.',
    },
    food: {
      coversTitle: 'Comer no norte',
      covers: 'Aqui a comida está ligada ao fogo e à estação. Uma kota ou kammi é uma cabana cônica com fogueira aberta no meio, e a refeição é feita na sua frente: rena, peixe, pão achatado, amoras-árticas. Fora da mesa há a coleta de frutas silvestres e cogumelos, e em Kukkolankoski o coregone ainda é pescado com o puçá tradicional.',
      whenToGo: 'Os jantares de fogueira funcionam o ano inteiro e rendem mais na metade escura do ano, quando o fogo é a única luz do ambiente. A coleta pertence ao fim do verão e ao outono: frutas a partir de julho, cogumelos a partir de agosto. A temporada do coregone em Kukkolankoski é de verão e segue a subida do peixe no rio.',
      chooseTitle: 'Escolhendo uma experiência gastronômica',
      choosing: 'Um jantar na kota costuma ser menu fixo com um guia que explica o que você está comendo e de onde veio, então funciona como uma noite e não como uma refeição. Os passeios de coleta são conduzidos por alguém capaz de dizer o que é seguro, e é justamente esse o ponto. Ambos servem a grupos mistos e não exigem preparo físico.',
      bring: 'Informe alergias e restrições na reserva, porque são menus fixos feitos no fogo e não uma carta. Vista-se para ficar sentado ao ar livre: numa kota faz calor perto da fogueira e frio junto à parede. O direito de acesso à natureza permite colher frutas silvestres e cogumelos em qualquer lugar por onde você possa circular legalmente.',
    },
    fishing: {
      coversTitle: 'Pescar em três tipos de água',
      covers: 'Neste canto do Ártico se cruzam três pescarias diferentes: a pesca no gelo em lagos congelados, os rios de salmão de verão com licença, como o Tornionjoki, e os safáris de caranguejo-real do outro lado da fronteira norueguesa, saindo de Kirkenes. Têm temporadas, regras e licenças distintas, e o site mantém uma página de pesca própria com as regras vigentes e os links oficiais de licença.',
      whenToGo: 'A pesca no gelo cobre os meses congelados, mais ou menos de dezembro a abril, e é a mais fácil de organizar em cima da hora. A temporada do salmão é de verão e é rigidamente regulada, com datas definidas ano a ano. Os safáris de caranguejo-real funcionam nas duas estações: de snowmobile ou ônibus sobre o gelo no inverno, de bote inflável no verão.',
      chooseTitle: 'Escolhendo um passeio de pesca',
      choosing: 'A pesca no gelo guiada é a opção sem esforço: o guia perfura os buracos, leva o equipamento e normalmente serve comida junto ao fogo. Pescar salmão no Tornionjoki é coisa séria e exige a licença correta antes do primeiro lance. Os passeios de caranguejo-real são tanto excursão de barco ou snowmobile quanto pescaria, e terminam com a captura no prato.',
      bring: 'As regras mudam de ano para ano e variam conforme a água, então confira as condições oficiais da licença antes de pescar, não depois. Os passeios guiados incluem equipamento; pescar no gelo por conta própria exige vara própria, perfurador e senso da espessura do gelo. Pesque e solte é o padrão em muitos rios daqui, e existe para manter os estoques vivos.',
    },
  },

  indexes: {
    destList: {
      leadTitle: 'No que os dez destinos se diferenciam',
      lead: 'A Lapônia não é um lugar só com uma estação só. Rovaniemi tem o aeroporto, o trem noturno e a maior variedade de passeios. Levi e Ruka são vilas de esqui que se atravessam a pé. Ylläs e Saariselkä trocam vida noturna por céu escuro e o silêncio do parque nacional. Em Inari a cultura sámi é encontrada em vez de encenada, e Posio, Tornio e Kemijärvi são os destinos calmos.',
      note: 'Aqui em cima as distâncias são reais: dois destinos que parecem próximos no mapa podem estar a duas horas de carro. Para uma viagem curta, escolha uma base só e acrescente uma segunda apenas se tiver uma semana. Cada página abaixo lista as operadoras que atuam naquele destino, o que funciona em cada estação e como chegar.',
    },
    catList: {
      leadTitle: 'Escolher pela atividade em vez do lugar',
      lead: 'Se você já sabe o que quer fazer, comece por aqui em vez de pelo mapa. Cada página de categoria explica o que aquela atividade envolve de fato na Lapônia, em que meses ela funciona, como os formatos se diferenciam entre si e o que vestir ou levar. A maioria das categorias aparece em vários destinos, então a escolha da atividade costuma vir antes da escolha da cidade.',
      note: 'A estação é a restrição dura. Tudo que acontece na neve ou no gelo precisa da metade fria do ano, mais ou menos de novembro a abril. Caminhada, remo e sol da meia-noite pertencem a junho-agosto. A aurora precisa de escuridão e vai de setembro a abril, aproximadamente. A observação de ursos é o inverso do trenó, e vale planejar uma viagem em torno de qualquer uma das duas.',
    },
  },
};

export default guides;
