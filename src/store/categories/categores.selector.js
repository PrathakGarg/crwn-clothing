import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray) =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;

      return acc;
    }, {})
);
