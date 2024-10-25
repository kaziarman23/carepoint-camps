import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const OrganizerProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="w-full md:w-11/12 mx-auto p-6 my-10 md:rounded-xl bg-black shadow-lg">
        <h1 className="text-4xl p-3 font-bold text-center uppercase text-purple-400">
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
          <div className="w-full lg:w-1/2 text-left p-5">
            <h1 className="text-2xl font-bold text-purple-300 mb-2">
              Name: <span className="text-gray-100">{user.displayName}</span>
            </h1>
            <h1 className="text-2xl font-bold text-purple-300">
              Email: <span className="text-gray-100">{user.email}</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <Link to="/dashboard/organizerProfileUpdate">
            <UseMoreDetailsBtn
              isUpdate={true}
              className="text-gray-900 bg-purple-400 hover:bg-purple-300 font-semibold px-4 py-2 rounded-lg shadow-sm"
            >
              Update Profile
            </UseMoreDetailsBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
