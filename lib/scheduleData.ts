export interface ScheduleInfo {
  subject: string;
  topic: string;
  location: string;
}

export const scheduleData: Record<string, Record<string, ScheduleInfo>> = {
  "2": {
    "1-1": { subject: "보건", topic: "AI 헬스케어 기기와 스마트 건강 관리", location: "1-1교실" },
    "1-2": { subject: "과학", topic: "인공지능을 활용한 기후 변화 분석 및 시뮬레이션", location: "1-2교실" },
    "2-1": { subject: "수학", topic: "인공지능 알고리즘의 기초 - 선형 함수와 예측 모델", location: "2-1교실" },
    "2-2": { subject: "영어", topic: "AI 번역 엔진과 대형 언어 모델(LLM)을 활용한 토론 학습", location: "영어실" },
    "3-1": { subject: "사회", topic: "인공지능 시대의 저작권과 디지털 윤리", location: "3-1교실" },
    "3-2": { subject: "수학", topic: "생성형 AI를 활용한 기하학적 패턴 설계와 수학적 시각화", location: "AI실" },
    "3-3": { subject: "과학", topic: "AI 기계 학습 모델을 이용한 생태계 교란 생물 탐지", location: "3-3교실" },
  },
  "3": {
    "1-1": { subject: "기가", topic: "3D 프린팅과 AI 모델링을 통한 스마트 홈 제품 설계", location: "1-1교실" },
    "1-2": { subject: "도덕", topic: "자율주행 차량의 트롤리 딜레마와 AI 알고리즘의 편향성 탐구", location: "1-2교실" },
    "2-1": { subject: "국어", topic: "AI 챗봇과의 대화를 통한 비판적 읽기 및 논설문 쓰기", location: "도서관" },
    "2-2": { subject: "체육", topic: "AI 모션 인식 기술을 활용한 개인별 자세 분석 및 맞춤형 피드백", location: "AI실" },
    "3-1": { subject: "국어", topic: "생성형 AI 작가와 협동하여 디지털 스토리텔링 소설 창작하기", location: "3-1교실" },
    "3-2": { subject: "미술", topic: "생성형 AI(Midjourney) 프롬프트 엔지니어링을 통한 현대 미술 창작", location: "3-2교실" },
    "3-3": { subject: "영어", topic: "AI 음성인식 에이전트와 실시간 대화를 통한 시사 이슈 인터뷰", location: "3-3교실" },
  }
};
