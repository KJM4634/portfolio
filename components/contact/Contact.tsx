import { Mail, FileDown } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <FadeUp>
        <p className="font-mono text-sm text-accent">06 · Contact</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
          함께 이야기 나누고 싶다면
          <br />
          편하게 연락 주세요.
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-12 flex flex-wrap gap-4">
          <MagneticButton href="mailto:example@email.com" variant="solid">
            <Mail size={16} />
            이메일 보내기
          </MagneticButton>
          <MagneticButton
            href="https://github.com/example-user"
            external
            variant="outline"
          >
            <GithubIcon size={16} />
            GitHub
          </MagneticButton>
          <MagneticButton
            href="https://linkedin.com/in/example-user"
            external
            variant="outline"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </MagneticButton>
          <MagneticButton href="/resume.pdf" external variant="outline">
            <FileDown size={16} />
            이력서 다운로드
          </MagneticButton>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p className="mt-24 text-xs text-muted">
          © 2026 김민준. Built with Next.js & Framer Motion.
        </p>
      </FadeUp>
    </section>
  );
}
