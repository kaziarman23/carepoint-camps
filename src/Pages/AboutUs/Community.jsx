import {
  Users,
  Activity,
  ClipboardCheck,
  BookHeart,
  HeartPulse,
} from "lucide-react";

// process timeline
const ProcessStep = ({ icon, title, isLast = false }) => (
  <div className="relative flex-1">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-CPC-ocean z-10">
        {icon}
      </div>
      <h4 className="mt-4 mb-2 font-bold text-gray-800 text-sm sm:text-base md:text-lg">
        {title}
      </h4>
    </div>

    {/* Connecting line */}
    {!isLast && (
      <div className="absolute left-1/2 top-8 h-0.5 w-full bg-CPC-ocean hidden md:block" />
    )}
  </div>
);

// gallery images
const ImageCard = ({ imageUrl, title }) => (
  <div className="relative overflow-hidden rounded-lg group">
    <img
      src={imageUrl}
      alt={title}
      className="h-56 sm:h-64 md:h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        e.target.src =
          "https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+Not+Found";
      }}
    />
    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
    <div className="absolute bottom-0 left-0 p-3 sm:p-4">
      <h5 className="text-base sm:text-lg font-bold text-white">{title}</h5>
    </div>
  </div>
);

export default function Community() {
  // timeline data
  const processSteps = [
    {
      icon: <Users size={24} />,
      title: "Community Outreach",
    },
    {
      icon: <Activity size={24} />,
      title: "Health Screening",
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Specialist Care",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Follow-up Support",
    },
    {
      icon: <BookHeart size={24} />,
      title: "Health Education",
    },
  ];

  // gallery images
  const galleryImages = [
    {
      imageUrl:
        "https://i.pinimg.com/1200x/85/02/1c/85021c3227c52351292dd14402a3dcb3.jpg",
      title: "Patient Consultation",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a2/eb/4a/a2eb4a57014571d9bd3c148fee96ffb3.jpg",
      title: "Our Volunteer Team",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/9d/dd/32/9ddd32561802ae82f4041dc52b2ec88f.jpg",
      title: "Community Health",
    },
  ];

  return (
    <div className="bg-sky-100 w-full min-h-screen">
      <div className="w-11/12 mx-auto space-y-12 py-12 sm:py-16 lg:py-24">
        {/* Mission Section */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 bg-CPC-ocean rounded-full"></span>
              <span className="text-CPC-ocean font-semibold text-xs sm:text-sm tracking-wider">
                OUR CAMPS
              </span>
              <span className="w-2 h-2 bg-CPC-ocean rounded-full"></span>
            </div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-snug">
              Dedicated to{" "}
              <span className="text-CPC-ocean">Community Wellness</span>
            </h2>
          </div>
          <div>
            <p className="mb-3 sm:mb-4 text-gray-500 text-sm sm:text-base">
              Our mission is to bring high-quality healthcare directly to the
              communities that need it most. We believe that everyone deserves
              access to medical care, regardless of their location or financial
              situation.
            </p>
            <p className="mb-6 sm:mb-8 text-gray-500 text-sm sm:text-base">
              Through our volunteer-driven medical camps, we offer free
              consultations, health screenings, and educational resources to
              empower individuals and build a healthier future for all.
            </p>
            <button className="rounded-lg bg-CPC-ocean px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white text-sm sm:text-base transition-colors hover:bg-purple-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-black">
            Our Carepoint Camp <span className="text-CPC-ocean">Process</span>
          </h2>
          <div className="relative flex flex-col items-stretch space-y-8 md:flex-row md:space-y-0 md:space-x-4 bg-sky-200 p-5 rounded-2xl">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <ImageCard key={index} {...img} />
          ))}
        </div>
      </div>
    </div>
  );
}
