import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Register from "../Pages/Authtication/Register/Register";
import Login from "../Pages/Authtication/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserRequiestedCamps from "../Pages/Dashboard/UserPages/UserRequiestedCamps/UserRequiestedCamps";
import UserAnalytics from "../Pages/Dashboard/UserPages/UserAnalytics/UserAnalytics";
import ParticipantProfile from "../Pages/Dashboard/UserPages/ParticipantProfile.jsx/ParticipantProfile";
import UserPaymentHistory from "../Pages/Dashboard/UserPages/UserPaymentHistory/UserPaymentHistory";
import ParticipantProfileUpdate from "../Pages/Dashboard/UserPages/ParticipantProfile.jsx/ParticipantProfileUpdate";
import OrganizerProfile from "../Pages/Dashboard/AdminPages/OrganizerProfile/OrganizerProfile";
import AddACamp from "../Pages/Dashboard/AdminPages/AddACamp/AddACamp";
import ManageCamps from "../Pages/Dashboard/AdminPages/ManageCamps/ManageCamps";
import ManageRegisteredCamps from "../Pages/Dashboard/AdminPages/ManageRegisteredCamps/ManageRegisteredCamps";
import OrganizerProfileUpdate from "../Pages/Dashboard/AdminPages/OrganizerProfile/OrganizerProfileUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableCamps",
        element: <AvailableCamps />,
      },
      {
        path: "/campDetails/:id",
        element: <CampDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/userRequiestedCamps",
        element: <UserRequiestedCamps />,
      },
      {
        path: "/dashboard/userAnalytics",
        element: <UserAnalytics />,
      },
      {
        path: "/dashboard/ParticipantProfile",
        element: <ParticipantProfile />,
      },
      {
        path: "/dashboard/participantProfileUpdate/:id",
        element: <ParticipantProfileUpdate />,
      },
      {
        path: "/dashboard/userPaymentHistory",
        element: <UserPaymentHistory />,
      },

      // Admin route
      {
        path: "/dashboard/organizerProfile",
        element: <OrganizerProfile />,
      },
      {
        path: "/dashboard/organizerProfileUpdate",
        element: <OrganizerProfileUpdate />,
      },
      {
        path: "/dashboard/addACamp",
        element: <AddACamp />,
      },
      {
        path: "/dashboard/manageCamps",
        element: <ManageCamps />,
      },
      {
        path: "/dashboard/manageRegisteredCamps",
        element: <ManageRegisteredCamps />,
      },
    ],
  },
]);

export default router;
