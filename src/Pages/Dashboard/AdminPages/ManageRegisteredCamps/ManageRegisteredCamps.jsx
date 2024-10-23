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

  // if (Participant.length === 0) {
  //   return (
  //     <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
  //       <h1 className="text-6xl text-center text-purple-600 font-bold">
  //         Participants not found!
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 min-h-full mx-auto my-10 bg-[#6f5cc4] p-4 rounded-xl">
        <h1 className="text-center font-bold p-3 text-2xl">
          Manage Registered Camps
        </h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-white">
                <th>SL:</th>
                <th>Participant Name</th>
                <th>Camp Name</th>
                <th>Camp Fees</th>
                <th>Payment Status</th>
                <th>Confirm Status</th>
              </tr>
            </thead>
            <tbody>
              {Participant.map((person, index) => (
                <tr key={person._id} className="text-white">
                  <th>{index + 1}</th>
                  <th>{person.userName}</th>
                  <th>{person.name}</th>
                  <th>{person.price}</th>
                  <th>
                    {person.paymentStatus === "pay" ? (
                      <h1 className="bg-red-600 text-center rounded-xl p-2 font-bold">
                        Unpaid
                      </h1>
                    ) : (
                      <h1 className="bg-green-600 text-center rounded-xl p-2 font-bold">
                        Paid
                      </h1>
                    )}
                  </th>
                  <th>
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
                  </th>
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
