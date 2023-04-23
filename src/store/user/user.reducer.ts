import { createSlice } from "@reduxjs/toolkit";

import { CheckUserSession, GoogleSignInStart, EmailSignInStart, SignUpStart, SignOutStart, SignInSuccess, SignUpSuccess, SignOutSuccess, SignInFailed, SignUpFailed, SignOutFailed } from "./user.action";
import { User } from "./user.types";

export type UserState = {
  readonly currentUser: User | null
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    checkUserSession(state, action: CheckUserSession) {},
    googleSignInStart(state, action: GoogleSignInStart) {
      state.isLoading = true
    },
    emailSignInStart(state, action: EmailSignInStart) {
      state.isLoading = true
    },
    signUpStart(state, action: SignUpStart) {
      state.isLoading = true
    },
    signOutStart(state, action: SignOutStart) {
      state.isLoading = true
    },
    signInSuccess(state, action: SignInSuccess) {
      state.currentUser = action.payload
      state.isLoading = false
      state.error = null
    },
    signUpSuccess(state, action: SignUpSuccess) {},
    signOutSuccess(state, action: SignOutSuccess) {
      state.currentUser = null
      state.isLoading = false
      state.error = null
    },
    signInFailed(state, action: SignInFailed) {
      state.error = action.payload
      state.isLoading = false
    },
    signUpFailed(state, action: SignUpFailed) {
      state.error = action.payload
      state.isLoading = false
    },
    signOutFailed(state, action: SignOutFailed) {
      state.error = action.payload
      state.isLoading = false
    }
  },
});

export const { checkUserSession, googleSignInStart, emailSignInStart, signUpStart, signOutStart, signInSuccess, signUpSuccess, signOutSuccess, signInFailed, signOutFailed, signUpFailed } = userSlice.actions
console.log(userSlice.actions)  

export const userReducer = userSlice.reducer

// export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

//   if (googleSignInStart.match(action) || emailSignInStart.match(action) || signUpStart.match(action) || signOutStart.match(action))
//     return {...state, isLoading: true}
//   if (signInSuccess.match(action))
//     return {...state, currentUser: action.payload, isLoading: false, error: null}
//   if (signOutSuccess.match(action))
//     return {...state, currentUser: null, isLoading: false, error:null}
//   if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action))
//     return {...state, error: action.payload, isLoading: false}
  
//   return state
// };
