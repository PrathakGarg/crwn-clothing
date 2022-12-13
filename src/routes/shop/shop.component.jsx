import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { getCollectionAndDocuments } from "../../utils/firebase/firestore.utils";
import { setCategoriesMap } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionAndDocuments('categories');
      dispatch(setCategoriesMap(categoriesMap));
    }

    getCategoriesMap();
  }, [dispatch])

  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
