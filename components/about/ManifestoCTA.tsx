"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

export default function ManifestoCTA() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[var(--color-bg-base)] text-[var(--color-text-main)] overflow-hidden border-t border-[var(--color-primary-light)]/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-[var(--color-accent)]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-[var(--color-primary)]/60 backdrop-blur-xl border border-[var(--color-primary-light)] shadow-2xl"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4 block">
            Make A Stand Today
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            The Planet Does Not Need More Spectators. <br />
            <span className="text-[var(--color-accent)]">It Needs Catalysts.</span>
          </h2>

          <p className="text-[var(--color-text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you volunteer on the ground, advocate in your community, or fund our rapid 
            soil regeneration operations, you become an indispensable link in our collective chain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-sm md:text-base uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(195,255,0,0.3)]"
            >
              Support Our Mission <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--color-primary-light)] text-[var(--color-text-main)] font-bold text-sm md:text-base uppercase tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              Volunteer With Univo <HeartHandshake size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}