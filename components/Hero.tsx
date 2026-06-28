"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { company } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-section">
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-mesh" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-subtle bg-grid opacity-20"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-panel glass-panel"
        >
          <span className="hero-kicker">{company.name}</span>
          <h1>
            Architecting{" "}
            <span className="text-gradient-surf">AI-native mobile excellence</span>{" "}
            for growing products.
          </h1>
          <p className="lead">
            {company.heroSubline}{" "}
            <strong className="text-white">Your vision, shipped flawlessly.</strong>
          </p>
          <div className="hero-actions">
            <Link
              href="/#expertise"
              className="inline-flex items-center gap-2 rounded-xl bg-surf-teal px-7 py-3.5 text-sm font-bold text-navy shadow-glow transition hover:bg-surf-teal/90"
            >
              Explore our expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-surf-teal/40 hover:bg-white/8"
            >
              Schedule consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
