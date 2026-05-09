"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, FileText, Info, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative bg-gradient-to-b from-slate-900/30 to-slate-950/50 border-y border-border/50">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Enterprise Grade Analysis
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
            A comprehensive dashboard providing deep insights into manufacturing feasibility, risk factors, and tool requirements.
          </motion.p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80 shadow-2xl overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Dashboard Header with gradient */}
          <div className="border-b border-cyan-500/20 bg-gradient-to-r from-slate-900/50 to-slate-950/50 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold font-mono text-sm text-cyan-300">PART-A92-REV3</h3>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 rounded-sm shadow-lg">
                <CheckCircle className="w-3 h-3 mr-1" /> Manufacturable
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-cyan-400/70 font-mono">EST. CYCLE TIME: 4m 12s</span>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Drawing Viewer & Agent Reasoning */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="flex-1 bg-gradient-to-br from-slate-850/60 to-slate-900/40 border-cyan-500/20 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-cyan-500/20">
                  <CardTitle className="text-sm flex items-center font-medium text-cyan-300">
                    <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                    2D Drawing Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 h-64 relative bg-card flex items-center justify-center overflow-hidden">
                   {/* Blueprint grid with gradient */}
                   <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                   <div className="relative border-2 border-cyan-500/40 w-3/4 h-3/4 flex items-center justify-center rounded-lg bg-slate-950/50">
                     <span className="font-mono text-xs text-cyan-400/60">Interactive CAD Viewer</span>
                     <motion.div 
                       className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full border border-red-400/60 bg-red-500/20"
                       animate={{ scale: [1, 1.2, 1] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                     <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full border border-yellow-400/60 bg-yellow-500/20"></div>
                   </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-850/60 to-slate-900/40 border-cyan-500/20 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-cyan-500/20">
                  <CardTitle className="text-sm flex items-center font-medium text-cyan-300">
                    <BrainIcon className="w-4 h-4 mr-2 text-cyan-400" />
                    Agent Reasoning Panel
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 font-mono text-xs text-cyan-300/80">
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0 }}
                    >
                      <span className="text-cyan-400 flex-shrink-0">{">"}</span>
                      <p>Analyzed 14 geometric features and 8 dimensional tolerances.</p>
                    </motion.div>
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-cyan-400 flex-shrink-0">{">"}</span>
                      <p>Identified required operations: Facing, Roughing, Finishing, Tapping (M6x1.0).</p>
                    </motion.div>
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-cyan-400 flex-shrink-0">{">"}</span>
                      <p>Tolerance ±0.01mm on ID fits within machine HAAS-VF2 capability.</p>
                    </motion.div>
                    <motion.div 
                      className="flex gap-2 text-green-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-green-400 flex-shrink-0">{">"}</span>
                      <p>Conclusion: Part can be manufactured using standard shop tooling.</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Risk Flags & Tools */}
            <div className="flex flex-col gap-6">
              <Card className="bg-gradient-to-br from-slate-850/60 to-slate-900/40 border-cyan-500/20 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-cyan-500/20">
                  <CardTitle className="text-sm flex items-center font-medium text-cyan-300">
                    <AlertCircle className="w-4 h-4 mr-2 text-cyan-400" />
                    Risk Flags
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-yellow-100">Deep Hole Drilling</h4>
                      <p className="text-[10px] text-yellow-200/70 mt-1">L/D ratio is 6:1. Peck drilling recommended.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-md bg-blue-500/10 border border-blue-500/30">
                    <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-blue-100">Thin Wall</h4>
                      <p className="text-[10px] text-blue-200/70 mt-1">Wall thickness 1.5mm. Watch for chatter.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-gradient-to-br from-slate-850/60 to-slate-900/40 border-cyan-500/20 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-cyan-500/20">
                  <CardTitle className="text-sm flex items-center font-medium text-cyan-300">
                    <Wrench className="w-4 h-4 mr-2 text-cyan-400" />
                    Required Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-cyan-500/20 text-xs">
                    <div className="flex items-center justify-between p-3 px-5 hover:bg-cyan-500/10 transition-colors">
                      <span className="font-mono text-cyan-400/60">T01</span>
                      <span className="text-cyan-200">Face Mill 50mm</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5 hover:bg-cyan-500/10 transition-colors">
                      <span className="font-mono text-cyan-400/60">T04</span>
                      <span className="text-cyan-200">End Mill 10mm</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5 hover:bg-cyan-500/10 transition-colors">
                      <span className="font-mono text-cyan-400/60">T12</span>
                      <span className="text-cyan-200">Drill 5.0mm</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5 hover:bg-cyan-500/10 transition-colors">
                      <span className="font-mono text-cyan-400/60">T15</span>
                      <span className="text-cyan-200">Tap M6x1.0</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.002 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}
