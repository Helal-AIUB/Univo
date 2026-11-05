"use client";

import { motion } from "framer-motion";
import { TreePine, Scale, Users, Flame, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { impactMetrics } from "@/lib/data";

export default function ImpactGrid() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#0e071a] text-white px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[var(--color-primary)]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Auditable Social Returns
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-heading)]">
            Measurable Change. <br />
            <span className="text-[var(--color-accent)]">Verified On The Ground.</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Every volunteer hour, legal brief, and seedling planted is logged transparently.
            We do not manufacture numbers — these are audited outcomes from our active field chapters.
          </p>
        </div>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Primary Large Metric */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/40 to-[#140824] border border-[var(--color-primary-light)]/40 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[var(--color-accent)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 text-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)]/20 transition-colors pointer-events-none">
              <TreePine size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                Ecosystem Shield
              </span>
              <h3 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-4 font-[family-name:var(--font-heading)]">
                50,000+
              </h3>
              <p className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Trees & Salt-Tolerant Mangroves Planted
              </p>
              <p className="text-sm text-[var(--color-text-muted)] max-w-md leading-relaxed">
                Planted along tidal erosion channels in the Sundarbans belt and northern flood riverbanks to prevent soil liquefaction.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--color-primary-light)]/30 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              <span>Verified with GPS Community Logbooks</span>
              <CheckCircle2 size={16} />
            </div>
          </motion.div>

          {/* Bento Card 2: Relief Mobilization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 flex flex-col justify-between shadow-xl group hover:border-[var(--color-accent)] transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                Direct Emergency Aid
              </span>
              <h3 className="text-5xl sm:text-6xl font-black text-[var(--color-accent)] tracking-tighter mb-4 font-[family-name:var(--font-heading)]">
                ৳2,400,000+
              </h3>
              <p className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Rapid Disaster Relief Deployed
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Emergency rations, biological water purifiers, and silt rehabilitation kits channeled directly into Sylhet and Sunamganj flood zones.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--color-primary-light)]/30 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-white transition-colors">
              <span>Zero Administrative Overhead</span>
              <Flame size={16} className="text-[var(--color-accent)]" />
            </div>
          </motion.div>

          {/* Bento Card 3: Youth Mobilized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 flex flex-col justify-between shadow-xl group hover:border-[var(--color-accent)] transition-all duration-500"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white font-[family-name:var(--font-heading)]">
                  12,000+
                </span>
                <div className="p-3 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)] text-[var(--color-accent)]">
                  <Users size={22} />
                </div>
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Youth Vanguard Mobilized
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                University and college students actively organizing across 24 regional chapters to monitor illegal soil grabbing and organize strikes.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--color-primary-light)]/30">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] hover:underline"
              >
                <span>Join a Regional Chapter</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 4: Legal & Community Defense */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b0a33] to-[#0b0514] border border-[var(--color-primary-light)]/40 flex flex-col justify-between shadow-xl group hover:border-[var(--color-accent)] transition-all duration-500"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-black text-[var(--color-accent)] font-[family-name:var(--font-heading)]">
                  34
                </span>
                <div className="p-3 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)] text-[var(--color-accent)]">
                  <Scale size={22} />
                </div>
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Communities Under Soil Defense
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Agricultural villages provided with free organic bio-testing and legal support against industrial waste dumping into natural waterways.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--color-primary-light)]/30">
              <Link
                href="/impact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[var(--color-accent)] transition-colors"
              >
                <span>Read Full Impact Transparency Report</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

