import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseAxios from "../../../CustomHooks/UseAxios";
import UsePrimaryBtn from "../../../CustomHooks/UsePrimaryBtn";
import toast from "react-hot-toast";

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

  return (
    <div className="w-full h-full my-10 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md h-auto bg-[#d8e3e9] p-5 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <h1 className="text-center font-bold text-2xl mb-6">Register Now</h1>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="name"
              name="name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=""
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">name is required</p>
            )}
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="photoURL"
              name="photo"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              {...register("photo")}
            />
            <label
              htmlFor="photoURL"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo URL
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              {...register("password", {
                required: true,
                minLength: 7,
                maxLength: 90,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{7,90}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be longer than 7 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500">
                Password must be shorter than 90 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <UsePrimaryBtn type="submit" className="w-full">
            Register
          </UsePrimaryBtn>

          <p className="my-3">
            Already have an account? Please{" "}
            <Link to="/login">
              <span className="hover:underline font-bold text-blue-500">
                Login
              </span>
            </Link>
          </p>

          <p className="my-3 text-center">or Register With</p>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleGoogleRegister}
              className="btn hover:text-white hover:bg-black rounded-xl flex items-center gap-2"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>
            <button
              onClick={handleGithubRegister}
              className="btn hover:text-white hover:bg-black rounded-xl flex items-center gap-2"
            >
              <VscGithubInverted className="w-6 h-6" /> Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
