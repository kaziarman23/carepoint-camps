import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseCamps from "../../../../CustomHooks/UseCamps";
import Swal from "sweetalert2";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { Link } from "react-router-dom";
import UsePrimaryBtn from "../../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

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
            
            // showing an alert
            toast.error(error);
          });
      }
    });
  };

  if (filterCamps.length === 0) {
    return (
      <div className="w-full h-screen bg-black overflow-hidden">
        <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
          <h1 className="text-6xl text-center text-CPC-ocean font-bold">
            No Camp Added!
          </h1>
          <Link to="/dashboard/addACamp">
            <UsePrimaryBtn isPurple={true}>Add Camps</UsePrimaryBtn>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="w-11/12 min-h-full mx-auto bg-black my-10 p-4 rounded-xl">
        <h1 className="text-2xl p-3 font-bold text-white text-center">
          Manage Camps
        </h1>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table min-w-full">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th className="text-sm md:text-base">SL:</th>
                <th className="text-sm md:text-base">Camp Image</th>
                <th className="text-sm md:text-base">Name</th>
                <th className="text-sm md:text-base">Professional Name</th>
                <th className="text-sm md:text-base">Fees</th>
                <th className="text-sm md:text-base">Location</th>
                <th className="text-sm md:text-base">Date</th>
                <th className="text-sm md:text-base">Participants</th>
                <th className="text-sm md:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterCamps.map((camp, index) => (
                <tr key={camp._id} className="text-white">
                  <td className="text-sm md:text-base">{index + 1}</td>
                  <td>
                    <img
                      src={camp.image}
                      alt={camp.name}
                      className="object-cover h-14 rounded-xl"
                    />
                  </td>
                  <td className="text-sm md:text-base">{camp.name}</td>
                  <td className="text-sm md:text-base">{camp.leadBy}</td>
                  <td className="text-sm md:text-base">{camp.price}</td>
                  <td className="text-sm md:text-base">{camp.location}</td>
                  <td className="text-sm md:text-base">{camp.date}</td>
                  <td className="text-sm md:text-base">
                    {camp.participant_count}
                  </td>
                  <td className="flex items-center gap-2">
                    <Link to={`/dashboard/updateManageCamps/${camp._id}`}>
                      <UsePrimaryBtn isUpdate={true}>
                        Update
                      </UsePrimaryBtn>
                    </Link>
                    <UsePrimaryBtn
                      onClick={() => handleDelete(camp._id)}
                      isCancel={true}
                    >
                      Delete
                    </UsePrimaryBtn>
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

export default ManageCamps;
