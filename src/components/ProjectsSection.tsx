"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, FlaskConical } from "lucide-react";
import { GithubIcon } from "@/components/icons";

import SectionHeading from "@/components/SectionHeading";
import AnimatedCard from "@/components/AnimatedCard";
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/data";

// ---------------------------------------------------------------------------
// Sub-components for each project variant
// ---------------------------------------------------------------------------

/** Tech stack pills shared across all cards */
function TechPills({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/** Status badge (e.g. "Ongoing") */
function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
      {status}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Featured project card (first project, col-span-2 on md+)
// ---------------------------------------------------------------------------

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-5 md:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{project.role}</p>
        </div>
        {project.status && <StatusBadge status={project.status} />}
      </div>

      {/* Tech stack */}
      <div className="mb-5">
        <TechPills stack={project.techStack} />
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-300">
        {project.description}
      </p>

      {/* Challenge */}
      {project.challenge && (
        <div className="mb-4">
          <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
            The Challenge
          </h4>
          <p className="text-sm leading-relaxed text-gray-400">
            {project.challenge}
          </p>
        </div>
      )}

      {/* Contributions */}
      {project.contribution && project.contribution.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Key Contributions
          </h4>
          <ul className="space-y-2">
            {project.contribution.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confidentiality note */}
      {project.note && (
        <div className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500" />
          <p className="text-xs leading-relaxed text-gray-500">
            {project.note}
          </p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Research project card (second project)
// ---------------------------------------------------------------------------

function ResearchProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-5 md:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
            <FlaskConical className="h-4 w-4 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{project.role}</p>
          </div>
        </div>
        {project.status && <StatusBadge status={project.status} />}
      </div>

      {/* Tech stack */}
      <div className="mb-5">
        <TechPills stack={project.techStack} />
      </div>

      {/* Context */}
      {project.context && (
        <div className="mb-4">
          <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Context
          </h4>
          <p className="text-sm leading-relaxed text-gray-400">
            {project.context}
          </p>
        </div>
      )}

      {/* Approach */}
      {project.approach && (
        <div className="mb-4">
          <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Approach
          </h4>
          <p className="text-sm leading-relaxed text-gray-300">
            {project.approach}
          </p>
        </div>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Default project card (other projects)
// ---------------------------------------------------------------------------

function DefaultProjectCard({ project }: { project: Project }) {
  const hasLink = project.link && project.link !== "#";

  return (
    <div className="flex h-full flex-col p-5 md:p-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-400">{project.role}</p>
      </div>

      {/* Tech stack */}
      <div className="mb-4">
        <TechPills stack={project.techStack} />
      </div>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      {/* Link / muted icon */}
      <div className="mt-auto">
        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            <GithubIcon className="h-4 w-4" />
            Source unavailable
          </span>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="// PROJECTS" title="Featured Work" />

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => {
            const isFeatured = index === 0 && project.featured;
            const isResearch = index === 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <AnimatedCard>
                  {isFeatured ? (
                    <FeaturedProjectCard project={project} />
                  ) : isResearch ? (
                    <ResearchProjectCard project={project} />
                  ) : (
                    <DefaultProjectCard project={project} />
                  )}
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
