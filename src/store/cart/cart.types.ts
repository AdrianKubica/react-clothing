import { SET_HIDDEN } from "./cart.actions"

export interface Cart {
  visible: boolean
}

export interface SetCartVisibilityAction {
  type: typeof SET_HIDDEN
  payload: boolean
}
