import { Link } from "react-router-dom";
import UseCamps from "../../CustomHooks/UseCamps";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";

const AvailableCamps = () => {
  const [camp] = UseCamps();

  if (!camp) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="w-16 h-16 loading loading-infinity loading-xl"></p>
        <h1 className="text-2xl md:text-4xl mt-4">Loading Data...</h1>
      </div>
    );
  }

  return (
    <div className="w-11/12 lg:w-4/5 h-full mx-auto">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl p-3 font-bold">
        Available Medical Camps
      </h1>
      <p className="text-sm md:text-base p-2 text-left lg:text-left">
        Explore our upcoming medical camps tailored to various health needs,
        from general wellness check-ups to specialized care for children, women,
        and senior citizens. Each camp offers free screenings, consultations,
        and expert advice provided by qualified healthcare professionals. Find a
        camp near you and take a proactive step towards better health for
        yourself and your loved ones.
      </p>

      <div className="grid gap-4 my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {camp.map((camp) => (
          <div key={camp._id} className="card w-full mx-auto">
            <figure>
              <img
                src={camp.image}
                alt={camp.name}
                className="object-cover w-full h-52 rounded-t-xl"
              />
            </figure>
            <div className="card-body rounded-b-xl bg-[#f0f8ff] shadow-2xl">
              <h2 className="card-title text-lg md:text-xl font-bold">
                {camp.name}
              </h2>
              <p className="text-sm md:text-base">{camp.location}</p>
              <p className="text-sm md:text-base">{camp.date}</p>
              <div className="card-actions justify-end">
                <Link to={`/campDetails/${camp._id}`}>
                  <UseMoreDetailsBtn>More Details</UseMoreDetailsBtn>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
