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
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#6f5cc4] text-white">
        <h1 className="text-2xl text-center p-2">CarePoint Camps</h1>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="">
                <NavLink
                  to="/dashboard/organizerProfile"
                  className="rounded-xl"
                >
                  <FaUserShield className="w-6 h-6" />
                  Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AllUsers" className="rounded-xl">
                  <FaUsers className="w-6 h-6" />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addACamp" className="rounded-xl">
                  <MdAddBusiness className="w-6 h-6" />
                  Add A Camp
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCamps" className="rounded-xl">
                  <MdHomeWork className="w-6 h-6" />
                  Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageRegisteredCamps"
                  className="rounded-xl"
                >
                  <BsPersonWorkspace className="w-6 h-6" />
                  Manage Registered Camps
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <NavLink to="/dashboard/userAnalytics" className="rounded-xl">
                  <MdAnalytics className="w-6 h-6" />
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/ParticipantInformations"
                  className="rounded-xl"
                >
                  <MdOutlineMedicalInformation className="w-6 h-6" />{" "}
                  Participant Informations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userRequiestedCamps"
                  className="rounded-xl"
                >
                  <GiCampingTent className="w-6 h-6" /> Requiested Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userPaymentHistory"
                  className="rounded-xl"
                >
                  <FaMoneyCheckAlt className="w-6 h-6" />
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <hr className="w-full my-10" />

          <li>
            <NavLink to="/" className="rounded-xl">
              <IoMdHome className="w-6 h-6" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/availableCamps" className="rounded-xl">
              <FaHouseMedical className="w-6 h-6" />
              Available capms
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/dashboardInterface" className="rounded-xl">
              <MdDashboard className="w-6 h-6" />
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
