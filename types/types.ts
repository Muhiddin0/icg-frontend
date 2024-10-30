// types.ts

export type Lang = "uz" | "en" | "ru";

import { ApiResponse } from ".";

// Define the structure for a single result item
interface Article {
  id: number;
  poster: string;
  title: string;
  desk: string;
  created_at: string; // You can use Date if you want to parse it later
  updated_at: string; // Same as above
}

// Define the structure for the links object
export interface Links {
  next: string | null;
  previous: string | null;
}

export interface ArticlesResponse extends ApiResponse {
  results: Article[];
}
