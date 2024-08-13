import axios from "axios";

const urlBack = import.meta.env.VITE_API;

export const generalApi = axios.create({
    baseURL: `${urlBack}/web/api/v2/`,
});