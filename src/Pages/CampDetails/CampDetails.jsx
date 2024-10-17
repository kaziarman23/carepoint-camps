import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseAxios from "../../CustomHooks/UseAxios";
import { useNavigate, useParams } from "react-router";
import UseCamps from "../../CustomHooks/UseCamps";
import Swal from "sweetalert2";

const CampDetails = () => {
  // context api
  const { user } = useContext(AuthContext);

  // states
  const axiosPublic = UseAxios();
  const navigate = useNavigate();

  // hooks
  const [camp, refetch] = UseCamps();

  // collecting the selected id with the help of use params
  const { id } = useParams();

  // finding the food details
  const selectedCamp = camp.find((camp) => camp._id === id);

  const handleJoinCamp = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to join this camp",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it.",
    }).then((result) => {
      if (result.isConfirmed) {
        const reqInfo = {
          image: selectedCamp.image,
          name: selectedCamp.name,
          leadBy: selectedCamp.leadBy,
          role: selectedCamp.role,
          location: selectedCamp.location,
          date: selectedCamp.date,
          price: selectedCamp.price,
          participant_count: selectedCamp.participant_count,
          description: selectedCamp.description,
          requesterName: user.displayName,
          requesterEmail: user.email,
          requesterPhoto: user.photoURL,
        };

        // sending req to server
        axiosPublic
          .post(`/requests/${selectedCamp._id}`, reqInfo)
          .then((res) => {
            if (res.data.insertedId) {
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
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const handleBackBtn = () => {
    navigate(-1);
  };
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
            onClick={handleJoinCamp}
            className="bg-blue-800 px-6 py-3 rounded-xl hover:bg-green-800"
          >
            Join Camp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
