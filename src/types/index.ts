export interface MenuItem {
  id: string
  name: string
  description: string
  priceAlone: number
  priceMenu: number
  category: MenuCategory
  badge?: 'bestseller' | 'new' | 'spicy' | 'vegan' | 'premium'
}

export interface Supplement {
  id: string
  name: string
  price: number
}

export interface Drink {
  id: string
  name: string
  format: string
  price: number
}

export interface FrozenBar {
  name: string
}

export type MenuCategory =
  | 'burgers'
  | 'boissons'
  | 'supplements'
  | 'barres-glacees'

export interface CategoryInfo {
  id: MenuCategory
  label: string
  icon: string
  description: string
}
