"use client";

import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6 border-2 border-dashed border-gray-600 rounded-lg bg-gray-950/50 p-12">
      <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-700/30">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-sm font-mono font-semibold text-gray-200 uppercase tracking-wide">
          ANALYZING MANUFACTURABILITY...
        </p>
        <p className="text-xs text-gray-500 font-mono">
          Processing CAD geometry and checking tool compatibility
        </p>
      </div>
    </div>
  );
}
