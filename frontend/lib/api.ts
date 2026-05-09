import axios, { AxiosInstance } from "axios";
import { AnalysisResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const client: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export async function analyzeStep(formData: FormData): Promise<AnalysisResponse> {
  try {
    const response = await client.post<AnalysisResponse>("/analyze", formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        "Failed to analyze file. Please try again.";
      throw new Error(message);
    }
    throw error;
  }
}
