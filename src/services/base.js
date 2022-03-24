import axios from "axios";

let baseURL;
if (process.env.NODE_ENV !== "production") {
  // baseURL = "https://api-staging.h5.games-workshop-china.com/api/v1/";
  // baseURL = "https://api-staging.h5.games-workshop-china.com/api/v1/";
  baseURL = "http://localhost:3002/api/v1/"
} else {
  baseURL = "https://api-staging.h5.games-workshop-china.com/api/v1/";
}

axios.defaults.baseURL = baseURL;
axios.defaults.headers["Content-Type"] = "application/json";

export function get(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data;
      return serverData.result;
    })
    .catch((e) => {
      console.error("error is", e);
    });
}

export function post(url, params, realheaders) {
  return axios
    .post(url, params, { headers: realheaders })
    .then((res) => {
      const serverData = res.data;
      return serverData;
    })
    .catch((e) => {
      console.error("error is", e);
    });
}
