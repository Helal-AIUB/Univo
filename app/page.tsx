import HeroSection from "@/components/sections/HeroSection";
import MissionVision from "@/components/sections/MissionVision";
import Campaigns from "@/components/sections/Campaigns";
import EventsTimeline from "@/components/sections/EventsTimeline";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <MissionVision />
      <Campaigns />
      <EventsTimeline />
    </main>
  );
}
