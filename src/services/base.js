import axios from "axios";

const baseURL = "/api/v1/";

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
