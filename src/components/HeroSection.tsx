"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* ── Decorative gradient orbs ─────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-3xl opacity-20" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-500/30 blur-3xl opacity-20" />
        <div className="absolute left-1/2 bottom-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-15" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Product-Minded{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Software
          </span>{" "}
          Engineer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 mx-auto"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-white/5 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* ── Scroll-down indicator ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
