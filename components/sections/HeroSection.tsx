"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck, Sprout, Users, MapPin } from "lucide-react";
import { impactMetrics } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0514] text-white pt-10 pb-16 border-b border-[var(--color-border)]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumb Eyebrow Badge */}
        <div className="flex items-center gap-2 mb-5">
          <span className="pro-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Youth Climate Vanguard • Bangladesh
          </span>
        </div>

        {/* Clean, Proportionate Headline */}
        <div className="max-w-3xl mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            Defending soil health, protecting vulnerable deltas, and empowering{" "}
            <span className="text-[var(--color-accent)]">youth climate action.</span>
          </h1>

          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-2xl font-normal">
            Univo is a youth-led social movement combating soil salinity, riverbank erosion,
            and environmental degradation across Bangladesh through auditable, grassroots community intervention.
          </p>
        </div>

        {/* Action CTAs & Highlights */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-xs sm:text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-sm"
          >
            <span>Join The Movement</span>
            <ArrowUpRight size={15} />
          </Link>

          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white text-xs sm:text-sm font-medium hover:border-[var(--color-accent)] transition-colors"
          >
            <span>View Active Field Missions</span>
            <ArrowRight size={15} />
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--color-text-muted)] ml-3 pl-4 border-l border-[var(--color-border)]">
            <ShieldCheck size={16} className="text-[var(--color-accent)] shrink-0" />
            <span>100% Non-profit & youth-directed</span>
          </div>
        </div>

        {/* Key Metrics Banner (Clean, balanced grid like modern travel & civic dashboards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {impactMetrics.map((stat) => (
            <div
              key={stat.label}
              className="pro-card p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-[var(--color-accent)] block mt-0.5">
                  {stat.label}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-2 line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
