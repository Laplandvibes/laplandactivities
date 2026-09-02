import { Activity, Snowflake, FileCheck, ArrowRight } from 'lucide-react'
import { useLang, pick } from '../i18n/useLang'

/**
 * Matkavakuutus ja Lapin talviaktiviteetit — SISÄLTÖÄ, EI MAINOSKORTTI.
 *
 * 🔴🔴 MIKSI TÄMÄ EI OLE BRÄNDIKORTTI, vaikka EKTA sen SALLISI.
 * EKTA on poikkeus verkoston kumppaneista: sillä EI ole AirHelpin kaltaista
 * §6-kieltoa logon yhdistämisestä muuhun grafiikkaan, ja se sallii kaikki
 * kanavat. Brändikortti olisi siis juridisesti mahdollinen.
 * Se jätettiin silti tekemättä MITTAUKSEN takia: D1-klikkiloki 30 pv (22.8.)
 * antoi brändätyille "Mainos"-yksiköille 15 klikkiä koko verkostossa ja
 * sisältökorteille 485. Sama sivusto ja sama liikenne (laplandstays.com):
 * listauskortti 155, brändikortti 1. Muoto on muuttuja, ei kumppani.
 *
 * 🔴 Tämä korvaa `PartnerAd`in `ekta`-kokoonpanon, joka oli kirjoitettu
 * valmiiksi mutta jota EI renderöity yhdelläkään sivulla — täysi copy 12
 * kielellä, väri, linkkirakentaja, eikä yhtään kutsupaikkaa. Löytyi
 * mainosrekisteriä koostaessa 22.8.
 *
 * 🔵 23.8. korjattu: ensimmäinen versio sanoi ettei moottorikelkan tasoa saatu
 * varmistettua ja jätti sen mainitsematta. Se OLI löydettävissä — heidän oman
 * ostovalitsimensa "Active rest" -listasta, ei markkinointilohkosta. Kelkka
 * on nyt nimetty, koska se on mitattu.
 *
 * 🔑 JOKAINEN VÄITE ON LAINATTU EKTA:N OMALTA SIVULTA (luettu 2026-08-23,
 * ektatraveling.com). Älä lisää tähän tasokohtaista väitettä jota et ole
 * lukenut sieltä itse. Verifioidut sitaatit:
 *   Calm rest   — the entry tier in their own BUY selector: "Running and
 *                  walking; Fitness, yoga and pilates; Aerobics…; Golf;
 *                  Curling; Fishing…; Snorkeling; Organized animal riding
 *                  tours; Billiards and bowling; Darts; Swimming"
 *   Active rest — "Includes 'Calm rest'… The activities covered are: …
 *                  Ice skating…, sledding…, tubing, snow skates; … Travel as
 *                  a driver or passenger on ATVs, scooters, mopeds, scooters
 *                  and motorcycles, SNOWMOBILES; …" and, in their marketing
 *                  copy, "snowboarding, downhill skiing on marked tracks"
 *   Extreme rest— "Suitable for extreme sports lover: freeride, kiting,
 *                  rafting, base jumping…"
 *
 * 🔵 Their marketing block calls the entry tier "Quiet rest" and the buy
 * selector calls it "Calm rest". The buyer sees "Calm rest", so that is the
 * name used here.
 *
 * Osion arvo lukijalle on se mitä moni ei tarkista: halvin taso kattaa
 * kävelyn ja uinnin, ei rinnettä. Se on totta ja toimintakelpoista ilman
 * että kenenkään tuotteesta väitetään mitään lukematonta.
 *
 * 🔗 Sama osio on neljällä sivustolla: visit /practical-info, skiresorts
 * /extreme, activities /categories, snowmobile /rules (i18next-JSON, ei
 * pick()). Pidä nelikko synkassa: jos EKTA:n tasokuvaus muuttuu, se
 * muuttuu kaikissa.
 * Linkki rakennetaan tässä suoraan `/go/ekta`-reitille eikä sivuston omalla
 * kirjastolla — visitillä EKTA puuttui `TP_ROUTE`-kartasta, jolloin linkki
 * ohitti Workerin ja klikki jäi D1-lokin ulkopuolelle (korjattu 23.8.).
 * Suora reitti ei voi pudota siihen ansaan.
 */
