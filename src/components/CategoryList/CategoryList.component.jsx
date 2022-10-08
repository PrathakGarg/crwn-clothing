import "./CategoryList.styles.scss";

import CategoryCard from "../CategoryCard/CategoryCard.component";

const CategoryList = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>
);

export default CategoryList;
