"use client";

import React from "react";
import { Upload, BrainCircuit, Activity, Wrench, CheckCircle2, FileOutput } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { name: "Upload Drawing", icon: Upload },
  { name: "AI Parsing", icon: BrainCircuit },
  { name: "Operations Detection", icon: Activity },
  { name: "Tool Matching", icon: Wrench },
  { name: "Feasibility Decision", icon: CheckCircle2 },
  { name: "Report Generation", icon: FileOutput },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Automated Assessment Pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            A continuous, deterministic workflow that transforms raw drawings into actionable manufacturing intelligence within seconds.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-16 w-16 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-sm mb-4 relative z-10">
                    <Icon className="h-6 w-6 text-muted-foreground" />
                    {/* Active indicator */}
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary/20 border border-background"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground text-center">
                    {step.name}
                  </h3>
                  <div className="text-xs text-muted-foreground mt-1 font-mono">
                    Step 0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
