import UseAxios from "../../../../CustomHooks/UseAxios";
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

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 min-h-full mx-auto bg-orange-600 p-4 rounded-xl">
        <h1>Manage Registered Camps</h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
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
                <tr key={person._id}>
                  <th>{index + 1}</th>
                  <th>{person.userName}</th>
                  <th>{person.name}</th>
                  <th>{person.price}</th>
                  <th>
                    {person.paymentStatus === "pay"
                      ? "unpaid"
                      : person.paymentStatus}
                  </th>
                  <th>
                    <button
                      className="font-bold"
                      onClick={() => handleConfirmed(person._id)}
                    >
                      {person.confirmationStatus}
                    </button>
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
