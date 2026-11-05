"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#07030d] text-[var(--color-text-main)] pt-14 pb-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
              Field Dispatch Newsletter
            </span>
            <h3 className="text-lg font-bold text-white mb-1">
              Stay connected with ground updates
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Frontline environmental actions, soil audits, and youth volunteer alerts.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {submitted ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-xs font-semibold border border-[var(--color-accent)]/30">
                <CheckCircle2 size={16} />
                <span>Subscribed to Univo field reports.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-accent)] w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[#0b0514] text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[var(--color-border)]">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="Univo Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-base font-bold text-white">UNIVO</span>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-sm mb-4">
              A youth-led non-profit social organization dedicated to defending land rights,
              soil regeneration, and environmental protection across vulnerable coastal and delta communities.
            </p>
            <div className="flex items-center gap-2">
              {footerNavigation.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Univo on ${social.name}`}
                    className="p-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-accent)] transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNavigation.movement.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Governance
            </h4>
            <ul className="space-y-2">
              {footerNavigation.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[11px] text-[var(--color-text-subtle)]">
              Audited non-profit movement operating under ecological protection charters.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-subtle)]">
          <p>© {new Date().getFullYear()} UNIVO Environmental Initiative. All rights reserved.</p>
          <p>Defending Soil • Protecting Communities • Mobilizing Youth</p>
        </div>

      </div>
    </footer>
  );
}
