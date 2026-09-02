import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import Nav from "@/components/nav/Nav";
import SideDotNav from "@/components/nav/SideDotNav";
import CustomCursor from "@/components/motion/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "김민준 — AI Researcher",
    template: "%s | 김민준",
  },
  description:
    "컴퓨터공학을 전공하고 AI 대학원 진학을 준비하는 김민준의 포트폴리오입니다.",
  openGraph: {
    title: "김민준 — AI Researcher",
    description:
      "컴퓨터공학을 전공하고 AI 대학원 진학을 준비하는 김민준의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <CustomCursor />
        <Nav />
        <SideDotNav />
        {children}
      </body>
    </html>
  );
}
