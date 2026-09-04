import { Mountain } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Halti — Adtraction. Copy follows the COPY RULES in ProductRail.tsx:
// one-clause headline, one-sentence sub, and nothing claimed that the feed
// or the advertiser's own page does not support. Finnish and English only —
// the rail renders nothing in a locale it has no copy for, which is the
// honest outcome for a Finland-market shop.
const halti: RailPartner = {
  key: 'halti',
  categoryUrl: "https://www.halti.fi/",
  accent: '#C8102E',
  accentDark: '#F08A99',
  icon: Mountain,
  copy: {
    fi: {
      eyebrow: "Halti",
      headline: "Ulkoiluvaatteet pohjoiseen säähän",
      sub: "Kuoritakkeja, teknisiä paitoja ja retkihousuja.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Haltiin sivulla.",
    },
    en: {
      eyebrow: "Halti",
      headline: "Outdoor clothing for northern weather",
      sub: "Shell jackets, technical shirts and hiking trousers.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Halti’s own page.",
    },
  },
}

export default halti
