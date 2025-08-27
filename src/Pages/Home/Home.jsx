import Promotion from "./Promotion";
import Specialists from "./Specialists";
import Hero from "./Hero";
import Service from "./Service";
import DiscountedServices from "./DiscountedServices";
import Popular from "./Popular";
import Banner from './Banner';
import Team from './Team';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <DiscountedServices />
      <Promotion />
      <Service />
      <Banner />
      <Team />
      <Testimonials />
      <Specialists />
      <Popular />
    </div>
  );
};

export default Home;
