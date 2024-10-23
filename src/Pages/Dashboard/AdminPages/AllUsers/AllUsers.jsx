import Swal from "sweetalert2";
import UseAxios from "../../../../CustomHooks/UseAxios";
import UseUsers from "../../../../CustomHooks/UseUsers";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const AllUsers = () => {
  // hooks
  const [users, refetch] = UseUsers();
  const axiosPublic = UseAxios();

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Do you want to make him admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make him Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .put(`/users/admin/${user.email}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              // refetching data
              refetch();
              // showing alert
              Swal.fire({
                title: "Added New Admin!",
                text: `${user.name} is now an admin`,
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (!users) {
    return (
      <div className="w-4/5 h-80 mx-auto my-10">
        <h1 className="text-3xl text-center text-purple-600 font-bold">
          No User found!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full md:w-4/5 min-h-full bg-[#6f5cc4] p-4 mx-auto my-10 md:rounded-xl">
        <h1 className="text-center font-bold text-2xl p-2 text-white">
          All Users
        </h1>
        <h2 className="text-left p-2 font-bold text-white">
          Total Users: {users.length}
        </h2>
        {/* Table content */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* Head */}
            <thead>
              <tr className="text-white text-xl">
                <th className="py-2">SL</th>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-white border-b">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2 font-bold">
                    {user?.userRole === "admin" ? (
                      "Admin"
                    ) : (
                      <UseMoreDetailsBtn
                        onClick={() => handleMakeAdmin(user)}
                        isUpdate={true}
                      >
                        User
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

export default AllUsers;
