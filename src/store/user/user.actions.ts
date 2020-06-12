import { User, SetCurrentUserAction, SET_CURRENT_USER } from "./user.types"

export const setCurrentUser = (user: User): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user,
})
