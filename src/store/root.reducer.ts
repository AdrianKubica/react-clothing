import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { User } from "./user/user.types"
import { cartReducer } from "./cart/cart.reducer"
import { Cart } from "./cart/cart.types"

export interface StoreState {
  user: User
  cart: Cart
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})
