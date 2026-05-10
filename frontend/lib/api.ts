import axios, { AxiosInstance } from "axios";
import { AnalysisResponse, DecisionType } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const client: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

function formatTool(t: { type: string; diameter_mm?: number; min_diameter_mm?: number; material?: string }): string {
  const size = t.diameter_mm ? `${t.diameter_mm}mm` : t.min_diameter_mm ? `min ${t.min_diameter_mm}mm` : "";
  return [t.type, size, t.material].filter(Boolean).join(" ");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformResponse(raw: any): AnalysisResponse {
  const decisionStr: DecisionType =
    typeof raw.decision === "object" ? raw.decision?.decision : raw.decision;

  return {
    decision: decisionStr,
    summary: raw.report?.summary ?? raw.summary ?? "",
    operations: raw.classification?.required_operations ?? raw.operations ?? [],
    required_tools: (raw.match_result?.tools_available ?? raw.classification?.required_tools ?? []).map(formatTool),
    missing_tools: (raw.match_result?.tools_missing ?? raw.missing_tools ?? []).map(formatTool),
    recommendations: raw.report?.action_required ?? raw.recommendations ?? [],
    status: raw.status,
    features: raw.features,
    classification: raw.classification,
    match_result: raw.match_result,
  };
}

export async function analyzeStep(formData: FormData): Promise<AnalysisResponse> {
  try {
    const response = await client.post("/analyze", formData);
    return transformResponse(response.data);
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
