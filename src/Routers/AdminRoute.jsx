import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";
import UseAdmin from "../CustomHooks/UseAdmin";

const AdminRoute = ({ children }) => {
  // states
  const location = useLocation();

  // context api
  const { user, loading } = useContext(AuthContext);

  // hooks
  const [isAdmin, isAdminLoading] = UseAdmin();

  // checking, if the user is admin or not
  if (loading || isAdminLoading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <p className="text-white w-80 h-80 loading loading-infinity loading-xl"></p>
      </div>
    );
  }

  // If the user is admin
  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};

export default AdminRoute;
