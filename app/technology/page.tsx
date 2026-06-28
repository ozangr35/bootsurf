import Footer from "@/components/Footer";
import GateXCta from "@/components/GateXCta";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import TechnologyGrid from "@/components/TechnologyGrid";
import { contactEmail } from "@/lib/site";

export const metadata = {
  title: "Technology Stack — Bootsurf",
  description:
    "Explore Bootsurf's technology stack: SwiftUI, Flutter, Next.js, privacy-first AI, asc CLI release engineering, and App Store–grade infrastructure.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <PageHero
        kicker="Technology Stack"
        title="Architected for"
        titleAccent="Scale"
        description="We don't tie you to outdated systems. We utilize best-in-class, modern tech ecosystems guaranteeing peak performance, rock-solid privacy, and flawless App Store maintainability."
      />
      <section className="pb-8 pt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <TechnologyGrid />
        </div>
      </section>
      <GateXCta
        title="Need a robust mobile architecture?"
        description="From greenfield app development to App Store launch pipelines, our engineers dictate excellence."
        buttonLabel="Discuss architecture with us"
        buttonHref={`mailto:${contactEmail}`}
        external
      />
      <Footer />
    </main>
  );
}
