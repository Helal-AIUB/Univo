import type { Metadata } from "next";
import { TreePine, Scale, Users, Flame, ShieldCheck, CheckCircle2 } from "lucide-react";
import { impactMetrics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Measurable Impact & Transparency",
  description:
    "Review Univo's verifiable impact metrics: trees planted, communities defended, and youth vanguard mobilization across vulnerable deltas.",
};

export default function ImpactPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <span className="pro-badge mb-3">
            Auditable Outcomes
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Measurable Proof. <span className="text-[var(--color-accent)]">Uncompromising Transparency.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Univo holds a strict policy: every metric is verified from ground GPS logs, field registries, and partner community endorsements.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactMetrics.map((item) => (
            <div
              key={item.label}
              className="pro-card p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] tracking-tight mb-2 block">
                  {item.value}
                </span>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
                <span>Verified Metric</span>
                <CheckCircle2 size={13} className="text-[var(--color-accent)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance Protocols */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-[var(--color-border)] bg-[#0e071a]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-8">
            <span className="pro-badge mb-2">Governance Framework</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              How We Maintain Credibility & Non-Partisanship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="pro-card p-5">
              <Scale className="text-[var(--color-accent)] w-6 h-6 mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">
                Independent Oversight
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Advisory board oversight from ecological research institutions ensures all advocacy is grounded in verified soil science.
              </p>
            </div>

            <div className="pro-card p-5">
              <Users className="text-[var(--color-accent)] w-6 h-6 mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">
                Grassroots Co-Creation
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Local farming cooperatives and flood victims directly determine where resources are concentrated.
              </p>
            </div>

            <div className="pro-card p-5">
              <Flame className="text-[var(--color-accent)] w-6 h-6 mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">
                Rapid Logistics
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Emergency kits and saplings are dispatched through decentralized student nodes within 48 hours of seasonal flash disasters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
