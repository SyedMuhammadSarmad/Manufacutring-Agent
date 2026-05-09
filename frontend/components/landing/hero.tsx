"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Upload } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                MachinaCheck v2.0 is live
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AI-Powered CNC <br />
              <span className="text-muted-foreground">Manufacturability Intelligence</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Upload engineering drawings and instantly determine machining feasibility using multimodal AI agents.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="gap-2 w-full sm:w-auto font-semibold">
                <Upload className="h-4 w-4" />
                Upload Drawing
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Play className="h-4 w-4" />
                View Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-xl border border-border/50 bg-card/50 shadow-2xl backdrop-blur-sm overflow-hidden p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50"></div>
              <div className="rounded-lg border border-border/50 bg-background overflow-hidden shadow-sm flex flex-col">
                {/* Mockup Header */}
                <div className="h-10 border-b border-border/50 bg-muted/20 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                  </div>
                  <div className="ml-4 h-4 w-64 bg-muted/50 rounded-sm"></div>
                </div>
                {/* Mockup Body */}
                <div className="p-4 grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-48 rounded-md bg-muted/20 border border-border/50 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                       <span className="text-muted-foreground/50 font-mono text-sm">[ CAD Viewer Render ]</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-md border border-border/50 bg-muted/10 p-3 space-y-2">
                         <div className="h-3 w-20 bg-muted/50 rounded-sm"></div>
                         <div className="h-6 w-12 bg-primary/20 rounded-sm"></div>
                      </div>
                      <div className="h-24 rounded-md border border-border/50 bg-muted/10 p-3 space-y-2">
                         <div className="h-3 w-24 bg-muted/50 rounded-sm"></div>
                         <div className="h-6 w-16 bg-muted/30 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 space-y-4">
                    <div className="h-16 rounded-md border border-border/50 bg-muted/10 p-3 flex flex-col justify-center">
                       <div className="h-3 w-16 bg-green-500/20 rounded-sm mb-2"></div>
                       <div className="h-2 w-full bg-muted/30 rounded-full"></div>
                    </div>
                    <div className="h-full rounded-md border border-border/50 bg-muted/10 p-3 space-y-3">
                       <div className="h-3 w-20 bg-muted/50 rounded-sm"></div>
                       <div className="space-y-2">
                         <div className="h-2 w-full bg-muted/30 rounded-sm"></div>
                         <div className="h-2 w-4/5 bg-muted/30 rounded-sm"></div>
                         <div className="h-2 w-5/6 bg-muted/30 rounded-sm"></div>
                         <div className="h-2 w-full bg-muted/30 rounded-sm"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
