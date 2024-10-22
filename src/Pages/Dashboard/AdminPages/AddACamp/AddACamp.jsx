import { useForm } from "react-hook-form";
import UseAxios from "../../../../CustomHooks/UseAxios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";

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
    <div className="w-full min-h-screen">
      <div className="bg-orange-600 w-4/5 min-h-full mx-auto my-10 rounded-xl">
        <h1 className="text-center font-bold p-3 text-2xl">Add a Camp</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 p-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Camp Name</span>
              </div>
              <input
                type="text"
                placeholder="Camp Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Camp Fees</span>
              </div>
              <input
                type="text"
                placeholder="Camp Fees"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("price", { required: true })}
              />
              {errors.price?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("date", { required: true })}
              />{" "}
              {errors.date?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">location</span>
              </div>
              <input
                type="text"
                placeholder="location"
                {...register("location", { required: true })}
                className="input input-bordered w-full bg-white text-black rounded-xl"
              />{" "}
              {errors.location?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Healthcare Professional Name</span>
              </div>
              <input
                type="text"
                placeholder="Healthcare Professional Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("leadBy", { required: true })}
              />{" "}
              {errors.leadBy?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Profession Name</span>
              </div>
              <input
                type="text"
                placeholder="Profession Name"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                {...register("role", { required: true })}
              />{" "}
              {errors.Profession?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Participant count</span>
              </div>
              <input
                type="number"
                placeholder="Participant count"
                className="input input-bordered w-full bg-white text-black rounded-xl"
                defaultValue={0}
                {...register("participant_count")}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Camp Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Camp Image"
                {...register("image", { required: true })}
                className="input input-bordered w-full bg-white text-black rounded-xl"
              />
              {errors.image?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text">Camp Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 bg-white text-black rounded-xl"
                {...register("description", { required: true })}
              ></textarea>{" "}
              {errors.description?.type === "required" && (
                <p role="alert">This fild is required</p>
              )}
            </label>
          </div>
          <div className="flex justify-end p-4">
            <button className="btn rounded-xl bg-blue-700 hover:bg-green-700 hover:text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddACamp;
