import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">MachinaCheck</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="transition-colors hover:text-foreground">Features</Link>
          <Link href="#workflow" className="transition-colors hover:text-foreground">Workflow</Link>
          <Link href="#dashboard" className="transition-colors hover:text-foreground">Dashboard</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
         <div className="flex items-center gap-4">
           <Link href="/analyze">
             <Button variant="default" size="sm" className="hidden sm:inline-flex">
               Upload Drawing
             </Button>
           </Link>
         </div>
      </div>
    </header>
  );
}
