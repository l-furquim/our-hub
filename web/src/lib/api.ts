import axios from "axios";

export const backEndApi = axios.create({
  baseURL: "http://ec2-3-19-232-47.us-east-2.compute.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

