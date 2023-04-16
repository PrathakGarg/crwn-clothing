import { useState, useEffect, createContext } from "react";
import { gql, useQuery } from '@apollo/client'

export const CategoriesContext = createContext({
  categoriesMap: {},
  loading: false
});

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

export const CategoriesProvider = ({ children }) => {
  const { loading, data } = useQuery(COLLECTIONS)
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    if (data !== undefined) {
      const { collections } = data;
      const collectionsMap = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})

      setCategoriesMap(collectionsMap)
    }
  }, [data])

  const value = { categoriesMap, loading };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};