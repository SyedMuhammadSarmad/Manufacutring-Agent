"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-4 py-2 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-300">Powered by Multimodal AI</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-Powered CNC<br />
            Manufacturability
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Upload engineering drawings and instantly determine machining feasibility using AI agents
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/analyze"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all active:scale-95"
            >
              <Upload className="h-5 w-5" />
              Start Analysis
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-slate-600 hover:border-blue-500 text-slate-200 font-semibold transition-all hover:bg-slate-800/50">
              View Documentation
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            className="mt-20 relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                  <div className="text-sm text-slate-400">Parts Analyzed</div>
                </div>
                <div className="text-center border-l border-r border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.8%</div>
                  <div className="text-sm text-slate-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">&lt;2s</div>
                  <div className="text-sm text-slate-400">Analysis Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
