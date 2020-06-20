import { SetCartVisibilityAction } from "./cart.types"

export const SET_HIDDEN = "SET_HIDDEN"

export const setCartVisibility = (visible: boolean): SetCartVisibilityAction => ({
  type: SET_HIDDEN,
  payload: visible,
})
