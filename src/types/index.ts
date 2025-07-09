// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  code: string;
  rarity: string;
  price: number;
  image: string;
  category: 'kpop' | 'yugioh' | 'special' | 'photocard'; // tambahkan photocard
  isLimited?: boolean;
}

export interface MenuItem {
  name: string;
  href: string;
}