"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-12 ${alignmentClasses}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Uppercase accent label */}
      <span className="text-sm font-[family-name:var(--font-geist-mono)] font-medium tracking-widest uppercase text-blue-400">
        {label}
      </span>

      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
