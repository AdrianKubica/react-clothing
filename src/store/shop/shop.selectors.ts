import { StoreState } from "../root.reducer"
import { createSelector } from "reselect"

const selectShop = (state: StoreState) => state.shop

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections)
