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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Material</Label>
        <Input
          {...register("material")}
          placeholder="Steel 304, Aluminium 6061"
          disabled={isLoading || isDisabled}
          className="text-sm bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-500/30 transition-all duration-300 hover:border-slate-500"
        />
        {formState.errors.material && (
          <p className="text-xs text-red-400">{formState.errors.material.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Tolerance</Label>
        <Input
          {...register("tolerance")}
          placeholder="±0.02mm, ±0.05mm"
          disabled={isLoading || isDisabled}
          className="text-sm bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-500/30 transition-all duration-300 hover:border-slate-500"
        />
        {formState.errors.tolerance && (
          <p className="text-xs text-red-400">{formState.errors.tolerance.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Threads (Optional)</Label>
        <Input
          {...register("threads")}
          placeholder="M8x1.25, M10x1.5"
          disabled={isLoading || isDisabled}
          className="text-sm bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-500/30 transition-all duration-300 hover:border-slate-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading || isDisabled}
        className="w-full h-11 font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 shadow-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Analyzing...
          </>
        ) : (
          "Analyze Now"
        )}
      </Button>
    </form>
  );
}
