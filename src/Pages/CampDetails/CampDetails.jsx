import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseAxios from "../../CustomHooks/UseAxios";
import { useNavigate, useParams } from "react-router";
import UseCamps from "../../CustomHooks/UseCamps";
import ParticipantRegistration from "./ParticipantRegistration";
import UsePrimaryBtn from "../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

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
      participant_count: Number(selectedCamp.participant_count) + 1,
      description: selectedCamp.description,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      age: participantReq.age,
      phone: participantReq.phone,
      gender: participantReq.gender,
      emergencyContact: participantReq.emergencyContact,
      paymentStatus: "pay",
      confirmationStatus: "pending",
    };
    console.log(participantInfo);

    // sending req to server
    axiosPublic.post("/participants", participantInfo).then((res) => {
      if (res.data.partticipantResult.insertedId) {
        // refetching the data
        refetch();

        // navigating the user
        navigate("/availableCamps");

        // showing alert
        toast.success("Your request accepted");
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
    <div className="w-full h-full mx-auto flex justify-center items-center bg-sky-100 py-20">
      <div className="w-11/12 h-full mt-5 gap-2 flex flex-col justify-center items-center bg-white rounded-xl shadow-xl p-5 xl:w-4/5">
        <h1 className="font-bold text-2xl p-2 text-black">Camp Details</h1>
        {/* Camp details */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:space-x-5 text-black">
          <div className="w-full md:w-1/2 h-full flex justify-center items-center mb-4 md:mb-0">
            <img
              src={selectedCamp.image}
              alt={selectedCamp.name}
              className="object-cover w-full h-1/2 md:h-96 rounded-xl"
            />
          </div>
          <div className="w-full text-sm md:w-1/2 text-left space-y-3 lg:text-base">
            <h1>
              <span className="font-bold">Camp Name: </span>
              {selectedCamp.name}
            </h1>
            <h1>
              <span className="font-bold">Healthcare Professional Name: </span>
              {selectedCamp.leadBy}
            </h1>
            <h3>
              <span className="font-bold">Profession: </span>
              {selectedCamp.role}
            </h3>
            <p>
              <span className="font-bold">Location: </span>
              {selectedCamp.location}
            </p>
            <p>
              <span className="font-bold">Date: </span>
              {selectedCamp.date}
            </p>
            <p>
              <span className="font-bold">Price: </span>
              {selectedCamp.price}
            </p>
            <p>
              <span className="font-bold">participant_count: </span>
              {selectedCamp.participant_count}
            </p>
            <p>
              <span className="font-bold">Description: </span>
              {selectedCamp.description}
            </p>
          </div>
        </div>
        <div className="w-full gap-5 p-4 flex flex-col sm:flex-row justify-end items-center">
          <UsePrimaryBtn blackBorder isLogout onClick={handleBackBtn}>
            Back
          </UsePrimaryBtn>

          <UsePrimaryBtn blackBorder onClick={() => setModelOpen(true)}>
            Join Camp
          </UsePrimaryBtn>
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
