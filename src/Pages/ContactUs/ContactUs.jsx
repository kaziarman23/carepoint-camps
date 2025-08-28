import { Phone, Mail, MapPin, MessageSquare, MailSearch } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ContactCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
    <div className="bg-CPC-ocean rounded-full p-3 text-white">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="text-gray-600">{children}</div>
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
    // console.log("Form Data:", data);

    toast.success("Message sent successfully.");

    // clear inputs after successful submit
    reset();
  };

  return (
    <div className="bg-sky-100 w-full min-h-screen font-sans">
      <div className="w-11/12 mx-auto py-20">
        {/* Main Title */}
        <div className="w-full text-center mb-12 bg-sky-200 p-5 rounded-xl">
          <h1 className="text-5xl font-bold text-black flex items-center justify-center gap-2">
            <MailSearch size={50} /> Contact - us
          </h1>
          <p className="text-gray-600 mt-2">
            Your health is our priority. Reach out to us for our next camp
            details.
          </p>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Contact Info */}
            <div className="flex flex-col justify-center bg-sky-200 p-5 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                We&#39;re Here to Help
              </h2>
              <div className="grid grid-cols-1 gap-5">
                <ContactCard
                  icon={<Phone className="h-8 w-8" />}
                  title="Call Us"
                >
                  <p>+880 1234567890</p>
                  <p className="text-sm">Monday - Friday, 9:00 AM to 5:00 PM</p>
                </ContactCard>
                <ContactCard
                  icon={<Mail className="h-8 w-8" />}
                  title="Email Us"
                >
                  <p>carepointcamp@gmail.com</p>
                  <p className="text-sm">Response Time: Within 24 hours</p>
                </ContactCard>
                <ContactCard
                  icon={<MapPin className="h-8 w-8" />}
                  title="Visit Us"
                >
                  <p>500 Wellness Ave, Suite 10, MedCity, ST 90001</p>
                </ContactCard>
                <ContactCard
                  icon={<MessageSquare className="h-8 w-8" />}
                  title="Chat with Us"
                >
                  <p>Availability: Monday - Friday</p>
                  <p className="text-sm">9:00 AM to 5:00 PM</p>
                </ContactCard>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-sky-200 p-5 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
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
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      placeholder="Mr. What ?"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">
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
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        // BD phone number regex (starts with +8801 or 01, total 11 digits)
                        value: /^(?:\+8801|01)[3-9]\d{8}$/,
                        message: "Enter a valid Bangladeshi phone number",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                    placeholder="+8801XXXXXXXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
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
                    Subject
                  </label>
                  <select
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                  >
                    <option value="">-- Select a subject --</option>
                    <option>General Inquiry</option>
                    <option>Camp Schedule</option>
                    <option>Volunteer Information</option>
                    <option>Feedback</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
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
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Let us know how we can help you..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-CPC-ocean hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-purple-500 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
