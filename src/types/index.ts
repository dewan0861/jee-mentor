export type Subject = 'physics' | 'chemistry' | 'mathematics';

export type QuestionType = 'single_mcq' | 'multi_mcq' | 'numerical';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type MistakeCategory =
  | 'calculation_error'
  | 'formula_forgotten'
  | 'conceptual_gap'
  | 'misread_question'
  | 'time_pressure'
  | 'unattempted';

export interface Question {
  id: string;
  subject: Subject;
  chapterId: string;
  topicId: string;
  type?: QuestionType;
  difficulty: Difficulty;
  questionText?: string;
  text?: string; // alias for questionText
  options?: string[]; // for single_mcq & multi_mcq
  correctAnswer: string | string[] | number;
  numericalTolerance?: number;
  explanation?: string;
  solution?: string; // alias for explanation
  concepts?: string[];
  hints?: string[]; // alias for concepts
  estimatedTimeSec?: number;
  marks?: number;
  negativeMarks?: number;
  pyqYear?: number;
  year?: number; // alias for pyqYear
  pyqShift?: string;
  examType?: string;
  classLevel?: number;
  isAiGenerated?: boolean;
  trap?: string;
  shortcut?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  keyFormulas?: string[];
  prerequisites?: string[];
  estimatedHours: number;
  isHighWeightage?: boolean;
}

export interface ChapterGuide {
  overview: string;
  ncertPointers: string[];
  commonTraps: string[];
  shortcutsVsConcepts: string[];
}

export interface Chapter {
  id: string;
  subject: Subject;
  classLevel: 11 | 12;
  name: string;
  unit: string;
  weightage: 'high' | 'medium' | 'low';
  topics: Topic[];
  formulaList: string[];
  isRationalizedJEE2027: boolean; // true = retained in current JEE 2027 syllabus
  ncertPointers?: string[];
  commonTraps?: string[];
  shortcutsVsConcepts?: string[];
  guide?: ChapterGuide;
}

export interface Attempt {
  id: string;
  questionId: string;
  subject: Subject;
  chapterId: string;
  topicId: string;
  selectedAnswer: string | string[];
  isCorrect: boolean;
  timeSpentSec: number;
  mistakeCategory?: MistakeCategory;
  timestamp: number;
  notes?: string;
}

export interface ErrorBookEntry {
  questionId: string;
  question: Question;
  firstFailedAt: number;
  lastAttemptAt: number;
  attemptCount: number;
  failureCount: number;
  resolved: boolean;
  mistakeCategory: MistakeCategory;
  studentNotes?: string;
  srsStage?: 1 | 2 | 3; // 1 = 24h review, 2 = 7d review, 3 = 21d final review
  nextReviewDue?: number; // timestamp in ms when review is due
  masteryScore?: number; // 0 to 100 percentage
}

export interface TestSession {
  id: string;
  title: string;
  type: 'chapter_test' | 'topic_test' | 'full_mock';
  subject?: Subject;
  durationMinutes: number;
  totalQuestions: number;
  questions: Question[];
  answers: Record<string, string | string[]>;
  markedForReview: Record<string, boolean>;
  timeSpentPerQuestion: Record<string, number>;
  startedAt: number;
  completedAt?: number;
  score?: number;
  maxScore?: number;
  accuracy?: number;
  isSubmitted: boolean;
}

export type TutorMode = 'socratic' | 'concept' | 'doubt' | 'formula' | 'quick_hint';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  mode?: TutorMode;
  questionContext?: {
    questionText: string;
    subject: Subject;
    chapterName: string;
  };
}
