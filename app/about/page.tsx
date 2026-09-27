import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import CorePillars from "@/components/about/CorePillars";
import FoundingMembers from "@/components/about/FoundingMembers";
import ManifestoCTA from "@/components/about/ManifestoCTA";

export const metadata: Metadata = {
  title: "About Us | Univo Environmental Initiative",
  description:
    "Learn about Univo's genesis, core pillars of soil rights and youth mobilization, and our notable leadership vanguard.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <AboutHero />
      <OriginStory />
      <CorePillars />
      <FoundingMembers />
      <ManifestoCTA />
    </main>
  );
}
