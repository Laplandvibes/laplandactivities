/**
 * Etusivun mainospaikkojen config (LV Media -inventaari).
 *
 * Myyntiprosessi: kauppa → täytä sponsors[0]/[1] tai spots[n].partner
 * Partner-objektilla (ks. shared/PartnerSlot.tsx) → build → deploy.
 * Tyhjät paikat renderöivät house-adin → https://laplandvibes.com/media/site/laplandactivities
 */
import type { HomeAdSlotsConfig } from '../../../shared/HomeAdSlots';
import { DEFAULT_PREMIUM_SPOTS } from '../../../shared/PremiumSpotGrid';

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandactivities',
  // [0] = pääkumppani (banneri heti heron alla), [1] = kakkospääkumppani (osion kortti)
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
