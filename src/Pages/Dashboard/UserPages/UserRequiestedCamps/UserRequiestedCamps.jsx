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
      <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
        <h1 className="text-6xl text-center text-purple-600 font-bold">
          No Requiests Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="bg-[#6f5cc4] w-4/5 min-h-full mx-auto my-10 rounded-xl">
        <h1 className="text-center text-2xl font-bold p-2">Requiested Camps</h1>
        {/* table content */}
        <div className="w-full overflow-x-auto my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white uppercase">
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
              {participantRequiests.map((participant, index) => (
                <tr key={participant._id} className="text-white">
                  <th>{index + 1}</th>
                  <th>{participant.name}</th>
                  <td>{participant.price}</td>
                  <td>{participant.userName}</td>
                  <td>
                    {participant.paymentStatus === "pay" ? (
                      <>
                        <Link to={`/dashboard/payment/${participant._id}`}>
                          <UseMoreDetailsBtn isSubmit={true}>
                            Pay
                          </UseMoreDetailsBtn>
                        </Link>
                      </>
                    ) : (
                      <UseMoreDetailsBtn disabled={true}>
                        Paid
                      </UseMoreDetailsBtn>
                    )}
                  </td>
                  <td>
                    {participant.confirmationStatus === "pending" ? (
                      <button className="bg-yellow-400 p-2 rounded-xl uppercase text-white shadow-[0_0_20px_5px_rgba(255,255,0,0.815)]">
                        Pending
                      </button>
                    ) : (
                      <button className="bg-green-700 p-2 rounded-xl text-white shadow-[0_0_30px_5px_rgba(0,255,0,0.815)] uppercase">
                        Confirmed
                      </button>
                    )}
                  </td>
                  <td>
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
        <div></div>
      </div>
    </div>
  );
};

export default UserRequiestedCamps;
