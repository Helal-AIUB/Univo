import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { initiativesData } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initiativesData.map((initiative) => ({
    slug: initiative.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const initiative = initiativesData.find((item) => item.slug === slug);
  if (!initiative) return { title: "Initiative Not Found" };

  return {
    title: initiative.title,
    description: initiative.summary,
  };
}

export default async function InitiativeDetailPage({ params }: Props) {
  const { slug } = await params;
  const initiative = initiativesData.find((item) => item.slug === slug);

  if (!initiative) {
    notFound();
  }

  const hasFunding = initiative.raised && initiative.target;
  const progress = hasFunding ? Math.min(100, Math.round((initiative.raised! / initiative.target!) * 100)) : 0;

  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Back button & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/initiatives"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
              {initiative.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-xs font-black uppercase tracking-wider">
              {initiative.status}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <MapPin size={14} className="text-[var(--color-accent)]" />
              <span>{initiative.location}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-heading)] max-w-4xl">
            {initiative.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            {initiative.summary}
          </p>
        </div>
      </section>

      {/* Content & Case Study */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story & Response */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="relative h-80 sm:h-[28rem] rounded-3xl overflow-hidden border border-[var(--color-primary-light)]/40 shadow-2xl">
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 block">
                The Ground Reality
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                The Ecological Challenge
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                {initiative.challenge}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-accent)]/30 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 block">
                Univo Counterforce
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Our Frontline Response
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">
                {initiative.solution}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {initiative.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Metrics & Take Action */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Impact Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-primary)]/25 border border-[var(--color-primary-light)]/40 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4 block">
                Logged Field Impact
              </span>
              <div className="flex flex-col gap-4">
                {initiative.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-2xl bg-[#0b0514]/70 border border-[var(--color-primary-light)]/20">
                    <span className="text-2xl font-black text-white block">
                      {m.value}
                    </span>
                    <span className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding Progress (if active) */}
            {hasFunding && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-white mb-3 block">
                  Transparency Mobilization
                </span>
                <div className="flex justify-between items-center text-xs font-bold uppercase mb-2">
                  <span className="text-[var(--color-text-muted)]">Verified Fund Allocation</span>
                  <span className="text-[var(--color-accent)]">{progress}%</span>
                </div>
                <div className="h-2 w-full bg-[var(--color-primary)]/40 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-[var(--color-accent)] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-[var(--color-text-muted)] mb-6">
                  <span>Raised: ৳{initiative.raised?.toLocaleString()}</span>
                  <span>Target: ৳{initiative.target?.toLocaleString()}</span>
                </div>

                <Link
                  href="/get-involved"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black uppercase text-xs tracking-wider hover:bg-[var(--color-accent-hover)] transition-all shadow-[0_0_15px_rgba(195,255,0,0.2)]"
                >
                  <span>Support This Initiative</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            )}

            <div className="p-6 rounded-3xl bg-[#0b0514] border border-[var(--color-primary-light)]/30 text-xs text-[var(--color-text-muted)] flex items-start gap-3">
              <ShieldCheck className="text-[var(--color-accent)] w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">Audited Field Reporting</span>
                Direct community oversight guarantees every fund and resource directly serves the targeted frontline.
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

