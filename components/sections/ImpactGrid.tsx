"use client";

import Link from "next/link";
import { TreePine, Scale, Users, Flame, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { impactMetrics } from "@/lib/data";

export default function ImpactGrid() {
  return (
    <section className="py-16 md:py-24 bg-[#0b0514] text-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
          <div>
            <span className="pro-badge mb-2">
              Audited Ground Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Measurable ecological and social returns.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mt-1">
              Every sapling, relief ration, and legal defense case is logged transparently with regional chapters.
            </p>
          </div>

          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors shrink-0"
          >
            <span>Full Transparency Report</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Bento Grid Composition (Pro Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Trees & Mangroves */}
          <div className="pro-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  50,000+
                </span>
                <div className="p-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <TreePine size={18} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Trees & Mangroves Planted
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Salt-tolerant coastal mangrove saplings planted along tidal erosion channels in the Sundarbans belt.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-accent)]">
              <span>Verified with GPS logbooks</span>
              <CheckCircle2 size={13} />
            </div>
          </div>

          {/* Card 2: Relief Mobilization */}
          <div className="pro-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] tracking-tight">
                  ৳2.4M+
                </span>
                <div className="p-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <Flame size={18} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Disaster Relief Deployed
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Emergency rations and biological water purifiers channeled into Sylhet and Sunamganj flood zones.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
              <span>Zero administrative overhead</span>
              <CheckCircle2 size={13} />
            </div>
          </div>

          {/* Card 3: Youth Mobilized */}
          <div className="pro-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  12,000+
                </span>
                <div className="p-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <Users size={18} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Youth Mobilized
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Students and young researchers active across 24 regional campus and coastal chapters.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-accent)]">
              <span>24 Regional chapters</span>
              <CheckCircle2 size={13} />
            </div>
          </div>

          {/* Card 4: Defended Communities */}
          <div className="pro-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] tracking-tight">
                  34
                </span>
                <div className="p-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <Scale size={18} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Defended Communities
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Agricultural villages supported with organic soil testing and legal advocacy against illegal wetland dumping.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
              <span>Community co-created</span>
              <CheckCircle2 size={13} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
