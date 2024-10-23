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

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 min-h-screen bg-[#6f5cc4] text-white">
        <h1 className="text-2xl text-center p-2">CarePoint Camps</h1>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/organizerProfile"
                  className="flex items-center p-2 rounded-xl"
                >
                  <FaUserShield className="w-6 h-6 mr-2" />
                  Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/AllUsers"
                  className="flex items-center p-2 rounded-xl"
                >
                  <FaUsers className="w-6 h-6 mr-2" />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addACamp"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdAddBusiness className="w-6 h-6 mr-2" />
                  Add A Camp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageCamps"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdHomeWork className="w-6 h-6 mr-2" />
                  Manage Camps
                </NavLink>
              </li>
              <li>
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
              <li>
                <NavLink
                  to="/dashboard/userAnalytics"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdAnalytics className="w-6 h-6 mr-2" />
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/ParticipantInformations"
                  className="flex items-center p-2 rounded-xl"
                >
                  <MdOutlineMedicalInformation className="w-6 h-6 mr-2" />
                  Participant Informations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userRequiestedCamps"
                  className="flex items-center p-2 rounded-xl"
                >
                  <GiCampingTent className="w-6 h-6 mr-2" />
                  Requested Camps
                </NavLink>
              </li>
              <li>
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

          <hr className="w-full my-5" />

          <li>
            <NavLink to="/" className="flex items-center p-2 rounded-xl">
              <IoMdHome className="w-6 h-6 mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/availableCamps"
              className="flex items-center p-2 rounded-xl"
            >
              <FaHouseMedical className="w-6 h-6 mr-2" />
              Available Camps
            </NavLink>
          </li>
          <li>
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
