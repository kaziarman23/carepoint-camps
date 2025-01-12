import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { useForm } from "react-hook-form";
import UseUsers from "../../../../CustomHooks/UseUsers";
import { useNavigate } from "react-router";
import UseAxios from "../../../../CustomHooks/UseAxios";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";
import toast from "react-hot-toast";

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
        const updateInfo = {
          name: data.name,
          photo: data.photo,
          email: data.email,
        };

        axiosPublic
          .patch(`/users/${userDetails._id}`, updateInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              // refetching data and and navigating the user
              refetch();
              navigate(-1);
              // showing an alert
              toast.success("Profile updated successfully");
            }
          })
          .catch((error) => {
            console.log(error);

            // showing an alert
            toast.error(error);
          });
      })
      .catch((error) => {
        console.log(error);

        // showing an alert
        toast.error(error);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full md:w-4/5 h-auto mx-auto p-6 my-10 md:rounded-xl bg-black shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl p-3 font-bold text-center text-white">
            Updating Organizer Profile
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full md:col-span-2">
              <div className="label">
                <span className="label-text text-white">Photo URL</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue={user.photoURL}
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <p role="alert" className="text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue={user.displayName}
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Email</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </label>
          </div>
          <div className="flex justify-end items-center mt-5 gap-4">
            <UseMoreDetailsBtn onClick={handleCancel} isCancel={true}>
              Cancel
            </UseMoreDetailsBtn>
            <UseMoreDetailsBtn type="submit" isSubmit={true}>
              Submit
            </UseMoreDetailsBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizerProfileUpdate;
