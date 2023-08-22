import axios from "axios";
let URL;

switch (process.env.REACT_APP_ENVIRONMET) {
  case "DEVELOPMENT":
    URL = "https://moon-tech-serverss.vercel.app/";
    break;
  case "PRODUCTION":
    URL = "https://moon-tech-serverss.vercel.app/";
    break;
  default:
    URL = "https://moon-tech-serverss.vercel.app/";
}
const instance = axios.create({
  baseURL: URL,
});
export default instance;
