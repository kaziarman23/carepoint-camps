import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { useForm } from "react-hook-form";
import UseUsers from "../../../../CustomHooks/UseUsers";
import { useNavigate } from "react-router";
import UseAxios from "../../../../CustomHooks/UseAxios";
import Swal from "sweetalert2";

const OrganizerProfileUpdate = () => {
  const { user, updateUser } = useContext(AuthContext);

  // state
  const navigate = useNavigate();

  // hooks
  const [users, refetch] = UseUsers();
  const axiosPublic = UseAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // finding data
  const userDetails = users.find((value) => value.email === user.email);

  const onSubmit = (data) => {
    updateUser(data.name, data.photo, data.email)
      .then(() => {
        // const updateInfo = {
        //   name: data.name,
        //   photo: data.photo,
        //   email: data.email,
        // };

        axiosPublic
          .patch(`/users/${userDetails._id}`, data)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              // refetching data and and navigating the user 
              refetch();
              navigate(-1);

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 h-96 mx-auto p-4 my-10 rounded-xl bg-orange-600">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl p-3 font-bold text-center">
            Updating Organizer Profile
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full rounded-xl text-black bg-white"
                defaultValue={user.photoURL}
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full rounded-xl text-black bg-white"
                defaultValue={user.displayName}
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full rounded-xl text-black bg-white"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
          </div>
          <div className="flex justify-end items-center mt-5 gap-4">
            <button
              onClick={handleCancel}
              className="btn rounded-xl bg-red-700 hover:bg-red-800
            text-black"
            >
              Cancel
            </button>
            <button
              className="btn rounded-xl bg-yellow-500 hover:bg-yellow-400
            text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizerProfileUpdate;
