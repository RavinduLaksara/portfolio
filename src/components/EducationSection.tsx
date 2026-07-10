"use client";

import { GraduationCap, Users, Award, Calendar } from "lucide-react";
import { educationData, communityData, certificationsData } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCard from "@/components/AnimatedCard";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="// EDUCATION" title="Academic Background" />

        {/* ---------------------------------------------------------------- */}
        {/* Education Cards                                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {educationData.map((edu, index) => (
            <AnimatedCard key={edu.degree} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.05]">
                {/* Icon + Degree */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-blue-400">{edu.institution}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{edu.duration}</span>
                </div>

                {/* Status badge */}
                {edu.status && (
                  <span className="inline-block self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    {edu.status}
                  </span>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Community & Leadership                                           */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-5 w-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Community &amp; Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {communityData.map((entry, index) => (
              <AnimatedCard key={entry.organization} delay={index * 0.1}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.05]">
                  <h4 className="text-lg font-semibold text-white">
                    {entry.organization}
                  </h4>
                  <p className="text-sm text-blue-400">{entry.role}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{entry.duration}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {entry.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Certifications                                                   */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-5 w-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certificationsData.map((cert, index) => (
              <AnimatedCard key={cert.name} delay={index * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/15 hover:bg-white/[0.07]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10">
                    <Award className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-white">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
