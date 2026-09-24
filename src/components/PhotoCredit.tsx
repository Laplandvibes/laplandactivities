import { creditFor, PHOTO_CREDITS } from '../data/photoCredits';
import { useLang } from '../i18n/useLang';

/**
 * Kuvamerkintä valokuvan päälle: tekijä + lisenssi (+ linkit, kun kuva ei ole linkin sisällä).
 * CC BY / CC BY-SA -lisenssit vaativat tekijän, lisenssin JA lisenssilinkin (CC BY-SA 4.0 §3(a)(1)(C)).
 * Linkin sisällä olevassa kortissa (Home-ruudukko, kohdelaatat) renderöidään pelkkä teksti ja
 * täydet linkit ovat Tietoja-sivun kuvaluettelossa (<PhotoCreditList />). Sama malli kuin
 * stayinlapland 18.9.2026. Lisenssin nimi on `whitespace-nowrap`, ettei "CC BY-SA 4.0" katkea
 * 375 px:ssä.
 *
 * Kontrasti mitoitetaan kirkkaimman mahdollisen kuvan mukaan, koska kuitti osuu mihin tahansa
 * kuvaan. Pohja `bg-black/55` ja täysvalkoinen teksti ovat pari: puhtaan valkoisen (#FFF) kuvan
 * päällä pohja piirtyy harmaana #737373, ja valkoinen teksti on sitä vasten 4,74:1 (raja 9 px:n
 * tekstille 4,5:1). Tummempi kuva vain parantaa lukua. Läpikuultava muste ei riitä samassa
 * kohdassa: `text-white/70` 3,23:1, `text-white/95` 4,46:1 (laskettu WCAG 2.x -kaavalla).
 * Mitattu selaimessa 24.9.2026 (25 sivua, 375 + 1440 px): jokainen kuitti yli 4,5:1:n; heikoin,
 * /fishing-sivun kuningasrapukortti, huonoin 10 % 6,6:1 (1280 px) ja 6,9:1 (375 px).
 */
const OWN_LABEL: Record<string, string> = {
  en: 'Photo: LaplandVibes', fi: 'Kuva: LaplandVibes', de: 'Foto: LaplandVibes', sv: 'Foto: LaplandVibes',
  ja: '写真：LaplandVibes', es: 'Foto: LaplandVibes', 'pt-BR': 'Foto: LaplandVibes', 'zh-CN': '摄影：LaplandVibes',
  ko: '사진: LaplandVibes', fr: 'Photo : LaplandVibes', it: 'Foto: LaplandVibes', nl: 'Foto: LaplandVibes',
};

export default function PhotoCredit({ src, links = true, className = '' }: { src?: string; links?: boolean; className?: string }) {
  const lang = useLang();
  const c = creditFor(src);
  if (!c) return null;
  // Vesa 19.9.2026: "hieman liikaa saa huomiota kuvan ottaja ja ne pitäisi aina olla oikea alalaita"
  // ⇒ 9 px ja aina oikea alakulma; täysi tekijä + linkit Tietoja-sivun luettelossa.
  // Huomaamattomuus tehdään koolla ja sijainnilla, ei kontrastilla: kuitti on CC BY / BY-SA
  // -lisenssin vaatima nimeäminen, joten sen on oltava luettava. Pohjaa ei kevennetä eikä
  // mustetta tehdä läpikuultavaksi (`bg-black/35` + valkoinen = 2,43:1 valkoisen kuvan päällä;
  // muut luvut yllä).
  const base = `pointer-events-auto absolute bottom-1 right-1 z-10 max-w-[58%] truncate rounded bg-black/55 px-1 py-px text-[9px] leading-tight text-white ${className}`;
  if (c.kind === 'partner') {
    // Kumppanin (esim. Sembo) oma hotellikuva: lähde näkyviin, ei lisenssilinkkiä (kuvalupa 10.9.2026).
    return <span className={base}>{OWN_LABEL[lang]?.split(':')[0] ?? 'Photo'}: {c.author} · {c.license}</span>;
  }
  if (c.kind === 'own') {
    return <span className={base}>{OWN_LABEL[lang] ?? OWN_LABEL.en}{c.date ? ` ${c.date.slice(0, 4)}` : ''}</span>;
  }
  const lic = c.license;
  if (!links) {
    return <span className={base}>© {c.author} · <span className="whitespace-nowrap">{lic}</span></span>;
  }
  return (
    <span className={base}>
      <a href={c.pageUrl} target="_blank" rel="noopener" className="lv-tap hover:underline">© {c.author}</a>
      {' · '}
      {c.licenseUrl ? (
        <a href={c.licenseUrl} target="_blank" rel="license noopener" className="lv-tap whitespace-nowrap hover:underline">{lic}</a>
      ) : (
        <span className="whitespace-nowrap">{lic}</span>
      )}
    </span>
  );
}

