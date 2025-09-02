const DiscountedServices = () => {
  const services = [
    {
      id: 1,
      title: "General Health Check-ups",
      description:
        "Avail comprehensive health screenings at discounted rates. Our medical team will evaluate vital signs and conduct essential tests for maintaining good health.",
    },
    {
      id: 2,
      title: "Dental Check-ups",
      description:
        "Enjoy discounted dental consultations, cleanings, and advice on oral hygiene from our experienced dentists. Keep your smile healthy and bright.",
    },
    {
      id: 3,
      title: "Vaccination Drives",
      description:
        "Get essential vaccines at special discounted rates. Certified professionals will ensure safe administration for you and your family.",
    },
    {
      id: 4,
      title: "Eye Examinations",
      description:
        "Benefit from discounted eye examinations and screenings. Our certified doctors provide assessments for common eye conditions and corrective lenses if needed.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-sky-100 py-16">
      <div className="w-11/12 xl:w-4/5 mx-auto">
        {/* Section Header */}
        <div className="mx-auto mb-12">
          <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-CPC-ocean">Special offres</span>
          </h2>
          <p className="text-gray-600 text-left text-sm sm:text-base md:text-lg">
            Take advantage of our special offers on essential healthcare
            services. We provide high-quality care at discounted rates to ensure
            everyone has access to medical support.
          </p>
        </div>

        {/* Discount Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-gray-800 font-semibold text-sm mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {service.description}
              </p>
              <button className="mt-4 text-CPC-ocean font-semibold hover:underline text-left">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Best Care Section */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Exceptional Care at{" "}
              <span className="text-CPC-ocean">Discounted Rates</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Our medical camp offers affordable healthcare without compromising
              quality. Enjoy discounted services provided by expert
              professionals, modern equipment, and a patient-focused approach.
              We make healthcare accessible and reliable for everyone.
            </p>
            <div className="w-full flex justify-center items-center gap-2 p-2">
              <img
                src="https://i.pinimg.com/736x/40/4d/93/404d93c8834127cc3ed273112f0b53c9.jpg"
                alt="features"
                className="w-1/3 md:w-1/3 h-4/5 object-cover rounded-xl"
              />
              <img
                src="https://i.pinimg.com/1200x/bb/db/6f/bbdb6fbc940d4a8746e349769dc5f3e5.jpg"
                alt="features"
                className="w-1/3 md:w-1/3 h-4/5 object-cover rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/30/53/da/3053da7e5d6abb0b1411e77e73bcb66e.jpg"
                alt="features"
                className="w-1/3 md:w-1/3 h-4/5 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Left Side Image Section */}
          <div className="w-full lg:w-1/2 h-72 flex justify-center items-center gap-2 sm:h-[500px] md:h-[600px] mx-auto">
            <img
              src="https://i.pinimg.com/736x/07/b9/73/07b973f60b40437736a159e0764dc3f7.jpg"
              alt="discounted services"
              className="w-1/2 h-4/5 object-cover rounded-bl-[80px] md:rounded-bl-[200px]"
            />
            <img
              src="https://i.pinimg.com/564x/da/dd/21/dadd2104a744fd60f80b8589e71bdfad.jpg"
              alt="discounted services"
              className="w-1/2 h-4/5 object-cover rounded-br-[80px] md:rounded-br-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountedServices;
