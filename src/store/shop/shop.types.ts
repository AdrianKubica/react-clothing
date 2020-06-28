export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START"
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS"
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE"

export interface Shop {
  collections: ShopCollection
  isFetching: boolean
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

export interface ShopFetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START
}

export interface ShopFetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS
  payload: ShopCollection
}

export interface ShopFetchCollectionsFailure {
  type: typeof FETCH_COLLECTIONS_FAILURE
  payload: string
}

export type ShopActionTypes = ShopFetchCollectionsStart | ShopFetchCollectionsSuccess | ShopFetchCollectionsFailure
