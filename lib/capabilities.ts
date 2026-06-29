export type Capability = {
  title: string;
  description: string;
  icon:
    | "code"
    | "smartphone"
    | "shield"
    | "brain"
    | "rocket"
    | "cloud";
  wide?: boolean;
};

export const capabilities: Capability[] = [
  {
    title: "Custom Software Engineering",
    description:
      "Scalable web platforms, deep integrations, and enterprise-grade internal tools engineered for absolute performance.",
    icon: "code",
    wide: true,
  },
  {
    title: "Mobile App Design & UX",
    description:
      "Fluid, native-feeling interfaces and rigorous user journey planning for iOS and Android dominance.",
    icon: "smartphone",
  },
  {
    title: "Privacy-First AI",
    description:
      "On-device PII scrubbing, explicit AI consent, and privacy manifests aligned with GDPR and App Store requirements.",
    icon: "shield",
  },
  {
    title: "AI Product Development",
    description:
      "LLM integration, RAG pipelines, and context-aware agents grounded in real user data — not hollow generic prompts.",
    icon: "brain",
    wide: true,
  },
  {
    title: "App Store & Release Engineering",
    description:
      "Signing, metadata, subscriptions, RevenueCat, and asc workflow pipelines from validate to TestFlight to review.",
    icon: "rocket",
  },
  {
    title: "Backend & Cloud Operations",
    description:
      "API-first backends with secure auth, observability, and resilient infrastructure for high-concurrency mobile clients.",
    icon: "cloud",
  },
];
