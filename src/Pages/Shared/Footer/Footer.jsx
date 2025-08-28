import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HeartHandshake,
} from "lucide-react";

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-transparent text-white font-semibold flex items-center justify-center hover:bg-CPC-ocean hover:text-CPC-sky transition-colors duration-300"
    aria-label="Social media link"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-CPC-ocean hover:text-CPC-sky pt-20 pb-5 font-sans">
      {/* Top Section with four columns */}
      <div className="w-4/5 mx-auto">
        <div className="flex gap-10 justify-between">
          <div className="w-1/2 space-y-4">
            <div className="flex items-center">
              <HeartHandshake className="h-8 w-8 mr-2 text-white" />
              <h1 className="font-extrabold text-3xl text-white">
                Carepoint Camps
              </h1>
            </div>
            <h5 className="font-extrabold text-white text-lg">
              Subscribe to our Newsletter
            </h5>
            <p className="text-white font-semibold">
              Get the latest news and updates from our medical camps.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-l-lg border-2 border-gray-200 focus:outline-none focus:border-[#9f86c0]"
              />
              <button
                type="submit"
                className="bg-CPC-sky/40  text-CPC-white font-semibold px-6 rounded-r-lg hover:bg-CPC-sky/90 hover:text-CPC-ocean transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-11/12 grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-4">
              <h3 className="font-extrabold text-white  text-lg">Menu</h3>
              <ul className="space-y-2 text-white font-semibold">
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-extrabold text-white text-lg">Pages</h3>
              <ul className="space-y-2 text-white font-semibold">
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:text-CPC-sky">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-extrabold text-white text-lg">Contact</h3>
              <div className="space-y-3 text-white font-semibold">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-white" />
                  CarepointCamp@proton.me
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-white" />
                  +8801123456789
                </p>
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-white flex-shrink-0 mt-1" />
                  143 Malibag, Dhaka City, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Bottom Bar */}
      <div className="w-4/5 mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <p className="text-CPC-white text-sm">
          Copyright © Carepoint Camps | All Rights Reserved
        </p>
        <div className="flex space-x-3">
          <SocialIcon href="#" className="bg-transparent">
            <Facebook size={16} />
          </SocialIcon>
          <SocialIcon href="#">
            <Twitter size={16} />
          </SocialIcon>
          <SocialIcon href="#">
            <Instagram size={16} />
          </SocialIcon>
          <SocialIcon href="#">
            <Linkedin size={16} />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
