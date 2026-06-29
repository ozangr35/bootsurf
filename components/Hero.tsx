"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { company } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-section">
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-mesh" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-subtle bg-grid opacity-[0.15]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="hero-layout">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-copy"
          >
            <span className="hero-kicker">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {company.name} · AI mobile studio
            </span>
            <h1>
              Ship{" "}
              <span className="text-gradient-surf">AI-native mobile</span>{" "}
              products with confidence.
            </h1>
            <p className="hero-lead">
              {company.tagline}
            </p>
            <div className="hero-actions hero-actions--left">
              <Link href="/#expertise" className="btn-primary">
                Explore capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#contact" className="btn-secondary">
                Schedule consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hero-showcase glass-panel"
            aria-hidden
          >
            <div className="hero-showcase-bar">
              <span className="hero-dot" />
              <span className="hero-dot" />
              <span className="hero-dot" />
              <span className="hero-showcase-title">BootSurf Studio</span>
            </div>
            <div className="hero-showcase-body">
              <div className="hero-showcase-line hero-showcase-line--accent" />
              <div className="hero-showcase-line" />
              <div className="hero-showcase-line hero-showcase-line--short" />
              <div className="hero-showcase-grid">
                <div className="hero-showcase-card" />
                <div className="hero-showcase-card" />
                <div className="hero-showcase-card hero-showcase-card--wide" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
