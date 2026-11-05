"use client";

import { Sprout, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative py-14 sm:py-20 bg-[var(--color-bg-base)] text-[var(--color-text-main)] px-4 sm:px-6 border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 pro-badge mb-4">
          <Sprout size={14} />
          <span>Our Genesis & Purpose</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Defending Soil. <span className="text-[var(--color-accent)]">Reclaiming Balance.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
          Univo is an environmental awareness movement uniting youth leadership, ecological science,
          and frontline communities across Bangladesh to defend vulnerable land, regenerate soil systems,
          and build enduring community resilience.
        </p>

      </div>
    </section>
  );
}