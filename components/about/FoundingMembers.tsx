"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, UserCheck, ArrowUpRight } from "lucide-react";
import { verifiedLeadership } from "@/lib/data";

export default function FoundingMembers() {
  const [selectedMember, setSelectedMember] = useState(verifiedLeadership[0]);

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#0b0514] text-white px-4 sm:px-6 lg:px-8 border-t border-[var(--color-primary-light)]/20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[var(--color-primary)]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-4">
            <UserCheck size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Authentic Movement Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 font-[family-name:var(--font-heading)]">
            The Leadership <br />
            <span className="text-[var(--color-accent)]">Vanguard</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Univo is guided by verified grassroots organizers, scientific advisors, and student trustees
            committed to transparent environmental stewardship and legal land defense.
          </p>
        </div>

        {/* Constellation & Interactive Leadership Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Members Selector Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {verifiedLeadership.map((member) => {
              const isSelected = selectedMember.name === member.name;

              return (
                <button
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className={`p-4 rounded-3xl border text-left flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? "bg-[var(--color-primary)]/50 border-[var(--color-accent)] shadow-[0_0_25px_rgba(195,255,0,0.2)] scale-[1.02]"
                      : "bg-[var(--color-primary)]/15 border-[var(--color-primary-light)]/30 hover:border-white/40 hover:bg-[var(--color-primary)]/25"
                  }`}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-4 border border-[var(--color-primary-light)]/40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block line-clamp-1 group-hover:text-[var(--color-accent)] transition-colors">
                      {member.name}
                    </span>
                    <span className="text-[11px] text-[var(--color-accent)] font-semibold uppercase tracking-wider block line-clamp-1 mt-0.5">
                      {member.title}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] block line-clamp-1 mt-1">
                      {member.organization}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Member Spotlight Profile */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden mb-6 border-2 border-[var(--color-accent)] shadow-lg">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                    priority
                  />
                </div>

                <span className="px-3.5 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  Verified Leadership
                </span>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-1 font-[family-name:var(--font-heading)]">
                  {selectedMember.name}
                </h3>

                <p className="text-sm font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  {selectedMember.title}
                </p>

                <p className="text-xs text-[var(--color-text-muted)] mb-6">
                  {selectedMember.organization}
                </p>

                <div className="p-4 rounded-2xl bg-[#0b0514]/70 border border-[var(--color-primary-light)]/30 mb-6">
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed italic">
                    &ldquo;{selectedMember.bio}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>Officially Verified Board Member</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
