import { Mail } from "lucide-react";
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
          <MagneticButton href="mailto:ssjm524@naver.com" variant="solid">
            <Mail size={16} />
            이메일 보내기
          </MagneticButton>
          <MagneticButton
            href="https://github.com/KJM4634"
            external
            variant="outline"
          >
            <GithubIcon size={16} />
            GitHub
          </MagneticButton>
          {/* TODO: LinkedIn URL 추가 */}
          <MagneticButton href="#" variant="outline">
            <LinkedinIcon size={16} />
            LinkedIn
          </MagneticButton>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p className="mt-24 text-xs text-muted">
          © 2026 김정민. Built with Next.js & Framer Motion.
        </p>
      </FadeUp>
    </section>
  );
}
