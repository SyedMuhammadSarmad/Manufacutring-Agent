"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { analyzeStep } from "@/lib/api";
import { AnalysisResponse, AnalyzeFormInputs } from "@/lib/types";

const AnalyzeFormSchema = z.object({
  material: z.string().min(1, "Material is required"),
  tolerance: z.string().min(1, "Tolerance is required"),
  threads: z.string(),
});

type FormSchemaType = z.infer<typeof AnalyzeFormSchema>;

export function useAnalyze() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(AnalyzeFormSchema),
    defaultValues: {
      material: "",
      tolerance: "",
      threads: "",
    },
  });

  const handleFileSelect = useCallback((file: File) => {
    const validExtensions = [".step", ".stp"];
    const hasValidExtension = validExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );

    if (!hasValidExtension) {
      setError("Invalid file type. Please upload a .step or .stp file.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setError(null);
  }, []);

  const handleFileRemove = useCallback(() => {
    setSelectedFile(null);
    setError(null);
  }, []);

  const onSubmit = async (data: FormSchemaType) => {
    if (!selectedFile) {
      setError("Please select a STEP file to analyze.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("material", data.material);
      formData.append("tolerance", data.tolerance);
      if (data.threads) {
        formData.append("threads", data.threads);
      }

      const response = await analyzeStep(formData);
      setResult(response);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to analyze file";
      setError(message);
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const resetAnalysis = useCallback(() => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
    form.reset();
  }, [form]);

  return {
    form,
    selectedFile,
    handleFileSelect,
    handleFileRemove,
    onSubmit: form.handleSubmit(onSubmit),
    result,
    error,
    isLoading,
    resetAnalysis,
  };
}
