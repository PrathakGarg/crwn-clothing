import CategoryList from "../../components/CategoryList/CategoryList.component";
import Categories from "../../assets/data.json";

const Home = () => {
  return (
    <div>
      <CategoryList categories={Categories} />
    </div>
  );
};

export default Home;
