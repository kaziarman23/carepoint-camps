import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const UsePayment = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxios();

  const { data: payment = [], refetch } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return [payment, refetch];
};

export default UsePayment;
