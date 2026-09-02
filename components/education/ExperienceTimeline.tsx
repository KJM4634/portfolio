import FadeUp from "@/components/motion/FadeUp";
import { timeline } from "@/lib/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">05 · Timeline</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Education & Experience
        </h2>
      </FadeUp>

      <div className="relative mt-16 space-y-12 border-l border-border pl-8">
        {timeline.map((item, i) => (
          <FadeUp key={item.title + item.period} delay={0.08 * i}>
            <div className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-2 font-heading text-lg font-medium text-foreground">
                {item.title}
                <span className="ml-2 text-sm font-normal text-muted">
                  · {item.org}
                </span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span
                className={`mt-3 inline-block rounded-full px-2.5 py-0.5 text-xs ${
                  item.type === "education"
                    ? "bg-accent/10 text-accent"
                    : "bg-surface-2 text-muted"
                }`}
              >
                {item.type === "education" ? "Education" : "Experience"}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
