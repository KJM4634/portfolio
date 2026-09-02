export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "experience";
};

export const timeline: TimelineItem[] = [
  {
    period: "진학 예정",
    title: "인공지능 대학원 진학 예정",
    org: "대학원 미정",
    description:
      "세부 학교와 시기는 아직 정해지지 않았으며, 의료 AI를 중심으로 연구를 이어갈 계획입니다.",
    type: "education",
  },
  {
    period: "2025 - 2026",
    title: "컴퓨터공학부 졸업작품 · DSAR-Assist",
    org: "경남대학교",
    description:
      "재난 현장 인명탐지 및 실시간 구조연계 시스템을 팀 프로젝트로 개발했습니다.",
    type: "experience",
  },
  {
    period: "2026",
    title: "부울경 해커톤",
    org: "부산·울산·경남 연합 해커톤",
    description:
      "창업 예정자를 위한 입지 분석 서비스를 팀원으로 기획·개발했습니다.",
    type: "experience",
  },
  {
    period: "2026",
    title: "경상남도 빅데이터 활용 공모전",
    org: "경상남도",
    description:
      "팀장으로 창원시 골목상권 공간환경 분석 프로젝트의 데이터 수집·분석·보고서 작성을 총괄했습니다.",
    type: "experience",
  },
  {
    period: "2025",
    title: "캡스톤 디자인 · Safe Walk System 🏆 대상",
    org: "경상대·창원대·인제대·경남대·창신대 5개 대학 연합",
    description:
      "신호를 놓치기 쉬운 보행자와 운전자 양쪽에 실시간 경고를 제공하는 스마트 횡단보도 시스템을 팀원으로 개발했습니다.",
    type: "experience",
  },
  {
    period: "2025",
    title: "AWS AI 활용 파이널 공모전 🏆 우수상",
    org: "AWS",
    description:
      "AI 코딩 도구로 비전공자의 코딩 학습과 실행 과정을 시각화하는 교육 플랫폼을 개발했습니다.",
    type: "experience",
  },
  {
    period: "2025",
    title: "창원시 빅데이터 분석 공모전",
    org: "창원시",
    description:
      "전기차 보급·충전 인프라 실태를 분석하고 시계열 예측으로 정책 목표 달성 가능성을 검증했습니다. (4위)",
    type: "experience",
  },
  {
    period: "재학 중 · 2027.02 졸업 예정",
    title: "컴퓨터공학부 소프트웨어전공 학사",
    org: "경남대학교",
    description: "4학년 2학기 재학 중이며, 소프트웨어전공으로 학사 과정을 마무리하고 있습니다.",
    type: "education",
  },
];
