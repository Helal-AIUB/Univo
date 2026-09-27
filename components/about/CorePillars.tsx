"use client";

import { motion } from "framer-motion";
import { Mountain, Users, Flame, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Soil Rights & Land Health",
    subtitle: "Regeneration",
    description:
      "Combating coastal salinity and nutrient depletion through youth-led biological remediation, organic compost distribution, and sustainable agricultural advocacy.",
    icon: Mountain,
  },
  {
    id: "02",
    title: "Youth Leadership Vanguard",
    subtitle: "Mobilization",
    description:
      "Transforming passionate students into certified environmental ambassadors capable of organizing regional climate strikes, policy workshops, and grassroots campaigns.",
    icon: Users,
  },
  {
    id: "03",
    title: "Rapid Disaster Intervention",
    subtitle: "Frontline Action",
    description:
      "Mobilizing logistical response groups during emergency flood events and climate shocks to safeguard vulnerable families and plant protective mangrove buffers.",
    icon: Flame,
  },
];

export default function CorePillars() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[var(--color-bg-base)] text-[var(--color-text-main)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-2 block">
            Our Blueprint
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            The Three <span className="text-[var(--color-accent)]">Pillars</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base">
            Every dollar raised and volunteer dispatched is routed through our three key operational disciplines.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)] border border-[var(--color-primary-light)] hover:border-[var(--color-accent)] transition-all duration-500 shadow-xl hover:shadow-[0_15px_35px_rgba(195,255,0,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-[var(--color-accent)] opacity-80">
                      {pillar.id}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-[var(--color-bg-base)] text-[var(--color-accent)] border border-[var(--color-primary-light)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                      <Icon size={24} />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-primary-light)]/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider group-hover:text-[var(--color-accent)] transition-colors">
                  <span>Explore Initiative</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}