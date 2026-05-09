import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:from-blue-700 group-hover:to-cyan-600 transition-all">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">MachinaCheck</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">Features</Link>
          <Link href="#workflow" className="text-slate-300 hover:text-blue-400 transition-colors">Workflow</Link>
          <Link href="#dashboard" className="text-slate-300 hover:text-blue-400 transition-colors">Docs</Link>
        </nav>

        <Link 
          href="/analyze"
          className="hidden sm:inline-flex px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-sm rounded-lg transition-all shadow-lg hover:shadow-blue-500/50 active:scale-95"
        >
          Analyze Now
        </Link>
      </div>
    </header>
  );
}
