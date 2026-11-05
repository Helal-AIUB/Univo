"use client";

import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

export default function ManifestoCTA() {
  return (
    <section className="py-14 sm:py-20 bg-[#0e071a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
          <span className="pro-badge mb-3">
            Collective Responsibility
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            The earth does not need spectators. It needs catalysts.
          </h2>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed mb-6">
            Whether you volunteer in rural coastal districts, organize campus climate workshops,
            or fund sapling nurseries, your involvement directly preserves the fertile delta.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-involved"
              className="px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-semibold text-xs hover:bg-[var(--color-accent-hover)] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Join As A Volunteer</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-[var(--color-bg-base)] border border-[var(--color-border)] text-white font-medium text-xs hover:border-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              <span>Contact Secretariat</span>
              <HeartHandshake size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}