import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Univo Environmental Initiative privacy policy and data governance.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full flex flex-col bg-[#0b0514] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary-light)]/40 bg-[var(--color-primary)]/20 backdrop-blur-md mb-6">
          <ShieldCheck size={16} className="text-[var(--color-accent)]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Data Governance
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-8 font-[family-name:var(--font-heading)]">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none text-sm sm:text-base text-[var(--color-text-muted)] space-y-6 leading-relaxed">
          <p>
            UNIVO Environmental Initiative (&ldquo;Univo&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy
            and personal integrity of our volunteers, donors, community members, and website visitors.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            1. Information Collection
          </h2>
          <p>
            We only collect personal information that you voluntarily provide to us when subscribing to our Field Dispatch,
            registering as a frontline volunteer, or submitting contact inquiries. This may include your name, email address,
            phone number, and regional location.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            2. Purpose of Data Use
          </h2>
          <p>
            Information collected is strictly utilized to coordinate regional volunteering deployments, share field impact dispatches,
            and manage official communications. We do not sell, rent, trade, or monetize personal information.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            3. Data Security & Storage
          </h2>
          <p>
            All submitted data is stored with modern encryption protocols and accessible solely to authorized members
            of the Univo Secretariat and organizing committee.
          </p>

          <h2 className="text-xl font-bold uppercase tracking-wider text-white pt-4">
            4. Contact
          </h2>
          <p>
            If you wish to review, update, or request deletion of your contact information, please write to
            <strong className="text-white"> contact@univo.org</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}

