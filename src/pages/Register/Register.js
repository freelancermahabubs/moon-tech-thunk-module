import {Link, useLocation, useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {FcGoogle} from "react-icons/fc";

import {Player} from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/register.json";

const Register = () => {
  const {register, handleSubmit, setError, formState, control} = useForm();
  const {errors} = formState;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSingUp = async (data) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-2 items-center lg:grid-cols-2">
      <div className="mx-auto w-[80%]">
        <Player autoplay loop src={AnimationLottie}></Player>
      </div>
      <div className="flex justify-center w-full items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm text-gray-400">Welcome to Home Land</p>
          </div>
          <form onSubmit={handleSubmit(handleSingUp)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 "
                  {...register("name", {required: true})}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 "
                  {...register("email", {required: true})}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">
                  Bangladeshi Phone Number
                </label>
                <Controller
                  name="phoneNumber"
                  style={{borderRadius: "0px 200px 0px 200px"}}
                  control={control}
                  rules={{required: true, pattern: /[0-9]{11}/}}
                  render={({field}) => (
                    <input
                      {...field}
                      type="tel"
                      className={`border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
                        formState.errors.phoneNumber ? "border-red-500" : ""
                      }`}
                      placeholder="e.g. 01XXXXXXXXX"
                    />
                  )}
                />
                {formState.errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    Enter a valid 11-digit phone number.
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 "
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
                Register
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
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
            Already have an account?
            <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600">
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
