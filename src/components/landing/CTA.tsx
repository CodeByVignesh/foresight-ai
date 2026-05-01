import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card-glass p-12 sm:p-20 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/30 blur-[140px]" />
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Stop guessing. <br className="hidden sm:block" />
              Start investing with <span className="text-gradient">foresight.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Join the next generation of VCs making decisions backed by real data and predictive AI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="h-12 px-8 text-base">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="lg" className="h-12 px-8 text-base">
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} VCForesight. Investment intelligence, reimagined.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
