export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS"

export interface Shop {
  collections: ShopCollection
}

export interface ShopCollection {
  [key: string]: ShopCollectionDetail
}
export interface ShopCollectionDetail {
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

export interface ShopUpdateCollection {
  type: typeof UPDATE_COLLECTIONS
  payload: ShopCollection
}

export type ShopActionTypes = ShopUpdateCollection
