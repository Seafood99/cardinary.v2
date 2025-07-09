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
  },
  {
    id: 'pc1',
    name: 'YUJU - GFRIEND',
    code: 'GFRIEND - Song of the Sirens',
    rarity: 'Limited Edition',
    price: 8.00,
    image: '/assets/yuju-1.jpg', // asset bisa diisi nanti
    category: 'photocard',
  },
  {
    id: 'pc2',
    name: 'Photocard Kosong 2',
    code: '-',
    rarity: '-',
    price: 0,
    image: '',
    category: 'photocard',
  },
  {
    id: 'pc3',
    name: 'Photocard Kosong 3',
    code: '-',
    rarity: '-',
    price: 0,
    image: '',
    category: 'photocard',
  },
  {
    id: 'pc4',
    name: 'Photocard Kosong 4',
    code: '-',
    rarity: '-',
    price: 0,
    image: '',
    category: 'photocard',
  },
  {
    id: 'pc5',
    name: 'Photocard Kosong 5',
    code: '-',
    rarity: '-',
    price: 0,
    image: '',
    category: 'photocard',
  },
];