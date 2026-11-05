"use client";

import { Mountain, Users, Flame, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "01",
    title: "Soil Rights & Land Health",
    subtitle: "Regeneration",
    description:
      "Combating coastal salinity and nutrient depletion through youth-led biological remediation, organic compost distribution, and sustainable agricultural advocacy.",
    icon: Mountain,
  },
  {
    id: "02",
    title: "Youth Leadership Vanguard",
    subtitle: "Mobilization",
    description:
      "Transforming students into certified environmental ambassadors capable of organizing regional climate strikes, policy workshops, and grassroots campaigns.",
    icon: Users,
  },
  {
    id: "03",
    title: "Rapid Disaster Intervention",
    subtitle: "Frontline Action",
    description:
      "Mobilizing logistical response groups during emergency flood events and climate shocks to safeguard vulnerable families and plant protective mangrove buffers.",
    icon: Flame,
  },
];

export default function CorePillars() {
  return (
    <section className="py-14 sm:py-20 bg-[#0e071a] text-[var(--color-text-main)] border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
          <div>
            <span className="pro-badge mb-2">Our Blueprint</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Three Core Operational Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mt-1">
              Every volunteer dispatched and initiative funded is routed through our three strategic disciplines.
            </p>
          </div>

          <Link
            href="/initiatives"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors shrink-0"
          >
            <span>Explore Active Programs</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="pro-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-[var(--color-accent)]">
                      {pillar.id}
                    </span>
                    <div className="p-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-subtle)] block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-accent)] font-medium">
                  <span>Structured Framework</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}