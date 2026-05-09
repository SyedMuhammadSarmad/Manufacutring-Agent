import React from "react";
import Link from "next/link";
import { Upload, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12 sm:p-16 text-center backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Ready to optimize your CNC workflow?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join leading machine shops eliminating quoting delays, reducing errors, and maximizing shop floor efficiency with AI-powered manufacturability analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/analyze"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all active:scale-95"
              >
                <Upload className="w-5 h-5" />
                Start Free Analysis
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-slate-600 hover:border-blue-500 text-slate-200 font-semibold hover:bg-slate-800/50 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-400">
              Supports STEP, STP, and DXF files up to 50MB • 2-second analysis • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
