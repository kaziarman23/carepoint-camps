import { useForm } from "react-hook-form";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";

const ParticipantRegistration = ({
  isOpen,
  onClose,
  camp,
  user,
  handleJoinCamp,
}) => {
  //  useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle Submit
  const onSubmit = (data) => {
    handleJoinCamp(data);
    reset();
    onClose();
  };

  // checking the model is open or not
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F5F5F5] p-6 rounded-lg w-4/5 h-auto mx-auto ">
        <h2 className="text-2xl font-bold p-3 text-center">Join Camp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            {/* Read-only fields */}
            <div>
              <label className="font-bold">Camp Name: </label>
              <p>{camp.name}</p>
            </div>
            <div>
              <label className="font-bold">Camp Fees: </label>
              <p>{camp.price}</p>
            </div>
            <div>
              <label className="font-bold">Location: </label>
              <p>{camp.location}</p>
            </div>
            <div>
              <label className="font-bold">Healthcare Professional: </label>
              <p>{camp.leadBy}</p>
            </div>
            <div>
              <label className="font-bold">Participant Name: </label>
              <p>{user?.displayName ? user.displayName : "testName"}</p>
            </div>
            <div>
              <label className="font-bold">Participant Email: </label>
              <p>{user?.email ? user.email : "testEmail"}</p>
            </div>
            {/* <div>
              <label className="font-bold">Participant Email: </label>
              <p>{user?.email ? user.email : "testEmail"}</p>
            </div> */}

            {/* Input fields for participant to fill */}
            <div className="space-y-2">
              <label className="font-bold">Age</label>
              <input
                type="number"
                {...register("age", { required: true, max: 60, min: 13 })}
                className="border p-2 w-full text-black rounded-xl"
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

          {/* Action buttons */}
          <div className="flex justify-end mt-4 gap-4">
            <UseMoreDetailsBtn
              onClick={onClose} // Close the modal
              type="button"
              isCancel={true}
            >
              Cancel
            </UseMoreDetailsBtn>
            <UseMoreDetailsBtn type="submit">Submit</UseMoreDetailsBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParticipantRegistration;
