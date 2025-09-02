import { useState } from "react";
import UseAxios from "../../CustomHooks/UseAxios";
import UseSocialIcons from "../../CustomHooks/UseSocialIcons";
import toast from 'react-hot-toast';

const Specialists = () => {
  const [specialistData, setSpecialistData] = useState([]);

  // hooks
  const axiosPublic = UseAxios();
  axiosPublic.get("/specialists").then((res) => setSpecialistData(res.data));

  const handleClick = () => {
    toast.error("This is a demo link.")
  };

  return (
    <section className="w-full min-h-screen bg-sky-100 py-10">
      <div className="w-11/12 mx-auto">
        {/* Heading Section */}
        <div className="mx-auto w-full text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-base sm:text-4xl tracking-tight font-extrabold">
            Meet Our Expert{" "}
            <span className="font-bold text-CPC-ocean">Medical Specialists</span>
          </h2>
          <p className="text-sm text-left sm:text-base lg:text-lg">
            Our team of highly skilled medical professionals is dedicated to
            providing top-notch healthcare services. With specialists in various
            fields, including cardiology, pediatrics, dermatology, and
            orthopedics, we are committed to delivering personalized care
            tailored to your needs.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-2">
          {specialistData.map((doc) => (
            <div
              key={doc.id}
              className="w-full h-full flex flex-col justify-center items-center rounded-2xl shadow-xl bg-CPC-ocean/20 p-3 sm:flex-row sm:justify-evenly"
            >
              <img
                className="w-32 h-32 rounded-full object-cover mb-4 sm:w-40 sm:h-40 sm:mb-0"
                src={doc.image}
                alt={doc.name}
              />
              <div className="p-5 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {doc.name}
                </h3>
                <span className="block font-semibold">{doc.specialty}</span>
                <p className="mt-2 mb-4 font-light text-gray-600">
                  {doc.hospital}
                  <br />
                  {doc.phone}
                </p>
                <UseSocialIcons onClick={handleClick} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Specialists;
