"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Layers, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { aboutData } from "@/lib/data";

const stats = [
  { icon: Briefcase, value: "7+", label: "Months Experience" },
  { icon: FolderGit2, value: "4+", label: "Projects Built" },
  { icon: Layers, value: "Full-Stack", label: "Engineering" },
  { icon: Code2, value: "6+", label: "Technologies" },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="// ABOUT" title={aboutData.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* ── Text column ─────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="lg:col-span-3 space-y-6"
          >
            {aboutData.body.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-400"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* ── Stats grid ──────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-blue-500/30 hover:bg-white/[0.07]"
                >
                  <Icon className="mb-3 h-5 w-5 text-blue-400 opacity-70 transition-opacity group-hover:opacity-100" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
