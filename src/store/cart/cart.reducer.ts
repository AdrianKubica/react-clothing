import { SET_HIDDEN } from "./cart.actions"
import { SetCartVisibilityAction } from "./cart.types"

const INITIAL_STATE = {
  visible: false,
}

export const cartReducer = (state = INITIAL_STATE, action: SetCartVisibilityAction) => {
  switch (action.type) {
    case SET_HIDDEN:
      return {
        ...state,
        visible: action.payload,
      }
    default:
      return state
  }
}
