import { ShieldCheck, Smile, Users } from "lucide-react";

const FeatureCard = ({ icon, title, description, iconBgClass }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 hover:shadow-xl transition-shadow duration-300">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgClass}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

function Introduction() {
  return (
    <div className="bg-sky-100 w-full min-h-screen">
      <div className="w-11/12 mx-auto py-16 sm:py-24">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Title and Subtitle */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-CPC-ocean rounded-full"></span>
              <span className="text-CPC-ocean font-semibold text-sm tracking-wider">
                ABOUT US
              </span>
              <span className="w-2 h-2 bg-CPC-ocean rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Introduction To{" "}
              <span className="text-CPC-ocean">Carepoint Camps!</span>
            </h1>
          </div>

          {/* Right Column: Description Paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600">
            <div className="p-5 bg-sky-200/30 shadow-lg rounded-xl">
              <h2 className="text-xl font-semibold mb-3 text-sky-900">
                Our Mission
              </h2>
              <p>
                At Carepoint Camps, our mission is to provide a safe, inclusive,
                and enriching environment where children can learn, grow, and
                create lasting memories. We believe in fostering creativity and
                building confidence.
              </p>
            </div>

            <div className="p-5 bg-sky-200/30 shadow-lg rounded-xl">
              <h2 className="text-xl font-semibold mb-3 text-sky-900">
                Our Staff & Activities
              </h2>
              <p>
                Our experienced and passionate staff are dedicated to the
                well-being and development of every camper. We offer a diverse
                range of activities designed to be both fun and educational for
                all age groups.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6 text-white" />}
            title="Safe & Secure Environment"
            description="Our top priority is the safety and well-being of every camper."
            iconBgClass="bg-CPC-ocean"
          />
          <FeatureCard
            icon={<Smile className="w-6 h-6 text-white" />}
            title="Fun & Engaging Activities"
            description="We offer a wide range of activities to spark creativity and learning."
            iconBgClass="bg-gray-800"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-white" />}
            title="Experienced Staff"
            description="Our dedicated team is trained to provide the best care and support."
            iconBgClass="bg-CPC-ocean"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
