import { UserState } from "./user.reducer"

export const selectCurrentUser = (state): UserState['currentUser'] => state.user.currentUser