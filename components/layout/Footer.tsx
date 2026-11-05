"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, CheckCircle2, ShieldAlert } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const footerNavigation = {
  movement: [
    { name: "About Univo", href: "/about" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Measurable Impact", href: "/impact" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact & Chapters", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Transparency & Governance", href: "/impact" },
  ],
  socials: [
    { name: "Twitter / X", href: "https://x.com", icon: FaXTwitter },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <footer className="relative bg-[#07030d] text-[var(--color-text-main)] pt-20 pb-10 border-t border-[var(--color-primary-light)]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-[var(--color-accent)]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Editorial Statement Banner */}
        <div className="border-b border-[var(--color-primary-light)]/20 pb-14 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-accent)] block mb-3">
                Our Frontline Commitment
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                Defend The Soil. <br />
                <span className="text-[var(--color-accent)]">Empower The People.</span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md leading-relaxed">
              Univo organizes grassroots youth power to legally defend endangered soil,
              confront environmental degradation, and provide direct aid to frontline delta communities.
            </p>
          </div>
        </div>

        {/* Dispatch Newsletter Subscription */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/30 backdrop-blur-xl mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1 block">
                The Field Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                Stay Connected to Ground Truths
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Direct frontline dispatches, legal actions, and ecological field reports. Zero spam.
              </p>
            </div>

            <div className="lg:col-span-6">
              {submitted ? (
                <div className="flex items-center gap-3 p-4 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)]">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Thank you. You are now subscribed to Univo Field Reports.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address for newsletter"
                      className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    />
                    {error && (
                      <p className="absolute left-4 -bottom-6 text-xs text-rose-400 font-medium">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-[#0b0514] text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-transform hover:scale-105 active:scale-95 shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[var(--color-primary-light)]/20">
          {/* Identity Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Univo Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-black tracking-wider text-white">
                UNIVO
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm mb-6">
              A youth-led non-profit social organization confronting soil degradation,
              climate disaster vulnerability, and human rights through grassroots collective action.
            </p>
            <div className="flex items-center gap-3">
              {footerNavigation.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Univo on ${social.name}`}
                    className="p-3 rounded-full bg-[var(--color-primary)]/30 border border-[var(--color-primary-light)]/40 text-white hover:text-[#0b0514] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-4">
              Organization
            </h4>
            <ul className="space-y-3">
              {footerNavigation.movement.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-4">
              Governance
            </h4>
            <ul className="space-y-3">
              {footerNavigation.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)]/20 text-xs text-[var(--color-text-muted)]">
              <span className="font-bold text-white block mb-1">Non-Profit Credibility</span>
              Auditable non-partisan youth movement operating under environmental protection charters.
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]/70">
          <p>© {new Date().getFullYear()} UNIVO Environmental Initiative. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for collective ecological defense & youth leadership.
          </p>
        </div>

      </div>
    </footer>
  );
}
