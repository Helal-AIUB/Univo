"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone
} from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const footerLinks = {
  explore: [
    { name: "About Us", href: "/about" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Active Campaigns", href: "/campaigns" },
    { name: "Upcoming Events", href: "/events" },
  ],
  support: [
    { name: "Donate Now", href: "/donate" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Transparency", href: "/reports" },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.4 } 
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-base)] text-[var(--color-text-main)] pt-16 md:pt-24 pb-8 overflow-hidden border-t border-[var(--color-primary-light)]/30">
      
      {/* Top Ambient Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 sm:h-32 bg-[var(--color-accent)]/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "0px" }} // Adjusted for mobile triggering
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 p-6 sm:p-8 md:p-12 bg-[var(--color-primary)]/40 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[var(--color-primary-light)] shadow-2xl mb-12 md:mb-20"
        >
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">
              Join the <span className="text-[var(--color-accent)]">Vanguard</span>
            </h3>
            <p className="text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base">
              Weekly frontline updates. No spam, only impact.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="w-full bg-[var(--color-bg-base)]/50 border border-[var(--color-primary-light)] rounded-full px-5 py-3 md:px-6 md:py-4 text-[var(--color-text-main)] text-sm md:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-muted)]/50 text-center sm:text-left shadow-inner"
            />
            <button className="flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-transform hover:scale-105 active:scale-95 shrink-0 shadow-[0_0_15px_rgba(195,255,0,0.2)]">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Main Footer Content - 100% Reliable Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }} // Adjusted for mobile triggering
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-8 mb-12 md:mb-16"
        >
          
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-6 group">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="relative w-8 h-8 md:w-10 md:h-10"
              >
                <Image 
                  src="/logo.png" 
                  alt="Univo Logo" 
                  fill 
                  className="object-contain" 
                />
              </motion.div>
              <span className="text-xl md:text-3xl font-black tracking-widest uppercase group-hover:text-[var(--color-accent)] transition-colors">
                UNIVO
              </span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-xs md:text-sm leading-relaxed mb-5 md:mb-6 max-w-[280px] lg:max-w-sm">
              Empowering the next generation of resilient climate leaders. Engineering real collective impact from the ground up.
            </p>
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/50 border border-[var(--color-primary-light)] px-3 py-1.5 md:px-4 md:py-2 rounded-full lg:rounded-lg shadow-sm">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
              <span className="text-[10px] md:text-xs font-bold text-[var(--color-text-muted)] tracking-wider">Reg. 501(c)(3) Org</span>
            </div>
          </motion.div>

          {/* Wrapper for Explore & Support */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-[320px] sm:max-w-[400px] mx-auto lg:max-w-full lg:mx-0">
            
            {/* Column 2: Explore */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-sm md:text-lg font-bold uppercase tracking-wider mb-4 md:mb-6 text-[var(--color-text-main)] border-b border-[var(--color-primary-light)]/50 pb-2 inline-block w-max">Explore</h4>
              <motion.ul 
                variants={containerVariants}
                className="flex flex-col gap-3 md:gap-4 w-full"
              >
                {footerLinks.explore.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <Link href={link.href} className="text-[var(--color-text-muted)] text-xs md:text-sm font-medium transition-colors hover:text-[var(--color-accent)] flex items-center group">
                      <span className="w-0 h-[1.5px] bg-[var(--color-accent)] mr-0 group-hover:w-2 group-hover:mr-1.5 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col items-start text-left pl-2 sm:pl-4 lg:pl-0">
              <h4 className="text-sm md:text-lg font-bold uppercase tracking-wider mb-4 md:mb-6 text-[var(--color-text-main)] border-b border-[var(--color-primary-light)]/50 pb-2 inline-block w-max">Support Us</h4>
              <motion.ul 
                variants={containerVariants}
                className="flex flex-col gap-3 md:gap-4 w-full"
              >
                {footerLinks.support.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <Link href={link.href} className="text-[var(--color-text-muted)] text-xs md:text-sm font-medium transition-colors hover:text-[var(--color-accent)] flex items-center group">
                      <span className="w-0 h-[1.5px] bg-[var(--color-accent)] mr-0 group-hover:w-2 group-hover:mr-1.5 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h4 className="text-sm md:text-lg font-bold uppercase tracking-wider mb-4 md:mb-6 text-[var(--color-text-main)] border-b lg:border-none border-[var(--color-primary-light)]/50 pb-2 inline-block w-max lg:w-full">Contact</h4>
            
            <ul className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 text-center lg:text-left items-center lg:items-start">
              <li className="flex items-start justify-center lg:justify-start gap-2 md:gap-3 text-xs md:text-sm text-[var(--color-text-muted)] group">
                <MapPin className="text-[var(--color-accent)] shrink-0 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4 hidden lg:block group-hover:animate-bounce" />
                <span>House 42, Road 15, Block D <br className="hidden lg:block"/>Banani, Dhaka</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 text-xs md:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer group">
                <Mail className="text-[var(--color-accent)] shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 hidden lg:block group-hover:scale-110 transition-transform" />
                <span>impact@univo.org</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 text-xs md:text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer group">
                <Phone className="text-[var(--color-accent)] shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 hidden lg:block group-hover:rotate-12 transition-transform" />
                <span>+880 1234 567 890</span>
              </li>
            </ul>

            <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
              {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  href="#"
                  whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-primary)] border border-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(195,255,0,0.4)]"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Copyright Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between pt-6 border-t border-[var(--color-primary-light)]/50 gap-4"
        >
          <p className="text-[var(--color-text-muted)] text-[10px] md:text-xs font-medium text-center lg:text-left">
            &copy; 2026 Univo Environmental Organization. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-[10px] md:text-xs font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-[10px] md:text-xs font-medium transition-colors">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}