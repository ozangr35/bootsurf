import {
  Brain,
  Cloud,
  Code2,
  Rocket,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { capabilities, type Capability } from "@/lib/capabilities";

const iconMap: Record<Capability["icon"], LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  shield: Shield,
  brain: Brain,
  rocket: Rocket,
  cloud: Cloud,
};

export default function Capabilities() {
  return (
    <section id="expertise" className="section-block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-heading section-heading--left">
          <p className="section-eyebrow">What we do</p>
          <h2>
            Engineered for{" "}
            <span className="text-gradient-surf">AI-native delivery</span>
          </h2>
          <p className="lead">
            Full-stack mobile and software capability — from concept to App Store,
            with privacy and release discipline built in.
          </p>
        </div>

        <div className="bento-grid">
          {capabilities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className={`bento-item glass-panel${item.wide ? " bento-item--wide" : ""}`}
              >
                <div className="bento-icon" aria-hidden>
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
