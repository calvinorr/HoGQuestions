import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import gamesRouter from './routes/games'
import questionsRouter from './routes/questions'
import quizSessionsRouter from './routes/quiz-sessions'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json({ limit: '10mb' }))

app.get('/', (req, res) => {
  res.json({ 
    message: 'House of Games API Server',
    version: '1.0.0',
    endpoints: {
      games: '/api/games',
      questions: '/api/questions',
      quizSessions: '/api/quiz-sessions'
    }
  })
})

app.use('/api/games', gamesRouter)
app.use('/api/questions', questionsRouter)
app.use('/api/quiz-sessions', quizSessionsRouter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', error)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📋 API Documentation: http://localhost:${PORT}/`)
})