import Capabilities from "@/components/Capabilities";
import CTASection from "@/components/CTASection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Navbar from "@/components/Navbar";
import StudioStats from "@/components/StudioStats";
import TechStrip from "@/components/TechStrip";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStrip />
      <StudioStats />
      <Capabilities />
      <Methodology />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  );
}
