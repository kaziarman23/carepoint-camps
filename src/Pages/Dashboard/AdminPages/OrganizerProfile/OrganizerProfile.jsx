import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen">
      <div className="w-4/5 h-full mx-auto p-4 my-10 rounded-xl bg-[#6f5cc4]">
        <h1 className="text-4xl p-3 font-bold text-center">
          Organizer Profile
        </h1> 
        <div className="w-full flex justify-center items-center my-10">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={user.photoURL}
              alt="Organizer Profile"
              className="h-60 rounded-full"
            />
          </div>
          <div className="w-1 h-40 bg-blue-500"></div>
          <div className="w-1/2 text-left p-5">
            <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
            <h1 className="text-2xl font-bold">Email: {user.email}</h1>
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
