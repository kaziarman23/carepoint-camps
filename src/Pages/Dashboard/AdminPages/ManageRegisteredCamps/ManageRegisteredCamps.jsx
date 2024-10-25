import UseAxios from "../../../../CustomHooks/UseAxios";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import Swal from "sweetalert2";

const ManageRegisteredCamps = () => {
  // hook
  const [Participant, refetch] = UseParticipant();
  const axiosPublic = UseAxios();

  const handleConfirmed = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirmed it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedInfo = {
          confirmationStatus: "Confirmed",
        };
        axiosPublic
          .put(`/participants/confirm/${id}`, updatedInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Confirmed!",
                text: "Participant registation has been confirmed.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (Participant.length === 0) {
    return (
      <div className="w-full h-screen overflow-hidden bg-black">
        <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
          <h1 className="text-6xl text-center text-purple-600 font-bold">
            Participants not found!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gray-900">
      <div className="w-11/12 md:w-4/5 min-h-full mx-auto my-10 bg-black p-4 rounded-xl">
        <h1 className="text-center font-bold p-3 text-2xl text-purple-400 uppercase">
          Manage Registered Camps
        </h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-white uppercase bg-purple-400">
                <th className="px-2 py-3 text-left text-sm font-medium">SL:</th>
                <th className="px-2 py-3 text-left text-sm font-medium">
                  Participant Name
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium">
                  Camp Name
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium">
                  Camp Fees
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium">
                  Payment Status
                </th>
                <th className="px-2 py-3 text-left text-sm font-medium">
                  Confirm Status
                </th>
              </tr>
            </thead>
            <tbody>
              {Participant.map((person, index) => (
                <tr key={person._id} className="text-white">
                  <td className="px-2 py-4">{index + 1}</td>
                  <td className="px-2 py-4">{person.userName}</td>
                  <td className="px-2 py-4">{person.name}</td>
                  <td className="px-2 py-4">{person.price}</td>
                  <td className="px-2 py-4">
                    {person.paymentStatus === "pay" ? (
                      <h1 className="bg-red-600 text-center rounded-xl p-2 font-bold">
                        Unpaid
                      </h1>
                    ) : (
                      <h1 className="bg-green-600 text-center rounded-xl p-2 font-bold">
                        Paid
                      </h1>
                    )}
                  </td>
                  <td className="px-2 py-4">
                    {person.confirmationStatus === "pending" ? (
                      <UseMoreDetailsBtn
                        isUpdate={true}
                        onClick={() => handleConfirmed(person._id)}
                      >
                        {person.confirmationStatus}
                      </UseMoreDetailsBtn>
                    ) : (
                      <UseMoreDetailsBtn disabled={true}>
                        {person.confirmationStatus}
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

export default ManageRegisteredCamps;
