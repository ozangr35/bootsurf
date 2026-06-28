import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surf-teal">
              Case Studies
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proven results
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-surf-mist sm:text-base">
              Mobile engineering, web platforms, and App Store discipline —
              explore what we ship.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 text-sm font-semibold text-surf-teal transition hover:text-surf-cyan"
          >
            View full portfolio →
          </Link>
        </div>

        <div className="mt-10">
          <ProjectsGrid showCapabilities={false} />
        </div>
      </div>
    </section>
  );
}
