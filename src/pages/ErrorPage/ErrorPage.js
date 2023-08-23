import {Player} from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/404.json";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="mx-auto w-[50%]">
        <Player autoplay loop src={AnimationLottie}></Player>
      </div>

      <div className="text-center mt-3">
        <Link to="/">
          <button className="text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3 text-white">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
