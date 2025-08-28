const Promotion = () => {
  const stats = [
    {
      value: "50+",
      title: "CAMPS CONDUCTED",
      description: "Bringing healthcare to remote and underserved areas.",
    },
    {
      value: "10,000+",
      title: "PATIENTS SERVED",
      description: "Providing free consultations and primary care.",
    },
    {
      value: "20+",
      title: "MEDICAL SPECIALTIES",
      description: "Access to specialists in cardiology, pediatrics, and more.",
    },
    {
      value: "98%",
      title: "PATIENT SATISFACTION",
      description: "Focused on providing compassionate and quality care.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-sky-100 flex items-center justify-center font-sans py-16">
      <div className="w-4/5 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 xl:gap-2 ">
          <h5 className="text-gray-600 font-bold text-xl">Carepoint Camps</h5>
          <h1 className="text-4xl font-extrabold leading-tight text-brand-900 drop-shadow-sm">
            Bringing <span className="text-CPC-ocean">Quality Healthcare</span>{" "}
            <br /> to Your Community
          </h1>
          <p className="text-gray-500 text-lg">
            Our medical camps provide free health check-ups, specialist
            consultations, and essential medicines to those in need. We are
            committed to making healthcare accessible for everyone.
          </p>
          <div className="mt-6">
            <button
              className="bg-CPC-ocean hover:bg-purple-700
            text-white font-semibold py-3 px-8
            rounded-2xl shadow-lg 
            hover:text-black transition-transform duration-300 hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="min-h-56 flex flex-col gap-3 bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl transition duration-300"
            >
              <h2 className="text-5xl font-extrabold text-CPC-ocean">
                {stat.value}
              </h2>
              <div className="relative">
                <h3 className="text-xs font-semibold text-black mt-2 tracking-widest uppercase">
                  {stat.title}
                </h3>
                {/* Underline effect */}
                <div className="absolute top-[-6px] left-0 w-10 h-1 bg-brand-500 rounded-full"></div>
              </div>
              <p className="text-brand-700 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotion;
