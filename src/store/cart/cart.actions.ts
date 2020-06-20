import { ToggleCartVisibilityAction } from "./cart.types"

export const TOGGLE_HIDDEN = "SET_HIDDEN"

export const toggleCartVisibility = (): ToggleCartVisibilityAction => ({
  type: TOGGLE_HIDDEN,
})
