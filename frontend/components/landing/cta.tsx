import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to streamline your CNC quoting?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join top machine shops using MachinaCheck to eliminate quoting bottlenecks, reduce programming errors, and increase machine utilization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base gap-2 font-semibold">
              <Upload className="w-5 h-5" />
              Upload Drawing Now
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur">
              Contact Sales
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6 font-mono">
            Supports PDF, DXF, STEP, and IGES up to 50MB.
          </p>
        </div>
      </div>
    </section>
  );
}
