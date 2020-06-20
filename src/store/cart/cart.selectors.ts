import { createSelector } from "reselect"
import { StoreState } from "../root.reducer"

const selectCart = (state: StoreState) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((prev, next) => prev + next.quantity!, 0)
)