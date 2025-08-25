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
    className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300"
    aria-label="Social media link"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-sky-300 text-black pt-20 pb-5 font-sans">
      {/* Top Section with four columns */}
      <div className="w-4/5 mx-auto">
        <div className="flex gap-10 justify-between">
          <div className="w-1/2 space-y-4">
            <div className="flex items-center">
              <HeartHandshake className="h-8 w-8 mr-2 text-[#5e548e]" />
              <span className="font-bold text-xl">Carepoint Camps</span>
            </div>
            <h3 className="font-bold text-lg">Subscribe to our Newsletter</h3>
            <p className="text-gray-500">
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
                className="bg-[#5e548e] text-white font-semibold px-6 rounded-r-lg hover:bg-purple-600 hover:text-black transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-11/12 grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-4">
              <h3 className="font-bold  text-lg">Menu</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Pages</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5e548e]">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contact</h3>
              <div className="space-y-3 text-gray-500">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#5e548e]" />
                  CarepointCamp@proton.me
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#5e548e]" />
                  +8801123456789
                </p>
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#5e548e] flex-shrink-0 mt-1" />
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
        <p className="text-gray-500 text-sm">
          Copyright © Carepoint Camps | All Rights Reserved
        </p>
        <div className="flex space-x-3">
          <SocialIcon href="#">
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
