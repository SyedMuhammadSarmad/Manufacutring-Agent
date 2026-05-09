"use client";

import { useState } from "react";
import { useAnalyze } from "@/hooks/use-analyze";
import { UploadZone } from "@/components/analyze/upload-zone";
import { AnalyzeForm } from "@/components/analyze/analyze-form";
import { LoadingState } from "@/components/analyze/loading-state";
import { AnalysisResult } from "@/components/analyze/analysis-result";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
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
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16 px-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <AnalysisResult data={result} />
            <div className="mt-10 flex gap-4 justify-center">
              <Button
                onClick={resetAnalysis}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all active:scale-95 shadow-lg"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Analyze Another File
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Precision Analysis</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 tracking-tight">
              Manufacturability Check
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Upload your STEP file and specify parameters to instantly verify manufacturing feasibility
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4 block">📁 Upload STEP File</label>
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
                <div className="border border-red-500/30 rounded-xl p-5 bg-red-950/20 backdrop-blur-sm flex gap-4">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-red-200">Analysis Failed</p>
                    <p className="text-sm text-red-300 mt-1">{error}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4 block">⚙️ Parameters</label>
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
      <Footer />
    </>
  );
}
