import FadeUp from "@/components/motion/FadeUp";
import { research } from "@/lib/data/research";

export default function ResearchTimeline() {
  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">04 · Research</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          관심 있는 연구
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="mt-4 max-w-2xl text-muted">
          대학원 진학을 준비하며 꾸준히 읽고 정리해 온 주제들입니다.
        </p>
      </FadeUp>

      <div className="mt-12 divide-y divide-border border-t border-border">
        {research.map((item, i) => (
          <FadeUp key={item.title} delay={0.06 * i}>
            <div className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-8">
              <span className="text-xs font-medium uppercase tracking-wide text-accent">
                {item.category}
              </span>
              <div>
                <h3 className="flex items-center gap-2 font-heading text-lg font-medium text-foreground">
                  {item.title}
                  {item.status === "ongoing" && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      진행 중
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
