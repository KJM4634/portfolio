import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { GithubIcon } from "@/components/icons/BrandIcons";
import MagneticButton from "@/components/contact/MagneticButton";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 md:px-10">
      <FadeUp>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          모든 프로젝트
        </Link>
      </FadeUp>

      <FadeUp delay={0.1}>
        {(project.featured || project.award) && (
          <div className="mt-8 flex flex-wrap items-center gap-2">
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
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
      </FadeUp>

      <FadeUp delay={0.15}>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>{project.period}</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h2 className="mt-10 font-heading text-sm font-medium uppercase tracking-wide text-muted">
          프로젝트 요약
        </h2>
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted sm:text-lg">
          {project.description}
        </p>
      </FadeUp>

      <FadeUp delay={0.25}>
        <h2 className="mt-10 font-heading text-sm font-medium uppercase tracking-wide text-muted">
          활용 기술
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeUp>

      {project.keywords && (
        <FadeUp delay={0.3}>
          <h2 className="mt-10 font-heading text-sm font-medium uppercase tracking-wide text-muted">
            융합 분야 키워드
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-xs text-accent"
              >
                {keyword}
              </span>
            ))}
          </div>
        </FadeUp>
      )}

      {(project.demo || project.github) && (
        <FadeUp delay={0.35}>
          <div className="mt-12 flex flex-wrap gap-4">
            {project.demo && (
              <MagneticButton href={project.demo} external variant="solid">
                Live Demo
                <ArrowUpRight size={16} />
              </MagneticButton>
            )}
            {project.github && (
              <MagneticButton href={project.github} external variant="outline">
                <GithubIcon size={16} />
                GitHub
              </MagneticButton>
            )}
          </div>
        </FadeUp>
      )}
    </main>
  );
}
