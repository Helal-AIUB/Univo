"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sprout, Droplet, ArrowRight } from "lucide-react";

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll track korar jonno hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax animations for floating icons (Scroll korle upore uthbe)
  const yLeaf1 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const yLeaf2 = useTransform(scrollYProgress, [0, 1], [250, -150]);
  const ySprout = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const yDrop = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#e0f7fa]" // Screenshot er moto light cyan background
    >
      <motion.div style={{ y: yLeaf1 }} className="absolute left-[10%] top-[20%] text-[var(--color-primary)]/20 z-0">
        <Leaf size={64} className="rotate-45" />
      </motion.div>
      <motion.div style={{ y: ySprout }} className="absolute left-[45%] bottom-[10%] text-[var(--color-accent)]/40 z-0">
        <Sprout size={80} className="-rotate-12" />
      </motion.div>
      <motion.div style={{ y: yLeaf2 }} className="absolute right-[15%] top-[10%] text-[var(--color-primary)]/15 z-0">
        <Leaf size={48} className="-rotate-90" />
      </motion.div>
      <motion.div style={{ y: yDrop }} className="absolute right-[30%] bottom-[20%] text-blue-400/30 z-0">
        <Droplet size={56} className="rotate-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--color-primary)] leading-[1.1] mb-10">
            We empower our <br className="hidden md:block"/> rangatahi to <br className="hidden md:block"/> become resilient <br className="hidden md:block"/> climate leaders.
          </h2>
          
          <Link 
            href="/about"
            className="group flex items-center gap-2 px-6 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-medium text-lg uppercase tracking-wide hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
          >
            About Us 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Side: Masked Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          {/* Screenshot er moto shape er jonno custom border radius / clip path */}
          <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-0 bg-[var(--color-primary)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite] opacity-10 blur-xl"></div>
            
            {/* Custom Clover-like CSS Grid Shape */}
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2 p-2">
              <div className="relative w-full h-full rounded-tl-full rounded-tr-full rounded-bl-full overflow-hidden">
                <Image src="/cart/mission.jpg" alt="Youth" fill className="object-cover object-top-left" />
              </div>
              <div className="relative w-full h-full rounded-tr-full rounded-tl-full rounded-br-full overflow-hidden">
                <Image src="/cart/mission2.jpg" alt="Youth" fill className="object-cover object-top-right" />
              </div>
              <div className="relative w-full h-full rounded-bl-full rounded-tl-full rounded-br-full overflow-hidden">
                <Image src="/cart/mission3.jpg" alt="Youth" fill className="object-cover object-bottom-left" />
              </div>
              <div className="relative w-full h-full rounded-br-full rounded-tr-full rounded-bl-full overflow-hidden">
                <Image src="/cart/mission4.jpg" alt="Youth" fill className="object-cover object-bottom-right" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}