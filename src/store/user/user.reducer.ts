import { AnyAction } from "redux";

import { googleSignInStart, emailSignInStart, signUpStart, signOutStart, signInSuccess, signOutSuccess, signInFailed, signOutFailed, signUpFailed } from "./user.action";

export type UserState = {
  currentUser: any | null
  isLoading: boolean
  error: Error | null
}

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

  if (googleSignInStart.match(action) || emailSignInStart.match(action) || signUpStart.match(action) || signOutStart.match(action))
    return {...state, isLoading: true}
  if (signInSuccess.match(action))
    return {...state, currentUser: action.payload, isLoading: false, error: null}
  if (signOutSuccess.match(action))
    return {...state, currentUser: null, isLoading: false, error:null}
  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action))
    return {...state, error: action.payload, isLoading: false}
  
  return state
};
