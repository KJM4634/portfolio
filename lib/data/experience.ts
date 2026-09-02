export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "experience";
};

export const timeline: TimelineItem[] = [
  {
    period: "2027.09 (예정)",
    title: "인공지능학과 석사 과정",
    org: "OO대학교 대학원",
    description:
      "효율적인 언어모델 학습과 추론을 주제로 연구를 이어갈 예정입니다.",
    type: "education",
  },
  {
    period: "2025.06 - 2025.08",
    title: "AI 엔지니어 인턴",
    org: "OO 스타트업",
    description:
      "추천 시스템의 후보 생성 모델을 개선하고, 오프라인 지표 기준 CTR 예측 정확도를 개선했습니다.",
    type: "experience",
  },
  {
    period: "2024.07 - 2024.12",
    title: "학부 연구생",
    org: "OO대학교 AI/ML 연구실",
    description:
      "의료 영상 분할 연구에 참여하며 논문 리뷰, 실험 설계, 결과 정리를 경험했습니다.",
    type: "experience",
  },
  {
    period: "2022.03 - 2027.02 (예정)",
    title: "컴퓨터공학부 학사",
    org: "OO대학교",
    description:
      "알고리즘, 시스템, 머신러닝 전공 트랙을 이수하며 소프트웨어와 AI의 기초를 다졌습니다.",
    type: "education",
  },
];
