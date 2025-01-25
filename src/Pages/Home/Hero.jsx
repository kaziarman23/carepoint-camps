const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#d8e3e9]">
      <div className="min-h-full flex flex-col justify-center items-center sm:flex-row">
        <div className="w-full p-6 space-y-5 sm:w-1/2">
          <h1 className="text-2xl font-bold text-left text-[#436b87] sm:text-2xl lg:text-5xl xl:text-6xl">
            CarePoint Camps
          </h1>
          <h5 className="text-sm font-bold text-left text-[#232c33] lg:text-xl xl:text-3xl">
            Manage your medical camps effortlessly with CarePoint Camps. Our
            comprehensive platform offers seamless registration, resource
            planning, and real-time insights, ensuring that every camp runs
            smoothly and efficiently. Focus on delivering exceptional care while
          </h5>
        </div>
        <div className="w-full flex justify-center items-center sm:w-1/2">
          <img
            src={"/heroSectionImage.png"}
            alt="hero section image"
            className="object-cover h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
