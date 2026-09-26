"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, Target, Leaf } from "lucide-react";
import Image from "next/image";

const campaigns = [
  {
    id: 1,
    title: "Sylhet Emergency Flood Relief",
    location: "Sylhet, Bangladesh",
    raised: 1500000,
    target: 2000000,
    image: "/cart/campaign1.jpg", 
    category: "Disaster Relief",
  },
  {
    id: 2,
    title: "Coastal Mangrove Restoration",
    location: "Sundarbans",
    raised: 450000,
    target: 1000000,
    image: "/cart/campaign2.jpg", 
    category: "Conservation",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 } 
  },
};

export default function Campaigns() {
  return (
    <section className="relative w-full bg-[var(--color-bg-base)] text-[var(--color-text-main)] py-16 md:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full md:w-auto text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 md:mb-4">
              Active <span className="text-[var(--color-accent)]">Missions</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm md:text-lg max-w-xl mx-auto md:mx-0">
              Real-time impact tracking. Select a campaign below to see how your contribution changes the landscape.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-primary-light)] text-[var(--color-text-main)] font-bold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all duration-300"
          >
            View All <ArrowRight size={20} />
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 md:gap-8"
        >
          {campaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.target) * 100;

            return (
              <motion.div
                key={campaign.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col bg-[var(--color-primary)] rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--color-primary-light)] hover:border-[var(--color-accent)] transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(195,255,0,0.15)]"
              >
                <div className="relative h-32 sm:h-48 md:h-72 overflow-hidden w-full shrink-0">
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 px-2 py-1 md:px-4 md:py-1.5 rounded-full bg-[var(--color-bg-base)]/80 backdrop-blur-md border border-[var(--color-primary-light)] text-[8px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 md:gap-2">
                    <Leaf className="text-[var(--color-accent)] w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                    <span className="truncate max-w-[80px] md:max-w-full">{campaign.category}</span>
                  </div>
                  
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                    priority={campaign.id === 1}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 md:via-transparent to-transparent opacity-95 md:opacity-90 z-10" />
                </div>

                <div className="relative flex flex-col flex-grow p-3 md:p-8 -mt-6 md:-mt-10 z-20">
                  <h3 className="text-xs sm:text-lg md:text-3xl font-extrabold uppercase tracking-tight mb-1 md:mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-tight line-clamp-2">
                    {campaign.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 md:gap-2 text-[var(--color-text-muted)] text-[9px] md:text-sm font-medium mb-3 md:mb-8">
                    <MapPin className="w-2.5 h-2.5 md:w-4 md:h-4 shrink-0" />
                    <span className="truncate">{campaign.location}</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-col xl:flex-row xl:justify-between text-[9px] sm:text-xs md:text-sm font-bold mb-2 md:mb-3 gap-1 xl:gap-0">
                      <span className="text-[var(--color-text-main)] flex items-center gap-1 md:gap-2">
                        <Target className="text-[var(--color-accent)] w-2.5 h-2.5 md:w-4 md:h-4" />
                        Raised: ৳{(campaign.raised / 100000).toFixed(1)}M
                      </span>
                      <span className="text-[var(--color-text-muted)] flex items-center gap-1">
                        Goal: ৳{(campaign.target / 100000).toFixed(1)}M
                      </span>
                    </div>
                    
                    <div className="w-full h-1.5 md:h-3 bg-[var(--color-bg-base)] rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.2 }}
                        className="absolute top-0 left-0 h-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden w-full mt-8 flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-primary-light)] text-[var(--color-text-main)] font-bold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
        >
          View All <ArrowRight size={16} />
        </motion.button>

      </div>
    </section>
  );
}