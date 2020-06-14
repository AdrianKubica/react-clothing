import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { User } from "./user/user.types";

export interface StoreState {
  user: User
}

export default combineReducers({
  user: userReducer
})