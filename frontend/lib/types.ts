export type DecisionType = "YES" | "NO" | "CONDITIONAL";

export interface AnalysisResponse {
  decision: DecisionType;
  summary: string;
  operations: string[];
  required_tools: string[];
  missing_tools?: string[];
  recommendations?: string[];
  status: string;
  features?: Record<string, unknown>;
  classification?: Record<string, unknown>;
  match_result?: Record<string, unknown>;
}

export interface AnalyzeFormInputs {
  material: string;
  tolerance: string;
  threads?: string;
}
