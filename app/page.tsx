import Gallary from "@/components/Gallary";
import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import ReasonGrid from "@/components/ReasonGrid";
import SurpriseLetter from "@/components/SurpriseLetter";
import Timeline from "@/components/Timeline";

export default function AnniversaryApp() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-rose-500 selection:text-white">
      <MusicPlayer />
      <Hero />
      <Timeline />
      <ReasonGrid />
      <Gallary></Gallary>
      <SurpriseLetter />
    </main>
  );
}
