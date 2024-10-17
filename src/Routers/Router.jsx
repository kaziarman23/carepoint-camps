import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Register from "../Pages/Authtication/Register/Register";
import Login from "../Pages/Authtication/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import CampDetails from "../Pages/CampDetails/CampDetails";

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
]);

export default router;
