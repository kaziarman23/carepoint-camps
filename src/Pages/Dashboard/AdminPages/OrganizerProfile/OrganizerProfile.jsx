import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full md:w-4/5 mx-auto p-4 my-10 md:rounded-xl bg-[#6f5cc4]">
        <h1 className="text-4xl p-3 font-bold text-center text-white">
          Organizer Profile
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center my-10">
          <div className="w-full md:w-2/3 flex justify-center mb-5 md:mb-0 lg:w-1/2">
            <img
              src={user.photoURL}
              alt="Organizer Profile"
              className="h-60 w-60 rounded-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left p-5">
            <h1 className="text-2xl font-bold text-white">
              Name: {user.displayName}
            </h1>
            <h1 className="text-2xl font-bold text-white">
              Email: {user.email}
            </h1>
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <Link to="/dashboard/organizerProfileUpdate">
            <UseMoreDetailsBtn isUpdate={true}>
              Update Profile
            </UseMoreDetailsBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
