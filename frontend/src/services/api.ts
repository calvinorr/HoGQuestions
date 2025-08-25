import type { Game, Question, QuizSession, ApiResponse, PaginatedResponse } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

class ApiError extends Error {
  public status?: number;
  
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error occurred');
  }
}

// Game API functions
export const gameApi = {
  getAll: async () => {
    const data = await fetchApi<Game[]>('/games');
    return { data, success: true };
  },
  
  getById: async (id: string) => {
    const data = await fetchApi<Game>(`/games/${id}`);
    return { data, success: true };
  },
  
  create: async (gameData: Omit<Game, 'id' | 'createdAt' | 'updatedAt'>) => {
    const data = await fetchApi<Game>('/games', {
      method: 'POST',
      body: JSON.stringify(gameData),
    });
    return { data, success: true };
  },
  
  update: async (id: string, gameData: Partial<Game>) => {
    const data = await fetchApi<Game>(`/games/${id}`, {
      method: 'PUT',
      body: JSON.stringify(gameData),
    });
    return { data, success: true };
  },
  
  delete: async (id: string) => {
    await fetchApi<void>(`/games/${id}`, {
      method: 'DELETE',
    });
    return { success: true };
  },
};

// Question API functions
export const questionApi = {
  getAll: (params?: { 
    page?: number; 
    limit?: number; 
    gameId?: string; 
    difficulty?: string;
    category?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const query = searchParams.toString();
    return fetchApi<PaginatedResponse<Question>>(`/questions${query ? `?${query}` : ''}`);
  },
  
  getById: (id: string) => fetchApi<ApiResponse<Question>>(`/questions/${id}`),
  
  create: (questionData: Omit<Question, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<ApiResponse<Question>>('/questions', {
      method: 'POST',
      body: JSON.stringify(questionData),
    }),
  
  update: (id: string, questionData: Partial<Question>) =>
    fetchApi<ApiResponse<Question>>(`/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(questionData),
    }),
  
  delete: (id: string) =>
    fetchApi<ApiResponse<void>>(`/questions/${id}`, {
      method: 'DELETE',
    }),
};

// Quiz Session API functions
export const quizSessionApi = {
  getAll: () => fetchApi<ApiResponse<QuizSession[]>>('/quiz-sessions'),
  
  getById: (id: string) => fetchApi<ApiResponse<QuizSession>>(`/quiz-sessions/${id}`),
  
  create: (sessionData: Omit<QuizSession, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<ApiResponse<QuizSession>>('/quiz-sessions', {
      method: 'POST',
      body: JSON.stringify(sessionData),
    }),
  
  update: (id: string, sessionData: Partial<QuizSession>) =>
    fetchApi<ApiResponse<QuizSession>>(`/quiz-sessions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(sessionData),
    }),
  
  delete: (id: string) =>
    fetchApi<ApiResponse<void>>(`/quiz-sessions/${id}`, {
      method: 'DELETE',
    }),
};

export { ApiError };