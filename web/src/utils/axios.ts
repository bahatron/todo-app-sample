import axios from "axios";

export const $axios = axios.create({
    baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
