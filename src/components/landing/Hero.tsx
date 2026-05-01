import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, TrendingUp, Brain, Network } from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-24">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="container relative mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            AI-powered investment intelligence
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">VCForesight</span>
          </h1>
          <p className="mt-6 text-xl text-foreground/90 leading-relaxed max-w-xl">
            AI-powered investment intelligence for venture capital decisions.
          </p>
          <p className="mt-3 text-base text-muted-foreground max-w-xl">
            Know which startup to invest in — and why — backed by real data &amp; foresight.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="h-12 px-8 text-base">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="lg" className="h-12 px-8 text-base">
              <PlayCircle className="h-4 w-4" /> See Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">7+</div>
              <div>Live data sources</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">10k+</div>
              <div>Startups analyzed</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div>Signal accuracy</div>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="AI network analyzing startup ecosystem"
              width={1536}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating insight cards */}
          <div className="absolute -left-6 top-12 bg-card-glass border border-primary/30 rounded-2xl p-4 shadow-[var(--shadow-elegant)] animate-float">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Market Fit</div>
                <div className="text-lg font-bold text-foreground">82%</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 bg-card-glass border border-secondary/30 rounded-2xl p-4 shadow-[var(--shadow-elegant)] animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Brain className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Tech Longevity</div>
                <div className="text-lg font-bold text-foreground">High</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-12 bg-card-glass border border-accent/30 rounded-2xl p-4 shadow-[var(--shadow-elegant)] animate-float" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Network className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Similar Startups</div>
                <div className="text-lg font-bold text-foreground">147 found</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
