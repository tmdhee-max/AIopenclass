export interface Observation {
  id: string;
  createdAt: string;
  period: string;
  classId: string;
  parentName: string;
  studentName: string;
  feedback: string;
}

export const mockObservations: Observation[] = [
  {
    id: "1",
    createdAt: "2024-05-16T10:15:00Z",
    period: "2",
    classId: "1-1",
    parentName: "김철수",
    studentName: "김민준",
    feedback: "수업이 매우 활기차고 아이들이 AI 도구를 활용하는 모습이 인상적이었습니다. 선생님의 열정이 느껴졌습니다.",
  },
  {
    id: "2",
    createdAt: "2024-05-16T10:20:00Z",
    period: "2",
    classId: "1-2",
    parentName: "이영희",
    studentName: "이서윤",
    feedback: "실생활 예시를 들어 AI 윤리에 대해 배우는 과정이 매우 유익해 보였습니다. 아이가 즐거워하네요.",
  },
  {
    id: "3",
    createdAt: "2024-05-16T11:30:00Z",
    period: "3",
    classId: "2-1",
    parentName: "박지성",
    studentName: "박하준",
    feedback: "코딩을 직접 해보며 문제를 해결하는 과정이 보기 좋았습니다. 장비 지원이 더 늘어났으면 좋겠습니다.",
  },
  {
    id: "4",
    createdAt: "2024-05-16T11:45:00Z",
    period: "3",
    classId: "3-2",
    parentName: "최유진",
    studentName: "최시우",
    feedback: "AI실 환경이 매우 쾌적하고 최신 장비가 갖춰져 있어 아이들이 집중하기 좋은 환경인 것 같습니다.",
  },
  {
    id: "5",
    createdAt: "2024-05-16T10:30:00Z",
    period: "2",
    classId: "2-2",
    parentName: "정미경",
    studentName: "정지호",
    feedback: "영어 수업에서 AI 번역기를 활용해 원어민처럼 발음 연습을 하는 모습이 신기했습니다.",
  }
];
