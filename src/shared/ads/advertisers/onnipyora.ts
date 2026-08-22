import { Bike } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Onnipyörä — suomalainen sähköpyöräkauppa (sähkömaastopyörät, sähköfatbiket,
// Woom-lastenpyörät; huolto Turussa, Helsingissä ja Lappeenrannassa).
// Adtraction-ohjelma hyväksytty 3.8.2026, reitti go/onnipyora (a=1915405249,
// dot.onnipyora.fi) verifioitu GETillä samana päivänä.
//
// 🔴 VAIN fi-copy TARKOITUKSELLA: toimitusehdot (luettu 3.8.2026) sanovat
// "Verkkokauppa toimittaa ainoastaan Suomeen". AdUnit renderöi tyhjää muilla
// lokaaleilla kun en-fallbackia ei ole — juuri niin tämän kuuluu toimia.
// Älä lisää en-copyä ellei toimitusalue laajene: mainos joka kutsuu ostamaan
// kauppaan, joka ei toimita ostajalle, on sama vikaluokka kuin nordicnestin
// worldwide-väite.
//
// Väriperustelu: brändinvihreä #7CB553 on liian vaalea valkoiselle
// CTA-tekstille (~2,5:1), joten accent on tummennettu sävy #3E7A1F
// (valkoinen päällä 5,25:1) — sama ratkaisu kuin scandinavianOutdoorilla.
// Logot: onnipyora.png (musta, vaalea kortti) + onnipyora-white.png (tumma
// kortti), lähde onnipyora.fi/app/uploads (kumppanin oma aineisto).
const onnipyora: AdSpec = {
  key: 'onnipyora',
  brand: 'Onnipyörä',
  logo: '/images/partners/onnipyora.png',
  logoDark: '/images/partners/onnipyora-white.png',
  // dest=maastopyöräkategoria: ilman destiä Adtraction-wrap pudottaa
  // onnipyora.fi:n ETUSIVULLE (lv_permanent_rules §5). Kategoria kattaa
  // sähkömaastopyörät ja sähköfatbiket — täsmää headlinen kulmaan
  // ("sähkömaastopyörät ja fatbiket"); /tuoteosasto/fatbiket uudelleenohjaa
  // samalle sivulle (#fatbiket). FI-only copy → yksi fi-dest riittää.
  // Polku verifioitu 2026-08-14: HTTP 200, <title> "Maastopyörät -
  // Onnipyörä", leipätekstissä Sähkömaastopyörät ja Sähköfatbiket.
  linkFor: (sid) => `https://go.laplandvibes.com/go/onnipyora?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent('https://www.onnipyora.fi/tuoteosasto/maastopyorat')}`,
  accent: '#3E7A1F',
  accentDark: '#2F5E17',
  icon: Bike,
  copy: {
    fi: {
      eyebrow: 'Maastopyöräily',
      headline: 'Onnipyörä, sähkömaastopyörät ja fatbiket kotimaasta',
      sub: 'Suomalainen sähköpyöräkauppa: täysjousitetut ja jäykkäperäiset sähkömaastopyörät, sähköfatbiket talvipoluille sekä Woom-lasten- ja nuortenpyörät. Sähköpyörät toimitetaan ajovalmiiksi koottuina ja huollon tarkastamina — verkkokauppa toimittaa vain Suomeen.',
      trust: ['Sähkömaastopyörät ja fatbiket', 'Ajovalmiiksi koottu ja tarkastettu', 'Huolto Turussa, Helsingissä ja Lappeenrannassa'],
      cta: 'Selaa valikoimaa',
      poweredBy: 'Pyörät Onnipyörältä',
    },
  },
}

export default onnipyora
