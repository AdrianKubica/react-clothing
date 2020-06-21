import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { User } from "./user/user.types"
import { cartReducer } from "./cart/cart.reducer"
import { Cart } from "./cart/cart.types"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { directoryReducer } from "./directory/directory.reducer"
import { Directory } from "./directory/directory.types"
import { shopReducer } from "./shop/shop.reducer"
import { Shop } from "./shop/shop.types"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

export interface StoreState {
  user: User
  cart: Cart
  directory: Directory
  shop: Shop
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
