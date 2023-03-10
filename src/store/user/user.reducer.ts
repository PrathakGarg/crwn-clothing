import { AnyAction } from "redux";

import { googleSignInStart, emailSignInStart, signUpStart, signOutStart, signInSuccess, signOutSuccess, signInFailed, signOutFailed, signUpFailed } from "./user.action";
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
