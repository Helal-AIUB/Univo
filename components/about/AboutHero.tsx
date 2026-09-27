"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg-base)] text-[var(--color-text-main)] px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background Animated Parallax Glow */}
      <motion.div
        style={{ y: yBackground }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 md:w-[32rem] h-80 md:h-[32rem] rounded-full bg-[var(--color-accent)] opacity-15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-96 md:w-[36rem] h-96 md:h-[36rem] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-[130px]"
        />
      </motion.div>

      {/* Hero Narrative */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary)]/40 backdrop-blur-md mb-8"
        >
          <Sprout size={16} className="text-[var(--color-accent)]" />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[var(--color-accent)]">
            Our Purpose & Genesis
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8"
        >
          Defending Soil. <br />
          <span className="text-[var(--color-accent)]">Reclaiming Balance.</span>
        </motion.h1>

        {/* Lead Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl text-base sm:text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed font-normal"
        >
          Univo is an environmental awareness movement uniting youth leadership,
          ecological science, and frontline communities to defend vulnerable land, 
          regenerate critical soil systems, and ignite climate resilience.
        </motion.p>
      </motion.div>
    </section>
  );
}