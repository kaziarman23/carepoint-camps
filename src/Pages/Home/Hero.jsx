const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#d8e3e9]">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-6 space-y-5">
          <h1 className="text-6xl font-bold text-left text-[#436b87]">
            CarePoint Camps
          </h1>
          <h5 className="text-3xl font-bold text-left text-[#232c33]">
            Manage your medical camps effortlessly with CarePoint Camps. Our
            comprehensive platform offers seamless registration, resource
            planning, and real-time insights, ensuring that every camp runs
            smoothly and efficiently. Focus on delivering exceptional care while
          </h5>
        </div>
        <div className="w-1/2 flex justify-center items-center">
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
