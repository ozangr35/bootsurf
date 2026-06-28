import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { company, contactEmail, synapliftUrl } from "@/lib/site";

export const metadata = {
  title: "Contact — Bootsurf",
  description: "Contact Bootsurf — partnerships, press, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surf-teal">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s build something together
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-surf-mist sm:text-base">
          Custom software, mobile app design, or App Store launch support —
          email us to discuss your project. We typically respond within a few
          business days.
        </p>

        <div className="mt-10 space-y-4">
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-start gap-4 rounded-2xl border border-white/8 bg-navy-50 p-6 transition hover:border-surf-teal/30"
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

          <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-navy-50 p-6">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-surf-teal" />
            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="mt-1 text-sm text-surf-mist">{company.country}</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-surf-mist">
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

        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold text-surf-cyan hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
