"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, ArrowUpRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How can my university or student group start a Univo Chapter?",
    a: "Reach out via the form below or apply through the Get Involved page. Our Youth Mobilization director will provide our field charter, organizing manual, and official registration credentials.",
  },
  {
    q: "How are donations and relief funds accounted for?",
    a: "Univo publishes transparent financial allocations after every major disaster campaign and tree-planting drive, reviewed under our ecological oversight protocols.",
  },
  {
    q: "Can international organizations partner on delta restoration?",
    a: "Yes. We actively collaborate with international environmental institutions, youth climate networks, and scientific research labs.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-primary-light)]/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--color-primary)]/20 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
            <MessageSquare size={16} className="text-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Direct Communication
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-[family-name:var(--font-heading)]">
            Connect With Our <br />
            <span className="text-[var(--color-accent)]">Vanguard Hub.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Reach out for campus chapter registrations, frontline field collaborations,
            media inquiries, or organizational partnerships.
          </p>
        </div>
      </section>

      {/* Contact Grid & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4 block">
                Field Operations Desk
              </span>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)]/40 text-[var(--color-accent)] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Headquarters & Secretariat
                    </span>
                    <p className="text-sm font-semibold text-white mt-1">
                      Dhaka, Bangladesh • Operating across 24 Regional Coastal & Delta Chapters
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)]/40 text-[var(--color-accent)] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Official Inquiries
                    </span>
                    <p className="text-sm font-semibold text-white mt-1">
                      contact@univo.org • vanguard@univo.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0b0514] border border-[var(--color-primary-light)]/40 text-[var(--color-accent)] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Rapid Action Dispatch
                    </span>
                    <p className="text-sm font-semibold text-white mt-1">
                      +880 (2) 880-UNIVO (Emergency Frontline Operations)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs Accordion */}
            <div className="p-8 rounded-3xl bg-[#0e071a] border border-[var(--color-primary-light)]/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">
                <HelpCircle size={16} />
                <span>Frequently Asked</span>
              </div>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div key={i} className="border-b border-[var(--color-primary-light)]/20 pb-4">
                    <h4 className="text-sm font-bold text-white mb-1">{f.q}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-primary)]/20 border border-[var(--color-primary-light)]/40 backdrop-blur-xl shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Direct Message
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-6">
                Transmit An Inquiry
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-[var(--color-accent)] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                    Message Transmitted
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-md">
                    Thank you, {formData.name}. Our communications officer will respond to {formData.email} as soon as possible.
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
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Siddika"
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
                        placeholder="e.g. ayesha@domain.com"
                        className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Partnership Proposal / Campus Chapter / Media"
                      className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-[#0b0514] border border-[var(--color-primary-light)]/40 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[var(--color-accent)] text-[#0b0514] font-black uppercase text-sm tracking-wider hover:bg-[var(--color-accent-hover)] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(195,255,0,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Transmit Inquiry</span>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

