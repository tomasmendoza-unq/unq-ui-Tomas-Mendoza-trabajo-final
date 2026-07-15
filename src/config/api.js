import axios from "axios";

const API_BASE_URL = "https://word-api-hmlg.vercel.app";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

export default apiClient;
