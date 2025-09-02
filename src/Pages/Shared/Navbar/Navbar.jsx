import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import toast from "react-hot-toast";
import UsePrimaryBtn from "../../../CustomHooks/UsePrimaryBtn";
import { HeartHandshake } from "lucide-react";

const Navbar = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Context api
  const { user, logoutUser } = useContext(AuthContext);

  // handle navbar bg blur effect
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/40", "backdrop-blur-md", "shadow-md");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-white/40", "backdrop-blur-md", "shadow-md");
        navbar.classList.add("bg-transparent");
      }
    };

    const handleMenuToggle = () => {
      menu.classList.toggle("hidden");
    };

    window.addEventListener("scroll", handleScroll);
    menuBtn.addEventListener("click", handleMenuToggle);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  // Handle Logout
  const handleLogout = () => {
    logoutUser().then(() => {
      // navigating the user
      navigate("/");

      // showing an alert
      toast.success("Logout successfull");
    });
  };

  const navlinks = (
    <>
      <li className="p-2 font-bold text-base hover:text-CPC-ocean">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="p-2 font-bold text-base hover:text-CPC-ocean">
        <NavLink to="/availableCamps">Available Camps</NavLink>
      </li>
      <li className="p-2 font-bold text-base hover:text-CPC-ocean">
        <NavLink to="/aboutUs">About</NavLink>
      </li>
      <li className="p-2 font-bold text-base hover:text-CPC-ocean">
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      {user && (
        <li className="p-2 font-bold text-base hover:text-CPC-ocean">
          <NavLink to="/dashboard/dashboardInterface">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent backdrop-blur-md"
    >
      <div className="lg:w-11/12 w-full mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-xl flex items-center gap-1 font-extrabold text-CPC-ocean"
        >
          <HeartHandshake className="h-8 w-8 text-CPC-ocean" />
          CPC
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-6 list-none">
          {navlinks}
        </ul>

        {/* Right - User / Register */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.pinimg.com/736x/e2/86/dd/e286dde020e3fea2a6522c090eb7da6a.jpg"
                }
                alt="user profile"
                className="w-8 h-8 object-cover rounded-full"
              />
              <UsePrimaryBtn isLogout onClick={handleLogout}>
                Logout
              </UsePrimaryBtn>
            </>
          ) : (
            <Link to="/register">
              <UsePrimaryBtn>Register</UsePrimaryBtn>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="lg:hidden text-gray-700 focus:outline-none ml-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-start p-4 space-y-2">{navlinks}</ul>
        <div className="flex flex-col items-start px-4 py-2 border-t">
          {user ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.pinimg.com/736x/e2/86/dd/e286dde020e3fea2a6522c090eb7da6a.jpg"
                  }
                  alt="user profile"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <span className="font-medium">
                  {user.displayName || "User"}
                </span>
              </div>
              <UsePrimaryBtn isLogout onClick={handleLogout}>
                Logout
              </UsePrimaryBtn>
            </>
          ) : (
            <Link to="/register">
              <UsePrimaryBtn>Register</UsePrimaryBtn>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
