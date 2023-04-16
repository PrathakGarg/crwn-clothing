import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client"

import ProductCard from "../../components/ProductCard/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const GET_CATEGORY = gql`
  query ($title: String!){
    getCollectionsByTitle(title: $title) {
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

const Category = () => {
  const { category } = useParams();

  const { data, loading } = useQuery(GET_CATEGORY, {
    variables: {title: category}
  })

  useEffect(() => {
    if (data !== undefined) {
      const { getCollectionsByTitle: { items } } = data
      
      setProducts(items)
    }

  }, [data, category]);
  
  // const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);


  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
            <h2 className="category-title">
              <span>{category.toUpperCase()}</span>
            </h2>
            <div className="category-container">
              {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )
      }
    </>
  );
};

export default Category;
