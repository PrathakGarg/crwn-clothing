import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

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
