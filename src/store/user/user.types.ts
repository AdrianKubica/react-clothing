export interface User {
  currentUser: firebase.User | null
}

export interface UserState {
  users: User[]
}

export const SET_CURRENT_USER = "SET_CURRENT_USER"

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: User
}

export type UserActionTypes = SetCurrentUserAction
