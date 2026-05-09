"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { Loader2 } from "lucide-react";

interface AnalyzeFormProps {
  form: UseFormReturn<any>;
  onSubmit: () => Promise<void>;
  isLoading: boolean;
  isDisabled: boolean;
}

export function AnalyzeForm({
  form,
  onSubmit,
  isLoading,
  isDisabled,
}: AnalyzeFormProps) {
  const { register, formState } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label className="text-xs font-mono uppercase tracking-wider text-gray-300">
          MATERIAL
        </Label>
        <Input
          {...register("material")}
          placeholder="e.g., Steel 304, Aluminium 6061"
          disabled={isLoading || isDisabled}
          className="font-mono text-sm bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-600"
        />
        {formState.errors.material && (
          <p className="text-xs text-red-400 font-mono">
            {typeof formState.errors.material.message === "string"
              ? formState.errors.material.message
              : "Invalid input"}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-mono uppercase tracking-wider text-gray-300">
          TOLERANCE
        </Label>
        <Input
          {...register("tolerance")}
          placeholder="e.g., ±0.02mm, ±0.05mm"
          disabled={isLoading || isDisabled}
          className="font-mono text-sm bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-600"
        />
        {formState.errors.tolerance && (
          <p className="text-xs text-red-400 font-mono">
            {typeof formState.errors.tolerance.message === "string"
              ? formState.errors.tolerance.message
              : "Invalid input"}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-mono uppercase tracking-wider text-gray-300">
          THREADS (OPTIONAL)
        </Label>
        <Input
          {...register("threads")}
          placeholder="e.g., M8x1.25, M10x1.5"
          disabled={isLoading || isDisabled}
          className="font-mono text-sm bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-600"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading || isDisabled}
        className="w-full h-11 font-mono font-semibold text-sm uppercase tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ANALYZING...
          </>
        ) : (
          "PROCEED TO ANALYSIS"
        )}
      </Button>
    </form>
  );
}
