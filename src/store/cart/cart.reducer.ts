import { CartActionTypes, TOGGLE_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } from "./cart.types"
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils';

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}