import { useContext } from "react";
import { AuthContext } from "../../../../Auth/AuthProvider";
import UseParticipant from "../../../../CustomHooks/UseParticipant";
import { Link } from "react-router-dom";
import UseMoreDetailsBtn from "../../../../CustomHooks/UseMoreDetailsBtn";

const ParticipantInformations = () => {
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

  if (participantProfile.length === 0) {
    return (
      <div className="w-4/5 h-80 mx-auto my-10 flex justify-center items-center flex-col gap-5">
        <h1 className="text-6xl text-center text-purple-600 font-bold">
          No Participants Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full  min-h-screen">
      <div className="w-5/6 min-h-full mx-auto my-10 rounded-xl bg-[#6f5cc4]">
        <h1 className="p-3 text-2xl text-center font-bold text-white">
          Participant Informations
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
                <tr key={participant._id} className="text-white">
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
                      <UseMoreDetailsBtn isUpdate={true}>
                        Update
                      </UseMoreDetailsBtn>
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

export default ParticipantInformations;
