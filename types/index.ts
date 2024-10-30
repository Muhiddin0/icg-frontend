import { Links } from "./types";

// Define the overall structure of the response
export interface ApiResponse {
  links: Links;
  count: number;
  page_size: number;
}
