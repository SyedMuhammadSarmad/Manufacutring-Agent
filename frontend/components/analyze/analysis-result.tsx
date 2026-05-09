"use client";

import { AnalysisResponse } from "@/lib/types";
import { StatusBadge } from "./status-badge";
import { Wrench, Lightbulb, AlertCircle, Zap } from "lucide-react";

interface AnalysisResultProps {
  data: AnalysisResponse;
}

export function AnalysisResult({ data }: AnalysisResultProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-gray-700 pb-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <h2 className="text-2xl font-mono font-bold text-gray-100 uppercase tracking-wide">
              ANALYSIS COMPLETE
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              {new Date().toLocaleString()}
            </p>
          </div>
          <StatusBadge decision={data.decision} />
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-700/50 rounded p-4 space-y-2">
        <p className="text-sm text-gray-200 leading-relaxed font-mono">
          {data.summary}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.operations && data.operations.length > 0 && (
          <div className="border border-gray-700/50 rounded p-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              REQUIRED OPERATIONS
            </h3>
            <ul className="space-y-2">
              {data.operations.map((op, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-300 font-mono flex items-start gap-2"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{op}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.required_tools && data.required_tools.length > 0 && (
          <div className="border border-gray-700/50 rounded p-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-green-400 font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              AVAILABLE TOOLS
            </h3>
            <ul className="space-y-2">
              {data.required_tools.map((tool, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-300 font-mono flex items-start gap-2"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {data.missing_tools && data.missing_tools.length > 0 && (
        <div className="border border-red-700/50 bg-red-950/20 rounded p-4 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            MISSING TOOLS
          </h3>
          <ul className="space-y-2">
            {data.missing_tools.map((tool, idx) => (
              <li
                key={idx}
                className="text-sm text-red-300 font-mono flex items-start gap-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.recommendations && data.recommendations.length > 0 && (
        <div className="border border-blue-700/50 bg-blue-950/20 rounded p-4 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            RECOMMENDATIONS
          </h3>
          <ul className="space-y-2">
            {data.recommendations.map((rec, idx) => (
              <li
                key={idx}
                className="text-sm text-blue-300 font-mono flex items-start gap-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
