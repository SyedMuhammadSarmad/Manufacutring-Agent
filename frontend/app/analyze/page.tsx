"use client";

import { useState } from "react";
import { useAnalyze } from "@/hooks/use-analyze";
import { UploadZone } from "@/components/analyze/upload-zone";
import { AnalyzeForm } from "@/components/analyze/analyze-form";
import { LoadingState } from "@/components/analyze/loading-state";
import { AnalysisResult } from "@/components/analyze/analysis-result";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function AnalyzePage() {
  const {
    form,
    selectedFile,
    handleFileSelect,
    handleFileRemove,
    onSubmit,
    result,
    error,
    isLoading,
    resetAnalysis,
  } = useAnalyze();

  const [isDragging, setIsDragging] = useState(false);

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnalysisResult data={result} />

          <div className="mt-8 flex gap-4 justify-center">
            <Button
              onClick={resetAnalysis}
              className="font-mono font-semibold uppercase tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded transition-all active:scale-95"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              ANALYZE ANOTHER FILE
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-bold text-gray-100 uppercase tracking-wider mb-3">
            MANUFACTURABILITY CHECK
          </h1>
          <p className="text-sm text-gray-500 font-mono">
            Upload your STEP file to analyze manufacturability with available CNC tooling
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                STEP FILE UPLOAD
              </label>
              <UploadZone
                file={selectedFile}
                onFileSelect={handleFileSelect}
                onFileRemove={handleFileRemove}
                isDragging={isDragging}
                onDragEnter={() => setIsDragging(true)}
                onDragLeave={() => setIsDragging(false)}
                isDisabled={isLoading}
              />
            </div>

            {isLoading && <LoadingState />}

            {error && (
              <div className="border border-red-700/50 rounded p-4 bg-red-950/20 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-mono font-semibold text-red-200">
                    ANALYSIS FAILED
                  </p>
                  <p className="text-sm text-red-300 font-mono mt-1">{error}</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-20">
              <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                PARAMETERS
              </label>
              <AnalyzeForm
                form={form}
                onSubmit={onSubmit}
                isLoading={isLoading}
                isDisabled={!selectedFile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
