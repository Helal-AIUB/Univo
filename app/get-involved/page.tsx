"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "Dhaka",
    role: "Field Volunteer",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <span className="pro-badge mb-3">
            Mobilize With Univo
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Step Up. <span className="text-[var(--color-accent)]">Become A Vanguard.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Join thousands of students and community organizers dedicating their skills to defending endangered soil and leading climate action.
          </p>
        </div>
      </section>

      {/* Form & Tracks */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Volunteer Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-1">
                Volunteer Registration
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] mb-6">
                Fill in your details to connect with your local district coordinator.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[var(--color-accent-dim)] border border-[var(--color-accent)]/30 text-center flex flex-col items-center">
                  <CheckCircle2 size={36} className="text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">
                    Application Received!
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] max-w-sm">
                    Our regional organizing team for {formData.region} will review your application and reach out to {formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. tanvir@domain.com"
                        className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1700 000000"
                        className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                        Regional Chapter
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      >
                        <option value="Dhaka">Dhaka Central Chapter</option>
                        <option value="Sylhet">Sylhet & Sunamganj Basin</option>
                        <option value="Khulna">Khulna & Sundarbans Belt</option>
                        <option value="Chittagong">Chittagong Coastal Chapter</option>
                        <option value="Rajshahi">Rajshahi & Northern Plains</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                      Involvement Track
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                    >
                      <option value="Field Volunteer">Frontline Volunteer (Tree Planting / Relief)</option>
                      <option value="Soil & Bio Researcher">Soil Ecology & Bio-Testing Volunteer</option>
                      <option value="Campus Chapter Organizer">University / Campus Chapter Lead</option>
                      <option value="Media & Documentation">Field Photographer & Documentarian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                      Brief Message or Motivation
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Why does soil and environmental defense matter to you?"
                      className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[var(--color-accent)] text-[#0b0514] font-semibold text-xs hover:bg-[var(--color-accent-hover)] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Submit Volunteer Registration</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Engagement Tracks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="pro-card p-5">
              <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Track 01
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Ground Deployment Units
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Join weekend mangrove planting campaigns, estuary salinity monitoring, and emergency relief distribution.
              </p>
            </div>

            <div className="pro-card p-5">
              <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Track 02
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Campus Chapter Leadership
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Lead student strikes, organize campus policy symposiums, and mobilize youth peers on university campuses.
              </p>
            </div>

            <div className="pro-card p-5">
              <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Track 03
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Soil Ecology & Field Testing
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Work alongside our advisory board to conduct organic bio-fertilizer assays and sample soil health across coastal zones.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
              <ShieldCheck className="text-[var(--color-accent)] w-5 h-5 shrink-0" />
              <span>All volunteer hours earn official certified Univo Environmental Vanguard credentials.</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
