import Axios from "axios";

/*
 * Axios.create
 * this is a function that creates a new instance of Axios.
 *
 * Parameters {object} :
 * baseURL is the base URL of the API that we are going to use.
 */
const axiosIns = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * Interceptor Request
 * this is a function that will be called before every request.
 */
axiosIns.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/*
 * Interceptor Response
 * this is a function that will be called before every response.
 */
axiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosIns;
