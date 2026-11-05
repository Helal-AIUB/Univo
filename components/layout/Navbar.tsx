"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0514]/90 backdrop-blur-xl border-b border-[var(--color-primary-light)]/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-lg p-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 overflow-hidden transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/logo.png"
                alt="UNIVO Environmental Movement Logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                UNIVO
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] group-hover:text-white transition-colors">
                Land Rights Vanguard
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[var(--color-primary)]/20 p-1.5 rounded-full border border-[var(--color-primary-light)]/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-[#0b0514] font-bold"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-full -z-10 shadow-[0_0_15px_rgba(195,255,0,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-xs lg:text-sm font-black uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(195,255,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]"
            >
              <span>Join Movement</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="p-2.5 rounded-full bg-[var(--color-primary)]/40 border border-[var(--color-primary-light)]/40 text-white hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer / Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 4%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 4%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 4%)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen bg-[#0b0514] z-50 flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex justify-between items-center border-b border-[var(--color-primary-light)]/20 pb-5">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Univo Logo"
                  width={38}
                  height={38}
                  className="object-contain"
                />
                <span className="text-xl font-black tracking-wider text-white">
                  UNIVO
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-full bg-[var(--color-primary)]/40 text-white hover:text-[var(--color-accent)] border border-[var(--color-primary-light)]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-8 flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Navigation
              </span>
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-3xl sm:text-4xl font-black uppercase tracking-tight py-2 transition-colors ${
                        isActive
                          ? "text-[var(--color-accent)]"
                          : "text-white hover:text-[var(--color-accent)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Manifesto Statement */}
            <div className="border-t border-[var(--color-primary-light)]/30 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <ShieldCheck size={16} className="text-[var(--color-accent)]" />
                <span>Defending Land Rights & Community Ecology</span>
              </div>
              <Link
                href="/get-involved"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(195,255,0,0.3)] hover:bg-[var(--color-accent-hover)] transition-all"
              >
                Join the Movement
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
