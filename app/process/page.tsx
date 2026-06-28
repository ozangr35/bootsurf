import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  Archive,
  CheckCircle2,
  ClipboardList,
  CloudUpload,
  FileText,
  TestTube2,
} from "lucide-react";

export const metadata = {
  title: "Process — Bootsurf",
  description:
    "How Bootsurf ships App Store–ready AI apps — signing, metadata, TestFlight, subscriptions, and review.",
};

const phases = [
  {
    icon: FileText,
    phase: "01 — Product & privacy",
    items: [
      "Define AI boundaries and medical disclaimers where needed",
      "Draft privacy policy and terms aligned with GDPR",
      "Wire in-app consent, export, and account deletion flows",
      "Declare data use for App Privacy questionnaires",
    ],
  },
  {
    icon: Archive,
    phase: "02 — Build & backend",
    items: [
      "Native UI with accessibility in mind",
      "API keys kept server-side — never embedded in the client",
      "App Attest and integrity checks for production builds",
      "RevenueCat paywalls with restore and subscription management",
    ],
  },
  {
    icon: ClipboardList,
    phase: "03 — App Store Connect",
    items: [
      "Bundle IDs, capabilities, and signing certificates",
      "asc metadata validate — canonical copy and keywords",
      "Subscription groups and IAP products linked to RevenueCat",
      "Screenshots, app icon, and review notes for Apple",
    ],
  },
  {
    icon: TestTube2,
    phase: "04 — TestFlight beta",
    items: [
      "Internal and external tester groups",
      "Sandbox Apple ID credentials for review",
      "Crash triage and beta feedback loops",
      "Preflight scripts before every upload",
    ],
  },
  {
    icon: CloudUpload,
    phase: "05 — Submit & monitor",
    items: [
      "Archive, export, and upload via asc xcode helpers",
      "asc workflow run for repeatable release lanes",
      "Review submission with structured reviewer notes",
      "Post-launch: what's new, ASO, and build retention",
    ],
  },
  {
    icon: CheckCircle2,
    phase: "06 — Operate",
    items: [
      "Metadata and subscription pricing updates",
      "TestFlight orchestration for point releases",
      "Privacy manifest and encryption compliance on updates",
      "Website and legal page sync with app changes",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surf-teal">
          Methodology
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          From idea to App Store review
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-surf-mist sm:text-base">
          Transparency, precision, and agile delivery — our structured App Store
          Connect practice inspired by the asc CLI workflow. Validate early,
          automate uploads, and document every step so launches are predictable.
        </p>

        <div className="mt-14 space-y-8">
          {phases.map((block) => (
            <section
              key={block.phase}
              className="rounded-2xl border border-white/8 bg-navy-50 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <block.icon
                  className="mt-0.5 h-6 w-6 shrink-0 text-surf-teal"
                  aria-hidden
                />
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {block.phase}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-surf-mist">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-surf-teal">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-surf-teal/20 bg-surf-teal/5 p-6">
          <p className="font-semibold text-white">asc workflow in practice</p>
          <p className="mt-2 text-sm leading-relaxed text-surf-mist">
            Repo-local <code className="text-surf-cyan">.asc/workflow.json</code>{" "}
            files define validate → build → TestFlight → submit lanes. We dry-run
            before every release, resume failed steps by run ID, and keep stdout
            machine-readable for CI. Metadata lives in canonical{" "}
            <code className="text-surf-cyan">./metadata</code> folders — not
            scattered spreadsheets.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-surf-cyan hover:underline"
        >
          ← Back to home
        </Link>
      </article>
      <Footer />
    </main>
  );
}
