import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseAxios from "../../../CustomHooks/UseAxios";
import UsePrimaryBtn from "../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";
import { GithubIcon } from "lucide-react";

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
              // showing alert and navigating the user to home page
              reset();
              navigate("/");

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

  const TuneGoLogo = () => (
    <div className="flex items-center space-x-2 text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="8" width="4" height="12" rx="1" fill="currentColor" />
        <rect x="10" y="4" width="4" height="16" rx="1" fill="currentColor" />
        <rect x="16" y="12" width="4" height="8" rx="1" fill="currentColor" />
      </svg>
      <span className="font-bold text-xl">TuneGO</span>
    </div>
  );

  const ArrowDownIcon = () => (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  );

  // A simple component to render a dynamic-looking sound wave graphic.
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

  const GoogleIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );

  const GithubIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SignInIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      ></path>
    </svg>
  );

  return (
    // Main container with the sky-100 background
    <div className="min-h-screen bg-sky-100 flex items-center justify-center py-20">
      <div className="w-11/12 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left "Branding" Side */}
        <div className="w-full md:w-1/2 bg-[#006d77] text-[#edf6f9] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div>
            <TuneGoLogo />
            <div className="mt-16 sm:mt-24">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                You make the Tune. We make it GO.™
              </h1>
              <p className="mt-4 text-[#83c5be] text-lg">
                Securely store your creative work, protect your rights,
                distribute your music and collect your royalties worldwide with
                TuneGO.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start mt-16 sm:mt-24 space-y-8 z-10">
            <ArrowDownIcon />
          </div>
          {/* Absolutely position the sound wave at the bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <SoundWave />
          </div>
        </div>

        {/* Right "Form" Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-[#edf6f9]">
          {/* Top Navigation */}
          <div className="flex items-center justify-end space-x-6">
            <button className="flex items-center space-x-2 text-[#006d77] font-semibold hover:opacity-80 transition-opacity">
              <SignInIcon />
              <span>Sign In</span>
            </button>
            <button className="px-5 py-2 border border-[#83c5be] text-[#006d77] font-semibold rounded-full hover:bg-[#83c5be] hover:text-[#edf6f9] transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Registration Form */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#006d77]">Registration</h2>
            <p className="text-gray-500 mt-2">Create your account</p>

            <form className="mt-8 space-y-6">
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
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
              </div>
              <div>
                <label
                  htmlFor="PhotoURL"
                  className="text-sm font-semibold text-gray-700"
                >
                  PhotoURL:
                </label>
                <input
                  type="text"
                  id="PhotoURL"
                  placeholder="Photo URL "
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
              </div>
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
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
              </div>
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
                  className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83c5be] transition"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
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
                  className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-CPC-ocean
                  hover:text-CPC-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#83c5be] transition"
                >
                  <FcGoogle size={25} />
                  <span className="ml-2">Google</span>
                </button>
                <button
                  type="button"
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
