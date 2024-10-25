import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import Swal from "sweetalert2";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const UserRequiestedCamps = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [participant, refetch] = UseParticipant();
  const axiosPublic = UseAxios();

  const participantRequiests = participant.filter(
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

  if (participantRequiests.length === 0) {
    return (
      <div className="w-full h-screen bg-gray-900">
        <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
          <h1 className="text-6xl text-center text-purple-600 font-bold">
            No Requiests Found!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="bg-black w-full md:w-11/12 min-h-full mx-auto my-10 rounded-xl">
        <h1 className="text-center text-2xl font-bold p-4 text-purple-400 uppercase">
          Requested Camps
        </h1>
        {/* table content */}
        <div className="overflow-x-auto my-5">
          <table className="min-w-full divide-y divide-gray-200">
            {/* head */}
            <thead>
              <tr className="text-white uppercase bg-purple-400">
                <th className="px-4 py-2 text-left text-sm font-medium">SL</th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Camp Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Camp Price
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Participant Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Payment Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Confirmation Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {participantRequiests.map((participant, index) => (
                <tr key={participant._id} className="text-white">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{participant.name}</td>
                  <td className="px-4 py-2">{participant.price}</td>
                  <td className="px-4 py-2">{participant.userName}</td>
                  <td className="px-4 py-2">
                    {participant.paymentStatus === "pay" ? (
                      <Link to={`/dashboard/payment/${participant._id}`}>
                        <UseMoreDetailsBtn isSubmit={true}>
                          Pay
                        </UseMoreDetailsBtn>
                      </Link>
                    ) : (
                      <UseMoreDetailsBtn disabled={true}>
                        Paid
                      </UseMoreDetailsBtn>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {participant.confirmationStatus === "pending" ? (
                      <button className="bg-yellow-400 p-2 rounded-xl uppercase text-white ">
                        Pending
                      </button>
                    ) : (
                      <button className="bg-green-700 p-2 rounded-xl text-white uppercase">
                        Confirmed
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {participant.paymentStatus === "pay" ? (
                      <UseMoreDetailsBtn
                        onClick={() => handleDelete(participant._id)}
                        isCancel={true}
                      >
                        Cancel
                      </UseMoreDetailsBtn>
                    ) : (
                      <UseMoreDetailsBtn disabled={true}>
                        Cancel
                      </UseMoreDetailsBtn>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserRequiestedCamps;
