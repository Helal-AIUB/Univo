"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, UserCheck } from "lucide-react";
import { verifiedLeadership } from "@/lib/data";

export default function FoundingMembers() {
  const [selectedMember, setSelectedMember] = useState(verifiedLeadership[0]);

  return (
    <section className="py-14 sm:py-20 bg-[var(--color-bg-base)] text-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
          <div>
            <span className="pro-badge mb-2">
              Authentic Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Leadership Vanguard
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mt-1">
              Guided by verified grassroots organizers, scientific researchers, and student trustees.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Member Selection Buttons Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {verifiedLeadership.map((member) => {
              const isSelected = selectedMember.name === member.name;

              return (
                <button
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all relative ${
                    isSelected
                      ? "bg-[var(--color-bg-card)] border-[var(--color-accent)] shadow-sm"
                      : "bg-[var(--color-bg-card)]/50 border-[var(--color-border)] hover:border-white/30"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden mb-3 border border-[var(--color-border)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-white block line-clamp-1">
                      {member.name}
                    </span>
                    <span className="text-[10px] text-[var(--color-accent)] font-medium block line-clamp-1 mt-0.5">
                      {member.title}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Member Profile Card */}
          <div className="lg:col-span-5">
            <div className="pro-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[var(--color-accent)]/50 shrink-0">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    {selectedMember.title}
                  </p>
                  <p className="text-[11px] text-[var(--color-text-subtle)]">
                    {selectedMember.organization}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] mb-4">
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed italic">
                  &ldquo;{selectedMember.bio}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)]">
                <ShieldCheck size={14} />
                <span>Verified Advisory & Executive Council</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
