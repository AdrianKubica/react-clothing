import { CartActionTypes, TOGGLE_HIDDEN, ADD_ITEM } from './cart.types';

const INITIAL_STATE = {
  visible: false,
  cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) => {
  switch (action.type) {
    case TOGGLE_HIDDEN:
      return {
        ...state,
        visible: !state.visible,
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    default:
      return state
  }
}
