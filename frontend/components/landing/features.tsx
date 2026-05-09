"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileSearch, Settings2, Wrench, Cpu, AlertTriangle, FileText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Drawing Parsing",
    description: "Instantly parse complex 2D engineering drawings and 3D CAD models using multimodal vision agents.",
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
    <section id="features" className="py-24 bg-muted/30 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Industrial-Grade AI Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of manufacturability analysis tools designed specifically for advanced machine shops.
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
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-muted/50 transition-colors group">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
