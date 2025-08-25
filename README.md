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

- ✅ Complete House of Games database schema with 22 authentic game types
- ✅ Seeded with real BBC House of Games data
- ✅ Full CRUD API with TypeScript and comprehensive error handling
- ✅ **Modern Admin Dashboard** with glass-morphism design and responsive layout
- ✅ **Game Management Interface** with full CRUD operations
- ✅ **Navigation System** with React Router and professional UI
- ✅ **API Service Layer** with proper TypeScript types and error handling
- ✅ **Loading States & Skeleton Loaders** for optimal user experience
- ✅ **Professional UI Components** using shadcn/ui with custom styling
- 🚧 Question Management Interface (in progress)
- 🚧 Quiz Session Builder (in progress)
- 🚧 Player Management System (in progress)
- 🚧 Real-time data integration with backend APIs
- 🚧 AI question generation
- 📊 Question analytics and reporting

## 🤖 AI Integration

The application integrates multiple AI services:
- **Jina.ai Reader/Search API** for content extraction  
- **Question generation** from various free APIs
- **Content validation** and fact-checking

## 📈 Current Progress

### ✅ Completed Features
- **Full-stack architecture** with React 18 + Node.js 22
- **Modern admin dashboard** with glass-morphism design and responsive layout
- **Complete game management system** with all 22 House of Games types
- **Professional navigation system** with React Router and search functionality
- **Comprehensive API service layer** with TypeScript types and error handling
- **Loading states and skeleton loaders** for optimal user experience
- **shadcn/ui components** with custom styling and Tailwind CSS
- **Responsive design** optimized for desktop and mobile
- **Database seeding** with authentic House of Games data from BBC show
- **Git workflow** with proper version control

### 🚧 In Progress
- Question management interface completion
- Quiz session builder functionality
- Player management system
- Real-time data integration with backend APIs

### 🎯 Next Phase Goals
- AI question generation integration
- Quiz session execution interface
- Player analytics and reporting dashboard
- Mobile app optimization
- Performance optimization and testing

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