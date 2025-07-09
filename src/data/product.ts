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
    name: 'YUJU - GFRIEND',
    code: 'GFRIEND - Time For The Moon Night',
    rarity: 'Limited Edition',
    price: 20.00,
    image: '/assets/yuju-2.jpg',
    category: 'photocard',
  },
   {
     id: 'pc3',
     name: 'YUJU - GFRIEND',
     code: 'GFRIEND - Labyrinth',
     rarity: 'Limited Edition',
     price: 20.00,
     image: '/assets/yuju-3.jpg',
     category: 'photocard',
   },
   {
     id: 'pc4',
     name: 'YUJU - GFRIEND',
     code: 'GFRIEND - Walpurgis Night',
     rarity: 'Limited Edition',
     price: 20.00,
     image: '/assets/yuju-4.jpg',
     category: 'photocard',
   },
  {
    id: 'y5',
    name: 'I:P Masquerena ',
    code: 'Alt Art Secret Rare',
    rarity: 'Ultra Rare',
    price: 35.00,
    image: '/assets/ip.jpg',
    category: 'yugioh',
  },
  {
    id: 'y6',
    name: 'S:P Little Knight',
    code: 'AGOV-JP046',
    rarity: 'Super rare Rare',
    price: 50.00,
    image: '/assets/sp.jpg',
    category: 'yugioh',
  },
];