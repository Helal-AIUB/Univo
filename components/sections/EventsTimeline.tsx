"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Users, Globe, Sparkles, Activity } from "lucide-react";
import Image from "next/image";

// Added 'focus' to stats to make the empty space richer on all devices
const events = [
  {
    id: 1,
    step: "01",
    title: "Global Climate Strike 2026",
    date: "Sep 20, 2026",
    location: "Dhaka University",
    image: "/events/1.jpg",
    description: "Join thousands of students to demand immediate climate action from corporate polluters.",
    stats: { attendees: "5,000+", impact: "Policy", focus: "Emissions" },
  },
  {
    id: 2,
    step: "02",
    title: "Coastal Cleanup",
    date: "Oct 05, 2026",
    location: "Khulna, BD",
    image: "/events/2.jpg",
    description: "A week-long initiative to remove plastic waste from the vulnerable mangrove ecosystem.",
    stats: { attendees: "1,200", impact: "Restoration", focus: "Ocean Life" },
  },
  {
    id: 3,
    step: "03",
    title: "Green Youth Summit",
    date: "Nov 12, 2026",
    location: "BICC, Dhaka",
    image: "/events/3.jpg",
    description: "Showcasing innovative, student-built renewable energy solutions for rural areas.",
    stats: { attendees: "300+", impact: "Energy", focus: "Innovation" },
  },
];

export default function EventsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-16 md:py-32 bg-[var(--color-bg-base)] text-[var(--color-text-main)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Upcoming <span className="text-[var(--color-accent)]">Events</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm md:text-lg max-w-2xl mx-auto px-4">
            Step onto the frontlines. See where our collective is heading next and join the movement.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Universal Center Timeline Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] md:w-1 bg-[var(--color-primary-light)]/30 -translate-x-1/2 rounded-full z-0" />
          
          {/* Glowing Animated Draw Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[2px] md:w-1 bg-[var(--color-accent)] -translate-x-1/2 rounded-full shadow-[0_0_20px_var(--color-accent)] z-10" 
          />

          <div className="flex flex-col gap-10 md:gap-32 relative z-20">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.id} className={`flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Universal Center Pulsing Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute left-1/2 w-4 h-4 md:w-8 md:h-8 bg-[var(--color-bg-base)] border-[3px] md:border-[6px] border-[var(--color-accent)] rounded-full -translate-x-1/2 z-30"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-full -z-10 blur-sm"
                    />
                  </motion.div>

                  {/* Information & Stats Panel (Now visible and optimized for Mobile & Desktop) */}
                  <div className={`w-[47%] md:w-[45%] flex flex-col justify-center relative ${isEven ? 'items-start' : 'items-end'}`}>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-col relative w-full px-2 md:px-12"
                    >
                      {/* Watermark Step Number - Scaled for both devices */}
                      <span className={`absolute top-1/2 -translate-y-1/2 text-[8rem] sm:text-[10rem] md:text-[14rem] font-black text-[var(--color-primary-light)]/15 select-none z-0 ${isEven ? 'left-2 md:left-0' : 'right-2 md:right-0'}`}>
                        {event.step}
                      </span>
                      
                      {/* Floating Info Cards Group */}
                      <div className={`flex flex-col gap-2 md:gap-6 z-10 w-full max-w-sm ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                        
                        {/* Stat 1: Target */}
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 md:gap-4 p-2 md:p-5 rounded-lg md:rounded-2xl bg-[var(--color-primary)]/70 backdrop-blur-md border border-[var(--color-primary-light)] shadow-xl"
                        >
                          <div className="p-1.5 md:p-3 bg-[var(--color-accent)]/20 rounded-full text-[var(--color-accent)]">
                            <Users size={14} className="md:w-6 md:h-6" />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Target</p>
                            <p className="text-[10px] md:text-lg font-extrabold text-[var(--color-text-main)] leading-none mt-0.5">{event.stats.attendees}</p>
                          </div>
                        </motion.div>

                        {/* Stat 2: Impact */}
                        <motion.div 
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 md:gap-4 p-2 md:p-5 rounded-lg md:rounded-2xl bg-[var(--color-primary)]/70 backdrop-blur-md border border-[var(--color-primary-light)] shadow-xl"
                        >
                          <div className="p-1.5 md:p-3 bg-[var(--color-accent)]/20 rounded-full text-[var(--color-accent)]">
                            <Globe size={14} className="md:w-6 md:h-6" />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Impact</p>
                            <p className="text-[10px] md:text-lg font-extrabold text-[var(--color-text-main)] leading-none mt-0.5">{event.stats.impact}</p>
                          </div>
                        </motion.div>

                        {/* Stat 3: Focus Area */}
                        <motion.div 
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 md:gap-4 p-2 md:p-5 rounded-lg md:rounded-2xl bg-[var(--color-primary)]/70 backdrop-blur-md border border-[var(--color-primary-light)] shadow-xl"
                        >
                          <div className="p-1.5 md:p-3 bg-[var(--color-accent)]/20 rounded-full text-[var(--color-accent)]">
                            <Activity size={14} className="md:w-6 md:h-6" />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold">Focus</p>
                            <p className="text-[10px] md:text-lg font-extrabold text-[var(--color-text-main)] leading-none mt-0.5">{event.stats.focus}</p>
                          </div>
                        </motion.div>

                      </div>
                    </motion.div>
                  </div>

                  {/* Main Event Card (Cleaned up, stats removed from inside) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="w-[47%] md:w-[45%]"
                  >
                    <div className="group bg-[var(--color-primary)] border border-[var(--color-primary-light)] hover:border-[var(--color-accent)] rounded-xl md:rounded-3xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_10px_40px_rgba(195,255,0,0.2)] flex flex-col h-full">
                      
                      <div className="relative h-28 sm:h-40 md:h-64 w-full overflow-hidden shrink-0">
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 bg-[var(--color-bg-base)]/80 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-[var(--color-primary-light)] flex items-center gap-1 md:gap-2">
                           <Sparkles size={10} className="text-[var(--color-accent)] md:w-3.5 md:h-3.5" />
                           <span className="text-[8px] md:text-xs font-bold uppercase tracking-wider">Step {event.step}</span>
                        </div>
                        <Image 
                          src={event.image} 
                          alt={event.title} 
                          fill 
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-95 z-10" />
                      </div>
                      
                      <div className="p-3 sm:p-5 md:p-8 flex flex-col grow">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4 text-[9px] sm:text-xs md:text-sm font-medium text-[var(--color-accent)] mb-2 md:mb-4">
                          <span className="flex items-center gap-1 bg-[var(--color-accent)]/10 px-2 py-1 md:px-3 md:py-1.5 rounded-full">
                            <Calendar size={10} className="md:w-3.5 md:h-3.5" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1 text-[var(--color-text-muted)] truncate max-w-full">
                            <MapPin size={10} className="md:w-3.5 md:h-3.5 shrink-0" /> <span className="truncate">{event.location}</span>
                          </span>
                        </div>
                        
                        <h3 className="text-xs sm:text-lg md:text-3xl font-bold uppercase tracking-tight mb-1 md:mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                          {event.title}
                        </h3>
                        
                        <p className="text-[var(--color-text-muted)] text-[10px] sm:text-xs md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 line-clamp-3 md:line-clamp-none">
                          {event.description}
                        </p>
                        
                        <div className="mt-auto pt-2 md:pt-4 border-t border-[var(--color-primary-light)]/50">
                          <button className="flex items-center gap-1 md:gap-2 text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors group/btn">
                            Register 
                            <ArrowUpRight size={12} className="md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}