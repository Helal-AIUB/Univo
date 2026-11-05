"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Shield, Heart } from "lucide-react";

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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0b0514]/95 backdrop-blur-md border-b border-[var(--color-border)] py-2.5 shadow-lg"
          : "bg-transparent border-b border-transparent py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-11">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] rounded-md"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded-md flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="UNIVO Logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                UNIVO
              </span>
              <span className="text-[10px] text-[var(--color-text-muted)] tracking-normal leading-none font-medium">
                Youth Land Rights Movement
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 bg-[var(--color-bg-card)] px-2 py-1 rounded-full border border-[var(--color-border)] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "text-[#0b0514] font-semibold"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-all active:scale-95 shadow-sm"
            >
              <span>Join Movement</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white hover:text-[var(--color-accent)] focus:outline-none transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean, Non-Oversized Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[57px] bg-[#0b0514]/98 border-b border-[var(--color-border)] backdrop-blur-xl px-5 py-6 flex flex-col gap-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--color-accent)] text-[#0b0514] font-semibold"
                        : "text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-bg-card)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-2">
              <Link
                href="/get-involved"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-[var(--color-accent)] text-[#0b0514] font-semibold text-xs transition-all"
              >
                Join Movement
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
