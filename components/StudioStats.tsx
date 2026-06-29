import { studioStats } from "@/lib/site";

export default function StudioStats() {
  return (
    <section aria-label="Studio highlights" className="studio-stats">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 px-4 sm:grid-cols-4 sm:px-6">
        {studioStats.map((stat) => (
          <div key={stat.label} className="studio-stat bg-navy px-4 py-8 text-center sm:px-6">
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-surf-mist sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
