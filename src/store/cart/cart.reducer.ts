import { TOGGLE_HIDDEN } from "./cart.actions"
import { CartActionTypes } from "./cart.types"

const INITIAL_STATE = {
  visible: false,
}

export const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) => {
  switch (action.type) {
    case TOGGLE_HIDDEN:
      return {
        ...state,
        visible: !state.visible,
      }
    default:
      return state
  }
}
