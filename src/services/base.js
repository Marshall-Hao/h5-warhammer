import axios from "axios";

let baseURL;
if (process.env.NODE_ENV !== "production") {
  baseURL = "/api/v1/";
} else {
  baseURL = "https://api-staging.h5.games-workshop-china.com/api/v1/";
}

axios.defaults.baseURL = baseURL;

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
