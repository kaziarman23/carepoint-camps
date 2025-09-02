import { Phone, Mail, MapPin, MessageSquare, MailSearch } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ContactCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
    <div className="bg-CPC-ocean rounded-full p-2 sm:p-3 text-white">
      {icon}
    </div>
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <div className="text-sm sm:text-base text-gray-600">{children}</div>
    </div>
  </div>
);

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = () => {
    toast.success("Message sent successfully.");
    reset();
  };

  return (
    <div className="bg-sky-100 w-full min-h-screen font-sans">
      <div className="w-11/12 mx-auto py-16 lg:py-20">
        {/* Main Title */}
        <div className="w-full text-center mb-10 sm:mb-12 bg-sky-200 p-4 sm:p-6 rounded-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black flex flex-wrap items-center justify-center gap-2">
            <MailSearch size={36} className="sm:size-10 lg:size-12" />
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Your health is our priority. Reach out to us for our next camp
            details.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-center bg-sky-200 p-5 sm:p-6 lg:p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              We&#39;re Here to Help
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              <ContactCard
                icon={<Phone className="h-6 w-6 sm:h-8 sm:w-8" />}
                title="Call Us"
              >
                <p>+880 1234567890</p>
                <p className="text-xs sm:text-sm">
                  Mon - Fri, 9:00 AM to 5:00 PM
                </p>
              </ContactCard>
              <ContactCard
                icon={<Mail className="h-6 w-6 sm:h-8 sm:w-8" />}
                title="Email Us"
              >
                <p>carepoint@gmail.com</p>
                <p className="text-xs sm:text-sm">Response within 24 hours</p>
              </ContactCard>
              <ContactCard
                icon={<MapPin className="h-6 w-6 sm:h-8 sm:w-8" />}
                title="Visit Us"
              >
                <p>500 Wellness Ave, Suite 10, MedCity, ST 90001</p>
              </ContactCard>
              <ContactCard
                icon={<MessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />}
                title="Chat with Us"
              >
                <p>Mon - Fri</p>
                <p className="text-xs sm:text-sm">9:00 AM to 5:00 PM</p>
              </ContactCard>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-sky-200 p-5 sm:p-6 lg:p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Get in Touch with Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="mt-1 block w-full px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Mr. What ?"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(?:\+8801|01)[3-9]\d{8}$/,
                      message: "Enter a valid Bangladeshi phone number",
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="+8801XXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-sm sm:text-base border-gray-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="">-- Select a subject --</option>
                  <option>General Inquiry</option>
                  <option>Camp Schedule</option>
                  <option>Volunteer Information</option>
                  <option>Feedback</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="mt-1 block w-full px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Let us know how we can help you..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 sm:py-3 px-4 rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-CPC-ocean hover:bg-CPC-sky
                  hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
