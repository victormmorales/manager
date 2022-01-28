import axios from "axios";

// const apiKey =
//   "APIkey=e695391ae6602e0cd15ed3cce970ac1dc953072ff9ffe2e8b8b56c4f0ae356fb";

const clienteAxios = axios.create({
  // baseURL: `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=97&${apiKey}`,
  baseURL: "http://localhost:4000",
});

export default clienteAxios;
