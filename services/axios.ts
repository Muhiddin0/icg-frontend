import axios from "axios";

export const instance = axios.create({
    baseURL: "https://cdn.icg.uz/api/v1",
});
