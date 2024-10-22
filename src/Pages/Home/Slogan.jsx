import Marquee from "react-fast-marquee";

const Slogan = () => {
  return (
    <div className="w-full h-32 my-10">
      <Marquee pauseOnHover="true" speed="80">
        <h1 className="text-8xl text-[#d4d6e4]">
          We are Your Trusted Friends.
        </h1>
      </Marquee>
    </div>
  );
};

export default Slogan;
