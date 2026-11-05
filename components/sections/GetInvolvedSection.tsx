"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartHandshake, ShieldCheck, Sprout, Users2 } from "lucide-react";

export default function GetInvolvedSection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#0b0514] text-white px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[var(--color-accent)]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 mb-8">
            <Sprout size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Direct Community Participation
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6 font-[family-name:var(--font-heading)]">
            Change Doesn&apos;t Happen <br />
            <span className="text-[var(--color-accent)]">From The Sidelines.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you volunteer on muddy delta riverbanks, run soil analysis in our youth labs,
            or fund emergency mangrove restorations, your presence changes the outcome.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black text-sm uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(195,255,0,0.3)]"
            >
              <span>Join As A Volunteer</span>
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-primary-light)]/60 bg-[#0b0514]/60 text-white font-bold text-sm uppercase tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              <span>Partner With Univo</span>
              <HeartHandshake size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="pt-10 mt-10 border-t border-[var(--color-primary-light)]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--color-text-muted)]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-[var(--color-accent)]" />
              <span>100% Non-Profit Operation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users2 size={16} className="text-[var(--color-accent)]" />
              <span>24 Regional Youth Chapters</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sprout size={16} className="text-[var(--color-accent)]" />
              <span>Verified Scientific Impact</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

