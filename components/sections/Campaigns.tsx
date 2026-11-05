"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin, Tag } from "lucide-react";
import { initiativesData } from "@/lib/data";

export default function Campaigns() {
  return (
    <section className="relative w-full bg-[#0b0514] text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[var(--color-primary-light)]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-[-10%] w-[36rem] h-[36rem] rounded-full bg-[var(--color-primary)]/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6 border-b border-[var(--color-primary-light)]/20 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Active Ground Deployments
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-heading)]">
              Frontline <span className="text-[var(--color-accent)]">Missions</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl mt-3">
              Direct intervention where environmental vulnerability meets marginalized community livelihoods.
            </p>
          </div>
          
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-light)]/60 text-white font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shrink-0"
          >
            <span>View All Initiatives</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Dynamic Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {initiativesData.slice(0, 2).map((item, idx) => {
            const hasFunding = item.raised && item.target;
            const progress = hasFunding ? Math.min(100, Math.round((item.raised! / item.target!) * 100)) : 0;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30 hover:border-[var(--color-accent)] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-[0_15px_40px_rgba(195,255,0,0.12)] backdrop-blur-md"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e071a] via-[#0e071a]/30 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      <span className="px-3.5 py-1 rounded-full bg-[#0b0514]/80 backdrop-blur-md border border-[var(--color-primary-light)]/40 text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-[11px] font-black uppercase tracking-wider">
                        {item.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 text-xs text-white/90 bg-[#0b0514]/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      <MapPin size={13} className="text-[var(--color-accent)]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {item.summary}
                    </p>

                    {/* Progress Bar (if targeted) */}
                    {hasFunding && (
                      <div className="mb-6 p-4 rounded-2xl bg-[#0b0514]/60 border border-[var(--color-primary-light)]/20">
                        <div className="flex justify-between items-center text-xs font-bold uppercase mb-2">
                          <span className="text-[var(--color-text-muted)]">Verified Fund Mobilization</span>
                          <span className="text-[var(--color-accent)]">{progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-[var(--color-primary)]/40 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-1000 shadow-[0_0_10px_var(--color-accent)]" 
                            style={{ width: `${progress}%` }} 
                          />
                        </div>
                        <div className="flex justify-between items-center text-xs mt-2 text-[var(--color-text-muted)]">
                          <span>Raised: ৳{item.raised?.toLocaleString()}</span>
                          <span>Target: ৳{item.target?.toLocaleString()}</span>
                        </div>
                      </div>
                    )}

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 border-t border-[var(--color-primary-light)]/20 pt-4">
                      {item.metrics.map((m) => (
                        <div key={m.label} className="text-center sm:text-left">
                          <span className="text-sm sm:text-base font-black text-white block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 pt-2">
                  <Link
                    href={`/initiatives/${item.slug}`}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 text-white font-bold uppercase text-xs tracking-wider group-hover:bg-[var(--color-accent)] group-hover:text-[#0b0514] group-hover:border-[var(--color-accent)] transition-all duration-300"
                  >
                    <span>Inspect Case Study & Field Data</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
