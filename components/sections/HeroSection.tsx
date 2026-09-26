"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { useRef } from "react";

const impactStats = [
  { value: "50K+", label: "Trees Planted", icon: Sparkles },
  { value: "৳2.4M", label: "Relief Mobilized", icon: HeartHandshake },
  { value: "12,000+", label: "Youth Mobilized", icon: ShieldCheck },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[var(--color-bg-base)] text-[var(--color-text-main)] px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Background Animated Organic Blobs */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Floating Top Right Lime Accent Cloud */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-12 -right-12 sm:top-10 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl"
        />

        {/* Floating Bottom Left Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, -25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-16 -left-16 sm:bottom-10 sm:left-10 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-3xl"
        />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center my-auto pt-8"
      >
        {/* Subtitle Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary)]/40 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)]">
            Empowering Youth for Climate Action
          </span>
        </motion.div>

        {/* Kinetic Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-text-main)]">
            Youth Are
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-accent)] mt-2">
            Our Future
          </h1>
        </motion.div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed font-normal"
        >
          Univo mobilizes the next generation of climate leaders across frontline communities. 
          From rapid disaster response to grassroots reforestation, we engineer real collective impact.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-[var(--color-accent-hover)] shadow-2xl hover:shadow-[0_0_30px_rgba(195,255,0,0.4)]"
          >
            Support Campaigns
            <ArrowUpRight size={20} />
          </Link>

          <Link
            href="/initiatives"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-primary-light)] bg-transparent text-[var(--color-text-main)] font-semibold text-base uppercase tracking-wider transition-all duration-300 hover:bg-[var(--color-primary-light)]/20 hover:border-[var(--color-accent)]"
          >
            Explore Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Live Impact Counters */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-12"
      >
        {impactStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/50 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/80 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)]">
                <Icon size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-main)]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 text-[var(--color-text-muted)] opacity-60"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
        <ChevronDown size={18} className="text-[var(--color-accent)]" />
      </motion.div>
    </section>
  );
}