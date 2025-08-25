import {
  HeartPulse,
  Stethoscope,
  Pill,
  Presentation,
  Droplet,
  Leaf,
} from "lucide-react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white/20 min-h-40 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-start space-x-4 shadow-lg">
    <div className="flex-shrink-0 text-purple-500 bg-white/30 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-black font-semibold text-sm mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

export default function Service() {
  const services = [
    {
      icon: <HeartPulse size={24} />,
      title: "Free Health Check-ups",
      description:
        "Get comprehensive health screenings, including blood pressure, sugar levels, and BMI.",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Expert Medical Consultations",
      description:
        "Receive professional advice and consultations from our team of experienced doctors.",
    },
    {
      icon: <Pill size={24} />,
      title: "Free Medicine Distribution",
      description:
        "Essential medicines will be provided free of charge based on prescription.",
    },
    {
      icon: <Presentation size={24} />,
      title: "Health Awareness Sessions",
      description:
        "Participate in informative sessions on preventive care, nutrition, and healthy living.",
    },
    {
      icon: <Droplet size={24} />,
      title: "Blood Donation Drive",
      description:
        "Be a hero and save lives by donating blood at our organized blood drive.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Nutritional Counseling",
      description:
        "Get personalized diet plans and advice from our expert nutritionists for a healthier lifestyle.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative bg-sky-200 py-8 md:py-16"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0d/3c/b2/0d3cb245ae06e56a52f83be6b5ea40f3.jpg')",
      }}
    >
      <div className="w-4/5 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Comprehensive Services at Our Carepoint Camp
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are dedicated to providing quality healthcare services to the
            community. Explore the key features of our upcoming medical camp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>

          {/* center Column */}
          <div className="space-y-8">
            <ServiceCard {...services[2]} />
            <ServiceCard {...services[3]} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ServiceCard {...services[4]} />
            <ServiceCard {...services[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}
