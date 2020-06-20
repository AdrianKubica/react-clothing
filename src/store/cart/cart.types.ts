import { IShopItem } from "../../pages/shop/shop.component"

export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN"
export const ADD_ITEM = "ADD_ITEM"

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

export type CartActionTypes = ToggleCartVisibilityAction | AddCartItemAction
