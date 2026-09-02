import FadeUp from "@/components/motion/FadeUp";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">03 · Projects</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeUp key={project.slug} delay={0.08 * i}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
