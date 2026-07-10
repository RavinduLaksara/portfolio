"use client";

import { Smartphone, Server, Database, Wrench, type LucideIcon } from "lucide-react";
import { skillsData } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCard from "@/components/AnimatedCard";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Database,
  Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="// SKILLS" title="Tech Stack" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Wrench;

            return (
              <AnimatedCard key={category.title} delay={index * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.05]">
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  {/* Category title */}
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <ul className="flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
