import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#0F2847",
          100: "#143055",
          200: "#1A3D66",
        },
        surf: {
          teal: "#2DD4BF",
          cyan: "#22D3EE",
          mist: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(45, 212, 191, 0.25)",
        "card-hover":
          "0 20px 40px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(45, 212, 191, 0.12)",
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};

export default config;
