import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillsGrid from "@/components/skills/SkillsGrid";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ResearchTimeline from "@/components/research/ResearchTimeline";
import ExperienceTimeline from "@/components/education/ExperienceTimeline";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <ProjectGrid />
      <ResearchTimeline />
      <ExperienceTimeline />
      <Contact />
    </>
  );
}
