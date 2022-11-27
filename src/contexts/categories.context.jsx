import { useState, useEffect, createContext } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firestore.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionAndDocuments('categories');
      setCategoriesMap(categoriesMap);
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
