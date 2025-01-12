import Marquee from "react-fast-marquee";

const Title = () => {
  return (
    <div className="w-full h-full border-y-2">
      <Marquee pauseOnHover="true" speed="80">
        <h1 className="text-7xl p-5 text-[#d4d6e4]">
          We are Your Trusted Friends.
        </h1>
      </Marquee>
    </div>
  );
};

export default Title;
