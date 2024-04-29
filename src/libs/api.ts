import axios from "axios";

const APIConfig = axios.create({
  baseURL: "http://localhost:5123/",
});

export default APIConfig;
