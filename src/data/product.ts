import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'S:P Little Knight',
    code: 'AGOV-JP046',
    rarity: 'Super Rare',
    price: 19.99,
    image: '/assets/albion.jpg',
    category: 'yugioh'
  },
  {
    id: '2',
    name: 'GFRIEND - Special Album [Season of Memories] (Glass Bead ver.)',
    code: 'Limited Edition',
    rarity: 'Limited Edition',
    price: 28.46,
    image: '/assets/gfriend-album.png',
    category: 'kpop',
    isLimited: true
  },
  {
    id: '3',
    name: 'I:P Masquerena',
    code: 'QCAC-JP069',
    rarity: 'Secret Rare Alternate Art',
    price: 49.99,
    image: '/assets/dragoon.jpg',
    category: 'yugioh'
  },
  {
    id: '4',
    name: 'GFRIEND - Special Album [Season of Memories]',
    code: 'Limited Edition',
    rarity: 'Limited Edition',
    price: 14.58,
    image: '/assets/gfriend-album2.png',
    category: 'kpop',
    isLimited: true
  }
];