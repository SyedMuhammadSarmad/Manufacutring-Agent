"use client";

import React from "react";
import { Upload, BrainCircuit, Activity, Wrench, CheckCircle2, FileOutput } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { name: "Upload Drawing", icon: Upload, gradient: "from-blue-500 to-blue-600" },
  { name: "AI Parsing", icon: BrainCircuit, gradient: "from-cyan-500 to-blue-500" },
  { name: "Operations Detection", icon: Activity, gradient: "from-cyan-400 to-cyan-500" },
  { name: "Tool Matching", icon: Wrench, gradient: "from-blue-400 to-cyan-400" },
  { name: "Feasibility Decision", icon: CheckCircle2, gradient: "from-cyan-500 to-blue-500" },
  { name: "Report Generation", icon: FileOutput, gradient: "from-blue-600 to-cyan-500" },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-24 relative bg-gradient-to-b from-slate-950/50 to-slate-900/30">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Automated Assessment Pipeline
              </span>
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A continuous, deterministic workflow that transforms raw drawings into actionable manufacturing intelligence within seconds.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated connecting line */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </motion.div>
          
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
                  {/* Icon container with gradient glow */}
                  <motion.div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-4 relative z-10 cursor-pointer group`}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <Icon className="h-6 w-6 text-white relative z-10" />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-30 group-hover:blur-lg -z-10 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6))` }}></div>
                  </motion.div>
                  
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
