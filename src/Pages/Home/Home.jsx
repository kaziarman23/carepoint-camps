import Promotion from "./Promotion";
import Specialists from "./Specialists";
import History from "./History";
import Hero from "./Hero";
import Service from "./Service";
import DiscountedServices from "./DiscountedServices";
import Popular from "./Popular";
import Banner from './Banner';
import Team from './Team';

const Home = () => {
  return (
    <div>
      <Hero />
      <DiscountedServices />
      <Promotion />
      <Service />
      <Banner />
      <History />
      <Popular />
      <Specialists />
      <Team />
    </div>
  );
};

export default Home;
