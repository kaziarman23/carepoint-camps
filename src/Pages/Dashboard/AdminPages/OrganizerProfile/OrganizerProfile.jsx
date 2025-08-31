import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import UsePrimaryBtn from "../../../../CustomHooks/UsePrimaryBtn";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen bg-sky-100 overflow-hidden">
      <div className="w-full md:w-11/12 mx-auto p-6 my-10 md:rounded-xl bg-CPC-ocean shadow-lg">
        <h1 className="text-4xl p-3 font-bold text-center uppercase text-white">
          Organizer Profile
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center my-10">
          <div className="w-full md:w-2/3 flex justify-center mb-5 md:mb-0 lg:w-1/2">
            <img
              src={user.photoURL}
              alt="Organizer Profile"
              className="h-60 w-60 rounded-full object-cover border-4 border-purple-400 shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left p-5 text-white space-y-3">
            <h1 className="text-3xl font-extrabold">Personal Details</h1>
            <h1 className="text-xl font-bold">Name: {user.displayName}</h1>
            <h1 className="text-xl font-bold">Email: {user.email}</h1>
            <h1 className="text-xl font-bold">Role: Admin</h1>
          </div>
        </div>
        <div className="flex justify-end items-center ">
          <Link to="/dashboard/organizerProfileUpdate">
            <UsePrimaryBtn blackBorder>Update Profile</UsePrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