const GO = 'https://go.laplandvibes.com/go/ekta'
const DEST = 'https://ektatraveling.com/'

export default function TravelInsuranceNote({
  sid = 'activities_insurance',
  className = '',
}: {
  sid?: string
  className?: string
}) {
  const lang = useLang()
  const href = `${GO}?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(DEST)}`

  const eyebrow = pick(lang,
    'Before you book activities', 'Ennen kuin varaat aktiviteetteja', 'Bevor Sie Aktivitäten buchen',
    'アクティビティを予約する前に', 'Antes de reservar actividades', 'Antes de reservar atividades',
    '预订活动之前', '액티비티를 예약하기 전에', 'Avant de réserver des activités',
    'Prima di prenotare le attività', 'Voordat u activiteiten boekt', 'Innan du bokar aktiviteter')

  const h2 = pick(lang,
    'Check what your travel insurance actually covers',
    'Tarkista mitä matkavakuutuksesi oikeasti kattaa',
    'Prüfen Sie, was Ihre Reiseversicherung wirklich abdeckt',
    '旅行保険が実際に何をカバーするか確認を',
    'Compruebe qué cubre realmente su seguro de viaje',
    'Confira o que o seu seguro de viagem realmente cobre',
    '确认你的旅行保险到底保什么',
    '여행자 보험이 실제로 무엇을 보장하는지 확인하세요',
    'Vérifiez ce que votre assurance voyage couvre vraiment',
    'Controlli cosa copre davvero la Sua assicurazione di viaggio',
    'Controleer wat uw reisverzekering echt dekt',
    'Kolla vad din reseförsäkring faktiskt täcker')

  const lead = pick(lang,
    'A Lapland winter trip is mostly activities, and activity cover is the part policies differ on most. Insurers sell it in tiers, and the cheapest tier is usually not the one you need here.',
    'Lapin talvireissu on enimmäkseen aktiviteetteja, ja juuri aktiviteettiturva on se kohta jossa vakuutukset eroavat eniten. Vakuutusyhtiöt myyvät sen tasoina, ja halvin taso ei yleensä ole se jota täällä tarvitset.',
    'Eine Winterreise nach Lappland besteht vor allem aus Aktivitäten, und genau beim Aktivitätsschutz unterscheiden sich Policen am stärksten. Versicherer verkaufen ihn in Stufen, und die günstigste Stufe ist hier meist nicht die richtige.',
    'ラップランドの冬旅はほとんどがアクティビティで、保険はまさにその補償範囲で差が出ます。保険会社は段階別に販売しており、最安の段階はここでは足りないことが多いです。',
    'Un viaje de invierno a Laponia es sobre todo actividades, y la cobertura de actividades es donde más difieren las pólizas. Las aseguradoras la venden por niveles, y el más barato no suele ser el que necesita aquí.',
    'Uma viagem de inverno à Lapônia é sobretudo atividades, e a cobertura de atividades é onde as apólices mais diferem. As seguradoras vendem por níveis, e o mais barato normalmente não é o que você precisa aqui.',
    '拉普兰的冬季行程几乎全是活动,而活动保障正是各家保单差异最大的地方。保险公司按等级出售,最便宜的那一档在这里通常不够用。',
    '라플란드 겨울 여행은 대부분 액티비티이고, 보험은 바로 그 액티비티 보장에서 가장 크게 갈립니다. 보험사는 등급별로 판매하며, 가장 저렴한 등급은 이곳에서 대개 충분하지 않습니다.',
    'Un voyage d’hiver en Laponie, ce sont surtout des activités, et c’est précisément sur la couverture des activités que les contrats diffèrent le plus. Les assureurs la vendent par paliers, et le moins cher n’est en général pas celui qu’il vous faut ici.',
    'Un viaggio invernale in Lapponia è soprattutto attività, e la copertura delle attività è proprio dove le polizze differiscono di più. Le assicurazioni la vendono a livelli, e il più economico di solito non è quello che serve qui.',
    'Een winterreis naar Lapland bestaat vooral uit activiteiten, en juist bij activiteitendekking verschillen polissen het meest. Verzekeraars verkopen die in niveaus, en het goedkoopste niveau is hier meestal niet het juiste.',
    'En vinterresa till Lappland är mest aktiviteter, och det är just aktivitetsskyddet som skiljer försäkringar mest åt. Försäkringsbolagen säljer det i nivåer, och den billigaste nivån är sällan den du behöver här.')

  const cards = [
    {
      icon: Activity,
      bar: 'bg-aurora-green',
      accent: 'text-aurora-green',
      t: pick(lang,
        'The cheapest tier stops at golf and swimming', 'Halvin taso loppuu golfiin ja uintiin',
        'Die günstigste Stufe endet bei Golf und Schwimmen', '最安の段階はゴルフと水泳まで',
        'El nivel más barato se queda en golf y natación', 'O nível mais barato para no golfe e na natação',
        '最便宜的一档止步于高尔夫和游泳', '가장 저렴한 등급은 골프와 수영까지',
        'Le palier le moins cher s’arrête au golf et à la natation', 'Il livello più basso si ferma a golf e nuoto',
        'Het goedkoopste niveau stopt bij golf en zwemmen', 'Billigaste nivån slutar vid golf och simning'),
      b: pick(lang,
        'EKTA sells activity cover in tiers, and their entry tier "Calm rest" lists exactly what it covers: running and walking, fitness, yoga, golf, curling, fishing, snorkelling, swimming. Nothing on that list resembles a Lapland winter week.',
        'EKTA myy aktiviteettiturvan tasoina, ja sen alin taso "Calm rest" luettelee tarkalleen mitä se kattaa: juoksu ja kävely, kuntoilu, jooga, golf, curling, kalastus, snorklaus, uinti. Mikään listalla ei muistuta Lapin talviviikkoa.',
        'EKTA verkauft Aktivitätsschutz in Stufen, und die Einstiegsstufe "Calm rest" listet genau auf, was sie abdeckt: Laufen und Gehen, Fitness, Yoga, Golf, Curling, Angeln, Schnorcheln, Schwimmen. Nichts davon ähnelt einer Winterwoche in Lappland.',
        'EKTAはアクティビティ補償を段階で販売しており、最下位の「Calm rest」は対象を明記しています。ランニングと歩行、フィットネス、ヨガ、ゴルフ、カーリング、釣り、シュノーケリング、水泳。ラップランドの冬の一週間に当たるものは一つもありません。',
        'EKTA vende la cobertura de actividades por niveles, y su nivel inicial "Calm rest" enumera justo lo que cubre: correr y caminar, fitness, yoga, golf, curling, pesca, snorkel, natación. Nada de esa lista se parece a una semana de invierno en Laponia.',
        'A EKTA vende a cobertura de atividades por níveis, e o inicial "Calm rest" lista exatamente o que cobre: corrida e caminhada, fitness, ioga, golfe, curling, pesca, mergulho com snorkel, natação. Nada nessa lista lembra uma semana de inverno na Lapônia.',
        'EKTA 按等级出售活动保障,其入门档 "Calm rest" 明确列出保什么:跑步与步行、健身、瑜伽、高尔夫、冰壶、钓鱼、浮潜、游泳。这份清单里没有一项像拉普兰的冬季一周。',
        'EKTA는 액티비티 보장을 등급으로 판매하며, 최저 등급 "Calm rest"는 무엇을 보장하는지 그대로 나열합니다. 달리기와 걷기, 피트니스, 요가, 골프, 컬링, 낚시, 스노클링, 수영. 그중 라플란드의 겨울 한 주에 해당하는 것은 없습니다.',
        'EKTA vend la couverture des activités par paliers, et son palier d’entrée « Calm rest » énumère précisément ce qu’il couvre : course et marche, fitness, yoga, golf, curling, pêche, snorkeling, natation. Rien là-dedans ne ressemble à une semaine d’hiver en Laponie.',
        'EKTA vende la copertura attività a livelli, e il livello base "Calm rest" elenca esattamente cosa copre: corsa e camminata, fitness, yoga, golf, curling, pesca, snorkeling, nuoto. Niente in quella lista somiglia a una settimana invernale in Lapponia.',
        'EKTA verkoopt activiteitendekking in niveaus, en het instapniveau "Calm rest" somt precies op wat het dekt: hardlopen en wandelen, fitness, yoga, golf, curling, vissen, snorkelen, zwemmen. Niets op die lijst lijkt op een winterweek in Lapland.',
        'EKTA säljer aktivitetsskydd i nivåer, och ingångsnivån "Calm rest" räknar upp exakt vad den täcker: löpning och promenader, träning, yoga, golf, curling, fiske, snorkling, simning. Inget på den listan liknar en vintervecka i Lappland.'),
    },
    {
      icon: Snowflake,
      bar: 'bg-arctic-cyan',
      accent: 'text-arctic-cyan',
      t: pick(lang,
        'Snowmobile and skiing are the next tier up', 'Kelkka ja laskettelu ovat tasoa ylempänä',
        'Schneemobil und Ski sind die nächste Stufe', 'スノーモービルとスキーは一段上',
        'Moto de nieve y esquí están un nivel más arriba', 'Snowmobile e esqui estão um nível acima',
        '雪地摩托与滑雪在上一档', '스노모빌과 스키는 한 등급 위',
        'Motoneige et ski sont au palier suivant', 'Motoslitta e sci sono al livello successivo',
        'Sneeuwscooter en skiën zitten een niveau hoger', 'Skoter och skidåkning ligger en nivå upp'),
      b: pick(lang,
        'Their middle tier, "Active rest", is the one whose list names "travel as a driver or passenger on ATVs… and snowmobiles", and in their marketing copy "snowboarding, downhill skiing on marked tracks". Off marked tracks is a tier higher again. Whichever insurer you use, this is the line to read before you pay.',
        'Heidän keskitasonsa "Active rest" on se jonka listassa lukee "matkustaminen kuljettajana tai matkustajana mönkijöillä… ja moottorikelkoilla", ja markkinointitekstissä "lumilautailu ja laskettelu merkityillä rinteillä". Merkittyjen rinteiden ulkopuolella ollaan taas tasoa ylempänä. Käytit mitä vakuutusyhtiötä tahansa, tämä on se rivi joka luetaan ennen maksamista.',
        'Ihre mittlere Stufe "Active rest" nennt in ihrer Liste "Fahrt als Fahrer oder Beifahrer auf ATVs… und Schneemobilen", im Marketingtext "Snowboarden, Abfahrtsski auf markierten Pisten". Abseits markierter Pisten ist es wieder eine Stufe höher. Bei welchem Versicherer auch immer: Das ist die Zeile, die man vor dem Bezahlen liest.',
        '中位の「Active rest」のリストには「ATV…およびスノーモービルの運転者または同乗者としての移動」が、マーケティング文には「スノーボード、圧雪コースでのダウンヒルスキー」が明記されています。コース外はさらに一段上です。どの保険会社でも、支払う前に読むべきはこの行です。',
        'Su nivel intermedio, "Active rest", es el que en su lista menciona "viajar como conductor o pasajero en quads… y motos de nieve", y en su texto comercial "snowboard y esquí alpino en pistas señalizadas". Fuera de pista es un nivel más. Sea cual sea su aseguradora, esa es la línea que hay que leer antes de pagar.',
        'O nível intermediário, "Active rest", é o que na lista cita "viajar como condutor ou passageiro em quadriciclos… e snowmobiles", e no texto comercial "snowboard e esqui alpino em pistas demarcadas". Fora das pistas é um nível acima. Seja qual for a seguradora, essa é a linha para ler antes de pagar.',
        '中间档 "Active rest" 的清单里写明"作为驾驶员或乘客乘坐全地形车……以及雪地摩托",营销文案里则是"单板滑雪、在标记雪道上的高山滑雪"。离开标记雪道又高一档。无论用哪家保险,这一行都要在付款前读。',
        '중간 등급 "Active rest" 목록에는 "ATV… 및 스노모빌의 운전자 또는 동승자로서의 이동"이, 마케팅 문구에는 "스노보드, 정설된 슬로프에서의 다운힐 스키"가 명시돼 있습니다. 슬로프 밖은 다시 한 등급 위입니다. 어느 보험사를 쓰든 결제 전에 읽어야 할 줄입니다.',
        'Leur palier intermédiaire, « Active rest », est celui dont la liste cite « voyager comme conducteur ou passager sur des quads… et des motoneiges », et dont le texte commercial cite « snowboard, ski alpin sur pistes balisées ». Hors pistes, c’est encore un palier au-dessus. Quel que soit l’assureur, c’est la ligne à lire avant de payer.',
        'Il loro livello intermedio, "Active rest", è quello la cui lista cita "viaggiare come conducente o passeggero su ATV… e motoslitte", e nel testo commerciale "snowboard, sci alpino su piste segnalate". Fuori pista è un livello ancora sopra. Con qualunque assicuratore, è la riga da leggere prima di pagare.',
        'Hun middenniveau "Active rest" is degene waarvan de lijst "reizen als bestuurder of passagier op quads… en sneeuwscooters" noemt, en in de marketingtekst "snowboarden, alpineskiën op gemarkeerde pistes". Buiten de piste zit u weer een niveau hoger. Bij welke verzekeraar dan ook: dit is de regel die u leest vóór u betaalt.',
        'Deras mellannivå "Active rest" är den vars lista nämner "resa som förare eller passagerare på fyrhjulingar… och snöskotrar", och i marknadstexten "snowboard, utförsåkning i markerade backar". Utanför markerade backar är det ännu en nivå upp. Oavsett försäkringsbolag är det här raden man läser innan man betalar.'),
    },
    {
      icon: FileCheck,
      bar: 'bg-amber-400',
      accent: 'text-amber-300',
      t: pick(lang,
        'The operator will not insure you', 'Ohjelmapalvelu ei vakuuta sinua', 'Der Veranstalter versichert Sie nicht',
        '主催者はあなたを保険に入れてくれない', 'El operador no le asegura', 'A operadora não segura você',
        '活动商不会为你投保', '운영업체가 당신을 보험에 넣어주지 않습니다',
        'Le prestataire ne vous assure pas', 'L’operatore non La assicura',
        'De aanbieder verzekert u niet', 'Arrangören försäkrar inte dig'),
      b: pick(lang,
        'A safari company insures its own liability, not your medical bill. If you break a wrist on a snowmobile, the cost of treatment and getting home is yours or your insurer\'s. That is the gap worth closing before you leave, not at the airport.',
        'Safariyritys vakuuttaa oman vastuunsa, ei sinun hoitolaskuasi. Jos ranne murtuu moottorikelkalla, hoidon ja kotiinpaluun kustannus on sinun tai vakuutusyhtiösi. Se on se aukko joka kannattaa tukkia ennen lähtöä, ei lentokentällä.',
        'Ein Safari-Anbieter versichert seine eigene Haftung, nicht Ihre Arztrechnung. Wenn Sie sich auf dem Schneemobil das Handgelenk brechen, tragen Sie oder Ihr Versicherer Behandlung und Rücktransport. Diese Lücke schließt man vor der Abreise, nicht am Flughafen.',
        'サファリ会社が保険をかけるのは自社の賠償責任であって、あなたの医療費ではありません。スノーモービルで手首を折れば、治療と帰国の費用はあなたか保険会社の負担です。この穴は出発前に埋めるものです。',
        'Una empresa de safaris asegura su propia responsabilidad, no su factura médica. Si se rompe una muñeca en una moto de nieve, el tratamiento y la vuelta a casa los paga usted o su aseguradora. Ese hueco se cierra antes de salir, no en el aeropuerto.',
        'Uma empresa de safári segura a própria responsabilidade, não a sua conta médica. Se você quebrar o punho num snowmobile, o tratamento e a volta para casa são por sua conta ou da sua seguradora. Essa lacuna se fecha antes de viajar, não no aeroporto.',
        '活动公司投保的是自身责任,不是你的医疗账单。若你在雪地摩托上摔断手腕,治疗与回国的费用由你或你的保险承担。这个缺口要在出发前补上,而不是在机场。',
        '사파리 업체가 드는 보험은 자사의 배상책임이지 당신의 치료비가 아닙니다. 스노모빌에서 손목이 부러지면 치료와 귀국 비용은 당신 또는 당신의 보험사 몫입니다. 이 공백은 공항이 아니라 떠나기 전에 메우는 것입니다.',
        'Une société de safari assure sa propre responsabilité, pas votre facture médicale. Si vous vous cassez le poignet en motoneige, les soins et le rapatriement sont à votre charge ou à celle de votre assureur. Cette faille se comble avant le départ, pas à l’aéroport.',
        'Un’azienda di safari assicura la propria responsabilità, non il Suo conto medico. Se si rompe un polso in motoslitta, cure e rientro li paga Lei o la Sua assicurazione. Quel vuoto si chiude prima di partire, non in aeroporto.',
        'Een safaribedrijf verzekert zijn eigen aansprakelijkheid, niet uw doktersrekening. Breekt u een pols op een sneeuwscooter, dan zijn behandeling en thuiskomst voor u of uw verzekeraar. Dat gat dicht u vóór vertrek, niet op het vliegveld.',
        'Ett safariföretag försäkrar sitt eget ansvar, inte din vårdräkning. Bryter du handleden på en snöskoter står du eller ditt försäkringsbolag för vård och hemresa. Den luckan täpper man till före avresan, inte på flygplatsen.'),
    },
  ]

  const ctaLead = pick(lang,
    'If your existing policy stops at "light loads", EKTA is one insurer that sells the activity tiers separately and covers travellers from almost any country. Compare it against what you already have before buying anything twice.',
    'Jos nykyinen vakuutuksesi loppuu "kevyeen rasitukseen", EKTA on yksi yhtiö joka myy aktiviteettitasot erikseen ja vakuuttaa matkailijat lähes mistä tahansa maasta. Vertaa sitä siihen mitä sinulla jo on, ettet osta samaa kahdesti.',
    'Wenn Ihre bestehende Police bei "leichten Belastungen" endet: EKTA verkauft die Aktivitätsstufen einzeln und versichert Reisende aus fast jedem Land. Vergleichen Sie, bevor Sie doppelt kaufen.',
    '既存の保険が「軽い運動」までなら、EKTAはアクティビティ段階を個別に販売し、ほぼすべての国の旅行者を引き受ける会社の一つです。二重に買う前に手持ちの保険と比べてください。',
    'Si su póliza actual se queda en "cargas ligeras", EKTA es una aseguradora que vende los niveles de actividad por separado y cubre a viajeros de casi cualquier país. Compárela con lo que ya tiene antes de pagar dos veces.',
    'Se a sua apólice atual para em "cargas leves", a EKTA é uma seguradora que vende os níveis de atividade separadamente e cobre viajantes de quase qualquer país. Compare com o que já tem antes de pagar duas vezes.',
    '如果你现有的保单止步于"轻度活动",EKTA 是一家把活动等级单独出售、并承保几乎任何国家旅客的保险公司。在重复购买之前,先和你已有的对比一下。',
    '기존 보험이 "가벼운 활동"에서 멈춘다면, EKTA는 액티비티 등급을 따로 판매하고 거의 모든 국가의 여행자를 보장하는 보험사 중 하나입니다. 중복 구매 전에 이미 가진 것과 비교해 보세요.',
    'Si votre contrat actuel s’arrête aux « charges légères », EKTA vend les paliers d’activité séparément et assure des voyageurs de presque tous les pays. Comparez avec ce que vous avez déjà avant de payer deux fois.',
    'Se la Sua polizza attuale si ferma ai "carichi leggeri", EKTA è una compagnia che vende i livelli di attività separatamente e assicura viaggiatori da quasi ogni paese. La confronti con quello che ha già prima di pagare due volte.',
    'Als uw huidige polis stopt bij "lichte belasting": EKTA verkoopt de activiteitenniveaus apart en verzekert reizigers uit bijna elk land. Vergelijk het met wat u al hebt voordat u dubbel betaalt.',
    'Om din nuvarande försäkring slutar vid "lätta belastningar" säljer EKTA aktivitetsnivåerna separat och försäkrar resenärer från nästan alla länder. Jämför med det du redan har innan du betalar dubbelt.')

  const cta = pick(lang,
    'See EKTA\'s activity tiers', 'Katso EKTA:n aktiviteettitasot', 'EKTAs Aktivitätsstufen ansehen',
    'EKTAのアクティビティ段階を見る', 'Ver los niveles de actividad de EKTA', 'Ver os níveis de atividade da EKTA',
    '查看 EKTA 的活动等级', 'EKTA 액티비티 등급 보기', 'Voir les paliers d’activité d’EKTA',
    'Vedi i livelli attività di EKTA', 'Bekijk EKTA\'s activiteitenniveaus', 'Se EKTA:s aktivitetsnivåer')

  return (
    <section id="insurance" className={className} aria-label={h2}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vibe-pink mb-2">{eyebrow}</p>
      <h2 className="font-heading text-3xl text-snow mb-3">{h2}</h2>
      <p className="text-snow/80 leading-relaxed mb-6 max-w-3xl">{lead}</p>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <div key={c.t} className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 pt-6">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${c.bar}`} />
              <Icon className={`h-5 w-5 mb-3 ${c.accent}`} aria-hidden="true" />
              <h3 className="font-heading text-xl text-snow mb-2 leading-snug">{c.t}</h3>
              <p className="text-sm text-snow/80 leading-relaxed">{c.b}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
        <p className="text-sm text-snow/80 leading-relaxed max-w-3xl mx-auto">{ctaLead}</p>
        <a
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-vibe-pink px-7 py-3.5 font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arctic-cyan"
        >
          {cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-4 text-xs text-snow/60 max-w-2xl mx-auto">{pick(lang,
          'This is an affiliate link: if you buy through it we may earn a commission, at no extra cost to you.',
          'Tämä on kumppanuuslinkki: jos ostat sen kautta, voimme saada komission ilman lisäkustannusta sinulle.',
          'Dies ist ein Affiliate-Link: Bei einem Kauf darüber erhalten wir ggf. eine Provision, ohne Mehrkosten für Sie.',
          'これはアフィリエイトリンクです。ご購入の場合、追加費用なしに当サイトが手数料を受け取ることがあります。',
          'Este es un enlace de afiliado: si compra a través de él podemos ganar una comisión, sin coste extra para usted.',
          'Este é um link de afiliado: se você comprar por ele podemos receber comissão, sem custo extra para você.',
          '这是联盟链接:若你通过它购买,我们可能获得佣金,而你无需额外付费。',
          '제휴 링크입니다. 이를 통해 구매하시면 추가 비용 없이 저희가 수수료를 받을 수 있습니다.',
          'Ceci est un lien d’affiliation : si vous achetez via ce lien, nous pouvons percevoir une commission, sans surcoût pour vous.',
          'Questo è un link di affiliazione: se acquisti tramite esso possiamo ricevere una commissione, senza costi aggiuntivi per Lei.',
          'Dit is een affiliatelink: koopt u hierdoor, dan kunnen wij commissie ontvangen, zonder extra kosten voor u.',
          'Detta är en affiliatelänk: köper du via den kan vi få provision, utan extra kostnad för dig.')}</p>
      </div>
    </section>
  )
}
