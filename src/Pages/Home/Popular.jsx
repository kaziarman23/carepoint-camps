import { Link } from "react-router-dom";
import UseCamps from "../../CustomHooks/UseCamps";
import UseMoreDetailsBtn from "../../CustomHooks/UseMoreDetailsBtn";

const Popular = () => {
  // hooks
  const [camp] = UseCamps();

  const PopularCamps = camp.filter((camps) => camps.participant_count > 110);

  return (
    <div className="w-4/5 h-full mx-auto">
      <h1 className="text-center text-2xl p-3">Popular Camps at Carepoint</h1>
      <p className="p-2">
        Popular Camps at Carepoint Discover the most popular health camps at
        Carepoint Camps, where we provide expert-led medical services and
        wellness programs tailored to diverse health needs. From comprehensive
        screenings to specialized care for various conditions, our camps offer
        accessible healthcare solutions for individuals and families. Join us at
        these top-rated camps to enhance your well-being and stay proactive
        about your health!
      </p>
      <div className="grid gap-4 my-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {PopularCamps.map((camp) => (
          <div key={camp._id} className="card w-80">
            <figure>
              <img
                src={camp.image}
                alt={camp.name}
                className="object-cover w-full h-52 rounded-t-xl"
              />
            </figure>
            <div className="card-body rounded-b-xl border bg-[#f0f8ff] shadow-2xl">
              <h2 className="card-title">{camp.name}</h2>
              <p>{camp.location}</p>
              <p>{camp.date}</p>
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
