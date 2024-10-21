import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import { Link } from "react-router-dom";

const ParticipantProfile = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const [participant] = UseParticipant();

  const participantProfile = participant.filter(
    (participant) => participant.userEmail === user.email
  );

  // checking the user
  if (!user) {
    return (
      <div className="w-full h-full my-10 flex flex-col justify-center items-center">
        <p className="w-96 h-full loading loading-infinity loading-xl"></p>
        <h1 className="text-4xl">Loading Data...</h1>
      </div>
    );
  }

  return (
    <div className="w-full  min-h-screen">
      <div className="w-5/6 min-h-full mx-auto my-10 rounded-xl bg-orange-600">
        <h1 className="p-3 text-2xl text-center font-bold text-white">
          Participant Profile
        </h1>
        {/* table content */}
        <div className="overflow-x-auto my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>SL</th>
                <th>Camp Name</th>
                <th>Location</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Emergency Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {participantProfile.map((participant, index) => (
                <tr key={participant._id}>
                  <th>{index + 1}</th>
                  <th>{participant.name}</th>
                  <td>{participant.location}</td>
                  <td>{participant.userName}</td>
                  <td>{participant.age}</td>
                  <td>{participant.phone}</td>
                  <td>{participant.gender}</td>
                  <td>{participant.emergencyContact}</td>
                  <td>
                    <Link
                      to={`/dashboard/participantProfileUpdate/${participant._id}`}
                    >
                      <button className="px-6 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-600">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParticipantProfile;
