import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the Univo website and initiative participation.",
};

export default function TermsPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
          <ShieldCheck size={16} className="text-[var(--color-accent)]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Legal Terms
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-8 font-[family-name:var(--font-heading)]">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert max-w-none text-sm sm:text-base text-[var(--color-text-muted)] space-y-6 leading-relaxed">
          <p>
            Welcome to UNIVO. By accessing this platform and participating in our educational resources, campaigns,
            or volunteer drives, you agree to comply with and be bound by the following terms.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            1. Intellectual Property & Fair Use
          </h2>
          <p>
            All photography, educational curriculum, research briefs, and design elements published on this platform
            are owned by or licensed to UNIVO Environmental Initiative. Material may be shared for non-commercial,
            educational, and activist purposes provided proper attribution is given.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            2. Volunteer Code of Conduct
          </h2>
          <p>
            Volunteers and chapter organizers represent Univo with non-violent, lawful, and scientifically backed methods.
            We do not tolerate harassment, vandalism, or unauthorized commercial solicitation under the Univo banner.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            3. Transparency & Disclaimers
          </h2>
          <p>
            While Univo strives to maintain verified and up-to-date information across all campaign pages, ecological field conditions
            and flood zones evolve rapidly. Frontline safety remains paramount during all active volunteer operations.
          </p>
        </div>
      </div>
    </main>
  );
}

