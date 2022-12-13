import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categoriesMap) => ({
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    payload: categoriesMap
})