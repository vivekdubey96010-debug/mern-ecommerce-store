import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-ecommerce-store-hs2a.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;