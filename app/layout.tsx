import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import Nav from "@/components/nav/Nav";
import SideDotNav from "@/components/nav/SideDotNav";
import CustomCursor from "@/components/motion/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "김정민 — Medical AI & Data",
    template: "%s | 김정민",
  },
  description:
    "경남대학교 컴퓨터공학부에서 의료 AI와 데이터 분석·예측을 공부하며 인공지능 대학원 진학을 준비하는 김정민의 포트폴리오입니다.",
  openGraph: {
    title: "김정민 — Medical AI & Data",
    description:
      "경남대학교 컴퓨터공학부에서 의료 AI와 데이터 분석·예측을 공부하며 인공지능 대학원 진학을 준비하는 김정민의 포트폴리오입니다.",
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
