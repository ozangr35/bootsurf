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
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-xl bg-surf-teal px-8 py-4 text-sm font-bold text-navy transition hover:bg-surf-teal/90 sm:text-base"
            >
              <Mail className="h-4 w-4" />
              Email {contactEmail}
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-surf-teal/40 sm:text-base"
            >
              View our portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
