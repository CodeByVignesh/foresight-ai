import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { DataEngine } from "@/components/landing/DataEngine";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CTA, Footer } from "@/components/landing/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VCForesight — AI-powered investment intelligence for VCs" },
      {
        name: "description",
        content:
          "Know which startup to invest in — and why. VCForesight turns real-time data into actionable VC intelligence with similarity, market and tech foresight engines.",
      },
      { property: "og:title", content: "VCForesight — AI investment intelligence" },
      {
        property: "og:description",
        content: "AI-powered investment intelligence for venture capital decisions.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <DataEngine />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
