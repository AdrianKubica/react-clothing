import { StoreState } from "../root.reducer"
import { createSelector } from "reselect"

const selectDirectory = (state: StoreState) => state.directory

export const selectDirectorySections = createSelector([selectDirectory], (directory) => directory.sections)
