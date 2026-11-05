"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, ArrowUpRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How can students start a regional Univo Chapter?",
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
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <span className="pro-badge mb-3">
            Direct Communication
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Connect With Our <span className="text-[var(--color-accent)]">Vanguard Hub.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Reach out for campus chapter registrations, frontline field collaborations, media inquiries, or organizational partnerships.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="pro-card p-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
                Field Operations Desk
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[var(--color-accent)] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[var(--color-text-muted)] block">
                      Headquarters & Secretariat
                    </span>
                    <p className="text-xs font-medium text-white mt-0.5">
                      Dhaka, Bangladesh • Operating across 24 Regional Coastal & Delta Chapters
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[var(--color-accent)] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[var(--color-text-muted)] block">
                      Official Inquiries
                    </span>
                    <p className="text-xs font-medium text-white mt-0.5">
                      contact@univo.org • vanguard@univo.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[var(--color-accent)] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[var(--color-text-muted)] block">
                      Rapid Action Dispatch
                    </span>
                    <p className="text-xs font-medium text-white mt-0.5">
                      +880 (2) 880-UNIVO (Emergency Frontline Operations)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="pro-card p-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white mb-3">
                <HelpCircle size={14} className="text-[var(--color-accent)]" />
                <span>Frequently Asked</span>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="border-b border-[var(--color-border)] pb-3 last:border-none last:pb-0">
                    <h4 className="text-xs font-semibold text-white mb-1">{f.q}</h4>
                    <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-1">
                Transmit An Inquiry
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] mb-6">
                Our secretariat typically responds within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[var(--color-accent-dim)] border border-[var(--color-accent)]/30 text-center flex flex-col items-center">
                  <CheckCircle2 size={36} className="text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">
                    Message Transmitted
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] max-w-sm">
                    Thank you, {formData.name}. Our communications officer will respond to {formData.email} shortly.
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
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Siddika"
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
                        placeholder="e.g. ayesha@domain.com"
                        className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Partnership / Campus Chapter / Media"
                      className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-[#0b0514] border border-[var(--color-border)] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[var(--color-accent)] text-[#0b0514] font-semibold text-xs hover:bg-[var(--color-accent-hover)] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Transmit Message</span>
                    <ArrowUpRight size={14} />
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
