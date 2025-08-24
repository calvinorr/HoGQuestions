# House of Games Quiz Application

A modern web application for creating and managing quiz questions in the style of BBC's "House of Games" TV show, featuring AI-powered question generation.

## 🎮 About House of Games

Based on the popular BBC quiz show hosted by Richard Osman, this application includes authentic game types like:

- **Answer Smash** - Combine picture and question answers
- **Rhyme Time** - Find pairs of answers that rhyme  
- **The Answer's In The Question** - Anagram puzzles
- **Sorry, Wrong Number** - Mathematical answer modifications
- **Internet History** - Historical figures via hashtags
- And 17+ more game types from the show!

## 🏗️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **shadcn/ui** + Tailwind CSS for styling
- **React Router** for navigation

### Backend  
- **Node.js 22** + Express.js + TypeScript
- **Prisma ORM** with SQLite database
- **RESTful API** with full CRUD operations

### AI Integration
- **Jina.ai API** for content extraction and grounding
- **Free AI APIs** for question generation (QuizGecko, OpenAI, etc.)

## 🚀 Getting Started

### Prerequisites
- Node.js 22+ (use `nvm use 22`)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/calvinorr/HoGQuestions.git
cd HoGQuestions
```

2. Set up the backend:
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

3. Set up the frontend (in new terminal):
```bash
cd frontend  
npm install
npm run dev
```

## 📋 API Endpoints

- **Games**: `GET|POST|PUT|DELETE /api/games` - Manage game types
- **Questions**: `GET|POST|PUT|DELETE /api/questions` - CRUD with filtering
- **Quiz Sessions**: `GET|POST|PUT|DELETE /api/quiz-sessions` - Session management
- **Health**: `GET /api/health` - Server status

## 🎯 Features

- ✅ Complete House of Games database schema
- ✅ Seeded with authentic game data  
- ✅ Full CRUD API with TypeScript
- 🚧 Admin dashboard (in progress)
- 🚧 AI question generation
- 📋 Quiz session management
- 📊 Question analytics and reporting

## 🤖 AI Integration

The application integrates multiple AI services:
- **Jina.ai Reader/Search API** for content extraction  
- **Question generation** from various free APIs
- **Content validation** and fact-checking

## 🔧 Development

Built with modern development practices:
- TypeScript throughout
- Prisma for type-safe database operations
- ESLint + Prettier for code quality
- Hot reload for both frontend and backend

## 📝 License

MIT License - see LICENSE file for details.

---

*Inspired by Richard Osman's House of Games on BBC*