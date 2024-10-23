import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Context api
  const { loginUser, googleAuthintication, githubAuthintication } =
    useContext(AuthContext);

  // using useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Login with Email
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then(() => {
      // showing alert and reseting the form
      reset();

      // navigating the user
      const redirectTo = location?.state?.from || "/";
      navigate(redirectTo);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "logged in successfully",
      });
    });
  };

  // Login with Google
  const handleGoogleLogin = () => {
    googleAuthintication().then(() => {
      // navigating the user
      const redirectTo = location?.state?.from || "/";
      navigate(redirectTo);

      // showing alert and reseting the form
      reset();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Logged in successfully",
      });
    });
  };

  // Login with Github
  const handleGithubLogin = () => {
    githubAuthintication().then(() => {
      // navigating the user
      const redirectTo = location?.state?.from || "/";
      navigate(redirectTo);

      // showing alert and reseting the form
      reset();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Logged in successfully",
      });
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md h-auto bg-[#d8e3e9] p-5 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <h1 className="text-center font-bold text-2xl mb-6">Please Login</h1>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
              placeholder=" "
              {...register("email", { required: true })}
            />
            {/* handling email error */}
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
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
            {/* handling password error */}
            {errors.password?.type === "required" && (
              <p className="text-red-500">password required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                password must be at least 7 characters long
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500">
                password must be less than 90 characters long
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

          <button
            type="submit"
            className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center bg-blue-600 hover:bg-green-500 hover:text-black focus:ring-green-500"
          >
            Login
          </button>

          <p className="my-3 text-center">
            Didn&#39;t have an account? Please{" "}
            <Link to="/register">
              <span className="hover:underline hover:text-blue-500">
                Register
              </span>
            </Link>
          </p>

          <p className="my-3 text-center">or Login With</p>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleGoogleLogin}
              className="btn hover:text-white hover:bg-black flex items-center gap-2"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn hover:text-white hover:bg-black flex items-center gap-2"
            >
              <VscGithubInverted className="w-6 h-6" />
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
