import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-vercel-3roy.vercel.app",
});

export default instance;
