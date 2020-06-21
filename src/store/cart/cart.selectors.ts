import { createSelector } from "reselect"
import { StoreState } from "../root.reducer"

const selectCart = (state: StoreState) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartVisibility = createSelector([selectCart], (cart) => cart.visible)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((prev, next) => prev + next.quantity!, 0)
)

export const selectCartItemsTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, currentItem) => accumulatedQuantity + currentItem.quantity! * currentItem.price,
    0
  )
)
