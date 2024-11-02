import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../CustomHooks/UseAdmin";
import {
  MdAddBusiness,
  MdAnalytics,
  MdDashboard,
  MdHomeWork,
} from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaMoneyCheckAlt, FaUsers, FaUserShield } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaHouseMedical } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((preValue) => !preValue);

  const handleNavClick = () => {
    // Close sidebar only on small screens
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Toggle Button for Small Screens */}
      <div className="text-white bg-[#6f5cc4] flex justify-start items-center gap-4 md:hidden">
        <div
          tabIndex={0}
          role="button"
          onClick={toggleSidebar}
          className="btn btn-ghost"
        >
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
        <h1>Carepoint Camp</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 min-h-screen bg-[#6f5cc4] text-white md:relative absolute z-10`}
      >
        <div className="text-white bg-[#6f5cc4] flex justify-start items-center gap-4 md:hidden">
          <div
            tabIndex={0}
            role="button"
            onClick={toggleSidebar}
            className="btn btn-ghost"
          >
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
          <h1>Carepoint Camp</h1>
        </div>
        <ul className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/organizerProfile"
                  className="flex items-center p-2 rounded-xl"
                >
                  <FaUserShield className="w-6 h-6 mr-2" />
                  Organizer Profile
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/AllUsers"
                  className="flex items-center p-2 rounded-xl"
                >
                  <FaUsers className="w-6 h-6 mr-2" />
                  All Users
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/addACamp"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdAddBusiness className="w-6 h-6 mr-2" />
                  Add A Camp
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/manageCamps"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdHomeWork className="w-6 h-6 mr-2" />
                  Manage Camps
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/manageRegisteredCamps"
                  className="flex items-center p-2 rounded-xl"
                >
                  <BsPersonWorkspace className="w-6 h-6 mr-2" />
                  Manage Registered Camps
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/userAnalytics"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdAnalytics className="w-6 h-6 mr-2" />
                  Analytics
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/ParticipantInformations"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdOutlineMedicalInformation className="w-6 h-6 mr-2" />
                  Participant Informations
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/userRequiestedCamps"
                  className="flex items-center p-2 rounded-xl"
                >
                  <GiCampingTent className="w-6 h-6 mr-2" />
                  Requested Camps
                </NavLink>
              </li>
              <li onClick={handleNavClick}>
                <NavLink
                  to="/dashboard/userPaymentHistory"
                  className="flex items-center p-2 rounded-xl"
                >
                  <FaMoneyCheckAlt className="w-6 h-6 mr-2" />
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <hr className="w-full my-5 border-gray-300" />

          <li onClick={handleNavClick}>
            <NavLink to="/" className="flex items-center p-2 rounded-xl">
              <IoMdHome className="w-6 h-6 mr-2" />
              Home
            </NavLink>
          </li>
          <li onClick={handleNavClick}>
            <NavLink
              to="/availableCamps"
              className="flex items-center p-2 rounded-xl"
            >
              <FaHouseMedical className="w-6 h-6 mr-2" />
              Available Camps
            </NavLink>
          </li>
          <li onClick={handleNavClick}>
            <NavLink
              to="/dashboard/dashboardInterface"
              className="flex items-center p-2 rounded-xl"
            >
              <MdDashboard className="w-6 h-6 mr-2" />
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
