import { useForm } from "react-hook-form";
import UseAxios from "../../../../CustomHooks/UseAxios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const AddACamp = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const campInfo = {
      ...data,
      email: user.email,
    };
    axiosPublic
      .post("/camps", campInfo)
      .then((res) => {
        if (res.data.insertedId) {
          // reseting the form and showing alert
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Camp added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="bg-black w-full md:w-4/5 min-h-full mx-auto my-10 md:rounded-xl p-4">
        {/* Responsive heading */}
        <h1 className="text-center font-bold uppercase p-3 text-xl md:text-2xl text-[#6f5cc4]">
          Add a Camp
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Responsive grid layout */}
          {/* <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 p-2 md:p-4"> */}
          <div className="w-full flex justify-center items-center flex-col p-2 md:p-4">
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
                type="date"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("date", { required: true })}
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
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("location", { required: true })}
              />
              {errors.location?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Healthcare Professional */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">
                  Healthcare Professional
                </span>
              </div>
              <input
                type="text"
                placeholder="Healthcare Professional Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("leadBy", { required: true })}
              />
              {errors.leadBy?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Profession Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Profession Name</span>
              </div>
              <input
                type="text"
                placeholder="Profession Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("role", { required: true })}
              />
              {errors.role?.type === "required" && (
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
                defaultValue={0}
                {...register("participant_count")}
              />
            </label>

            {/* Camp Image */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Camp Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Camp Image"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("image", { required: true })}
              />
              {errors.image?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>

            {/* Camp Description */}
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text text-white">Camp Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 bg-white text-black rounded-xl"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description?.type === "required" && (
                <p role="alert" className="text-red-500">
                  This field is required
                </p>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end p-2 md:p-4">
            <UseMoreDetailsBtn isSubmit={true} type="submit">
              Submit
            </UseMoreDetailsBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddACamp;
