import axios from "axios";

const APIConfig = axios.create({
  baseURL: "http://localhost:5123/",
});

export default APIConfig;

// import axios from "axios";

// export const ApiConfig = axios.create({
//   baseURL: "http://localhost:5431/api/v1",
//   timeout: 5000,
// });

// export function setAuthToken(token: string) {
//   if (token) {
//     ApiConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete ApiConfig.defaults.headers.common["Authorization"];
//   }
// }
