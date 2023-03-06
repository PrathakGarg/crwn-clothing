import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

import { CategoryAction } from "./categories.action";

export type CategoriesState = {
  readonly categoriesArray: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state;
  }
};