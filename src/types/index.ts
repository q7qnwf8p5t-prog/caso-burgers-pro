export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  badge?: 'bestseller' | 'new' | 'spicy' | 'vegan'
  extras?: string[]
}

export type MenuCategory =
  | 'burgers-classiques'
  | 'burgers-speciaux'
  | 'accompagnements'
  | 'boissons'
  | 'desserts'

export interface CategoryInfo {
  id: MenuCategory
  label: string
  icon: string
  description: string
}
