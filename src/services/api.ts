import axios, { AxiosPromise } from "axios";

const api = (
  url,
  method,
  data = null,
  headers = { headers: { "Content-Type": "application/json" } }
): AxiosPromise => {
  // axios expects params for get parameters
  let dataKey = "data";
  if (method === "GET") {
    dataKey = "params";
  }

  const options = {
    method,
    [dataKey]: data,
    url,
    ...headers
  };

  return axios(options);
};

export default api;
