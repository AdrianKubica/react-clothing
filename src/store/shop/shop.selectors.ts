import { StoreState } from "../root.reducer"
import { createSelector } from "reselect"

const selectShop = (state: StoreState) => state.shop

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectShopCollections], (collections) => (collections ? collections[collectionUrlParam] : null))

export const selectCollectionForOverview = createSelector([selectShopCollections], (collections) =>
  collections ? Object.values(collections) : []
)
