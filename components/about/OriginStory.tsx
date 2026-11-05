"use client";

import { Droplets, Leaf, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "The Crisis",
    title: "Vulnerable Frontlines & Soil Degradation",
    description:
      "Rapid industrialization, excessive chemical salinity in delta rivers, and climate-induced flooding have critically damaged fertile topsoil across coastal Bangladesh.",
    icon: Droplets,
  },
  {
    year: "The Spark",
    title: "A Youth-Driven Counterforce",
    description:
      "Founded by students and ecological researchers, Univo was established to replace passive climate concern with direct, structured, and auditable community intervention.",
    icon: Leaf,
  },
  {
    year: "The Mission",
    title: "Soil Rights & Generational Defense",
    description:
      "We believe land and soil rights are human rights. We empower youth with field equipment, ecological training, and rapid response networks.",
    icon: ShieldCheck,
  },
];

export default function OriginStory() {
  return (
    <section className="py-14 sm:py-20 bg-[var(--color-bg-base)] text-[var(--color-text-main)] border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          <div className="lg:col-span-5">
            <span className="pro-badge mb-2">Why Univo Exists</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              From Crisis to <span className="text-[var(--color-accent)]">Collective Action</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              The earth beneath our feet is our ultimate defense against global climate collapse. 
              When the soil deteriorates, life loses its anchor. Here is the trajectory of our movement.
            </p>

            <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
              <span className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Core Mandate
              </span>
              <p className="text-xs text-white">
                Zero compromise on environmental defense. Direct frontline presence in vulnerable districts.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {milestones.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.year}
                  className="pro-card p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-accent-dim)] border border-[var(--color-accent)]/20">
                      {item.year}
                    </span>
                    <Icon size={16} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}