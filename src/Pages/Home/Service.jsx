import { TbPointFilled } from "react-icons/tb";

const Service = () => {
  return (
    <div className="w-full h-full">
      <div className="w-11/12 mx-auto flex justify-center items-center gap-5">
        <div className="w-80 h-64 rounded-xl bg-[#c2dbf4] p-5 space-y-3">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            General Health Check-ups
          </h1>
          <p className="text-[#8ba0b9] h-36">
            Comprehensive health screenings to assess your overall health. Our
            medical team will evaluate vital signs, conduct basic tests like
            blood pressure and sugar levels for maintaining good health.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-80 h-64 rounded-xl bg-[#d7ede4] p-5 space-y-3">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Dental Check-ups
          </h1>
          <p className="text-[#8ba0b9] h-36">
            Free dental consultations, cleanings, and advice on oral hygiene
            from experienced dentists. We provide assessments for common
            problems like other oral health issues, ensuring a healthy smile for
            all.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-80 h-64 rounded-xl bg-[#d6d2f3] p-5 space-y-3">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Vaccination Drives
          </h1>
          <p className="text-[#8ba0b9] h-36">
            Protect yourself and your family with free vaccinations for common
            preventable diseases such as influenza, hepatitis, and tetanus. Our
            certified medical professionals will administer vaccines safely.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
        <div className="w-80 h-64 rounded-xl bg-[#f3ddd9] p-5 space-y-3">
          <h1 className="text-center font-bold text-xl text-[#455d75]">
            Eye Examinations
          </h1>
          <p className="text-[#8ba0b9] h-36">
            your vision tested with free eye examinations provided by our
            certified doctors. We offer screenings for common eye conditions for
            corrective lenses if needed.
          </p>
          <p className="text-[#455d75]">Learn more</p>
        </div>
      </div>

      {/* best provide section */}
      <div className="w-4/5 h-full mx-auto my-10">
        <div className="flex justify-center items-center gap-3">
          <div className="w-1/3">
            <h1 className="text-3xl p-2 text-left">
              We Provide Finnest Patient&#39;t{" "}
              <span className="font-bold">Care & Amenities</span>
            </h1>
            <p className="p-2">
              At our medical camp, we are committed to delivering the highest
              standard of patient care. Our experienced medical professionals
              ensure that each patient receives personalized attention,
              compassionate treatment, and expert medical advice.
            </p>
          </div>
          <div className="w-1/3 h-96">
            <img
              src="https://i.pinimg.com/564x/da/dd/21/dadd2104a744fd60f80b8589e71bdfad.jpg"
              alt="service section image"
              className="object-cover w-full h-full rounded-br-[200px]"
            />
          </div>
          <div className="w-1/3 p-3">
            <img
              src="https://i.pinimg.com/564x/2f/02/97/2f02970cd82044a3b4431b76a154ba0c.jpg"
              alt="service section right image"
              className="w-3/4 object-cover mx-auto rounded-xl mb-5"
            />
            <h3 className="font-bold text-left">
              Here are four key features we have:
            </h3>
            <div className="">
              <p className="flex items-center">
                <TbPointFilled className="w-4 h-4" />
                Expert Medical Professionals
              </p>
              <p className="flex items-center">
                <TbPointFilled className="w-4 h-4" />
                State-of-the-Art Medical Equipment
              </p>
              <p className="flex items-center">
                <TbPointFilled className="w-4 h-4" />
                Free or Affordable Services
              </p>
              <p className="flex items-center">
                <TbPointFilled className="w-4 h-4" />
                Holistic Health Approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
