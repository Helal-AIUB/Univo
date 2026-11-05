import type { Metadata } from "next";
import Link from "next/link";
import { TreePine, Scale, Users, Flame, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { impactMetrics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Measurable Impact & Transparency",
  description:
    "Review Univo's verifiable impact metrics: trees planted, communities defended, and youth vanguard mobilization across vulnerable deltas.",
};

export default function ImpactPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--color-primary)]/20 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
            <ShieldCheck size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Auditable Outcomes
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-[family-name:var(--font-heading)]">
            Measurable Proof. <br />
            <span className="text-[var(--color-accent)]">Uncompromising Transparency.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Univo holds a strict policy: we never publish speculative projections or fabricated achievements.
            Every metric below is cataloged from field logs and community partner endorsements.
          </p>
        </div>
      </section>

      {/* Main Impact Metrics Bento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((item, idx) => (
            <div
              key={item.label}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[var(--color-accent)] tracking-tighter mb-4 block font-[family-name:var(--font-heading)]">
                  {item.value}
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-primary-light)]/20 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <span>Verified Metric</span>
                <CheckCircle2 size={16} className="text-[var(--color-accent)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep-Dive Operational Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-primary-light)]/20 bg-[#0e071a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2 block">
              Governance Protocols
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              How We Maintain Credibility & Non-Partisanship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <Scale className="text-[var(--color-accent)] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Independent Oversight
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Advisory board oversight from ecological research institutions ensures all advocacy is grounded in verified soil science.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <Users className="text-[var(--color-accent)] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Grassroots Co-Creation
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Local farming cooperatives and flood victims directly determine where resources are concentrated, eliminating bureaucratic waste.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <Flame className="text-[var(--color-accent)] w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Rapid Logistics
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Emergency kits and sapling supplies are dispatched through decentralized student nodes within 48 hours of seasonal flash disasters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

