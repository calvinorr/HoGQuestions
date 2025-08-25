# House of Games Project Memory

## Project Info
- **GitHub**: https://github.com/calvinorr/HoGQuestions
- **Backend**: http://localhost:3001 
- **Frontend**: http://localhost:5173
- **Node Version**: 22 (CRITICAL: `source ~/.nvm/nvm.sh && nvm use 22` before any npm commands)

## API Endpoints
- **Base URL**: http://localhost:3001/api
- **Games**: GET|POST|PUT|DELETE /api/games (22 House of Games types)
- **Questions**: GET|POST|PUT|DELETE /api/questions (with pagination, filtering)
- **Quiz Sessions**: GET|POST|PUT|DELETE /api/quiz-sessions
- **Health**: GET /api/health

## Development Commands
```bash
# ALWAYS run Node.js 22 first
source ~/.nvm/nvm.sh && nvm use 22

# Backend
cd backend && npm run dev
cd backend && npm run seed

# Frontend  
cd frontend && npm run dev

# Database
cd backend && npx prisma db push --force-reset && npm run seed
cd backend && npx prisma studio  # Visual database editor
```

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + shadcn/ui + Tailwind CSS
- **Backend**: Node.js 22 + Express + TypeScript + Prisma ORM
- **Database**: SQLite with comprehensive House of Games schema
- **AI Integration**: Ready for Jina.ai API integration

## House of Games Data Structure
- **22 Game Types**: ANSWER_SMASH, RHYME_TIME, ANSWERS_IN_QUESTION, etc.
- **Seeded Questions**: Real examples from the BBC show
- **Difficulty Levels**: EASY, MEDIUM, HARD
- **Categories**: Movies, History, Geography, etc.

## Current Development Status
✅ **Completed**:
- React 18 + TypeScript project with Vite
- shadcn/ui components and Tailwind CSS setup
- Express.js backend with TypeScript
- Prisma ORM with SQLite database
- Complete House of Games database schema
- Full CRUD API endpoints (games, questions, quiz-sessions)
- Git repository setup and synchronized with GitHub
- Basic game management functionality (CRUD operations working)
- GameForm component with validation and all 22 game types
- Game list component with proper table display and actions
- **Modern Admin Dashboard** with responsive design and glass-morphism effects
- **Navigation system** with React Router and proper routing structure
- **API service layer** with comprehensive error handling and TypeScript types
- **Loading states and skeleton loaders** for better UX
- **Professional UI components** using shadcn/ui with custom styling
- **Responsive layout** with proper grid system and mobile optimization
- **Search functionality** in navigation header
- **Activity tracking and shortcuts** panels in dashboard
- **Quick stats display** with animated loading states
- **Game management interface** with add/edit/delete functionality
- **Question management** interface (in progress)
- **Session builder** interface (in progress)

🔧 **In Progress**:
- Question management interface completion
- Quiz session builder functionality
- Player management system
- Real-time data integration with backend APIs
- Advanced search and filtering capabilities

🚧 **Next Phase**:
- AI question generation integration
- Quiz session execution interface
- Player analytics and reporting
- Mobile app optimization
- Performance optimization and testing


🔧 **Technical Note**: 
Backend and game management functionality is solid. The problem is entirely frontend design/UX. Need a designer/frontend specialist to create a truly modern, visually appealing interface.

## Useful Claude Code Agents
- **git-workflow**: Automated Git operations and PR creation (TESTED ✅)
- **context-fetcher**: Efficient documentation loading (TESTED ✅) 
- **dark-mode-specialist**: shadcn/ui dark mode implementation (TESTED ✅)
- **test-runner**: Use later once we have actual components to test

## Key Files Structure
```
HoGQuestions/
├── backend/
│   ├── src/
│   │   ├── routes/ (games.ts, questions.ts, quiz-sessions.ts)
│   │   ├── index.ts (Express server)
│   │   └── db.ts (Prisma client)
│   ├── prisma/
│   │   ├── schema.prisma (House of Games schema)
│   │   └── seed.ts (Real House of Games data)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── lib/utils.ts (shadcn/ui utilities)
│   │   └── index.css (Tailwind + CSS custom properties)
│   ├── components.json (shadcn/ui config)
│   └── package.json
└── README.md (Project documentation)
```

## Project Foundation Summary
**Solid full-stack foundation** with authentic House of Games data, modern tech stack, and ready for frontend development. Database contains 22 real game types from the BBC show with sample questions. API is fully functional and tested. Ready to build the admin interface!