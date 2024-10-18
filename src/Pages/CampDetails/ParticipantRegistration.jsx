import { useForm } from "react-hook-form";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" bg-slate-900 p-6 rounded-lg w-4/5 h-auto mx-auto ">
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
                {...register("age", { required: "Age is required" })}
                className="border p-2 w-full text-black rounded-xl"
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-bold">Phone Number</label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="border p-2 w-full text-black rounded-xl"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
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
                  required: "Emergency contact is required",
                })}
                className="border p-2 w-full text-black rounded-xl"
              />
              {errors.emergencyContact && (
                <p className="text-red-500">
                  {errors.emergencyContact.message}
                </p>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose} // Close the modal
              type="button"
              className="px-6 py-3 bg-black border-white text-white rounded-xl mr-2 hover:bg-red-800 hover:border-red-800"
            >
              Cancel
            </button>
            <button
              type="submit" // Submit the form
              className="px-6 py-3 bg-blue-800  text-white rounded-xl mr-2 hover:bg-green-800 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParticipantRegistration;
