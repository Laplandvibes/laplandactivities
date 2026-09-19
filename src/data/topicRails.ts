/**
 * Mainos rakennetaan sivun aiheesta käsin, ei tuotteesta (lv_permanent_rules §20,
 * Vesa 14.9.2026: "mainokset pitää aidosti liittyä asiaan sivun aiheen kautta").
 *
 * Jokaiselle kategoriasivulle valitaan tuoterivi, jonka OTSIKKO on lukijan tilanne
 * juuri tällä sivulla (mihin hän varusteita tarvitsee), ja jonka tuotteet ovat
 * syötteestä suodatettu siihen tilanteeseen. Kumppanin oma logo ja mitattu brändiväri
 * tulevat ProductRailin partnerBrand-taulusta; kuvat ovat kumppanin omia tuotekuvia.
 *
 * Vain fi + en: molemmat kaupat toimittavat Suomeen ja niiden syöte on suomeksi.
 * ProductRail renderöi tyhjää lokaaleilla joille ei ole copyä — se on tarkoitus.
 *
 * Onnipyörää EI ole tässä (19.9.2026): sen syöte sisältää vain lastenpyöriä ja
 * Jopoja, joten "sähkömaastopyörät ja fatbiket" -mainos lupasi tuotetta, jota se ei
 * näyttänyt. Vesa: "aivan helvetin ruma ja yrityksen logot ja mitkään ei näy".
 */
import type { RailPartner, RailLang } from '../shared/ads/ProductRail';
import type { PartnerSnapshot } from '../shared/ads/data/partnerTypes';
import haltiRail from '../shared/ads/rails/halti';
import haltiPicks from '../shared/ads/data/haltiPicks';
import scandinavianoutdoorRail from '../shared/ads/rails/scandinavianoutdoor';
import scandinavianoutdoorPicks from '../shared/ads/data/scandinavianoutdoorPicks';

type Copy = NonNullable<RailPartner['copy']['fi']>;

function withCopy(base: RailPartner, fi: Partial<Copy>, en: Partial<Copy>): RailPartner {
  return {
    ...base,
    copy: {
      fi: { ...(base.copy.fi as Copy), ...fi },
      en: { ...(base.copy.en as Copy), ...en },
    },
  };
}

function shelf(snapshot: PartnerSnapshot, keep: (shelf: string, name: string) => boolean): PartnerSnapshot {
  const products = snapshot.products.filter((p) => keep(p.shelf ?? '', p.name ?? ''));
  // Alle kolme tuotetta ei ole rivi vaan yksinäinen kortti: näytä silloin koko syöte.
  return products.length >= 3 ? { ...snapshot, products } : snapshot;
}

export interface TopicRail {
  partner: RailPartner;
  snapshot: PartnerSnapshot;
  sid: string;
}

const RAILS: Record<string, () => TopicRail> = {
  // Kesävaellukset: Pallas, Karhunkierros, UKK-puisto. Tarve: kengät, kuoret, reput.
  summer: () => ({
    partner: withCopy(
      scandinavianoutdoorRail,
      {
        headline: 'Pallakselle tai Karhunkierrokselle omin jaloin?',
        sub: 'Vaelluskengät, vedenpitävät kuoret ja reput samasta kaupasta, toimitus Suomeen.',
      },
      {
        headline: 'Walking Pallas or the Karhunkierros on your own feet?',
        sub: 'Hiking shoes, waterproof shells and packs from one shop, delivery within Finland.',
      },
    ),
    snapshot: shelf(scandinavianoutdoorPicks, (s) => /keng|housut|vaellus|takit|reput|rinka/i.test(s)),
    sid: 'summer_category_hiking_gear',
  }),
  // Talviurheilu: rinne, ladut, fatbike. Tarve: lämmin kerrasto, kuori, talvikengät.
  'winter-sports': () => ({
    partner: withCopy(
      haltiRail,
      {
        headline: 'Rinteeseen, laduille tai fatbikelle pakkasessa?',
        sub: 'Kerrastot, välikerrokset ja kuoritakit, jotka on tehty pohjoisen talveen.',
      },
      {
        headline: 'Slopes, ski tracks or a fat bike in the cold?',
        sub: 'Base layers, mid layers and shell jackets made for a northern winter.',
      },
    ),
    snapshot: shelf(haltiPicks, (s) => /alusasut|midlayers|takit|housut|puvut|jalkineet/i.test(s)),
    sid: 'winter_sports_category_gear',
  }),
  // Revontulet: tuntikausia paikallaan pakkasessa. Tarve: lämpö, ei liikettä.
  'northern-lights': () => ({
    partner: withCopy(
      haltiRail,
      {
        headline: 'Revontuliyö on tunteja paikallaan pakkasessa',
        sub: 'Villakerrasto, untuvaliivi ja lämpimät kengät ratkaisevat, kuinka kauan jaksat odottaa.',
      },
      {
        headline: 'An aurora night means hours standing still in the cold',
        sub: 'Wool base layers, a down vest and warm boots decide how long you can wait.',
      },
    ),
    snapshot: shelf(haltiPicks, (s) => /alusasut|liivit|midlayers|takit|jalkineet/i.test(s)),
    sid: 'northern_lights_category_gear',
  }),
  // Seikkailu: moottorikelkka, jääkiipeily, koskenlasku. Tarve: tuulenpitävä kuori.
  adventure: () => ({
    partner: withCopy(
      haltiRail,
      {
        headline: 'Kelkan selässä tai jääseinällä tuuli puree ensin',
        sub: 'Tuulenpitävät kuoret ja kerrastot safaripäivän alle, haalarin lainaa operaattori.',
      },
      {
        headline: 'On a snowmobile or an ice wall the wind bites first',
        sub: 'Windproof shells and base layers to wear under the overall your operator lends you.',
      },
    ),
    snapshot: shelf(haltiPicks, (s) => /takit|alusasut|midlayers|housut/i.test(s)),
    sid: 'adventure_category_gear',
  }),
};

export function topicRailFor(slug: string, lang: RailLang): TopicRail | null {
  const make = RAILS[slug];
  if (!make) return null;
  const rail = make();
  // Ei copyä tälle kielelle => ei riviä (kaupat toimittavat vain Suomeen).
  if (!rail.partner.copy[lang]) return null;
  return rail;
}
