/**
 * Etusivun mainospaikkojen config (LV Media -inventaari).
 *
 * Myyntiprosessi: kauppa → täytä sponsors[0]/[1] tai spots[n].partner
 * Partner-objektilla (ks. shared/PartnerSlot.tsx) → build → deploy.
 * Tyhjät paikat renderöivät house-adin → https://laplandvibes.com/media/site/laplandactivities
 */
import type { HomeAdSlotsConfig } from '../../../shared/HomeAdSlots';
import type { Partner } from '../../../shared/PartnerSlot';
import { DEFAULT_PREMIUM_SPOTS } from '../../../shared/PremiumSpotGrid';

/**
 * Bear Kuusamo etusivun kortissa A (Vesa 2026-07-27).
 *
 * MIKSI: kun molemmat kortit olivat tyhjiä, etusivu näytti kaksi identtistä
 * "Haluatko mainoksesi tähän?" -korttia allekkain — mobiilissa se lukee
 * renderöintivirheenä, ei myyntipaikkana. Yksi oikea kumppani + yksi vapaa
 * paikka näyttää toimivalta ja luo niukkuutta. Bear = showcase-asiakas, jolle
 * annetaan tietoisesti yli vakiotuotteen (ks. muisti bear_kuusamo_partner_ad_article).
 *
 * Linkki menee Workerin kautta (`go/bearkuusamo?sid=`) koska tämä on MAINOS:
 * klikki kirjautuu D1:een ja näkyy Command Centerissä. Artikkelilinkit sen
 * sijaan ovat suoria + dofollow — älä reititä niitä Workerin kautta.
 *
 * Copy on Niinan hyväksymää tekstiä (shared/ads/advertisers/bearkuusamo.ts
 * headline per kieli) — älä keksi uutta kumppanicopya tähän.
 */
const bearKuusamo: Partner = {
  name: 'Bear Kuusamo',
  tagline: 'Yö karhukojulla, aivan Lapin rajalla',
  taglineEn: 'A night in a bear hide, on the edge of Lapland',
  taglineSv: 'En natt i ett björngömsle, vid Lapplands gräns',
  url: 'https://go.laplandvibes.com/go/bearkuusamo?sid=home_card_a',
  imageSrc: '/images/activities/bear-kuusamo/bear-hero.webp',
  // CTA on pakollinen myydylle paikalle: ilman sitä viereinen tyhjä
  // "Varaa mainospaikka" -house-ad näyttää houkuttelevammalta kuin maksava
  // asiakas (Vesa 2026-07-27). Tekstit ovat Niinan hyväksymiä.
  ctaLabel: 'Varaa yösi',
  ctaLabelEn: 'Plan your night',
  ctaLabelSv: 'Boka din natt',
  accent: '#007E2E', // Bear Kuusamon brändivihreä
};

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandactivities',
  // [0] = pääkumppani (banneri heti heron alla), [1] = kakkospääkumppani (osion kortti)
  sponsors: [null, null],
  // Etusivun kortit: [0]=A (vasen), [1]=B (oikea). `cards` ohittaa `sponsors`in
  // HomeAdSlotsissa mutta EI vaikuta MainPartnerBanneriin (se lukee mainPartner
  // ?? sponsors[0]) → pääkumppanipaikka jää edelleen myytäväksi.
  cards: [bearKuusamo, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
