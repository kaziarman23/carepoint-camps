import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseAxios from "../../CustomHooks/UseAxios";
import { useNavigate, useParams } from "react-router";
import UseCamps from "../../CustomHooks/UseCamps";
import Swal from "sweetalert2";
import ParticipantRegistration from "./ParticipantRegistration";

const CampDetails = () => {
  // context api
  const { user } = useContext(AuthContext);

  // states
  const axiosPublic = UseAxios();
  const navigate = useNavigate();
  const [modelOpen, setModelOpen] = useState(false);

  // hooks
  const [camp, refetch] = UseCamps();

  // collecting the selected id with the help of use params
  const { id } = useParams();

  // finding the food details
  const selectedCamp = camp.find((camp) => camp._id === id);

  const handleJoinCamp = (participantReq) => {
    const participantInfo = {
      campId: selectedCamp._id,
      image: selectedCamp.image,
      name: selectedCamp.name,
      leadBy: selectedCamp.leadBy,
      role: selectedCamp.role,
      location: selectedCamp.location,
      date: selectedCamp.date,
      price: selectedCamp.price,
      participant_count: selectedCamp.participant_count + 1,
      description: selectedCamp.description,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      age: participantReq.age,
      phone: participantReq.phone,
      gender: participantReq.gender,
      emergencyContact: participantReq.emergencyContact,
      paymentStatus: "pay",
      confirmationStatus:"pending"
    };
    console.log(participantInfo);

    // sending req to server
    axiosPublic.post("/participants", participantInfo).then((res) => {
      if (res.data.partticipantResult.insertedId) {
        // refetching the data and sending user to home
        refetch();
        navigate("/availableCamps");

        // showing alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your request accepted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleBackBtn = () => {
    navigate(-1);
  };

  if (!selectedCamp || !user) {
    return (
      <div className="w-full h-full my-10 flex flex-col justify-center items-center">
        <p className="w-96 h-full loading loading-infinity loading-xl"></p>
        <h1 className="text-4xl">Loading Data...</h1>
      </div>
    );
  }

  return (
    <div className="w-4/5 h-full mx-auto flex justify-center items-center bg-black p-4">
      <div className="w-full max-w-4xl gap-2 bg-slate-950 flex flex-col justify-center items-center text-white p-5 rounded-xl">
        <h1 className="font-bold text-2xl p-2">Camp Details</h1>
        {/* Camp details */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:space-x-5">
          <div className="w-full md:w-1/2 h-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={selectedCamp.image}
              alt={selectedCamp.name}
              className="object-cover w-full h-72 md:h-96 rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-left space-y-3 text-white">
            <h1 className="text-lg md:text-xl">
              <span className="font-bold">Camp Name: </span>
              {selectedCamp.name}
            </h1>
            <h1 className="text-lg md:text-xl">
              <span className="font-bold">Healthcare Professional Name: </span>
              {selectedCamp.leadBy}
            </h1>
            <h3 className="text-lg md:text-xl">
              <span className="font-bold">Profession: </span>
              {selectedCamp.role}
            </h3>
            <p className="text-lg md:text-xl">
              <span className="font-bold">Location: </span>
              {selectedCamp.location}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">Date: </span>
              {selectedCamp.date}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">Price: </span>
              {selectedCamp.price}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">participant_count: </span>
              {selectedCamp.participant_count}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">Description: </span>
              {selectedCamp.description}
            </p>
          </div>
        </div>
        <div className="w-full gap-5 p-4 flex flex-col md:flex-row justify-end items-center">
          <button
            onClick={handleBackBtn}
            className="bg-black border px-6 py-3 rounded-xl hover:bg-red-800 hover:text-black hover:border-black"
          >
            Back
          </button>

          <button
            onClick={() => setModelOpen(true)}
            className="bg-blue-800 px-6 py-3 rounded-xl hover:bg-green-800"
          >
            Join Camp
          </button>
        </div>
      </div>
      {/* model content */}
      {modelOpen && (
        <ParticipantRegistration
          isOpen={modelOpen}
          onClose={() => setModelOpen(false)}
          camp={selectedCamp}
          user={user}
          handleJoinCamp={handleJoinCamp}
        />
      )}
    </div>
  );
};

export default CampDetails;
