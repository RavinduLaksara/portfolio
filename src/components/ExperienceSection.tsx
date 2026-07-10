"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import AnimatedCard from "@/components/AnimatedCard";
import { experienceData } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="// EXPERIENCE" title="Where I've Worked" />

        {/* Timeline container */}
        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-[5px] top-0 h-full w-px bg-white/10 md:left-[7px]" />

          <div className="flex flex-col gap-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative pl-10 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center md:top-1.5">
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500/20 ring-4 ring-blue-500/20" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
                  </span>
                </div>

                {/* Experience card */}
                <AnimatedCard>
                  <div className="p-5 md:p-6">
                    {/* Role & Company */}
                    <div className="mb-3 flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                        <Briefcase className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 font-medium text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
