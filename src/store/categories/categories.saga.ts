import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCollectionAndDocuments } from "../../utils/firebase/firestore.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./categories.action";

import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCollectionAndDocuments<Category>, 'categories');
        yield* put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield* put(fetchCategoriesFailure(error as Error))
    }
}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])
}