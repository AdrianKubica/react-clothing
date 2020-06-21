import { ShopItem } from "../shop/shop.types"
import {
  ToggleCartVisibilityAction,
  TOGGLE_HIDDEN,
  ADD_ITEM,
  AddCartItemAction,
  RemoveCartItemAction,
  REMOVE_ITEM,
  ClearCartItemAction,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types"

export const toggleCartVisibility = (): ToggleCartVisibilityAction => ({
  type: TOGGLE_HIDDEN,
})

export const addCartItem = (item: ShopItem): AddCartItemAction => ({
  type: ADD_ITEM,
  payload: item,
})

export const removeCartItem = (item: ShopItem): RemoveCartItemAction => ({
  type: REMOVE_ITEM,
  payload: item,
})

export const clearCartItem = (id: number): ClearCartItemAction => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: id,
})
