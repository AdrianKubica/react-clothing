export interface Shop {
  collections: ShopCollection[]
}

export interface ShopCollection {
  id: number
  title: string
  routeName: string
  items: ShopItem[]
}

export interface ShopItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity?: number
}
