"use client";

import React from "react";
import { FileSearch, Settings2, Wrench, Cpu, AlertTriangle, FileText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "3D Parsing",
    description: "Instantly parse complex 3D CAD models using AI agents.",
    icon: FileSearch,
  },
  {
    title: "CNC Operation Detection",
    description: "Automatically identify required machining operations like turning, milling, drilling, and tapping.",
    icon: Settings2,
  },
  {
    title: "Tool Matching",
    description: "Map detected features to available shop floor tooling to ensure manufacturability without custom tools.",
    icon: Wrench,
  },
  {
    title: "Machine Capability Analysis",
    description: "Evaluate if part dimensions, tolerances, and operations fit within your specific machine envelope.",
    icon: Cpu,
  },
  {
    title: "Risk Detection",
    description: "Identify high-risk geometric features, tight tolerances, or impossible-to-machine internal geometries.",
    icon: AlertTriangle,
  },
  {
    title: "Automated Reports",
    description: "Generate comprehensive DFM (Design for Manufacturing) reports instantly for client feedback.",
    icon: FileText,
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            Industrial-Grade AI Capabilities
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Comprehensive manufacturability analysis tools designed for advanced machine shops
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 group-hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300 h-full">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
