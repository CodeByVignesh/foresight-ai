import { Database, Globe, FileText, Search, Cpu, BookOpen, FlaskConical, Layers } from "lucide-react";

const sources = [
  { name: "World Bank Data", icon: Globe, label: "Economic Indicators" },
  { name: "OpenAlex", icon: BookOpen, label: "Research Trends" },
  { name: "DuckDuckGo", icon: Search, label: "Web Signals" },
  { name: "Website Fetcher", icon: Layers, label: "Startup Signals" },
  { name: "Google Patents", icon: FileText, label: "Innovation" },
  { name: "Semantic Scholar", icon: FlaskConical, label: "Science Graph" },
  { name: "arXiv", icon: Database, label: "Tech Evolution" },
];

export function DataEngine() {
  return (
    <section id="data" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Real Data Engine</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Built on a <span className="text-gradient">Real Data Intelligence Core</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            VCForesight integrates global economic, research, web, and innovation data to generate deep investment insights.
          </p>
        </div>

        <div className="mt-20 relative mx-auto max-w-5xl">
          {/* Center core */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="relative z-10 flex flex-col items-center justify-center h-44 w-44 rounded-full bg-[image:var(--gradient-primary)] glow-primary border border-primary-foreground/20">
              <Cpu className="h-10 w-10 text-primary-foreground" />
              <div className="mt-2 text-xs font-semibold text-primary-foreground/90 text-center px-4">Real Data<br/>Intelligence Core</div>
            </div>
          </div>

          {/* Source nodes around */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sources.map((s, i) => (
              <div
                key={s.name}
                className="group relative bg-card-glass border border-border rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-foreground truncate">{s.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{s.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
