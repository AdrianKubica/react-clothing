import { IShopItem } from "../../pages/shop/shop.component"

export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN"
export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART"

export interface Cart {
  visible: boolean
  cartItems: IShopItem[]
}

export interface ToggleCartVisibilityAction {
  type: typeof TOGGLE_HIDDEN
}

export interface AddCartItemAction {
  type: typeof ADD_ITEM
  payload: IShopItem
}

export interface RemoveCartItemAction {
  type: typeof REMOVE_ITEM
  payload: IShopItem
}

export interface ClearCartItemAction {
  type: typeof CLEAR_ITEM_FROM_CART
  payload: number
}

export type CartActionTypes =
  | ToggleCartVisibilityAction
  | AddCartItemAction
  | RemoveCartItemAction
  | ClearCartItemAction
