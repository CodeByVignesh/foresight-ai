import { GitCompare, LineChart, Telescope, Check } from "lucide-react";

const features = [
  {
    icon: GitCompare,
    eyebrow: "01 — Similarity Engine",
    title: "Similarity Startup Engine",
    desc: "Compare any startup with similar companies across your internal database and the global startup ecosystem.",
    bullets: ["Competitor mapping", "Differentiation insights", "Pattern recognition"],
    accent: "from-primary to-primary-glow",
  },
  {
    icon: LineChart,
    eyebrow: "02 — Market Analytics",
    title: "Market Analytics",
    desc: "Understand if the startup actually fits the market — with demand signals, segments and risk indicators.",
    bullets: ["Market demand signals", "Customer segments", "Industry growth & risk"],
    accent: "from-secondary to-accent",
  },
  {
    icon: Telescope,
    eyebrow: "03 — Tech Foresight",
    title: "Technology Foresight",
    desc: "Predict whether the startup aligns with future tech trends across research, patents and emerging tech.",
    bullets: ["Emerging technologies", "Research & patent momentum", "Long-term viability score"],
    accent: "from-accent to-primary",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Capabilities</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Three engines, <span className="text-gradient">one decision</span>
          </h2>
        </div>

        <div className="mt-20 space-y-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative grid gap-10 lg:grid-cols-5 items-center bg-card-glass border border-border rounded-3xl p-8 lg:p-12 hover:border-primary/40 transition-all duration-500 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{f.eyebrow}</div>
                <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className={`relative aspect-square max-w-xs mx-auto rounded-3xl bg-gradient-to-br ${f.accent} p-[1px]`}>
                  <div className="h-full w-full rounded-3xl bg-card flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.7_0.22_295/0.25),_transparent_70%)]" />
                    <f.icon className="relative h-24 w-24 text-foreground" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
