import { Upload, Cpu, Sparkles, Trophy } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload startup", desc: "Drop a deck or connect your CRM." },
  { icon: Cpu, title: "AI analyzes data", desc: "Multi-source intelligence in seconds." },
  { icon: Sparkles, title: "Generate insights", desc: "Market fit, foresight, similar startups." },
  { icon: Trophy, title: "Decide with foresight", desc: "Invest with conviction, backed by data." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How it works</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            From pitch deck to <span className="text-gradient">conviction</span>
          </h2>
        </div>

        <div className="mt-16 relative grid gap-6 md:grid-cols-4">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto h-24 w-24 rounded-2xl bg-card-glass border border-primary/30 flex items-center justify-center glow-primary">
                <s.icon className="h-9 w-9 text-primary" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
