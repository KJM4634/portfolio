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
          AI 대학원 진학 예정 · 경남대학교 컴퓨터공학부
        </p>

        <TextReveal
          as="h1"
          text="데이터로 문제를 파고드는 김정민입니다."
          className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
        />

        <TextReveal
          as="p"
          delay={0.4}
          text="경남대학교 컴퓨터공학부에서 소프트웨어를 전공하며, 의료 데이터 분석·예측과 컴퓨터비전을 중심으로 문제를 파고드는 걸 좋아합니다. 데이터를 꼼꼼히 들여다보는 과정에서 답을 찾는 편이고, 졸업 후에는 인공지능 대학원에 진학해 이 관심을 이어갈 예정입니다."
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
