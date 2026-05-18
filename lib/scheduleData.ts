export interface ScheduleInfo {
  subject: string;
  topic: string;
  location: string;
}

export const scheduleData: Record<string, Record<string, ScheduleInfo>> = {
  "2": {
    "1-1": { subject: "보건", topic: "생명을 살리는 4분의 기적: 심폐소생술(CPR)과 자동심장충격기(AED)", location: "1-1교실" },
    "1-2": { subject: "과학", topic: "첨단 과학기술이 가져올 미래 사회의 변화 탐구하기", location: "1-2교실" },
    "2-1": { subject: "수학", topic: "연립일차방정식을 활용하는 문제를 직접 만들어 해결하기", location: "2-1교실" },
    "2-2": { subject: "영어", topic: "주요 어휘 복습 및 동사 3단 변화 익히기", location: "영어실" },
    "3-1": { subject: "사회", topic: "일생 동안의 경제 생활", location: "3-1교실" },
    "3-2": { subject: "수학", topic: "이차방정식의 근의 공식", location: "AI실" },
    "3-3": { subject: "과학", topic: "과학에서의 일과 일의 양 구하기", location: "3-3교실" },
  },
  "3": {
    "1-1": { subject: "기가", topic: "청소년기의 건강한 자아 정체성", location: "1-1교실" },
    "1-2": { subject: "도덕", topic: "도덕적 인격자로서의 자기 성찰을 하여 자서전 만들기", location: "1-2교실" },
    "2-1": { subject: "국어", topic: "주도적인 책 읽기를 통한 학습 실전 적용 및 독서 내면화", location: "도서관" },
    "2-2": { subject: "체육", topic: "AI를 활용한 씨름 기술별 그림책 제작하기", location: "AI실" },
    "3-1": { subject: "국어", topic: "음운의 개념과 종류", location: "3-1교실" },
    "3-2": { subject: "미술", topic: "마음을 전하는 음식 모형 도시락 제작", location: "3-2교실" },
    "3-3": { subject: "영어", topic: "관계대명사의 계속적 용법 이해 및 적용", location: "3-3교실" },
  }
};
