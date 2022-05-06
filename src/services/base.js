import axios from "axios";
import ahoy from "./ahoy";

let baseURL;
if (process.env.NODE_ENV !== "production") {
  // baseURL = "http://localhost:3002/api/v1/"
  // baseURL = "https://api-staging.h5.games-workshop-china.com/api/v1/";
  baseURL = "https://api.h5.games-workshop-china.com/api/v1/";
} else {
  baseURL = "https://api.h5.games-workshop-china.com/api/v1/";
}

axios.defaults.baseURL = baseURL;
axios.defaults.headers["Content-Type"] = "application/json";

export function get(url, params) {
  console.log({baseURL})
  const headers = {
    "Ahoy-Visit": ahoy.getVisitId(),
    "Ahoy-Visitor": ahoy.getVisitorId(),
  };
  return axios
    .get(url, {
      params,
      headers,
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
  console.log({baseURL})
  realheaders = {
    ...realheaders,
    ...{ "Ahoy-Visit": ahoy.getVisitId(), "Ahoy-Visitor": ahoy.getVisitorId() },
  };
  // console.log({realheaders})
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
