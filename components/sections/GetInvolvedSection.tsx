"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Users, CheckCircle2 } from "lucide-react";

export default function GetInvolvedSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0e071a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center relative overflow-hidden">
          
          <span className="pro-badge mb-3">
            Join The Vanguard
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 max-w-xl mx-auto">
            Real environmental change starts with collective action.
          </h2>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you volunteer on riverbank restoration drives, assist in biological soil health labs,
            or help organize local university chapters, your dedication protects our common earth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-xs sm:text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-all shadow-sm"
            >
              <span>Apply As Volunteer</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0b0514] border border-[var(--color-border)] text-white text-xs sm:text-sm font-medium hover:border-[var(--color-accent)] transition-colors"
            >
              <span>Partner With Univo</span>
              <HeartHandshake size={15} />
            </Link>
          </div>

          <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--color-accent)]" /> 100% Non-profit movement
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-[var(--color-accent)]" /> 24 Active district chapters
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[var(--color-accent)]" /> Audited impact logs
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
