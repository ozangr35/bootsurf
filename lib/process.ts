export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep-dive analysis of objectives, AI boundaries, privacy constraints, and launch KPIs.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Rigorous system design, UX mapping, security baselining, and App Store Connect planning.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Iterative, high-velocity engineering with native clients, secure backends, and constant visibility.",
  },
  {
    number: "04",
    title: "Evolution",
    description:
      "TestFlight, review submission, continuous deployment, scaling, and proactive optimization.",
  },
];
