"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Sprout, CheckCircle2 } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-[#0e071a] text-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clear, balanced narrative */}
          <div className="lg:col-span-7">
            <span className="pro-badge mb-3">
              Our Mission & Vanguard
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              Empowering youth to become resilient, certified climate leaders on the frontlines.
            </h2>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              Climate vulnerability in Bangladesh is not an abstract theory — it is an urgent daily reality of shrinking
              arable soil, rising coastal salinity, and seasonal riverbank erosion. Univo mobilizes student networks
              with scientific knowledge, legal awareness, and emergency logistical readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="pro-card p-4">
                <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1.5">
                  <Sprout size={16} className="text-[var(--color-accent)]" />
                  <span>Soil Regeneration</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Biological remediation and compost networks preventing delta salinity from destroying agricultural fertility.
                </p>
              </div>

              <div className="pro-card p-4">
                <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1.5">
                  <ShieldCheck size={16} className="text-[var(--color-accent)]" />
                  <span>Land Rights Defense</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Student-led field documentation and legal workshops protecting vulnerable wetland habitats.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors"
            >
              <span>Read the full Univo genesis & manifesto</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: Clean, Compact 4-Image Grid with Pro Card framing */}
          <div className="lg:col-span-5">
            <div className="pro-card p-2.5">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden group">
                  <Image
                    src="/cart/mission.jpg"
                    alt="Youth volunteers in field deployment"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs">
                    Field Action
                  </span>
                </div>

                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden group">
                  <Image
                    src="/cart/mission2.jpg"
                    alt="Ecological defense activities"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs">
                    Delta Protection
                  </span>
                </div>

                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden group">
                  <Image
                    src="/cart/mission3.jpg"
                    alt="Coastal mapping"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs">
                    Community Mapping
                  </span>
                </div>

                <div className="relative h-36 sm:h-44 rounded-lg overflow-hidden group">
                  <Image
                    src="/cart/mission4.jpg"
                    alt="Youth workshop"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs">
                    Youth Collective
                  </span>
                </div>
              </div>

              <div className="p-3 mt-2 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-muted)]">Verified Ground Chapters</span>
                <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> 24 Districts Active
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
