export type TechnologyCategory = {
  title: string;
  description: string;
  tags: string[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Mobile Engineering",
    description:
      "Native iOS and cross-platform apps with SwiftUI and Flutter. HealthKit, widgets, Sign in with Apple, and polished onboarding — engineered for App Store review from day one.",
    tags: ["SwiftUI", "Flutter", "iOS", "HealthKit"],
  },
  {
    title: "AI & LLM Integration",
    description:
      "Context-aware agents, RAG pipelines, and server-side LLM orchestration with explicit consent, on-device scrubbing, and API keys kept off the client.",
    tags: ["OpenAI", "RAG", "Agents", "Embeddings"],
  },
  {
    title: "Frontend & Web",
    description:
      "Fluid, lightning-fast interfaces using React and Next.js with rigorous TypeScript. Marketing sites, admin dashboards, and product landing pages optimized for accessibility.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend & AI APIs",
    description:
      "API-first architectures with server-side AI keys, secure auth, and resilient business logic built for GDPR and high-concurrency mobile clients.",
    tags: ["Node.js", "Python", "REST", "PostgreSQL"],
  },
  {
    title: "App Store & Release",
    description:
      "End-to-end App Store Connect discipline — bundle IDs, signing, metadata, subscriptions, TestFlight, and review submission via the asc CLI workflow.",
    tags: ["asc CLI", "RevenueCat", "TestFlight", "App Store Connect"],
  },
  {
    title: "Security & Privacy",
    description:
      "Privacy-by-design engineering with App Attest, privacy manifests, account deletion, and GDPR-aligned legal pages. We design for App Store privacy questionnaires from the start.",
    tags: ["GDPR", "App Attest", "Privacy Manifests", "OWASP"],
  },
  {
    title: "CI/CD & Delivery",
    description:
      "Git-driven asc workflow pipelines with validate → archive → TestFlight → submit lanes. Repeatable releases with audit-friendly outputs and zero scramble at launch.",
    tags: ["GitHub Actions", "asc workflow", "Xcode", "Fastlane"],
  },
];
