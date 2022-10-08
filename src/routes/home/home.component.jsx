import CategoryList from "../../components/CategoryList/CategoryList.component";
import Data from "../../assets/data.json";

const Home = () => {
  const categories = Data.categories;

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;
