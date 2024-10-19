import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseUsers = () => {
  const axiosPublic = UseAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [users, refetch];
};

export default UseUsers;
