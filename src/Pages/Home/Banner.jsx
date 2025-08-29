import { ClipboardClock } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100 font-sans">
      <div className="w-4/5 mx-auto">
        <div className="bg-CPC-ocean rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side: Text content and button */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 text-white text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight mb-6">
                Schedule a virtual or presential appointment today
              </h2>

              <button className="flex gap-2 bg-CPC-sky text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-CPC-sky/50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                Book an Appointment
                <ClipboardClock />
              </button>
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full">
              <img
                src="https://i.pinimg.com/736x/a7/36/69/a736697328085f29269258e61849d4eb.jpg"
                alt="A smiling woman looking at the camera, representing a happy dental patient."
                className="w-full h-full object-cover"
                // Fallback image in case the primary one fails to load
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
