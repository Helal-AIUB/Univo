"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, ArrowRight, Sprout, Leaf, Globe2 } from "lucide-react";

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section 
      id="mission"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-[#0e071a] text-white overflow-hidden border-b border-[var(--color-primary-light)]/20"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 left-[-10%] w-[32rem] h-[32rem] rounded-full bg-[var(--color-primary)]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[28rem] h-[28rem] rounded-full bg-[var(--color-accent)]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Our Ground Philosophy
          </span>
        </div>

        {/* Grid: Narrative vs Masked Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-8 font-[family-name:var(--font-heading)]">
              We empower youth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[var(--color-accent)]">
                to become resilient
              </span> <br />
              frontline climate leaders.
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              Climate vulnerability is not an abstract future date; it is an immediate crisis of shrinking arable land,
              creeping saline waters, and displaced river communities. Univo rejects passive hand-wringing.
              We equip our generation with the legal acumen, ecological tools, and collective will to safeguard the soil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="p-5 rounded-2xl bg-[var(--color-primary)]/25 border border-[var(--color-primary-light)]/40 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-2">
                  <Sprout size={18} />
                  <span>Soil Regeneration</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                  Biological remediation and compost networks preventing delta salinity from choking family agriculture.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--color-primary)]/25 border border-[var(--color-primary-light)]/40 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-[var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-2">
                  <ShieldCheck size={18} />
                  <span>Land Rights Advocacy</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                  Youth legal workshops and public documentation exposing unlawful wetland and riverbank encroachment.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold uppercase tracking-wider text-sm hover:bg-[var(--color-accent)] hover:text-[#0b0514] transition-all duration-300 group"
            >
              <span>Explore The Univo Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column: Editorial Multi-Image Composition */}
          <motion.div
            style={{ y: yOffset }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative Border & Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)]/30 rounded-3xl blur-2xl opacity-40 -z-10" />

              {/* 4-Image Bento Clover Composition using existing authentic media */}
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3 p-2 bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 rounded-3xl backdrop-blur-md">
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/cart/mission.jpg"
                    alt="Youth leaders in field work"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514]/70 to-transparent" />
                </div>

                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/cart/mission2.jpg"
                    alt="Community ecological defense"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514]/70 to-transparent" />
                </div>

                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/cart/mission3.jpg"
                    alt="Delta frontline mapping"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514]/70 to-transparent" />
                </div>

                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/cart/mission4.jpg"
                    alt="Youth volunteer deployment"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514]/70 to-transparent" />
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute -bottom-5 -left-5 p-4 rounded-2xl bg-[#0b0514] border border-[var(--color-accent)]/60 text-white shadow-2xl flex items-center gap-3">
                <Globe2 className="text-[var(--color-accent)] w-7 h-7 shrink-0" />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider block text-white">
                    Zero Compromise
                  </span>
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    Audited Grassroots Action
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
