"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MemberInfo {
  name: string;
  title: string;
  organization: string;
}

interface MemberNode {
  id: string;
  src: string;
  size: string;
  x: number;
  y: number;
  z: number;
  info: MemberInfo;
}

const Member1: MemberInfo = {
  name: "Ahmed Sayeed",
  title: "Founder & Executive Director",
  organization: "Univo Environmental Initiative",
};

const Member2: MemberInfo = {
  name: "Md. Helal Uddin",
  title: "Chairperson of Advisory Board",
  organization: "Institute of Climate & Ecology",
};

const Member3: MemberInfo = {
  name: "Amir Hamza",
  title: "Founding Trustee & Operations Lead",
  organization: "Frontline Disaster Response",
};

const Member4: MemberInfo = {
  name: "Golam Rabbani Musanna",
  title: "Director of Youth Mobilization",
  organization: "Grassroots Climate Collective",
};

const Member5: MemberInfo = {
  name: "Hasib R. Tamim",
  title: "Head of Strategy & Impact",
  organization: "Sustainable Development Forum",
};

const memberNodes: MemberNode[] = [
  // --- Center: Founder ---
  {
    id: "img1",
    src: "/member/sayeed.png",
    size: "w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52",
    x: 50,
    y: 50,
    z: 20,
    info: Member1,
  },

  // --- Top-Left ---
  {
    id: "img2",
    src: "/member/helal.png",
    size: "w-20 h-20 sm:w-26 sm:h-26 md:w-38 md:h-38",
    x: 24,
    y: 26,
    z: 10,
    info: Member2,
  },

  // --- Top-Right ---
  {
    id: "img3",
    src: "/member/amir.png",
    size: "w-20 h-20 sm:w-26 sm:h-26 md:w-38 md:h-38",
    x: 76,
    y: 26,
    z: 10,
    info: Member3,
  },

  // --- Bottom-Left ---
  {
    id: "img4",
    src: "/member/golam.png",
    size: "w-20 h-20 sm:w-26 sm:h-26 md:w-38 md:h-38",
    x: 24,
    y: 74,
    z: 10,
    info: Member4,
  },

  // --- Bottom-Right ---
  {
    id: "img5",
    src: "/member/tamim.png",
    size: "w-20 h-20 sm:w-26 sm:h-26 md:w-38 md:h-38",
    x: 76,
    y: 74,
    z: 10,
    info: Member5,
  },
];

export default function FoundingMembers() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[var(--color-bg-base)] py-8 md:py-16 overflow-hidden relative border-t border-[var(--color-primary-light)]/30 text-[var(--color-text-main)]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] md:w-[600px] h-[320px] sm:h-[450px] md:h-[600px] bg-[var(--color-primary-light)]/15 rounded-full blur-[90px] md:blur-[130px] pointer-events-none" />

      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-10 relative z-10 px-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
            Notable <span className="text-[var(--color-accent)]">Leadership</span>
          </h2>
          <Link
            href="/about"
            className="bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full p-1.5 sm:p-2 hover:bg-[var(--color-accent-hover)] transition-transform hover:scale-110 shadow-lg"
          >
            <ArrowUpRight size={18} className="stroke-[3] md:w-5 md:h-5" />
          </Link>
        </div>
        <p className="text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base mt-2 max-w-xl">
          Meet the core leaders and pioneers steering Univo's mission forward. Click any member to view their details.
        </p>
      </div>

      {/* Floating Constellation Container */}
      <div className="relative w-full max-w-[1000px] mx-auto h-[440px] sm:h-[520px] md:h-[640px] select-none">
        {memberNodes.map((node) => {
          const isDirectlyActive = activeId === node.id;
          const isSomethingActive = activeId !== null;

          return (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                top: `${node.y}%`,
                left: `${node.x}%`,
                zIndex: isDirectlyActive ? 50 : node.z,
              }}
            >
              {/* Scale and Blur Wrapper */}
              <div
                className={`relative flex flex-col items-center transition-all duration-700 ${
                  isDirectlyActive
                    ? "scale-[1.15] sm:scale-[1.25] md:scale-[1.3]"
                    : "scale-100 hover:scale-105"
                } ${
                  isSomethingActive && !isDirectlyActive
                    ? "opacity-30 blur-[1.5px]"
                    : "opacity-100 blur-0"
                }`}
              >
                {/* Bubble Container */}
                <div className="relative">
                  <div
                    onClick={() =>
                      setActiveId(isDirectlyActive ? null : node.id)
                    }
                    className={`
                      relative rounded-full overflow-hidden cursor-pointer
                      flex items-center justify-center transition-all duration-700
                      ${node.size}
                      ${
                        isDirectlyActive
                          ? "border-2 sm:border-4 border-[var(--color-accent)] ring-2 sm:ring-4 ring-[var(--color-accent)]/30 shadow-[0_0_30px_rgba(195,255,0,0.5)]"
                          : "border sm:border-2 border-[var(--color-primary-light)]/60 shadow-lg hover:border-[var(--color-accent)]/60"
                      }
                    `}
                    style={{
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    <Image
                      src={node.src}
                      alt={node.info.name}
                      fill
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 208px"
                      className={`object-cover pointer-events-none transition-all duration-700 ${
                        isDirectlyActive ? "grayscale-0" : "grayscale"
                      }`}
                      priority={node.id === "img1"}
                    />
                  </div>

                  {/* Close (X) Button */}
                  {isDirectlyActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveId(null);
                      }}
                      className="absolute -bottom-1.5 sm:-bottom-2.5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center border sm:border-2 border-white shadow-lg hover:bg-red-500 hover:text-white transition-colors z-30"
                    >
                      <span className="text-[10px] sm:text-xs font-bold leading-none">✕</span>
                    </button>
                  )}
                </div>

                {/* Member Info Card Popup */}
                {isDirectlyActive && (
                  <div
                    className={`absolute ${
                      node.y > 55
                        ? "bottom-full mb-3 sm:mb-4"
                        : "top-full mt-3 sm:mt-4"
                    } flex flex-col items-center text-center w-[190px] sm:w-[220px] md:w-[270px] p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--color-primary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] z-50`}
                  >
                    <h4 className="text-[var(--color-text-main)] font-extrabold text-xs sm:text-sm md:text-base tracking-wide leading-tight">
                      {node.info.name}
                    </h4>
                    <p className="text-[var(--color-accent)] text-[10px] sm:text-xs md:text-sm mt-1 font-semibold leading-snug">
                      {node.info.title}
                    </p>
                    <p className="text-[var(--color-text-muted)] text-[9px] sm:text-[11px] md:text-xs mt-0.5 opacity-80">
                      {node.info.organization}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}