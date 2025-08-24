import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseLogoutBtn from "../../../CustomHooks/UseLogoutBtn";
// import UseUnderlineBtn from "../../../CustomHooks/UseUnderlineBtn";
import toast from "react-hot-toast";
// import { Ri24HoursLine } from "react-icons/ri";

const Navbar = () => {
  // states
  const navigate = useNavigate();

  // Context api
  const { user, logoutUser } = useContext(AuthContext);

  // handle navbar bg blur effect
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/40", "backdrop-blur-md", "shadow-md");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-white/40", "backdrop-blur-md", "shadow-md");
        navbar.classList.add("bg-transparent");
      }
    };

    // Mobile menu toggle
    const handleMenuToggle = () => {
      menu.classList.toggle("hidden");
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      if (!menu.classList.contains("lg:flex")) {
        menu.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    menuBtn.addEventListener("click", handleMenuToggle);

    document
      .querySelectorAll("#menu a")
      .forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn.removeEventListener("click", handleMenuToggle);
      document
        .querySelectorAll("#menu a")
        .forEach((link) =>
          link.removeEventListener("click", handleAnchorClick)
        );
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
      <NavLink to="/">
        <li className="p-2 font-bold text-base">Home</li>
      </NavLink>
      <NavLink to="/availableCamps">
        <li className="p-2 font-bold text-base">Available Camps</li>
      </NavLink>
      <NavLink to="/dashboard/dashboardInterface">
        <li className="p-2 font-bold text-base">DashBoard</li>
      </NavLink>
    </>
  );

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent"
    >
      <div className="lg:w-11/12 w-full mx-auto flex items-center justify-between px-4 py-3">
        {/* Left - Nav Links */}
        <ul
          id="menu"
          className="hidden flex-col lg:flex lg:flex-row lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ease-in-out list-none"
        >
          {navlinks}
        </ul>

        {/* Right - User / Register */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.pinimg.com/enabled/564x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
                }
                alt="user profile"
                className="w-6 h-6 object-cover rounded-full xl:w-8 xl:h-8"
              />
              <UseLogoutBtn onClick={handleLogout}>Logout</UseLogoutBtn>
            </>
          ) : (
            <Link to="/register">
              <button className="uppercase text-white bg-slate-800 border-black text-xs px-3 py-2 rounded-lg font-bold lg:p-3 border hover:bg-slate-900 transition">
                Register
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button (stays at far right on mobile) */}
        <button
          id="menu-btn"
          className="lg:hidden text-gray-700 focus:outline-none ml-3"
        >
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
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
