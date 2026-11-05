"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sprout, Sparkles, ArrowDown } from "lucide-react";
import { impactMetrics } from "@/lib/data";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0b0514] text-white px-4 sm:px-6 lg:px-8 pt-8 pb-14 border-b border-[var(--color-primary-light)]/20"
    >
      {/* Cinematic Ambient Gradient Mesh */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[42rem] h-[42rem] rounded-full bg-[var(--color-primary-light)] opacity-25 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[-10%] w-[38rem] h-[38rem] rounded-full bg-[var(--color-accent)] opacity-10 blur-[160px]" />
        <div className="absolute top-[40%] left-[30%] w-[26rem] h-[26rem] rounded-full bg-[#3b1763] opacity-35 blur-[120px]" />
        
        {/* Subtle geometric line grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(122,56,189,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(122,56,189,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Main Hero Header */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-10 sm:pt-16 flex flex-col items-start"
      >
        {/* Vanguard Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-accent)]">
            Youth Climate Vanguard • Defending Vulnerable Deltas
          </span>
        </motion.div>

        {/* Editorial Brutalist Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.92] mb-8 font-[family-name:var(--font-heading)]"
        >
          The Future Belongs <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[var(--color-accent)]">
            To Those Who Defend
          </span>{" "}
          <br />
          <span className="text-[var(--color-accent)] underline decoration-[var(--color-primary-light)] decoration-4 underline-offset-8">
            The Land.
          </span>
        </motion.h1>

        {/* Subtitle & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 w-full max-w-5xl mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl font-normal">
            Univo is an unapologetic, youth-led collective confronting land degradation,
            soil salinity, and environmental injustice across Bangladesh&apos;s most vulnerable climate frontiers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/initiatives"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black text-sm uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(195,255,0,0.3)]"
            >
              <span>Explore Initiatives</span>
              <ArrowUpRight size={18} />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-primary-light)]/60 bg-[var(--color-primary)]/20 text-white font-bold text-sm uppercase tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all backdrop-blur-md"
            >
              Our Manifesto
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Verified Real-time Ground Impact Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/30 backdrop-blur-xl">
          {impactMetrics.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-3 sm:p-4 flex flex-col justify-between ${
                idx !== impactMetrics.length - 1 ? "md:border-r border-[var(--color-primary-light)]/20" : ""
              }`}
            >
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--color-accent)] tracking-tight block font-[family-name:var(--font-heading)]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white block mt-1">
                  {stat.label}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-2 hidden sm:block line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center pt-8">
          <a
            href="#mission"
            aria-label="Scroll to mission section"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span>Scroll To Explore</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
