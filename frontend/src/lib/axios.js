import axios from "axios";

// Determine base URL depending on environment
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // Local backend during dev
    : "https://thinkboard-4-sggx.onrender.com"; // Deployed backend on Render

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // important if using cookies or auth
});

export default api;
