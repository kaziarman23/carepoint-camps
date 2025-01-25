import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseLogoutBtn from "../../../CustomHooks/UseLogoutBtn";
import UseUnderlineBtn from "../../../CustomHooks/UseUnderlineBtn";
import toast from "react-hot-toast";
import { Ri24HoursLine } from "react-icons/ri";

const Header = () => {
  // states
  const navigate = useNavigate();

  // Context api
  const { user, logoutUser } = useContext(AuthContext);

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
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-xl">Home</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/availableCamps">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-xl">Available Camps</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/dashboard/dashboardInterface">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-xl">DashBoard</li>
        </UseUnderlineBtn>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-blue-800 glass">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow glass bg-slate-900"
          >
            {navlinks}
          </ul>
        </div>
        <button
          title="Home Page"
          className="text-white flex items-center gap-2"
        >
          <Ri24HoursLine className="w-8 h-8 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          <span className="text-xs font-bold sm:text-base md:text-2xl">
            Carepoint Camps
          </span>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://i.pinimg.com/enabled/564x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
              }
              alt="user profile"
              className="w-6 h-6 object-cover rounded-full xl:w-8 xl:h-8"
            />
            <UseLogoutBtn onClick={handleLogout}>Logout</UseLogoutBtn>
          </div>
        ) : (
          <Link to="/register">
            <button className="uppercase text-xs p-2 rounded-xl font-bold text-white border-transparent bg-[#637ABC] border-2 hover:text-black hover:bg-blue-600 lg:p-3">
              Join us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
