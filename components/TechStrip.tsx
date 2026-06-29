import { techStrip } from "@/lib/site";

export default function TechStrip() {
  return (
    <section aria-label="Technologies we work with" className="tech-strip">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="tech-strip-label">Built with modern stacks</p>
        <div className="tech-strip-track">
          {[...techStrip, ...techStrip].map((item, i) => (
            <span key={`${item}-${i}`} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
