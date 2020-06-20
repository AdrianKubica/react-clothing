import { ToggleCartVisibilityAction, TOGGLE_HIDDEN, ADD_ITEM, CartItem, AddCartItemAction } from "./cart.types"

export const toggleCartVisibility = (): ToggleCartVisibilityAction => ({
  type: TOGGLE_HIDDEN,
})

export const addCartItem = (item: CartItem): AddCartItemAction => ({
  type: ADD_ITEM,
  payload: item,
})
