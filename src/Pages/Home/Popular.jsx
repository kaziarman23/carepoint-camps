import { Link } from "react-router-dom";
import UseCamps from "../../CustomHooks/UseCamps";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";

const Popular = () => {
  // hooks
  const [camp] = UseCamps();

  const PopularCamps = camp.filter((camps) => camps.participant_count > 110);

  return (
    <div className="w-full  h-full mx-auto md:w-4/5">
      <h1 className="text-center text-base p-3 font-bold sm:text-lg lg:text-3xl">
        Popular Camps at Carepoint
      </h1>
      <p className="p-2 text-left text-sm lg:text-base">
        Discover the most popular health camps at Carepoint Camps, where we
        provide expert-led medical services and wellness programs tailored to
        diverse health needs. From comprehensive screenings to specialized care
        for various conditions, our camps offer accessible healthcare solutions
        for individuals and families. Join us at these top-rated camps to
        enhance your well-being and stay proactive about your health!
      </p>

      <div className="w-4/5 md:w-full mx-auto grid gap-6 my-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {PopularCamps.map((camp) => (
          <div key={camp._id} className="card w-full max-w-sm mx-auto">
            <figure>
              <img
                src={camp.image}
                alt={camp.name}
                className="object-cover w-full h-52 rounded-t-xl"
              />
            </figure>
            <div className="card-body rounded-b-xl border bg-[#f0f8ff] shadow-2xl p-5">
              <h2 className="card-title text-sm lg:text-xl font-semibold">
                {camp.name}
              </h2>
              <p className="text-gray-600 text-sm">{camp.location}</p>
              <p className="text-gray-600">{camp.date}</p>
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

export default Popular;
