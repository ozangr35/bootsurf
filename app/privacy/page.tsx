import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { company, contactEmail } from "@/lib/site";

export const metadata = {
  title: "Privacy — Bootsurf",
  description: "Privacy policy for the Bootsurf studio website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <article className="prose prose-invert mx-auto max-w-3xl px-4 pb-20 pt-28 prose-headings:font-bold prose-a:text-surf-teal sm:px-6 sm:pt-32">
        <h1>Privacy Policy</h1>
        <p className="text-surf-mist not-prose text-sm">Last updated: June 2026</p>

        <h2>Who we are</h2>
        <p>
          {company.legalName} ({company.country}) operates this studio website
          at bootsurf.com. Product-specific privacy policies for our apps are
          published on their respective product sites.
        </p>

        <h2>What this site collects</h2>
        <p>
          This marketing site is static. We do not run analytics trackers, ad
          networks, or account systems on bootsurf.com. If you email us, we
          process your message and email address only to respond.
        </p>

        <h2>Your rights</h2>
        <p>
          Under GDPR you may request access, correction, or deletion of personal
          data we hold from correspondence. Contact{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>Product apps</h2>
        <p>
          For SynapLift app privacy details, see{" "}
          <a
            href="https://synaplift.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            synaplift.com/privacy
          </a>
          .
        </p>

        <Link
          href="/"
          className="not-prose mt-8 inline-block text-sm font-semibold text-surf-cyan hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
