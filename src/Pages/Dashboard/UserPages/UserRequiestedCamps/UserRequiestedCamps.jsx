import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import Swal from "sweetalert2";
import UseAxios from "../../../../CustomHooks/UseAxios";

const UserRequiestedCamps = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [participant, refetch] = UseParticipant();
  const axiosPublic = UseAxios();

  const participantProfile = participant.filter(
    (participant) => participant.userEmail === user.email
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/participants/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your registation has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // checking the user
  if (!user) {
    return (
      <div className="w-full h-full my-10 flex flex-col justify-center items-center">
        <p className="w-96 h-full loading loading-infinity loading-xl"></p>
        <h1 className="text-4xl">Loading Data...</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="bg-orange-600 w-4/5 min-h-full mx-auto my-10 rounded-xl">
        <h1 className="text-center text-2xl font-bold text-white p-2">
          Requiested Camps
        </h1>
        {/* table content */}
        <div className="w-full overflow-x-auto my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>SL</th>
                <th>Camp Name</th>
                <th>Camp Price</th>
                <th>Participant Name</th>
                <th>Payment Status</th>
                <th>Confirmation status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {participantProfile.map((participant, index) => (
                <tr key={participant._id}>
                  <th>{index + 1}</th>
                  <th>{participant.name}</th>
                  <td>{participant.price}</td>
                  <td>{participant.userName}</td>
                  <td>
                    <button className="px-6 py-3 bg-purple-600 text-black rounded-xl hover:bg-purple-700 hover:text-white">
                      Pay
                    </button>
                  </td>
                  <td>
                    <button className="">Pending</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(participant._id)}
                      className="px-6 py-3 bg-red-600 text-black rounded-xl hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserRequiestedCamps;
