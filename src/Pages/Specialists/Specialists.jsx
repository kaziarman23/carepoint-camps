import { useState } from "react";
import { FaFacebook, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAxios from "../../CustomHooks/UseAxios";

const Specialists = () => {
  const [specialistData, setSpecialistData] = useState([]);

  // hooks
  const axiosPublic = UseAxios();
  axiosPublic.get("/specialists").then((res) => setSpecialistData(res.data));

  const handleClick = () => {
    Swal.fire({
      title: "Error!",
      text: "This is a Demo Link",
      icon: "error",
      background: "#111827",
      color: "white",
      confirmButtonText: "Ok, Cool",
    });
  };

  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
            Meet Our Expert Medical Specialists
          </h2>
          <p className="text-sm lg:mb-16 text-gray-400">
            Our team of highly skilled medical professionals is dedicated to
            providing top-notch healthcare services. With specialists in various
            fields, including cardiology, pediatrics, dermatology, and
            orthopedics, we are committed to delivering personalized care
            tailored to your needs.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {specialistData.map((doc) => (
            <div
              key={doc.id}
              className="items-center rounded-lg shadow sm:flex bg-gray-800 border-gray-700"
            >
              <img
                className="w-1/2 h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={doc.image}
                alt={doc.name}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {doc.name}
                </h3>
                <span className=" text-gray-400">{doc.specialty}</span>
                <p className="mt-3 mb-4 font-light  text-gray-400">
                  {doc.hospital}
                  <br />
                  {doc.phone}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <FaFacebook
                      onClick={handleClick}
                      className="w-8 h-8 cursor-pointer"
                    />
                  </li>
                  <li>
                    <FaInstagram
                      onClick={handleClick}
                      className="w-8 h-8 cursor-pointer"
                    />
                  </li>
                  <li>
                    <FaSquareTwitter
                      onClick={handleClick}
                      className="w-8 h-8 cursor-pointer"
                    />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Specialists;
