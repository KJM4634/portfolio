export type SkillItem = {
  name: string;
  learning?: boolean;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    category: "Language",
    items: [{ name: "Python" }],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", learning: true },
      { name: "YOLO (Ultralytics)", learning: true },
      { name: "ONNX Runtime", learning: true },
    ],
  },
  {
    category: "Focus Areas",
    items: [
      { name: "데이터 수집·전처리" },
      { name: "통계 분석" },
      { name: "시계열 예측" },
    ],
  },
];
