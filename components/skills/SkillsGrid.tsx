import TiltCard from "./TiltCard";
import FadeUp from "@/components/motion/FadeUp";
import { skills } from "@/lib/data/skills";

export default function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">02 · Skills</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Tech Stack
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {skills.map((group, i) => (
          <FadeUp key={group.category} delay={0.1 * i}>
            <TiltCard className="h-full p-8">
              <h3 className="font-heading text-lg font-medium text-foreground">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {item.name}
                    {item.learning && (
                      <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                        학습 중
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
