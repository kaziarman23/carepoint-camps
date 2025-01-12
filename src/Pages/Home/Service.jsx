const Service = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 xl:w-11/12">
        <div className="w-72 h-72 rounded-xl bg-[#d7ede4] p-5 space-y-3 md:w-60 md:h-72 lg:w-80 xl:w-72 xl:h-72">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            General Health Check-ups
          </h1>
          <p className="text-[#8ba0b9] h-40 md:text-sm lg:text-base">
            Comprehensive health screenings to assess your overall health. Our
            medical team will evaluate vital signs, conduct basic tests like
            blood pressure and sugar levels for maintaining good health.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-72 h-72 rounded-xl bg-[#d7ede4] p-5 space-y-3 md:w-60 md:h-72 lg:w-80 xl:w-72 xl:h-72">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Dental Check-ups
          </h1>
          <p className="text-[#8ba0b9] h-40 md:text-sm lg:text-base">
            Free dental consultations, cleanings, and advice on oral hygiene
            from experienced dentists. We provide assessments for common
            problems like other oral health issues, ensuring a healthy smile for
            all.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-72 h-72 rounded-xl bg-[#d6d2f3] p-5 space-y-3 md:w-60 md:h-72 lg:w-80 xl:w-72 xl:h-72">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Vaccination Drives
          </h1>
          <p className="text-[#8ba0b9] h-40 md:text-sm lg:text-base">
            Protect yourself and your family with free vaccinations for common
            preventable diseases such as influenza, hepatitis, and tetanus. Our
            certified medical professionals will administer vaccines safely.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-72 h-72 rounded-xl bg-[#f3ddd9] p-5 space-y-3 md:w-60 md:h-72  lg:w-80 xl:w-72 xl:h-72">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Eye Examinations
          </h1>
          <p className="text-[#8ba0b9] h-40 lg:text-base">
            your vision tested with free eye examinations provided by our
            certified doctors. We offer screenings for common eye conditions for
            corrective lenses if needed.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
      </div>

      {/* best provide section */}
      <div className="w-full h-full mx-auto my-10 xl:w-4/5">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-3">
          {/* Text Section */}
          <div className="w-full p-2 lg:w-1/3 ">
            <h1 className="text-base p-2 text-center sm:text-lg md:text-2xl lg:text-left lg:text-3xl">
              We Provide Finest Patient&#39;s{" "}
              <span className="font-bold">Care & Amenities</span>
            </h1>
            <p className="p-2 text-left text-sm md:text-base">
              At our medical camp, we are committed to delivering the highest
              standard of patient care. Our experienced medical professionals
              ensure that each patient receives personalized attention,
              compassionate treatment, and expert medical advice. We take pride
              in creating a comfortable and welcoming environment where patients
              feel heard and supported throughout their healthcare journey. Our
              team utilizes the latest medical technology to provide accurate
              diagnoses and effective treatments, ensuring that every patient
              receives the care they deserve. From preventative screenings to
              emergency response, we are equipped to handle a wide range of
              medical needs. Your well-being is our priority, and we are
              dedicated to promoting not only physical health but also mental
              and emotional wellness. With CarePoint Camps, you can trust that
              you&#39;re in good hands.
            </p>
          </div>

          {/* Image Section (Main) */}
          <div className="w-4/5 h-72 mx-auto sm:h-[500px] md:h-[600px] lg:w-1/3">
            <img
              src="https://i.pinimg.com/564x/da/dd/21/dadd2104a744fd60f80b8589e71bdfad.jpg"
              alt="service section image"
              className="object-cover w-full h-full rounded-br-[80px] md:rounded-br-[200px]"
            />
          </div>

          {/* Features Section */}
          <div className="w-11/12 p-3 mx-auto lg:w-1/3 xl:p-5">
            <img
              src="https://i.pinimg.com/564x/2f/02/97/2f02970cd82044a3b4431b76a154ba0c.jpg"
              alt="service section right image"
              className="w-2/3 md:w-3/4 object-cover mx-auto rounded-xl mb-5"
            />
            <h3 className="font-bold text-left lg:text-left">
              Here are four key features we have:
            </h3>
            <ul className="text-left list-disc lg:text-left space-y-2 mt-3">
              <li>Expert Medical Professionals.</li>
              <li>State-of-the-Art Medical Equipment.</li>
              <li>Free or Affordable Services.</li>
              <li>Holistic Health Approach.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
