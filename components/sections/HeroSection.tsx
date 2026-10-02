"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles, ShieldCheck, HeartHandshake, Volume2, VolumeX } from "lucide-react";

const impactStats = [
  { value: "50K+", label: "Trees Planted", icon: Sparkles },
  { value: "৳2.4M", label: "Relief Mobilized", icon: HeartHandshake },
  { value: "12,000+", label: "Youth Mobilized", icon: ShieldCheck },
];

const dynamicWords = [
  "OUR FUTURE",
  "THE FRONTLINE",
  "CLIMATE LEADERS",
  "THE CATALYSTS",
  "UNSTOPPABLE"
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const typingSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize the real audio file on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/typing.mp3");
      audio.volume = 0.6; // Adjust volume as needed
      typingSoundRef.current = audio;
    }
  }, []);

  // --- Scroll Parallax ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // --- Mouse Interactive Parallax ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  // --- Typewriter State ---
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Ultra-Smooth, Fast Typewriter Logic with Real Audio
  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    
    // Very fast, rhythmic typing speed
    let typingSpeed = isDeleting ? 30 : 60; 

    if (!isDeleting && displayedText === currentWord) {
      typingSpeed = 2500;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      typingSpeed = 400; 
      return;
    }

    const timeout = setTimeout(() => {
      // Play the real .mp3 file on every character change
      if (soundEnabled && typingSoundRef.current) {
        typingSoundRef.current.currentTime = 0; // Reset audio to start for rapid firing
        typingSoundRef.current.play().catch(() => {
          // Catch DOMException if browser blocks auto-play before user interaction
        });
      }
      
      setDisplayedText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          const nextChar = currentWord.charAt(prev.length);
          return prev + nextChar;
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, soundEnabled]);


  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[var(--color-bg-base)] text-[var(--color-text-main)] px-4 sm:px-6 lg:px-8 pt-24 pb-12"
    >
      {/* Background Interactive Organic Blobs */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

        {/* Blob 1 - Reacts to Mouse */}
        <motion.div
          style={{ x: useTransform(smoothMouseX, [-1, 1], [50, -50]), y: useTransform(smoothMouseY, [-1, 1], [50, -50]) }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-12 sm:top-10 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[var(--color-accent)] opacity-20 blur-[100px]"
        />

        {/* Blob 2 - Reacts to Mouse */}
        <motion.div
          style={{ x: useTransform(smoothMouseX, [-1, 1], [-50, 50]), y: useTransform(smoothMouseY, [-1, 1], [-50, 50]) }}
          animate={{ scale: [1, 1.25, 1], rotate: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -left-16 sm:bottom-10 sm:left-10 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-[120px]"
        />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center my-auto"
      >
        {/* Subtitle Pill Badge with Sound Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary)]/50 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--color-accent)]">
              Empowering Youth for Climate Action
            </span>
          </div>
          
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-full border backdrop-blur-md transition-all ${soundEnabled ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'border-[var(--color-primary-light)] bg-[var(--color-primary)]/50 text-[var(--color-text-muted)] hover:text-white'}`}
            title={soundEnabled ? "Mute Typing Sound" : "Enable Typing Sound"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </motion.div>

        {/* Kinetic Bold Headline with Premium Typewriter */}
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-3 sm:gap-5 overflow-hidden pb-2">
            {["YOUTH", "ARE"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-text-main)]"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="relative w-full h-[60px] sm:h-[80px] md:h-[110px] lg:h-[140px] flex items-start justify-center overflow-visible mt-1 sm:mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -15 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-accent)] drop-shadow-[0_0_20px_rgba(195,255,0,0.3)] whitespace-nowrap"
              >
                {displayedText}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-medium px-4"
        >
          Univo mobilizes the next generation of climate leaders across frontline communities. 
          From rapid disaster response to grassroots reforestation, we engineer real collective impact.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <Link
            href="/donate"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white shadow-[0_0_20px_rgba(195,255,0,0.2)] hover:shadow-[0_0_35px_rgba(195,255,0,0.6)]"
          >
            Support Campaigns
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>

          <Link
            href="/initiatives"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--color-primary-light)] bg-transparent text-[var(--color-text-main)] font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:bg-[var(--color-primary-light)]/20 hover:border-[var(--color-accent)]"
          >
            Explore Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Live Impact Counters */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-16 px-4"
      >
        {impactStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-primary)]/40 border border-[var(--color-primary-light)] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:bg-[var(--color-primary)]/60 hover:shadow-[0_10px_30px_rgba(195,255,0,0.1)]"
            >
              <div className="p-3.5 rounded-xl bg-[var(--color-bg-base)] text-[var(--color-accent)] border border-[var(--color-primary-light)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                <Icon size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--color-text-main)] group-hover:text-[var(--color-accent)] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center pt-10 text-[var(--color-text-muted)] opacity-70 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="text-[var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}