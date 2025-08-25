import type { Game, Question, QuizSession, ApiResponse, PaginatedResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiError extends Error {
  public status?: number;
  
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new ApiError('Resource not found', 404);
        }
        if (response.status === 500) {
          throw new ApiError('Server error', 500);
        }
        throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      retryCount++;
      if (error instanceof ApiError) {
        if (error.status === 404 || retryCount >= maxRetries) {
          throw error;
        }
      } else if (retryCount >= maxRetries) {
        throw new ApiError('Network error occurred');
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
    }
  }

  throw new ApiError('Max retries exceeded');
}

// Health check function
export const healthApi = {
  check: async () => {
    try {
      const data = await fetchApi<{ status: string; timestamp: string }>('/health');
      return { data, success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Health check failed' };
    }
  },
};

// Game API functions
export const gameApi = {
  getAll: async () => {
    try {
      const data = await fetchApi<Game[]>('/games');
      return { data, success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch games',
        data: []
      };
    }
  },
  
  getById: async (id: string) => {
    try {
      const data = await fetchApi<Game>(`/games/${id}`);
      return { data, success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch game',
        data: null
      };
    }
  },
  
  create: async (gameData: Omit<Game, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const data = await fetchApi<Game>('/games', {
        method: 'POST',
        body: JSON.stringify(gameData),
      });
      return { data, success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create game',
        data: null
      };
    }
  },
  
  update: async (id: string, gameData: Partial<Game>) => {
    try {
      const data = await fetchApi<Game>(`/games/${id}`, {
        method: 'PUT',
        body: JSON.stringify(gameData),
      });
      return { data, success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update game',
        data: null
      };
    }
  },
  
  delete: async (id: string) => {
    try {
      await fetchApi<void>(`/games/${id}`, {
        method: 'DELETE',
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete game'
      };
    }
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