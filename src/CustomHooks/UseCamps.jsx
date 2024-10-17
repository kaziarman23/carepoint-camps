import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseCamps = () => {
  const axiosPublic = UseAxios();
  const { data: camp = [], refetch } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/camps");
      return res.data;
    },
  });

  return [camp, refetch];
};

export default UseCamps;
