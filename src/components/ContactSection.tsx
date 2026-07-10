"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 sm:py-32">
      {/* ── Decorative gradient glow ────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-white md:text-5xl"
        >
          Let&apos;s Build Something{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Great
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-lg leading-relaxed text-gray-400"
        >
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you.
        </motion.p>

        {/* Link cards */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-blue-500/30 hover:bg-white/[0.07] sm:w-auto"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Mail className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-sm font-medium text-white">
                {siteConfig.email}
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
          </a>

          {/* LinkedIn */}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-blue-500/30 hover:bg-white/[0.07] sm:w-auto"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <LinkedinIcon className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-sm font-medium text-white">Connect with me</p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
