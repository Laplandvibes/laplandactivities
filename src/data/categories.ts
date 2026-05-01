import { Bike, Dog, Sparkles, Mountain, Heart, Utensils, Sun, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { HERO, MKT } from './images';

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: 'adventure',
    name: 'Adventure',
    description: 'Snowmobile safaris, ice karting, ice climbing, river rafting, and survival courses. Get your adrenaline pumping in the Arctic wilderness.',
    icon: Bike,
    color: 'bg-orange/10 text-orange border-orange/20',
    image: MKT.huskySnowmobile,  // husky + snowmobile aurora scene, no text
  },
  {
    slug: 'animals',
    name: 'Animal Experiences',
    description: 'Husky dog sledding, reindeer farm visits, wild bear watching, and polar bears at Ranua Zoo. Meet the incredible animals of the Arctic.',
    icon: Dog,
    color: 'bg-cyan/10 text-cyan border-cyan/20',
    image: '/images/mkt_01.png',  // husky + aurora + family - local Drive image
  },
  {
    slug: 'northern-lights',
    name: 'Northern Lights',
    description: 'Guided aurora hunts, photography tours, snowmobile aurora chases, and snowshoe expeditions under the dancing lights.',
    icon: Sparkles,
    color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    image: HERO.auroraLake,  // aurora over frozen lake, no text
  },
  {
    slug: 'winter-sports',
    name: 'Winter Sports',
    description: 'Downhill skiing, cross-country, snowboarding, fat biking, snowshoeing, and ice skating across Lapland\'s top-tier resorts.',
    icon: Mountain,
    color: 'bg-cyan/10 text-cyan border-cyan/20',
    image: HERO.snowyForest,  // snowy forest sunlight, no text
  },
  {
    slug: 'wellness',
    name: 'Wellness & Sauna',
    description: 'Traditional smoke saunas, ice swimming, Arctic floating, spa treatments, and the ultimate Nordic wellness experiences.',
    icon: Heart,
    color: 'bg-pink/10 text-pink border-pink/20',
    image: MKT.igluCouple,  // glass igloo + couple under aurora, no text
  },
  {
    slug: 'culture',
    name: 'Culture & Heritage',
    description: 'Sámi museums, Santa Claus Village, ice hotels, gold panning, amethyst mines, and the fascinating heritage of the Arctic.',
    icon: Shield,
    color: 'bg-orange/10 text-orange border-orange/20',
    image: HERO.santaClaus,  // Santa with children, no text
  },
  {
    slug: 'summer',
    name: 'Summer Adventures',
    description: 'Midnight sun hiking, kayaking, river rafting, mountain biking, fishing, berry picking, and golf under the endless Arctic daylight.',
    icon: Sun,
    color: 'bg-orange/10 text-orange border-orange/20',
    image: '/images/mkt_01.png',
  },
  {
    slug: 'food',
    name: 'Food & Drink',
    description: 'Kota restaurants, wild food foraging, berry picking, reindeer dinners under the stars, and local brewery tours.',
    icon: Utensils,
    color: 'bg-pink/10 text-pink border-pink/20',
    image: MKT.campfireTripod,  // campfire cooking with tripod, no text
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}
