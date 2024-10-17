import Feature from "../Feature/Feature";
import Specialists from "../Specialists/Specialists";
import Hero from "./Hero";
import History from "./History";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <History />
      {/* <Feature /> */}
      <Specialists />
      <Reviews />
    </div>
  );
};

export default Home;
