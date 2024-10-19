import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { Link } from "react-router-dom";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen">
      <div className="w-1/2 h-96 mx-auto p-4 my-10 rounded-xl bg-orange-600">
        <h1 className="text-4xl p-3 font-bold text-center">
          Organizer Profile
        </h1>
        <div className="w-full flex justify-center items-center my-2">
          <img
            src={user.photoURL}
            alt="Organizer Profile"
            className="h-20 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Name: {user.displayName}
          </h1>
          <h1 className="text-2xl font-bold">
            Email: {user.email}
          </h1>
        </div>
        <div className="flex justify-end items-center mt-5">
          <Link to="/dashboard/organizerProfileUpdate">
            <button
              className="btn rounded-xl bg-yellow-500 hover:bg-yellow-400
            text-black"
            >
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
