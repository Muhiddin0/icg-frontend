import axios from "axios";

export const instance = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/v1"
            : "https://api.azerty.fr/api/v1",
});
