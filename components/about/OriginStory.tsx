"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Target, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "The Crisis",
    title: "Vulnerable Frontlines & Soil Degradation",
    description:
      "Rapid industrialization, excessive chemical salinity in delta rivers, and climate-induced flooding have critically damaged fertile soil top layers across Bangladesh, endangering both biodiversity and food security.",
    icon: Droplets,
  },
  {
    year: "The Spark",
    title: "A Youth-Driven Counterforce",
    description:
      "Founded by passionate students and climate researchers, Univo was established to replace passive climate concern with direct, structured, and auditable community intervention.",
    icon: Leaf,
  },
  {
    year: "The Mission",
    title: "Soil Rights & Generational Defense",
    description:
      "We believe land and soil rights are human rights. We empower youth with field equipment, ecological training, and rapid response networks to protect our collective ecosystem.",
    icon: ShieldCheck,
  },
];

export default function OriginStory() {
  return (
    <section className="relative w-full py-16 md:py-28 bg-[var(--color-bg-base)] text-[var(--color-text-main)] border-t border-[var(--color-primary-light)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sticky Left Column */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32 flex flex-col items-start">
              <span className="text-xs md:text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-3">
                Why Univo Exists
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
                From Crisis to <br className="hidden sm:block" />
                <span className="text-[var(--color-accent)]">Collective Action</span>
              </h2>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed mb-6">
                The earth beneath our feet is our ultimate defense against global climate collapse. 
                When the soil deteriorates, life loses its anchor. Here is the trajectory of our movement.
              </p>
              <div className="p-5 rounded-2xl bg-[var(--color-primary)]/40 border border-[var(--color-primary-light)] backdrop-blur-md">
                <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  Core Mandate
                </p>
                <p className="text-sm text-[var(--color-text-main)] font-semibold">
                  Zero compromise on environmental defense. Direct frontline presence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Steps */}
          <div className="lg:w-7/12 flex flex-col gap-8 md:gap-12">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-[var(--color-primary)] border border-[var(--color-primary-light)] hover:border-[var(--color-accent)] transition-all duration-500 shadow-xl hover:shadow-[0_10px_30px_rgba(195,255,0,0.1)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider border border-[var(--color-accent)]/30">
                      {item.year}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[var(--color-bg-base)] text-[var(--color-accent)]">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}