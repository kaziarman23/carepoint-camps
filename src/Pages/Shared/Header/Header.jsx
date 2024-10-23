import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import Swal from "sweetalert2";
import UseJoinusBtn from "../../../CustomHooks/UseJoinusBtn";
import UseLogoutBtn from "../../../CustomHooks/UseLogoutBtn";

const Header = () => {
  const navigate = useNavigate();
  // Context api
  const { user, logoutUser } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Logout successfull",
      });
    });
  };

  const navlinks = (
    <>
      <NavLink to="/">
        <li className="p-2 font-bold text-white text-xl">Home</li>
      </NavLink>
      <NavLink to="/availableCamps">
        <li className="p-2 font-bold text-white text-xl">Available Camps</li>
      </NavLink>
      <NavLink to="/dashboard/dashboardInterface">
        <li className="p-2 font-bold text-white text-xl">DashBoard</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-blue-800 glass sticky top-0 left-0 z-50">
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
        <button title="Home Page" className="flex items-center gap-2">
          {/* <img src="/logo.png" alt="header img" className="w-8 h-8" /> */}
          <img
            src="/logo.png"
            alt="header img"
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />
          {/* <span className="text-2xl text-white">Carepoint Camps</span> */}
          <span className="text-sm text-white sm:text-base md:text-2xl">
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
              className="w-8 h-8 object-cover rounded-full"
            />
            <UseLogoutBtn onClick={handleLogout}>Logout</UseLogoutBtn>
          </div>
        ) : (
          <Link to="/register">
            <UseJoinusBtn>Join us</UseJoinusBtn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
