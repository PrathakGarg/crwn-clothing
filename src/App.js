import CategoryList from "./components/CategoryList/CategoryList.component";
import CategoryJson from "./assets/categories.json"

const App = () => {
  const categories = CategoryJson.categories;

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