const LIST_TITLE: Record<string, string> = {
  en: 'Photo credits', fi: 'Kuvat ja lisenssit', de: 'Bildnachweise', sv: 'Bildkällor', ja: '写真クレジット',
  es: 'Créditos fotográficos', 'pt-BR': 'Créditos das fotos', 'zh-CN': '图片来源', ko: '사진 출처',
  fr: 'Crédits photo', it: 'Crediti fotografici', nl: 'Fotoverantwoording',
};
const LIST_LEAD: Record<string, string> = {
  en: "Some of the photographs on this site are our own. The ones listed below come from Wikimedia Commons under the licence shown; each link opens the original file and its licence.",
  fi: "Osa sivuston kuvista on omiamme. Alla luetellut kuvat ovat Wikimedia Commonsista mainitulla lisenssillä; linkit avaavat alkuperäisen tiedoston ja lisenssin.",
  de: "Ein Teil der Fotos auf dieser Website stammt von uns. Die unten aufgeführten Fotos kommen von Wikimedia Commons unter der angegebenen Lizenz; jeder Link öffnet die Originaldatei und ihre Lizenz.",
  sv: "En del av bilderna på webbplatsen är våra egna. Bilderna nedan kommer från Wikimedia Commons under angiven licens; länkarna öppnar originalfilen och licensen.",
  ja: "本サイトの写真の一部は自社で撮影したものです。以下の写真はWikimedia Commonsから記載のライセンスで使用しており、リンク先で元ファイルとライセンスを確認できます。",
  es: "Algunas fotos del sitio son nuestras. Las que aparecen abajo proceden de Wikimedia Commons con la licencia indicada; cada enlace abre el archivo original y su licencia.",
  'pt-BR': "Algumas fotos do site são nossas. As listadas abaixo vêm do Wikimedia Commons com a licença indicada; cada link abre o arquivo original e sua licença.",
  'zh-CN': "本站部分照片为我们自己拍摄。以下照片来自维基共享资源，采用所示许可协议；链接指向原始文件及其许可。",
  ko: "이 사이트의 사진 일부는 직접 촬영한 것입니다. 아래 사진은 위키미디어 공용에서 표시된 라이선스로 사용하며, 링크는 원본 파일과 라이선스로 연결됩니다.",
  fr: "Une partie des photos du site sont les nôtres. Celles listées ci-dessous proviennent de Wikimedia Commons sous la licence indiquée ; chaque lien ouvre le fichier original et sa licence.",
  it: "Alcune foto del sito sono nostre. Quelle elencate qui sotto provengono da Wikimedia Commons con la licenza indicata; ogni link apre il file originale e la sua licenza.",
  nl: "Een deel van de foto's op de site is van onszelf. De foto's hieronder komen van Wikimedia Commons onder de vermelde licentie; elke link opent het originele bestand en de licentie.",
};

/** Tietoja-sivun kuvaluettelo: kaikki Commons-kuvat tekijöineen ja lisenssilinkkeineen. */
export function PhotoCreditList() {
  const lang = useLang();
  const entries = Object.entries(PHOTO_CREDITS_COMMONS());
  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl text-snow tracking-wide mb-3">{LIST_TITLE[lang] ?? LIST_TITLE.en}</h2>
      <p className="text-snow/65 text-sm leading-relaxed mb-4">{LIST_LEAD[lang] ?? LIST_LEAD.en}</p>
      <ul className="columns-1 sm:columns-2 gap-6 text-[12px] leading-relaxed text-snow/60">
        {entries.map(([src, c]) => (
          <li key={src} className="break-inside-avoid mb-1">
            <a href={c.pageUrl} target="_blank" rel="noopener" className="text-arctic-cyan hover:underline">{c.title}</a>
            {' · '}{c.author}{' · '}
            <a href={c.licenseUrl} target="_blank" rel="license noopener" className="whitespace-nowrap hover:underline">{c.license}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PHOTO_CREDITS_COMMONS() {
  return Object.fromEntries(Object.entries(PHOTO_CREDITS).filter(([, c]) => c.kind === 'commons')) as Record<string, { pageUrl?: string; title?: string; author: string; license: string; licenseUrl?: string }>;
}
