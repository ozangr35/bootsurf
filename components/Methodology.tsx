import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/process";

export default function Methodology() {
  return (
    <section id="process" className="process-band">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-heading">
          <h2>Flawless Execution Methodology</h2>
          <p className="lead text-sm sm:text-base">
            Transparency, precision, and agile delivery form the core of our
            operations.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step) => (
            <article key={step.number} className="step-card glass-panel">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-surf-teal transition hover:text-surf-cyan"
          >
            Full process details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
