"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, FileText, Info, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Enterprise Grade Analysis
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive dashboard providing deep insights into manufacturing feasibility, risk factors, and tool requirements.
          </p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto rounded-xl border border-border/50 bg-background shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Dashboard Header */}
          <div className="border-b border-border/50 bg-muted/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold font-mono text-sm">PART-A92-REV3</h3>
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 rounded-sm">
                <CheckCircle className="w-3 h-3 mr-1" /> Manufacturable
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono">EST. CYCLE TIME: 4m 12s</span>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Drawing Viewer & Agent Reasoning */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="flex-1 bg-muted/10 border-border/50 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-border/50">
                  <CardTitle className="text-sm flex items-center font-medium">
                    <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                    2D Drawing Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 h-64 relative bg-card flex items-center justify-center">
                   {/* Blueprint representation */}
                   <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                   <div className="relative border-2 border-primary/20 w-3/4 h-3/4 flex items-center justify-center">
                     <span className="font-mono text-xs text-muted-foreground">Interactive CAD Viewer</span>
                     <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full border border-red-500/50 bg-red-500/10 animate-pulse"></div>
                     <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full border border-yellow-500/50 bg-yellow-500/10"></div>
                   </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/10 border-border/50 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-border/50">
                  <CardTitle className="text-sm flex items-center font-medium">
                    <BrainIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                    Agent Reasoning Panel
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 font-mono text-xs text-muted-foreground">
                    <div className="flex gap-2">
                      <span className="text-primary">{">"}</span>
                      <p>Analyzed 14 geometric features and 8 dimensional tolerances.</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary">{">"}</span>
                      <p>Identified required operations: Facing, Roughing, Finishing, Tapping (M6x1.0).</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary">{">"}</span>
                      <p>Tolerance ±0.01mm on ID fits within machine HAAS-VF2 capability.</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <span className="text-green-500">{">"}</span>
                      <p>Conclusion: Part can be manufactured using standard shop tooling.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Risk Flags & Tools */}
            <div className="flex flex-col gap-6">
              <Card className="bg-muted/10 border-border/50 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-border/50">
                  <CardTitle className="text-sm flex items-center font-medium">
                    <AlertCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                    Risk Flags
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-md bg-yellow-500/5 border border-yellow-500/20">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-foreground">Deep Hole Drilling</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">L/D ratio is 6:1. Peck drilling recommended.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-md bg-blue-500/5 border border-blue-500/20">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-foreground">Thin Wall</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">Wall thickness 1.5mm. Watch for chatter.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-muted/10 border-border/50 shadow-none">
                <CardHeader className="py-4 px-5 border-b border-border/50">
                  <CardTitle className="text-sm flex items-center font-medium">
                    <Wrench className="w-4 h-4 mr-2 text-muted-foreground" />
                    Required Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border/50 text-xs">
                    <div className="flex items-center justify-between p-3 px-5">
                      <span className="font-mono text-muted-foreground">T01</span>
                      <span>Face Mill 50mm</span>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5">
                      <span className="font-mono text-muted-foreground">T04</span>
                      <span>End Mill 10mm</span>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5">
                      <span className="font-mono text-muted-foreground">T12</span>
                      <span>Drill 5.0mm</span>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 px-5">
                      <span className="font-mono text-muted-foreground">T15</span>
                      <span>Tap M6x1.0</span>
                      <CheckCircle className="w-3 h-3 text-green-500" />
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
