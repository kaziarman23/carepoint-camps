import Marquee from "react-fast-marquee";

const Title = () => {
  return (
    <div className="w-full h-full">
      <Marquee pauseOnHover="true" speed="60">
        <h1 className="text-3xl p-3 text-black">
          We are Your Trusted Friends, We are Here to Help You, We are Here to
          Care for You.
        </h1>
      </Marquee>
    </div>
  );
};

export default Title;
