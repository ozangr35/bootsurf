import Capabilities from "@/components/Capabilities";
import CTASection from "@/components/CTASection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Capabilities />
      <Methodology />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  );
}
