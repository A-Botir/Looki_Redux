import Hero from "../components/Hero";
import Info from "../components/Info";
import Brend from "../components/Brends";
import OurProduct from "../components/OurProduct";
import ArrivalProduct from "../components/ArrivalProduct";
import LatestBlog from "../components/LatestBlog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <OurProduct />
      <ArrivalProduct />
      <LatestBlog />
      <Brend />
    </div>
  );
};

export default Home;
