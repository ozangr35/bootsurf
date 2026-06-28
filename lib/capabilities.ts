export type Capability = {
  title: string;
  description: string;
};

/** Homepage bento grid — GateX layout, AI developer studio focus. */
export const capabilities: Capability[] = [
  {
    title: "Custom Software Engineering",
    description:
      "Scalable web platforms, deep integrations, and enterprise-grade internal tools engineered for absolute performance. We turn complex requirements into elegant, maintainable codebases.",
  },
  {
    title: "Mobile App Design & UX",
    description:
      "Next-generation mobile experiences. Fluid, native-feeling interfaces and rigorous user journey planning for iOS and Android dominance.",
  },
  {
    title: "Privacy-First AI",
    description:
      "On-device PII scrubbing, explicit AI consent, server-side API keys, and privacy manifests aligned with GDPR and App Store privacy questionnaires.",
  },
  {
    title: "AI Product Development",
    description:
      "LLM integration, RAG pipelines, and context-aware agents grounded in real user data — not hollow generic prompts that fail on day three.",
  },
  {
    title: "App Store & Release Engineering",
    description:
      "Bundle IDs, signing, metadata, subscriptions, RevenueCat, and asc workflow pipelines from validate to TestFlight to review submission.",
  },
  {
    title: "Backend & Cloud Operations",
    description:
      "API-first Node.js and Python backends with secure auth, observability, and resilient infrastructure for high-concurrency mobile clients.",
  },
];
