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
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <Link
          href="/initiatives"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Header */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="pro-badge">
              {initiative.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[var(--color-accent)] text-[#0b0514]">
              {initiative.status}
            </span>
            <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] ml-2">
              <MapPin size={12} className="text-[var(--color-accent)]" />
              <span>{initiative.location}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 max-w-3xl">
            {initiative.title}
          </h1>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {initiative.summary}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden border border-[var(--color-border)]">
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="pro-card p-6">
              <span className="text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                The Ecological Challenge
              </span>
              <h2 className="text-lg font-bold text-white mb-2">
                Ground Reality & Vulnerability
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {initiative.challenge}
              </p>
            </div>

            <div className="pro-card p-6 border-[var(--color-accent)]/30">
              <span className="text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Univo Counterforce
              </span>
              <h2 className="text-lg font-bold text-white mb-2">
                Field Strategy & Direct Action
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                {initiative.solution}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {initiative.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[10px] font-medium text-[var(--color-text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="pro-card p-5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                Logged Field Impact
              </span>
              <div className="space-y-3">
                {initiative.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)]">
                    <span className="text-lg font-bold text-white block">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-[var(--color-accent)] font-semibold uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {hasFunding && (
              <div className="pro-card p-5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                  Fund Mobilization
                </span>
                <div className="flex justify-between items-center text-[11px] font-semibold mb-1.5">
                  <span className="text-[var(--color-text-muted)]">Verified Allocation</span>
                  <span className="text-[var(--color-accent)]">{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--color-border)] rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-[var(--color-accent)] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-[var(--color-text-muted)] mb-4">
                  <span>Raised: ৳{initiative.raised?.toLocaleString()}</span>
                  <span>Target: ৳{initiative.target?.toLocaleString()}</span>
                </div>

                <Link
                  href="/get-involved"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[#0b0514] font-semibold text-xs hover:bg-[var(--color-accent-hover)] transition-all"
                >
                  <span>Support This Field Action</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            )}

            <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-xs text-[var(--color-text-muted)] flex items-start gap-2.5">
              <ShieldCheck className="text-[var(--color-accent)] w-5 h-5 shrink-0" />
              <span>Direct community oversight guarantees transparency in every volunteer initiative.</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
