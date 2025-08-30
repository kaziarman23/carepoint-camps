import { useNavigate, useParams } from "react-router";
import UseCamps from "../../../../CustomHooks/UseCamps";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { useForm } from "react-hook-form";
import UsePrimaryBtn from "../../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

const UpdateManageCamps = () => {
  // state
  const { id } = useParams();
  const navigate = useNavigate();

  // hooks
  const [camp, refetch] = UseCamps();
  const axiosPublic = UseAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const updatedDoc = camp.find((camp) => camp._id === id);

  // handle Submit
  const onSubmit = (data) => {
    axiosPublic.patch(`/camps/${id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        // navigating the user
        navigate(-1);

        // refetching the data
        refetch();

        // clearing the form
        reset();

        // showing an alert
        toast.success("Data Updated Successfully");
      }
    });
  };

  const handleCancel = () => {
    reset();
    navigate(-1);
  };
  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="bg-black w-11/12 md:w-4/5 min-h-full mx-auto my-10 rounded-xl p-4">
        <h1 className="text-center font-bold p-3 text-2xl text-white">
          Update Manage Camps
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center flex-col gap-2">
            {/* Camp Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Camp Name</span>
              </div>
              <input
                type="text"
                placeholder="Camp Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("name", { required: true })}
                defaultValue={updatedDoc.name}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Camp Fees */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Camp Fees</span>
              </div>
              <input
                type="text"
                placeholder="Camp Fees"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("price", { required: true })}
                defaultValue={updatedDoc.price}
              />
              {errors.price?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Date */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Date</span>
              </div>
              <input
                type="date" // Changed to type date for better UX
                placeholder="Date"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("date", { required: true })}
                defaultValue={updatedDoc.date}
              />
              {errors.date?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Location */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Location</span>
              </div>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
                className="input input-bordered w-full bg-white text-black rounded-xl"
                defaultValue={updatedDoc.location}
              />
              {errors.location?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Healthcare Professional Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">
                  Healthcare Professional Name
                </span>
              </div>
              <input
                type="text"
                placeholder="Healthcare Professional Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("leadBy", { required: true })}
                defaultValue={updatedDoc.leadBy}
              />
              {errors.leadBy?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Participant Count */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Participant Count</span>
              </div>
              <input
                type="number"
                placeholder="Participant Count"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("participant_count")}
                defaultValue={updatedDoc.participant_count}
              />
            </label>

            {/* Camp Image URL */}
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text text-white">Camp Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Camp Image"
                {...register("image", { required: true })}
                className="input input-bordered w-full bg-white text-black rounded-xl"
                defaultValue={updatedDoc.image}
              />
              {errors.image?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-end gap-5 p-4">
            <UsePrimaryBtn onClick={handleCancel} isCancel={true}>
              Cancel
            </UsePrimaryBtn>
            <UsePrimaryBtn type="submit" isSubmit={true}>
              Submit
            </UsePrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateManageCamps;
