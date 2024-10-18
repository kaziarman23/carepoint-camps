import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseParticipant = () => {
    const axiosPublic = UseAxios();
    const { data: participant = [], refetch } = useQuery({
      queryKey: ["participants"],
      queryFn: async () => {
        const res = await axiosPublic.get("/participants");
        return res.data;
      },
    });
  
    return [participant, refetch];
};

export default UseParticipant;