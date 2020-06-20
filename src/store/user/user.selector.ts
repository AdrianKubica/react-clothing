import { StoreState } from "../root.reducer";
import { createSelector } from "reselect";

const selectUser = (state: StoreState) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)