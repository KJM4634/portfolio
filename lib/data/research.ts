export type ResearchItem = {
  category: "연구 참여" | "관심 분야";
  title: string;
  description: string;
  status?: "ongoing";
};

export const research: ResearchItem[] = [
  {
    category: "연구 참여",
    title: "학부 연구생 · 의료 AI 연구실",
    description:
      "교수님 연구실에서 진행 중인 우수연구-핵심연구(기본연구B) 과제에 학부 연구생으로 참여해 의료 데이터를 활용한 예측 모델을 연구하고 있습니다.",
    status: "ongoing",
  },
  {
    category: "관심 분야",
    title: "의료 데이터 분석 및 예측",
    description:
      "제한된 임상 데이터에서도 신뢰할 수 있는 예측 모델을 만드는 문제에 가장 큰 관심이 있습니다. 데이터 전처리와 통계적 검증에 특히 무게를 두고 접근합니다.",
  },
  {
    category: "관심 분야",
    title: "컴퓨터 비전 기반 탐지",
    description:
      "가려지거나 조건이 좋지 않은 상황에서도 강건하게 동작하는 탐지 모델에 관심이 있습니다. DSAR-Assist 프로젝트에서 폐색 상황의 탐지 성능을 다루며 이어진 관심사입니다.",
  },
  {
    category: "관심 분야",
    title: "재난·안전 도메인에 AI 적용하기",
    description:
      "구조·안전처럼 실패 비용이 큰 도메인에서 AI가 실질적으로 도움이 되려면 무엇이 필요한지, 프로젝트 경험을 통해 계속 고민하고 있습니다.",
  },
];
