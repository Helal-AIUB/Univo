import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sprout } from "lucide-react";
import { initiativesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Initiatives & Field Operations",
  description:
    "Explore Univo's active frontlines: from emergency flood relief in Sylhet to mangrove coastal defenses and soil microbiology rehabilitation.",
};

export default function InitiativesPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <span className="pro-badge mb-3">
            Active Deployments
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Turning Concern Into <span className="text-[var(--color-accent)]">Collective Action.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Every initiative is co-created with frontline farming and coastal communities and executed by our youth vanguard.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiativesData.map((item) => {
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
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-black/70 text-[var(--color-accent)] border border-white/10">
                          {item.category}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-accent)] text-[#0b0514]">
                          {item.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-[11px] text-white/90 bg-black/60 px-2 py-0.5 rounded">
                        <MapPin size={11} className="text-[var(--color-accent)]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h2>

                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
                        {item.summary}
                      </p>

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
                      <span>Read Deep-Dive Field Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
