"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Events", href: "/events" },
  { name: "Support Us", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--color-bg-base)] border-b border-[var(--color-primary-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Univo Logo" 
                width={45} 
                height={45} 
                className="object-contain"
                priority
              />
              <span className="text-2xl font-bold text-[var(--color-text-main)] tracking-wider">
                UNIVO
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] font-medium uppercase text-sm tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/donate"
              className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-[var(--color-accent-hover)] transition-transform hover:scale-105 active:scale-95"
            >
              Donate
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[var(--color-primary)] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-lg font-medium text-[var(--color-text-main)] hover:text-[var(--color-accent)] border-b border-[var(--color-primary-light)] uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 rounded-full font-bold uppercase tracking-wide"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}