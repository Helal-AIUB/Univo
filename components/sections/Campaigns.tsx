"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin, Tag } from "lucide-react";
import { initiativesData } from "@/lib/data";

export default function Campaigns() {
  return (
    <section className="py-16 md:py-24 bg-[#0e071a] text-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
          <div>
            <span className="pro-badge mb-2">
              Active Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Frontline environmental initiatives.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mt-1">
              Direct community intervention tackling delta vulnerability, soil degradation, and flash disasters.
            </p>
          </div>

          <Link
            href="/initiatives"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors shrink-0"
          >
            <span>View All Initiatives</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiativesData.slice(0, 2).map((item) => {
            const hasFunding = item.raised && item.target;
            const progress = hasFunding ? Math.min(100, Math.round((item.raised! / item.target!) * 100)) : 0;

            return (
              <article
                key={item.id}
                className="pro-card-interactive flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e071a] via-[#0e071a]/40 to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-xs text-[var(--color-accent)] border border-white/10">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-accent)] text-[#0b0514]">
                        {item.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-[11px] text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      <MapPin size={11} className="text-[var(--color-accent)]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4 line-clamp-2">
                      {item.summary}
                    </p>

                    {/* Progress Bar */}
                    {hasFunding && (
                      <div className="mb-4 p-3 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)]">
                        <div className="flex justify-between items-center text-[11px] font-semibold mb-1.5">
                          <span className="text-[var(--color-text-muted)]">Verified Fund Mobilization</span>
                          <span className="text-[var(--color-accent)]">{progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[var(--color-accent)] rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center text-[10px] mt-1.5 text-[var(--color-text-muted)]">
                          <span>Raised: ৳{item.raised?.toLocaleString()}</span>
                          <span>Target: ৳{item.target?.toLocaleString()}</span>
                        </div>
                      </div>
                    )}

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 border-t border-[var(--color-border)] pt-3">
                      {item.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="text-xs sm:text-sm font-bold text-white block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-[var(--color-text-subtle)] uppercase block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    href={`/initiatives/${item.slug}`}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] text-white text-xs font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>Read Field Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
