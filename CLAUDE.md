# House of Games Project Memory

## Project Info
- **GitHub**: https://github.com/calvinorr/HoGQuestions
- **Backend**: http://localhost:3001 
- **Frontend**: http://localhost:5173
- **Node Version**: 22 (use `source ~/.nvm/nvm.sh && nvm use 22`)

## API Endpoints
- **Base URL**: http://localhost:3001/api
- **Games**: GET|POST|PUT|DELETE /api/games (22 House of Games types)
- **Questions**: GET|POST|PUT|DELETE /api/questions (with pagination, filtering)
- **Quiz Sessions**: GET|POST|PUT|DELETE /api/quiz-sessions
- **Health**: GET /api/health

## Development Commands
```bash
# Backend
cd backend && npm run dev
cd backend && npm run seed

# Frontend  
cd frontend && npm run dev

# Database
cd backend && npx prisma db push --force-reset && npm run seed
cd backend && npx prisma studio  # Visual database editor
```

## House of Games Data Structure
- **22 Game Types**: ANSWER_SMASH, RHYME_TIME, ANSWERS_IN_QUESTION, etc.
- **Seeded Questions**: Real examples from the BBC show
- **Difficulty Levels**: EASY, MEDIUM, HARD
- **Categories**: Movies, History, Geography, etc.

## AI Integration Plan
- **Jina.ai APIs**: Reader, Search, Grounding for content extraction
- **Question Generation**: QuizGecko, OpenAI free tier, Quillionz
- **Content Sources**: House of Games wiki, trivia databases

## Next Development Priorities
1. Frontend admin dashboard with React Router
2. Game management interface with shadcn/ui forms
3. Question CRUD with rich text editing
4. AI-powered question generation integration
5. Quiz session player interface

## Useful Claude Code Agents
- **git-workflow**: Automated Git operations and PR creation
- **test-runner**: Comprehensive testing and failure analysis  
- **dark-mode-specialist**: shadcn/ui dark mode implementation
- **context-fetcher**: Efficient documentation loading