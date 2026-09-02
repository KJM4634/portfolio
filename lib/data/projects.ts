export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  keywords?: string[];
  role: string;
  period: string;
  github?: string;
  demo?: string;
  award?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dsar-assist",
    title: "DSAR-Assist",
    summary:
      "구조대원이 착용한 4방향 AI 카메라로 잔해에 가려진 요구조자를 실시간 탐지하고, 관제센터와 전체 구조팀에 위치·신뢰도를 자동으로 연결하는 재난 인명탐지 시스템",
    description:
      "재난 현장에서 구조대원은 무전으로 상황을 보고하지만, 이 과정에서 지연과 누락이 발생하고 여러 팀이 같은 지점에 중복으로 출동하는 문제가 반복됩니다. DSAR-Assist는 구조대원이 착용한 4방향 AI 카메라로 잔해에 가려진 요구조자를 실시간으로 탐지하고, 위치와 신뢰도 정보를 관제센터와 전체 구조팀에 자동으로 전달해 이 문제를 데이터 흐름 자동화로 해결합니다.\n\n가장 크게 공들인 부분은 폐색(가려짐) 상황에서의 탐지 성능이었습니다. 기존 공개 데이터셋만으로는 잔해에 가려진 사람을 안정적으로 탐지하기 어려워, 재난 상황에 특화된 데이터 약 19만 장을 직접 구축해 모델을 학습시켰고, 이를 통해 가려진 상황에서도 탐지 정확도를 크게 끌어올렸습니다.\n\nJetson Orin Nano에 모델을 온디바이스로 올려 현장에서 바로 추론하고, GPS/IMU 센서 데이터를 융합해 정확한 위치 정보를 계산했습니다. 계산된 정보는 Node.js/React 기반 관제 시스템과 Kakao Map API를 통해 실시간으로 시각화되며, 전체 백엔드는 Oracle Cloud Infrastructure 위에서 운영했습니다.",
    tags: [
      "Python",
      "PyTorch",
      "Ultralytics YOLO11n",
      "ONNX Runtime",
      "NVIDIA Jetson Orin Nano",
      "Node.js",
      "React",
      "Kakao Map API",
      "Oracle Cloud Infrastructure",
      "GPS/IMU 센서 융합",
      "HTML5 Canvas",
    ],
    keywords: ["재난안전", "AI", "컴퓨터비전", "IoT", "임베디드", "재난로봇공학"],
    role: "경남대학교 컴퓨터공학부 졸업작품 · 팀 프로젝트",
    period: "2025 - 2026",
    featured: true,
  },
  {
    slug: "aws-ai-final-contest",
    title: "AWS AI 활용 파이널 공모전",
    summary:
      "Claude Code, Cursor 등 AI 코딩 툴로 비전공자도 코딩을 배우고, 작성한 코드가 실제로 동작하는 과정을 시각화해 보여주는 교육 플랫폼",
    description:
      "AI 코딩 도구를 활용하면 비전공자도 프로그래밍을 훨씬 쉽게 학습할 수 있다는 아이디어에서 시작한 프로젝트입니다. Claude Code, Cursor 같은 AI 코딩 툴로 작성한 코드가 내부적으로 어떻게 동작하는지 단계별로 시각화해서 보여주는 교육 플랫폼을 개발했고, 이 아이디어와 구현으로 우수상을 수상했습니다.",
    tags: ["AI 코딩 도구", "교육 플랫폼", "프론트엔드"],
    role: "AI 활용 개발",
    period: "2025",
    award: "🏆 우수상",
  },
  {
    slug: "buulgyeong-hackathon",
    title: "부울경 해커톤 — 입지 분석 서비스",
    summary:
      "창업 예정자를 위한 입지 분석 서비스. 부울경 지역을 동 단위 격자로 나눠 AI로 생존 가능성을 판단하고, 실제 가게 리뷰를 분석해 보완할 점을 시각화",
    description:
      "예비 창업자가 어디에 가게를 열어야 할지 판단하기 어렵다는 문제에서 출발한 프로젝트입니다. 부산·울산·경남 지역을 동 단위 격자로 나누고 AI 모델로 각 지역의 생존 가능성을 판단했습니다. 여기에 더해 실제 가게 리뷰 데이터를 수집·분석해 어떤 점이 부족하고 어떤 점을 보완하면 좋을지 설명하고 시각화하는 기능을 팀원으로 함께 구현했습니다.",
    tags: ["데이터 분석", "리뷰 분석", "지역 데이터"],
    role: "팀원",
    period: "2026",
  },
  {
    slug: "safe-walk-system",
    title: "Safe Walk System — 스마트 횡단보도",
    summary:
      "신호를 놓치기 쉬운 보행자와, 보행자를 미처 발견하지 못한 운전자 양쪽에 실시간 경고를 제공하는 스마트 횡단보도 시스템",
    description:
      "노인, 어린이, 외국인처럼 신호를 놓치기 쉬운 보행자와, 그 보행자를 미처 발견하지 못한 운전자 양쪽 모두에게 실시간으로 경고를 제공하는 스마트 횡단보도 시스템입니다. 경상대·창원대·인제대·경남대·창신대 5개 대학이 연합해 진행한 캡스톤 디자인 프로젝트로, 팀원으로 참여해 대상을 수상했습니다.",
    tags: ["스마트 횡단보도", "IoT", "보행자 안전"],
    role: "팀원 · 5개 대학 연합 캡스톤",
    period: "2025",
    award: "🏆 대상",
  },
  {
    slug: "gyeongnam-bigdata-contest",
    title: "경상남도 빅데이터 활용 공모전",
    summary:
      "창원시 골목상권의 공간환경 특성을 분석해 상권활성화 우선지역을 탐색하는 프로젝트를 팀장으로 총괄",
    description:
      "창원시 골목상권의 공간환경 특성을 분석해 상권활성화가 시급한 우선지역을 찾아내는 프로젝트입니다. 팀장으로서 데이터 수집과 전처리, 분석, 보고서 작성 전 과정을 총괄했습니다.",
    tags: ["공간 데이터 분석", "상권 분석", "데이터 시각화"],
    role: "팀장 · 데이터 수집/분석/보고서 총괄",
    period: "2026",
  },
  {
    slug: "changwon-bigdata-contest",
    title: "창원시 빅데이터 분석 공모전",
    summary:
      "전기차 보급 확대 정책에 대응해 창원시의 EV 보급·충전 인프라 실태를 분석하고, 시계열 예측으로 정책 목표 달성 가능성을 검증",
    description:
      "정부의 전기차(EV) 보급 확대 및 충전소 확충 정책에 대응하기 위해 창원시의 EV 보급 현황과 충전 인프라 실태를 분석했습니다. 시계열 예측을 통해 정책 목표 시점까지의 도달 가능 여부를 검증하고, 이를 바탕으로 충전소 입지와 설치 규모 확충 방향을 제시했습니다. 팀 내에서 데이터 전처리, 자료 수집, 분석, 보고서 작성을 맡았고, 4위를 기록했습니다.",
    tags: ["시계열 예측", "정책 데이터 분석", "데이터 전처리"],
    role: "데이터 전처리 · 분석 · 보고서 작성",
    period: "2025",
  },
];
