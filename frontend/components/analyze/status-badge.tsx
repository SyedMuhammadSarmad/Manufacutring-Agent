"use client";

import { DecisionType } from "@/lib/types";
import { Check, X, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  decision: DecisionType;
}

export function StatusBadge({ decision }: StatusBadgeProps) {
  const config = {
    YES: {
      bg: "bg-green-950/40 border-green-700/50",
      text: "text-green-400",
      icon: <Check className="w-5 h-5" />,
      label: "MANUFACTURABLE",
    },
    NO: {
      bg: "bg-red-950/40 border-red-700/50",
      text: "text-red-400",
      icon: <X className="w-5 h-5" />,
      label: "NOT MANUFACTURABLE",
    },
    CONDITIONAL: {
      bg: "bg-yellow-950/40 border-yellow-700/50",
      text: "text-yellow-400",
      icon: <AlertCircle className="w-5 h-5" />,
      label: "CONDITIONALLY MANUFACTURABLE",
    },
  }[decision];

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-3 rounded border font-mono text-sm font-semibold uppercase tracking-wide ${config.bg}`}
    >
      <span className={config.text}>{config.icon}</span>
      <span className={config.text}>{config.label}</span>
    </div>
  );
}
