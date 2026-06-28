import Footer from "@/components/Footer";
import GateXCta from "@/components/GateXCta";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { contactEmail } from "@/lib/site";

export const metadata = {
  title: "Featured Projects — Bootsurf",
  description:
    "Browse Bootsurf's portfolio of custom software engineering, mobile app design, privacy-first AI, and App Store–ready product launches.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <PageHero
        kicker="Case Studies"
        title="Proven"
        titleAccent="Results"
        description="Explore our track record of engineering scalable mobile platforms, privacy-first AI products, and App Store launches built for serious users."
      />
      <section className="pb-8 pt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsGrid showCapabilities />
        </div>
      </section>
      <GateXCta
        title="Ready to be our next success story?"
        description="Partner with Bootsurf to engineer solutions that definitively solve complex product challenges."
        buttonLabel="Initiate your project"
        buttonHref={`mailto:${contactEmail}`}
        external
      />
      <Footer />
    </main>
  );
}
