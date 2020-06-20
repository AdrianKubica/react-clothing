export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN"
export const ADD_ITEM = "ADD_ITEM"

export interface Cart {
  visible: boolean
}

export interface CartItem {
  name: string
  price: number
}

export interface ToggleCartVisibilityAction {
  type: typeof TOGGLE_HIDDEN
}

export interface AddCartItemAction {
  type: typeof ADD_ITEM
  payload: CartItem
}

export type CartActionTypes = ToggleCartVisibilityAction | AddCartItemAction