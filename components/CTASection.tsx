import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { company, contactEmail } from "@/lib/site";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="cta-box">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[2.2rem]">
            Accelerate Your Project with{" "}
            <span className="text-gradient-surf">{company.name}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-surf-mist sm:text-lg">
            Ready to ship an AI-native app or elevate your mobile product? Our
            team is ready to chart your optimal path forward. Minimum fluff,
            maximum engineering impact.
          </p>
          <div className="hero-actions">
            <a href={`mailto:${contactEmail}`} className="btn-primary">
              <Mail className="h-4 w-4" />
              Email {contactEmail}
            </a>
            <Link href="/projects" className="btn-secondary">
              View our portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
