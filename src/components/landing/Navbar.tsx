import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] glow-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-gradient">VCForesight</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#data" className="hover:text-foreground transition-colors">Data Engine</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        </div>
        <Button variant="hero" size="sm">Request Demo</Button>
      </nav>
    </header>
  );
}
