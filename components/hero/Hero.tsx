import TextReveal from "./TextReveal";
import ScrollIndicator from "./ScrollIndicator";
import MagneticButton from "@/components/contact/MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-sm text-accent">
          AI Researcher (예정) · Computer Science
        </p>

        <TextReveal
          as="h1"
          text="AI를 연구하는 김민준입니다."
          className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
        />

        <TextReveal
          as="p"
          delay={0.4}
          text="컴퓨터공학을 전공하며 사람의 언어와 사고를 모델링하는 방법을 고민합니다. 2027년, 인공지능 대학원에 진학해 그 질문을 더 깊이 파고들 예정입니다."
          className="mt-8 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg"
        />

        <div className="mt-12 flex flex-wrap gap-4">
          <MagneticButton href="#projects" variant="solid">
            프로젝트 보기
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            연락하기
          </MagneticButton>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
