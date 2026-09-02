import FadeUp from "@/components/motion/FadeUp";
import CredentialsAccordion from "./CredentialsAccordion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">01 · About</p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
          질문을 코드로 옮기는 과정을 좋아합니다.
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            OO대학교 컴퓨터공학부에서 4년간 알고리즘과 시스템의 기본기를
            다졌고, 학부 연구생으로 참여한 프로젝트를 계기로 사람의 언어와
            인지를 모델링하는 문제에 관심을 갖게 되었습니다. 문제를 정의하고,
            실험으로 검증하고, 결과를 명확하게 전달하는 과정 전체를
            좋아합니다. 2027년부터는 인공지능 대학원에서 이 관심을 본격적인
            연구로 이어갈 예정입니다.
          </p>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm md:grid-cols-1">
            <div>
              <dt className="text-muted">소속</dt>
              <dd className="mt-1 font-medium">OO대학교 컴퓨터공학부</dd>
            </div>
            <div>
              <dt className="text-muted">졸업 예정</dt>
              <dd className="mt-1 font-medium">2027년 2월</dd>
            </div>
            <div>
              <dt className="text-muted">관심 분야</dt>
              <dd className="mt-1 font-medium">NLP · LLM · Efficient Training</dd>
            </div>
          </dl>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <CredentialsAccordion />
      </FadeUp>
    </section>
  );
}
