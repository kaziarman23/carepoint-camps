import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isAdmin, isPanding: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
