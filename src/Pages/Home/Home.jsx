import Feature from "./Feature";
import Specialists from "../Specialists/Specialists";
import Hero from "./Hero";
import History from "./History";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <History />  
      {/* have to do bento box for upcoming camps*/}
      <hr className="w-4/5 mx-auto" />
      <Feature />
      <hr className="w-4/5 mx-auto" />
      <Specialists />
      <hr className="w-4/5 mx-auto" />

      <Reviews />
    </div>
  );
};

export default Home;
