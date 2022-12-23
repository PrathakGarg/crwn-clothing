import { USER_ACTION_TYPES } from "./user.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, additionalInfo = {}) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    additionalInfo,
  });

export const signUpSuccess = (user, additionalInfo) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo })

export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)

export const signOut = () => createAction(USER_ACTION_TYPES.SIGN_OUT);
