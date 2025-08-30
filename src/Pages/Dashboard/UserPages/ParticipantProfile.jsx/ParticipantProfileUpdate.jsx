import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import UseAxios from "../../../../CustomHooks/UseAxios";
import UsePrimaryBtn from "../../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

const ParticipantProfileUpdate = () => {
  // state
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = UseAxios();

  const [participant, refetch] = UseParticipant();

  const updatedDoc = participant.find((participant) => participant._id === id);

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle Submit
  const onSubmit = (data) => {
    reset();
    console.log("updated data", data);
    axiosPublic.patch(`/participants/${id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        // refetching data
        refetch();

        // navigating the user

        navigate("/dashboard/ParticipantProfile");
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
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-black rounded-xl p-6">
        <h1 className="text-2xl p-3 text-center font-bold text-purple-400 uppercase">
          Update Participant Information
        </h1>

        {/* update content table */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 p-4 text-white">
            <div className="space-y-2">
              <label className="font-bold">Age</label>
              <input
                type="number"
                {...register("age", { required: true, max: 60, min: 13 })}
                className="border p-2 w-full text-black rounded-xl"
                defaultValue={updatedDoc.age}
              />
              {errors.age?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors.age?.type === "max" && (
                <p className="text-red-500">
                  Participant age must be lower than 60
                </p>
              )}
              {errors.age?.type === "min" && (
                <p className="text-red-500">
                  Participant age must be older than 13
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold">Phone Number</label>
              <input
                type="tel"
                {...register("phone", {
                  required: true,
                  maxLength: 12,
                  minLength: 6,
                })}
                className="border p-2 w-full text-black rounded-xl"
                defaultValue={updatedDoc.phone}
              />
              {errors.phone?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors.phone?.type === "maxLength" && (
                <p className="text-red-500">
                  Phone number must be less than 12 characters
                </p>
              )}
              {errors.phone?.type === "minLength" && (
                <p className="text-red-500">
                  Phone number must be greater than 6 characters
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold">Gender</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="border p-2 w-full text-black rounded-xl"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold">Emergency Contact</label>
              <input
                type="tel"
                {...register("emergencyContact", {
                  required: true,
                  maxLength: 12,
                  minLength: 6,
                })}
                className="border p-2 w-full text-black rounded-xl"
                defaultValue={updatedDoc.emergencyContact}
              />
              {errors.emergencyContact?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors.emergencyContact?.type === "maxLength" && (
                <p className="text-red-500">
                  Phone number must be less than 12 characters
                </p>
              )}
              {errors.emergencyContact?.type === "minLength" && (
                <p className="text-red-500">
                  Phone number must be greater than 6 characters
                </p>
              )}
            </div>
          </div>
          <div className="flex p-4 gap-4 justify-end items-start">
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

export default ParticipantProfileUpdate;
