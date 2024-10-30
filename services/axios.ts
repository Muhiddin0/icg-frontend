import { Config } from "@/config";
import axios from "axios";

export const instance = axios.create({
  baseURL: Config.API_URL,
});
