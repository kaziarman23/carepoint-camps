import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500 text-black">
        <h1 className="text-2xl text-center p-2">CarePoint Camps</h1>
        <ul className="menu">
          <li className="">
            <NavLink to="/dashboard/userAnalytics" className="rounded-xl">
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ParticipantProfile" className="rounded-xl">
              Participant Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userRequiestedCamps" className="rounded-xl">
              Requiested Camps
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userPaymentHistory" className="rounded-xl">
              Payment History
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="rounded-xl">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/availableCamps" className="rounded-xl">
              Available capms
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
