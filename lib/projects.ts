export type ProjectLink = {
  label: string;
  /** Omit when the destination is not live — render a muted label. */
  href?: string;
  type: "store" | "web";
};

export type Project = {
  name: string;
  icon?: string;
  /** App icons are square; brand logos keep aspect ratio. */
  iconStyle?: "app" | "brand";
  /** Muted name-row chip when the product site is not live. */
  launching?: boolean;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export type ProjectCapability = {
  title: string;
  description: string;
};

export const projectCapabilities: ProjectCapability[] = [
  {
    title: "Mobile Engineering",
    description:
      "Native iOS & cross-platform apps built to App Store standards — SwiftUI, Flutter, HealthKit. We own the full lifecycle from design to deployment.",
  },
  {
    title: "Web Platforms & SaaS",
    description:
      "Scalable B2B and B2C web platforms using modern JavaScript stacks. API-first architecture, authentication, subscription flows, and cloud hosting included.",
  },
  {
    title: "App Store & Release",
    description:
      "asc CLI workflows, RevenueCat subscriptions, metadata sync, and TestFlight orchestration — we architect for reliable, repeatable App Store launches.",
  },
];

export const projects: Project[] = [
  {
    name: "SynapLift",
    icon: "/branding/synaplift-app-icon.png",
    description:
      "AI strength training app for serious lifters. Workout logging, PR analytics, and an AI Coach grounded in real training history. Built with Flutter for iOS and Android — subscriptions, Sign in with Apple, and privacy-first AI consent flows.",
    tags: ["Mobile", "Flutter", "iOS", "Android", "AI"],
    links: [
      { label: "Website", href: "https://synaplift.com", type: "web" },
    ],
  },
  {
    name: "Euno",
    launching: true,
    description:
      "Privacy-first wellness journal and gentle AI coach. Native iOS, built with SwiftUI. Site launching.",
    tags: ["iOS", "SwiftUI", "AI"],
    links: [{ label: "Site launching", type: "web" }],
  },
  {
    name: "BootSurf Studio",
    icon: "/branding/logo-transparent.png",
    iconStyle: "brand",
    description:
      "Our studio site — custom software engineering, mobile UX, and privacy-first AI positioning. Built with Next.js static export, optimized for bootsurf.com deployment.",
    tags: ["Web", "Next.js", "Studio", "Tailwind"],
    links: [
      { label: "Website", href: "https://bootsurf.com", type: "web" },
    ],
  },
];
