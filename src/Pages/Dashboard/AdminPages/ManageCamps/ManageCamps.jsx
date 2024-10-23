import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseCamps from "../../../../CustomHooks/UseCamps";
import Swal from "sweetalert2";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const ManageCamps = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [camp, refetch] = UseCamps();
  const axiosPublic = UseAxios();

  // filtering the data
  const filterCamps = camp.filter((camp) => camp.email === user.email);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/camps/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your camp has been deleted.",
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

  if (filterCamps.length === 0) {
    return (
      <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
        <h1 className="text-6xl text-center text-purple-600 font-bold">
          No Camp Added!
        </h1>
        <Link to="/dashboard/addACamp">
          <UseMoreDetailsBtn isPurple={true}>Add Camps</UseMoreDetailsBtn>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-5/6 min-h-full mx-auto bg-[#6f5cc4] my-10 p-4 rounded-xl">
        <h1 className="text-2xl p-3 font-bold text-center">Manage Camps</h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>SL:</th>
                <th>Camp Image</th>
                <th>Name</th>
                <th>Professional Name</th>
                <th>Fees</th>
                <th>Location</th>
                <th>Date</th>
                <th>Participant</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterCamps.map((camp, index) => (
                <tr key={camp._id}>
                  <th>{index + 1}</th>
                  <th>
                    <img
                      src={camp.image}
                      alt={camp.name}
                      className="object-cover h-14 rounded-xl"
                    />
                  </th>
                  <th>{camp.name}</th>
                  <th>{camp.leadBy}</th>
                  <th>{camp.price}</th>
                  <th>{camp.location}</th>
                  <th>{camp.date}</th>
                  <th>{camp.participant_count}</th>
                  <th className="flex items-center gap-2">
                    <Link to={`/dashboard/updateManageCamps/${camp._id}`}>
                      <button className="btn rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 hover:text-white">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(camp._id)}
                      className="btn rounded-xl bg-red-700 hover:bg-red-700 hover:text-black"
                    >
                      Delete
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

export default ManageCamps;
