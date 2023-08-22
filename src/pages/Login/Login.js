import {Link, useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {FcGoogle} from "react-icons/fc";
import {Player} from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/register.json";

import {useRef, useState} from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <div className="grid md:grid-cols-2 items-center lg:grid-cols-2">
      <div className="mx-auto w-[80%]">
        <Player autoplay loop src={AnimationLottie}></Player>
      </div>
      <div className="flex justify-center w-full items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit()}
            className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  style={{borderRadius: "0px 200px 0px 200px"}}
                  type="email"
                  ref={emailRef}
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full  px-3  text-center py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("email", {required: true})}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  style={{borderRadius: "0px 200px 0px 200px"}}
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 text-center py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("password", {required: true})}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 text-white">
                Login
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              //   onClick={handleResetPassword}
              className="text-xs hover:underline hover:text-rose-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            // onClick={handleGoogleLogIn}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <Link
              to="/register"
              className="hover:underline hover:text-rose-500 text-gray-600">
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
