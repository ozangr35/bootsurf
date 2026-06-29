import Footer from "@/components/Footer";
import GateXCta from "@/components/GateXCta";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Mail, MapPin } from "lucide-react";
import { company, contactEmail, synapliftUrl } from "@/lib/site";

export const metadata = {
  title: "Contact — BootSurf",
  description: "Contact BootSurf — partnerships, press, and project inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-navy">
      <Navbar />
      <PageHero
        kicker="Contact"
        title="Let's build"
        titleAccent="something together"
        description="Custom software, mobile app design, or App Store launch support — email us to discuss your project."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6">
          <a
            href={`mailto:${contactEmail}`}
            className="feature-card glass-panel flex flex-row items-start gap-4 !border-t-0"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-surf-teal" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="mt-1 text-sm text-surf-teal">{contactEmail}</p>
              <p className="mt-2 text-sm text-surf-mist">
                Support, partnerships, and press
              </p>
            </div>
          </a>

          <div className="feature-card glass-panel flex flex-row items-start gap-4 !border-t-0">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-surf-teal" />
            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="mt-1 text-sm text-surf-mist">{company.country}</p>
            </div>
          </div>

          <p className="pt-4 text-sm text-surf-mist">
            Product website:{" "}
            <a
              href={synapliftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-surf-teal hover:underline"
            >
              synaplift.com
            </a>
          </p>
        </div>
      </section>

      <GateXCta
        title="Ready to start?"
        description="Tell us about your product — we'll respond within a few business days."
        buttonLabel={`Email ${contactEmail}`}
        buttonHref={`mailto:${contactEmail}`}
      />

      <Footer />
    </main>
  );
}
