import { TOGGLE_HIDDEN } from "./cart.actions"

export interface Cart {
  visible: boolean
}

export interface ToggleCartVisibilityAction {
  type: typeof TOGGLE_HIDDEN
}

export type CartActionTypes = ToggleCartVisibilityAction