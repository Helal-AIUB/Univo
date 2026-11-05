import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Tag, ShieldCheck, Sprout } from "lucide-react";
import { initiativesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Initiatives & Field Operations",
  description:
    "Explore Univo's active frontlines: from emergency flood relief in Sylhet to mangrove coastal defenses and soil microbiology rehabilitation.",
};

export default function InitiativesPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--color-primary)]/20 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
            <Sprout size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Frontline Deployments
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-[family-name:var(--font-heading)]">
            Turning Concern <br />
            <span className="text-[var(--color-accent)]">Into Collective Action.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Every initiative is co-created with frontline communities and executed by our youth vanguard.
            Review our active campaigns, ecological parameters, and verifiable outcomes.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {initiativesData.map((item) => {
              const hasFunding = item.raised && item.target;
              const progress = hasFunding ? Math.min(100, Math.round((item.raised! / item.target!) * 100)) : 0;

              return (
                <article
                  key={item.id}
                  className="group relative flex flex-col justify-between bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30 hover:border-[var(--color-accent)] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-[0_15px_40px_rgba(195,255,0,0.12)] backdrop-blur-md"
                >
                  <div>
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

                    <div className="p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                        {item.summary}
                      </p>

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

                  <div className="px-6 sm:px-8 pb-6 pt-2">
                    <Link
                      href={`/initiatives/${item.slug}`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 text-white font-bold uppercase text-xs tracking-wider group-hover:bg-[var(--color-accent)] group-hover:text-[#0b0514] group-hover:border-[var(--color-accent)] transition-all duration-300"
                    >
                      <span>Read Deep-Dive Field Case Study</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

