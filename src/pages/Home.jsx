import Navbar from "@/components/bangladesh/Navbar";
import Hero from "@/components/bangladesh/Hero";
import Introduction from "@/components/bangladesh/Introduction";
import InteractiveMap from "@/components/bangladesh/InteractiveMap";
import JourneyScroll from "@/components/bangladesh/JourneyScroll";
import Destinations from "@/components/bangladesh/Destinations";
import Stats from "@/components/bangladesh/Stats";
import Culture from "@/components/bangladesh/Culture";
import Food from "@/components/bangladesh/Food";
import DayToNight from "@/components/bangladesh/DayToNight";
import Gallery from "@/components/bangladesh/Gallery";
import Stories from "@/components/bangladesh/Stories";
import FinalCTA from "@/components/bangladesh/FinalCTA";
import Footer from "@/components/bangladesh/Footer";

export default function Home() {
  return (
    <main className="relative bg-[hsl(var(--moss-deep))]">
      <Navbar />
      <Hero />
      <Introduction />
      <InteractiveMap />
      <JourneyScroll />
      <Destinations />
      <Stats />
      <Culture />
      <Food />
      <DayToNight />
      <Gallery />
      <Stories />
      <FinalCTA />
      <Footer />
    </main>
  );
}