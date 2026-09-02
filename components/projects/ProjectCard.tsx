import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import TiltCard from "@/components/skills/TiltCard";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="flex h-full flex-col p-8">
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            {(project.featured || project.award) && (
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {project.featured && (
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    대표 프로젝트
                  </span>
                )}
                {project.award && (
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {project.award}
                  </span>
                )}
              </div>
            )}
            <h3
              className={`font-heading font-medium text-foreground ${
                project.featured ? "text-2xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-6 inline-flex w-fit items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
      )}
    </TiltCard>
  );
}
