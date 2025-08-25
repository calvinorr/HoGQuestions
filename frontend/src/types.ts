// Types matching our Prisma schema

export type GameType = 
  | 'ANSWER_SMASH'
  | 'RHYME_TIME'
  | 'ANSWERS_IN_QUESTION'
  | 'BACKWARDS_ROUND'
  | 'SORRY_WRONG_NUMBER'
  | 'WELL_DONE_IF_YOU_SAID'
  | 'INTERNET_HISTORY'
  | 'POP_ART'
  | 'CAN_YOU_FEEL_IT'
  | 'BROKEN_KARAOKE'
  | 'SIZE_MATTERS'
  | 'THE_NICE_ROUND'
  | 'THE_RICH_LIST'
  | 'BUILD_YOUR_OWN'
  | 'CORRECTION_CENTRE'
  | 'DIM_SUMS'
  | 'DISTINCTLY_AVERAGE'
  | 'WHERE_IS_KAZAKHSTAN'
  | 'PUT_FINGER_ON_IT'
  | 'IS_IT_ME'
  | 'CINE_NYMS'
  | 'AND_ANSWER_ISNT';

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface Game {
  id: string;
  name: string;
  type: GameType;
  description?: string;
  rules?: string;
  round?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  questions?: Question[];
}

export interface Question {
  id: string;
  gameId: string;
  content: string;
  answer: string;
  hints?: string;
  explanation?: string;
  difficulty: Difficulty;
  category?: string;
  points: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  audioUrl?: string;
  metadata?: string;
  game?: Game;
}

export interface QuizSession {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  questions?: SessionQuestion[];
}

export interface SessionQuestion {
  id: string;
  sessionId: string;
  questionId: string;
  order: number;
  pointsAwarded?: number;
  timeLimit?: number;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  success: boolean;
}