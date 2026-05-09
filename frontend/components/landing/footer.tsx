import React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 py-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">MachinaCheck</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-powered CNC manufacturability assessment platform for advanced machine shops.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Features</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Workflow</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Integrations</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Documentation</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">API Reference</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Blog</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">GitHub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">About</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Contact</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="py-8 border-t border-cyan-500/20 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MachinaCheck Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-mono">
            <span className="text-cyan-400/60">SYS.STATUS: <span className="text-green-400">ONLINE</span></span>
            <span className="text-slate-600">v2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
