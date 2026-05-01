import { BarChart3, Brain, TrendingDown } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Too many startups, too little clarity",
    desc: "Hundreds of pitch decks, scattered notes, no unified signal.",
  },
  {
    icon: Brain,
    title: "Decisions rely on memory & intuition",
    desc: "Gut-feel investing leaves alpha on the table.",
  },
  {
    icon: TrendingDown,
    title: "Limited visibility into future potential",
    desc: "Without foresight, you're investing in the past.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The core question</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Which startup should I invest in — <span className="text-gradient">and why?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            VCs evaluate hundreds of startups, but lack structured memory, real-time data, and predictive insights.
            VCForesight transforms fragmented information into actionable intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative bg-card-glass rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
