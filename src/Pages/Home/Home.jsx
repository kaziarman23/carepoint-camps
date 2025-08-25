import Promotion from "./Promotion";
import Specialists from "./Specialists";
import History from "./History";
import Reviews from "./Reviews";
import Hero from "./Hero";
import Service from "./Service";
import DiscountedServices from './DiscountedServices';
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <Hero />
      <DiscountedServices />
      <Promotion />
      <Service />
      <History />
      <Popular />
      <Specialists />
      <Reviews />
    </div>
  );
};

export default Home;
