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

// Premium, rapid digital ticker sound (Matching the audio reference)
const playKeystrokeSound = (audioCtx: AudioContext | null) => {
  if (!audioCtx || audioCtx.state === "suspended") return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Triangle wave for a crisp, fast digital tick
    osc.type = "triangle"; 
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime); // High pitch tick
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.015); // Extremely fast decay

    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime); // Gentle volume
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.015);
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

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

  // Enable Sound Context
  const toggleSound = () => {
    if (!audioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const newCtx = new AudioContextClass();
      setAudioContext(newCtx);
    }
    setSoundEnabled(!soundEnabled);
  };

  // Ultra-Smooth, Fast Typewriter Logic
  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    
    // Very fast, rhythmic typing speed to match the rapid sound effect
    let typingSpeed = isDeleting ? 30 : 60; 

    if (!isDeleting && displayedText === currentWord) {
      // Pause when word is fully typed
      typingSpeed = 2500;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && displayedText === "") {
      // Move to next word when fully deleted
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      typingSpeed = 400; // Small pause before typing new word
      return;
    }

    const timeout = setTimeout(() => {
      if (soundEnabled && audioContext) {
        // Play rapid tick sound on every letter change (type or delete)
        playKeystrokeSound(audioContext);
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
  }, [displayedText, isDeleting, wordIndex, soundEnabled, audioContext]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[var(--color-bg-base)] text-[var(--color-text-main)] px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12"
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
          className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 md:top-10 md:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-[var(--color-accent)] opacity-20 blur-[60px] sm:blur-[100px]"
        />

        {/* Blob 2 - Reacts to Mouse */}
        <motion.div
          style={{ x: useTransform(smoothMouseX, [-1, 1], [-50, 50]), y: useTransform(smoothMouseY, [-1, 1], [-50, 50]) }}
          animate={{ scale: [1, 1.25, 1], rotate: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 md:bottom-10 md:left-10 w-56 sm:w-80 md:w-[32rem] h-56 sm:h-80 md:h-[32rem] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-[80px] sm:blur-[120px]"
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
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary)]/50 backdrop-blur-md shadow-lg text-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--color-accent)] animate-ping shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase text-[var(--color-accent)] whitespace-nowrap">
              Empowering Youth for Climate Action
            </span>
          </div>
          
          <button 
            onClick={toggleSound}
            className={`p-2 sm:p-2.5 rounded-full border backdrop-blur-md transition-all ${soundEnabled ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'border-[var(--color-primary-light)] bg-[var(--color-primary)]/50 text-[var(--color-text-muted)] hover:text-white'}`}
            title={soundEnabled ? "Mute Typing Sound" : "Enable Typing Sound"}
          >
            {soundEnabled ? <Volume2 size={14} className="sm:w-4 sm:h-4" /> : <VolumeX size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </motion.div>

        {/* Kinetic Bold Headline with Premium Typewriter */}
        <div className="flex flex-col items-center w-full px-2 sm:px-0">
          <div className="flex gap-2 sm:gap-3 md:gap-5 overflow-hidden pb-1 sm:pb-2">
            {["YOUTH", "ARE"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-text-main)]"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="relative w-full h-[45px] sm:h-[70px] md:h-[90px] lg:h-[140px] flex items-start justify-center overflow-visible mt-1 sm:mt-2">
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
                className="absolute text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] text-[var(--color-accent)] drop-shadow-[0_0_20px_rgba(195,255,0,0.3)] whitespace-nowrap"
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
          className="mt-4 sm:mt-6 md:mt-8 max-w-[95%] sm:max-w-2xl text-xs sm:text-sm md:text-lg text-[var(--color-text-muted)] leading-relaxed font-medium px-2"
        >
          Univo mobilizes the next generation of climate leaders across frontline communities. 
          From rapid disaster response to grassroots reforestation, we engineer real collective impact.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <Link
            href="/donate"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white shadow-[0_0_20px_rgba(195,255,0,0.2)] hover:shadow-[0_0_35px_rgba(195,255,0,0.6)]"
          >
            Support Campaigns
            <ArrowUpRight size={18} className="sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
          </Link>

          <Link
            href="/initiatives"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[var(--color-primary-light)] bg-transparent text-[var(--color-text-main)] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 hover:bg-[var(--color-primary-light)]/20 hover:border-[var(--color-accent)]"
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
        className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-12 sm:pt-16 px-4"
      >
        {impactStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
              className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[var(--color-primary)]/40 border border-[var(--color-primary-light)] backdrop-blur-md transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-[var(--color-primary)]/60 hover:shadow-[0_10px_30px_rgba(195,255,0,0.1)]"
            >
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[var(--color-bg-base)] text-[var(--color-accent)] border border-[var(--color-primary-light)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[var(--color-text-main)] group-hover:text-[var(--color-accent)] transition-colors">
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
        className="relative z-10 hidden sm:flex flex-col items-center justify-center pt-8 sm:pt-10 text-[var(--color-text-muted)] opacity-70 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px] text-[var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}