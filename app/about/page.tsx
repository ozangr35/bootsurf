import Footer from "@/components/Footer";
import GateXCta from "@/components/GateXCta";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { missionValues } from "@/lib/mission";
import { company } from "@/lib/site";

export const metadata = {
  title: "Our Mission — Bootsurf",
  description:
    "Bootsurf mission — human-centered AI, privacy by design, and App Store discipline for AI-native mobile products.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <PageHero
        kicker="Core Values"
        title="Engineering trust,"
        titleAccent="delivering value."
        description={company.missionIntro}
      />
      <section className="pb-8 pt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="cards-grid !mt-0">
            {missionValues.map((value) => (
              <article key={value.title} className="feature-card glass-panel">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <GateXCta
        title="Join the future of AI-native products"
        description="See how our core values translate into exceptional project delivery."
        buttonLabel="Explore case studies"
        buttonHref="/projects"
      />
      <Footer />
    </main>
  );
}
