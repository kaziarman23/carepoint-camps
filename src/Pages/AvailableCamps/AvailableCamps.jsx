import { Link } from "react-router-dom";
import UseCamps from "../../CustomHooks/UseCamps";

const AvailableCamps = () => {
  const [camp] = UseCamps();

  
  if (!camp) {
    return (
      <div className="w-full h-full my-10 flex flex-col justify-center items-center">
        <p className="w-96 h-full loading loading-infinity loading-xl"></p>
        <h1 className="text-4xl">Loading Data...</h1>
      </div>
    );
  }
  return (
    <div className="w-4/5 h-full mx-auto">
      <h1 className="text-center text-2xl p-3">Available Medical Camps</h1>
      <p className="p-2">
        Explore our upcoming medical camps tailored to various health needs,
        from general wellness check-ups to specialized care for children, women,
        and senior citizens. Each camp offers free screenings, consultations,
        and expert advice provided by qualified healthcare professionals. Find a
        camp near you and take a proactive step towards better health for
        yourself and your loved ones.
      </p>
      <div className="grid gap-4 my-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {camp.map((camp) => (
          <div key={camp._id} className="card w-80">
            <figure>
              <img
                src={camp.image}
                alt={camp.name}
                className="object-cover w-full h-52 rounded-t-xl"
              />
            </figure>
            <div className="card-body rounded-b-xl bg-slate-900">
              <h2 className="card-title">{camp.name}</h2>
              <p>{camp.location}</p>
              <p>{camp.date}</p>
              <div className="card-actions justify-end">
                <Link to={`/campDetails/${camp._id}`}>
                  <button className="bg-blue-800 px-6 py-3 rounded-xl hover:bg-green-800">
                    More Details
                  </button>
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
