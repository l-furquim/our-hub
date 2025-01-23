import axios from "axios";

export const backEndApi = axios.create({
  baseURL: "http://3.140.240.95:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

