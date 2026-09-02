export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  role: string;
  period: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "vision-lab",
    title: "VisionLab",
    summary:
      "적은 수의 라벨링 데이터로도 강건하게 학습하는 few-shot 이미지 분류 파이프라인",
    description:
      "소규모 이미지셋 환경에서 일반적인 CNN 기반 분류기가 쉽게 과적합되는 문제를 해결하기 위해 시작한 프로젝트입니다.\n\nVision Transformer 백본에 few-shot learning 기법(prototypical network)을 결합하고, 데이터 증강 전략을 비교 실험하여 클래스당 10장 미만의 데이터로도 준수한 정확도를 확보했습니다. 실험 결과와 재현 코드를 정리해 팀 내 세미나에서 발표했습니다.",
    tags: ["PyTorch", "Vision Transformer", "Few-shot Learning"],
    role: "팀 프로젝트 · 모델링 & 실험 설계",
    period: "2025.03 - 2025.08",
    github: "https://github.com/example-user/vision-lab",
    demo: "https://vision-lab-demo.example.com",
  },
  {
    slug: "paper-digest",
    title: "PaperDigest",
    summary: "논문을 업로드하면 핵심 내용을 요약하고 질문에 답하는 RAG 기반 리서치 어시스턴트",
    description:
      "논문을 읽는 데 드는 시간을 줄이고자 만든 개인 프로젝트입니다. PDF를 업로드하면 구조를 파싱해 섹션별 요약을 생성하고, 임베딩 기반 검색으로 논문 내용에 대한 질의응답이 가능합니다.\n\nLangChain으로 RAG 파이프라인을 구성했고, 청크 분할 전략과 임베딩 모델을 바꿔가며 답변 정확도를 비교했습니다. 개인적으로 논문 스터디를 진행하며 실제로 사용해보고 있습니다.",
    tags: ["LLM", "RAG", "LangChain", "FastAPI"],
    role: "개인 프로젝트 · 풀스택 개발",
    period: "2025.09 - 2025.12",
    github: "https://github.com/example-user/paper-digest",
    demo: "https://paper-digest-demo.example.com",
  },
  {
    slug: "campus-flow",
    title: "Campus Flow",
    summary: "교내 시설 이용 데이터를 기반으로 혼잡도를 예측하는 웹 서비스",
    description:
      "학교 도서관과 식당의 혼잡도를 미리 알고 싶다는 주변의 요청에서 시작된 프로젝트입니다. 시간대별 출입 로그 데이터를 수집해 시계열 모델로 혼잡도를 예측하고, 결과를 실시간 대시보드로 제공했습니다.\n\n프론트엔드부터 예측 모델 서빙까지 전체 파이프라인을 팀원 3명과 함께 설계했으며, 교내 해커톤에서 우수상을 수상했습니다.",
    tags: ["Next.js", "Node.js", "Time Series", "PostgreSQL"],
    role: "팀 프로젝트 · 백엔드 & 모델 서빙",
    period: "2024.09 - 2024.11",
    github: "https://github.com/example-user/campus-flow",
  },
  {
    slug: "neuroseg",
    title: "NeuroSeg",
    summary: "U-Net 기반 뇌 MRI 영상 분할 모델 연구",
    description:
      "학부 연구생으로 참여한 의료 영상 분석 프로젝트입니다. 뇌 MRI 영상에서 병변 영역을 분할하는 U-Net 계열 모델을 구현하고, 손실 함수와 데이터 증강 방식을 바꿔가며 Dice score를 개선했습니다.\n\n소규모 의료 데이터셋 특유의 클래스 불균형 문제를 다루면서 평가 지표 설계의 중요성을 배웠습니다.",
    tags: ["PyTorch", "Medical Imaging", "Segmentation"],
    role: "학부 연구생 · 모델 실험",
    period: "2024.07 - 2024.12",
    github: "https://github.com/example-user/neuroseg",
  },
  {
    slug: "talk-tutor",
    title: "TalkTutor",
    summary: "외국인 학습자를 위한 대화형 한국어 튜터링 챗봇",
    description:
      "한국어를 배우는 교환학생 친구를 위해 시작한 사이드 프로젝트입니다. 사용자의 발화를 문법적으로 교정하고, 자연스러운 대체 표현을 제안하는 대화형 튜터를 만들었습니다.\n\n프롬프트 엔지니어링과 few-shot 예시 구성을 반복적으로 개선하며 응답의 일관성을 높였고, 실제 사용자 피드백을 받아 기능을 다듬었습니다.",
    tags: ["LLM", "Prompt Engineering", "React"],
    role: "개인 프로젝트",
    period: "2024.03 - 2024.05",
    github: "https://github.com/example-user/talk-tutor",
    demo: "https://talk-tutor-demo.example.com",
  },
];
