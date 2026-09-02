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
          데이터를 꼼꼼히 들여다보고, 질문의 답을 찾아갑니다.
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            경남대학교 컴퓨터공학부 소프트웨어전공에서 4년 가까이 공부하며
            알고리즘과 시스템의 기본기를 다졌습니다. 그 사이 학부
            연구실에서 의료 데이터를 다루는 프로젝트에 참여하면서, 데이터를
            꼼꼼히 들여다보고 그 안에서 패턴과 답을 찾아내는 과정에 가장 큰
            흥미를 느꼈습니다. 지금은 의료 AI를 중심으로 데이터
            분석·예측과 컴퓨터비전 문제를 함께 들여다보고 있고, 졸업
            후에는 인공지능 대학원에 진학해 이 관심을 본격적인 연구로
            이어갈 계획입니다.
          </p>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm md:grid-cols-1">
            <div>
              <dt className="text-muted">소속</dt>
              <dd className="mt-1 font-medium">경남대학교 컴퓨터공학부 소프트웨어전공</dd>
            </div>
            <div>
              <dt className="text-muted">졸업 예정</dt>
              <dd className="mt-1 font-medium">2027년 2월 (4학년 2학기 재학 중)</dd>
            </div>
            <div>
              <dt className="text-muted">관심 분야</dt>
              <dd className="mt-1 font-medium">의료 AI · 데이터 분석/예측 · 컴퓨터비전</dd>
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
