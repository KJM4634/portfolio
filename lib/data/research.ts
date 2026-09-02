export type ResearchItem = {
  category: "관심 분야" | "논문 리뷰" | "연구 경험";
  title: string;
  description: string;
};

export const research: ResearchItem[] = [
  {
    category: "관심 분야",
    title: "효율적인 LLM 파인튜닝 (PEFT / LoRA)",
    description:
      "제한된 자원으로 대규모 언어모델을 특정 도메인에 맞게 적응시키는 방법에 관심이 있습니다.",
  },
  {
    category: "관심 분야",
    title: "Retrieval-Augmented Generation의 신뢰성",
    description:
      "검색 결과의 품질이 생성 결과의 사실성에 미치는 영향을 정량적으로 분석하는 문제를 살펴보고 있습니다.",
  },
  {
    category: "논문 리뷰",
    title: "Attention Is All You Need",
    description: "Transformer 구조를 처음부터 구현하며 셀프 어텐션의 동작 방식을 정리했습니다.",
  },
  {
    category: "논문 리뷰",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    description:
      "저랭크 행렬 분해를 통한 효율적 파인튜닝 기법을 스터디하고 소규모 모델에 직접 적용해봤습니다.",
  },
  {
    category: "연구 경험",
    title: "학부 연구생 · 의료 영상 분할",
    description:
      "U-Net 기반 분할 모델의 손실 함수를 개선하며 논문 작성과 실험 재현의 기본기를 익혔습니다.",
  },
];
