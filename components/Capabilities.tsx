import { capabilities } from "@/lib/capabilities";

export default function Capabilities() {
  return (
    <section id="expertise" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-heading">
          <h2>
            Elite <span className="text-gradient-surf">Capabilities</span>
          </h2>
          <p className="lead text-sm sm:text-base">
            Comprehensive digital engineering tailored for AI-native mobile
            products. We don&apos;t just build prototypes — we engineer for
            scale, privacy, and App Store success.
          </p>
        </div>

        <div className="bento-grid">
          {capabilities.map((item) => (
            <article key={item.title} className="bento-item glass-panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
