import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Error!",
      text: "This is a Demo Link",
      icon: "error",
      confirmButtonText: "Ok, Cool",
    });
  };

  return (
    <footer className="bg-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="flex items-center">
              <Link to="/" className="flex items-center text-white gap-2">
                <Ri24HoursLine className="w-8 h-8 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  CarePoint Camps
                </span>
              </Link>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Resources
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <p className="hover:underline">Flowbite</p>
                </li>
                <li>
                  <p className="hover:underline">Daisy ui</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <p className="hover:underline">Github</p>
                </li>
                <li>
                  <p className="hover:underline">Discord</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <p className="hover:underline">Privacy Policy</p>
                </li>
                <li>
                  <p className="hover:underline">Terms &amp; Conditions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2025{" "}
            <Link to="/" className="hover:underline">
              CarePoint-Camps™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <p className="text-gray-500 hover:text-white ms-5">
              <FaFacebook
                className="w-8 h-8 cursor-pointer"
                onClick={handleClick}
              />
            </p>
            <p className="text-gray-500 hover:text-white ms-5">
              <FaDiscord
                className="w-8 h-8 cursor-pointer"
                onClick={handleClick}
              />
            </p>
            <p className="text-gray-500 hover:text-white ms-5">
              <FaTwitter
                className="w-8 h-8 cursor-pointer"
                onClick={handleClick}
              />
            </p>
            <p className="text-gray-500 hover:text-white ms-5">
              <FaGithub
                className="w-8 h-8 cursor-pointer"
                onClick={handleClick}
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
