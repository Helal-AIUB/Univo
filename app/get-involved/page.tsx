"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, HeartHandshake, Users, Sparkles } from "lucide-react";

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
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--color-accent)]/10 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
            <Users size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Mobilize With Univo
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-[family-name:var(--font-heading)]">
            Step Up. <br />
            <span className="text-[var(--color-accent)]">Become A Vanguard.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Join thousands of students, researchers, and community organizers dedicating their skills
            to defending endangered soil and leading real-time climate action.
          </p>
        </div>
      </section>

      {/* Application Form & Roles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Volunteer / Partner Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 backdrop-blur-xl shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Official Application
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-6">
                Register Your Commitment
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                    Application Received, Vanguard!
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-md">
                    Our regional organizing team for {formData.region} will review your application and contact you at {formData.email} within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. tanvir@univo.org"
                        className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1700 000000"
                        className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                        Preferred Region / Chapter
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                      Involvement Track
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                    >
                      <option value="Field Volunteer">Frontline Field Volunteer (Tree Planting / Relief)</option>
                      <option value="Soil & Bio Researcher">Soil Ecology & Bio-Testing Volunteer</option>
                      <option value="Campus Chapter Organizer">University / Campus Chapter Lead</option>
                      <option value="Media & Documentation">Field Photographer & Drone Documentarian</option>
                      <option value="Institutional Partner">Institutional / NGO Partner Representative</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                      Why do you want to defend the land with Univo?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us briefly about your background or why soil and environmental defense matters to you..."
                      className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black uppercase text-sm tracking-wider hover:bg-[var(--color-accent-hover)] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(195,255,0,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Submit Volunteer Registration</span>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Pillars of Engagement */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3 block">
                Track 01
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Ground Deployment Units
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Take part in weekend sapling campaigns, estuary water salinity checks, and emergency relief supply chains.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3 block">
                Track 02
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Campus Chapter Leadership
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Lead student strikes, organize environmental policy symposiums, and mobilize youth peers on university campuses.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/15 border border-[var(--color-primary-light)]/30">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3 block">
                Track 03
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Soil Science & Lab Research
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Work alongside our advisory board to conduct organic bio-fertilizer assays and sample soil health across coastal zones.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0e071a] border border-[var(--color-primary-light)]/30 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
              <ShieldCheck className="text-[var(--color-accent)] w-8 h-8 shrink-0" />
              <span>All volunteer hours earn official certified Univo Environmental Vanguard credentials.</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

