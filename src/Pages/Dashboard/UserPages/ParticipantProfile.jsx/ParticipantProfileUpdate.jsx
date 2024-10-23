import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import UseAxios from "../../../../CustomHooks/UseAxios";
import Swal from "sweetalert2";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

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
        navigate("/dashboard/ParticipantProfile");
        refetch();

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
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 h-80 bg-[#6f5cc4] rounded-xl">
        <h1 className="text-2xl p-2 text-center text-white font-bold">
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
                <p className="text-red-500">This fild is required</p>
              )}
              {errors.age?.type === "max" && (
                <p className="text-red-500">
                  Participant age must be lower then 60
                </p>
              )}
              {errors.age?.type === "min" && (
                <p className="text-red-500">
                  Participant age must be older then 13
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
                <p className="text-red-500">This fild is required</p>
              )}
              {errors.phone?.type === "maxLength" && (
                <p className="text-red-500">
                  Phone number must be lower then 12 characters
                </p>
              )}
              {errors.phone?.type === "minLength" && (
                <p className="text-red-500">
                  Phone number must be upper then 6 characters
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
                <p className="text-red-500">This fild is required</p>
              )}
              {errors.emergencyContact?.type === "maxLength" && (
                <p className="text-red-500">
                  Phone number must be lower then 12 characters
                </p>
              )}
              {errors.emergencyContact?.type === "minLength" && (
                <p className="text-red-500">
                  Phone number must be upper then 6 characters
                </p>
              )}
            </div>
          </div>
          <div className="flex p-4 gap-4 justify-end items-start">
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

export default ParticipantProfileUpdate;
