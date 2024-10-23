import { useNavigate, useParams } from "react-router";
import UseCamps from "../../../../CustomHooks/UseCamps";
import UseAxios from "../../../../CustomHooks/UseAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

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
        navigate(-1);
        refetch();
        reset();

        Swal.fire({
          title: "Success!",
          text: "Data Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  const handleCancel = () => {
    reset();
    navigate(-1);
  };
  return (
    <div className="w-full min-h-screen">
      <div className="bg-[#6f5cc4] w-4/5 min-h-full mx-auto my-10 rounded-xl">
        <h1 className="text-center font-bold p-3 text-2xl">
          Update Manage Camps
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 p-4">
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
                <p role="alert">This fild is required</p>
              )}
            </label>
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
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Date</span>
              </div>
              <input
                type="text"
                placeholder="Date"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("date", { required: true })}
                defaultValue={updatedDoc.date}
              />{" "}
              {errors.date?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">location</span>
              </div>
              <input
                type="text"
                placeholder="location"
                {...register("location", { required: true })}
                className="input input-bordered w-full bg-white text-black rounded-xl"
                defaultValue={updatedDoc.location}
              />{" "}
              {errors.location?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
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
              />{" "}
              {errors.leadBy?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Participant count</span>
              </div>
              <input
                type="number"
                placeholder="Participant count"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("participant_count")}
                defaultValue={updatedDoc.participant_count}
              />
            </label>
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
                <p role="alert">This fild is required</p>
              )}
            </label>
          </div>
          <div className="flex justify-end gap-5 p-4">
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

export default UpdateManageCamps;
