import { takeLatest, all, call, put } from "redux-saga/effects"

import { USER_ACTION_TYPES } from "./user.types"
import { signInFailed, signInSuccess, signUpFailed, signUpSuccess } from "./user.action"

import { getCurrentUser, signInWithGooglePopup, signInWithEmailAndPasswordCustom, createAuthUserWithEmailAndPassword, signOutUser } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firestore.utils"

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInfo)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return

        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInWithEmailAndPasswordCustom, email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* userSignUp({ payload: { email, password, additionalInfo } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpSuccess(user, additionalInfo))
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
    yield call(getSnapshotFromUserAuth, user, additionalInfo)
}

export function* userSignOut() {
    yield call(signOutUser)
    yield call(isUserAuthenticated)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignIn() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignIn() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onUserSignUp() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, userSignUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUserSignOut() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT, userSignOut)
}

export function* userSaga() {
    yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn), call(onUserSignUp), call(onSignUpSuccess), call(onUserSignOut)])
}