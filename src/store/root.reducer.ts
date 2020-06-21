import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { User } from "./user/user.types"
import { cartReducer } from "./cart/cart.reducer"
import { Cart } from "./cart/cart.types"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

export interface StoreState {
  user: User
  cart: Cart
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
