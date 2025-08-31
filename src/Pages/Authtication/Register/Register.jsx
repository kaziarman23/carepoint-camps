import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseAxios from "../../../CustomHooks/UseAxios";
import toast from "react-hot-toast";
import { HeartHandshake, LogIn } from "lucide-react";

const Register = () => {
  // states
  const navigate = useNavigate();

  // Context api
  const { createUser, updateUser, googleAuthintication, githubAuthintication } =
    useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Submit
  const onSubmit = (data) => {
    // creating user with email
    createUser(data.email, data.password).then(() => {
      // updating user
      updateUser(data.name, data.photo).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          photo: data.photo,
          userRole: "user",
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res);
            if (res.data.insertedId) {
              // showing an alert
              toast.success("Registation successfully");

              // showing alert
              reset();

              // navigating the user to home page
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);

            // showing an alert
            toast.error(error);
          });
      });
    });
  };

  // Register with Google
  const handleGoogleRegister = () => {
    reset();
    googleAuthintication().then((data) => {
      const userInfo = {
        name: data.user?.displayName,
        email: data.user?.email,
        photo: data.user?.photoURL,
        userRole: "user",
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          if (res.data.insertedId) {
            // navigating the user to home page
            navigate("/");

            // showing an alert
            toast.success("Registation successfully");
          }
        })
        .catch((error) => {
          console.log(error);

          // showing an alert
          toast.error(error);
        });
    });
  };

  // Register with Github
  const handleGithubRegister = () => {
    reset();
    githubAuthintication().then((data) => {
      const userInfo = {
        name: data.user?.displayName,
        email: data.user?.email,
        photo: data.user?.photoURL,
        userRole: "user",
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            // navigating the user
            navigate("/");

            // showing an alert
            toast.success("Registation successfully");
          }
        })
        .catch((error) => {
          console.log(error);

          // showing an alert
          toast.error(error);
        });
    });
  };

  // sound wave graphic.
  const SoundWave = () => (
    <div className="flex items-end space-x-1 h-20 w-full overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#83c5be] opacity-50 w-1 rounded-t-full"
          style={{ height: `${Math.sin(i * 0.4) * 45 + 50}%` }}
        ></div>
      ))}
    </div>
  );

  return (
    // Main container with the sky-100 background
    <div className="min-h-screen bg-sky-100 flex items-center justify-center py-20">
      <div className="w-11/12 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left "Branding" Side */}
        <div className="w-full md:w-1/2 bg-[#006d77] text-[#edf6f9] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center">
              <HeartHandshake className="h-10 w-10 mr-2 text-white" />
              <h1 className="text-4xl font-extrabold ">Carepoint Camp</h1>
            </div>
            <div className="mt-16 sm:mt-24">
              <h1 className="text-4xl lg:text-2xl font-extrabold leading-tight">
                You make the Choice for Health. We make it Happen.
              </h1>
              <p className="mt-4 text-[#83c5be] text-lg">
                Access comprehensive health check-ups, receive expert
                consultations, and get the care you need from trusted medical
                professionals with our Carepoint Camps.
              </p>
            </div>
          </div>
          {/* Absolutely position the sound wave at the bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <SoundWave />
          </div>
        </div>

        {/* Right "Form" Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-[#edf6f9]">
          {/* Top Navigation */}
          <div className="flex items-center justify-start space-x-6">
            <Link to="/login">
              <button className="flex items-center space-x-2 text-[#006d77] font-semibold  hover:opacity-80 transition-opacity">
                <LogIn />
                <span>Sign In</span>
              </button>
            </Link>
          </div>

          {/* Registration Form */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#006d77]">Registration</h2>
            <p className="text-gray-500 mt-2">Create your account</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Full Name"
                  {...register("name", { required: "Full name is required" })}
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label
                  htmlFor="photo"
                  className="text-sm font-semibold text-gray-700"
                >
                  Photo URL:
                </label>
                <input
                  type="text"
                  id="photo"
                  placeholder="Photo URL"
                  {...register("photo", { required: "Photo URL is required" })}
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  E-mail address:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter 8 characters or more"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="h-4 w-4 text-[#006d77] focus:ring-[#83c5be] border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I accept the{" "}
                  <a
                    href="#"
                    className="font-medium text-[#006d77] hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.terms.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#006d77] hover:bg-opacity-90 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006d77]"
              >
                CREATE ACCOUNT
              </button>

              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-500">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-CPC-ocean
                  hover:text-CPC-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#83c5be] transition"
                >
                  <FcGoogle size={25} />
                  <span className="ml-2">Google</span>
                </button>
                <button
                  type="button"
                  onClick={handleGithubRegister}
                  className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-CPC-ocean
                  hover:text-CPC-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#83c5be] transition"
                >
                  <VscGithubInverted size={25} />
                  <span className="ml-2">GitHub</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
