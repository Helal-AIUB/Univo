import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | UNIVO — Youth-Led Land Rights & Climate Action",
    default: "UNIVO — Youth-Led Land Rights & Environmental Defense",
  },
  description:
    "Univo is an international youth-driven social movement dedicated to defending land rights, soil regeneration, and mobilizing communities on the frontlines of climate vulnerability.",
  keywords: [
    "Univo",
    "Land Rights",
    "Youth Climate Movement",
    "Soil Regeneration",
    "Environmental Defense",
    "Frontline Community Action",
  ],
  authors: [{ name: "UNIVO Environmental Initiative" }],
  openGraph: {
    title: "UNIVO — Defending Soil. Reclaiming Balance.",
    description: "Youth-driven collective action for land rights and ecological resilience.",
    siteName: "UNIVO",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
        <Navbar />
        {/* Spacer to prevent fixed navbar occlusion */}
        <div className="h-20 sm:h-24 w-full shrink-0" aria-hidden="true" />
        
        {/* Main Content Area */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
